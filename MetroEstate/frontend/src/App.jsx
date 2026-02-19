import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import Signup from '../Pages/Signup.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </>
  )
}

export default App
