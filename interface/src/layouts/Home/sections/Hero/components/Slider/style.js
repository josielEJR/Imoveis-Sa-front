import styled, { css } from "styled-components"

export const Container = styled.div`  
    width: 1880 px;
    height: 940px;
    position:  relative;
    display: flex;
`
export const ImageContainer = styled.img`
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;

`
export const NavButton = styled.button`
    width: ${(props) => props.width}px;
    height: 19.58px;
    top: 757.22px;
    display: inline-flex;
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
    left: 263.73px;
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
    top: 541.03px;
    left: 363.73px;
    border: 10px;
    font: italic;
    cursor: pointer;
    font-weight: 300px;
    font-size: 20px;
    line-height: 24.2px;
    color: #FFFFFF;
    position: absolute;
    background-color: black;
`
export const Filtro = styled.div`
width: 1566.67px;
height: 130.56px;
top: 874.72px;
left: 156.67px;
border: 1px;
background-color: black;
position: absolute;
display: flex;
`
export const Busca = styled.button`
width: 163.19px;
height: 65.28px;
top: 907.36px;
left: 1527.5px;
background-color: #212121;
position: absolute;
display: flex;
color: #FFFFFF;
font-size: 20px;
font-style: italic;
line-height: 24.2px;
justify-content: center;
align-items: center;
`
export const Codigo = styled.input`
width: 326.3px;
height: 65.28px;
top: 907.36px;
left: 1168.47px;
background-color: #FFFFFF;
position: absolute;
display: c;
font-size: 20px;
font-weight: 500px;
line-height: 24.2px;
text-align:left;
padding-left: 10px;

`
export const Bairros = styled.div`
width: 326.3px;
height: 65.28px;
top: 907.36px;
left: 809.44px;
background-color: #FFFFFF;
position: absolute;
display: c;
font-size: 20px;
font-weight: 500px;
line-height: 24.2px;
text-align:left ;
padding: 20px;
`
export const Tipo = styled.div`
width: 326.3px;
height: 65.28px;
top: 907.36px;
left: 450.42px;
background-color: #FFFFFF;
position: absolute;
font-size: 20px;
font-weight: 500px;
line-height: 24.2px;
text-align:left ;
padding: 20px;
`
export const Comprar = styled.div`
width: 228.47px;
height: 65.28px;
top: 907.36px;
left: 189.31px;
background-color: #FFFFFF;
position: absolute;
font-size: 20px;
font-weight: 500px;
line-height: 24.2px;
text-align:left ;
padding: 20px;
`
export const Direita = styled.button`
    width: 45px;
    height: 45px;
    outline: none;
    border: none;
    background: none;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    padding: 0;
    right: 30px;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    color: white;
    box-shadow: 0px 4px 60px 20px rgba(3, 3, 3, 0.9), 
        inset 0 -3em 3em rgba(3, 3, 3, 0.5);
    transform: translate(0, -50%);
`;
export const Esquerda = styled.button`
    width: 45px;
    height: 45px;
    outline: none;
    border: none;
    background: none;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    padding: 0;
    position: absolute;
    left: 30px;
    top: 50%;
    border-radius: 50%;
    color: white;
    box-shadow: 0px 4px 60px 20px rgba(3, 3, 3, 0.9), 
        inset 0 -3em 3em rgba(3, 3, 3, 0.5);
    transform: translate(0, -50%);
`;

