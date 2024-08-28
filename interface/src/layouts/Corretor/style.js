import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 150px;

    @media (max-width: 750px){
        margin-top: auto;
    }
    
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1445px;
    margin: 0 auto;

    @media (max-width: 750px){
        padding: 30px;
    }
`

export const Nome = styled.h1`
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;

    &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 60px;
    background-color: #454545;
    margin-right: 10px;
    }
`