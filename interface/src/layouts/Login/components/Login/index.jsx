// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// import { Container, Wrapper, InnerWrapper, Title, Input, OptionsContainer, RememberMe, Checkbox, ForgotPassword, LoginButton, LoginError, Signup } from './style'

// const Login = () => {

//     const [animate, setAnimate] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [emailError, setEmailError] = useState(false);
//     const [loginError, setLoginError] = useState('')

//     const handleLoginClick = () => {
//         setAnimate(true);
//         setTimeout(() => setAnimate(false), 300);
//     }

//     const handleEmailChange = (e) => {
//         const value = e.target.value;
//         const sanitizedValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
//         setEmail(sanitizedValue);
//     }

//     const handleEmailBlur = () => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             setEmailError(true);
//         } else {
//             setEmailError(false);
//         }
//     }

//     const handlePasswordChange = (e) => {
//         const value = e.target.value;
//         const sanitizedValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
//         setPassword(sanitizedValue);
//     }

//     const navigate = useNavigate()

//     useEffect(() => {
//         if (localStorage.length > 0) {
//             navigate("/home")
//         }
//     }, [])

//     const handleSubmit = async () => {
//         try {
//             const myHeaders = new Headers();
//             myHeaders.append("Content-Type", "application/json");

//             const raw = JSON.stringify({
//                 "email": email,
//                 "senha": password
//             });

//             const requestOptions = {
//                 method: "POST",
//                 headers: myHeaders,
//                 body: raw,
//                 redirect: "follow"
//             };

//             const loginValid = await fetch("http://localhost:3001/clientes/login", requestOptions)
//                 .then((response) => response.text())
//                 .then((result) => JSON.parse(result))
//                 .then((result) => result.token)
//                 .catch((error) => console.error(error));

//             if (loginValid) {
//                 const myHeaders = new Headers();
//                 myHeaders.append("Content-Type", "application/json");

//                 const requestOptions = {
//                     method: "GET",
//                     headers: myHeaders,
//                     redirect: "follow"
//                 }

//                 fetch(`http://localhost:3001/clientes/busca?email=${email}`, requestOptions)
//                     .then(data => data.text())
//                     .then(response => JSON.parse(response))
//                     .then(result => result[0])
//                     .then(result => {
//                         const userNome = result.nome
//                         const userEmail = result.email
//                         const userCelular = result.celular
//                         localStorage.setItem("token", loginValid)
//                         localStorage.setItem("currentUserNome", userNome)
//                         localStorage.setItem("currentUserEmail", userEmail)
//                         localStorage.setItem("currentUserCelular", userCelular)
//                     })

//                 setTimeout(() => {
//                     return window.location.reload()
//                 }, 500)
//             } else {
//                 const myHeaders = new Headers();
//                 myHeaders.append("Content-Type", "application/json");

//                 const raw = JSON.stringify({
//                     "consultor_email": "ralves@gmail.com",
//                     "senha": "123456"
//                 });

//                 const requestOptions = {
//                     method: "POST",
//                     headers: myHeaders,
//                     body: raw,
//                     redirect: "follow"
//                 };

//                 const consultorLoginValid = await fetch("http://localhost:3001/consultores/login", requestOptions)
//                     .then((response) => response.text())
//                     .then((result) => JSON.parse(result))
//                     .then((result) => result.token)
//                     .catch((error) => console.error(error));

//                 if (consultorLoginValid) {
//                     const myHeaders = new Headers();
//                     myHeaders.append("Content-Type", "application/json");

//                     const requestOptions = {
//                         method: "GET",
//                         headers: myHeaders,
//                         redirect: "follow"
//                     }

//                     fetch(`http://localhost:3001/consultores/busca?consultor_email=${email}`, requestOptions)
//                         .then(data => data.text())
//                         .then(response => JSON.parse(response))
//                         .then(result => result[0])
//                         .then(result => {
//                             const userNome = result.nome
//                             const userEmail = result.consultor_email
//                             const userCelular = result.celular
//                             const userTipo = result.tipo
//                             const userId = result.consultorId
//                             localStorage.setItem("tipo", userTipo)
//                             localStorage.setItem("id", userId)
//                             localStorage.setItem("currentUserNome", userNome)
//                             localStorage.setItem("currentUserEmail", userEmail)
//                             localStorage.setItem("currentUserCelular", userCelular)
//                             localStorage.setItem("token", consultorLoginValid)
//                         })

//                     setTimeout(() => {
//                         return window.location.reload()
//                     }, 500)
//                 } else {
//                     setLoginError("Usuário não cadastrado")
//                 }
//             }
//         } catch (e) {
//             setLoginError("Usuário não cadastrado")
//         }
//     }

//     return (
//         <Wrapper>
//             <Container>
//                 <InnerWrapper>
//                     <Title>LOGIN</Title>
//                     <Input
//                         type="email"
//                         placeholder="E-mail"
//                         value={email}
//                         onChange={handleEmailChange}
//                         onBlur={handleEmailBlur}
//                         error={emailError}
//                     />
//                     {emailError && <p style={{ color: 'red' }}>E-mail Inválido</p>}
//                     <Input
//                         type="password"
//                         placeholder="Senha"
//                         value={password}
//                         onChange={handlePasswordChange}
//                     />
//                     <PasswordWrapper>
//                         <EyeIcon onClick={toggleShowPassword}>
//                             {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//                         </EyeIcon>
//                     </PasswordWrapper>
//                     <OptionsContainer>
//                         <RememberMe>
//                             <Checkbox type="checkbox" />
//                             Lembre de Mim
//                         </RememberMe>
//                         <ForgotPassword href="#">Esqueceu a Senha?</ForgotPassword>
//                     </OptionsContainer>
//                     <LoginButton animate={animate} onClick={(e) => {
//                         handleLoginClick()
//                         handleSubmit(e)
//                     }}>
//                         Entrar
//                     </LoginButton>
//                     <LoginError>{loginError}</LoginError>
//                     <Signup href="#">Cadastre-se</Signup>
//                 </InnerWrapper>
//             </Container>
//         </Wrapper>
//     )
// }

// export default Login