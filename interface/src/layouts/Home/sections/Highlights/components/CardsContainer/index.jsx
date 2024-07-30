import { useState, useEffect } from 'react'

import Card from '../Card'

import { Wrapper, Container, TitleSection, Title, CardsSection, SelectorSection, Selectors, IndexSelector } from './style'

const CardsContainer = () => {

    const [selected, setSelected] = useState(0)
    const [pageLayout, setPageLayout] = useState(window.outerWidth)
    const [products, setProducts] = useState([])

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
        function handleResize() {
            setPageLayout(window.outerWidth)
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    function scrollToPercentage(percentage) {
        const container = document.getElementById('scrollContainer');
        const contentWidth = container.scrollWidth;
        const containerWidth = container.clientWidth;
        const scrollAmount = (contentWidth - containerWidth) * (percentage / 100);
        container.scrollLeft = scrollAmount;
    }

    const selector = () => {
        if (pageLayout <= 1100) {
            return <Selectors>
                {
                    products.map((elem, index) => (
                        <IndexSelector
                            onClick={() => {
                                setSelected(index)
                                scrollToPercentage(index * 25)
                            }}
                            grow={selected === index ? "true" : "false"}
                        />
                    ))
                }
            </Selectors>
        } else if (pageLayout > 1100) {
            return <Selectors>
                {
                    products && products.length > 3 ?
                        <>
                            <IndexSelector
                                onClick={() => {
                                    setSelected(0)
                                    scrollToPercentage(0)
                                }}
                                grow={selected === 0 ? "true" : "false"}
                            />
                            <IndexSelector
                                onClick={() => {
                                    setSelected(1)
                                    scrollToPercentage(50)
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
                                scrollToPercentage(100)
                            }}
                            grow={selected === 2 ? "true" : "false"}
                        /> : ''
                }
            </Selectors>
        }
    }

    return (
        <Wrapper>
            <TitleSection>
                <Title>CONFIRA NOSSOS</Title>
                <Title>DESTAQUES</Title>
            </TitleSection>
            <Container id='scrollContainer'>
                <CardsSection>
                    {products && products.length > 0 ?
                        products.map((prod, index) => {
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
                        }) : ''
                    }
                </CardsSection>
            </Container>
            <SelectorSection>
                {selector()}
            </SelectorSection>
        </Wrapper>
    )
}

export default CardsContainer