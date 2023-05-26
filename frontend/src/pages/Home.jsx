import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth'

export default function Home() {
  const { signOut, user } = useContext(AuthContext)
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    setUserData(JSON.parse(user))
  }, [])
  return (
    <div>
      <h1 className='text-center text-fuchsia-600'>Home</h1>
      <h3>Seja bem vindo {userData?.name}</h3>
      <button
        className='bg-blue-700 p-2 rounded-sm cursor-pointer'
        onClick={signOut}>
        Sair
      </button>
    </div>
  )
}
