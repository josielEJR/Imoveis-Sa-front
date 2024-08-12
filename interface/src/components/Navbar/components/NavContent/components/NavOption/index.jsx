import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { ContentLink, Link, Text } from '../../style'

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
            <Link href={`imoveis?disponibilidade=${redirect}`} onClick={handleClick}>
                <Text className='p-1'>{tipo}</Text><FontAwesomeIcon icon={faAngleDown} />
            </Link>

            {dropdownVisible && <Itens lista={url} redirect={redirect} right={right} />}
        </ContentLink>
    )
}

export default NavOption