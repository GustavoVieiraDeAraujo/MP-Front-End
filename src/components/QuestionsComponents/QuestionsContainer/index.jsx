import QuestionCard from '../QuestionCard/index.jsx'
import {Container} from './styles.jsx'

const QuestionContainer =  () =>{

    // useEffect(()=>{
    //     api.get('/questions/index').then(response => setProjects(response.data))
    // },[])

    return(
        <Container>
            {/* Map das questões aqui*/}
            {/* {projects.map((item,index)=>(
                <QuestionCard key={index} title={item.title} subject={item.subject} OnClick/>
            ))}  */}
            <QuestionCard title={'Questão A'} subject={'Matemática'}/>
            <QuestionCard title={'Questão B'} subject={'Matemática'}/>
            <QuestionCard title={'Questão C'} subject={'Matemática'}/>
            <QuestionCard title={'Questão C'} subject={'Matemática'}/>
        </Container>
    )
}

export default QuestionContainer