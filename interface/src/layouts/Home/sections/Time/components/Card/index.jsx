import React, { useState } from 'react'

import { CardContent, CardContainer, Article, Nome, Telefone, Email, Wrapper, Overlay, InfoIcon, Img, } from './style'
import { useNavigate } from 'react-router-dom'
import { LuBadgeInfo } from "react-icons/lu"
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import NavButtons from '../NavButtons'

const Card = ({ configTime }) => {
  const navigate = useNavigate()
  const [selectedButton, setSelectedButton] = useState(1)
  const [swiperRef, setSwiperRef] = useState(null)

  const handleCardClick = (item) => {
    navigate('/corretores', { state: { data: item } })
    console.log('navigate')
    window.scrollTo(0, 0)
  }

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    if (swiperRef) {
      swiperRef.slideTo(buttonIndex - 1);
    }
  }

  const handleSlideChange = (swiper) => {
    setSelectedButton(swiper.activeIndex + 1)
  }

  return (
    <Wrapper>
      <Swiper
        onSwiper={setSwiperRef}
        onSlideChange={handleSlideChange}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}

        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 40,

          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,

          },
          1030: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}
        modules={[Virtual, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {configTime.map((item) => (
          <CardContainer
            onClick={() => handleCardClick(item)}
          >
            <Img src={item.image} alt={item.nome} />
            <Overlay />
            <InfoIcon>
              <LuBadgeInfo size={30} color='white' />
            </InfoIcon>
            <CardContent>
              <Nome>{item.nome}</Nome>
              <Telefone>{item.telefone}</Telefone>
              <Email>{item.email}</Email>
              <Article>{item.sobre}</Article>
            </CardContent>
          </CardContainer>
        ))}
      </Swiper>
      <NavButtons
        selectedButton={selectedButton}
        handleButtonClick={handleButtonClick}
      />
    </Wrapper>
  )
}

export default Card