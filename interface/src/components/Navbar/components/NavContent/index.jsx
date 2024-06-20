import NavOption from './components/NavOption'
import Anunciar from './components/Anunciar'
import Login from './components/Login'

import { NavContent } from './style'

const Content = () => {
    return (
        <NavContent>
            <NavOption tipo={"Comprar"} url={"http://localhost:3001/imoveis/cidadesvenda"} right="280" />

            <NavOption tipo={"Alugar"} url={"http://localhost:3001/imoveis/cidadesaluguel"} right="280" />

            <Anunciar />

            <NavOption tipo={"Ajuda"}/>

            <Login />
        </NavContent>
    )
}

export default Content