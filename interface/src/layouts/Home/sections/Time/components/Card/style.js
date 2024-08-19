import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
    overflow: hidden;

    .slick-slide {
        padding: 0 10px;
        justify-content: space-around;
    }

`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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

    @media (max-width: 1540px) {
        opacity: 1;
        visibility: visible;
    }
`
export const InfoIcon = styled.div`
    position: absolute;
    padding: 15px;
    z-index: 3;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    @media (max-width: 1540px) {
        opacity: 1;
        visibility: visible;
    }
`

export const CardContent = styled.div`
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 45px;
    top: 220px;
    padding: 20px;
    position: absolute;
    opacity: 0;
    z-index: 2;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    @media (max-width: 1540px) {
        opacity: 1;
        visibility: visible;
    }
`

export const CardContainer = styled.div`
    position: relative;
    width: 100% !important;
    max-width: 450px !important;
    height: 630px;
    display: flex !important;
    cursor: pointer;
    transition: transform 1.2s ease-in-out, box-shadow 0.5s ease-in-out;

    &:hover ${CardContent}, &:hover ${Overlay}, &:hover ${InfoIcon} {
        opacity: 1;
        visibility: visible;
    }

    @media (min-width: 1000px) {
        width: 100% ;
    }

    @media (min-width: 1100px) {
        width: 50%;
    }

    @media (min-width: 1540px) {
        width: 33.33%;

        &:hover {
        transform: scale(1.05); 
        }
    }
`

export const Article = styled.div`
    padding: 10px;
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
`

export const Nome = styled.div`
    font-size: 36px;
    font-weight: 700;
    line-height: 43px;
    padding: 10px;
`

export const Telefone = styled.div`
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    padding: 10px;
`

export const Email = styled.div`
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    padding: 10px;
`

