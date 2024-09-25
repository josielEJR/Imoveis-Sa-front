import { useState, useEffect } from 'react'

import Card from '../Card'

import { Wrapper, Container, CardsSection, SelectorSection, Selectors, IndexSelector, Error } from './style'

const CardsContainer = () => {

    const [selected, setSelected] = useState(0)
    const [indexes, setIndexes] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`http://localhost:3001/imoveis/visitas?clienteID=${localStorage.currentUserID}`, requestOptions)
            .then((response) => response.text())
            .then((result) => JSON.parse(result))
            .then((result) => {
                setProducts(result)
                console.log(result)
            })
            .catch((error) => console.error(error));
    }, [])

    useEffect(() => {
        const auxArray = []

        if (products) {
            const maxPages = Math.ceil(products.length / 6)
            for (let i = 0; i < maxPages; i++) {
                auxArray.push(i + 1)
            }
        }

        if (auxArray.length > 0) {
            setSelected(auxArray[0])
            setIndexes(auxArray)
        }
    }, [products])

    function scrollToTop() {
        document.body.scrollTop = 100; // Safari
        document.documentElement.scrollTop = 100; // Chrome, Firefox, IE e Opera
    }

    const selector = () => {
        if (localStorage.length === 0 || products.length === 0) {
            return (
                <></>
            )
        } else {
            return <Selectors>
                {
                    indexes.map((elem, index) => {
                        return <IndexSelector selected={selected == elem ? true : false} key={index} onClick={() => {
                            setSelected(elem)
                            scrollToTop()
                        }} >{elem}</IndexSelector>
                    })
                }
            </Selectors>
        }
    }

    const visitas = () => {
        if (localStorage.length === 0 || products.length === 0) {
            return <Error>
                Não existem visitas agendadas
            </Error>
        } else {
            return products.map((prod, index) => {
                const indexMin = (selected * 6) - 6
                const indexMax = selected * 6

                if (index >= indexMin && index < indexMax) {
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

    return (
        <Wrapper>
            <Container id='scrollContainer'>
                <CardsSection>
                    {visitas()}
                </CardsSection>
            </Container>
            <SelectorSection>
                {selector()}
            </SelectorSection>
        </Wrapper>
    )
}

export default CardsContainer