import React, { useState, useEffect } from 'react'
import { Container, Wrapper, Titulo, CardContainer, Card, CardContent, Atributos, DropInfo, Title, PriceArea } from './style'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Imoveis = () => {
    const location = useLocation();
    const { data: consultor } = location.state || {}
    const [imoveis, setImoveis] = useState([])

    useEffect(() => {
        if (consultor && consultor.consultorid) {
            fetch(`http://localhost:3001/imoveis/porConsultor?consultorId=${consultor.consultorid}`)
                .then(response => response.json())
                .then(data => {
                    setImoveis(data)
                })
                .catch(error => {
                    console.error('Erro ao buscar imóveis:', error)
                })
        }
    }, [consultor])

    // Função para definir a mensagem de disponibilidade
    const definirDisponibilidade = (imovel) => {
        switch (imovel.disponibilidade) {
            case 'venda':
                return ' Venda';
            case 'aluguel':
                return ' Aluguel';
            case 'venda_e_aluguel':
                return ' Venda ';
            default:
                return 'Disponibilidade desconhecida';
        }
    }

    return (
        <Wrapper>
            <Container>
                <Titulo>
                    Meus Imóveis
                </Titulo>
                <CardContainer>
                    {imoveis.map(imovel => {
                        const disponibilidade = definirDisponibilidade(imovel);

                        return (
                            <Card key={imovel.id}>
                                <img src={`/imagensimoveis/${imovel.foto}`} alt={imovel.tipo} />
                                <CardContent>
                                    <Atributos>
                                        <Title> {imovel.bairro}, </Title>
                                        <Title> {imovel.cidade} </Title>
                                    </Atributos>
                                    <PriceArea>
                                        {disponibilidade} | R$ {imovel.preco_venda || imovel.preco_aluguel}
                                    </PriceArea>
                                    <Atributos>
                                        CLIQUE E CONFIRA <FontAwesomeIcon icon={faAngleRight} style={{ cursor: 'pointer' }} onClick={() => window.location.href = "/imovel?id=" + imovel} />
                                    </Atributos>
                                </CardContent>
                                <DropInfo>

                                </DropInfo>
                            </Card>
                        )
                    })}
                </CardContainer>
            </Container>
        </Wrapper>
    );
}

export default Imoveis
