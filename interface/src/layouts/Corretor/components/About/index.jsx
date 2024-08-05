import React from 'react'
import { Wrapper, Container, CardContent, CardContainer, Titulo, Sobre, Telefone, Whatsapp, Email } from './style'

const About = () => {
    return (
        <Wrapper>
            <Container>
                <CardContainer>
                </CardContainer>
                <CardContent>
                    <Titulo>
                        Sobre Mim
                    </Titulo>
                    <Sobre>
                    Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat.
                    </Sobre>
                    <Telefone>
                        Tel: (11) 356 945234
                    </Telefone>
                    <Whatsapp>
                    WhatsApp: (11) 9 5456 1789
                    </Whatsapp>
                    <Email>
                    Email: agents@example.com
                    </Email>
                </CardContent>
            </Container>
        </Wrapper>
    )
}

export default About
