import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
`;

export const Titulo = styled.div`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: white;
    padding: 20px 0;
    color: black;
`;

export const VideoContainer = styled.div`
    width: 100%;    
    padding: 20px;
        
    img, iframe {
        margin: 0 auto;
        max-width: 1000px;
        height: 500px;
        border-radius: 10px;
    }
`;
