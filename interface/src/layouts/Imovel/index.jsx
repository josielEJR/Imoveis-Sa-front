import React, { useState, useEffect } from 'react'
import DescriçãoLayout from './sections/Descrição'
import { Wrapper } from './style'
import LocalizaçãoLayout from './sections/Localização'
import ContatoLayout from './sections/Contato'
import ImovelInfo from './sections/ImovelInfo'
import Loading from '../../components/Loading'

const ImovelLayout = ({ imovelID }) => {
  const [consultorId, setConsultorId] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    }

    fetch(`http://localhost:3001/imoveis/buscarimovelid?id=${imovelID}`, requestOptions)
      .then(response => response.json())
      .then(imoveis => {
        if (imoveis.length > 0) {
          const imovel = imoveis[0]
          setConsultorId(imovel.consultorId)
        } else {
          console.log('Imóvel não encontrado');
        }
      })
      .catch(error => console.error('Erro ao buscar imóvel:', error))
  }, [imovelID])

  useEffect (() =>{
    setTimeout(function() {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <Wrapper>
      {loading && <Loading />}
      <ImovelInfo imovelID={imovelID}  />
      <DescriçãoLayout imovelID={imovelID}/>
      <LocalizaçãoLayout imovelID={imovelID} /> 
      <ContatoLayout consultorId={consultorId} />
    </Wrapper>
  )
}

export default ImovelLayout