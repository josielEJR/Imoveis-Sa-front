import styled from "styled-components";

export const Wrapper = styled.div`   
`

export const DropHover = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    gap: 15px;
    margin: 0;
    left: 5%;
    z-index: 1;
    padding: 10px;
    width: 320px;
    background-color: #D9D9D9;

    @media (max-width: 960px) {
        position: absolute;
        left: ${(props) => props.leftPercentage};
        top: ${(props) => props.topPercentage}
    }

    @media (max-width: 590px){
        top: ${(props) => props.topPercentage}
    }   
`

export const Aba = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
    border-bottom: 23px solid #D9D9D9;
    top: 38%;
    left: 1%;
    transform: translateX(-50%) rotate(27deg) translateY(10px);
    z-index: 0;

    @media (max-width: 590px){
        top: -5%;
        left: 29%;
        transform: translateX(-50%) rotate(120deg) translateY(10px);
    }   
`

export const TextDrop = styled.div`
    font-size: 16px;
    font-weight: 300;
    line-height: 18px;
    text-align: center;
    z-index: 2;
`

export const Title = styled.div`
    font-size: 20px;
    text-align: center;

    &::after {
    content: '';
    display: block;
    width: 238px;
    height: 2px;
    background-color: #000000;
    }
`