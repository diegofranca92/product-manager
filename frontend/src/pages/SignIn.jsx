import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/auth'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, signed } = useContext(AuthContext)

  const handleSignIn = async event => {
    event.preventDefault()

    const dataUser = {
      email,
      password
    }

    try {
      await signIn(dataUser)
    } catch (error) {
      alert(error)
    }
  }

  if (!signed) {
    return (
      <div className='flex justify-center w-screen'>
        <form onSubmit={handleSignIn} className='flex flex-col gap-4 w-80'>
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
            value='Login'
            className='bg-blue-700 p-2 rounded-sm cursor-pointer'
          />
          <Link to='/signup'>Cadastre-se</Link>
        </form>
      </div>
    )
  } else {
    return <Navigate to='/home' />
  }
}
