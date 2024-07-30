import styled, { css } from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1450px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 450px){
        padding: 0;
    }
`

export const ContainerFiltro = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 160px;
    background-color: black;
    padding: 20px;
    position: relative;
    top: -100px;
    gap: 32px;
    
    @media (max-width: 1280px){
        gap: 10px;
    }

    @media (max-width: 650px) {
        width: 400px;
        height: 300px;
        display: grid;
    }
`

export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    gap: 32px;

    @media (max-width: 1280px){
        gap: 10px;
    }
    @media (max-width: 950px){
        gap: 10px;
    }
    @media (max-width: 650px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

`

export const Button = styled.button`
    width: 200px;
    background-color: #212121;
    display: flex;
    color: #FFFFFF;
    ${({ error }) => 
        error && 
        css`
        border: 2px solid red; 
    `}
    font-size: 20px;
    font-style: italic;
    line-height: 24.2px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    position: relative;
    padding: 10px;

    @media (max-width: 950px){
        width: 130px;
        font-size: 16px;
    }

    @media (max-width: 650px){
        width: 100%;
        grid-column: 1 / span 2;
        font-size: 25px;
        height: 60px;
        
    }
`

export const Codigo = styled.input`
    width: 250px;
    background-color: #FFFFFF;
    position: relative;
    display: flex;
    border: 2px solid ${props => (props.error ? 'red' : '#888')};
    &:focus {
    border-color: ${props => (props.error ? 'red' : '#888')};
    }
    font-size: 20px;
    line-height: 24.2px;
    text-align:left;
    padding-left: 10px;
    border-radius: 8px;
    
    @media (max-width: 1050px){
        width: 174px;
        font-size: 16px;
    }

    @media (max-width: 980px){
        width: 110px;
        font-size: 16px;
    }

    @media (max-width: 650px) {
        width: 100%;
        height: 60px;
        padding: 10px;
        line-height: 40px;
    }
`

export const Input = styled.div`
    width: 280px;
    background-color: #FFFFFF;
    position: relative;
    font-size: 20px;
    line-height: 24px;
    text-align:left ;
    padding: 20px;
    border-radius: 8px;

    @media (max-width: 1050px){
        width: 174px;
        font-size: 16px;
    }

    @media (max-width: 650px) {
        width: 100%;
        height: 60px;
        padding: 10px;
        line-height: 40px;
    }
`

export const IconDrop = styled.i`
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`

export const ListaCompra = styled.ul`
    width: 228px;
    position: relative;
    padding: 20px;
    transition: opacity 0.5s ease, max-height 0.5s ease;
    margin-top: 20px;
    background: #ffffff;
    flex-direction: column;
    right: 20px;
    border-radius: 8px;
    border: 2px solid #000;

    @media (max-width: 1280px){
        width: 250px;
        
    }

    @media (max-width: 950px){
        width: 174px;
        padding:  10px;
        right: 5px;
    }

    @media (max-width: 450px){
        z-index: 1;
        width: 150px;
        margin-top: 25px;
        right: 5px;
    }
    
`

export const LiTipo = styled.li`
    right: 5px;
    display: flex;
    cursor: pointer;
    height: 55px;
`

export const UlOptions = styled.ul`
    position: relative;
    padding: 20px;
    margin-top: 20px;
    transition: opacity 0.1s ease, max-height 0.1s ease;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    width: 326.3px;
    right: 20px;
    border-radius: 8px;
    border: 2px solid #000;

    @media (max-width: 1280px){
        width: 250px;
    }

    @media (max-width: 950px){
        width: 174px;
        right: 8px;
        padding: 0 10px;
    }
    @media (max-width: 450px){
        z-index: 1;
        width: 150px;
        margin-top: 25px;
        right: 5px;
    }
`

export const UlBairros = styled.ul`
    position: relative;
    padding: 20px;
    transition: opacity 0.5s ease, max-height 0.5s ease;
    margin-top: 20px;
    background: #ffffff;
    flex-direction: column;
    width: 326px;
    right: 20px;
    border-radius: 8px;
    border: 2px solid #000;

    @media (max-width: 1280px){
        width: 250px;
    }

    @media (max-width: 950px){
        width: 174px;
        margin-top: 22px;
        padding: 0 5px;
    }

    @media (max-width: 450px){
        margin-top: 20px;
        z-index: 1;
        width: 150px;
        right: 15px;
        padding: 15px;
        line-height: normal;
    }
`

export const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const CheckBox = styled.input`
    margin-right: 10px;
`

export const CheckBoxLabel = styled.label`
    cursor: pointer;
`

export const ErroText = styled.p`
    position: absolute;
    height: auto;
    top: 0px;
    display: flex;
    padding: 10px;
    color: red;
    font-size: large;

    @media (max-width: 450px ) {
        top: 58%;
        padding-left: 30px;
        font-weight: 700;
        font-size: 18px;
    }
`
