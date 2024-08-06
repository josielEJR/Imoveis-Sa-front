import { useState, useEffect } from 'react'

import Card from '../Card'

import { Wrapper, Container, CardsSection, SelectorSection, Selectors, IndexSelector } from './style'

const CardsContainer = ({ filtros }) => {

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

        fetch("http://localhost:3001/imoveis/busca", requestOptions)
            .then((response) => response.text())
            .then((result) => JSON.parse(result))
            .then((result) => {
                const arrayAux = []
                result.forEach((prod, index) => {
                    arrayAux.push(prod)
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

    const selector = () => {

    }

    return (
        <Wrapper>
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