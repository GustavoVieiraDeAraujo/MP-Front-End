import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "./styles";
import { api } from "../../services/api";

export function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [enrollment, setEnrollment] = useState('')
    const [formValues, setFormValues] = useState({})

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const userCreate = async (e) => {
        e.preventDefault()
        if (name && email && enrollment && password && formValues.radioUser) {
            await api.post("user/create",{
                "user": {
                name,
                email,
                enrollment,
                password,
                is_teacher: formValues.radioUser === 'teacher',
                is_student: formValues.radioUser === 'student',
                is_admin: false
        }})
                navigate('/')
                alert("Sucesso")
            }else{
                    alert("Preencha todos os campos")
        }
    }

    return (
        <Container>
            <h1 className="title">Criar conta</h1>
            <form>
                <Input type='text' placeholder='Nome do usuário' onChangeFunction={setName} />
                <Input type='text' placeholder='E-mail do usuário' onChangeFunction={setEmail} />
                <Input type='text' placeholder='Matrícula do usuário' onChangeFunction={setEnrollment} />
                <Input type='password' placeholder='Senha' onChangeFunction={setPassword}  />
                <div className="checkbox__container">
                    <div className="checkboxAndUser">
                    <Input 
                        id = "checkboxStudent"
                        type="radio" 
                        name="radioUser"
                        onChange={handleInputChange} 
                        value="student" 
                    />
                        <label htmlFor="checkboxStudent">Aluno</label>
                    </div>
                    <div className="checkboxAndUser">
                    <Input 
                        id = "checkboxTeacher"
                        type="radio" 
                        name="radioUser"
                        onChange={handleInputChange} 
                        value="teacher" 
                    />
                        <label htmlFor="checkboxTeacher">Professor</label>
                    </div>
                </div>
                <Button onClick={userCreate}> Cadastrar </Button>
            </form>
            <Button url="/"> Voltar à página de Login </Button>
        </Container>
    )
}