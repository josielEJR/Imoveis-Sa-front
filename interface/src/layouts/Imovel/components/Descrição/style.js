import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 150px;
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
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    text-align: left;
    position: relative;
    display: inline-block;

    &::after {
    content: '';
    display: block;
    width: 60px;
    height: 6px;
    background-color: #454545;
    position: relative;
    bottom: -15px;
    left: 0;
    }
`
