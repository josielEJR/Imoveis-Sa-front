import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { Wrapper, BackgroundImage, CardContent, Title, PriceArea, RedirectIndicator, HouseInfo, Label, Value } from "./style"

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
        <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => window.location.href = "/imovel?id="+id}>
            <BackgroundImage image={imagem} ></BackgroundImage>
            <CardContent hover={hover}>

                <Title>
                    <div>{bairro}</div>
                    <div>{cidade}</div>
                </Title>

                <PriceArea>
                    {tipo} | R$ {formatarPreco(preco)}
                </PriceArea>

                <RedirectIndicator>
                    CLIQUE E CONFIRA <FontAwesomeIcon icon={faAngleRight} />
                </RedirectIndicator>

                <HouseInfo>
                    <div>
                        <Label>ÁREA</Label>
                        <Value>{area}m²</Value>
                    </div>
                    <div>
                        <Label>QUARTOS</Label>
                        <Value>{quartos}</Value>
                    </div>
                    <div>
                        <Label>BANHEIROS</Label>
                        <Value>{banheiros}</Value>
                    </div>
                    <div>
                        <Label>VAGAS</Label>
                        <Value>{vagas}</Value>
                    </div>
                </HouseInfo>
            </CardContent>
        </Wrapper>
    )
}

export default Card