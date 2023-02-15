import React from "react";
import {HiTrash} from 'react-icons/hi'
import {FiEdit} from 'react-icons/fi'
import Button from '../../Button/index.jsx'
import RoundButton from '../../RoundButton/index.jsx'
import QuestionCard from '../QuestionCard/index.jsx'
import {Container} from './styles.jsx'
import { api } from "../../../services/api.js";

function QuestionContainer({user,questions,}) {
    const refresh = () => {return window.location.reload(true)}

    const deleteMember = (id) => {
        const confirma = window.confirm("Deseja mesmo excluir essa questão?")
        if (confirma) {
            api.delete(`question/delete/${id}`)
        .then(() => {
            window.alert(`Questão deletada com sucesso!`)
            refresh()
        })
        }
        }
    
    return (
            <Container user={user.is_teacher}>
                {(user.is_teacher === true)
                ? 
                <>
                <div className='questions__container'>
                {questions.filter(((item) => {return item.owner.id === user.id})).map((item, index) =>{return (
                    <div className='question__content'>
                        <QuestionCard key={index} title={item.title} subject={item.subject} />
                        <div className='admin__buttons'>
                                <RoundButton  className='round__button' url={`/QuestionUpdate/${item.id}`}><FiEdit /></RoundButton>
                                <RoundButton className='round__button' type="button" onClick={() => {deleteMember(item.id)}}><HiTrash /></RoundButton>
                        </div>
                    </div>
                )})}  
                </div>
                <Button  className='button' url="/QuestionCreate" >Adicionar Questão</Button>
                </>
                :
                <div className='questions__container'>
                    {questions.map((item,index)=>{return (
                        <div className='question__content'>
                            <QuestionCard key={index} title={item.title} subject={item.subject} url={`/QuestionAnswer/${item.id}`} />
                        </div> 
                    )})}
                </div>
                }
            </Container>
        )
    
}

export default QuestionContainer