import styled from "styled-components";

export const DivHome = styled.div`
    display: flex;
    justify-content: space-between;
`

export const DivContent = styled.div`
    margin-top: 5rem;
    width: 60%;
    @media only screen and (max-width: 430px) {
        width: 100%;
    } 
`


export const Imagem = styled.img`
    height: 80vh;
    @media only screen and (max-width: 430px) {
        position: fixed;
        top: 10rem;
        z-index: -1;
    } 

`


