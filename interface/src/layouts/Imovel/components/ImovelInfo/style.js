import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 0;

    @media (min-width: 1230px){
        margin-top: 150px;
    }
`

export const Container = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    max-width: 1445px;
    margin: 0 auto;
    padding: 20px;
`

export const Title = styled.div`
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;

    &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 60px;
    background-color: #454545;
    margin-right: 10px;
    }

    @media (min-width: 600px){
        font-size: 32px;
        line-height: 38px;
    }
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;
    
    @media (min-width: 1030px) {
        flex-direction: unset;
        gap: 20px;
    }
`