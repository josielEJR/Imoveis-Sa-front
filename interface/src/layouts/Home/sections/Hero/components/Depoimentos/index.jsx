import React, { useState } from 'react'
import { Container, Wrapper, ContainerDepoimentos, Title, Imagem, ContainerPerfil, ContainerImagem } from './style'

const Depoimentos = ({ configDep }) => {
    const [imageIndex, setImageIndex] = useState(0)

   
  return (
    <Wrapper>
        <Container>
            <ContainerDepoimentos>
              <Title >
                 <p> O QUE DIZEM</p>
                 <p> NOSSOS CLIENTES</p>
              </Title>
                  <ContainerPerfil>
                    <ContainerImagem>

                    </ContainerImagem>
                  </ContainerPerfil> 
            </ContainerDepoimentos>
            
        </Container>
    </Wrapper>
  )
}

export default Depoimentos