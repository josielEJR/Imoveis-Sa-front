import React from 'react'
import Hero from '../../layouts/Home/sections/Hero/index.jsx'
import Depoimentos from '../../layouts/Home/sections/Depoimentos/index.jsx'
import Footer from '../../components/Footer/index.jsx'

import { Wrapper } from './style'

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Depoimentos />
      <Footer />
    </Wrapper>
  )
}

export default Home