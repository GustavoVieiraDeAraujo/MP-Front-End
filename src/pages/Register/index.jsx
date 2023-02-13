import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { api } from "../../services/api";

export function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [enrollment, setEnrollment] = useState('')
    const [formValues, setFormValues] = useState({})

    let navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const userCreate = async (e) => {
        e.preventDefault()
        console.log(name,email,password,enrollment,formValues.radioUser)
        if (name && email && password && enrollment && formValues.radioUser) {
            const response = await api.post("user/create",{
                name,
                email,
                enrollment,
                password,
                is_teacher: 'teacher' === formValues.radioUser,
                is_student: 'student' === formValues.radioUser,
                is_admin: false
            })
            if (response.data){
                navigate('/')
                alert("Sucesso")
            }
        }
    }

    return (
        <Container>
            <h1>Criar conta</h1>
            <form>
                <Input type='text' placeholder='Nome do usuário' onChangeFunction={setName}></Input>
                <Input type='text' placeholder='E-mail do usuário' onChangeFunction={setEmail}></Input>
                <Input type='text' placeholder='Matrícula do usuário' onChangeFunction={setEnrollment}></Input>
                <Input type='text' placeholder='Senha' onChangeFunction={setPassword} ></Input>
                <div className="checkbox__container">
                    <div className="checkboxAndUser">
                    <Input 
                        id = {"checkboxStudent"}
                        type={"radio"} 
                        name={"radioUser"}
                        onChange={handleInputChange} 
                        value={'student'} 
                    />
                        <label for="checkboxStudent">Aluno</label>
                    </div>
                    <div className="checkboxAndUser">
                    <Input 
                        id = {"checkboxTeacher"}
                        type={"radio"} 
                        name={"radioUser"}
                        onChange={handleInputChange} 
                        value={'teacher'} 
                    />
                        <label for="checkboxTeacher">Professor</label>
                    </div>
                </div>
                <Button onClick={userCreate}> Cadastrar </Button>
            </form>
            <Button url="/"> Voltar à página de Login </Button>
        </Container>
    )
}