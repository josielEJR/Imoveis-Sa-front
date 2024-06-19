import { useState } from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { ContentLink } from '../../style'

import Itens from './itens'

const NavOption = ({ tipo, url }) => {

    const [dropdownVisible, setDropdownVisible] = useState(false)

    const redirect = tipo.toLowerCase()

    const handleMouseEnter = () => {
        setDropdownVisible(true)
    }

    const handleMouseLeave = () => {
        setDropdownVisible(false)
    }

    return (
        <ContentLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link
                to={`/${redirect}`}
            ><span className='p-1'>{tipo}</span><FontAwesomeIcon icon={faAngleDown} /></Link>

            {dropdownVisible && <Itens lista={url} redirect={redirect} />}
        </ContentLink>
    )
}

export default NavOption