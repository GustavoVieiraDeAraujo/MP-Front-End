import React from "react";
import { Container } from "./styles";
// import {Container} from './styles'

export function Navbar() {

    return(
        <Container>
            <nav className="navbar__container">
                <ul className="navbar__menu">
                    <li className="navbar__item">
                    <b><a href="/turmas" className="navbar__link">TURMAS</a></b>
                    </li>
                    <li className="navbar__item">
                    <b><a href="/provas" className="navbar__link">PROVAS</a></b>
                    </li>
                    <li className="navbar__item">
                    <b><a href="/questoes" className="navbar__link">QUESTÕES</a></b>
                    </li>
                    <li className="navbar__item">
                    <b><a href="/minhaconta" className="navbar__link">MINHA CONTA</a></b>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}
