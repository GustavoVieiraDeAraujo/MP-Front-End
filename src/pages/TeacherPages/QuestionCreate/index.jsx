import React from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Navbar } from "../../../components/Navbar";
import { Container} from "./styles";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react'

export function QuestionCreate() {
    let navigate = useNavigate()
    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [answer, setAnswer] = useState('')

    // const questionCreate = async (e) => {
    //     e.preventDefault()
    //     if (title && description && answer) {
    //         try {
    //             const response = await api.post("questions/create", {
    //                 title,
    //                 description,
    //                 answer
    //             })
    //             if (response.data){
    //             navigate("/questoes")
    //         }}
    //         catch (err) {
    //             toast.error(err.response.data ? err.response.data : 'Algum erro ocorreu. Por favor, tente novamente.')
    //         }
    //     }
    //     else {
    //         toast.warn("prencher todos os campos")
    //     }
    // }
    return (
        <Container>
            <Navbar/>
            <h1>Criar Questão</h1>
            <p>Título</p>
            <Input />
            <p>Descrição</p>
            <Input/>
            <p>Resposta</p>
            <Input/>
            <Button>Criar Questão</Button>
            <Button url={"/questoes"}>Voltar</Button>

            {/* 
            <Navbar/>
            <h1>Criar Questão</h1>
            <p>Título</p>
            <Input setValue={setTitle}/>
            <p>Descrição</p>
            <Input setValue={setDescription}/>
            <p>Resposta</p>
            <Input setValue={setAnswer}/>
            <Button onClick={questionCreate} >Criar Questão</Button> 
            <Button>Voltar</Button>
            */}
        </Container>
    )
}