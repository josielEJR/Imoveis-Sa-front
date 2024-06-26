import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { Dropdown, Title, SideDropdown, DropdownContent, Li } from '../../style'

const Itens = ({ lista, redirect, right }) => {

    const [cidades, setCidades] = useState([])
    const [selected, setSelected] = useState('')

    const handleMouseEnter = (value) => {
        setSelected(value)
    }

    const handleMouseLeave = () => {
        setSelected('')
    }

    useEffect(() => {
        if (lista) {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            fetch(lista, requestOptions)
                .then((response) => response.text())
                .then((result) => JSON.parse(result))
                .then((result) => setCidades(result))
                .catch((error) => console.error(error));
        }
    }, [cidades])

    const setDropdown = () => {
        if (lista) {
            return (
                <Dropdown onMouseLeave={handleMouseLeave}>
                    <Title>Cidade</Title>
                    <ul>
                        {cidades.map(elem => (
                            <Li key={elem.cidade} onMouseEnter={() => handleMouseEnter(elem.cidade)} weight={selected === elem.cidade ? "bold" : ''}>
                                <button>{elem.cidade}</button> {selected === elem.cidade ? <FontAwesomeIcon icon={faAngleRight} /> : ''}
                            </Li>
                        ))}
                    </ul>

                    {selected &&
                        <SideDropdown right={right}>
                            <DropdownContent>
                                <Title>Tipo de imóvel</Title>
                                <ul>
                                    <Li>
                                        <a href={`/${redirect}?cidade=${selected}&tipo=casa`}>Casas</a>
                                    </Li>
                                    <Li>
                                        <a href={`/${redirect}?cidade=${selected}&tipo=apartamento`}>Apartamentos</a>
                                    </Li>
                                    <Li>
                                        <a href={`/${redirect}?cidade=${selected}`}>Todos</a>
                                    </Li>
                                </ul>
                            </DropdownContent>
                        </SideDropdown>
                    }
                </Dropdown>
            )
        } else {
            return (
                <Dropdown>
                    <Title>Ajuda</Title>
                    <ul>
                        <Li key="duvidasfrequentes">
                            <Link
                                to={`/duvidasfrequentes`}
                            >Duvidas frequentes</Link>
                        </Li>
                        <Li key="sobrenos">
                            <Link
                                to={`/sobrenos`}
                            >Sobre nós</Link>
                        </Li>
                    </ul>
                </Dropdown>
            )
        }
    }

    return (
        <>
            {setDropdown()}
        </>
    )
}

export default Itens