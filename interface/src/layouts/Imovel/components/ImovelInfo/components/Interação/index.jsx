import React from 'react'
import { IconWrapper, Wrapper } from './style'
import { GrFavorite } from "react-icons/gr"
import { PiShareFatLight } from "react-icons/pi"

const Interação = () => {
  return (
    <Wrapper>
        <IconWrapper>
            <GrFavorite size={30}/>
            <PiShareFatLight size={30}/>
        </IconWrapper>
    </Wrapper>
  )
}

export default Interação