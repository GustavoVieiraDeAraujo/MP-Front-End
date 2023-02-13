import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Navbar } from "../../../components/Navbar";
import { Container} from "./styles";
import { useUserContext } from "../../../context/useUserContext";
import { api } from "../../../services/api";

export function QuestionCreate() {
    const navigate = useNavigate()
    const {user} = useUserContext()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [subject, setSubject] = useState('')
    const [answer, setAnswer] = useState('')
    const user_id = user.id

    const questionCreate = async (e) => {
        e.preventDefault()
        if (title && description && subject && answer && user_id) {
            try {
                const response = await api.post('question/create', {
                        title,
                        description,
                        subject,
                        answer,
                        user_id
                })
                if (response.data){
                    navigate("/questoes")
                }}
            catch (err) {
                window.alert('Algum erro ocorreu. Por favor, tente novamente.')
            }
        } else {
                window.alert("prencher todos os campos")
        }
    }

    return (
        <Container>
            <Navbar/>
            <h1>Criar Questão</h1>
            <p>Título</p>
            <Input onChangeFunction={setTitle}/>
            <p>Assunto</p>
            <Input onChangeFunction={setSubject}/>
            <p>Descrição</p>
            <Input onChangeFunction={setDescription}/>
            <p>Resposta</p>
            <Input onChangeFunction={setAnswer}/>
            <Button onClick={questionCreate}>Criar Questão</Button> 
            <Button url="/questoes">Voltar</Button>
        
        </Container>
    )
}