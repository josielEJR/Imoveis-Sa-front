import { useState, useEffect } from 'react'

import Card from '../Card'

import { Container, Title, CardsWrapper, SelectorWrapper, SelectorContainer, IndexSelector } from './style'

const CardsContainer = () => {

    const [selected, setSelected] = useState(0)
    const [prev, setPrev] = useState()
    const [position, setPosition] = useState(4)
    const [pageLayout, setPageLayout] = useState(window.innerWidth)
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
                    if(index < 5){
                        arrayAux.push(prod)
                    }
                })
                setProducts(arrayAux)
            })
            .catch((error) => console.error(error));
    }, [])

    useEffect(() => {
        function handleResize() {
            setPageLayout(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        console.log(products && products.length > 0)
    }, [products])

    return (
        <Container>
            <Title>
                <div>CONFIRA NOSSOS</div>
                <div>DESTAQUES</div>
            </Title>
            <CardsWrapper prev={prev} current={selected} position={position}>
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
            </CardsWrapper>

            <SelectorWrapper>
                <SelectorContainer>
                    {
                        products && products.length > 3 ?
                            <>
                                <IndexSelector
                                    onClick={() => {
                                        setSelected(0)
                                        setPosition(4)
                                    }}
                                    grow={selected === 0 ? "true" : "false"}
                                />
                                <IndexSelector
                                    onClick={() => {
                                        setSelected(1)
                                        setPosition(-15.8)
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
                                    setPosition(-35.9)
                                }}
                                grow={selected === 2 ? "true" : "false"}
                            /> : ''
                    }
                </SelectorContainer>
            </SelectorWrapper>
        </Container>
    )
}

export default CardsContainer