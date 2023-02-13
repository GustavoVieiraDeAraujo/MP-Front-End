import {HiTrash} from 'react-icons/hi'
import {FiEdit} from 'react-icons/fi'
import Button from '../../Button/index.jsx'
import RoundButton from '../../RoundButton/index.jsx'
import QuestionCard from '../QuestionCard/index.jsx'
import {Container} from './styles.jsx'

function QuestionContainer({user,questions,...props}) {
    if(user.is_teacher === true){
        const user_id = user?.id
    }
    
    // const deleteQuestion = (id) => {
    //     let confirma = window.confirm("Deseja mesmo excluir essa questão?")
    //     if (confirma){
    //         api.delete(`question/delete/${id}`)
    //         .then((response) => {
    //             toast.success(`questão deletado`)
    //             setPartners(partners.filter(p => p.id !== id))
    //         }).catch(err => toast.error(err.response.data? err.response.data.message : 'Algum erro ocorreu. Por favor, tente novamente.'))
    //     }
    // }
    return (
            <Container user={user.is_teacher}>
                {(user.is_teacher === true)
                ?
                <>
                <div className='questions__container'>
                {console.log(user.id)}
                {questions.filter(((item) => {return item.user_id === user.id})).map((item, index) =>{return (
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
            // {/* <div className='questions__container'>
            //     <div className='question__content'>
            //         <QuestionCard title={'Questão A'} subject={'Matemática'}/>
            //         <div className='admin__buttons'>
            //             <RoundButton  className='round__button'><FiEdit /></RoundButton>
            //             <RoundButton className='round__button' ><HiTrash /></RoundButton>
            //         </div>
            //     </div>
            //     <QuestionCard title={'Questão B'} subject={'Matemática'}/>
            //     <QuestionCard title={'Questão C'} subject={'Matemática'}/>
            //     <QuestionCard title={'Questão C'} subject={'Matemática'}/>
            // </div>
            // <Button  className='button' url={`/QuestionCreate`} >Adicionar Questão</Button> */}
        
    
}

export default QuestionContainer