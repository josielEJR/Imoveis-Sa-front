import styled from 'styled-components'

export const Dropdown = styled.div`
    position: absolute;
    width: 301px;
    font-weight: 300;
    font-size: 20px;
    background-color: #F2F2F2;
    box-sizing: border-box;
    padding: 29px;
    box-shadow: 0px 4px 8px 0px #00000026;
`

export const ContentLink = styled.span`
    display: inline-block;
    color: #141414;
    text-align: center;
    margin: 28px 15px 26px 15px;
    font-weight: 300px;
    font-size: 20px;
    font-family: Inter;
    &:hover ${Dropdown} {
        color: red;
    }
`

export const Title = styled.div`
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-weight: 600;
`

export const Li = styled.li`
    margin-top: 14px;
`