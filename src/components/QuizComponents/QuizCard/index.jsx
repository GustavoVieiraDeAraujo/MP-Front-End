import React from "react";
import {Container} from './styles.jsx'

function QuizCard({title,subject}) {

    return(
        <Container>
            <div className='quiz__content'>
                <p>{title}</p>
                <p>{subject}</p>
            </div>
        </Container>
    )
}

export default QuizCard