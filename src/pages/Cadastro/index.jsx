import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "./styles";
import { useState } from 'react';

export function Cadastro() {

    /*const [userType, setUserType] = useState([false,false]);*/

    /*const handleOnChange = (position) => {
        const updatedCheckedState = user.map((item, index)
        index === position ? true : false
        );

        setUserType(updatedCheckedState);
    };*/

    return (
        <Container>
            <h1>Criar conta</h1>
            <p>Email</p>
            <Input/>
            <p>Senha</p>
            <Input/>
            <div className="checkbox__container">
                <div className="checkboxAndUser">
                    <input id='checkboxStudent' type="checkbox" /*checked={userType[0]}
                    onChange{() => handleOnChange(0)} */></input>
                    <label for="checkboxTeacher">Aluno</label>
                </div>
                <div className="checkboxAndUser">
                    <input id="checkboxTeacher" type="checkbox"/*checked={userType[1]}
                    onChange{() => handleOnChange(1)} */></input>
                    <label for="checkboxTeacher">Professor</label>
                </div>
            </div>
            <Button> Cadastrar </Button>
            <Button url="/"> Voltar à página de Login </Button>
        </Container>
    )
}