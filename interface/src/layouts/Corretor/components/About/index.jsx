import React from 'react'
import { Wrapper, Container, CardContent, CardContainer, Titulo, Contato, Image } from './style'

const About = ({ dados }) => {

    return (
        <Wrapper>
            <Container>
                <CardContainer>
                    <Image 
  src={`/consultores/imagensconsultores/${dados.consultorid}`} 
  alt={`foto do consultor ${dados.nome}`}
  onError={(e) => {
    console.log('Erro ao carregar imagem do consultor:', dados.consultorid);
    e.target.src = '/logo-branco.png';
  }}
/>
                </CardContainer>
                <CardContent>
                    <Titulo>
                        Sobre Mim
                    </Titulo>
                    <Contato>
                        {dados.sobre}
                    </Contato>
                    <Contato>
                        Telefone: {dados.telefone}
                    </Contato>
                    <Contato>
                        WhatsApp: {dados.whatsApp}
                    </Contato>
                    <Contato>
                        Email: {dados.consultor_email}
                    </Contato>
                </CardContent>
            </Container>
        </Wrapper>
    )
}

export default About
