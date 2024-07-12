import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-color: white;

`
export const Container = styled.div `
    width: 450px;
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
    gap: 10px;
    background-color: aliceblue;
    

`
export const Title = styled.div `
    font-weight: 400;
    font-size: 20px;
    line-height: 38px;
    height: auto;
    width: 600px;
    text-align: left;
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
    width: 150px;
    height: 200px;
    position: relative;
    background-color: aqua;
`

export const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`