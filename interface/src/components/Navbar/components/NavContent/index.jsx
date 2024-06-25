import { useState } from 'react'

import NavOption from './components/NavOption'
import Anunciar from './components/Anunciar'
import Login from './components/Login'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { MenuButton, NavContent } from './style'

const Content = () => {

    const [menuVisible, setMenuVisible] = useState("")

    const handleMenu = () => {
        menuVisible === "true" ? setMenuVisible("false") : setMenuVisible("true")
    }

    return (
        <>
            <MenuButton onClick={handleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </MenuButton>

            <NavContent display={menuVisible}>
                <MenuButton onClick={handleMenu}>
                    <FontAwesomeIcon icon={faXmark} />
                </MenuButton>

                <NavOption tipo={"Comprar"} url={"http://localhost:3001/imoveis/cidadesvenda"} right="-260" />

                <NavOption tipo={"Alugar"} url={"http://localhost:3001/imoveis/cidadesaluguel"} right="-260" />

                <Anunciar />

                <NavOption tipo={"Ajuda"} />

                <Login />
            </NavContent>
        </>
    )
}

export default Content