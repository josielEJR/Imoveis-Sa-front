import { NavLink } from 'react-router-dom'

import '../../Style/dropdown.css'

import Content from './components/NavContent/index'

import { Nav, Logo } from './style'

const Navbar = () => {
    return (
        <Nav>
            <Logo>
                <NavLink to="/home">
                    <img src="logo.svg" alt="" style={{ width: '90px' }} />
                </NavLink>
            </Logo>

            <Content />
        </Nav>
    )
}

export default Navbar