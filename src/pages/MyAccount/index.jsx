import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Navbar } from "../../components/Navbar"
import { api } from "../../services/api"
import { useParams } from "react-router-dom";
import { useUserContext } from "../../context/useUserContext";
import Button from "../../components/Button"

export function MyAccount(){

    const {user} = useUserContext()
    const [statistic, setStatistic] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [enrollment, setEnrollment] = useState('')

    useEffect ( () => {
        api.get(`statistic/show/${user.id}`).then((response) => {
            setStatistic(response.data)
        })
    },[user])

    useEffect ( () => {
        api.get(`user/show/${user.id}`).then((response) => {
            setName(response.data.name)
            setEmail(response.data.email)
            setEnrollment(response.data.enrollment)
        })
    },[user])

    return(
        <Container>
            <Navbar/>
            <h1 className="title">MINHA CONTA</h1>
            <div className="rectangle">
                <h2>{name}</h2>
            </div>
            <h2>Matrícula: {enrollment}</h2>
            <h2>E-mail: {email}</h2>
            <h2>Questões respondidas: {statistic.questions_answered}</h2>
            <ul>
                <li>Questões acertadas: {statistic.right_answers}</li>
                <li>Questões erradas: {statistic.wrong_answers}</li>
            </ul>
            <Button url='/UserEdit'>Editar</Button>
        </Container>
    )
}