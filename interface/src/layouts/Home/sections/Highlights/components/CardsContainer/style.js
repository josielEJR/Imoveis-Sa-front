import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div``

export const Container = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;

    .swiper-slide{
        display: flex;
        justify-content: center;
    }
`

export const TitleSection = styled.div`
    width: 90%;
    margin: auto;
`

export const Title = styled.div`
    font-size: 48px;
    font-weight: 700;
    height: 50px;

    @media (max-width: 482px){
        height: unset;
    }
`

export const CardsSection = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
`