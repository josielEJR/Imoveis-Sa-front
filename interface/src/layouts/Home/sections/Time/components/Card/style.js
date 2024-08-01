import styled, { keyframes } from "styled-components";

export const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    gap: 40px;

    @media (max-width: 450px) {
        gap: 0;
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
`

export const CardContent = styled.div`
    max-width: 460px;
    display: flex;
    flex-direction: column;
    gap: 45px;
    margin-top: auto;
    position: relative;
    opacity: 0;
    z-index: 2;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
`
 
export const CardContainer = styled.div`
    position: relative;
    color: white;
    width: 100%;
    max-width: 450px;
    height: 630px;
    padding: 20px;
    display: flex;
    animation: ${slideIn} 0.5s ease-out;
    transition: transform 0.5s, opacity 0.5s;

    &:not(:first-child) {
    margin-left: 20px;
    }
    
    &:hover ${CardContent}, &:hover ${Overlay} {
        opacity: 1;
        visibility: visible;
    }

    @media (min-width: 949px) {
        width: 100%;
    }

    @media (min-width: 1000px) {
        width: 50%;
    }

    @media (min-width: 1510px) {
        width: 33.33%;
    }
`

export const Article = styled.div`
    padding: 10px;
    font-size: 20px;
    font-weight: 300;
    line-height: 26px;
`

export const Nome = styled.div`
    font-size: 36px;
    font-weight: 700;
    line-height: 43.57px;
    padding: 10px;
`

export const Telefone = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 16px;
    padding: 10px;
`

export const Email = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 16px;
    padding: 10px;
`

export const ContainerIcon = styled.div`
    display: flex;
    position: absolute;
`

export const Direita = styled.button`
    position: relative;
    width: 45px;
    height: 45px;
    display: none;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border-radius: 50%;
    color: #f2f2f2;
    z-index: 1;

    @media (max-width: 1510px) {
        display: flex;
        justify-content: space-between;
    }
`

export const Esquerda = styled.button`
    position: relative;
    width: 45px;
    height: 45px;
    display: none;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border-radius: 50%;
    color: #f2f2f2;
    z-index: 1;
    
    @media (max-width: 1510px) {
        display: flex;
        justify-content: space-between;
    }
`

export const Icon = styled.i`
    padding-left: 12px;  
`