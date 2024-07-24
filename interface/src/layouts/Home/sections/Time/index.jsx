import React, { useEffect, useState } from 'react'

import { CardContent, Container, CardContainer, ImageCard, Title, Wrapper, CardImage } from './style'

const Time = ( {} ) => {
  const [imageIndex, setImageIndex] = useState(0)
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/clientes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setClientes(data))
      .catch(error => console.error('Houve um problema com a operação de fetch:', error));
  }, [])

  return (
    <Wrapper>
      <Container>
        <Title>
          Nosso Time
        </Title>
        <CardContainer>
          <CardContent>
            <CardImage>
              <ImageCard />
            </CardImage>
          </CardContent>
        </CardContainer>
      </Container>
    </Wrapper>
  )
}

export default Time