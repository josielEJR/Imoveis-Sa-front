import React from 'react'
import Slider from './components/Slider/index'
import FiltroBusca from './components/FiltroBusca'
import { ContainerHero } from './style'
import Depoimentos from './components/Depoimentos'

const config = [
  {
    title: 'image1' ,
    image:'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'ALUGUEL',
    price: '15.000',
    url:'/imovel?id=6'
  },
  {
    title: 'image2' ,
    image:'https://images.pexels.com/photos/2029660/pexels-photo-2029660.jpeg',
    text: 'VENDA',
    price: '1.200.000',
    url:'/imovel?id=5'
  },
  {
    title: 'image3' ,
    image:'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'ALUGUEL',
    price: '20.000',
    url:'/imovel?id=2'
  },
  
  
]

const configDep = [
  {
    title: 'image1' ,
    image: 'https://images.pexels.com/photos/21958119/pexels-photo-21958119/free-photo-of-preto-e-branco-p-b-homem-jogando.jpeg',
    
  },
]

const Hero = () => {
  return (
      <ContainerHero>
      <Slider config={config} />
      <FiltroBusca />
      <Depoimentos configDep={configDep} />
      </ContainerHero>
    
  )
}

export default Hero