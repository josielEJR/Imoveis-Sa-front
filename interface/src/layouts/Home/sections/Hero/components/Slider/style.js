import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
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
    }

    @media (max-width: 450px){
        width: 100%;
        height: 660px;
    
    }

`
export const ImageContainer = styled.img`
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    
`
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000CC;
`

export const NavButton = styled.button`
    top: 80%;
    position: relative;
    left: 50%;
    height: 19px;
    margin: 0 5px;
    outline: none;
    border: none;
    cursor: pointer;
    color: ${(props) => (props.selected ? 'white' : '#000')};
    background-color: ${(props) => (props.selected ? '#454545' : 'white')};
    transition: all 0.8s;
    
    @media (max-width: 950px){
        left: 45%;
    } 

    @media (max-width: 450px){
        left: 30%;
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
        width: 300px;
        font-weight: 100;
        font-size: 25px;
        top: 0;
        text-align: center;
        line-height: 28.09px;
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
        top: 25%;
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
`;

export const Icon = styled.i`
    padding-left: 12px;
    
`;

