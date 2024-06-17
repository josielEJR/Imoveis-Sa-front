import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import { ContentLink } from '../../style'

const Login = () => {

    const handleLogin = () => {
        return (
            localStorage.length === 0
                ?
                <NavLink
                    to="/login"
                    className="mr-4">
                    <FontAwesomeIcon icon={faCircleUser} /> Entrar
                </NavLink>
                :
                <div className="dropdown">
                    <div className='p-2' id='usuario'><FontAwesomeIcon icon={faCircleUser} /> {localStorage.currentUserNome}</div>
                    <div className="dropdown-content bg-blue-600">
                        <button onClick={() => {
                            localStorage.clear()
                            window.location.reload()
                        }}>Log out</button>
                    </div>
                </div>
        )
    }

    return (
        <ContentLink>
            {handleLogin()}
        </ContentLink>
    )
}

export default Login