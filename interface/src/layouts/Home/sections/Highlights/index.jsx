import { useState } from 'react'

import Card from './components/Card'

import { Wrapper, Container, Title, CardsWrapper, SelectorWrapper, SelectorContainer, IndexSelector } from "./style"

const Hightlights = () => {

    const [selected, setSelected] = useState(0)
    const [products, setProducts] = useState([
        {
            imagem: "https://grupospimovel.s3.amazonaws.com/Imagens/Noticias/Sistema/mercado-imobiliario/0201_valor_venal_b.jpg",
            bairro: "JARDIM EUROPA",
            cidade: "SÃO PAULO - SP",
            tipo: "ALUGUEL",
            preco: 4000,
            area: 100,
            quartos: 4,
            banheiros: 3,
            vagas: 2,
            redirect: "/imoveis"
        },
        {
            imagem: "https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg",
            bairro: "ITAIM PAULISTA",
            cidade: "SÃO PAULO - SP",
            tipo: "VENDA",
            preco: 130000,
            area: 50,
            quartos: 2,
            banheiros: 1,
            vagas: 1,
            redirect: "/imoveis"
        },
        {
            imagem: "https://resizedimgs.zapimoveis.com.br/crop/614x297/named.images.sp/46dd05db8786b3b0406e0ccf629c8018/sphera-panamby-no-vila-andrade-s-o-paulo.webp",
            bairro: "PENHA",
            cidade: "SÃO PAULO - SP",
            tipo: "ALUGUEL",
            preco: 8000,
            area: 200,
            quartos: 8,
            banheiros: 6,
            vagas: 4,
            redirect: "/imoveis"
        },
        {
            imagem: "https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg",
            bairro: "ITAIM PAULISTA",
            cidade: "SÃO PAULO - SP",
            tipo: "VENDA",
            preco: 130000,
            area: 50,
            quartos: 2,
            banheiros: 1,
            vagas: 1,
            redirect: "/imoveis"
        },
        {
            imagem: "https://resizedimgs.zapimoveis.com.br/crop/614x297/named.images.sp/46dd05db8786b3b0406e0ccf629c8018/sphera-panamby-no-vila-andrade-s-o-paulo.webp",
            bairro: "PENHA",
            cidade: "SÃO PAULO - SP",
            tipo: "ALUGUEL",
            preco: 8000,
            area: 200,
            quartos: 8,
            banheiros: 6,
            vagas: 4,
            redirect: "/imoveis"
        },
        {
            imagem: "https://grupospimovel.s3.amazonaws.com/Imagens/Noticias/Sistema/mercado-imobiliario/0201_valor_venal_b.jpg",
            bairro: "JARDIM EUROPA",
            cidade: "SÃO PAULO - SP",
            tipo: "ALUGUEL",
            preco: 4000,
            area: 100,
            quartos: 4,
            banheiros: 3,
            vagas: 2,
            redirect: "/imoveis"
        },
        {
            imagem: "https://resizedimgs.zapimoveis.com.br/crop/614x297/named.images.sp/46dd05db8786b3b0406e0ccf629c8018/sphera-panamby-no-vila-andrade-s-o-paulo.webp",
            bairro: "PENHA",
            cidade: "SÃO PAULO - SP",
            tipo: "ALUGUEL",
            preco: 8000,
            area: 200,
            quartos: 8,
            banheiros: 6,
            vagas: 4,
            redirect: "/imoveis"
        },
        {
            imagem: "https://grupospimovel.s3.amazonaws.com/Imagens/Noticias/Sistema/mercado-imobiliario/0201_valor_venal_b.jpg",
            bairro: "JARDIM EUROPA",
            cidade: "SÃO PAULO - SP",
            tipo: "ALUGUEL",
            preco: 4000,
            area: 100,
            quartos: 4,
            banheiros: 3,
            vagas: 2,
            redirect: "/imoveis"
        },
        {
            imagem: "https://queroficarrico.com/blog/wp-content/uploads/2017/06/como_investir_em_imoveis.jpg",
            bairro: "ITAIM PAULISTA",
            cidade: "SÃO PAULO - SP",
            tipo: "VENDA",
            preco: 130000,
            area: 50,
            quartos: 2,
            banheiros: 1,
            vagas: 1,
            redirect: "/imoveis"
        }
    ])

    return (
        <Wrapper>
            <Container>
                <Title>
                    <div>CONFIRA NOSSOS</div>
                    <div>DESTAQUES</div>
                </Title>

                <CardsWrapper>
                    {products.map((prod, index) => {
                        // este if é temporario, apenas para não quebrar o layout enquanto não terminei
                        if (index <= 2) {
                            return <Card
                                key={index}
                                imagem={prod.imagem}
                                bairro={prod.bairro}
                                cidade={prod.cidade}
                                tipo={prod.tipo}
                                preco={prod.preco}
                                area={prod.area}
                                quartos={prod.quartos}
                                banheiros={prod.banheiros}
                                vagas={prod.vagas}
                                redirect={prod.redirect}
                            />
                        }
                    })}
                </CardsWrapper>

                <SelectorWrapper>
                    <SelectorContainer>
                        <IndexSelector onClick={() => setSelected(0)} grow={selected === 0 ? "true" : "false"} />
                        <IndexSelector onClick={() => setSelected(1)} grow={selected === 1 ? "true" : "false"} />
                        <IndexSelector onClick={() => setSelected(2)} grow={selected === 2 ? "true" : "false"} />
                    </SelectorContainer>
                </SelectorWrapper>
            </Container>
        </Wrapper>
    )
}

export default Hightlights