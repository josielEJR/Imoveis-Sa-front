import React,{ useEffect, useState } from 'react'
import { Container, Iframe, Wrapper } from './style'

const VideoComponent = ({imovelID}) => {
  const [prodInfo, setProdInfo] = useState({})

  useEffect(() => {
    if (!imovelID) {
      console.log('ID do imóvel não fornecido no VideoComponent');
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
        {prodInfo.video ? (
          <Iframe
            width="100%"
            height="100%"
            src={prodInfo.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </Iframe>
        ) : (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            Vídeo não disponível
          </div>
        )}
      </Container>
    </Wrapper>
  )
}

export default VideoComponent