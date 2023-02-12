import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {Navbar} from "../../components/Navbar";
import { Container} from "./styles";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <Container>
            <Navbar/>
            <h1>Login</h1>
            <p>Email</p>
            <Input/>
            <p>Senha</p>
            <Input/>
            <Button> Entrar</Button>
            <Button url={"/Cadastro"}>Cadastre-se</Button>
            <Navbar/>
        </Container>
    )
}