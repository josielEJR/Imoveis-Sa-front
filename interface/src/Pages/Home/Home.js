import React from 'react'
import Hero from '../../layouts/Home/sections/Hero/index.jsx'
import Highlights from '../../layouts/Home/sections/Highlights/index.jsx'
import { Wrapper } from './style'
import Time from '../../layouts/Home/sections/Time/index.jsx'
import DepoimentosLayout from '../../layouts/Home/sections/Depoimentos/index.jsx'

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Highlights />
      <DepoimentosLayout />
      <Time />
    </Wrapper>
  )
}

export default Home