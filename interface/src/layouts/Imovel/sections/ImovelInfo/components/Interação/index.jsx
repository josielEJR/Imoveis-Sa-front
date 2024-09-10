import React, { useState } from 'react'
import { IconWrapper, Tag, Wrapper, ShareOptionsWrapper, ShareOption, Options, Url, BotãoUrl, OptionsWrapper } from './style'
import { GrFavorite } from "react-icons/gr"
import { PiShareFatLight } from "react-icons/pi"
import { CiFacebook } from "react-icons/ci"
import { FaWhatsapp } from "react-icons/fa"
import { RiDiscordLine } from "react-icons/ri"
import { BsTwitterX } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import { IoMdCloseCircleOutline } from "react-icons/io"

const Interação = () => {
  const [showShareOptions, setShowShareOptions] = useState(false)
  const [animate, setAnimate] = useState(false)

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions)
  }

  const currentUrl = window.location.href

  const copiarUrl = (e) => {
    navigator.clipboard.writeText(currentUrl)
    e.preventDefault()
    
      .then(() => {
        alert("Link copiado para a área de transferência!")
      })
      .catch((err) => {
        console.error("Erro ao copiar o link: ", err)
      })
  }
  return (
    <Wrapper>
      <IconWrapper>
        <GrFavorite size={30} style={{ cursor: 'pointer' }} />
        <PiShareFatLight size={30} onClick={toggleShareOptions} style={{ cursor: 'pointer' }} />
      </IconWrapper>
      {showShareOptions && (
        <ShareOptionsWrapper>
          <OptionsWrapper>
            Compartilhar
            <IoMdCloseCircleOutline size={30} style={{ cursor: 'pointer' }} onClick={toggleShareOptions} />
          </OptionsWrapper>
          <Options>
            <ShareOption>
              <Tag href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer">
                <CiFacebook size={40} color='blue' />
              </Tag>
            </ShareOption>
            <ShareOption>
              <Tag href={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={40} color='green' />
              </Tag>
            </ShareOption>
            <ShareOption>
              <Tag href={`https://discord.com/channels/@me`} target="_blank" rel="noopener noreferrer">
                <RiDiscordLine size={40} color='white' />
              </Tag>
            </ShareOption>
            <ShareOption>
              <Tag href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer">
                <BsTwitterX size={40} color='white' />
              </Tag>
            </ShareOption>
            <ShareOption>
              <Tag href={`mailto:?subject=Check%20this%20out!&body=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer">
                <MdOutlineEmail size={40} color='white' />
              </Tag>
            </ShareOption>
          </Options>
          <Url>
            {currentUrl}
          </Url>
          <BotãoUrl onClick={copiarUrl} animate={animate}>
            Copiar
          </BotãoUrl>
        </ShareOptionsWrapper>
      )}
    </Wrapper>
  )
}

export default Interação