import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signin from '../auth/Signin'
import Signup from '../auth/Signup'

function PublicRoutes() {
  return (
    <div>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>


        </Routes>
    </div>
  )
}

export default PublicRoutes