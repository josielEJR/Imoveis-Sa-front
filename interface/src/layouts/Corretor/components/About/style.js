import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
`

export const Container = styled.div`
    display: flex;

    @media (max-width: 750px){
        display: block;
    }
`

export const CardContent = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1000px;
    display: flex;
    margin-top: auto;
    padding: 30px;
    gap: 40px;
    flex-direction: column;

    @media (max-width: 150px){
        padding: 0;
        gap: 10px;
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
`

export const CardContainer = styled.div`
    width: 450px;

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