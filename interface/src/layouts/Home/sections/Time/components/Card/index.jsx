import React, { useEffect, useState } from 'react'

import { CardContent, CardContainer, Article, Nome, Telefone, Email, Wrapper, Container, Overlay } from './style'
import NavButtons from '../../../Time/components/NavButtons/index'

const Card = ({ configTime }) => {
    const [imageIndex, setImageIndex] = useState(0)
    const [consultores, setConsultores] = useState([])
    const [visibleCards, setVisibleCards] = useState(1)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [touchStartTime, setTouchStartTime] = useState(0)
    const [selectedButton, setSelectedButton] = useState(1)
    const [paused, setPaused] = useState(false)

    const handleButtonClick = (buttonIndex) => {
        setImageIndex(buttonIndex - 1)
    }

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX)
        setTouchStartTime(new Date().getTime())
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX)
    }

    const handleTouchEnd = () => {
        const touchEndTime = new Date().getTime()
        const touchDuration = touchEndTime - touchStartTime

        if (touchDuration > 500) {
            if (touchStart - touchEnd > 50) {
                next()
            }

            if (touchStart - touchEnd < -50) {
                prev()
            }

        }
        setTouchStart(0)
        setTouchEnd(0)
        setTouchStartTime(0)
    }

    const next = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % configTime.length)
    }

    const prev = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + configTime.length) % configTime.length)
    }

    // useEffect(() => {
    //     fetch('http://localhost:3001/consultores')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => setConsultores(data))
    //         .catch(error => console.error('Houve um problema com a operação de fetch:', error));
    // }, [])

    useEffect(() => {
        const updateCardCount = () => {
            if (window.innerWidth >= 1280) {
                setVisibleCards(3)
            } else if (window.innerWidth >= 950) {
                setVisibleCards(2)
            } else {
                setVisibleCards(1)
            }
        }

        window.addEventListener('resize', updateCardCount)
        updateCardCount()

        return () => window.removeEventListener('resize', updateCardCount)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                next()
            }
        }, 6000)
        return () => clearInterval(interval)
    }, [paused])

    

    const getCardsToRender = () => {
        if (imageIndex + visibleCards <= configTime.length) {
            return configTime.slice(imageIndex, imageIndex + visibleCards)
        } else {
            return [...configTime.slice(imageIndex), ...configTime.slice(0, (imageIndex + visibleCards) % configTime.length)]
        }
    }

    return (
        <Wrapper>
            <Container
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {getCardsToRender().map((item, index) => (
                    <CardContainer
                        key={index}
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        index={index}
                        currentIndex={imageIndex}
                    >
                        <Overlay />
                        <CardContent>
                            <Nome>
                                {item.nome}
                            </Nome>
                            <Article>
                                {item.sobre}
                            </Article>
                            <Telefone>
                                {item.telefone}
                            </Telefone>
                            <Email>
                                {item.email}
                            </Email>
                        </CardContent>
                    </CardContainer>
                ))}
                <NavButtons selectedButton={(imageIndex % configTime.length) + 1} handleButtonClick={handleButtonClick} />
            </Container>
        </Wrapper>
    )
}

export default Card