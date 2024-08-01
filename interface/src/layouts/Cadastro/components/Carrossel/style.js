import styled from "styled-components"

export const Wrapper = styled.div`
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    `

export const Image = styled.img`
    width: 100%;
    height: 100vh;
    display: flex;
    transition: transform 5.0s ease-in-out;
    transform: translateX(${({ elemento }) => (elemento)}) ;
    `

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    `
