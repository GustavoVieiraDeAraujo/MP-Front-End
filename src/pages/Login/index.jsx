import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {Navbar} from "../../components/Navbar";
import { Container} from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../contex/useUserContext";





export function Login() {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, user} = useUserContext();

    return (
        <Container>
            <Navbar/>
            <h1>Login</h1>
            <p>Email</p>
            <Input onChangeFunction={setEmail} placeholder="Email"/>
            <p>Senha</p>
            <Input onChangeFunction={setPassword} placeholder="Password"/>
            <Button onClick={() => console.log(login)}> Entrar</Button>
            <Button url={"/Register"}>Cadastre-se</Button>
            <Navbar/>
        </Container>
    )
}