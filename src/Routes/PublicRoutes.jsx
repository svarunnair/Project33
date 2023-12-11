import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signin from '../auth/Signin'
import Signup from '../auth/Signup'
import Square from '../pages/Square'
import Centrix from '../pages/Centrix'
import Collections from '../pages/Collections'
import Detail from '../pages/Detail'
import Search from '../pages/Search'
import Info from '../pages/Info'


function PublicRoutes() {
  return (
    <div>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/square' element={<Square/>}/>
            <Route path='/centrix' element={<Centrix/>}/>
            <Route path='/collections' element={<Collections/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/info' element={<Info/>}/>



        </Routes>
    </div>
  )
}

export default PublicRoutes