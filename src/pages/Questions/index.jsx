import React, {  useEffect, useState } from "react";
import {Navbar} from "../../components/Navbar";
import QuestionsContainer from "../../components/QuestionsComponents/QuestionsContainer";
import { useUserContext } from "../../context/useUserContext";
import { api } from "../../services/api";
import { Container} from "./styles";


export function Questions() {
    const [questions, setQuestions] = useState([])
    const {user} = useUserContext()
    console.log(user)
    
    useEffect(()=>{
        api.get('/question/index')
        .then(response => {return setQuestions(response.data)})
    },[])

    return (
        <Container>
            <Navbar/>
            <h1>Suas Questões</h1>
            <QuestionsContainer user={user} questions={questions} setQuestions = {setQuestions}/>
        </Container>
    )
}