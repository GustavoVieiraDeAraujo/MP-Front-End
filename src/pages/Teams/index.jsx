import React, {  useEffect, useState } from "react";
import {Navbar} from "../../components/Navbar";
import QuestionsContainer from "../../components/QuestionsComponents/QuestionsContainer";
import TeamsContainer from "../../components/TeamsComponents/TeamContainer";
import { useUserContext } from "../../context/useUserContext";
import { api } from "../../services/api";
import { Container} from "./styles";


export function Teams() {
    const [Teams, setTeams] = useState([])
    const {user} = useUserContext()

    useEffect(()=>{
        api.get('/team/index')
        .then(response => setTeams(response.data))
    },[])

    return (
        <Container>
            <Navbar/>
            <h1>Suas Turmas</h1>
            <TeamsContainer user={user} teams={Teams} setTeams = {setTeams}/>
        </Container>
    )
}