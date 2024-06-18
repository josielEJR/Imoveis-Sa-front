import React, { useEffect, useState } from 'react'
import {  Busca, ButtonPrice, Codigo, Container, Filtro, ImageContainer, NavButton,  TextArea, Bairros, Tipo, Comprar,  Direita, Esquerda, Icon } from './style'
import { useNavigate } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6"



const Slider = ({ config }) => {
  const [ImageIndex, setImageIndex] = useState(0)
  const [selectedButton, setSelectedButton] = useState(1)
  const [paused, setPaused] = useState(false)
  const navigate = useNavigate()

  const next = () => {
    setImageIndex((state) => (state += 1))
    if (ImageIndex === config.length - 1) setImageIndex(0)
    setSelectedButton((state) => (state += 1))
    if (selectedButton === config.length - 1) setSelectedButton(0)
      console.log(selectedButton)
   
    }
  const prev = () => {
    setImageIndex((state) => (state -= 1))
    if (ImageIndex === 0) setImageIndex(config.length  - 1)
    setSelectedButton((state) => (state -= 1))
    if (selectedButton === 0) setSelectedButton(config.length - 1)
    }

  const handleButtonClick = (buttonIndex ) => {
    setSelectedButton(buttonIndex  )
    setImageIndex(buttonIndex - 1)
  }

  const handleNavigateToPage = () => {
    navigate("/imovel?id=6")
  }

{/*   useEffect(() => {
    const interval = setInterval(() => {
      if(!paused){
        setImageIndex((prevIndex) => (prevIndex + 1) % config.length)}},
        6000)
        return()=>{
          if(interval){
            clearInterval(interval)
          }
        }
  })
  useEffect(() => {
    const interval = setInterval(() => {
      if(!paused){
        setSelectedButton((prevIndex) => (prevIndex + 1) % config.length)}},
        6000)
        return()=>{
          if(interval){
            clearInterval(interval)
          }
        }
  }) */}

  return (
    <Container>
      <ImageContainer 
      src={config[ImageIndex].image}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}  />
      <Direita onClick={next} >
        <Icon>
          <FaAngleRight />
        </Icon>
      </Direita>
      <Esquerda onClick={prev} >
      </Esquerda>
      
      <TextArea>
        Veja aqui alguns de nossos destaque, os melhores imóveis da região  
      </TextArea>
      
      <ButtonPrice
        onClick={handleNavigateToPage}
      >
        ALUGUEL | R$ 15.000
      </ButtonPrice>
      
      <NavButton
        width={selectedButton === 1 ? 65.28 : 26.38}
        left={ selectedButton === 2 ? 864.05 : 879.75}
        selected={selectedButton === 1}
        onClick={() => handleButtonClick(1)}
      >  
      </NavButton>
      <NavButton
        width={selectedButton === 2 ? 65.28 : 30.64}
        left={selectedButton === 1 ? 933.98 : 919.08}
        selected={selectedButton === 2}
        onClick={() => handleButtonClick(2)}
      >  
      </NavButton>
      <NavButton
        width={selectedButton === 3 ? 65.28 : 39.17 }
        left={selectedButton === 2 ? 978.20 : 975.78}
        selected={selectedButton === 3}
        onClick={() => handleButtonClick(3)}
      >  
      </NavButton>
      <Filtro/>
        <Busca
      
        > Buscar </Busca>/
        <Codigo 
        placeholder='Código'
      
        />
        <Bairros > selecione os bairros</Bairros>
        <Tipo> Tipo de imóveis </Tipo>
        <Comprar> Comprar </Comprar>
  
      
    </Container>
  )
}

export default Slider