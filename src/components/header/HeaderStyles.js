import styled from "styled-components";

export const DivHeader = styled.header`
    display:flex;
    justify-content: center;
    height: 8rem;
    align-items: center;

    background-color: #23272D;

    @media only screen and (max-width: 430px) {
        position: fixed;
        width: 100%;
    } 
`

export const Title = styled.h1`
    color: #fefefc;
    padding-top: 1rem;
    font-size: 4rem;   
`

export const Imagem = styled.img`
    height: 80%;
`

