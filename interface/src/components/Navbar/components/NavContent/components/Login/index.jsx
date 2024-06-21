import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'

import { ContentLink, Dropdown } from '../../style'

const Login = () => {

    const handleLogin = () => {
        if (localStorage.length === 0) {
            return (
                <ContentLink>
                    <NavLink
                        to="/login"
                    >
                        <FontAwesomeIcon icon={faCircleUser} /> Entrar
                    </NavLink>
                </ContentLink>
            )
        } else {
            return (
                <ContentLink>
                    <button id='usuario'><FontAwesomeIcon icon={faCircleUser} style={{fill: "white"}} /> {localStorage.currentUserNome}</button>


                </ContentLink>
            )
        }
    }

    return (
        <>
            {handleLogin()}
        </>
    )
}

export default Login