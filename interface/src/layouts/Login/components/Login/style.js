import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
`

export const Container = styled.div`
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 600px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid white;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    border-radius: 10px;
    
    @media (max-width: 900px) {
        width: 90%;
        height: 650px;
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
    margin-bottom: 20px;
    font-size: 30px;
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

    @media (max-width: 900px ) {
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

export const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-top: 40px;

    @media (max-width: 540px ) {
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
`

export const RememberMe = styled.label`
    display: flex;
    align-items: center;
    font-size: 20px;
    color: white;
`

export const Checkbox = styled.input`
    margin-right: 8px;
`

export const ForgotPassword = styled.a`
    font-size: 20px;
    color: white;
    cursor: pointer;
    
&:hover {
    text-decoration: underline;
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
export const LoginButton = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 40px;
    border-radius: 20px;
    background-color: black;
    color: white;
    font-size: 18px;
    cursor: pointer;
    animation: ${({ animate }) => animate ? clickAnimation: 'none'} 0.3s ease-in-out;

    @media (max-width: 900px) {
        width: 100%;
    }
`

export const Signup = styled.a`
    font-size: 20px;
    color: white;
    cursor: pointer;
    margin-top: 50px;
  
  &:hover {
    text-decoration: underline;
  }
`

export const LoginError = styled.div`
  color: red;
  height: 20px;
  margin-top: 10px;
`