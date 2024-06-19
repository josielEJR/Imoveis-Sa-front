import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { ContentLink } from '../../style'

const Anunciar = () => {
    return (
        <>
            {localStorage.tipo != undefined ?
                <ContentLink>
                    <NavLink to="/anunciarimovel">
                        <span className='p-1'>Anunciar</span><FontAwesomeIcon icon={faAngleDown} />
                    </NavLink>
                </ContentLink>
                :
                ''}
        </>
    )
}

export default Anunciar