import React, {  useState } from 'react'
import {   ButtonPrice,  Container,  ImageContainer, NavButton,  TextArea,  Direita, Esquerda, Icon, Overlay, Wrapper,   } from './style'
import { useNavigate } from 'react-router-dom'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"




const Slider = ({ config }) => {
  const [ImageIndex, setImageIndex] = useState(0)
  const [selectedButton, setSelectedButton] = useState(1)
  const [paused, setPaused] = useState(false)
  const navigate = useNavigate()

  const next = () => {
    setImageIndex((state) => (state += 1))
    if (ImageIndex === config.length - 1) setImageIndex(0)
    setSelectedButton((state) => (state += 1))
    if (selectedButton === config.length ) setSelectedButton(1)
    }
  const prev = () => {
    setImageIndex((state) => (state -= 1))
    if (ImageIndex === 0) setImageIndex(config.length  - 1)
    setSelectedButton((state) => (state -= 1))
    if (selectedButton === 1) setSelectedButton(config.length)
    }

  const handleButtonClick = (buttonIndex ) => {
    setSelectedButton(buttonIndex  )
    setImageIndex(buttonIndex - 1)
  }

  const handleNavigateToPage = () => {
    navigate(config[ImageIndex].url)
  }

{ /*   useEffect(() => {
    const interval = setInterval(() => {
      if(!paused){
        setImageIndex((prevIndex) => (prevIndex + 1) % config.length)}},
        600)
        return()=>{
          if(interval){
            clearInterval(interval)
          }
        }
  })
  useEffect(() => {
    const interval = setInterval(() => {
      if(!paused){
        setSelectedButton((prevIndex) => (prevIndex ) % config.length + 1)}},
        600)
        return()=>{
          if(interval){
            clearInterval(interval)
          }
        }
  }) */ }

  return (
  <Wrapper>
    <Container>
      <ImageContainer 
      src={config[ImageIndex].image}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}  />
      <Overlay />
      <Direita onClick={next} >
        <Icon>
          <FaAngleRight />
        </Icon>
      </Direita>
      <Esquerda onClick={prev} >
      <Icon>
          <FaAngleLeft />
      </Icon>
      </Esquerda>
      <TextArea>
        Veja aqui alguns de nossos destaque, os melhores imóveis da região  
      </TextArea>
      <ButtonPrice onClick={handleNavigateToPage}>
        {config[ImageIndex].text} | R$ {config[ImageIndex].price}
      </ButtonPrice>
      
          <NavButton
            style={{ width: selectedButton === 1 ? 70 : 26 }}
            selected={selectedButton === 1}
            onClick={() => handleButtonClick(1)}
          >  
          </NavButton>
          <NavButton
            style={{ width: selectedButton === 2 ? 70 : 30 }}
            selected={selectedButton === 2}
            onClick={() => handleButtonClick(2)}
          >  
          </NavButton>
          <NavButton
            style={{ width: selectedButton === 3 ? 70  : 39 }}
            selected={selectedButton === 3}
            onClick={() => handleButtonClick(3)}
          >  
          </NavButton>
        
      </Container>
  </Wrapper>
  )
}

export default Slider