import styled from "styled-components";

export const DivRepo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 35vh;
    @media only screen and (min-width: 1600px) {
        height: 50vh;
    } 
`
export const DivList = styled.div`
    width: 97%;
    height: 30vh;
    overflow-y: auto;

     /* scroll */
     ::-webkit-scrollbar {
        width: 9px;
    }
    ::-webkit-scrollbar-track {
        background-color: #23272D;
        border-radius: 0.3rem;         
    }
    ::-webkit-scrollbar-thumb {
        background-color: #7B7D80;
        border-radius: 0.4rem;     
    }

    @media only screen and (min-width: 1600px) {
        height: 45vh;
    } 
`
export const DivTitleRepo = styled.div`
    display: flex;
    flex-direction: row;
`

export const Paragraph = styled.p`
        color: #111317;
        font-weight: 800;
        height:60%;
        margin: 0 1rem;
        padding:  0.2rem 0.5rem;
        font-size: 2rem;
        background-color: #7B7D80;
        border-radius: 5rem;
`


export const Title = styled.h3`
    color: #7B7D80;
    font-size: 3rem;
    margin-bottom: 1rem;
    @media only screen and (min-width: 1600px) {
        font-size: 4rem;
    } 
`


export const TitleRepo = styled.a`
    display: block;
    text-decoration: none;
    font-weight: 700;
    color: #4264A4;
    font-size: 2.5rem;
    padding: 1rem 5rem;
`





