import React from 'react'
import { Wrapper, Container, CardContent, CardContainer, Titulo, Sobre, Telefone, Whatsapp, Email } from './style'
import { useLocation } from 'react-router-dom'

const About = () => {
    const Location = useLocation()
    const { data } = Location.state || {}
    return (
        <Wrapper>
            <Container>
                <CardContainer
                    key={data.title}
                    style={{
                        backgroundImage: `url(${data.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                </CardContainer>
                <CardContent>
                    <Titulo>
                        Sobre Mim
                    </Titulo>
                    <Sobre>
                        {data.sobre}
                    </Sobre>
                    <Telefone>
                        Telefone: {data.telefone}
                    </Telefone>
                    <Whatsapp>
                        WhatsApp: {data.whatsapp}
                    </Whatsapp>
                    <Email>
                        Email: {data.email}
                    </Email>
                </CardContent>
            </Container>
        </Wrapper>
    )
}

export default About
