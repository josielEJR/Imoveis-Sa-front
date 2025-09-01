import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

import Card from '../Card'
import Selectors from '../Selectors'

import { Wrapper, Container, TitleSection, Title } from './style'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const CardsContainer = () => {

    const [products, setProducts] = useState([])
    const [cardsDisplay, setCardsDisplay] = useState(1)
    const [windowWidth, setWindowWidth] = useState(window.outerWidth)
    const [selectedButton, setSelectedButton] = useState(0)
    const [swiperRef, setSwiperRef] = useState(null)

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("/imoveis/ordenarimovelqualidade", requestOptions)
            .then((response) => response.text())
            .then((result) => JSON.parse(result))
            .then((result) => {
                const arrayAux = []
                result.forEach((prod, index) => {
                    if (index < 5) {
                        arrayAux.push(prod)
                    }
                })
                setProducts(arrayAux)
            })
            .catch((error) => console.error(error));
    }, [])

    useEffect(() => {
        if (window.outerWidth > 1400) {
            setCardsDisplay(3)
        } else if (window.outerWidth > 1000) {
            setCardsDisplay(2)
        } else {
            setCardsDisplay(1)
        }

        function handleResize() {
            if (window.outerWidth > 1400) {
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
        if(swiperRef){
            swiperRef.slideTo(buttonIndex)
        }
    }

    const handleSlideChange = (swiper) => {
        setSelectedButton(swiper.activeIndex)
    }

    return (
        <Wrapper>
            <TitleSection>
                <Title>CONFIRA NOSSOS</Title>
                <Title>DESTAQUES</Title>
            </TitleSection>
            <Container>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={cardsDisplay}
                    onSwiper={setSwiperRef}
                    onSlideChange={handleSlideChange}
                    spaceBetween={0}
                    navigation
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false
                    }}
                >
                    {products.map((prod, index) => (
                        <SwiperSlide>
                            <Card
                                key={index}
                                imagem={"https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg"}
                                bairro={prod.bairro.toUpperCase()}
                                cidade={prod.cidade.toUpperCase()}
                                tipo={prod.tipo.toUpperCase()}
                                precoVenda={prod.preco_venda}
                                precoAluguel={prod.preco_aluguel}
                                area={prod.tamanho}
                                quartos={prod.quartos}
                                banheiros={prod.banheiros}
                                vagas={prod.vagas}
                                id={prod.imoveisid}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>

            {windowWidth > 1400 ? <Selectors selectedButton={selectedButton} handleButtonClick={handleButtonClick} /> : <></>}
        </Wrapper>
    )
}

export default CardsContainer