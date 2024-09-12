import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
`

export const SelectorSection = styled.div`
    width: 175px;
    height: 21px;
    margin: auto;
    display: flex;
    justify-content: center;

    @media (max-width: 1080px){
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