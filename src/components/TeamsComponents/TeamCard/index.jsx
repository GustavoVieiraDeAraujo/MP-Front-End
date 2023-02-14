import React from "react";
import {Container} from './styles.jsx'

function TeamCard({name}) {

    return(
        <Container>
            <div className='team__content'>
                <p>{name}</p>
            </div>
        </Container>
    )
}

export default TeamCard