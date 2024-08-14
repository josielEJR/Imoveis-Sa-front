import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
    padding: 40px;

    @media (min-width: 1575px) {
        gap: 50px;
        padding: 0;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    background: #000000CC;

    @media (max-width: 1540px) {
        opacity: 1;
        visibility: visible;
    }
`
export const InfoIcon = styled.div`
    position: absolute;
    z-index: 3;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    @media (max-width: 1540px) {
        opacity: 1;
        visibility: visible;
    }
`

export const CardContent = styled.div`
    max-width: 460px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 45px;
    margin-top: auto;
    position: relative;
    opacity: 0;
    z-index: 2;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    @media (max-width: 1540px) {
        opacity: 1;
        visibility: visible;
    }
`

export const CardContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 450px;
    height: 630px;
    padding: 20px;
    display: flex;
    cursor: pointer;
    transition: transform 1.2s ease-in-out, box-shadow 0.5s ease-in-out;

    &:hover ${CardContent}, &:hover ${Overlay}, &:hover ${InfoIcon} {
        opacity: 1;
        visibility: visible;
    }

    @media (min-width: 1000px) {
        width: 100%;
    }

    @media (min-width: 1100px) {
        width: 50%;
    }

    @media (min-width: 1540px) {
        width: 33.33%;

        &:hover {
        transform: scale(1.05); 
        }
    }
`

export const Article = styled.div`
    padding: 10px;
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
`

export const Nome = styled.div`
    font-size: 36px;
    font-weight: 700;
    line-height: 43px;
    padding: 10px;
`

export const Telefone = styled.div`
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    padding: 10px;
`

export const Email = styled.div`
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    padding: 10px;
`

export const ContainerIcon = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;  
    position: absolute;

    @media (max-width: 1540px) {
        display: flex;
    }
`

export const Direita = styled.button`
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #f2f2f2;
    z-index: 2;
    color: black;

    @media (max-width: 1540px) {
        display: flex;
        justify-content: space-between;
    }
`

export const Esquerda = styled.button`
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #f2f2f2;
    z-index: 2;
    color: black;
    
    @media (max-width: 1540px) {
        display: flex;
        justify-content: space-between;
    }
`
