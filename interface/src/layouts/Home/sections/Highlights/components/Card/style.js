import styled from "styled-components"

export const Wrapper = styled.div`
    width: 30%;
    height: 400px;
    background-color: black;
    position: relative;
    overflow: hidden;
`

export const BackgroundImage = styled.img`
    position: absolute;
    height: 100%;
    opacity: 0.5;
`

export const CardContent = styled.div`
    position: relative;
    color: white;
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
`