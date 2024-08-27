import styled from "styled-components";

export const Wrapper = styled.div`
    
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 770px){
        flex-direction: unset;
    }
`

export const ContainerContent = styled.div`
    display: flex;
    justify-content: space-between;

    @media (min-width: 770px){
        width: 100%;
        padding-right: 60px;
    }
`

export const Content = styled.div`
    display: flex;
    padding: 20px;
    gap: 10px;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    line-height: 50px;
    text-align: left;
`

export const Value = styled.div`
    display: flex;
    justify-content: end;
    font-size: 24px;
    font-weight: 500;
    line-height: 50px;
    text-align: left;
`

export const ContainerDescrição = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 650px;
`

export const DescriçãoIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ContainerIcon = styled.div`
    display: flex;
    justify-content: space-between;

    @media (min-width: 770px){
        justify-content: unset;
        max-width: 350px;
        width: 100%;
    }
`

export const Icon = styled.i`
    display: flex;
    padding: 20px;
`

export const DropOver = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: 0;
    z-index: 3;
    padding: 10px;
    left: 18%;
    width: 320px;
    height: 210px;
    background-color: #D9D9D9;
`

export const Aba = styled.div`
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 24px solid black;
    top: 35%;
    transform: translateX(-50%) rotate(-45deg) translateY(10px);
`

export const TextDrop = styled.div`
    font-size: 16px;
    font-weight: 300;
    line-height: 18px;
    text-align: center;
    z-index: 2;
`
