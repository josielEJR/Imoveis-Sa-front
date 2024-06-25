import styled, { keyframes } from 'styled-components'

const navSectionResponsiveSlide = keyframes`
    0% {left: 100%;}
    100% {left: 20%;}
`
const navSectionResponsiveSlideReverse = keyframes`
    0% {left: 20%;}
    100% {left: 100%;}
`

const handleSectionSlide = (display) => {
    if(display === "true"){
        return navSectionResponsiveSlide
    }else if(display === "false"){
        return navSectionResponsiveSlideReverse
    }
}

export const MenuButton = styled.div`
    display: none;

    @media (max-width: 375px) {
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

export const NavContent = styled.div`
    margin-right: 50px;

    @media (max-width: 375px) {
        position: fixed;
        width: 300px;
        height: 100%;
        background-color: #050505;
        left: ${props => props.display === "true" ? "20%" : "100%"};
        animation-name: ${props => handleSectionSlide(props.display)};
        animation-duration: 0.5s;
    }
`

export const ContentLink = styled.span`
    display: inline-block;
    color: #EEEEEE;
    margin: 28px 20px 26px 20px;
    font-weight: 300px;
    font-size: 20px;
    @media (max-width: 375px) {
        display: block;
    }
`

export const Dropdown = styled.div`
    position: absolute;
    width: 263px;
    right: ${props => props.right + "px"};
    font-size: 18px;
    background-color: #050505;
    box-sizing: border-box;
    padding: 29px;
    box-shadow: 0px 4px 8px 0px #00000026;
    border-radius: 0 0 3px 3px;
`

export const SideDropdown = styled.div`
    position: absolute;
    width: 280px;
    right: ${props => props.right + "px"};
    top: 0;
    font-size: 18px;
    background-color: #050505;
    box-sizing: border-box;
    padding: 29px;
    box-shadow: 0px 4px 8px 0px #00000026;
    overflow: hidden;
    border-radius: 3px;
`

const textSlide = keyframes`
    0% {left: -150%;}
    100% {left: 0;}
`

export const DropdownContent = styled.div`
    position: relative;
    left: 0;
    animation-name: ${textSlide};
    animation-duration: 0.4s;
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