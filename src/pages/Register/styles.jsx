import styled from "styled-components";


export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100vh;
    color:black;

h1{
    font-size: var(--page-title-size);
}

p{
    font-size: var(--title-size);
}

.title{
    margin-top: 150px;
}

.checkbox__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

input[type=radio] {
    width: 3vh;
    height: 3vh;
}

.checkboxAndUser {
    display: flex;
    flex-direction: row;
    margin-right: 25px;
}

form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

label{
    margin-top: 20px;
}
`