import React from "react";
import {Navbar} from "../../components/Navbar";
import QuestionsContainer from "../../components/QuestionsComponents/QuestionsContainer";
import { Container} from "./styles";


export function Questoes() {

    return (
        <Container>
            <Navbar/>
            <h1>Suas Questões</h1>
            <QuestionsContainer/>
        </Container>
    )
}