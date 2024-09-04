import styled from "styled-components";

export const Wrapper = styled.main`
    width: 100%;
    max-width: 1870px;
    margin: auto;
`

export const Container = styled.div`
    width: 1446px;
    margin: 150px auto 200px;
    display: flex;
    flex-wrap: wrap;
    gap: 100px;

    @media (max-width: 1464px){
        max-width: 1200px;
        width: 100%;
    }

    @media (max-width: 1220px){
        max-width: 900px;
    }

    @media (max-width: 900px){
        max-width: 800px;
    }

    @media (max-width: 600px){
        max-width: 450px;
    }
`