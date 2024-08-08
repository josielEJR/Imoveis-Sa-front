import { useState, useEffect } from 'react'

import FiltroBusca from './components/FiltroBusca';
import CardsContainer from './components/CardsContainer';

import { Wrapper, Container, LocationSection, LocationText, LocationLabel, LocationIcon, LocationInput } from './style'

import { GrMap } from "react-icons/gr";

const Produtos = () => {

    const [location, setLocation] = useState("")

    const filters = decodeURIComponent(window.location.href.replace("http://localhost:3000/imoveis", ""))

    return (
        <Wrapper>
            <Container>
                <LocationSection>
                    <LocationText>
                        Nossas incríveis propriedades
                    </LocationText>
                    <LocationLabel>
                        <LocationIcon>
                            <GrMap />
                        </LocationIcon>
                        <LocationInput
                            placeholder='Qual localização?'
                            onChange={e => setLocation(e.target.value)}
                        ></LocationInput>
                    </LocationLabel>
                </LocationSection>

                <FiltroBusca />

                <CardsContainer filters={filters} />
            </Container>
        </Wrapper>
    )
}

export default Produtos