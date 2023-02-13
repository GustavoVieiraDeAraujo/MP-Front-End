import {Container} from './styles.jsx'

function QuestionCard({title,subject}) {

    return(
        <Container>
            {/* <div className='question__container'> */}
                <p>{title}</p>
                <p>{subject}</p>
            {/* </div> */}
        </Container>
    )
}

export default QuestionCard