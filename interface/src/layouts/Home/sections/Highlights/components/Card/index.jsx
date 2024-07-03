import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { Wrapper, BackgroundImage, CardContent, Gap, Title, PriceArea, RedirectIndicator, HouseInfo } from "./style"

const Card = ({ imagem, bairro, cidade, tipo, preco, area, quartos, banheiros, vagas, redirect }) => {

    const [hover, setHover] = useState("")

    const handleMouseEnter = () => {
        setHover("true")
    }

    const handleMouseLeave = () => {
        setHover("false")
    }

    return (
        <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => window.location.href = {redirect}}>
            <BackgroundImage image={imagem} ></BackgroundImage>
            <CardContent hover={hover}>
                <Gap></Gap>

                <Title>
                    <div>{bairro}</div>
                    <div>{cidade}</div>
                </Title>

                <PriceArea>
                    {tipo} | R$ {preco}
                </PriceArea>

                <RedirectIndicator>
                    CLIQUE E CONFIRA <FontAwesomeIcon icon={faAngleRight} />
                </RedirectIndicator>

                <HouseInfo>
                    <div>
                        <div>ÁREA</div>
                        <div>{area}m²</div>
                    </div>
                    <div>
                        <div>QUARTOS</div>
                        <div>{quartos}</div>
                    </div>
                    <div>
                        <div>BANHEIROS</div>
                        <div>{banheiros}</div>
                    </div>
                    <div>
                        <div>VAGAS</div>
                        <div>{vagas}</div>
                    </div>
                </HouseInfo>
            </CardContent>
        </Wrapper>
    )
}

export default Card