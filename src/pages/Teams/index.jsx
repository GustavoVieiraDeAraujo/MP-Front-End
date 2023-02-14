import React, {  useEffect, useState } from "react";
import {Navbar} from "../../components/Navbar";
import TeamsContainer from "../../components/TeamsComponents/TeamContainer";
import { useUserContext } from "../../context/useUserContext";
import { api } from "../../services/api";
import { Container} from "./styles";


export function Teams() {
    const [teams, setTeams] = useState([])
    const {user} = useUserContext()

    useEffect(()=>{
        api.get('/team/index')
        .then(response => {return setTeams(response.data)})
    },[])

    return (
        <Container>
            <Navbar/>
            <h1>Suas Turmas</h1>
            <TeamsContainer user={user} teams={teams} setTeams = {setTeams}/>
        </Container>
    )
}