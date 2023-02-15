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

h2{
    text-align: center;
}

h3{
    text-align: center;
    color: green;
}

p{
    font-size: var(--title-size);
}

.title{
    margin-top: 150px;
}

.rectangle {
    background-color: var(--clr-bg);
    width: 600px;
}
`