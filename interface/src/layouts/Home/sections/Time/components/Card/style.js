import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    gap: 40px;

    @media (max-width: 450px) {
        gap: 0;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    background: #000000CC;
`

export const CardContent = styled.div`
    max-width: 460px;
    display: flex;
    flex-direction: column;
    gap: 45px;
    margin-top: auto;
    position: relative;
    opacity: 0;
    z-index: 2;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
`
// aqui vai ficar a imagen 
export const CardContainer = styled.div`
    position: relative;
    color: white;
    width: 100%;
    max-width: 450px;
    height: 630px;
    padding: 20px;
    display: flex;
    transition: transform 0.9s ease-in-out;
    transform: translateX(${({ index, currentIndex }) => (index - currentIndex)* 1.5}%);
    
    &:hover ${CardContent}, &:hover ${Overlay} {
        opacity: 1;
        visibility: visible;
    }

    @media (min-width: 949px) {
        width: 100%;
    }

    @media (min-width: 950px) {
        width: 50%;
    }

    @media (min-width: 1280px) {
        width: 33.33%;
    }
`



export const Article = styled.div`
    padding: 10px;
    font-size: 20px;
    font-weight: 300;
    line-height: 26px;
    
`

export const Nome = styled.div`
    font-size: 36px;
    font-weight: 700;
    line-height: 43.57px;
    padding: 10px;
`

export const Telefone = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 16px;
    padding: 10px;
`

export const Email = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 16px;
    padding: 10px;
`