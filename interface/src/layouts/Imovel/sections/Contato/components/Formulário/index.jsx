import React, { useState } from 'react'
import { Button, Container, Form, Input, TextArea, Wrapper } from './style'

const Agendar = () => {
    const [animate, setAnimate] = useState(false)

    const handleAgendarClick = (e) => {
        e.preventDefault()
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300)
    }

    return (
        <Wrapper>
            <Container>
                <Form>
                    <Input type="text" placeholder="Nome" />
                    <Input type="email" placeholder="E-mail" />
                    <TextArea placeholder='Comentario' />
                    <Button animate={animate} onClick={(e) => {
                        handleAgendarClick(e)
                    }} > Agendar uma Visita</Button>
                </Form>
            </Container>
        </Wrapper>
    )
}

export default Agendar