import { useEffect, useState } from 'react'

import Card from './components/Card'

import { Wrapper, Container, Title, CardsWrapper, SelectorWrapper, SelectorContainer, IndexSelector } from "./style"

const Hightlights = () => {

    const [selected, setSelected] = useState(0)
    const [prev, setPrev] = useState()
    const [key, setKey] = useState(0)
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
                setProducts(result)
            })
            .catch((error) => console.error(error));
    }, [])

    const setLayout = () => {

        if (selected === 2 && products && !(products.length > 3)) {
            setSelected(0)
        }

        if (pageLayout <= 935) {
            return (
                <Container>
                    <Title>
                        <div>CONFIRA NOSSOS</div>
                        <div>DESTAQUES</div>
                    </Title>

                    <CardsWrapper prev={prev} current={selected} key={key}>
                        {
                            products && products.length > 0 ?
                                <Card
                                    key={selected}
                                    imagem={"https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg"}
                                    bairro={products[selected].bairro}
                                    cidade={products[selected].cidade}
                                    tipo={products[selected].tipo}
                                    preco={products[selected].preco_venda || products[selected].preco_aluguel}
                                    area={products[selected].tamanho}
                                    quartos={products[selected].quartos}
                                    banheiros={products[selected].banheiros}
                                    vagas={products[selected].vagas}
                                    id={products[selected].imoveisID}
                                />
                                : ''
                        }
                    </CardsWrapper>

                    <SelectorWrapper>
                        <SelectorContainer>
                            {
                                products && products.length > 1 ?
                                    <>
                                        <IndexSelector
                                            onClick={() => {
                                                setPrev(selected)
                                                setSelected(0)
                                                setKey(prevKey => prevKey + 1)
                                            }}
                                            grow={selected === 0 ? "true" : "false"}
                                        />
                                        <IndexSelector
                                            onClick={() => {
                                                setPrev(selected)
                                                setSelected(1)
                                                setKey(prevKey => prevKey + 1)
                                            }}
                                            grow={selected === 1 ? "true" : "false"}
                                        />
                                    </> : ''
                            }
                            {
                                products && products.length > 2 ?
                                    <IndexSelector
                                        onClick={() => {
                                            setPrev(selected)
                                            setSelected(2)
                                            setKey(prevKey => prevKey + 1)
                                        }}
                                        grow={selected === 2 ? "true" : "false"}
                                    /> : ''
                            }
                        </SelectorContainer>
                    </SelectorWrapper>
                </Container>
            )
        } else if (pageLayout <= 1400) {

            if (selected === 2 && products && !(products.length > 4) || selected === 1 && products && !(products.length > 2)) {
                setSelected(0)
            }

            return (
                <Container>
                    <Title>
                        <div>CONFIRA NOSSOS</div>
                        <div>DESTAQUES</div>
                    </Title>
                    <CardsWrapper prev={prev} current={selected} key={key}>
                        {products && products.length > 0 ?
                            products.map((prod, index) => {
                                if (selected === 0 && index <= 1) {
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
                                } else if (selected === 1 && index >= 2 && index <= 3) {
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
                                } else if (selected === 2 && index >= 4 && index <= 5) {
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
                            }) : ''
                        }
                    </CardsWrapper>

                    <SelectorWrapper>
                        <SelectorContainer>
                            {
                                products && products.length > 2 ?
                                    <>
                                        <IndexSelector
                                            onClick={() => {
                                                setPrev(selected)
                                                setSelected(0)
                                                setKey(prevKey => prevKey + 1)
                                            }}
                                            grow={selected === 0 ? "true" : "false"}
                                        />
                                        <IndexSelector
                                            onClick={() => {
                                                setPrev(selected)
                                                setSelected(1)
                                                setKey(prevKey => prevKey + 1)
                                            }}
                                            grow={selected === 1 ? "true" : "false"}
                                        />
                                    </> : ''
                            }
                            {
                                products && products.length > 4 ?
                                    <IndexSelector
                                        onClick={() => {
                                            setPrev(selected)
                                            setSelected(2)
                                            setKey(prevKey => prevKey + 1)
                                        }}
                                        grow={selected === 2 ? "true" : "false"}
                                    /> : ''
                            }
                        </SelectorContainer>
                    </SelectorWrapper>
                </Container>
            )
        } else {

            if (selected === 2 && products && !(products.length > 6) || selected === 1 && products && !(products.length > 3)) {
                setSelected(0)
            }

            return (
                <Container>
                    <Title>
                        <div>CONFIRA NOSSOS</div>
                        <div>DESTAQUES</div>
                    </Title>
                    <CardsWrapper prev={prev} current={selected} key={key}>
                        {products && products.length > 0 ?
                            products.map((prod, index) => {
                                if (selected === 0 && index <= 2) {
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
                                } else if (selected === 1 && index >= 3 && index <= 5) {
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
                                } else if (selected === 2 && index >= 6 && index <= 9) {
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
                                                setKey(prevKey => prevKey + 1)

                                            }}
                                            grow={selected === 0 ? "true" : "false"}
                                        />
                                        <IndexSelector
                                            onClick={() => {
                                                setSelected(1)
                                                setKey(prevKey => prevKey + 1)
                                            }}
                                            grow={selected === 1 ? "true" : "false"}
                                        />
                                    </> : ''
                            }
                            {
                                products && products.length > 6 ?
                                    <IndexSelector
                                        onClick={() => {
                                            setSelected(2)
                                            setKey(prevKey => prevKey + 1)
                                        }}
                                        grow={selected === 2 ? "true" : "false"}
                                    /> : ''
                            }
                        </SelectorContainer>
                    </SelectorWrapper>
                </Container>
            )
        }
    }

    useEffect(() => {

        function handleResize() {
            setPageLayout(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <Wrapper>
            {setLayout()}
        </Wrapper>
    )
}

export default Hightlights