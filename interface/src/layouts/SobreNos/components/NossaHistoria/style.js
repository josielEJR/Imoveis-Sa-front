import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1870px;
    margin: 0 auto;
`;

export const HistoryContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    max-width: 1870px;
    margin: 0 auto;
`;

export const HistoryTitle = styled.h2`
    font-size: 30px;
    font-weight: bold;
    color: black;
    margin-bottom: 40px;
`;

export const HistoryContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 40px;
    
    &:nth-child(odd) {
        flex-direction: row;
    }

    &:nth-child(even) {
        flex-direction: row-reverse;
    }

    @media (max-width: 1580px) {
        flex-direction: column;
        align-items: center;
        
        &:nth-child(even),
        &:nth-child(odd) {
            flex-direction: column;
        }
    }
`;

export const HistoryImage = styled.img`
    width: 800px;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 1580px) {
        width: 80%;
        height: auto;
    }
`;

export const HistoryText = styled.div`
    margin: 40px auto;
    width: 50%;
    padding: 0 20px;

    @media (max-width: 1580px) {
        width: 90%;
        margin: 20px 0;
    }
`;

export const HistoryParagraph = styled.p`
    font-size: 20px;
    color: black;
    line-height: 2;
    margin-bottom: 20px;
`;

export const HistorySubTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: black;
    margin-bottom: 20px;
`;
