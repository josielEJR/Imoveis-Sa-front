import React, { useState } from 'react'
import Slider from './components/Slider/index'

const config = [
  {
    title: 'image1' ,
    image:'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'image2' ,
    image:'https://images.pexels.com/photos/2029660/pexels-photo-2029660.jpeg'
  },
  {
    title: 'image3' ,
    image:'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  
]

const Hero = () => {
  return (
    <div>
      <Slider config={config} />
    </div>
  )
}

export default Hero