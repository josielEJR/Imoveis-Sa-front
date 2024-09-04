import React from 'react'
import { Wrapper, Container, CardContent, CardContainer, Titulo, Contato, Image } from './style'
import { useLocation } from 'react-router-dom'

const About = () => {
    const Location = useLocation()
    const { data } = Location.state || {}
    return (
        <Wrapper>
            <Container>
                <CardContainer
                    key={data.title}
                >
                    <Image src={data.image} alt="" />
                </CardContainer>
                <CardContent>
                    <Titulo>
                        Sobre Mim
                    </Titulo>
                    <Contato>
                        {data.sobre}
                    </Contato>
                    <Contato>
                        Telefone: {data.telefone}
                    </Contato>
                    <Contato>
                        WhatsApp: {data.whatsapp}
                    </Contato>
                    <Contato>
                        Email: {data.email}
                    </Contato>
                </CardContent>
            </Container>
        </Wrapper>
    )
}

export default About
