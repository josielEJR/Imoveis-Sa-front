import styled from "styled-components";

export const Wrapper = styled.main`
    width: 100%;
    max-width: 1870px;
    margin: auto;

    @media (max-width: 1464px){
        max-width: 1200px;
    }

    @media (max-width: 1220px){
        max-width: 900px;
    }

    @media (max-width: 900px){
        max-width: 600px;
    }

    @media (max-width: 600px){
        max-width: 300px;
    }

    @media (max-width: 280px){
        max-width: 260px;
    }
`

export const Container = styled.div`
    width: 1446px;
    margin: 150px auto 200px;
    display: flex;
    flex-wrap: wrap;
    gap: 100px;

    @media (max-width: 1464px){
        width: 1200px;
    }

    @media (max-width: 1220px){
        max-width: 900px;
    }

    @media (max-width: 900px){
        max-width: 600px;
    }

    @media (max-width: 600px){
        max-width: 300px;
    }

    @media (max-width: 280px){
        max-width: 260px;
        margin: 100px auto 150px;
    }
`

export const LocationSection = styled.section`
    width: 1444px;
    height: 63px;
    border-left: 5px solid #454545;
    display: flex;
    padding: 12px 25px;
    gap: 450px;

    @media (max-width: 1464px){
        width: 1198px;
    }

    @media (max-width: 1220px){
        max-width: 896px;
        gap: 160px;
    }

    @media (max-width: 900px){
        max-width: 596px;
        height: 100px;
        display: flex;
        align-items: center;
    }

    @media (max-width: 600px){
        gap: 0;
        display: flex;
        flex-wrap: wrap;
        height: 170px;
        width: 300px;
        margin: 0;
    }
`

export const LocationText = styled.div`
    width: 492px;
    height: 39px;
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;

    @media (max-width: 1464px){
        font-size: 23px;
    }

    @media (max-width: 1220px){
        font-size: 23px;
    }

    @media (max-width: 900px){
        height: 80px;
    }
`

export const LocationLabel = styled.div`
    width: 500px;
    height: 39px;
    padding: 0 10px;
    border-radius: 8px;
    background-color: #D9D9D9;
    display: flex;
    color: #454545;
    gap: 25px;

    @media (max-width: 600px){
        padding: 0;
    }
`

export const LocationIcon = styled.div`
    display: flex;
    align-items: center;
    font-size: 35px;

    @media (max-width: 1464px){
        font-size: 23px;
    }
`

export const LocationInput = styled.input`
    width: 100%;
    height: 29px;
    font-size: 24px;
    font-weight: 300;
    line-height: 29px;
    padding: 5px;
    box-sizing: content-box;
    background-color: #D9D9D9;

    @media (max-width: 900px){
        font-size: 14px;
    }

    @media (max-width: 280px){
        width: 70%;
    }
`