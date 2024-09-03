import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
`;

export const ValuesSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 1870px;
    width: 100%;
    padding: 40px 0;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ValueCard = styled.div`
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0 10px;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 900px) {
        margin: 10px 0;
        width: 80%;
    }
`;

export const ValueIcon = styled.div`
    font-size: 3rem;
    color: black;
    margin-bottom: 10px;
`;

export const TitlleValue = styled.h3`
    margin-top: 10px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;

export const ValueTitle = styled.h3`
    font-size: 1.5rem;
    color: #333;
    margin-top: 10px;
`;
