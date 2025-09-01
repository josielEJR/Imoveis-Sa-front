import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginConsultor = () => {
  const [consultor_email, setEmail] = useState("")
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
      const response = await fetch('https://imoveis-sa.onrender.com/api/consultores/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ consultor_email, senha })
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

        fetch(`https://imoveis-sa.onrender.com/api/consultores/busca?consultor_email=${consultor_email}`, requestOptions)
          .then(data => data.text())
          .then(response => JSON.parse(response))
          .then(result => result[0])
          .then(result => {
            const userNome = result.nome
            const userEmail = result.consultor_email
            const userCelular = result.celular
            const userTipo = result.tipo
            const userId = result.consultorId
            localStorage.setItem("tipo", userTipo)
            localStorage.setItem("id", userId)
            localStorage.setItem("currentUserNome", userNome)
            localStorage.setItem("currentUserEmail", userEmail)
            localStorage.setItem("currentUserCelular", userCelular)
            localStorage.setItem("token", data.token)
          })

        return window.location.reload()

      } else {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          "consultor_email": "ralves@gmail.com",
          "senha": "123456"
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };

        fetch("https://imoveis-sa.onrender.com/api/consultores/login", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
      }
    } catch (error) {
      setError("Usuario não cadastrado hgfhjdsfgjsda")
    }
  }

  return (
    <div className='min-h-screen bg-white flex'>
      <div className='hidden lg:block relative w-0 flex-1 bg-gray-900'>
        <div className='flex h-full justify-center items-center'>
          <img src="logo.svg" alt="" />
        </div>
      </div>
      <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <img src='logo.svg' alt='' className='lg:hidden h-20 w-auto' />
            <h2 className='mt-6 text-3x1 font-semibold text-red-600'>Conecte-se</h2>
            <p className='mt-w text-sm text-gray-600 max-w'>Novo por aqui?
              <a href="Register" className='font-medium text-blue-600'> clique aqui e cadastre-se agora !</a>
            </p>
          </div>
          <div className='mt-6'>
            <form
              action=''
              onSubmit={handleSubmit}>
              <div className='mb-4'>
                <input
                  type='email'
                  name='email'
                  placeholder='E-mail'
                  className='apparance-none block w-full py-1 px-2 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 roudend focus: outline-none'
                  required
                  value={consultor_email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <div className='mb-4'>
                <input
                  name="password"
                  type='password'
                  placeholder='Senha'
                  className='apparance-none block w-full py-1 px-2 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 roudend focus: outline-none'
                  required
                  value={senha}
                  onChange={(e) => {
                    setSenha(e.target.value)
                  }}
                />
              </div>
              <div className='mb-4'>
                <button
                  className='inline-block w-full py-3 px-5 lenading-none text-white bg-red-600 hover:bg-red-900 font-semibold rounded shadow'
                  onClick={handleSubmit}
                  style={{
                    display: consultor_email === '' ? 'none' : 'inline-block'
                  }}
                >Login</button>
                {error && <p className="text-3x1 font-semibold text-red-600">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginConsultor