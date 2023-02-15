import React from "react";
import {Container} from './styles.jsx'
import { Link } from "react-router-dom";

function TeamCard({name, url}) {

    return(
        <>
        { url ?
        <Link to={url} style={{textDecoration:"none",textAlign:"center",color:"black"}}>
        <Container>
            <div className='team__content'>
                <p>{name}</p>
            </div>
        </Container>
        </Link>
            :
        <Container>
            <div className='team__content'>
                <p>{name}</p>
            </div>
        </Container>
        }
        </>
    )
}

export default TeamCard