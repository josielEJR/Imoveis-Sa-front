import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div``

export const IconWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100px;
    height: 100px;
    padding: 0 10px;
    gap: 20px;
`

export const Options = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ShareOptionsWrapper = styled.div`
    position: absolute;
    left: 20%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
    background-color: black;
    color: white;
    gap: 20px;
    font-size: 20px;
    flex-direction: column;
    display: flex;
    width: 450px;
`

export const Url = styled.p`
    color: black;
    border-radius: 10px;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;        
    white-space: nowrap;      
    overflow: hidden;         
    text-overflow: ellipsis; 
`

export const OptionsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
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

export const BotãoUrl = styled.button`
    border-radius: 10px;
    background-color: white;
    color: black;
    animation: ${({ animate }) => animate ? clickAnimation: 'none'} 0.3s ease-in-out;
`

export const ShareOption = styled.div`
    margin-bottom: 10px;
`

export const Tag = styled.a`
    color: #333;
    text-decoration: none;
    font-size: 14px;
`
