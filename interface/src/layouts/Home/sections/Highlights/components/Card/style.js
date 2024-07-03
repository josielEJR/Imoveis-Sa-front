import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
    width: 30%;
    height: 400px;
    background-color: black;
    position: relative;
    overflow: hidden;
    cursor: pointer;
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
    0% {top: 48px}
    100% {top: 0}
`
const hideInfo = keyframes`
    0% {top: 0}
    100% {top: 48px}
`

const handleCardInfo = (onHover) => {
    if(onHover === "true"){
        return showInfo
    }else if(onHover === "false"){
        return hideInfo
    }
}

export const CardContent = styled.div`
    position: relative;
    color: white;
    top: ${props => props.hover === "true" ? "0" : "48px"};
    animation: ${props => handleCardInfo(props.hover)} 0.5s;
`

export const Gap = styled.div`
    width: 100%;
    height: 135px;
`

export const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 20px 35px;
`

export const PriceArea = styled.div`
    border: 1px solid #FFFFFF;
    padding: 13px;
    margin: 0 0 30px 35px;
    width: 200px;
    border-radius: 32px;
    font-size: 11px;
`

export const RedirectIndicator = styled.div`
    margin: 0 0 35px 35px;
    font-size: 10px;
`

export const HouseInfo = styled.div`
    font-size: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
    background-color: #000000;
    padding: 10px;
    position: relative;
`