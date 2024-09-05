import React, { useState, useEffect } from 'react'
import DescriçãoLayout from './components/Descrição'
import { Wrapper } from './style'
import LocalizaçãoLayout from './components/Localização'
import ContatoLayout from './components/Contato'
import ImovelInfo from './components/ImovelInfo'

const ImovelLayout = ({ imovelID }) => {
  const [consultorId, setConsultorId] = useState(null)

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
          console.log('Dados do imóvel:', imovel)
          setConsultorId(imovel.consultorId)
        } else {
          console.log('Imóvel não encontrado');
        }
      })
      .catch(error => console.error('Erro ao buscar imóvel:', error));
  }, [imovelID]);


  return (
    <Wrapper>
      <ImovelInfo imovelID={imovelID}  />
      {/* <DescriçãoLayout imovelID={imovelID}/> */}
      {/* <LocalizaçãoLayout imovelID={imovelID} />  */}
      {/* <ContatoLayout consultorId={consultorId} /> */}
    </Wrapper>
  )
}

export default ImovelLayout