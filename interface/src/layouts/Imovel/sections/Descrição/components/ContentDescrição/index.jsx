import React, { useState, useEffect } from 'react'

import { Container, ContainerContent, ContainerIcon, ContainerInfo, Content, Icon, ContainerDescrição, Value, Wrapper, DescriçãoIcon, Text } from './style'
import { TbRulerMeasure } from "react-icons/tb"
import { IoCarSportOutline } from "react-icons/io5"
import { LiaCouchSolid } from "react-icons/lia"
import { TbBed } from "react-icons/tb"
import { PiBathtub } from "react-icons/pi"
import { MdInfoOutline } from "react-icons/md"
import DropInfo from './components/DropInfo'

const ContentDescrição = ({ imovelID }) => {
  const [prodInfo, setProdInfo] = useState({})
  const [activeIcon, setActiveIcon] = useState(null)

  useEffect(() => {
    if (!imovelID) {
      console.log('ID do imóvel não fornecido no ContentDescrição');
      return;
    }

    const requestOptions = {
      method: "GET",
      redirect: "follow"
    }

    console.log('Fazendo requisição para:', `/imoveis/buscarimovelid?id=${imovelID}`);
    fetch(`https://imoveis-sa.onrender.com/api/imoveis/buscarimovelid?id=${imovelID}`, requestOptions)
      .then((response) => {
        console.log('Status da resposta:', response.status);
        return response.text();
      })
      .then((result) => {
        console.log('Resposta bruta:', result);
        return JSON.parse(result);
      })
      .then((produto) => {
        console.log('Dados do imóvel no ContentDescrição:', produto);
        if (produto && produto.length > 0) {
          setProdInfo(produto[0])
        } else {
          console.log('Nenhum imóvel encontrado');
          setProdInfo({})
        }
      })
      .catch((error) => console.error('Erro na requisição:', error))
  }, [imovelID])

  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
  }

  const getPreco = () => {
    if (!prodInfo || !prodInfo.disponibilidade) {
      return 'Preço não disponível'
    }
    
    switch (prodInfo.disponibilidade) {
      case 'aluguel':
        return formatarPreco(prodInfo.preco_aluguel)
      case 'venda':
        return formatarPreco(prodInfo.preco_venda)
      case 'venda_e_aluguel':
        return formatarPreco(prodInfo.preco_venda)
      default:
        return 'Preço não disponível'
    }
  }

  const getDisponibilidade = () => {
    if (!prodInfo || !prodInfo.disponibilidade) {
      return 'Disponibilidade não disponível'
    }
    
    switch (prodInfo.disponibilidade) {
      case 'aluguel':
        return ('Aluguel')
      case 'venda':
        return ('Venda')
      case 'venda_e_aluguel':
        return ('Venda')
      default:
        return 'Disponibilidade não disponível'
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
              <Text>
                Condominio
              </Text>
              <MdInfoOutline
                size={30}
                onMouseEnter={() => handleMouseEnter('condominio')}
                onMouseLeave={handleMouseLeave}
              />
              {activeIcon === 'condominio' && (
                <DropInfo activeIcon={activeIcon} iconName="condominio" />
              )}
            </Content>
            <Content>
              <Text>
                IPTU
              </Text>
              <MdInfoOutline
                size={30}
                onMouseEnter={() => handleMouseEnter('iptu')}
                onMouseLeave={handleMouseLeave}
              />
              {activeIcon === 'iptu' && (
                <DropInfo activeIcon={activeIcon} iconName="iptu" />
              )}
            </Content>
            <Content>
              <Text>
                Seguro incêndio
              </Text>
              <MdInfoOutline
                size={30}
                onMouseEnter={() => handleMouseEnter('seguro')}
                onMouseLeave={handleMouseLeave}
              />
              {activeIcon === 'seguro' && (
                <DropInfo activeIcon={activeIcon} iconName="seguro" />
              )}
            </Content>
            <Content>
              <Text>
                Taxa de serviço
              </Text>
              <MdInfoOutline
                size={30}
                onMouseEnter={() => handleMouseEnter('taxa')}
                onMouseLeave={handleMouseLeave}
              />
              {activeIcon === 'taxa' && (
                <DropInfo activeIcon={activeIcon} iconName="taxa" />
              )}
            </Content>
          </ContainerDescrição>
          <ContainerInfo>
            <Value >
              {getPreco()}
            </Value>
            <Value >
              {prodInfo.condominio ? formatarPreco(prodInfo.condominio) : 'N/A'}
            </Value>
            <Value >
              {prodInfo.iptu ? formatarPreco(prodInfo.iptu) : 'N/A'}
            </Value>
            <Value >
              {prodInfo.seguro_incendio ? formatarPreco(prodInfo.seguro_incendio) : 'N/A'}
            </Value>
            <Value >
              {prodInfo.taxa_de_servicos ? formatarPreco(prodInfo.taxa_de_servicos) : 'N/A'}
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
              {prodInfo.tamanho ? `${prodInfo.tamanho} m²` : 'N/A'}
            </Value>
            <Value >
              {prodInfo.vagas || 'N/A'}
            </Value>
            {prodInfo.mobiliado && (
              <Value >
                {prodInfo.mobiliado}
              </Value>
            )}
            <Value >
              {prodInfo.quartos || 'N/A'}
            </Value>
            <Value >
              {prodInfo.banheiros || 'N/A'}
            </Value>
          </ContainerInfo>
        </ContainerIcon>
      </Container>
    </Wrapper>
  )
}

export default ContentDescrição