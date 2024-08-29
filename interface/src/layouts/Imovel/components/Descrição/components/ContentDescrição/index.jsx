import React, { useState, useEffect } from 'react'
import { Container, ContainerContent, ContainerIcon, ContainerInfo, Content, Icon, ContainerDescrição, Value, Wrapper, DescriçãoIcon, DropOver, TextDrop, Aba, Title, Text } from './style'
import { TbRulerMeasure } from "react-icons/tb"
import { IoCarSportOutline } from "react-icons/io5"
import { LiaCouchSolid } from "react-icons/lia"
import { TbBed } from "react-icons/tb"
import { PiBathtub } from "react-icons/pi"
import { MdInfoOutline } from "react-icons/md"

const ContentDescrição = ({ imovelID }) => {
  const [prodInfo, setProdInfo] = useState({})
  const [activeIcon, setActiveIcon] = useState(null)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 960)

  const [leftPercentage, setLeftPercentage] = useState({
    condominio: 5,
    iptu: 5,
    seguro: 5,
    taxa: 5,
  })
  const [topPercentage, setTopPercentage] = useState({
    condominio: 5,
    iptu: 5,
    seguro: 5,
    taxa: 5,
  })

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    }

    fetch(`http://localhost:3001/imoveis/buscarimovelid?id=${imovelID}`, requestOptions)
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .then((produto) => {
        console.log(produto[0])
        return setProdInfo(produto[0])
      })
      .catch((error) => console.error(error))
  }, [imovelID])


  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
  }

  const getPreco = () => {
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
    switch (prodInfo.disponibilidade) {
      case 'aluguel':
        return ('Aluguel')
      case 'venda':
        return ('Venda')
      case 'venda_e_aluguel':
        return ('Venda')
      default:
        return 'dispolidade não disponovel'
    }
  }

  const handleMouseEnter = (icon) => setActiveIcon(icon)
  const handleMouseLeave = () => setActiveIcon(null)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      setIsSmallScreen(screenWidth <= 590)

      if (screenWidth <= 590) {
        setLeftPercentage({
          condominio: 19,
          iptu: 5,
          seguro: 25,
          taxa: 24,
        })
        setTopPercentage({
          condominio: 50,
          iptu: 59,
          seguro: 68,
          taxa: 76,
        })
      } else if (screenWidth <= 720) {
        setLeftPercentage({
          condominio: 40,
          iptu: 27,
          seguro: 45,
          taxa: 45,
        })
      } else if (screenWidth <= 860) {
        setLeftPercentage({
          condominio: 30,
          iptu: 30,
          seguro: 35,
          taxa: 35,
        })
      } else if (screenWidth <= 960) {
        setLeftPercentage({
          condominio: 25,
          iptu: 17,
          seguro: 30,
          taxa: 30,
        })
      } else {
        setLeftPercentage({
          condominio: 5,
          iptu: 5,
          seguro: 5,
          taxa: 5,
        })
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
                <DropOver
                  leftPercentage={`${leftPercentage.condominio}%`}
                  topPercentage={`${topPercentage.condominio}%`}
                >
                  <Title>
                    Condominio
                  </Title>
                  <Aba />
                  <TextDrop>
                    Valor sujeito a alteração conforme deliberações condominiais, podendo, ainda, variar de acordo com as despesas fixas e eventuais do condomínio (ex.: água, luz, conservação e manutenção do prédio, entre outros).
                  </TextDrop>
                </DropOver>
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
                <DropOver
                  leftPercentage={`${leftPercentage.iptu}%`}
                  topPercentage={`${topPercentage.iptu}%`}
                >
                  <Title>
                    IPTU
                  </Title>
                  <Aba />
                  <TextDrop>
                    Valor sujeito a alteração conforme deliberações condominiais, podendo, ainda, variar de acordo com as despesas fixas e eventuais do condomínio (ex.: água, luz, conservação e manutenção do prédio, entre outros).
                  </TextDrop>
                </DropOver>
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
                <DropOver
                  leftPercentage={`${leftPercentage.seguro}%`}
                  topPercentage={`${topPercentage.seguro}%`}
                >
                  <Title>
                    Seguro incêndio
                  </Title>
                  <Aba />
                  <TextDrop>
                    Valor sujeito a alteração conforme deliberações condominiais, podendo, ainda, variar de acordo com as despesas fixas e eventuais do condomínio (ex.: água, luz, conservação e manutenção do prédio, entre outros).
                  </TextDrop>
                </DropOver>
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
                <DropOver
                  leftPercentage={`${leftPercentage.taxa}%`}
                  topPercentage={`${topPercentage.taxa}%`}
                >
                  <Title>
                    Taxa de serviço
                  </Title>
                  <Aba />
                  <TextDrop>
                    Valor sujeito a alteração conforme deliberações condominiais, podendo, ainda, variar de acordo com as despesas fixas e eventuais do condomínio (ex.: água, luz, conservação e manutenção do prédio, entre outros).
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