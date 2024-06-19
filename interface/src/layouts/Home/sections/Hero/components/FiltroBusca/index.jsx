import React, { useState } from 'react';
import { Filtro, Bairros, Codigo, IconDrop, ListaCompra, Tipo, Comprar, Busca, ContainerFiltro, SpanAlugar, UlOptions, UlBairros, LiTipo } from './style';
import { IoIosArrowDropdownCircle } from "react-icons/io";

const FiltroBusca = () => {
    const [showBairros, setShowBairros] = useState(false)
    const [showTipo, setShowTipo] = useState(false)
    const [showCompra, setShowCompra] = useState(false)

    const handleMouseEnter = (setter) => () => {
        setter(true)
    }
    const handleMouseLeave = (setter) => () => {
        setter(false)
    }
  return (
    <ContainerFiltro>
      <Filtro />
      <Busca>Buscar</Busca>
      <Codigo placeholder='Código' />
      <Bairros
        onMouseEnter={handleMouseEnter(setShowBairros)}
        onMouseLeave={handleMouseLeave(setShowBairros)}
      >
        Selecione os bairros
        <IconDrop>
          <IoIosArrowDropdownCircle />
        </IconDrop>
        {showBairros && (
          <UlBairros>
            {['Bela Vista', 'Copacabana', 'Centro', 'Pinheiros', 'Botafogo', 'Barra da Tijuca'].map(bairro => (
              <LiTipo key={bairro}>{bairro}</LiTipo>
            ))}
          </UlBairros>
        )}
      </Bairros>
      <Tipo 
        onMouseEnter={handleMouseEnter(setShowTipo)}
        onMouseLeave={handleMouseLeave(setShowTipo)}
      >
        Tipo de imóveis
        <IconDrop>
          <IoIosArrowDropdownCircle />
        </IconDrop>
        {showTipo && (
        <UlOptions>
          {['Casa', 'Apartamento'].map(tipo => (
            <LiTipo key={tipo}>{tipo}</LiTipo>
          ))}
        </UlOptions>
        )}
      </Tipo>
      <Comprar
        onMouseEnter={handleMouseEnter(setShowCompra)}
        onMouseLeave={handleMouseLeave(setShowCompra)}
      >
        Comprar
        <IconDrop>
          <IoIosArrowDropdownCircle />
        </IconDrop>
        {showCompra && ( 
        <ListaCompra>
          <SpanAlugar>Alugar</SpanAlugar>
        </ListaCompra>
        )}
      </Comprar>
    </ContainerFiltro>
  );
}

export default FiltroBusca;
