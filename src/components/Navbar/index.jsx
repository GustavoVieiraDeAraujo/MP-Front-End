import React from "react";
import {AiOutlineLogin} from 'react-icons/ai'
import { Container } from "./styles";
import { useUserContext } from "../../context/useUserContext";
// import {Container} from './styles'

export function Navbar() {
    const {user, logout} = useUserContext()

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
                { Object.keys(user).length ? <div onClick={() => {return logout()}}><AiOutlineLogin className='logout_icon'/></div>:<></>}
            </nav>
        </Container>
    )
}
