import React from 'react'
import { Wrapper, Container, Nome } from './style'
import About from './components/About'
import Imoveis from './components/Imoveis'
import { useLocation } from 'react-router-dom'


const Corretor = () => {
  const Location = useLocation ()
  const { data } = Location.state || {}
  return (
    <Wrapper>
      <Container>
        <Nome>
          {data.nome}
        </Nome>
        <About />
        <Imoveis />
      </Container>
    </Wrapper>
  )
}

export default Corretor
