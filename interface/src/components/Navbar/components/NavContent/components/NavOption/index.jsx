import { useState } from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { ContentLink } from '../../style'

import Itens from './itens'

const NavOption = ({ tipo, url, right }) => {

    const [dropdownVisible, setDropdownVisible] = useState(false)

    const handleMouseEnter = () => {
        setDropdownVisible(true)
    }

    const handleMouseLeave = () => {
        setDropdownVisible(false)
    }

    const handleClick = () => {
        dropdownVisible ? setDropdownVisible(false) : setDropdownVisible(true)
    }

    const redirect = tipo.toLowerCase()

    return (
        <ContentLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div onClick={handleClick}>
                <span className='p-1'>{tipo}</span><FontAwesomeIcon icon={faAngleDown} />
            </div>

            {dropdownVisible && <Itens lista={url} redirect={redirect} right={right} />}
            {/* <Itens lista={url} redirect={redirect} right={right} /> */}
        </ContentLink>
    )
}

export default NavOption