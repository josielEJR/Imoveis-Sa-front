import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Wrapper, InnerWrapper, Title, Input, OptionsContainer, RememberMe, Checkbox, ForgotPassword, LoginButton, LoginError, Signup } from './style'

const Login = () => {

    const [animate, setAnimate] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [loginError, setLoginError] = useState('')

    const handleLoginClick = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
        handleSubmit()
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

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.length > 0) {
            navigate("/home")
        }
    }, [])

    const handleSubmit = async (e) => {
        // e.preventDefault()

        try {
            const response = await fetch('http://localhost:3001/clientes/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            if (!response.ok) {
                throw new Error('Erro ao fazer login')
            }

            const data = await response.json()

            if (data) {

                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow"
                }

                fetch(`http://localhost:3001/clientes/busca?email=${email}`, requestOptions)
                    .then(data => data.text())
                    .then(response => JSON.parse(response))
                    .then(result => result[0])
                    .then(result => {
                        const userNome = result.nome
                        const userEmail = result.email
                        const userCelular = result.celular
                        localStorage.setItem("token", data.token)
                        localStorage.setItem("currentUserNome", userNome)
                        localStorage.setItem("currentUserEmail", userEmail)
                        localStorage.setItem("currentUserCelular", userCelular)
                    })

                return window.location.reload()

            } else {
                setLoginError("Usuario não cadastrado")
                console.log(data)
            }
        } catch (error) {
            setLoginError("Usuario não cadastrado ")
        }
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
                    <LoginError>{loginError}</LoginError>
                    <Signup href="#">Cadastre-se</Signup>
                </InnerWrapper>
            </Container>
        </Wrapper>
    )
}

export default Login