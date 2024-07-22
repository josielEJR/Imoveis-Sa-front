import React from 'react'
import ExemplaresVenda from '../../components/ExemplaresVenda.js'
import ExemplaresAluguel from '../../components/ExemplaresAluguel.js'
import Footer from '../../components/Footer.js'

import Hero from '../../layouts/Home/sections/Hero/index.jsx'

// import { useHref } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex h-100 w-full flex-wrap bg-gray-100'>
      <Hero />
    </div>
  )
}

export default Home