import React, { useState, useEffect } from 'react'
import { Container, CardContent, CardContainer, Article, Nome, Telefone, Email, Wrapper, Overlay, InfoIcon, Img } from './style'
import { LuBadgeInfo } from "react-icons/lu"
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import NavButtons from '../NavButtons'
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [cardsDisplay, setCardsDisplay] = useState(1)
  const [windowWidth, setWindowWidth] = useState(window.outerWidth)
  const [selectedButton, setSelectedButton] = useState(0)
  const [swiperRef, setSwiperRef] = useState(null)

  useEffect(() => {
    fetch('https://imoveis-sa.onrender.com/api/consultores')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('Houve um problema com a operação de fetch:', error));
  }, [])

  useEffect(() => {
    if (window.outerWidth > 1500) {
      setCardsDisplay(3)
    } else if (window.outerWidth > 1000) {
      setCardsDisplay(2)
    } else {
      setCardsDisplay(1)
    }

    function handleResize() {
      if (window.outerWidth > 1500) {
        setCardsDisplay(3)
      } else if (window.outerWidth > 1000) {
        setCardsDisplay(2)
      } else {
        setCardsDisplay(1)
      }

      setWindowWidth(window.outerWidth)
    }

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex)
    if (swiperRef) {
      swiperRef.slideTo(buttonIndex)
    }
  }

  const handleClick = (item) => {
      navigate(`/corretores?id=${item.consultorid}`)
      window.scrollTo(0, 0)
  }

  const handleSlideChange = (swiper) => {
    setSelectedButton(swiper.activeIndex)
  }

  return (
    <Wrapper>
      <Container>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={cardsDisplay}
          onSwiper={setSwiperRef}
          onSlideChange={handleSlideChange}
          spaceBetween={10}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.consultorid}>
              <CardContainer onClick={() => handleClick(item)}>
                <Img src={`https://img.freepik.com/fotos-premium/sorriso-de-retrato-e-mulher-de-negocios-com-os-bracos-cruzados-no-escritorio-pronto-para-os-objetivos-da-empresa-chefe-lider-e-empreendedora-feliz-ou-confiante-do-canada-com-missao-de-visao-ou-mentalidade-de-sucesso_590464-149832.jpg?semt=ais_hybrid&w=740&q=80`} alt={`foto do consultor ${item.nome}`} />
                <Overlay />
                <CardContent>
                  <InfoIcon>
                    <LuBadgeInfo size={30} color='white' />
                  </InfoIcon>
                  <Nome>{item.nome}</Nome>
                  <Telefone>{item.telefone}</Telefone>
                  <Email>{item.email}</Email>
                  <Article>{item.sobre}</Article>
                </CardContent>
              </CardContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      {windowWidth > 1000 ? <NavButtons selectedButton={selectedButton} handleButtonClick={handleButtonClick} /> : <></>}
    </Wrapper>
  )
}
export default Card
