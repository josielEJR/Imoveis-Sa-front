import styled, {keyframes} from "styled-components"

export const Wrapper = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const Container = styled.div`  
    width: 100%;
    height: 940px;
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
export const WrapperNavButton = styled.div`
    width: 100%;
    top: 80%;
    position: relative;
    height: 19px;
    
`

export const ContainerNavButton = styled.div`
    display: flex;
    width: 200px;
    height: 100%;
    margin: auto;

    @media (max-width: 950px){
        min-width: 15px;
    }

    @media (max-width: 450px){
        width: 160px;
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

const growSelctor = keyframes`
    0% {flex-grow: 0}
    100% {flex-grow: 1}
`
 
const shrinkSelector = keyframes`
    0% {flex-grow: 1}
    100% {flex-grow: 0}

`
export const NavButton = styled.button`
    flex-grow: ${props => props.selected === "true" ? 1 : 0};
    animation: ${props => props.selected === "true" ? growSelctor : shrinkSelector} 0.6s;
    background-color: ${props => props.selected === "true" ? '#454545' : 'white'};
    width: ${(props) => props.width}px;
    margin: 0 5px;
    height: 20px;
    
    @media (max-width: 950px){
        min-width: 30px;
    } 

    @media (max-width: 450px){
        width: 8px;
    }

`
export const TextArea = styled.div`
    width: 652px;
    height: auto;
    font-weight: 600;
    position: absolute;
    text-align: left;
    font-size: 48px;
    line-height: 58.09px;
    color: white;
    top: 25%;
    left: 20%;
    

    @media (max-width: 950px){
        width: 600px;
        height: 100%;
        top: 10%;
        left: 15%;
    }

    @media (max-width: 450px){
        width: 350px;
        font-weight: 100;
        font-size: 32px;
        top: 100px;
        line-height: 40px;
    }

`
export const ButtonPrice = styled.button`
    border-radius: 32px;
    width: 266px;
    height: 71px;
    top: 55%;
    left: 20%;
    border: 2px groove #ffffff;
    font-weight: 300;
    font-size: 20px;
    line-height: 24.2px;
    color: #FFFFFF;
    position: absolute;
    
    @media (max-width: 950px){
        width: 266px;
        top: 50%;
        left: 15%;
    }

    @media (max-width: 450px) {
        width: 200px;
        font-weight: 150;
        font-size: 18px;
        top: 45%;
        left: 28%;
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

    @media (max-width: 450px) {
        display: none;
    }
`;

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

    @media (max-width: 450px) {
        display: none;
    }
`;

export const Icon = styled.i`
    padding-left: 12px;
    
    
`;

