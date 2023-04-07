import styled from "styled-components";

export const Input_text = styled.input`
    width: 30.7rem;
    height: 4.2rem;

    background-color: #111317;
    font-size: 1.8rem;
    color: #5F6367;
    border: 2px solid #5F6367;
    border-radius: 3rem;
    padding-left: 1rem;
    margin-right: 2rem;
    @media only screen and (min-width: 1600px) {
        font-size: 2rem;
        width: 50.7rem;
        height: 5.2rem;
    } 
    @media only screen and (max-width: 430px) {
        margin: 5rem 0 1rem;
    } 
`
export const DivSearch = styled.div`
    @media only screen and (max-width: 430px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
`

export const Input_button = styled.input`
    width: 12rem;
    height: 4.2rem;

    background-color: #23272D;
    font-size: 1.8rem;
    font-weight: 600;
    color: #5F6367;
    border: 2px solid #5F6367;
    border-radius: 3rem;

    @media only screen and (min-width: 1600px) {
        font-size: 2rem;
        width: 15rem;
        height: 5.2rem;
    } 
`




