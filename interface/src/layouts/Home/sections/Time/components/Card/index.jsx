import React, { useEffect, useState } from 'react'

import { CardContent, CardContainer, Article, Nome, Telefone, Email, Wrapper, Container } from './style'
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
        setSelectedButton(buttonIndex)
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
        setImageIndex((state) => (state += 1))
        if (imageIndex === configTime.length - 1) setImageIndex(0)
        setSelectedButton((state) => (state += 1))
        if (selectedButton === configTime.length) setSelectedButton(1)
    }

    const prev = () => {
        setImageIndex((state) => (state -= 1))
        if (imageIndex === 0) setImageIndex(configTime.length - 1)
        setSelectedButton((state) => (state -= 1))
        if (selectedButton === 1) setSelectedButton(configTime.length)
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
                setImageIndex((prevIndex) => (prevIndex + 1) % configTime.length)
            }
        },
            6000)
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })


    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                setSelectedButton((prevIndex) => (prevIndex) % configTime.length + 1)
            }
        },
            6000)
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    return (
        <Wrapper>
            <Container
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {configTime.slice(imageIndex, imageIndex + visibleCards).map((item, index) => (
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
                        <CardContent >
                            <Nome>

                            </Nome>
                            <Article>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis dolor aliquet, finibus diam vel, vehicula est.
                            </Article>
                            <Telefone>

                            </Telefone>
                            <Email>

                            </Email>
                        </CardContent>
                    </CardContainer>
                ))}
                <NavButtons selectedButton={selectedButton} handleButtonClick={handleButtonClick} />
            </Container>
        </Wrapper>
    )
}

export default Card