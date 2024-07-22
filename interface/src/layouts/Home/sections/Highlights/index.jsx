import { useEffect, useState } from 'react'

import Card from './components/Card'

import { Wrapper, Container, Title, CardsWrapper, SelectorWrapper, SelectorContainer, IndexSelector } from "./style"

const Hightlights = () => {

    const [selected, setSelected] = useState(0)
    const [position, setPosition] = useState("-5%")
    const [prev, setPrev] = useState(selected)
    const [key, setKey] = useState(0)
    const [pageLayout, setPageLayout] = useState(window.innerWidth)
    const [products, setProducts] = useState([

        {
            imagem: "https://grupospimovel.s3.amazonaws.com/Imagens/Noticias/Sistema/mercado-imobiliario/0201_valor_venal_b.jpg",
            bairro: "JARDIM EUROPA",
            cidade: "SÃO PAULO - SP",
            tipo: "ALUGUEL",
            preco: 4000,
            area: 100,
            quartos: 4,
            banheiros: 3,
            vagas: 2,
            redirect: "/imoveis"
        },
        {
            imagem: "https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg",
            bairro: "ITAIM PAULISTA",
            cidade: "SÃO PAULO - SP",
            tipo: "VENDA",
            preco: 130000,
            area: 50,
            quartos: 2,
            banheiros: 1,
            vagas: 1,
            redirect: "/imoveis"
        },
        {
            imagem: "https://resizedimgs.zapimoveis.com.br/crop/614x297/named.images.sp/46dd05db8786b3b0406e0ccf629c8018/sphera-panamby-no-vila-andrade-s-o-paulo.webp",
            bairro: "PENHA",
            cidade: "SÃO PAULO - SP",
            tipo: "ALUGUEL",
            preco: 8000,
            area: 200,
            quartos: 8,
            banheiros: 6,
            vagas: 4,
            redirect: "/imoveis"
        }
        ,

        {
            imagem: "https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg",
            bairro: "ITAIM PAULISTA",
            cidade: "SÃO PAULO - SP",
            tipo: "VENDA",
            preco: 130000,
            area: 50,
            quartos: 2,
            banheiros: 1,
            vagas: 1,
            redirect: "/imoveis"
        },
        {
            imagem: "https://resizedimgs.zapimoveis.com.br/crop/614x297/named.images.sp/46dd05db8786b3b0406e0ccf629c8018/sphera-panamby-no-vila-andrade-s-o-paulo.webp",
            bairro: "PENHA",
            cidade: "SÃO PAULO - SP",
            tipo: "ALUGUEL",
            preco: 8000,
            area: 200,
            quartos: 8,
            banheiros: 6,
            vagas: 4,
            redirect: "/imoveis"
        },
        {
            imagem: "https://grupospimovel.s3.amazonaws.com/Imagens/Noticias/Sistema/mercado-imobiliario/0201_valor_venal_b.jpg",
            bairro: "JARDIM EUROPA",
            cidade: "SÃO PAULO - SP",
            tipo: "ALUGUEL",
            preco: 4000,
            area: 100,
            quartos: 4,
            banheiros: 3,
            vagas: 2,
            redirect: "/imoveis"
        }
        ,

        {
            imagem: "https://resizedimgs.zapimoveis.com.br/crop/614x297/named.images.sp/46dd05db8786b3b0406e0ccf629c8018/sphera-panamby-no-vila-andrade-s-o-paulo.webp",
            bairro: "PENHA",
            cidade: "SÃO PAULO - SP",
            tipo: "ALUGUEL",
            preco: 8000,
            area: 200,
            quartos: 8,
            banheiros: 6,
            vagas: 4,
            redirect: "/imoveis"
        },
        {
            imagem: "https://grupospimovel.s3.amazonaws.com/Imagens/Noticias/Sistema/mercado-imobiliario/0201_valor_venal_b.jpg",
            bairro: "JARDIM EUROPA",
            cidade: "SÃO PAULO - SP",
            tipo: "ALUGUEL",
            preco: 4000,
            area: 100,
            quartos: 4,
            banheiros: 3,
            vagas: 2,
            redirect: "/imoveis"
        },
        {
            imagem: "https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg",
            bairro: "ITAIM PAULISTA",
            cidade: "SÃO PAULO - SP",
            tipo: "VENDA",
            preco: 130000,
            area: 50,
            quartos: 2,
            banheiros: 1,
            vagas: 1,
            redirect: "/imoveis"
        }

    ])

    // useEffect(() => {
    //     const myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     const requestOptions = {
    //         method: "GET",
    //         headers: myHeaders,
    //         redirect: "follow"
    //     };

    //     fetch("http://localhost:3001/imoveis/ordenarimovelqualidade", requestOptions)
    //         .then((response) => response.text())
    //         .then((result) => JSON.parse(result))
    //         .then((result) => {
    //             setProducts(result)
    //         })
    //         .catch((error) => console.error(error));
    // }, [])

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
                                                // setPrev(selected)
                                                // setKey(prevKey => prevKey + 1)
                                                setSelected(0)
                                                setPrev(selected)
                                                setPosition("-5%")
                                                setKey(prevKey => prevKey + 1)
                                            }}
                                            grow={selected === 0 ? "true" : "false"}
                                        />
                                        <IndexSelector
                                            onClick={() => {
                                                // setPrev(selected)
                                                // setKey(prevKey => prevKey + 1)
                                                setSelected(1)
                                                setPrev(selected)
                                                setPosition("81%")
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
                                            // setPrev(selected)
                                            // setKey(prevKey => prevKey + 1)
                                            setSelected(2)
                                            setPrev(selected)
                                            setPosition("169%")
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