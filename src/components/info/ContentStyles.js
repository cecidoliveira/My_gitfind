import styled from "styled-components";

export const DivAlinha = styled.div`
    @media only screen and (max-width: 430px) {
        display: flex;
        align-items: center;
    } 
`

export const DivContent = styled.div`
    display: flex;
    align-items: center;

    margin: 5rem 0;
    color: #7B7D80;
    
    @media only screen and (max-width: 430px) {
        justify-content: center;
        margin: 4rem 0;
    } 

`
export const DivContentNF = styled.div`
    text-align: center;
    margin: 8rem 25rem 0 0;
    color: #7B7D80;

    p{
        margin: 2rem 0;
    }
    img{
        width: 40%
    }

    @media only screen and (min-width: 1600px) {
        margin: 10rem 20rem 0 0;
    } 
    @media only screen and (max-width: 430px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 8rem 0rem 0 0;
    } 

`

export const DivInfo = styled.div`
    margin: 0 2rem;

`

export const Title = styled.h3`
    font-size: 3rem;
    @media only screen and (min-width: 1600px) {
        font-size: 4rem;
    } 
`
export const Paragraph = styled.p`
    font-size: 1.4rem;
    @media only screen and (min-width: 1600px) {
        font-size: 1.8rem;
    } 
`

export const Imagem = styled.img`
    width: 15%;
    border: #7B7D80 solid;
    border-radius: 50%;
`





