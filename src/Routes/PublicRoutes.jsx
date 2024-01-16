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
import Captain from '../pages/Captain'
import Welcome from '../pages/Welcome'
import Result from '../pages/Result'
import Account from '../pages/Account'


function PublicRoutes() {
  let token=localStorage.getItem('email')
  return (
    <div>
        <Routes>

            <Route path='/' element={<Welcome/>}/>
            <Route path='/welcome' element={<Welcome/>}/>
            {/* <Route path='/home' element={<Home/>}/> */}
            <Route path='/signin' element={token?<Account/>:<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/square' element={<Square/>}/>
            <Route path='/centrix' element={<Centrix/>}/>
            <Route path='/collections' element={<Collections/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/info' element={<Info/>}/>
            <Route path='/captain' element={<Captain/>}/>
            <Route path='/result/:id' element={<Result/>}/>
            <Route path='/account' element={<Account/>}/>

            

        </Routes>
    </div>
  )
}

export default PublicRoutes