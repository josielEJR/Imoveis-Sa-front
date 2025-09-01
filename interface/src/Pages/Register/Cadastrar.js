import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Cadastro from "../../layouts/Cadastro"

const Cadastrar = () => {
  const [nome, setNome] = useState("")
  const [nomeCorreto, setNomeCorreto] = useState("")
  const [email, setEmail] = useState("")
  const [emailCorreto, setEmailCorreto] = useState("")
  const [senha, setSenha] = useState("")
  const [senhaCorreta, setSenhaCorreta] = useState("")
  //const [confirmPassword, setConfirmPassword] = useState ("")
  const [cpf, setCpf] = useState("")
  const [cpfCorreto, setCpfCorreto] = useState("")
  const [celular, setCelular] = useState("")
  const [celularCorreto, setCelularCorreto] = useState("")
  const [error, setError] = useState("")
  const [isLogged, setIsLogged] = useState(true)
  //const [ showLoginAlert, setShowLoginAlert ] = useState(<div></div>)


  // redirecionamento de pagina
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.length > 0) {
      navigate("/home")
    }
  }, [])

  // validação para o nome
  const checkNome = () => {
    const nomeSeparado = nome.split(' ') // divide o nome
    let nomeCorreto = true
    nomeSeparado.forEach(elem => {
      const primeiraMaiuscula = /^[A-Z].*/.test(elem) // verifica se todas as primeiras letras são maiusculas
      const contemEspecial = /[!@#$%&*]/.test(elem) // verifica se há caracteres especiais
      const contemNumero = /[\d]/.test(elem) // verifica se há caracteres numéricos
      if (!primeiraMaiuscula || contemEspecial || contemNumero) { // testa todas as condições 
        nomeCorreto = false
      }
    })

    if (nomeCorreto) {
      return true
    } else {
      return false
    }
  }


  // validação de email
  const checkEmail = () => {
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailPattern.test(email)
  }


  // validação de senha 
  const checkPassword = () => {
    const digitosMinimos = senha.length >= 6 // verifica se a senha tem mais de 6 digitos
    const temMaiuscula = /[A-Z]/.test(senha) // verifica se há letras maisculas
    const temMinuscula = /[a-z]/.test(senha) // verifica se há letras minusculas
    const temNumero = /\d/.test(senha) // verifica se há numeros
    const temCaracterEspecial = /[^a-zA-Z0-9]+/g.test(senha) // verifica se há caracteres especiais

    const isValidPassword = digitosMinimos && temMaiuscula && temMinuscula && temNumero && temCaracterEspecial // testa todas as condições
    // Feedback claro e informativo com base nos resultados da validação
    if (isValidPassword) {
      return true;  // Senha válida
    }
  }

  // funcção para só aceita numeros no input do cpf
  const handleCpfChange = (e) => {
    const inputCpf = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    setCpf(inputCpf);
  }

  // validação de cpf
  const checkCpf = () => {
    const limpaCpf = cpf.replace(/\D/g, '')

    if (limpaCpf.length !== 11) {
      return false
    }
    if (/^(\d)\1{10}$/.test(limpaCpf)) {
      return false
    }

    return true
  }

  // validação de celular
  const handleCelularChange = (numero) => {
    const inputCelular = numero.replace(/\D/g, ""); // remove caracteres não numéricos
    setCelular(inputCelular);
  }

  const checkCelular = () => {
    if (celular.length !== 11) {
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formIsValid = true
    setError("")

    if (!checkEmail()) {
      setEmailCorreto("email invalido")
      formIsValid = false
    } else {
      setEmailCorreto("")
    }
    if (!checkPassword()) {
      setSenhaCorreta("Senha invalida. A senha deve possuir no minimo 6 digitos, 1 letra maiúscula, 1 letra minúscula e 1 caracter especial")
      formIsValid = false
    } else {
      setSenhaCorreta("")
    }
    if (!checkCpf()) {
      setCpfCorreto("CPF invalido")
      formIsValid = false
    } else {
      setCpfCorreto("")
    }
    if (nome === '' || !checkNome()) {
      setNomeCorreto("Insira um nome válido (todas as primeiras letras precisam ser maiúsculas)")
      formIsValid = false
    } else {
      setNomeCorreto("")
    }
    if (!checkCelular()) {
      setCelularCorreto("Insira um numero de celular válido")
      formIsValid = false
    } else {
      setCelularCorreto("")
    }

    if (formIsValid) {
      setIsLogged(true);
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          "nome": nome,
          "email": email,
          "senha": senha,
          "cpf": cpf,
          "celular": celular
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };

        let estaCadastrado = false
        await fetch("https://imoveis-sa.onrender.com/api/clientes/cadastrar", requestOptions)
          .then((response) => response.text())
          .then((result) => JSON.parse(result))
          .then((result) => {
            if (result.mensagem === 'usuário ja esta cadastrado') {
              estaCadastrado = true
              setError(result.mensagem)
            }
          })
          .catch((error) => console.error(error));

        if (!estaCadastrado) {
          localStorage.setItem("currentUserNome", nome)
          localStorage.setItem("currentUserEmail", email)
          localStorage.setItem("currentUserCelular", celular)
          window.location.reload()
        }
      } catch (error) {
        setError("Erro ao cadastrar usuário");
        setIsLogged(false);
      }
    }
  }

  return (
  <div>
    <Cadastro />
  </div>
  )
}

export default Cadastrar