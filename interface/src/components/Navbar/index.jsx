import { NavLink } from 'react-router-dom'

import '../../Style/dropdown.css'

import Content from './components/Content/index'

import { NavContainer, Nav, Logo } from './style'

const Navbar = () => {
    return (
        <NavContainer>
            <Nav>
                <Logo>
                    <NavLink to="/home">
                        <img src="logo.svg" alt="" style={{ width: '90px' }} />
                    </NavLink>
                </Logo>

                <Content />
            </Nav>
        </NavContainer>
    )
}

export default Navbar