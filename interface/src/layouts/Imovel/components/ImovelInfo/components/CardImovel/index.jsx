import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css' // Importa estilos básicos do Swiper
import 'swiper/css/navigation' // Estilos de navegação (setas)
import 'swiper/css/pagination' // Estilos de paginação (bolinhas)
import { CardContainer, Image, Wrapper } from './style'

// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const CardImovel = ({ imovelID }) => {
  const [prodInfo, setProdInfo] = useState({})

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    }

    fetch(`http://localhost:3001/imoveis/buscarimovelid?id=${imovelID}`, requestOptions)
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .then((produto) => {
        console.log(produto[0])
        return setProdInfo(produto[0])
      })
      .catch((error) => console.error(error))
  }, [imovelID])

  return (
    <Wrapper>
      <CardContainer>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true} // Infinite loop
          autoplay={{ delay: 3000 }} // Autoplay opcional
          navigation={true} // Setas de navegação
          pagination={{ clickable: true }} // Paginação
          modules={[Navigation, Pagination, Autoplay]} // Módulos Swiper
          style={{width: '700px', height: '630px' }} // Tamanho do Swiper
        >
              <SwiperSlide >
                <Image src={`http://localhost:3001/imoveis/imagensimovel/${prodInfo.imoveisID}`} />
              </SwiperSlide>
        </Swiper>
      </CardContainer>
    </Wrapper>
  )
}

export default CardImovel
