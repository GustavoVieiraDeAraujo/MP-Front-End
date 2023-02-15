import React, { useState } from "react"
import { Container } from "./styles"
import Input from "../../../components/Input"
import Button from "../../../components/Button"
import { Navbar } from "../../../components/Navbar"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../../../context/useUserContext"
import { api } from "../../../services/api"

export function TeamCreate(){

    const[name, setName] = useState('')

    const {user} = useUserContext()

    let navigate = useNavigate()

    const teamCreate = async (e) => {
        console.log(name,user.id)
        e.preventDefault()
        if (name && user.id) {
            await api.post("team/create",{
            "team": {
                name,
                user_id: user.id
            }})
                navigate('/turmas')
                alert("Sucesso")
            }else{
                    alert("Preencha todos os campos")
        }
    }

    return (
        <Container>
            <Navbar/>
            <h1>CRIAR TURMA</h1>
            <form>
                <Input type="text" placeholder="Nome da turma" onChangeFunction={setName}/>
                <Button onClick={teamCreate}>Criar</Button>
            </form>
        </Container>
    )
}