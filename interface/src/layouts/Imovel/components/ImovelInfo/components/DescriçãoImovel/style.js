import styled from "styled-components";

export const Wrapper = styled.div`
   width: 100%; 
`
export const Container = styled.div`
    display: flex; 
    width: 100%;
    height: 630px;

    @media (min-width: 1000px) {
        max-width: 730px;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: aqua;
    width: 100%;
    gap: 50px;
`

export const Preço = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const Tipo = styled.div`
    display: flex;
`
export const ItensWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 280px;
    background-color: beige;
    list-style-type: disc;
    gap: 20px;
`
export const Itens = styled.li`
    display: flex;
    flex-direction: column;
    padding-left: 25px;
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
        background: linear-gradient(45deg, #bbb, #0000);
        transform: translateY(-5px);
    }
`