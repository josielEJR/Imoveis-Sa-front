import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { Wrapper, BackgroundImage, CardContent, Title, PriceArea, RedirectIndicator, HouseInfo } from "./style"

const Card = ({ bairro, cidade, tipo, preco, area, quartos, banheiros, vagas }) => {
    return (
        <Wrapper>
            <BackgroundImage src="https://grupospimovel.s3.amazonaws.com/Imagens/Noticias/Sistema/mercado-imobiliario/0201_valor_venal_b.jpg" />
            <CardContent>
                <Title>
                    <div>JARDIM EUROPA</div>
                    <div>SÃO PAULO - SP</div>
                </Title>

                <PriceArea>
                    ALUGUEL | R$ 12.000
                </PriceArea>

                <RedirectIndicator>
                    CLIQUE E CONFIRA <FontAwesomeIcon icon={faAngleRight} />
                </RedirectIndicator>

                <HouseInfo>
                    <div>
                        <div>ÁREA</div>
                        <div>100m²</div>
                    </div>
                    <div>
                        <div>QUARTOS</div>
                        <div>4</div>
                    </div>
                    <div>
                        <div>BANHEIROS</div>
                        <div>3</div>
                    </div>
                    <div>
                        <div>VAGAS</div>
                        <div>2</div>
                    </div>
                </HouseInfo>
            </CardContent>
        </Wrapper>
    )
}

export default Card