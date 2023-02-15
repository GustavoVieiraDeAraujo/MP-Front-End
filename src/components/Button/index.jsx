/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles"


function Button({url, children, ...props}) {
    return(
        <>
        { url ?
        <Link to={url} style={{textDecoration: "none", textAlign: "center"}}>

        <Container {...props}>
            {children}
        </Container>
        </Link> 
        : 
        <Container {...props}>
            {children}
        </Container>}
        </>
    )
}

export default Button
