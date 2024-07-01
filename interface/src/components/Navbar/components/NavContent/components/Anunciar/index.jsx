import { NavLink } from 'react-router-dom'

import { ContentLink } from '../../style'

const Anunciar = () => {
    return (
        <>
            <ContentLink>
                <NavLink to="/anunciarimovel">
                    <span className='p-1'>Anunciar</span>
                </NavLink>
            </ContentLink>
        </>
    )
}

export default Anunciar