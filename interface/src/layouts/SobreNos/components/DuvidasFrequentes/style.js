import styled from 'styled-components';

export const Wrapper = styled.div``;

export const AccordionContainer = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
`;

export const AccordionItem = styled.div`
    border: 1px solid #ddd;
    border-radius: 20px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

export const AccordionHeader = styled.div`
    background-color: white;
    padding: 15px 20px;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media (max-width: 539px) {
        flex-direction: row;
        padding: 15px;
    }
`;

export const AccordionTitle = styled.div`
    flex: 1;
`;

export const AccordionContent = styled.div`
    max-height: ${({ isActive }) => (isActive ? '300px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease;
    padding: ${({ isActive }) => (isActive ? '15px' : '0 15px')};
    background-color: #f7f7f7;
    border-radius: 5px;
    
    p {
        margin: 0;
        padding: ${({ isActive }) => (isActive ? '10px 0' : '0')};
        transition: padding 0.3s ease;
    }
`;

export const Icon = styled.span`
    display: inline-block;
    transition: transform 0.3s ease;
    transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
    font-size: 20px;

    @media (max-width: 539px) {
        margin-left: 10px;
    }
`;
