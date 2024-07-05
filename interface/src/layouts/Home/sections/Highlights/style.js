import styled, { keyframes } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1870px;
    box-sizing: border-box;
    margin: 100px auto;
    width: 100%;
    height: 800px;

    @media (max-width: 950px){
        max-width: 950px;
    }

    @media (max-width: 430px){
        max-width: 430px;
    }
`

export const Container = styled.div`
    width: 80%;
    margin: auto;
`

export const Title = styled.div`
    font-size: 48px;
    font-weight: 700;

    @media (max-width: 430px){
        font-size: 36px;
    }
`

const slideCardsLeft = keyframes`
    0% {left: -120%}
    100% {left: 0}
`
const slideCardsRight = keyframes`
    0% {left: 120%}
    100% {left: 0}
`

const handleCardSlideAnimation = (prev, current) => {
    if(prev > current){
        return slideCardsLeft
    }else if(prev < current){
        return slideCardsRight
    }
    return null
}

export const CardsWrapper = styled.div`
    margin: 56px auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 0;
    animation: ${props => handleCardSlideAnimation(props.prev, props.current)} 0.6s;

    @media (max-width: 950px){
        justify-content: center;
    }
`

export const SelectorWrapper = styled.div`
    width: 100%;
`

export const SelectorContainer = styled.div`
    width: 15%;
    margin: auto;
    display: flex;
    justify-content: center;
    
    @media (max-width: 950px){
        width:35%;
    }

    @media (max-width: 430px){
        width: 70%;
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
    width: 30px;
    height: 20px;
    margin: 0 6px;
    background-color: ${props => props.grow === "true" ? "#454545" : "#000000"};
    flex-grow: ${props => props.grow === "true" ? 1 : 0};
    animation: ${props => props.grow === "true" ? growSelector : shrinkSelector} 0.6s;
    cursor: pointer;

    @media (max-width: 950px){
        width: 50px;
        height: 30px;
    }
`