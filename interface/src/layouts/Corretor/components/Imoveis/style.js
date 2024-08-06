import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 1260px;
    margin-top: 100px;
    background-color: orange;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    gap: 100px;
    flex-direction: column;
    display: flex;
    background-color: bisque;
`
export const CardContainer = styled.div`
    width: 1444px;
    height: 1260px;
    background-color: gray;
`

export const Titulo = styled.h1`
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    text-align: left;
    position: relative;
    display: inline-block;
    background-color: red;

    &::after {
    content: '';
    display: block;
    width: 60px;
    height: 6px;
    background-color: #454545;
    position: absolute;
    bottom: -15px;
    left: 0;
  }
`