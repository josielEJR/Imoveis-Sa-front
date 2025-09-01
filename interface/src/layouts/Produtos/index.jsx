import Location from './components/Location';
import FiltroBusca from '../Home/sections/Hero/components/FiltroBusca/index';
import CardsContainer from './components/CardsContainer';

import { Wrapper, Container } from './style'

const Produtos = () => {

    const filters = decodeURIComponent(window.location.href.replace("http://localhost:3000/produtos", ""))

    return (
        <Wrapper>
            <Container>
                <Location />

                <FiltroBusca />

                <CardsContainer filters={filters} />
            </Container>
        </Wrapper>
    )
}

export default Produtos