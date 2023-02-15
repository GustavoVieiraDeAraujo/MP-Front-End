import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./styles";
import { Navbar } from "../../components/Navbar";
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useUserContext } from "../../context/useUserContext";

export function UserUpdate(){

const {id} = useParams()
const {user} = useUserContext()
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [enrollment, setEnrollment] = useState('')

let navigate = useNavigate()

const userUpdate = async(e) => {
    e.preventDefault()
    if (name && email && enrollment){
        try{
            const response = await api.patch(`user/update/${id}`, {
                name,
                email,
                enrollment
            })
        if (response.data){
            alert("Editado com sucesso")
            navigate('/MyAccount')
        }
        }
        catch(err){
            alert(err.response.data? err.response.data : "Algum erro ocorreu. Tente novamente")
        }
    } else {
        alert("Preencher todos os campos")
    }
}

useEffect ( () => {
    api.get(`user/show/${user.id}`).then((response) => {
        setName(response.data.name)
        setEmail(response.data.email)
        setEnrollment(response.data.enrollment)
    })
},[])

    return(
        <Container>
            <Navbar/>
            <h1 className="title">Editar conta</h1>
            <form>
                <Input type="text" placeholder="Nome"
                onChangeFunction={setName} value={name}></Input>
                <Input type="text" placeholder="E-mail"
                onChangeFunction={setEmail} value={email}></Input>
                <Input type="text" placeholder="Matrícula"
                onChangeFunction={setEnrollment} value={enrollment}></Input>
                <Button onClick={userUpdate}>Editar</Button>
            </form>
        </Container>
    )
}