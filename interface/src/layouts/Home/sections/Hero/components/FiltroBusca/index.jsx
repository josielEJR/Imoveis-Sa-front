import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Filtro, Bairros, Codigo, IconDrop, ListaCompra, Tipo, Comprar, Busca, ContainerFiltro, UlOptions, UlBairros, LiTipo, CheckBoxWrapper, CheckBox, CheckBoxLabel, ErroText } from './style';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { data } from 'autoprefixer';

const FiltroBusca = () => {
    const navigate = useNavigate()
    const [produtos, setProdutos] = useState([])
    const [showBairros, setShowBairros] = useState(false)
    const [showTipo, setShowTipo] = useState(false)
    const [showCompra, setShowCompra] = useState(false)
    const [selectedBairro, setSelectedBairro ] = useState([])
    const [selectedTipo, setSelectedTipo ] = useState([])
    const [selectedCompra, setSelectedCompra ] = useState([])
    const [codigo, setCodigo] = useState ('')
    const [error, setError] = useState('')

    const handleMouseEnter = (setter) => () => {
        setter(true)
    }
    const handleMouseLeave = (setter) => () => {
        setter(false)
    }

    const handleBairroChange = (bairro) => {
      if (selectedBairro.includes(bairro)) {
        setSelectedBairro(selectedBairro.filter(item => item !== bairro))
      } else {
        setSelectedBairro([...selectedBairro, bairro])
      }
    }
    const handleTipoChange = (tipo) => {
      if (selectedTipo.includes(tipo)) {
        setSelectedTipo(selectedTipo.filter(item => item !== tipo))
      } else {
        setSelectedTipo([...selectedTipo, tipo])
      }
    }
    const handleTransacaoChange = (disponibilidade) => {
      if (selectedCompra.includes(disponibilidade)) {
        setSelectedCompra(selectedCompra.filter(item => item !== disponibilidade))
      } else {
        setSelectedCompra([...selectedCompra, disponibilidade])
      }
    }

{ /*   const handleSearch = () => {
      if (selectedCompra.length === 0 && selectedBairro.length === 0 && selectedTipo.length === 0 && codigo.length > 0) {
        fetch (`http://localhost:3001/imoveis?id=${codigo}`, {method: "GET", redirect: "follow"})
          .then((response) => response.json())
          .then((data) => {
            console.log('Dados recebidos:', data)
            if (data.length === 1) {
              navigate(`/imovel/${data[0].imoveisID}`);
            } else {
              setError('Imóvel não encontrado');
            }
          })
        
      }else if ( selectedCompra.length === 0 && selectedBairro.length === 0 && selectedTipo.length === 0 && codigo.length === 0){
        console.log('Precisa selecionar pelo menos um filtro para fazer a busca')
        setError('Precisa selecionar pelo menos um filtro para fazer a busca')
      }else {
      filtrarImoveis()
    }
  } */ }

const filtrarImoveis = () => {
    let disponibilidadeQuery = '';
    let query = ''

    if (selectedCompra.includes('Alugar')) {
        disponibilidadeQuery = 'aluguel';
        query += `?disponibilidade=${disponibilidadeQuery}`
        if (selectedTipo.length) {
          query += `&tipo=${selectedTipo.join(',')}`
        }
        if (selectedBairro.length) {
          query += `&bairro=${selectedBairro.join(',')}`
        }
        

        fetch("http://localhost:3001/imoveis/busca" + query, { method: "GET", redirect: "follow" })
            .then((response) => response.json())
            .then((data) => {
                console.log('Resposta do servidor:', data);
                setProdutos(data);

                if (data.length > 0) {
                    navigate(`/Alugar${query}`); 
                }else {
                  console.log('Não foram encontrados imóveis com os filtros selecionados.');
              }
                
            })
            .catch((error) => {
                console.error('Erro ao buscar imóveis:', error);
                setError('Erro ao buscar imóveis');
            });
    } 
}

const getDisplayTextTipo = () => {
  return selectedTipo.length === 0 ? 'Selecione o tipo' : selectedTipo.join(', ');
}

const getDisplayTextBairro = () => {
  if (selectedBairro.length === 0){
    return 'Selecione os Bairros'
  } else if (selectedBairro.length > 2) {
    return `${selectedBairro.slice(0, 2).join(', ')} ... ${selectedBairro.length - 2}`
  } else {
    return selectedBairro.join(', ')
  }  
}

const getDisplayTextCompra = () => {
  return selectedCompra.length === 0 ? 'Venda ou Aluguel' : selectedCompra.join(', ');
}





  return (
    <ContainerFiltro>
      
      <Filtro />
      <Busca
      onClick={filtrarImoveis}
      >Buscar</Busca>
      <Codigo 
      placeholder='Código' 
      value={codigo} 
      onChange={(e) => setCodigo(e.target.value)}
      />
      <Bairros
        onMouseEnter={handleMouseEnter(setShowBairros)}
        onMouseLeave={handleMouseLeave(setShowBairros)}
      >
        {getDisplayTextBairro()}
        <IconDrop>
          <IoIosArrowDropdownCircle />
        </IconDrop>
        {showBairros && (
          <UlBairros>
            {['Bela Vista', 'Copacabana', 'Centro', 'Pinheiros', 'Botafogo', 'Barra da Tijuca'].map(bairro => (
              <LiTipo key={bairro}>
                <CheckBoxWrapper>
                  <CheckBox 
                    type='checkbox'
                    id={bairro}
                    value={bairro}
                    checked={selectedBairro.includes(bairro)}
                    onChange={() => handleBairroChange(bairro)}
                  />
                  <CheckBoxLabel htmlFor={bairro}>{bairro}</CheckBoxLabel>
                </CheckBoxWrapper>
              </LiTipo>
            ))}
          </UlBairros>
        )}
      </Bairros>
      <Tipo 
        onMouseEnter={handleMouseEnter(setShowTipo)}
        onMouseLeave={handleMouseLeave(setShowTipo)}
      >
        {getDisplayTextTipo()}
        <IconDrop>
          <IoIosArrowDropdownCircle />
        </IconDrop>
        {showTipo && (
        <UlOptions>
          {['Casa', 'Apartamento'].map(tipo => (
            <LiTipo key={tipo}>
              <CheckBoxWrapper>
                <CheckBox
                  type='checkbox'
                  value={tipo}
                  checked={selectedTipo.includes(tipo)}
                  onChange={() => handleTipoChange(tipo)}
                />
                <CheckBoxLabel htmlFor={tipo}>{tipo}</CheckBoxLabel>
              </CheckBoxWrapper>
            </LiTipo>
          ))}
        </UlOptions>
        )}
      </Tipo>
      <Comprar
        onMouseEnter={handleMouseEnter(setShowCompra)}
        onMouseLeave={handleMouseLeave(setShowCompra)}
      >
        {getDisplayTextCompra()}
        <IconDrop>
          <IoIosArrowDropdownCircle />
        </IconDrop>
        {showCompra && (
          <ListaCompra>
          {['Alugar', 'Comprar'].map(disponibilidade => (
            <LiTipo key={disponibilidade}>
              <CheckBoxWrapper>
                <CheckBox
                  type='checkbox'
                  value={disponibilidade}
                  checked={selectedCompra.includes(disponibilidade)}
                  onChange={() => handleTransacaoChange(disponibilidade)}
                />
                <CheckBoxLabel htmlFor={disponibilidade}>{disponibilidade}</CheckBoxLabel>
              </CheckBoxWrapper>
            </LiTipo>
          ))}
        </ListaCompra>
      )}
      </Comprar>
    </ContainerFiltro>
  );
}

export default FiltroBusca;
