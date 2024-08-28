import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
    width: 458px;
    height: 629px;
    background-color: black;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    @media (max-width: 1220px){
        width: 408px;
    }

    @media (max-width: 900px) {
        width: 335px;
        height: 529px;
    }

    @media (max-width: 710px){
        width: 440px;
        height: 529px;
    }
`

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.5;
    background-image: url(${props => props.image});
    background-position: 62%;
    background-size: 200% 100%;
`

const showInfo = keyframes`
    0% {top: 66%}
    100% {top: 54%}
`
const hideInfo = keyframes`
    0% {top: 54%}
    100% {top: 66%}
`

const handleCardInfo = (onHover) => {
    if (onHover === "true") {
        return showInfo
    } else if (onHover === "false") {
        return hideInfo
    }
}

export const CardContent = styled.div`
    position: relative;
    color: white;
    top: ${props => props.hover === "true" ? "54%" : "66%"};
    animation: ${props => handleCardInfo(props.hover)} 0.5s;

    @media (max-width: 950px){
        top: 54%;
        animation: none;
    }

    @media (max-width: 900px) {
        top: 45%;
    }
`

export const TitleSection = styled.div`
    margin: 0 0 20px 35px;
`

export const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
`

export const PriceArea = styled.div`
    border: 1px solid #FFFFFF;
    padding: 13px;
    margin: 0 0 30px 35px;
    width: 200px;
    border-radius: 32px;
    font-size: 11px;
    font-weight: 300;
`

export const RedirectIndicator = styled.div`
    margin: 0 0 35px 35px;
    font-size: 10px;
    font-weight: 300;
`

export const HouseInfo = styled.div`
    font-size: 10px;
    display: grid;
    height: 73px;
    padding-top: 15px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
    background-color: #000000;
`

export const InfoSection = styled.div``

export const Label = styled.div`
    height: 21px;
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 11px;
`

export const Value = styled.div`
    height: 21px;
    font-size: 10px;
    font-weight: 300;
`