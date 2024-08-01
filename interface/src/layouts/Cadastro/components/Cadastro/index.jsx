import React, { useState } from 'react'

import { Container, Wrapper, InnerWrapper, Title, TextContainer, HighlightedLink, Input, CadastroButton, PasswordWrapper, EyeIcon } from './style'

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Cadastro = () => {

    const [animate, setAnimate] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [celular, setCelular] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleCadastroClick = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
    }

    const handleNameChange = (e) => {
        const value = e.target.value;
        const sanitizedValue = value.replace(/[^a-zA-Z\s]/g, '');
        setName(sanitizedValue);
    }

    const handleCpfChange = (e) => {
        const value = e.target.value;
        const sanitizedValue = value.replace(/[^0-9]/g, '').slice(0, 11);
        setCpf(sanitizedValue);
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        const sanitizedValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
        setEmail(sanitizedValue);
    }

    const handleEmailBlur = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }

    const handleCelularChange = (e) => {
        const value = e.target.value;
        const sanitizedValue = value.replace(/[^0-9]/g, '').slice(0, 11);
        setCelular(sanitizedValue);
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        const sanitizedValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
        setPassword(sanitizedValue);
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Wrapper>
            <Container>
                <InnerWrapper>
                    <Title>Crie sua Conta</Title>
                    <TextContainer>
                        Já possui Cadastro? <HighlightedLink href="#">Entre aqui!</HighlightedLink>
                    </TextContainer>
                    <Input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <Input
                        type="text"
                        placeholder="CPF"
                        value={cpf}
                        onChange={handleCpfChange}
                    />
                    <Input
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                        error={emailError}
                    />
                    {emailError && <p style={{ color: 'red' }}>E-mail inválido</p>}
                    <Input
                        type="text"
                        placeholder="Celular"
                        value={celular}
                        onChange={handleCelularChange}
                    />
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Senha"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <PasswordWrapper>
                        <EyeIcon onClick={toggleShowPassword}>
                            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </EyeIcon>
                    </PasswordWrapper>
                    <CadastroButton animate={animate} onClick={handleCadastroClick}>
                        Cadastre-se
                    </CadastroButton>
                </InnerWrapper>
            </Container>
        </Wrapper >
    )
}

export default Cadastro