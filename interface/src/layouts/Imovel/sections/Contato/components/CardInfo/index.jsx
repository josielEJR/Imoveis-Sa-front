import React, { useEffect, useState } from 'react'
import { Wrapper, Container, CardContent, CardContainer, Titulo, Contato, Image } from './style'

const CardInfo = ({ consultorId }) => {
    const [consultorInfo, setConsultorInfo] = useState({})

    useEffect(() => {
        if (consultorId) {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            }

            fetch(`/consultores/buscarconsultorid?id=${consultorId}`, requestOptions)
                .then(response => response.json())
                .then(consultorArray => {
                    if (consultorArray.length > 0) {
                        const consultor = consultorArray[0]
                        setConsultorInfo(consultor)
                    }
                })
                .catch(error => console.error(error))
        }
    }, [consultorId])

    return (
        <Wrapper>
            <Container>
                <CardContainer
                    key={consultorInfo.id}
                >
                    <Image 
                      src={`/consultores/imagensconsultores/${consultorInfo.consultorid}`} 
                      alt={`foto do consultor ${consultorInfo.nome}`}
                      onError={(e) => {
                        e.target.src = '/logo-branco.png';
                      }}
                    />
                </CardContainer>
                <CardContent>
                    <Titulo>
                        {consultorInfo.nome}
                    </Titulo>
                    <Contato>
                        {consultorInfo.sobre}
                    </Contato>
                    <Contato>
                        Telefone: {consultorInfo.telefone}
                    </Contato>
                    <Contato>
                        WhatsApp: {consultorInfo.whatsApp}
                    </Contato>
                    <Contato>
                        Email: {consultorInfo.consultor_email}
                    </Contato>
                </CardContent>
            </Container>
        </Wrapper>
    )
}

export default CardInfo