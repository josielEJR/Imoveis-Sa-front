import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
`

export const Container = styled.div`
    margin: 0 5px;

    @media (max-width: 1464px){
        max-width: 946px;
        margin: 0 auto;
    }

    @media (max-width: 1220px){
        max-width: 850px;
    }

    @media (max-width: 900px){
        max-width: 700px;
    }

    @media (max-width: 710px){
        max-width: 400px;
    }

    @media (max-width: 450px){
        margin: 0 auto;
    }
`

export const CardsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px 30px;
`

export const ConsultorSection = styled.section`
    width: 100%;
`

export const Text = styled.div`
    font-weight: 700;
    display: flex;
    gap: 20px;
    width: 100%;
`

export const Consultores = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Consultor = styled.div`
    cursor: pointer;
    display: flex;
    gap: 10px;

    & .icon{
        height: 60px;
        width: 25px;
    }
`

export const ConsultorInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const ConsultorNome = styled.span`
    font-size: 22px;
`

export const ConsultorEmail = styled.span`
    font-size: 15px;
    font-style: italic;
`

export const VisitaButton = styled.button`
    text-decoration: ${props => props.underline ? "underline" : "none"};
`

export const SelectorSection = styled.div`
    width: 100%;
`

export const Selectors = styled.div`
    width: 175px;
    height: 21px;
    line-height: 21px;
    display: flex;
    justify-content: center;
    margin: 20px auto 0;
`

export const IndexSelector = styled.button`
    margin: 0 5px;
    background-color: ${({selected}) => selected === "true" ? "black" : "#454545"};
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 20px;
`

export const Error = styled.div`
    width: 100%;
    font-size: 28px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;

    & .icon{
        width: 100%;
    }
`