import styled, { keyframes } from "styled-components"

export const Container = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;
`

export const Title = styled.div`
    width: 90%;
    margin: auto;
    font-size: 48px;
    font-weight: 700;
`

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
`

export const SelectorWrapper = styled.div`
    width: 100%;
`

export const SelectorContainer = styled.div`
    width: 175px;
    height: 21px;
    margin: auto;
    display: flex;
    justify-content: center;

    @media (max-width: 1100px){
        width: 270px;
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