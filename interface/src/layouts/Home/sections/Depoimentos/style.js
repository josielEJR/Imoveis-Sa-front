import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    overflow: hidden;
    
`
export const Container = styled.div `
    width: 450px;
    height: 800px;
    position:  relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    @media (min-width: 450px) {
        width: 100%;
        padding: 40px;
    }

    @media (min-width: 1870px){
        height: 900px;
    }
`
export const ContainerDepoimentos = styled.div `
    display: flex;
    width: 400px;
    height: 700px;
    
    @media (min-width: 450px)  {
        width: 100%;
    }

    @media (min-width: 1870px){
        width: 1450px;
        height: 800px;
    }
`
export const Title = styled.div `
    font-weight: 800;
    font-size: 30px;
    line-height: 38px;
    height: auto;
    width: 100%;
    position: absolute;

    @media (max-width: 450px){
        font-size: 25px;
    }
`
export const ContainerPerfil = styled.div`
    width: 100%;
    height: 580px;
    margin-top: 90px;
    position: relative;

    @media (min-width: 1870px){
        top: 16.5%;
    }
`
export const ContainerImagem = styled.div`
    display: none;

    @media (min-width: 1870px){
        position: relative;
        display: flex;
        width: 730px;
        height: 500px;
        top: -64%;
    }
`
export const Imagem = styled.img`
    width: 100%;
    height: auto;
    object-fit: fill;
    border-radius: 10px;
`

export const ContainerQuote = styled.div`
    position: relative;
    width: 15px;
    height: 15px;
    margin-left: 45%;

    @media (min-width: 1870px){
        margin-left: 75%;
    }
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
    padding: 10px;

    @media (min-width: 1870px){
        width: 700px;
        height: 250px;
        left: 750px;
    }
`

export const Texto = styled.div`
    font-size: 25px;
    color: white;
    font-weight: 500;
    text-align: center;
    
    @media (max-width: 450px){
        font-size: 20px;
    }
`

export const FotoPerfil = styled.div`
    width: 90px;
    height: 90px;
    position: relative;
    top: 18%;
    border-radius: 50%;

    @media (min-width: 450px){
        width: 150px;
        height: 150px;
    }

    @media (min-width: 950px){
        width: 150px;
        height: 150px;
    }

    @media (min-width: 1870px){
        width: 90px;
        height: 90px;
        left: 54%;
    }
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
    font-size: 25px;
    font-weight: 700;
    line-height: 24px;
    top: 31%;
    left: 110%;
    white-space: nowrap;

    @media (min-width: 450px){
        font-size: 35px;
    }

    @media (min-width: 950px){
        font-size: 30px;
        top: 40%;
    }
`

export const ContainerIcon = styled.div`
    position: relative;
    width: 15px;
    height: 15px;
    margin-left: 5%;
    top: -48px;

    @media (min-width: 450px){
        margin-left: 6%;
        top: -108px;
    }

    @media (min-width: 950px){
        margin-left: 3.8%;
        top: -108px;
    }

    @media (min-width: 1280px){
        margin-left: 3%;
    }

    @media (min-width: 1870px){
        margin-left: 55.5%;
        top: -46px;
    }
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
    background-color: ${props => props.selected === "true" ? '#454545' : 'black'};
    width: ${(props) => props.width}px;
    margin: 0 5px;
    height: 20px;
`

export const WrapperNavButton = styled.div`
    width: 100%;
    top: 23%;
    position: relative;
    height: 19px;

    @media (min-width: 450px){
        top: 18.2%;
    }

    @media (min-width: 950px){
        top: 19.2%;
    }

    @media (min-width: 1870px){
        top: 95%;
        position: absolute;
    }
`

export const ContainerNavButton = styled.div`
    display: flex;
    width: 160px;
    height: 100%;
    margin: auto;

    @media (min-width: 950px){
        width: 180px;
    }
`