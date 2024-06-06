import React from 'react'
import './input.css'
import EmailPage from './component/EmailPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Password from './component/Password'
import Home from './component/Home'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route element={<EmailPage/>} path='/'></Route>
                <Route element={<Password/>} path='/password'></Route>
                <Route element={<Home/>} path='/home'></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App