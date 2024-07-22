import styled, { keyframes } from 'styled-components'

export const MenuButton = styled.div`
    display: none;

    @media (max-width: 950px) {
        display: block;
        width: 32px;
        height: 42px;
        text-align: center;
        line-height: 42px;
        margin: 28px 20px 28px 20px;
        font-size: 40px;
        color: #EEEEEE;
    }
`

const spin = keyframes`
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
`

export const CloseMenuButton = styled.div`
    display: none;

    @media (max-width: 950px) {
        display: ${props => props.visible === "true" ? 'block' : 'none'};
        width: 32px;
        height: 42px;
        text-align: center;
        line-height: 42px;
        margin: 28px 20px 28px 20px;
        font-size: 40px;
        color: #EEEEEE;
        animation: ${spin} 1s;
    }
`

const navSectionResponsiveSlide = keyframes`
    0% {right: -100%;}
    100% {right: 0;}
`
const navSectionResponsiveSlideReverse = keyframes`
    0% {right: 0;}
    100% {right: -100%;}
`

const handleSectionSlide = (display) => {
    if (display === "true") {
        return navSectionResponsiveSlide
    } else if (display === "false") {
        return navSectionResponsiveSlideReverse
    }
}

export const NavContent = styled.div`
    margin-right: 50px;

    @media (max-width: 950px) {
        position: fixed;
        width: 300px;
        height: 100%;
        background-color: #050505;
        right: ${props => props.display === "true" ? "0" : "-300%"};
        margin: 0;
        animation-name: ${props => handleSectionSlide(props.display)};
        animation-duration: 0.7s;
        overflow: scroll;
        overflow-x: hidden;
    }
`

export const ContentLink = styled.span`
    display: inline-block;
    color: #EEEEEE;
    margin: 28px 20px 26px 20px;
    font-weight: 300px;
    font-size: 20px;
    @media (max-width: 950px) {
        display: block;
    }
`

export const Dropdown = styled.div`
    position: absolute;
    width: 263px;
    margin-left: ${props => `${props.margin || 0}px`};
    font-size: 18px;
    background-color: #070707;
    box-sizing: border-box;
    padding: 29px;
    box-shadow: 0px 4px 8px 0px #00000026;
    border-radius: 0 0 3px 3px;

    @media (max-width: 950px) {
        position: unset;
        margin-left: 0;
    }
`

export const SideDropdown = styled.div`
    position: absolute;
    width: 280px;
    right: ${props => props.right + "px"};
    top: 0;
    font-size: 18px;
    background-color: #090909;
    box-sizing: border-box;
    padding: 29px;
    box-shadow: 0px 4px 8px 0px #00000026;
    overflow: hidden;
    border-radius: 3px;

    @media (max-width: 950px) {
        position: unset;
        padding: 20px;
        width: 205px;
    }
`

const textSlideLeft = keyframes`
    0% {left: -150%;}
    100% {left: 0;}
`

const textSlideTop = keyframes`
    0% {top: -200px;}
    100% {top: 0;}
`

export const DropdownContent = styled.div`
    position: relative;
    left: 0;
    animation-name: ${textSlideLeft};
    animation-duration: 0.4s;

    @media (max-width: 950px) {
        top: 0px;
        animation-name: ${textSlideTop};
        animation-duration: 0.4s;
    }
`

const rotateButton = keyframes`
    0%{transform: rotate(0deg)}
    100% {transform: rotate(90deg)}
`

export const Rotate = styled.div`
    @media (max-width: 950px) {
        transform: rotate(90deg);
        animation: ${rotateButton} 0.5s;
    }
`

export const Title = styled.div`
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-weight: 600;
`

export const Li = styled.li`
    padding-top: 7px;
    padding-bottom: 7px;
    font-weight: ${props => props.weight};
    display: flex;
    justify-content: space-between;
    &:hover {
        font-weight: bold;
    }
`