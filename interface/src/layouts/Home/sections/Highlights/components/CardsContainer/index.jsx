import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from '../Card'
import Selectors from '../Selectors'

import { Wrapper, Container, TitleSection, Title, CardsSection } from './style'
import 'swiper/css';

const CardsContainer = () => {

    const [products, setProducts] = useState([])
    const [cardsDisplay, setCardsDisplay] = useState(1)

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("http://localhost:3001/imoveis/ordenarimovelqualidade", requestOptions)
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
    }, [])

    useEffect(() => {
        function handleResize() {
            if (window.outerWidth > 1400) {
                setCardsDisplay(3)
            } else if (window.outerWidth > 1000) {
                setCardsDisplay(2)
            } else {
                setCardsDisplay(1)
            }
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <Wrapper>
            <TitleSection>
                <Title>CONFIRA NOSSOS</Title>
                <Title>DESTAQUES</Title>
            </TitleSection>

            <Container>
                <Swiper
                    slidesPerView={cardsDisplay}
                    spaceBetween={0}
                >
                    {products.map((prod, index) => (
                        <SwiperSlide>
                            <Card
                                key={index}
                                imagem={"https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg"}
                                bairro={prod.bairro.toUpperCase()}
                                cidade={prod.cidade.toUpperCase()}
                                tipo={prod.tipo.toUpperCase()}
                                preco={prod.preco_venda || prod.preco_aluguel}
                                area={prod.tamanho}
                                quartos={prod.quartos}
                                banheiros={prod.banheiros}
                                vagas={prod.vagas}
                                id={prod.imoveisID}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>

            <Selectors />
        </Wrapper>
    )
}

export default CardsContainer