import { NavLink } from 'react-router-dom'

import '../../Style/dropdown.css'

import Content from './components/NavContent/index'

import { Wrapper, Nav, Logo } from './style'

const Navbar = () => {
    return (
        <Wrapper>
            <Nav>
                <Logo>
                    <NavLink to="/home">
                        <img src="logo.svg" alt="" style={{ width: '90px' }} />
                    </NavLink>
                </Logo>

                <Content />
            </Nav>
        </Wrapper>
    )
}

export default Navbar