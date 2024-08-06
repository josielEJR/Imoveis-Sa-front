import React from 'react'
import { Wrapper, Container, Nome } from './style'
import About from './components/About'
import Imoveis from './components/Imoveis'

const Corretor = () => {
  return (
    <Wrapper>
      <Container>
        <Nome>
          Margaret Stone
        </Nome>
        <About />
        <Imoveis />
      </Container>
    </Wrapper>
  )
}

export default Corretor
