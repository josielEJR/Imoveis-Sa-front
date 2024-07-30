import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const Container = styled.div`  
    width: 100%;
    position:  relative;
    
    @media (max-width: 1280px){
        width: 100%;
    }

    @media (max-width: 950px){
        width: 100%;
        height: 750px;
        overflow: hidden;
    }

    @media (max-width: 450px){
        width: 100%;
        height: 660px;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: transform 0.9s ease-in-out;
    transform: translateX(${({ index, currentIndex }) => (index - currentIndex) * 100}%);
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000CC;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 50px;
    padding: 300px 200px ;

    @media (max-width: 1280px){
        padding: 250px 250px;
        
    }

    @media (max-width: 950px){
        padding: 150px 50px;
        
    }
`

export const TextArea = styled.div`
    width: 652px;
    height: auto;
    font-weight: 600;
    text-align: left;
    font-size: 48px;
    line-height: 58px;
    color: white;

    @media (max-width: 950px){
        width: 350px;
        font-weight: 100;
        font-size: 32px;
        line-height: 40px;
    }
`

export const ButtonPrice = styled.button`
    border-radius: 32px;
    width: 266px;
    height: 71px;
    border: 2px groove #ffffff;
    font-weight: 300;
    font-size: 20px;
    line-height: 24.2px;
    color: #FFFFFF;
    
    @media (max-width: 950px){
        width: 266px;
    }

    @media (max-width: 450px) {
        width: 200px;
        font-weight: 150;
        font-size: 18px;
    }
`

export const Direita = styled.button`
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    right: 30px;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    color: #f2f2f2;
    z-index: 1;

    @media (max-width: 950px) {
        display: none;
    }
`

export const Esquerda = styled.button`
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    left: 30px;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    color: #f2f2f2;
    z-index: 1;

    @media (max-width: 950px) {
        display: none;
    }
`

export const Icon = styled.i`
    padding-left: 12px;  
`

