import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faHeart, faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { ContentLink, Dropdown, Ul, Li, Button } from '../../style'
import { LoginButton, LoginLabel } from './style'

const Login = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false)

    const handleClick = () => {
        dropdownVisible ? setDropdownVisible(false) : setDropdownVisible(true)
    }

    const handleLogin = () => {
        if (localStorage.length === 0 && window.outerWidth > 950) {
            return (
                <NavLink to={'login'} onClick={handleClick}>
                    <FontAwesomeIcon icon={faCircleUser} /> Entrar
                </NavLink>
            )
        } else if (localStorage.length !== 0) {
            return (
                <Button id='usuario'>
                    <FontAwesomeIcon icon={faCircleUser} style={{ fill: "white" }} /> {localStorage.currentUserNome}
                </Button>
            )
        }
    }

    const handleDropdown = () => {
        if (dropdownVisible || window.outerWidth <= 950) {
            if (!localStorage.token || !localStorage.token.includes("Bearer")) {
                return (
                    <Dropdown margin={-113}>
                        <Ul>
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
                                    <Button onClick={() => {
                                        localStorage.clear()
                                        setTimeout(() => {
                                            window.location.reload()
                                        }, 200)
                                    }}>Sair da conta</Button>
                                </Li>
                            }
                        </Ul>
                    </Dropdown>
                )
            } else {
                return (
                    <Dropdown margin={-113}>
                        <Ul>
                            <Li>
                                <NavLink
                                    to="/imoveispendentes"
                                >
                                    <FontAwesomeIcon icon={faEnvelope} /> Imóveis pendentes à aprovação
                                </NavLink>
                            </Li>
                            <Li>
                                <NavLink
                                    to="/imoveispendentes"
                                >
                                    <FontAwesomeIcon icon={faEnvelope} /> Imóveis pendentes à aprovação
                                </NavLink>
                            </Li>
                            <Li>
                                <NavLink
                                    to="/solicitacoesvisita"
                                >
                                    <FontAwesomeIcon icon={faBell} /> Solicitações de agendas
                                </NavLink>
                            </Li>
                            <Li>
                                <Button onClick={() => {
                                    localStorage.clear()
                                    setTimeout(() => {
                                        window.location.reload()
                                    }, 200)
                                }}>Sair da conta</Button>
                            </Li>
                        </Ul>
                    </Dropdown>
                )
            }
        }
    }

    return (
        <ContentLink onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)} >
            {handleLogin()}

            {handleDropdown()}
        </ContentLink>
    )
}

export default Login