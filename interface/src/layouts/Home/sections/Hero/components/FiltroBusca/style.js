import styled, { css } from "styled-components"

export const ContainerFiltro = styled.div`
    display: flex;
    justify-content: center;
`

export const Filtro = styled.div`
    width: 1566px;
    border: 1px;
    display: flex;
    justify-content: space-around;
    align-items: center; 
    height: 160px;
    background-color: black;
    padding: 0 20px; 
    position: relative;
    top: -50px;
    
`
export const Busca = styled.button`
    width: 163.19px;
    height: 65.28px;
    background-color: #212121;
    position: relative;
    display: flex;
    color: #FFFFFF;
    ${({ error }) => error && css`
    border: 2px solid red; `}
    font-size: 20px;
    font-style: italic;
    line-height: 24.2px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`
export const Codigo = styled.input`
    width: 326.3px;
    height: 65.28px;
    background-color: #FFFFFF;
    position: relative;
    display: flex;
    border: 2px solid ${props => (props.error ? 'red' : '#ccc')};
    &:focus {
    border-color: ${props => (props.error ? 'red' : '#888')};
    }
    font-size: 20px;
    font-weight: 500px;
    line-height: 24.2px;
    text-align:left;
    padding-left: 10px;
    border-radius: 8px;
`
export const Bairros = styled.div`
    width: 326.3px;
    height: 65.28px;
    background-color: #FFFFFF;
    position: relative;
    font-size: 20px;
    font-weight: 500px;
    line-height: 24.2px;
    text-align:left ;
    padding: 20px;
    border-radius: 8px;
`
export const Tipo = styled.div`
    width: 326.3px;
    height: 65.28px;
    background-color: #FFFFFF;
    position: relative;
    font-size: 20px;
    font-weight: 500px;
    line-height: 24.2px;
    text-align:left ;
    padding: 20px;
    border-radius: 8px;
`
export const Comprar = styled.div`
    width: 228.47px;
    height: 65.28px;
    background-color: #FFFFFF;
    position: relative;
    font-size: 20px;
    font-weight: 500px;
    line-height: 24.2px;
    text-align:left ;
    padding: 20px;
    border-radius: 8px;
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
    width: 228.47px;
    position: relative;
    padding: 20px;
    transition: opacity 0.5s ease, max-height 0.5s ease;
    margin-top: 20px;
    background: #ffffff;
    flex-direction: column;
    right: 20px;
    border-radius: 8px;
    border: 2px solid #000;
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
`
export const UlBairros = styled.ul`
    position: relative;
    padding: 20px;
    transition: opacity 0.5s ease, max-height 0.5s ease;
    margin-top: 20px;
    background: #ffffff;
    flex-direction: column;
    width: 326.3px;
    right: 20px;
    border-radius: 8px;
    border: 2px solid #000;
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
    flex-direction: column;
    padding: 10px;
    color: red;
    font-size: large;
`
