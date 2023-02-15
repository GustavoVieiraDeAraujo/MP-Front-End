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
    const [question, setQuestion] = useState([])
    const [result, setResult] = useState('')
    const [questionsAnswered, setQuestionsAnswered] = useState(0)
    const [rightAnswers, setRightAnswers] = useState(0)
    const [wrongAnswers, setWrongAnswers] = useState(0)
    const [clicked,setClicked] = useState(false)
    const params = useParams();
    
    useEffect(()=>{
        api.get(`question/show/${params.id}`)
        .then(response => {return setQuestion(response.data)})

    },[params])

    
    useEffect(()=>{
        api.get(`statistic/show/${user.id}`)
        .then((response) => {
            setQuestionsAnswered(response.data.questions_answered)
            setRightAnswers(response.data.right_answers)
            setWrongAnswers(response.data.wrong_answers)
        })
    },[user])


    const sendAnswers = async (e) => {
        e.preventDefault()
        
        if(result){
            setClicked(true)
            const questions_answered = questionsAnswered + 1
            let right_answers = rightAnswers
            let wrong_answers= wrongAnswers
            if(result === question.answer){
                right_answers +=1 
            } else {
                wrong_answers +=1 
            }
            setQuestionsAnswered(questions_answered+1)

            window.alert("Resposta enviada")
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
        <Container clicked={clicked}>
            <Navbar/>
            <h1>Responder Questão</h1>
            <p>{question.subject}</p>
            <p>{question.title}</p>
            <h2>{question.description}</h2>
            <p>Resposta</p>
            <Input onChangeFunction={setResult}/>
            <Button onClick={sendAnswers} className="send__button">Enviar Resposta</Button> 
            {clicked?
            <div className="gabarito">
                
                <b><p>Gabarito:</p></b>
                <p>{question.answer}</p>
                
            </div>
            :
            <></>}
            <Button url="/questoes">Voltar</Button>
        
        </Container>
    )
}