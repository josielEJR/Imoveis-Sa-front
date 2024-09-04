import React from 'react'
import { Container, ContatoContainer, Title, Wrapper } from './style'
import CardInfo from './components/CardInfo'
import Agendar from './components/Formulário'

const ContatoLayout = ({ consultorId }) => {
    return (
        <Wrapper>
            <Container>
                <Title >
                    Fale com o Corretor
                </Title>
                <ContatoContainer>
                    <CardInfo consultorId={consultorId} />
                    <Agendar />
                </ContatoContainer>
            </Container>
        </Wrapper>
    )
}

export default ContatoLayout