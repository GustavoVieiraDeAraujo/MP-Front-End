import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {Navbar} from "../../components/Navbar";
import { Container} from "./styles";
import { useUserContext } from "../../context/useUserContext";


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useUserContext();

    return (
        <Container>
            <h1>Login</h1>
            <p>Email</p>
            <Input onChangeFunction={setEmail} placeholder="Email"/>
            <p>Senha</p>
            <Input onChangeFunction={setPassword} placeholder="Password" type="password"/>
            <Button onClick={() => {return login(email, password)}}>Entrar</Button>
            <Button url="/Register">Cadastre-se</Button>
        </Container>
    )
}