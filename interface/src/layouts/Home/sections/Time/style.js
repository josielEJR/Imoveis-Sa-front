import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-top: 100px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px;
    max-width: 1600px;
`

export const Title = styled.div`
    font-weight: 800;
    font-size: 38px;
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
    
    @media (max-width: 1540px) {
        display: flex;
        justify-content: space-between;
    }
`

export const Icon = styled.i`
     
`