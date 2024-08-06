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
`

export const LocationSection = styled.section`
    width: 1444px;
    height: 63px;
    border-left: 5px solid #454545;
    display: flex;
    padding: 12px 25px;
    gap: 450px;
`

export const LocationText = styled.div`
    width: 492px;
    height: 60px;
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
`

export const LocationLabel = styled.div`
    width: 500px;
    height: 60px;
    border-radius: 8px;
    background-color: #D9D9D9;
    display: flex;
    color: #454545;
    gap: 25px;
`

export const LocationIcon = styled.div`
    width: 35px;
    height: 35px;
`

export const LocationInput = styled.input`
    width: 100%;
    height: 29px;
    font-size: 24px;
    font-weight: 300;
    line-height: 29px;
    padding: 5px;
    box-sizing: content-box;
`