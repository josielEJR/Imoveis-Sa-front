import { useState, useEffect } from 'react'

import { LocationSection, LocationText, LocationLabel, LocationIcon, InsertLocation, LocationError } from './style'

import { GrMap } from "react-icons/gr";

const Location = () => {

    const [location, setLocation] = useState("")
    const [disponibility, setDisponibility] = useState('')
    const [cities, setCities] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const url = window.location.href

        if (url.includes("venda")) {
            setDisponibility('venda')
        } else if (url.includes("aluguel")) {
            setDisponibility('aluguel')
        }
    }, [])

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`http://localhost:3001/imoveis/cidades${disponibility}`, requestOptions)
            .then((response) => response.text())
            .then((result) => JSON.parse(result))
            .then((result) => {
                const auxArray = []
                result.forEach(elem => auxArray.push(elem.cidade.toLowerCase()))
                setCities(auxArray)
            })
            .catch((error) => console.error(error));
    }, [disponibility])

    return (
        <LocationSection>
            <LocationText>
                Nossas incríveis propriedades
            </LocationText>
            <div>
                <LocationLabel error={error}>
                    <LocationIcon>
                        <GrMap />
                    </LocationIcon>
                    <InsertLocation
                        placeholder='Qual localização?'
                        onChange={e => setLocation(e.target.value)}
                        onKeyUp={key => {
                            if (key.code === "Enter") {
                                if (cities.includes(location.toLowerCase())) {
                                    setError('')
                                    return window.location.href = `/imoveis?cidade=${location}&disponibilidade=${disponibility}`
                                } else {
                                    setError("A cidade inserida não está disponível")
                                }
                            }
                        }}
                    ></InsertLocation>
                </LocationLabel>
                <LocationError>
                    {error}
                </LocationError>
            </div>
        </LocationSection>
    )
}

export default Location