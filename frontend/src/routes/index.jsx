import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import { PrivateRoutes } from './privateRoutes'

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/home' element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}
