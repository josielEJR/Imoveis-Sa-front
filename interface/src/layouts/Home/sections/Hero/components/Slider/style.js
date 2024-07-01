import styled from "styled-components"

export const Container = styled.div`  
    width: 1870px;
    height: 940px;
    position:  relative;
    display: flex;
    background: #000000CC;
    justify-content: center;
    align-items: center;
`
export const ImageContainer = styled.img`
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
`
export const NavButton = styled.button`
    width: ${(props) => props.width}px;
    height: 19.58px;
    top: 757.22px;
    display: inline-flex;
    align-items: center;
    left: ${(props) => props.left}px;
    outline: #FFFFFF;
    border: #FFFFFF;
    background: #FFFFFF;
    cursor: pointer;
    padding: 0;
    position: absolute;
    color: white;
    background-color: ${(props) => (props.selected ? '#454545' : 'white')};
    transform: translate(-50%);
    transition: width 0.8s;
`
export const TextArea = styled.div`
    width: 652.78px;
    height: 221.94px;
    font-weight: 700px;
    top: 334.22px;
    left: 272.72px;
    position: absolute;
    background-color: transparent;
    text-align: left;
    font: italic;
    font-size: 48px;
    line-height: 58.09px;
    color: white;
`
export const ButtonPrice = styled.button`
    border-radius: 32px;
    width: 266.33px;
    height: 71.81px;
    top: 600.44px;
    left: 275.33px;
    border: 2px groove #ffffff;
    font: italic;
    cursor: pointer;
    font-weight: 300;
    font-size: 20px;
    line-height: 24.2px;
    color: #FFFFFF;
    position: absolute;
    
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

