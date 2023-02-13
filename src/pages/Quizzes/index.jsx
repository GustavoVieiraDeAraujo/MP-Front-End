import React, {  useEffect, useState } from "react";
import {Navbar} from "../../components/Navbar";
import QuestionsContainer from "../../components/QuestionsComponents/QuestionsContainer";
import QuizContainer from "../../components/QuizComponents/QuizContainer";
import TeamsContainer from "../../components/TeamsComponents/TeamContainer";
import { useUserContext } from "../../context/useUserContext";
import { api } from "../../services/api";
import { Container} from "./styles";


export function Quiz() {
    const [quiz, setQuiz] = useState([])
    const {user} = useUserContext()

    useEffect(()=>{
        api.get('/quiz/index')
        .then(response => setQuiz(response.data))
    },[])

    return (
        <Container>
            <Navbar/>
            <h1>Suas Provas</h1>
            <QuizContainer user={user} quiz={quiz} setQuiz = {setQuiz}/>
        </Container>
    )
}