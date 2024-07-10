import React, { useState } from 'react'
import { Container, Wrapper, Dp, Title, Imagem, Perfil } from './style'

const Depoimentos = ({ configDep }) => {
    const [ImageIndex, setImageIndex] = useState(0)
  return (
    <Wrapper>
        <Container>
            <Dp>
                <Title >
                 <p> O QUE DIZEM</p>
                 <p> NOSSOS CLIENTES</p>
                </Title>
                <Perfil >
                        <Imagem
                            src={configDep[ImageIndex].image}
                        />
                </Perfil>
                   
            </Dp>
            
        </Container>
    </Wrapper>
  )
}

export default Depoimentos