import React from "react";
import { Link } from "react-router-dom";
import {Container} from './styles.jsx'

function QuestionCard({title,subject,url}) {

    return(
        <>
        { url ?
        <Link to={url} style={{textDecoration: "none", textAlign: "center", color:'black'}}>
            <Container >
            <p>{title}</p>
            <p>{subject}</p>
            </Container>
        </Link> 
        : 
        <Container >
            <p>{title}</p>
            <p>{subject}</p>
        </Container>}
        </>
    )
}

export default QuestionCard