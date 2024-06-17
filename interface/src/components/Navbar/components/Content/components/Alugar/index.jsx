import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { ContentLink } from '../../style'

const Alugar = () => {
    return (
        <ContentLink>
            <NavLink to="/alugar"><span className='p-1'>Alugar</span><FontAwesomeIcon icon={faAngleDown} /></NavLink>
        </ContentLink>
    )
}

export default Alugar