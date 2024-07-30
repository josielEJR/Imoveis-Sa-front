import styled, {keyframes} from "styled-components"

const growSelctor = keyframes`
    0% {flex-grow: 0}
    100% {flex-grow: 1}
    
`

const shrinkSelector = keyframes`
    0% {flex-grow: 1}
    100% {flex-grow: 0}

`

export const WrapperNavButton = styled.div`
    width: 100%;
    height: 20px;
`

export const ContainerNavButton = styled.div`
    display: flex;
    width: 160px;
    height: 100%;
    margin: auto;

    @media (min-width: 450px){
        width: 180px;
    }
`

export const NavButton = styled.button`
    flex-grow: ${props => props.selected === "true" ? 1 : 0};
    animation: ${props => props.selected === "true" ? growSelctor : shrinkSelector} 0.6s;
    background-color: ${props => props.selected === "true" ? '#454545' : 'black'};
    width: ${(props) => props.width}px;
    margin: 0 5px;
    height: 20px;
`