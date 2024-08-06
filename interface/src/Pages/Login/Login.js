import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import LoginLayout from '../../layouts/Login'

const Login = () => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.length > 0) {
      navigate("/home")
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3001/clientes/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
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

        setTimeout(() => {
          window.location.reload(false)
        }, 500)

      } else {
        setError("Usuario não cadastrado ")
      }
    } catch (error) {
      setError("Usuario não cadastrado ")
    }
  }

  return (
      <>
        <LoginLayout />
      </>
  )
}

export default Login