import React, { useEffect, useState } from 'react'
import { Container, Wrapper, Map } from './style'

const LocalizaçãoComponent = ({ imovelID }) => {
  const [prodInfo, setProdInfo] = useState({})

  useEffect(() => {
    if (!imovelID) {
      console.log('ID do imóvel não fornecido no LocalizaçãoComponent');
      return;
    }

    const requestOptions = {
      method: "GET",
      redirect: "follow"
    }

    fetch(`https://imoveis-sa.onrender.com/api/imoveis/buscarimovelid?id=${imovelID}`, requestOptions)
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .then((produto) => {
        if (produto && produto.length > 0) {
          setProdInfo(produto[0])
        } else {
          setProdInfo({})
        }
      })
      .catch((error) => console.error(error))
  }, [imovelID])
  
  return (
    <Wrapper>
      <Container>
        {prodInfo.maps ? (
          <Map
            src={prodInfo.maps}
            style={{
              width: "100%",
              height: "100%",
              border: 0
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Map>
        ) : (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            Mapa não disponível
          </div>
        )}
      </Container>
    </Wrapper>
  )
}

export default LocalizaçãoComponent