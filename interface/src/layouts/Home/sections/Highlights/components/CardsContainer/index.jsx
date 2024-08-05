import { useState, useEffect } from 'react'

import Card from '../Card'

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"

import { Wrapper, Container, Arrows, Icon, TitleSection, Title, CardsSection, SelectorSection, Selectors, IndexSelector } from './style'

const CardsContainer = () => {

    const [selected, setSelected] = useState(0)
    const [products, setProducts] = useState([])
    const [visibleCards, setVisibleCards] = useState()

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

        if (window.outerWidth >= 1620 || window.innerWidth >= 1620) {
            if (!(visibleCards === 3)) {
                setVisibleCards(3)
            }
        } else if (window.outerWidth < 1620 && window.outerWidth >= 1080 || window.innerWidth < 1620 && window.innerWidth >= 1080) {
            if (!(visibleCards === 2)) {
                setVisibleCards(2)
            }
        } else if (window.outerWidth < 1080 || window.innerWidth < 1080) {
            if (visibleCards !== 1) {
                setVisibleCards(1)
            }
        }

        function handleResize() {
            if (window.outerWidth <= 1080 || window.innerWidth <= 1080) {
                if (visibleCards !== 1) {
                    setVisibleCards(1)
                }
            } else if (window.outerWidth < 1620 && window.innerWidth < 1620) {
                if (!(visibleCards === 2)) {
                    setVisibleCards(2)
                }
            } else {
                if (!(visibleCards === 3)) {
                    setVisibleCards(3)
                }
            }
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const cardsLayout = () => {
        if (products && products.length > 0) {
            if (visibleCards === 3) {
                return products.map((prod, index) => {
                    if (index >= selected && index <= selected + 2) {
                        return <Card
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
                    }
                })
            } else if (visibleCards === 2) {
                return products.map((prod, index) => {
                    if (index >= selected && index <= selected + 1) {
                        return <Card
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
                    }
                })
            } else if (visibleCards === 1) {
                return products.map((prod, index) => {
                    if (index === selected) {
                        return <Card
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
                    }
                })
            }
        }
    }

    const nextCard = () => {
        setSelected(current => (
            current + 1 > 2 ? 0 : current + 1
        ))
    }

    const prevCard = () => {
        setSelected(current => (
            current - 1 < 0 ? 2 : current - 1
        ))
    }

    return (
        <Wrapper>
            <Arrows>
                <Icon>
                    <FaAngleLeft
                        style={{
                            height: "45px"
                        }}
                        onClick={prevCard}
                    />
                </Icon>
                <Icon>
                    <FaAngleRight
                        style={{
                            height: "45px"
                        }}
                        onClick={nextCard}
                    />
                </Icon>
            </Arrows>
            <TitleSection>
                <Title>CONFIRA NOSSOS</Title>
                <Title>DESTAQUES</Title>
            </TitleSection>
            <Container>
                <CardsSection>
                    {cardsLayout()}
                </CardsSection>
            </Container>
            <SelectorSection>
                <Selectors>
                    {
                        products && products.length > 3 ?
                            <>
                                <IndexSelector
                                    onClick={() => {
                                        setSelected(0)
                                    }}
                                    grow={selected === 0 ? "true" : "false"}
                                />
                                <IndexSelector
                                    onClick={() => {
                                        setSelected(1)
                                    }}
                                    grow={selected === 1 ? "true" : "false"}
                                />
                            </> : ''
                    }
                    {
                        products && products.length > 4 ?
                            <IndexSelector
                                onClick={() => {
                                    setSelected(2)
                                }}
                                grow={selected === 2 ? "true" : "false"}
                            /> : ''
                    }
                </Selectors>
            </SelectorSection>
        </Wrapper>
    )
}

export default CardsContainer