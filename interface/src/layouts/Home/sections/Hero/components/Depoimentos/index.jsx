import React, { useEffect, useState } from 'react'
import { BiSolidQuoteLeft } from "react-icons/bi"
import { IoCaretDownSharp } from "react-icons/io5";
import { Container, Wrapper, ContainerDepoimentos, Title, Imagem, ContainerPerfil, ContainerImagem, Quote, ContainerQuote, Comentario, FotoPerfil, ContainerIcon, Texto, ContainerNavButton, NavButton, WrapperNavButton, NomePerfil, Foto, Img } from './style'

const Depoimentos = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const [sliderButton, setSliderButton] = useState(1)
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
  }, []);

    const handleButtonClick = (buttonIndex ) => {
      setSliderButton(buttonIndex  )
      setImageIndex(buttonIndex - 1)
    }
  return (
    <Wrapper>
        <Container>
            <ContainerDepoimentos>
              <Title >
                 <p> O QUE DIZEM</p>
                 <p> NOSSOS CLIENTES</p>
              </Title>
                  {clientes.length > 0 &&(
                    <ContainerPerfil>
                      <ContainerQuote>
                          <BiSolidQuoteLeft size={60}  />
                      </ContainerQuote>
                        <Comentario>
                          <Texto>
                            {clientes[imageIndex].comentario}
                          </Texto>
                        </Comentario>
                        <FotoPerfil>
                          <Foto>
                            <Img src={`http://localhost:3001/${clientes[imageIndex].foto_perfil}`}  />
                          </Foto>
                            <NomePerfil>
                              {clientes[imageIndex].nome}
                            </NomePerfil>
                        </FotoPerfil>
                        <ContainerIcon>
                          <IoCaretDownSharp size={50} />
                        </ContainerIcon>
                        <ContainerImagem>
                          <Imagem src={`http://localhost:3001/${clientes[imageIndex].foto_perfil}`}  />
                        </ContainerImagem> 
                          <WrapperNavButton>
                            <ContainerNavButton>
                              <NavButton
                                width={sliderButton === 1 ? 50 : 25}
                                selected={sliderButton === 1 ? "true" : "false"}
                                onClick={() => handleButtonClick(1)}
                              >  
                              </NavButton>
                              <NavButton
                                width={sliderButton === 2 ? 50 : 30}
                                selected={sliderButton === 2 ? "true" : "false"}
                                onClick={() => handleButtonClick(2)}
                              >  
                              </NavButton>
                              <NavButton
                                width={sliderButton === 3 ? 50 : 40 }
                                selected={sliderButton === 3 ? "true" : "false"}
                                onClick={() => handleButtonClick(3)}
                              >  
                              </NavButton>
                            </ContainerNavButton>
                          </WrapperNavButton>
                  </ContainerPerfil> )}
            </ContainerDepoimentos>
        </Container>
    </Wrapper>
  )
}

export default Depoimentos