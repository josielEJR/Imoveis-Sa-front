import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { Dropdown, Title, Li } from '../../style'

const Itens = ({ lista, redirect }) => {

    const [cidades, setCidades] = useState([])

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
                <Dropdown>
                    <Title>Cidade</Title>
                    <ul>
                        {cidades.map(elem => (
                            <Li key={elem.cidade}>
                                <Link
                                    to={{
                                        pathname: `/${redirect}`,
                                        search: `?cidade=${elem.cidade}`
                                    }}
                                >{elem.cidade}</Link>
                            </Li>
                        ))}
                    </ul>
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