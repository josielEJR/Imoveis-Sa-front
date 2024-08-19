import React from 'react'

import { CardContent, CardContainer, Article, Nome, Telefone, Email, Wrapper, Overlay, InfoIcon, Img, Container, SliderContainer } from './style'
import { useNavigate } from 'react-router-dom'
import { LuBadgeInfo } from "react-icons/lu"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'

const Card = ({ configTime }) => {
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    navigate('/corretores', { state: { data: item } })
    window.scrollTo(0, 0);
  }

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 3,
          dots: true,
        }
      },
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  }


  return (
    <Wrapper>
      <Slider {...settings}>
        {configTime.map((item) => (
          <CardContainer
            onClick={() => handleCardClick(item)}
          >
            <Overlay />
            <Img src={item.image} />
            <InfoIcon>
              <LuBadgeInfo size={30} color='white' />
            </InfoIcon>
            <CardContent>
              <Nome>{item.nome}</Nome>
              <Article>{item.sobre}</Article>
              <Telefone>Tel: {item.telefone}</Telefone>
              <Email>E-mail: {item.email}</Email>
            </CardContent>
          </CardContainer>
        ))}
      </Slider>
    </Wrapper>
  )
}

export default Card