import { useState } from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { ContentLink, Dropdown, Title, Li } from '../../style'

const Comprar = () => {

    return (
        <>
            <ContentLink>
                <button>
                    <span className='p-1'>Comprar</span><FontAwesomeIcon icon={faAngleDown} />
                </button>
            </ContentLink>

            <Dropdown className='my__unique__button__class-asdf123'>
                <Title>Cidade</Title>
                <ul>
                    <Li>
                        <Link
                            to={'/comprar'}
                            search={`?`}
                        >São Paulo</Link>
                    </Li>
                    <Li>
                        <Link
                            to={'/comprar'}
                            search={`?`}
                        >Rio de Janeiro</Link>
                    </Li>
                    <Li>
                        <Link
                            to={'/comprar'}
                            search={`?`}
                        >Belo Horizonte</Link>
                    </Li>
                </ul>
            </Dropdown>
        </>
    )
}

export default Comprar