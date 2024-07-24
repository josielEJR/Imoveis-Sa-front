import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    overflow: hidden;
    
`
export const Container = styled.div `
    display: flex;
    flex-direction: column;
    

    @media (min-width: 450px) {
        width: 100%;
        padding: 40px;
    }

    @media (min-width: 1280px){
        gap: 100px;
    }
`

export const Improvisado = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const ContainerDepoimentos = styled.div `
    display: flex;
    margin: 0;
    
    
    @media (min-width: 450px)  {
        
    }

    @media (min-width: 1280px){
        gap: 32px;
    }
`
export const Title = styled.div `
    font-weight: 800;
    font-size: 30px;
    line-height: 38px;
    height: auto;
    width: 100%;

    @media (max-width: 450px){
        font-size: 25px;
    }
`
export const ContainerPerfil = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1280px){
        gap: 30px;
    }
`
export const ContainerImagem = styled.div`
    display: none;

    @media (min-width: 1280px){
        display: flex;
        width: 730px;
        height: 500px;
    }
`
export const Imagem = styled.img`
    width: 100%;
    height: auto;
    object-fit: fill;
`

export const ContainerQuote = styled.div`
    justify-content: center;
    display: flex;

    @media (min-width: 1870px){
        
    }
`

export const ContainerComentario = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
`

export const Comentario = styled.div`
    width: 100%;
    height: 300px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;

    @media (min-width: 1280px){
        width: 700px;
        height: 250px;
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
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;

    @media (min-width: 450px){
        
    }

    @media (min-width: 950px){
    
    }

    @media (min-width: 1280px){
    
    }
`
export const Foto = styled.div`
    display: flex;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const NomePerfil = styled.div`
    font-size: 25px;
    font-weight: 700;
    line-height: 24px;

    @media (min-width: 450px){
        font-size: 35px;
    }

    @media (min-width: 950px){
        font-size: 30px;
    }
`

export const ContainerIcon = styled.div`
    position: relative;
    width: 15px;
    height: 15px;

    @media (min-width: 450px){
        
    }

    @media (min-width: 950px){
        
    }

    @media (min-width: 1280px){
        
    }

    @media (min-width: 1280px){
        top: -15px;
        left: 10px;
    }
`

