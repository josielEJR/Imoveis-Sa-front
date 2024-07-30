import React from 'react'
import Slider from './components/Slider/index'
import FiltroBusca from './components/FiltroBusca'
import { ContainerHero } from './style'
import config from './components/imagens'
const Hero = () => {
  return (
    <ContainerHero>
      <Slider config={config} />
      <FiltroBusca />
    </ContainerHero>
  )
}

export default Hero