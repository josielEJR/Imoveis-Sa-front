import React, { useState } from 'react'

import { Container, Wrapper, InnerWrapper, Title, Input, OptionsContainer, RememberMe, Checkbox, ForgotPassword, LoginButton, Signup } from './style'

const Login = () => {

    const [animate, setAnimate] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleLoginClick = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
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

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        const sanitizedValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
        setPassword(sanitizedValue);
    }

    return (
        <Wrapper>
        <Container>
            <InnerWrapper>
                <Title>LOGIN</Title>
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    error={emailError}
                />
                {emailError && <p style={{ color: 'red' }}>E-mail Inválido</p>}
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <OptionsContainer>
                    <RememberMe>
                        <Checkbox type="checkbox" />
                        Lembre de Mim
                    </RememberMe>
                    <ForgotPassword href="#">Esqueceu a Senha?</ForgotPassword>
                </OptionsContainer>
                <LoginButton animate={animate} onClick={handleLoginClick}>
                    Entrar
                </LoginButton>
                <Signup href="#">Cadastre-se</Signup>
            </InnerWrapper>
        </Container>
        </Wrapper>
    )
}

export default Login