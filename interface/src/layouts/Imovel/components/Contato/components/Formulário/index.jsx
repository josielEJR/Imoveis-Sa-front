import React from 'react'
import { Button, Container, Form, Input, TextArea, Wrapper } from './style'

const Agendar = () => {
    return (
        <Wrapper>
            <Container>
                <Form>
                    <Input type="text" placeholder="Nome"/>
                    <Input type="email" placeholder="E-mail"/>
                    <TextArea placeholder='Comentario' />
                    <Button > Agendar uma Visita</Button>
                </Form>
            </Container>
        </Wrapper>
    )
}

export default Agendar