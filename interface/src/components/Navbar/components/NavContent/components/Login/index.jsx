import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import { ContentLink } from '../../style'

const Login = () => {

    const handleLogin = () => {
        if (localStorage.length === 0) {
            return (
                <NavLink
                    to="/login"
                    className="mr-4">
                    <FontAwesomeIcon icon={faCircleUser} /> Entrar
                </NavLink>
            )
        } else {
            return <button id='usuario'><FontAwesomeIcon icon={faCircleUser} /> {localStorage.currentUserNome}</button>
        }
    }

    return (
        <ContentLink>
            <button id='usuario'><FontAwesomeIcon icon={faCircleUser} /> {localStorage.currentUserNome}</button>
        </ContentLink>
    )
}

export default Login