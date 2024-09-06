import React from 'react'
import Hero from '../../layouts/Home/sections/Hero/index.jsx'
import Highlights from '../../layouts/Home/sections/Highlights/index.jsx'
import Depoimentos from '../../layouts/Home/sections/Depoimentos/index.jsx'
import { Wrapper } from './style'
import Time from '../../layouts/Home/sections/Time/index.jsx'
import configDepoimentos from '../../layouts/Home/sections/Depoimentos/components/Imagens/imagens.jsx'

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      {/* <Highlights /> */}
      {/* <Depoimentos configDepoimentos={configDepoimentos} />
      <Time /> */}
    </Wrapper>
  )
}

export default Home