import styled from "styled-components";

export const Wrapper = styled.div`
    
`

export const Container = styled.div`
    display: flex;
`

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const CardContainer = styled.div`
    width: 100%;
    height: 630px;

    @media (min-width: 1000px){
        width: 600px;
    }

    @media (min-width: 1200px){
        max-width: 700px;
    }
`

