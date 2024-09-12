import styled from "styled-components";

export const Wrapper = styled.div`
    
`

export const Container = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 750px){
        display: block;
    }
`

export const CardContent = styled.div`
    max-width: 400px;
    height: 100%;
    width: 100%;
    display: flex;
    padding: 30px;
    gap: 40px;
    flex-direction: column;

    @media (max-width: 150px){
        padding: 0;
        gap: 10px;
    }

    @media (max-width: 750px) {
        max-width: 100%;
    }
`
export const Titulo = styled.h1`
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;

    @media (max-width: 450px){
        font-size: 28px;
    }

    @media (max-width: 150px) {
        font-size: 10px
    }
`
export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const CardContainer = styled.div`
    width: 450px;
    height: 630px;

    @media (max-width: 750px){
        width: 100%;
    }
`

export const Contato = styled.div`
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;

    @media (max-width: 450px){
        font-size: 20px;
    }

    @media (max-width: 150px) {
        font-size: 10px;
        font-weight: 300;
        line-height: 10px;
    }
`