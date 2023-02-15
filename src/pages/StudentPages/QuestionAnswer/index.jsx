/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Navbar } from "../../../components/Navbar";
import { useUserContext } from "../../../context/useUserContext";
import { api } from "../../../services/api";
import { Container} from "./styles";


export function QuestionAnswer() {
    const {user} = useUserContext()
    const [statistic, setStatistic] = useState('')
    const [question, setQuestion] = useState([])
    const [result, setResult] = useState('')
    const [questions_answered, setQuestionsAnswered] = useState(0)
    const [right_answers, setRightAnswers] = useState(0)
    const [wrong_answers, setWrongAnswers] = useState(0)
    const params = useParams();
    
    useEffect(()=>{
        api.get(`question/show/${params.id}`)
        .then(response => {return setQuestion(response.data)})

    },[params])

    
    useEffect(()=>{
        api.get(`statistic/show/${user.id}`)
        .then((response) => {setStatistic(response.data)})
    },[user])

    const sendAnswers = async (e) => {
        e.preventDefault()
        
        if(result){
            setQuestionsAnswered(statistic.questions_answered + 1)
            if (result === question.answer){
                setRightAnswers(statistic.right_answers+1)
                window.alert('acertou!')
            } else {
                setWrongAnswers(statistic.wrong_answers+1)
                window.alert('errou')
            }
                window.alert(`${questions_answered},${right_answers},${wrong_answers}`)
            try {
            await api.patch(`statistic/update/${user.id}`, {
                "statistic": {
                    questions_answered,
                    right_answers,
                    wrong_answers
                }})
            
    }
            catch (err) {
                window.alert(err.response.data? err.response.data : 'Algum erro ocorreu. Por favor, tente novamente.')
            }
        }
            else{
                window.alert("prencher todos os campos")
        }
    }
    return (
        <Container>
            <Navbar/>
            <h1>Responder Questão</h1>
            <p>{question.subject}</p>
            <p>{question.title}</p>
            <h2>{question.description}</h2>
            <p>Resposta</p>
            <Input onChangeFunction={setResult}/>
            <Button onClick={sendAnswers}>Enviar Resposta</Button> 
            <Button url="/questoes">Voltar</Button>
        
        </Container>
    )
}