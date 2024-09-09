import styled from "styled-components";

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

    @media (min-width: 1030px) {
        font-size: 28px;
    }
`
export const Itens = styled.li`
    display: flex;
    flex-direction: column;
    padding-left: 25px;
`

export const Li = styled.li``

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
        background: linear-gradient(45deg, #bbb, #0000);
        transform: translateY(-5px);
    }
`