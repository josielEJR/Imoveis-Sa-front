import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 300px;
  width: 100%;
  text-align: center;
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`

export const CloseButton = styled.button`
  margin-top: 15px;
  background: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
`

export const TitleBox = styled.h2``

export const Input = styled.input`

`