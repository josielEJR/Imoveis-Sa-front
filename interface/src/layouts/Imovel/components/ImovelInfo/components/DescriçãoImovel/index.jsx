import React, { useEffect, useState } from 'react'
import { Wrapper, Container, Content, Preço, Tipo, ItensWrapper, Button, Itens } from './style'
import Interação from '../Interação'

const DescriçãoImovel = ({dadosImovel}) => {
  
  const itensArray = typeof dadosImovel.itens === 'string' ? dadosImovel.itens.split(',') : []
  return (
    <Wrapper>
      <Container>
        <Content>
          <Preço>
            12150
          <Tipo>
            546412
          </Tipo>
          </Preço>
          
          <ItensWrapper>
            Itens disponíveis:
            <Itens>
              {itensArray.length > 0 ? (
                itensArray.map((item, index) => (
                  <li key={index}>{item.trim()}</li> // Exibe cada item como uma lista
                ))
              ) : (
                <p>Sem itens disponíveis.</p>
              )}
            </Itens>
          </ItensWrapper>
          <Button >
            Agendar uma visita
          </Button>
        </Content>
        <Interação />
      </Container>
    </Wrapper>
  )
}

export default DescriçãoImovel