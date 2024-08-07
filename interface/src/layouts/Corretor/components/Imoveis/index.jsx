import React, { useState, useEffect } from 'react'
import { Container, Wrapper, Titulo, CardContainer, Card, CardContent, Cidade, Preco, Atributos, DropInfo } from './style'
import { useLocation } from 'react-router-dom'


const Imoveis = () => {
    const location = useLocation();
    const { data: consultor } = location.state || {}
    const [imoveis, setImoveis] = useState([])

    useEffect(() => {
        if (consultor && consultor.consultorid) {
            fetch(`http://localhost:3001/imoveis/porConsultor?consultorId=${consultor.consultorid}`)
                .then(response => response.json())  
                .then(data => {
                    setImoveis(data)
                })
                .catch(error => {
                    console.error('Erro ao buscar imóveis:', error)
                })
        }
    }, [consultor])

    return (
        <Wrapper>
            <Container>
                <Titulo>
                    Meus Imóveis
                </Titulo>
                <CardContainer>
                    { imoveis.map(imovel => (
                        <Card key={imovel.id}>
                           <img src={`/imagensimoveis/${imovel.foto}`} alt={imovel.tipo} />
                           <CardContent>
                            <Atributos>
                                {imovel.bairro},
                                <p>{imovel.cidade}</p>
                            </Atributos>
                            <Atributos>
                                {imovel.preco_venda}
                            </Atributos>
                            <Atributos>
                                Clique e Confira 
                            </Atributos>
                            
                           </CardContent>
                           <DropInfo>
                                
                            </DropInfo>
                        </Card>
                    ))}
                    
                </CardContainer>
            </Container>
        </Wrapper>
    );
}

export default Imoveis
