import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
`

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 1450px;
    height: 1300px;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid white;
    transform: translate(-50%, -50%);
    display: flex;
    padding: 20px;
    border-radius: 10px;
    gap: 20px;

    @media (max-width: 1490px) {
        width: 90%;
    }
`

export const FormConteiner = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 20px;

    @media (max-width: 560px) {
        display: flex;
        overflow-y: scroll;
        flex-direction: column;
        gap: 5px;
    }
`

export const LabelContainer = styled.div`
    padding: 20px;
`

export const Label = styled.label`
    font-size: 20px;
    margin-bottom: 5px;
    display: flex;
    color: white;
`

export const Title = styled.h2`
    font-size: 40px;
    color: white;
    font-weight: bold;
`

export const TitleContainer = styled.div`
    width: 100%;
    max-width: 1370px;
` 

export const Input = styled.input`
    max-width: 1000px;
    width: 100%;
    height: 65px;
    padding: 20px;
    border-radius: 25px;
    box-sizing: border-box;
    font-size: 15px;
`

export const Select = styled.select`
    max-width: 1000px;
    width: 100%;
    height: 65px;
    padding: 20px;
    padding-right: 40px;
    margin: 20px;
    border-radius: 25px;
    box-sizing: border-box;
    font-size: 15px;
    border: 1px solid #ccc;
    background-color: white;
    appearance: none;
    cursor: pointer;
    position: relative;
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='10' viewBox='0 0 14 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l6 6 6-6' stroke='%23333' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    margin: 0;
    
    &:hover {
        border: 1px solid #ccc;
        border-radius: 25px;
    }
`

const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`

export const AnunciarButton = styled.button`
    width: 50%;
    padding: 10px;
    margin-top: 40px;
    border-radius: 20px;
    background-color: black;
    color: white;
    font-size: 20px;
    cursor: pointer;
    animation: ${({ animate }) => animate ? clickAnimation: 'none'} 0.3s ease-in-out;

    @media (max-width: 560px) {
        width: 100%;
    }
`

export const Error = styled.div`
    font-size: 20px;
    color: red;
    font-weight: bold;

    @media (max-width: 560px) {
        font-size: 15px;
    }
`