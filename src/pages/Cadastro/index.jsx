import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container} from "./styles";

export function Cadastro() {
    return (
        <Container>
            <h1>Criar conta</h1>
            <p>Email</p>
            <Input/>
            <p>Senha</p>
            <Input/>
            <Button> Cadastrar </Button>
        </Container>
    )
}