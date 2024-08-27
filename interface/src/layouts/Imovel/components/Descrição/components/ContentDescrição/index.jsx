import React, { useState, useEffect } from 'react'
import { Container, ContainerContent, ContainerIcon, ContainerInfo, Content, Icon, ContainerDescrição, Value, Wrapper, DescriçãoIcon, DropOver, TextDrop, Aba } from './style'
import { TbRulerMeasure } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { LiaCouchSolid } from "react-icons/lia";
import { TbBed } from "react-icons/tb";
import { PiBathtub } from "react-icons/pi";
import { MdInfoOutline } from "react-icons/md";

const ContentDescrição = ({ imovelID }) => {
  const [prodInfo, setProdInfo] = useState({})
  const [activeIcon, setActiveIcon] = useState(null)

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(`http://localhost:3001/imoveis/buscarimovelid?id=${imovelID}`, requestOptions)
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .then((produto) => {
        console.log(produto[0])
        return setProdInfo(produto[0])
      })
      .catch((error) => console.error(error));
  }, [imovelID])


  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco);
  }

  const getPreco = () => {
    switch (prodInfo.disponibilidade) {
      case 'aluguel':
        return formatarPreco(prodInfo.preco_aluguel);
      case 'venda':
        return formatarPreco(prodInfo.preco_venda);
      case 'venda_e_aluguel':
        return formatarPreco(prodInfo.preco_venda);
      default:
        return 'Preço não disponível';
    }
  }

  const getDisponibilidade = () => {
    switch (prodInfo.disponibilidade) {
      case 'aluguel':
        return ('Aluguel');
      case 'venda':
        return ('Venda');
      case 'venda_e_aluguel':
        return ('Venda');
      default:
        return 'dispolidade não disponovel';
    }
  }

  const handleMouseEnter = (icon) => setActiveIcon(icon)
  const handleMouseLeave = () => setActiveIcon(null)

  return (

    <Wrapper>
      <Container>
        <ContainerContent>
          <ContainerDescrição>
            <Content>
              {getDisponibilidade()}
            </Content>
            <Content>
              Condominio
              <MdInfoOutline
                size={30}
                onMouseEnter={() => handleMouseEnter('condominio')}
                onMouseLeave={handleMouseLeave}
              />
              {activeIcon === 'condominio' && (
                <DropOver>
                  <TextDrop>
                  <Aba />
                  Valor sujeito a alteração conforme deliberações condominiais, podendo, ainda, variar de acordo com as despesas fixas e eventuais do condomínio (ex.: água, luz, conservação e manutenção do prédio, entre outros).</TextDrop>
                </DropOver>
              )}
            </Content>
            <Content>
              IPTU
              <MdInfoOutline
                size={30}
                onMouseEnter={() => handleMouseEnter('iptu')}
                onMouseLeave={handleMouseLeave}
              />
              {activeIcon === 'iptu' && (
                <DropOver>
                  <TextDrop>
                    <Aba />
                    Informações sobre o condomínio
                  </TextDrop>
                </DropOver>
              )}
            </Content>
            <Content>
              Seguro incêndio
              <MdInfoOutline
                size={30}
                onMouseEnter={() => handleMouseEnter('seguro')}
                onMouseLeave={handleMouseLeave}
              />
              {activeIcon === 'seguro' && (
                <DropOver>
                  <TextDrop>
                    <Aba />
                    Informações sobre o condomínio
                  </TextDrop>
                </DropOver>
              )}
            </Content>
            <Content>
              Taxa de serviço
              <MdInfoOutline
                size={30}
                onMouseEnter={() => handleMouseEnter('taxa')}
                onMouseLeave={handleMouseLeave}
              />
              {activeIcon === 'taxa' && (
                <DropOver>
                  <TextDrop>
                    <Aba />
                    Informações sobre o condomínio
                  </TextDrop>
                </DropOver>
              )}
            </Content>
          </ContainerDescrição>
          <ContainerInfo>
            <Value >
              {getPreco()}
            </Value>
            <Value >
              {formatarPreco(prodInfo.condominio)}
            </Value>
            <Value >
              {formatarPreco(prodInfo.iptu)}
            </Value>
            <Value >
              {formatarPreco(prodInfo.seguro_incendio)}
            </Value>
            <Value >
              {formatarPreco(prodInfo.taxa_de_servicos)}
            </Value>
          </ContainerInfo>
        </ContainerContent>
        <ContainerIcon>
          <DescriçãoIcon>
            <Icon>
              <TbRulerMeasure size={30} />
            </Icon>
            <Icon>
              <IoCarSportOutline size={30} />
            </Icon>
            {prodInfo.mobiliado && (
              <Icon>
                <LiaCouchSolid size={30} />
              </Icon>
            )}
            <Icon>
              <TbBed size={30} />
            </Icon>
            <Icon>
              <PiBathtub size={30} />
            </Icon>
          </DescriçãoIcon>
          <ContainerInfo>
            <Value >
              {prodInfo.tamanho} m²
            </Value>
            <Value >
              {prodInfo.vagas}
            </Value>
            {prodInfo.mobiliado && (
              <Value >
                {prodInfo.mobiliado}
              </Value>
            )}
            <Value >
              {prodInfo.quartos}
            </Value>
            <Value >
              {prodInfo.banheiros}
            </Value>
          </ContainerInfo>
        </ContainerIcon>
      </Container>

    </Wrapper>
  )
}

export default ContentDescrição