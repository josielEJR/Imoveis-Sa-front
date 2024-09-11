import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
`

export const Container = styled.div`
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 900px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid white;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    border-radius: 10px;
    
    @media (max-width: 910px) {
        width: 90%;
        height: 900px;
        padding: 50px;        
 }
    `

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (max-width: 900px ) {       
    }
`

export const Title = styled.h2`
    margin-bottom: 10px;
    font-size: 40px;
    color: white;
    font-weight: bold;
`

export const Input = styled.input`
    width: 100%;
    height: 60px;
    padding: 20px;
    margin: 20px;
    border: 1px solid ${({ error }) => (error ? 'red' : '#ccc')};
    border-radius: 25px;
    box-sizing: border-box;
    font-size: 15px;

    @media (max-width: 910px ) {  
        width: 100%;
    }
`

export const PasswordWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`

export const EyeIcon = styled.span`
    position: absolute;
    top: -55px;
    right: 30px;
    cursor: pointer;
    user-select: none;
    opacity: 0.4;
    transition: opacity 0.3s;
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

export const CadastroButton = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 40px;
    border-radius: 20px;
    background-color: black;
    color: white;
    font-size: 20px;
    cursor: pointer;
    animation: ${({ animate }) => animate ? clickAnimation: 'none'} 0.3s ease-in-out;

    @media (max-width: 910px) {
        width: 100%;
    }
`

export const ErroCadastro = styled.div`
    height: 10px;
    color: red;
    font-size: 18px;
    font-weight: 700;

    @media (max-width: 450px ) {  
        font-size: 16px;
    }

`

export const TextContainer = styled.p`
    margin-top: 10px;
    font-size: 20px;
    color: white;
`

export const HighlightedLink = styled.a`
    color: #007bff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`