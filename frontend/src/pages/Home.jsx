import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth'
import { api } from '../services/api'

export default function Home() {
  const { signOut, user } = useContext(AuthContext)
  const [userData, setUserData] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [productList, setProductList] = useState(null)
  const storageToken = localStorage.getItem('@Auth:token')
  const header = {
    Authorization: `Bearer ${storageToken}`
  }

  const saveProduct = async e => {
    e.preventDefault()
    try {
      const response = await api.post(
        'product',
        { name, price },
        {
          headers: header
        }
      )
      console.log(response)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    setUserData(JSON.parse(user))

    const loadProduts = async () => {
      try {
        const response = await api.get('product', {
          headers: header
        })
        console.log(response.data)
        const { products } = response.data
        setProductList(products)
      } catch (error) {
        alert(error)
      }
    }
    loadProduts()
  }, [])
  return (
    <div className='w-screen'>
      <header className='flex justify-end mb-56 me-40'>
        <h3 className='me-4'>
          Seja bem vindo <strong>{userData?.name}</strong>
        </h3>
        <button
          className='bg-blue-700 p-2 rounded-sm cursor-pointer'
          onClick={signOut}>
          Sair
        </button>
      </header>
      <div className='flex justify-evenly w-screen gap-6'>
        <form onSubmit={saveProduct} className='flex flex-col gap-4 w-80'>
          <label>Nome</label>
          <input
            type='text'
            className='p-2 rounded-sm'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <label>Preço</label>
          <input
            type='number'
            className='p-2 rounded-sm'
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
          <input
            type='submit'
            value='Salvar'
            className='bg-blue-700 p-2 rounded-sm cursor-pointer'
          />
        </form>
        <table className='m-4 w-80'>
          <tr className='bg-slate-500 p-2'>
            <td>Produto</td>
            <td>Preço</td>
          </tr>
          {productList?.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}
