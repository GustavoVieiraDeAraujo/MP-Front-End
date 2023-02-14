import React,{ useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Navbar } from "../../../components/Navbar";
import { Container} from "./styles";
import { api } from "../../../services/api";
import { useUserContext } from "../../../context/useUserContext";

export function QuestionUpdate() {
    const navigate = useNavigate()
    const {id} = useParams()
    const {user} = useUserContext()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [subject, setSubject] = useState('')
    const [answer, setAnswer] = useState('')
    const user_id = user.id

    const questionUpdate = async (e) => {
        e.preventDefault()
        if(title && description && subject && answer){
            try {
            await api.patch(`question/update/${id}`, {
                "question": {
                    title,
                    description,
                    subject,
                    answer,
                    user_id
        }})
        navigate("/questoes")
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
            <h1>Atualizar Questão</h1>
            <p>Título</p>
            <Input  onChangeFunction={setTitle}/>
            <p>Descrição</p>
            <Input  onChangeFunction={setDescription}/>
            <p>Assunto</p>
            <Input  onChangeFunction={setSubject}/>
            <p>Resposta</p>
            <Input  onChangeFunction={setAnswer}/>
            <Button onClick={questionUpdate}>Atualizar Questão</Button> 
            <Button url="/questoes">Voltar</Button>
        </Container>
    )
}