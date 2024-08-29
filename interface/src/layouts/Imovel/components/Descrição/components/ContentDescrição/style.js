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
    align-items: center;
    font-size: 24px;
    line-height: 50px;
    max-height: 90px;
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
    max-width: 650px;
    width: 100%;
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
        max-width: 250px;
        width: 100%;
    }
`

export const Icon = styled.div`
    display: flex;
    padding: 20px;
`

export const Text = styled.div`
    display: flex;
    overflow-wrap: break-word;
`

export const DropOver = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    gap: 15px;
    margin: 0;
    left: 5%;
    z-index: 3;
    padding: 10px;
    width: 320px;
    background-color: #D9D9D9;

    @media (max-width: 960px) {
        position: absolute;
        left: ${(props) => props.leftPercentage}
    }

    @media (max-width: 590px){
        top: ${(props) => props.topPercentage}
    }   

`

export const Aba = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
    border-bottom: 23px solid #D9D9D9;
    top: 38%;
    left: 1%;
    transform: translateX(-50%) rotate(27deg) translateY(10px);
    z-index: 0;

    @media (max-width: 590px){
        top: -5%;
        left: 29%;
        transform: translateX(-50%) rotate(120deg) translateY(10px);
    }   
`

export const TextDrop = styled.div`
    font-size: 16px;
    font-weight: 300;
    line-height: 18px;
    text-align: center;
    z-index: 2;
`

export const Title = styled.div`
    font-size: 20px;
    text-align: center;

    &::after {
    content: '';
    display: block;
    width: 238px;
    height: 2px;
    background-color: #000000;
    }
`