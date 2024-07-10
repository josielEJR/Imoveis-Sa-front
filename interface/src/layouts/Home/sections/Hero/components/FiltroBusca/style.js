import styled, { css } from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    
`
export const ContainerFiltro = styled.div`
    width: 1566px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 160px;
    background-color: black;
    padding: 20px;
    position: relative;
    top: -50px;
    gap: 32px;
    z-index: 1;
    
    @media (max-width: 1280px){
        width: 1180px;
        padding: 0 20px;
        gap: 15px;
    }

    @media (max-width: 950px) {
        width: 880px;
        padding: 0 5px;
        gap: 5px;
    }
    @media (max-width: 450px) {
        width: 400px;
        gap: 25px;
        height: auto;
        display: grid;
        
    }

   
`
export const ContainerInput = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 32px;

    @media (max-width: 1280px){
        gap: 15px;
    }
    @media (max-width: 950px){
        gap: 5px;
    }
    @media (max-width: 450px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

`
export const Busca = styled.button`
    width: 163px;
    height: 65.28px;
    background-color: #212121;
    display: flex;
    color: #FFFFFF;
    ${({ error }) => 
        error && 
        css`
        border: 2px solid red; 
    `}
    font-size: 22px;
    font-style: italic;
    line-height: 24.2px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    position: relative;
    padding: 10px;

    @media (max-width: 450px){
        width: 100%;
        font-size: 32px;
    }
    

`
export const Codigo = styled.input`
    width: 326px;
    height: 65px;
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

    @media (max-width: 1280px){
        width: 250px;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 950px){
        width: 174px;
        
    }
`
export const Bairros = styled.div`
    width: 326px;
    height: 65px;
    background-color: #FFFFFF;
    position: relative;
    font-size: 20px;
    line-height: 24px;
    text-align:left ;
    padding: 20px;
    border-radius: 8px;

    @media (max-width: 1280px){
        width: 250px;
        
    }

    @media (max-width: 950px){
        width: 174px;
        
    }
`
export const Tipo = styled.div`
    width: 326px;
    height: 65px;
    background-color: #FFFFFF;
    position: relative;
    font-size: 20px;
    line-height: 24px;
    text-align: left;
    padding: 20px;
    border-radius: 8px;

    @media (max-width: 1280px){
        width: 250px;
    }

    @media (max-width: 950px){
        width: 174px;
        font-size: 19px;
        line-height: 1.3;
        padding-left: 8px;
    }
`
export const Comprar = styled.div`
    width: 228px;
    height: 65px;
    background-color: #FFFFFF;
    position: relative;
    font-size: 20px;
    line-height: 24px;
    text-align: left;
    padding: 20px;
    border-radius: 8px;
    
    @media (max-width: 950px){
        width: 174px;
        padding-left: 5px;
        font-size: 19px;
        line-height: 1.3;
    }
`
export const SpanAlugar = styled.span`
    cursor: pointer;
    margin-top: 40px;

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

    @media (max-width: 950px){
        width: 174px;
        padding:  10px;
        right: 5px;
    }

    @media (max-width: 450px){
        z-index: 1;
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
        padding: 0 8px;
    }

    @media (max-width: 450px){
        margin-top: 20px;
        z-index: 1;
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
