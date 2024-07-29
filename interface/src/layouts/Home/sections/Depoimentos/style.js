import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-top: 200px;

    @media (max-width: 950px){
        margin-top: 10px;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

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

export const ContainerDepoimentos = styled.div`
    display: flex;
    margin: 0;
    gap: 20px;
    
    @media (min-width: 1280px){
        gap: 32px;
    }
`

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    font-weight: 800;
    font-size: 30px;

    @media (max-width: 450px){
        font-size: 25px;
    }
`

export const ContainerPerfil = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 1280px){
        gap: 10px;
    }
`

export const ContainerImagem = styled.div`
    display: none;
     
    @media (min-width: 1280px){
        display: flex;
        width: 730px;
        height: 500px;
        object-fit: cover;
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
`

export const Foto = styled.div`
    display: flex;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    background-image: url(${(props) => props.image});
    background-size: cover; 
    background-position: center;
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
    top: -15px;
    left: 15px;

`