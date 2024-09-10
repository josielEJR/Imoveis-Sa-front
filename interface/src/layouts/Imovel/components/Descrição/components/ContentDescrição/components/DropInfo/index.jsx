import React, { useEffect, useState } from 'react'
import { Aba, DropHover, TextDrop, Title, Wrapper } from './style'

const DropInfo = ({ activeIcon, iconName }) => {
    const [iSmalScreen ,setIsSmallScreen] = useState(window.innerWidth <= 960)

    const [leftPercentage, setLeftPercentage] = useState({
        condominio: 5,
        iptu: 5,
        seguro: 5,
        taxa: 5,
    })
    const [topPercentage, setTopPercentage] = useState({
        condominio: 0,
        iptu: 0,
        seguro: 0,
        taxa: 0,
    })

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
            } else if (screenWidth <= 722) {
                setLeftPercentage({
                    condominio: 36,
                    iptu: 24,
                    seguro: 44,
                    taxa: 43,
                })
                setTopPercentage({
                    condominio: 36.5,
                    iptu: 45.5,
                    seguro: 54,
                    taxa: 63,
                })
            } else if (screenWidth <= 960) {
                setLeftPercentage({
                    condominio: 30,
                    iptu: 27,
                    seguro: 45,
                    taxa: 30,
                })
                setTopPercentage({
                    condominio: 36.5,
                    iptu: 45,
                    seguro: 54,
                    taxa: 63,
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

    if (!iconName || activeIcon !== iconName) {
        return null
    }

    return (
        <Wrapper>
            <DropHover
                leftPercentage={`${leftPercentage[iconName]}%`} topPercentage={`${topPercentage[iconName]}%`}
            >
                <Title>
                    {iconName.charAt(0).toUpperCase() + iconName.slice(1)}
                </Title>
                <Aba />
                <TextDrop>
                    Valor sujeito a alteração conforme deliberações condominiais, podendo, ainda, variar de acordo com as despesas fixas e eventuais do condomínio (ex.: água, luz, conservação e manutenção do prédio, entre outros).
                </TextDrop>
            </DropHover>
        </Wrapper>
    )
}

export default DropInfo