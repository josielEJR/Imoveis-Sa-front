import styled from "styled-components"

export const Wrapper = styled.div`
    max-width: 1870px;
    height: 1500px;
    margin: 0 auto;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
`

export const Image = styled.img`
    width: 100%;
    height: 1500px;
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
