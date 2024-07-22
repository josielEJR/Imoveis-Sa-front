import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1870px;
    margin: 0 auto;
    gap: 150px;
    align-items: center;
    justify-content: space-around;

    

    @media (max-width: 950px){
        gap: 50px;
    }
`