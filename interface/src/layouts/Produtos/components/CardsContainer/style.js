import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
`

export const Container = styled.div`
    width: 1434px;
    margin: 0 5px;

    @media (max-width: 1464px){
        max-width: 946px;
        margin: 0 auto;
    }

    @media (max-width: 1220px){
        max-width: 850px;
    }

    @media (max-width: 900px){
        max-width: 700px;
    }

    @media (max-width: 710px){
        max-width: 400px;
    }

    @media (max-width: 450px){
        width: 370px;
        margin: 0 auto;
    }
`

export const CardsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px 30px;
`

export const SelectorSection = styled.div`
    width: 100%;
`

export const Selectors = styled.div`
    width: 175px;
    height: 21px;
    line-height: 21px;
    display: flex;
    justify-content: center;
    margin: 20px auto 0;
`

export const IndexSelector = styled.button`
    margin: 0 5px;
`