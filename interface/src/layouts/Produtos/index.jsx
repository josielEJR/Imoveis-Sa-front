import { useState, useEffect } from 'react'

import FiltroBusca from './components/FiltroBusca';
import CardsContainer from './components/CardsContainer';

import { Wrapper, Container, LocationSection, LocationText, LocationLabel, LocationIcon, LocationInput } from './style'

import { GrMap } from "react-icons/gr";

const Produtos = () => {

    const [location, setLocation] = useState("")

    return (
        <Wrapper>
            <Container>
                <LocationSection>
                    <LocationText>
                        Nossas incríveis propriedades
                    </LocationText>
                    <LocationLabel>
                        <LocationIcon>
                            <GrMap style={{
                                width: "35px",
                                height: "35px",
                            }} />
                        </LocationIcon>
                        <LocationInput
                            placeholder='Qual localização?'
                            onChange={e => setLocation(e.target.value)}
                        ></LocationInput>
                    </LocationLabel>
                </LocationSection>

                <FiltroBusca />

                <CardsContainer />
            </Container>
        </Wrapper>
    )
}

export default Produtos