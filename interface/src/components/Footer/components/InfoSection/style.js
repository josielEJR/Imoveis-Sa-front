import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
`

export const Container = styled.div`
    width: 70%;
    margin: 30px auto;
    display: flex;

    @media (max-width: 1280px) {
        justify-content: center;
    }
`

export const ContactSection = styled.div`
    width: 400px;

    @media (max-width: 1280px) {
        width: 100%;
        text-align: center;
    }

    @media (max-width: 450px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const LogoSection = styled.div`
    font-size: 48px;
    font-weight: 700;
    margin: 60px 0;

    @media (max-width: 1280px){
        width: 110px;
        margin: 60px auto;
    }
`

export const Logo = styled.img`
    width: 100px;
`

export const Contact = styled.div`
    margin: 30px 0;
    font-size: 15px;
    font-weight: 700;

    @media (max-width: 451px) {
        font-size: 12px;
    }
`

export const ContactInfo = styled.div`
    text-decoration: underline;
`

export const SocialMediaSection = styled.div`
    font-size: 12px;
    font-weight: 400;
`

export const SocialMediaLabel = styled.div``

export const SocialMedia = styled.div`
    margin-top: 30px;
    font-size: 35px;
`

export const SocialMediaLink = styled.div`
    display: inline-block;
    margin-right: 20px;
`

export const MapSection = styled.div`
    width: 507px;
    height: 308px;
    color: black;
    background-color: white;
    margin: auto;

    @media (max-width: 950px) {
        width: 357px;
        height: 258px;
    }

    @media (max-width: 451px) {
        width: 250px;
        height: 208px;
    }
`

export const Map = styled.iframe``