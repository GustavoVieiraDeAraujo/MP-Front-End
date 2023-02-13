// import React from "react";
// import Button from "../../../components/Button";
// import Input from "../../../components/Input";
// import { Navbar } from "../../../components/Navbar";
// import { Container} from "./styles";
// import { useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useState } from 'react'

// export function QuestionCreate() {
//     let navigate = useNavigate()
//     const {id} = useParams()
//     const {user} = useContext()
//     const [title, setTitle] = useState('')
//     const [description, setDescription] = useState('')
//     const [answer, setAnswer] = useState('')
//     const user_id = user.id

//     const questionUpdate = async (e) => {
//         e.preventDefault()
//         if(title && description && answer){
//             try {
//             const response = await api.patch(`question/update/${id}`, {
//                 title,
//                 description,
//                 answer,
//                 user_id
//             })
//             }
//             catch (err) {
//                 toast.error(err.response.data? err.response.data : 'Algum erro ocorreu. Por favor, tente novamente.')
//             }
//         }
//             else{
//                 toast.warn("prencher todos os campos")
//         }
//     }
//     return (
//         <Container>
//             <Navbar/>
//             <h1>Criar Questão</h1>
//             <p>Título</p>
//             <Input setValue={setTitle}/>
//             <p>Descrição</p>
//             <Input setValue={setDescription}/>
//             <p>Resposta</p>
//             <Input setValue={setAnswer}/>
//             <Button onClick={questionUpdate}>Criar Questão</Button> 
//             <Button>Voltar</Button>
//         </Container>
//     )
// }