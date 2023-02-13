import React from "react";
import {Container} from './styles.jsx'

function QuestionCard({title,subject}) {

    return(
        <Container>
            <p>{title}</p>
            <p>{subject}</p>
        </Container>
    )
}

export default QuestionCard