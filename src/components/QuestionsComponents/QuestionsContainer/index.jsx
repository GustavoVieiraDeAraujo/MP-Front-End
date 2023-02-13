import React from "react";
import {HiTrash} from 'react-icons/hi'
import {FiEdit} from 'react-icons/fi'
import Button from '../../Button/index.jsx'
import RoundButton from '../../RoundButton/index.jsx'
import QuestionCard from '../QuestionCard/index.jsx'
import {Container} from './styles.jsx'

function QuestionContainer({user,questions,}) {
    
    return (
            <Container user={user.is_teacher}>
                {(user.is_teacher === true)
                ? 
                <>
                <div className='questions__container'>
                {questions.filter(((item) => {return item.owner.id === user.id})).map((item, index) =>{return (
                    <div className='question__content'>
                        <QuestionCard key={index} title={item.title} subject={item.subject} OnClick/>
                        <div className='admin__buttons'>
                                <RoundButton  className='round__button' url={`/QuestionUpdate/${item.id}`}><FiEdit /></RoundButton>
                                <RoundButton className='round__button' type="button" onClick={() => {deletePartner(item.id)}}><HiTrash /></RoundButton>
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
                            <QuestionCard key={index} title={item.title} subject={item.subject} />
                        </div> 
                    )})}
                </div>
                }
            </Container>
        )
    
}

export default QuestionContainer