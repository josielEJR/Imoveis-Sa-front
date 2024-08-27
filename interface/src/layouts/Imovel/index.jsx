import React from 'react'
import DescriçãoLayout from './components/Descrição'
import { Wrapper } from './style'

const ImovelLayout = ({imovelID}) => {
  return (
    <Wrapper>
        <DescriçãoLayout imovelID={imovelID}/> 
    </Wrapper>
  )
}

export default ImovelLayout