import React from 'react'
import DescriçãoLayout from './components/Descrição'
import { Wrapper } from './style'
import LocalizaçãoLayout from './components/Localização'

const ImovelLayout = ({imovelID}) => {
  return (
    <Wrapper>
        {/* <DescriçãoLayout imovelID={imovelID}/> */}
        <LocalizaçãoLayout imovelID={imovelID} /> 
    </Wrapper>
  )
}

export default ImovelLayout