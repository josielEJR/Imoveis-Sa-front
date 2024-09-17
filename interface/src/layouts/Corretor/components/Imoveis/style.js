import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    margin-top: 100px;

    @media (max-width: 750px){
        margin: auto;
    }
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    gap: 100px;
    flex-direction: column;
    display: flex;
`

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    @media (max-width: 1380px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 950px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
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
    flex-direction: column;
    overflow: hidden;
    cursor: pointer; 
`

export const BackgroundImage = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${(props) => props.image});
    background-size: cover; 
    background-position: 100% 30%;
`
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`

export const DropInfo = styled.div`
    width: 100%;
    height: 73px;
    background-color: black;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    bottom: 0;
    left: 0;
    margin-bottom: 0;
    padding: 10px;
    transition: transform 0.3s ease, opacity 0.3s ease;

    @media (max-width: 1540px) {
        position: relative;
        opacity: 1;
        transform: translateY(0);
    }

    @media (min-width: 1540px) {
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
    cursor: pointer;

    @media (min-width: 1540px) {
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

export const InfoSection = styled.div`
    color: aliceblue;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 485px){
        padding: 0;
    }
`

export const Label = styled.div`
    height: 21px;
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 11px;
    gap: 5px;
    display: flex;
    align-items: end;
`

export const Value = styled.div`
    height: 21px;
    font-size: 10px;
    font-weight: 300;
    padding: 0 5px;
`

