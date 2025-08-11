import { useState } from 'react'
import './index.css'
import SideBarMenu from './sidebar'
import Navbar from './navbar'
import NavContax from './myContaxt/contaxt'
import Security from './pages/security'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'



function App() {


  const { ChangeProfile, SetChangeProfile } = useState('')



  return (

    <BrowserRouter>
      <NavContax.Provider value={{
        ChangeProfile, SetChangeProfile
      }}>
        <main className='row'>
          <SideBarMenu></SideBarMenu>
          <Navbar></Navbar>
        </main>
      </NavContax.Provider>
    </BrowserRouter>
  )
}


export default App
