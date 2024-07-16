import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-color: white;
    z-index: 1;

`
export const Container = styled.div `
    width: 435px;
    height: 993px;
    position:  relative;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
`
export const ContainerDepoimentos = styled.div `
    display: flex;
    width: 400px;
    height: 793px;
    background-color: aliceblue;
`
export const Title = styled.div `
    font-weight: 700;
    font-size: 20px;
    line-height: 38px;
    height: auto;
    width: 100%;
    position: absolute;
    
`
export const ContainerPerfil = styled.div`
    width: 100%;
    height: 575px;
    background-color: yellow;
    margin-top: 218px;
    position: relative;

`
export const ContainerImagem = styled.div`
    width: 100%;
    height: 200px;
    background-color: aqua;
`
export const Imagem = styled.img`
    width: 100%;
    height: 100%;
`
export const ContainerQuote = styled.div`
    position: relative;
    width: 15px;
    height: 15px;
    margin-left: 45%;
    
`
export const Quote = styled.i`
    width: 100%;
`

export const Comentario = styled.div`
    width: 100%;
    height: 300px;
    background-color: black;
    top: 10%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    text-align: center;

`
export const Texto = styled.div`
    font-size: large;
    color: aliceblue;
    font-weight: 500;
    text-align: center;
    
`

export const FotoPerfil = styled.div`
    width: 90px;
    height: 90px;
    background-color: aliceblue;
    position: relative;
    top: 18%;
    border-radius: 50%;

`
export const Foto = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    overflow: hidden;
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const NomePerfil = styled.div`
    width: auto;
    height: auto;
    position: relative;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    top: 31%;
    left: 110%;
    white-space: nowrap;
`


export const ContainerIcon = styled.div`
    position: relative;
    width: 15px;
    height: 15px;
    margin-left: 5%;
    top: -48px;

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

`

export const WrapperNavButton = styled.div`
    width: 100%;
    top: 23%;
    position: relative;
    height: 19px;
    
`

export const ContainerNavButton = styled.div`
    display: flex;
    width: 160px;
    height: 100%;
    margin: auto;

`