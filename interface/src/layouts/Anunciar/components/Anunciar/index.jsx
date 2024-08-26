import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Wrapper, Label, LabelContainer, FormConteiner, TitleContainer, Title, Input, Select, AnunciarButton } from './style'

const Anunciar = () => {

    const [animate, setAnimate] = useState(false);
    const [residencia, setResidencia] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [quartos, setQuartos] = useState('');
    const [banheiros, setBanheiros] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [qualidade, setQualidade] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const [descricao, setDescricao] = useState('');

    const navigate = useNavigate()

    const [showInput, setShowInput] = useState('');

    const handleDisponibilidadeChange = (e) => {
        setDisponibilidade(e.target.value);
        setShowInput(e.target.value);
    }

    useEffect(() => {
        if (localStorage.length > 0) {
            navigate("/home")
        }
    }, [])

    const handleAnunciarClick = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);

        if (!residencia || !endereco || !numero || !bairro || !cidade || !cep || !quartos || !banheiros || !tamanho || !qualidade || !disponibilidade || !descricao) {

        } else {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                residencia: residencia,
                endereco: endereco,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                cep: cep,
                quartos: quartos,
                banheiros: banheiros,
                tamanho: tamanho,
                qualidade: qualidade,
                disponibilidade: disponibilidade,
                descricao: descricao
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };


            fetch("http://localhost:3001/clientes/cadastrar", requestOptions)
                .then((response) => response.text())
                .then((result) => JSON.parse(result))
                .then((result) => {
                    const userNome = result.nome
                    const userEmail = result.email
                    const userCelular = result.celular
                    localStorage.setItem("currentUserNome", userNome)
                    localStorage.setItem("currentUserEmail", userEmail)
                    localStorage.setItem("currentUserCelular", userCelular)
                })
                .then(() => window.location.reload())
                .catch((error) => console.error(error));
        }
    }

    const handleNumericInputChange = (setter) => (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setter(value);
        }
    };

    const handleTextInputChange = (setter) => (e) => {
        const value = e.target.value;
        if (/^[^\d]*$/.test(value)) {
            setter(value);
        }
    };

    return (
        <Wrapper>
            <Container>
                <TitleContainer>
                    <Title>Anunciar Imóvel</Title>
                </TitleContainer>
                <FormConteiner>
                    <LabelContainer>
                        <Label>Tipo de Residência</Label>
                        <Input type="text" placeholder="Casa ou Apartamento" value={residencia} onChange={handleTextInputChange(setResidencia)} />
                    </LabelContainer>
                    <LabelContainer>
                        <Label>Endereço</Label>
                        <Input type="text" placeholder="Ex.: Rua José Gomes" value={endereco} onChange={handleTextInputChange(setEndereco)} />
                    </LabelContainer>
                    <LabelContainer>
                        <Label>Número</Label>
                        <Input type="text" placeholder="Ex.: 838" value={numero} onChange={handleNumericInputChange(setNumero)} />
                    </LabelContainer>
                    <LabelContainer>
                        <Label>Bairro</Label>
                        <Input type="text" placeholder="Ex.: Pinheiros" value={bairro} onChange={handleTextInputChange(setBairro)} />
                    </LabelContainer>
                    <LabelContainer>
                        <Label>Cidade</Label>
                        <Input type="text" placeholder="Ex.: São Paulo" value={cidade} onChange={handleTextInputChange(setCidade)} />
                    </LabelContainer>
                    <LabelContainer>
                        <Label>CEP</Label>
                        <Input type="text" placeholder="Ex.: 06023415" value={cep} onChange={handleNumericInputChange(setCep)} />
                    </LabelContainer>
                    <LabelContainer>
                        <Label>Quartos</Label>
                        <Input type="text" placeholder="Quantidade de Quartos" value={quartos} onChange={handleNumericInputChange(setQuartos)} />
                    </LabelContainer>
                    <LabelContainer>
                        <Label>Banheiros</Label>
                        <Input type="text" placeholder="Quantidade de Banheiros" value={banheiros} onChange={handleNumericInputChange(setBanheiros)} />
                    </LabelContainer>
                    <LabelContainer>
                        <Label>Tamanho</Label>
                        <Input type="text" placeholder="Tamanho (m²)" value={tamanho} onChange={handleNumericInputChange(setTamanho)} />
                    </LabelContainer>
                    <LabelContainer>
                        <Label>Qualidade</Label>
                        <Input type="text" placeholder="1~5 Estrelas" value={qualidade} onChange={handleNumericInputChange(setQualidade)} />
                    </LabelContainer>
                    <LabelContainer>
                        <Label>Disponibilidade</Label>
                        <Select value={disponibilidade} onChange={handleDisponibilidadeChange}>
                            <option value="">Selecione uma Opção</option>
                            <option value="Vender">Vender</option>
                            <option value="Alugar">Alugar</option>
                            <option value="Vender/Alugar">Vender/Alugar</option>
                        </Select>
                    </LabelContainer>
                    <LabelContainer>
                        <Label>Descrição do Imóvel</Label>
                        <Input type="text" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </LabelContainer>
                </FormConteiner>
                <AnunciarButton animate={animate} onClick={handleAnunciarClick}>
                    Anunciar
                </AnunciarButton>
            </Container>
        </Wrapper>
    )
}

export default Anunciar
