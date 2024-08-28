import React from 'react'

import { Title, Wrapper, Container, } from './style'
import Card from './components/Card'
import configTime from './components/Card/Imagens/imagens'

const Time = () => {

  return (
    <Wrapper>
      <Container>
        <Title>
          Nosso Time
        </Title>
        <Card configTime={configTime} />
      </Container>
    </Wrapper>
  )
}

export default Time