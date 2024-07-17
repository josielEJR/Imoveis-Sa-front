import { useEffect, useState } from 'react'

import Card from './components/Card'

import { Wrapper, Container, Title, CardsWrapper, SelectorWrapper, SelectorContainer, IndexSelector } from "./style"

const Hightlights = () => {

    const [selected, setSelected] = useState(0)
    const [prev, setPrev] = useState(selected)
    const [key, setKey] = useState(0)
    const [pageLayout, setPageLayout] = useState(window.innerWidth)
    const [products, setProducts] = useState([
        // [
        //     {
        //         imagem: "https://grupospimovel.s3.amazonaws.com/Imagens/Noticias/Sistema/mercado-imobiliario/0201_valor_venal_b.jpg",
        //         bairro: "JARDIM EUROPA",
        //         cidade: "SÃO PAULO - SP",
        //         tipo: "ALUGUEL",
        //         preco: 4000,
        //         area: 100,
        //         quartos: 4,
        //         banheiros: 3,
        //         vagas: 2,
        //         redirect: "/imoveis"
        //     },
        //     {
        //         imagem: "https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg",
        //         bairro: "ITAIM PAULISTA",
        //         cidade: "SÃO PAULO - SP",
        //         tipo: "VENDA",
        //         preco: 130000,
        //         area: 50,
        //         quartos: 2,
        //         banheiros: 1,
        //         vagas: 1,
        //         redirect: "/imoveis"
        //     },
        //     {
        //         imagem: "https://resizedimgs.zapimoveis.com.br/crop/614x297/named.images.sp/46dd05db8786b3b0406e0ccf629c8018/sphera-panamby-no-vila-andrade-s-o-paulo.webp",
        //         bairro: "PENHA",
        //         cidade: "SÃO PAULO - SP",
        //         tipo: "ALUGUEL",
        //         preco: 8000,
        //         area: 200,
        //         quartos: 8,
        //         banheiros: 6,
        //         vagas: 4,
        //         redirect: "/imoveis"
        //     }
        // ],
        // [
        //     {
        //         imagem: "https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg",
        //         bairro: "ITAIM PAULISTA",
        //         cidade: "SÃO PAULO - SP",
        //         tipo: "VENDA",
        //         preco: 130000,
        //         area: 50,
        //         quartos: 2,
        //         banheiros: 1,
        //         vagas: 1,
        //         redirect: "/imoveis"
        //     },
        //     {
        //         imagem: "https://resizedimgs.zapimoveis.com.br/crop/614x297/named.images.sp/46dd05db8786b3b0406e0ccf629c8018/sphera-panamby-no-vila-andrade-s-o-paulo.webp",
        //         bairro: "PENHA",
        //         cidade: "SÃO PAULO - SP",
        //         tipo: "ALUGUEL",
        //         preco: 8000,
        //         area: 200,
        //         quartos: 8,
        //         banheiros: 6,
        //         vagas: 4,
        //         redirect: "/imoveis"
        //     },
        //     {
        //         imagem: "https://grupospimovel.s3.amazonaws.com/Imagens/Noticias/Sistema/mercado-imobiliario/0201_valor_venal_b.jpg",
        //         bairro: "JARDIM EUROPA",
        //         cidade: "SÃO PAULO - SP",
        //         tipo: "ALUGUEL",
        //         preco: 4000,
        //         area: 100,
        //         quartos: 4,
        //         banheiros: 3,
        //         vagas: 2,
        //         redirect: "/imoveis"
        //     }
        // ],
        // [
        //     {
        //         imagem: "https://resizedimgs.zapimoveis.com.br/crop/614x297/named.images.sp/46dd05db8786b3b0406e0ccf629c8018/sphera-panamby-no-vila-andrade-s-o-paulo.webp",
        //         bairro: "PENHA",
        //         cidade: "SÃO PAULO - SP",
        //         tipo: "ALUGUEL",
        //         preco: 8000,
        //         area: 200,
        //         quartos: 8,
        //         banheiros: 6,
        //         vagas: 4,
        //         redirect: "/imoveis"
        //     },
        //     {
        //         imagem: "https://grupospimovel.s3.amazonaws.com/Imagens/Noticias/Sistema/mercado-imobiliario/0201_valor_venal_b.jpg",
        //         bairro: "JARDIM EUROPA",
        //         cidade: "SÃO PAULO - SP",
        //         tipo: "ALUGUEL",
        //         preco: 4000,
        //         area: 100,
        //         quartos: 4,
        //         banheiros: 3,
        //         vagas: 2,
        //         redirect: "/imoveis"
        //     },
        //     {
        //         imagem: "https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg",
        //         bairro: "ITAIM PAULISTA",
        //         cidade: "SÃO PAULO - SP",
        //         tipo: "VENDA",
        //         preco: 130000,
        //         area: 50,
        //         quartos: 2,
        //         banheiros: 1,
        //         vagas: 1,
        //         redirect: "/imoveis"
        //     }
        // ]
    ])

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
                const arrayAux = [[], [], []]
                result.forEach((elem, index) => {
                    if (index <= 2) {
                        arrayAux[0].push(elem)
                    } else if (index <= 5) {
                        arrayAux[1].push(elem)
                    } else if (index <= 8) {
                        arrayAux[2].push(elem)
                    }
                })

                setProducts(arrayAux)
            })
            .catch((error) => console.error(error));
    }, [])

    const setLayout = () => {
        if (pageLayout <= 950) {
            return (
                <Container>
                    <Title>
                        <div>CONFIRA NOSSOS</div>
                        <div>DESTAQUES</div>
                    </Title>

                    <CardsWrapper prev={prev} current={selected} key={key}>
                        {
                            products[0] && products[0].length > 0 ?
                                <Card
                                    key={selected}
                                    imagem={"https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg"}
                                    bairro={products[0][selected].bairro}
                                    cidade={products[0][selected].cidade}
                                    tipo={products[0][selected].tipo}
                                    preco={products[0][selected].preco_venda || products[0][selected].preco_aluguel}
                                    area={products[0][selected].tamanho}
                                    quartos={products[0][selected].quartos}
                                    banheiros={products[0][selected].banheiros}
                                    vagas={products[0][selected].vagas}
                                    id={products[0][selected].imoveisID}
                                />
                                : ''
                        }
                    </CardsWrapper>

                    <SelectorWrapper>
                        <SelectorContainer>
                            {
                                products[0] && products[0].length > 1 ?
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
                                products[0] && products[0].length > 2 ?
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
            return (
                <Container>
                    <Title>
                        <div>CONFIRA NOSSOS</div>
                        <div>DESTAQUES</div>
                    </Title>

                    <CardsWrapper prev={prev} current={selected} key={key}>
                        {products[selected] && products[selected].length > 0 ?
                            products[selected].map((prod, index) => (
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
                            )) : ''
                        }
                    </CardsWrapper>

                    <SelectorWrapper>
                        <SelectorContainer>
                            {
                                products[1] && products[1].length > 0 ?
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
                                products[2] && products[2].length > 0 ?
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