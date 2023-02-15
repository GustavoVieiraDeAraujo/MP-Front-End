import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width: 100%;
    text-align: center;
    .send__button{
        display:${(props)=> {return props.clicked? 'none' : 'flex'}};
    }
    .gabarito{
        display: flex;
        p{
            margin: 10px;
        }
    }
` 