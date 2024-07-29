import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { Wrapper, BackgroundImage, CardContent, TitleSection, Title, PriceArea, RedirectIndicator, HouseInfo, InfoSection, Label, Value } from "./style"

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

                <TitleSection>
                    <Title>{bairro}</Title>
                    <Title>{cidade}</Title>
                </TitleSection>

                <PriceArea>
                    {tipo} | R$ {formatarPreco(preco)}
                </PriceArea>

                <RedirectIndicator>
                    CLIQUE E CONFIRA <FontAwesomeIcon icon={faAngleRight} />
                </RedirectIndicator>

                <HouseInfo>
                    <InfoSection>
                        <Label>ÁREA</Label>
                        <Value>{area}m²</Value>
                    </InfoSection>
                    <InfoSection>
                        <Label>QUARTOS</Label>
                        <Value>{quartos}</Value>
                    </InfoSection>
                    <InfoSection>
                        <Label>BANHEIROS</Label>
                        <Value>{banheiros}</Value>
                    </InfoSection>
                    <InfoSection>
                        <Label>VAGAS</Label>
                        <Value>{vagas}</Value>
                    </InfoSection>
                </HouseInfo>
            </CardContent>
        </Wrapper>
    )
}

export default Card