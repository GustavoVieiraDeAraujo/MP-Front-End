import styled from "styled-components";

export const Container = styled.div`
color: var(--clr-text);
background-color: var(--clr-bg);
width:100vw;
position: fixed;
height: 60px;
z-index:2;
top:0;
left:0;
nav{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    .logout_icon{
        cursor: pointer;
    }
}
ul{
    list-style-type: none;
    overflow:hidden;
    display: flex;
    justify-content: space-around;
    font-weight: 300;
    align-items: center;
    width: 60%;
    .navbar__item {
        list-style-type: none;
    }
}

a {
    text-decoration: none;
    color: var(--clr-primary);
    cursor: pointer;
} 

`