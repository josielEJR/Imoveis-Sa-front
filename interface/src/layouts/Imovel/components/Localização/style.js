import styled from "styled-components"

export const Wrapper = styled.div`
    margin-top: 150px;
`

export const Container = styled.div`
    display: flex;
    max-width: 1445px;
    margin: 0 auto;
    padding: 20px;
    flex-direction: column;
    gap: 50px;
`

export const TitleWrapper = styled.div`
    display: flex;
    gap: 20px;
`

export const Title = styled.div`
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    text-align: left;
    position: relative;
    display: inline-block;
    cursor: pointer;
    order: ${(props) => props.order};

    &::after {
    content: '';
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    width: 150px;
    height: 6px;
    background-color: #454545;
    position: relative;
    bottom: -15px;
    left: 0;
    }
`

