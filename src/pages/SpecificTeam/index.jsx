import React from "react";
import { Container } from "./styles"
import { Navbar } from "../../components/Navbar"
import SpecificTeamContainer from "../../components/TeamsComponents/SpecificTeamContainer"

export function SpecificTeam(){


    return(
        <Container>
            <Navbar/>
            <SpecificTeamContainer/>
        </Container>
    )
}