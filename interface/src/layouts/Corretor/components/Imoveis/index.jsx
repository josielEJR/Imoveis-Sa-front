import React, { useState, useEffect } from 'react'
import { Container, Wrapper, Titulo, CardContainer, Card, CardContent, Atributos, DropInfo, Title, PriceArea, InfoSection, Label, Value, BackgroundImage, Overlay } from './style'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { GiHomeGarage } from "react-icons/gi"
import { LuBath } from "react-icons/lu"
import { IoBed } from "react-icons/io5"
import { TbRulerMeasure } from "react-icons/tb";

const Imoveis = () => {
    const location = useLocation()
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
                    Meus Imóveis ({imoveis.length})
                </Titulo>
                <CardContainer>
                    {imoveis.map(imovel => {
                        const disponibilidade = definirDisponibilidade(imovel);
                        return (
                            <Card key={imovel.id}
                                onClick={() => window.location.href = "/imovel?id=" + imovel.imoveisID}>
                                <BackgroundImage image={`http://localhost:3001/imoveis/imagensimovel/${imovel.imoveisID}`} alt={`Imagem do imóvel ${imovel.imoveisID}`}>
                                <Overlay />
                                </BackgroundImage>
                                <CardContent>
                                    <Atributos>
                                        <Title> {imovel.bairro}, </Title>
                                        <Title> {imovel.cidade} </Title>
                                    </Atributos>
                                    <PriceArea>
                                        {disponibilidade} | R$ {imovel.preco_venda || imovel.preco_aluguel}
                                    </PriceArea>
                                    <Atributos>
                                        CLIQUE E CONFIRA <FontAwesomeIcon icon={faAngleRight} />
                                    </Atributos>
                                </CardContent>
                                <DropInfo>
                                    <InfoSection>
                                        
                                        <Label><TbRulerMeasure size={20}/> ÁREA</Label>
                                        <Value>{imovel.tamanho}m²</Value>
                                    </InfoSection>
                                    <InfoSection>
                                        <Label><IoBed size={20}/> QUARTOS</Label>
                                        <Value>{imovel.quartos}</Value>
                                    </InfoSection>
                                    <InfoSection>
                                        <Label><LuBath size={20}/> BANHEIROS</Label>
                                        <Value>{imovel.banheiros}</Value>
                                    </InfoSection>
                                    <InfoSection>
                                        <Label><GiHomeGarage size={20} /> VAGAS</Label>
                                        <Value>{imovel.vagas}</Value>
                                    </InfoSection>
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
