import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Comprar from './components/Comprar'
import Alugar from './components/Alugar'
import Anunciar from './components/Anunciar'
import Ajuda from './components/Ajuda'
import Login from './components/Login'

const Content = () => {
    return (
        <div>
            <Comprar />

            <Alugar />

            <Anunciar />

            <Ajuda />

            <Login />
        </div>
    )
}

export default Content