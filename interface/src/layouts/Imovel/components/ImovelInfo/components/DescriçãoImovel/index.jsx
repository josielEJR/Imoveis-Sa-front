import React, { useEffect, useState } from 'react'
import { Wrapper, Container, Content, Preço, Tipo, ItensWrapper, Button, Itens, Li } from './style'
import Interação from '../Interação'

const DescriçãoImovel = ({ dadosImovel }) => {

  const itensArray = typeof dadosImovel.itens === 'string' ? dadosImovel.itens.split(',') : []

  const getDisponibilidade = () => {
    switch (dadosImovel.disponibilidade) {
      case 'aluguel':
        return ('Aluguel')
      case 'venda':
        return ('Venda')
      case 'venda_e_aluguel':
        return ('Aluguel')
      default:
        return 'disponibilidade não disponivel'
    }
  }

  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
  }

  const getPreco = () => {
    switch (dadosImovel.disponibilidade) {
      case 'aluguel':
        return formatarPreco(dadosImovel.preco_aluguel)
      case 'venda':
        return formatarPreco(dadosImovel.preco_venda)
      case 'venda_e_aluguel':
        return formatarPreco(dadosImovel.preco_aluguel)
      default:
        return 'Preço não disponível'
    }
  }
  return (
    <Wrapper>
      <Container>
        <Content>
          <Preço>
            Total R$ {getPreco()}
            <Tipo>
              {getDisponibilidade()} {getPreco()}
            </Tipo>
          </Preço>
          <ItensWrapper>
            Itens disponíveis
            <Itens>
              {itensArray.length > 0 &&
                itensArray.map((item, index) => (
                  <Li key={index}>{item.trim()}</Li>
                ))
              }
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