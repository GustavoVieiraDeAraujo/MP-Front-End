import React from "react";
import TeamCard from "../TeamCard/index.jsx";
import {Container} from './styles.jsx';
import Button from "../../Button/index.jsx";

function TeamsContainer({user,teams}) {
    
    return (
            <Container user={user.is_teacher}>
                <div className='teams__container'>
                {teams.map((item,index)=>{return (
                    <div className='teams__content'>
                        <TeamCard key={index} name={item.name}  />
                    </div> 
                )})}
                </div>
                {user.is_teacher
                ?
                    <Button url="/TeamCreate">Criar Turma</Button>
                :
                    <h4></h4>
                }
            </Container>
        )
    
}

export default TeamsContainer