import React, { useEffect, useState } from 'react'
import { Container, Content, Title, Wrapper } from './style'
import CardImovel from './components/CardImovel'
import DescriçãoImovel from './components/DescriçãoImovel'

const ImovelInfo = ({ imovelID, scrollToAgendar }) => {
  const [prodInfo, setProdInfo] = useState({})
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    }

    fetch(`/imoveis/buscarimovelid?id=${imovelID}`, requestOptions)
      .then((response) => response.json())
      .then((produto) => {
        setProdInfo(produto[0])
      })
      .catch((error) => console.error(error))
  }, [imovelID])

  const getDisponibilidade = () => {
    if (!prodInfo || !prodInfo.disponibilidade) {
      return 'Disponibilidade não disponível'
    }
    
    switch (prodInfo.disponibilidade) {
      case 'aluguel':
        return ('Aluguel')
      case 'venda':
        return ('Venda')
      case 'venda_e_aluguel':
        return ('Venda')
      default:
        return 'Disponibilidade não disponível'
    }
  }

  return (
    <Wrapper>
      <Container>
        <Title>
          {prodInfo.imoveisID} {prodInfo.tipo} para {getDisponibilidade()} com {prodInfo.tamanho}m², {prodInfo.quartos} quarto e com {prodInfo.vagas} vaga
        </Title>
        <Content>
          <CardImovel imovelID={imovelID} />
          <DescriçãoImovel dadosImovel={prodInfo} scrollToAgendar={scrollToAgendar} />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default ImovelInfo