import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
.questions__container{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    gap:50px;
}
.admin__buttons{
    display:flex;
    justify-content: center;
    align-items: center;
}
/* .button {
    display: ${(props)=> {return props.user? 'flex' : 'none'}};
} */
`