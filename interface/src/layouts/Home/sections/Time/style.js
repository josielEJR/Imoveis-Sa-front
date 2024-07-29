import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-top: 100px;
    

    @media (max-width: 950px) {
        margin-top: 50px;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px;
    max-width: 1600px;
`

export const Title = styled.div`
    font-weight: 800;
    font-size: 38px;
`



