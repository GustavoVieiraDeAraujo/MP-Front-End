import Button from '../../Button/index.jsx'
import RoundButton from '../../RoundButton/index.jsx'
import QuestionCard from '../QuestionCard/index.jsx'
import {Container} from './styles.jsx'
import {HiTrash} from 'react-icons/hi'
import {FiEdit} from 'react-icons/fi'
const QuestionContainer =  () =>{

    // useEffect(()=>{
    //     api.get('/questions/index').then(response => setProjects(response.data))
    // },[])

    // const {user} = useUserContext()

    const deletePartner = (id) => {
        let confirma = window.confirm("Deseja mesmo excluir essa questão?")
        if (confirma){
            api.delete(`question/delete/${id}`)
            .then((response) => {
                toast.success(`questão deletado`)
                setPartners(partners.filter(p => p.id !== id))
            }).catch(err => toast.error(err.response.data? err.response.data.message : 'Algum erro ocorreu. Por favor, tente novamente.'))
        }
    }
    return(
        <Container>
            {/* <Container user={user.is_teacher === true || user.is_admin === true}> */}
            {/* Map das questões aqui*/}
            {/* 
            if user.is_student === true || user.is_admin === true
            :
            {projects.map((item,index)=>(
                <QuestionCard key={index} title={item.title} subject={item.subject} OnClick/>
            ))}  
            ?
            {members.filter(((item) => item.user.id === user.id)).map((item, index) =>(
                <QuestionCard key={index} title={item.title} subject={item.subject} OnClick/>
                <div className='admin__buttons'>
                    <RoundButton  className='round__button' url={`/QuestionUpdate/${item.id}`}><FiEdit /></RoundButton>
                    <RoundButton className='round__button' type="button" onClick={() => {deletePartner(item.id)}}><HiTrash /></RoundButton>
                </div>
            ))}
            
            */}
            <div className='questions__container'>
                <div className='question__content'>
                    <QuestionCard title={'Questão A'} subject={'Matemática'}/>
                    <div className='admin__buttons'>
                        <RoundButton  className='round__button'><FiEdit /></RoundButton>
                        <RoundButton className='round__button' ><HiTrash /></RoundButton>
                    </div>
                </div>
                <QuestionCard title={'Questão B'} subject={'Matemática'}/>
                <QuestionCard title={'Questão C'} subject={'Matemática'}/>
                <QuestionCard title={'Questão C'} subject={'Matemática'}/>
            </div>
            <Button  className='button' url={`/QuestionCreate`} >Adicionar Questão</Button>
        </Container>
    )
}

export default QuestionContainer