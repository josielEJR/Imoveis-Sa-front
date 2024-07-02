import Card from './components/Card'

import { Wrapper, Container, Title, CardsWrapper } from "./style"

const Hightlights = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    <div>CONFIRA NOSSOS</div>
                    <div>DESTAQUES</div>
                </Title>

                <CardsWrapper>
                    <Card />
                    <Card />
                    <Card />
                </CardsWrapper>

                <div>
                    seletor
                </div>
            </Container>
        </Wrapper>
    )
}

export default Hightlights