import styled from "styled-components";

export const Wrapper = styled.div`
   width: 100%;
   
`

export const Container = styled.div`
    display: flex; 
    background-color: blanchedalmond;
    width: 100%;
    height: 630px;

    @media (min-width: 1000px) {
        max-width: 730px;
    }
`



export const Button = styled.button`
    width: 100%;
    max-width: 250px;
    height: 70px;
    background-color: black;
    font-weight: 600;
    color: white;
    font-size: 22px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.5s;

    &:hover {
        background: linear-gradient(45deg, #0056b3, #00c6ff);
        transform: translateY(-5px);
    }
`