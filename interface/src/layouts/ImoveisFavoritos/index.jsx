import CardsContainer from './components/CardsContainer'

import { Wrapper, Container, Title } from './style'

const ImoveisFavoritos = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    Imoveis Favoritos
                </Title>

                <CardsContainer />
            </Container>
        </Wrapper>
    )
}

/* 
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("http://localhost:3001/imoveis/favoritos?clienteID=1", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
*/

export default ImoveisFavoritos