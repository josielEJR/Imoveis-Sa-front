import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div``

export const Container = styled.div``

export const CardsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px 30px;
    justify-content: center;
`

export const SelectorSection = styled.div`
    width: 100%;
`

export const Selectors = styled.div`
    width: 175px;
    height: 21px;
    display: flex;
    justify-content: center;
    margin: 20px auto 0;

    @media (max-width: 1100px){
        width: 270px;
    }

    @media (max-width: 950px){
        display: none;
    }
`

const growSelector = keyframes`
    0% {flex-grow: 0}
    100% {flex-grow: 1} 
`

const shrinkSelector = keyframes`
    0% {flex-grow: 1}
    100% {flex-grow: 0}
`

export const IndexSelector = styled.div`
    width: 35px;
    margin: 0 6px;
    background-color: ${props => props.grow === "true" ? "#454545" : "#000000"};
    flex-grow: ${props => props.grow === "true" ? 1 : 0};
    animation: ${props => props.grow === "true" ? growSelector : shrinkSelector} 0.6s;
    cursor: pointer;
`