import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faHeart, faBell } from '@fortawesome/free-regular-svg-icons'

import { ContentLink, Dropdown, Li } from '../../style'
import { LoginButton, LoginLabel } from './style'

const Login = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false)

    const handleLogin = () => {
        if (localStorage.length === 0) {
            return (
                <NavLink
                    to="/login"
                >
                    <FontAwesomeIcon icon={faCircleUser} /> Entrar
                </NavLink>
            )
        } else {
            return (
                <button id='usuario'><FontAwesomeIcon icon={faCircleUser} style={{ fill: "white" }} /> {localStorage.currentUserNome}</button>
            )
        }
    }

    const handleDropdown = () => {
        if (dropdownVisible) {
            return (
                <Dropdown right={0}>
                    <ul>
                        {localStorage.length === 0 &&
                            <>
                                <LoginLabel>Entre para ver seus favoritos, visitas e propostas</LoginLabel>
                                <Li>
                                    <LoginButton onClick={() => window.location.href = "/login"}>Entrar</LoginButton>
                                </Li>
                            </>
                        }
                        <Li>
                            <NavLink
                                to="/favoritos"
                            >
                                <FontAwesomeIcon icon={faHeart} /> Imóveis favoritos
                            </NavLink>
                        </Li>
                        <Li>
                            <NavLink
                                to="/alertas"
                            >
                                <FontAwesomeIcon icon={faBell} /> Propostas enviadas
                            </NavLink>
                        </Li>
                        <Li>
                            <NavLink
                                to="/propostas"
                            >
                                <FontAwesomeIcon icon={faCircleUser} /> Visitas agendadas
                            </NavLink>
                        </Li>
                        {localStorage.length > 0 &&
                            <Li>
                                <button onClick={() => {
                                    localStorage.clear()
                                    setTimeout(() => {
                                        window.location.reload()
                                    }, 200)
                                }}>Sair da conta</button>
                            </Li>
                        }
                    </ul>
                </Dropdown>
            )
        }
    }

    return (
        <ContentLink onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)}>
            {handleLogin()}

            {handleDropdown()}
        </ContentLink>
    )
}

export default Login