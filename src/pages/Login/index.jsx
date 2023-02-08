import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container} from "./styles";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <Container>
            <h1>Login</h1>
            <p>Email</p>
            <Input/>
            <p>Senha</p>
            <Input/>
            <Button> Entrar</Button>
            <Link to="/cadastro">Cadastre-se</Link>
        </Container>
    )
}