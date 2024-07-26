import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { Wrapper, BackgroundImage, CardContent, TitleWrapper, Title, PriceArea, RedirectIndicator, HouseInfo, InfoWrapper, Label, Value } from "./style"

const Card = ({ imagem, bairro, cidade, tipo, preco, area, quartos, banheiros, vagas, id }) => {

    const [hover, setHover] = useState("")

    const handleMouseEnter = () => {
        setHover("true")
    }

    const handleMouseLeave = () => {
        setHover("false")
    }

    const formatarPreco = (preco) => {
        return new Intl.NumberFormat('de-DE', { currency: 'BRL' }).format(preco)
    }

    return (
        <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => window.location.href = "/imovel?id=" + id}>
            <BackgroundImage image={imagem} ></BackgroundImage>
            <CardContent hover={hover}>

                <TitleWrapper>
                    <Title>{bairro}</Title>
                    <Title>{cidade}</Title>
                </TitleWrapper>

                <PriceArea>
                    {tipo} | R$ {formatarPreco(preco)}
                </PriceArea>

                <RedirectIndicator>
                    CLIQUE E CONFIRA <FontAwesomeIcon icon={faAngleRight} />
                </RedirectIndicator>

                <HouseInfo>
                    <InfoWrapper>
                        <Label>ÁREA</Label>
                        <Value>{area}m²</Value>
                    </InfoWrapper>
                    <InfoWrapper>
                        <Label>QUARTOS</Label>
                        <Value>{quartos}</Value>
                    </InfoWrapper>
                    <InfoWrapper>
                        <Label>BANHEIROS</Label>
                        <Value>{banheiros}</Value>
                    </InfoWrapper>
                    <InfoWrapper>
                        <Label>VAGAS</Label>
                        <Value>{vagas}</Value>
                    </InfoWrapper>
                </HouseInfo>
            </CardContent>
        </Wrapper>
    )
}

export default Card