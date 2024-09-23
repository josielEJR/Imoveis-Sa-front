import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div``

const rotate = keyframes`
  50% {
    transform: translateY(-10px);
  }
`

export const RotatingCircle = styled.div`
  display: block;
  width: 120px;
  height: 120px;
  border: 5px solid var(--base);
  overflow: hidden;
  padding: 10px 5px 0;
  animation: rotate 2s linear infinite;
  margin: 0 auto 5px;
`

export const LoadingSpinner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.941);
`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: -10px;
`