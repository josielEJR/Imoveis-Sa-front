import React, { useEffect, useState } from 'react'
import { Container, Content, Title, Wrapper } from './style'
import CardImovel from './components/CardImovel'
import DescriçãoImovel from './components/DescriçãoImovel'

const ImovelInfo = ({ imovelID }) => {
  const [prodInfo, setProdInfo] = useState({}) 
  useEffect(() => {
      const requestOptions = {
          method: "GET",
          redirect: "follow"
      }

      fetch(`http://localhost:3001/imoveis/buscarimovelid?id=${imovelID}`, requestOptions)
          .then((response) => response.json())  
          .then((produto) => {
              console.log(produto[0])
              setProdInfo(produto[0])  
          })
          .catch((error) => console.error(error))
  }, [imovelID])

    const getDisponibilidade = () => {
        switch (prodInfo.disponibilidade) {
          case 'aluguel':
            return ('Aluguel')
          case 'venda':
            return ('Venda')
          case 'venda_e_aluguel':
            return ('Venda')
          default:
            return 'dispolidade não disponovel'
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
                    <DescriçãoImovel dadosImovel={prodInfo} />
                </Content>
            </Container>
        </Wrapper>
    )
}

export default ImovelInfo