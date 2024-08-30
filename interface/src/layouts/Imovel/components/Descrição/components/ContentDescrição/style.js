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
    white-space: nowrap;
`