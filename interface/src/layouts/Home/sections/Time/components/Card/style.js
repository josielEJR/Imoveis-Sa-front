import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;

    @media (max-width: 450px) {
        gap: 0;
    }
`;

export const CardContent = styled.div`
    max-width: 460px;
    background-color: pink;
    display: flex;
    flex-direction: column;
    gap: 45px;
    margin-top: auto;
`
// aqui vai ficar a imagen 
export const CardContainer = styled.div`
    width: 100%;
    max-width: 450px;
    height: 630px;
    padding: 20px;
    display: flex;

    @media (min-width: 949px) {
        width: 100%;
    }

    @media (min-width: 950px) {
        width: 50%;
    }

    @media (min-width: 1280px) {
        width: 33.33%;
    }
`

export const Article = styled.div`
    background-color: aquamarine;
    padding: 10px;
    font-size: 20px;
    font-weight: 300;
    line-height: 16px;
`

export const Nome = styled.div`
    background-color: beige;
    font-size: 36px;
    font-weight: 700;
    line-height: 43.57px;
`

export const Telefone = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 16px;
`

export const Email = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 16px;
`