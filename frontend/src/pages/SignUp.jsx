import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../services/api'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSave = async event => {
    event.preventDefault()

    const dataUser = {
      name,
      email,
      password
    }

    try {
      await api.post('/user', dataUser)
      alert('Usuário criado com sucesso')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-center w-screen'>
      <form onSubmit={handleSave} className='flex flex-col gap-4 w-80'>
        <label>Nome</label>
        <input
          type='text'
          className='p-2 rounded-sm'
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type='email'
          className='p-2 rounded-sm'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label>Senha</label>
        <input
          type='password'
          className='p-2 rounded-sm'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input
          type='submit'
          className='bg-blue-700 p-2 rounded-sm cursor-pointer'
          value='Cadastrar'
        />
        <p>
          Faça <Link to='/'>login</Link> agora
        </p>
      </form>
    </div>
  )
}
