import React from 'react'
import Hero from '../../layouts/Home/sections/Hero/index.jsx'
import Depoimentos from '../../layouts/Home/sections/Depoimentos/index.jsx'
import { Wrapper } from './style'
import Time from '../../layouts/Home/sections/Time/index.jsx'
import configImagens from '../../layouts/Home/sections/Depoimentos/components/Imagens/imagens.jsx'

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Depoimentos configImagens={configImagens} />
      <Time />
    </Wrapper>
  )
}

export default Home