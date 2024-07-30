import React from 'react'
import Hero from '../../layouts/Home/sections/Hero/index.jsx'
import Highlights from '../../layouts/Home/sections/Highlights/index.jsx'
import Depoimentos from '../../layouts/Home/sections/Depoimentos/index.jsx'

import { Wrapper } from './style'


const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Highlights />
      <Depoimentos />
    </Wrapper>
  )
}

export default Home