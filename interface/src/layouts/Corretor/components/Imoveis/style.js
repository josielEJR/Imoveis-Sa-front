import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 1260px;
    margin-top: 100px;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    gap: 100px;
    flex-direction: column;
    display: flex;
`

export const CardContainer = styled.div`
    width: 1444px;
    height: 1260px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Titulo = styled.h1`
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    text-align: left;
    position: relative;
    display: inline-block;
   
    &::after {
    content: '';
    display: block;
    width: 60px;
    height: 6px;
    background-color: #454545;
    position: absolute;
    bottom: -15px;
    left: 0;
    }
`

export const Card = styled.div`
    position: relative;
    width: 100%;
    max-width: 450px;
    height: 630px;
    display: flex;
    background-color: aqua;
    flex-direction: column;
    overflow: hidden; 

    @media (min-width: 1000px) {
        width: 100%;
    }

    @media (min-width: 1100px) {
        width: 50%;
    }

    @media (min-width: 1540px) {
        width: 33.33%;
    }
`

export const DropInfo = styled.div`
    width: 100%;
    height: 73px;
    background-color: black;
    position: relative;
    bottom: 0;
    left: 0;
    margin-bottom: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;

    @media (max-width: 1000px) {
        position: relative;
        opacity: 1;
        transform: translateY(0);
    }

    @media (min-width: 1000px) {
        position: absolute;
        transform: translateY(100%);
        opacity: 0;

        ${Card}:hover & {
            transform: translateY(0);
            opacity: 1;
        }
    }
`

export const CardContent = styled.div`
    max-width: 460px;
    width: 100%;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 45px;
    margin-top: auto;
    position: relative;

    @media (min-width: 1000px) {
        ${Card}:hover & {
            margin-bottom: 73px; 
        }
    }
`

export const Atributos = styled.div`
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