import styled, { keyframes } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1870px;
    height: 865px;
    box-sizing: border-box;
    margin: 200px auto 150px;
    width: 100%;
`

export const Container = styled.div`
    width: 90%;
    margin: auto;
`

export const Title = styled.div`
    font-size: 48px;
    font-weight: 700;
`

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
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