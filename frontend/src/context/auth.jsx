import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import { Navigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkUserAuth = async () => {
      const storageUser = localStorage.getItem('@Auth:user')
      const storageToken = localStorage.getItem('@Auth:token')

      if (storageToken && storageUser) {
        setUser(storageUser)
      }
    }

    checkUserAuth()
  }, [])

  const signIn = async ({ email, password }) => {
    const response = await api.post('auth', { email, password })

    const { token, user, error } = response.data

    if (error) {
      alert(error)
    } else {
      const userData = JSON.stringify(user)
      setUser(userData)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      localStorage.setItem('@Auth:token', token)
      localStorage.setItem('@Auth:user', userData)
    }
  }

  const signOut = () => {
    localStorage.clear()
    setUser(null)
    return <Navigate to='/' />
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signIn,
        signOut
      }}>
      {children}
    </AuthContext.Provider>
  )
}
