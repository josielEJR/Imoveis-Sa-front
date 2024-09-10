import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
   width: 100%; 
`
export const Container = styled.div`
    display: flex; 
    width: 100%;
    height: 550px;

    @media (min-width: 1030px) {
        max-width: 730px;
        height: 630px;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
`

export const Preço = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 25px;

    @media (min-width: 1230px){
        font-size: 34px;
    }
`
export const Tipo = styled.div`
    display: flex;
    font-size: 28px;
`
export const ItensWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style-type: disc;
    font-size: 22px;

`
export const Itens = styled.li`
    display: flex;
    flex-direction: column;
    padding-left: 25px;
`

export const Li = styled.li``

const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
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
    animation: ${({ animate }) => animate ? clickAnimation: 'none'} 0.3s ease-in-out;
`