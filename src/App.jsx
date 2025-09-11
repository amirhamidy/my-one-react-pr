import { useState, useEffect } from 'react'
import './index.css'
import SideBarMenu from './sidebar'
import Navbar from './navbar'
import NavContax from './myContaxt/contaxt'
import { BrowserRouter, useLocation } from 'react-router-dom'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import "react-loading-skeleton/dist/skeleton.css";


NProgress.configure({ showSpinner: false, speed: 500, trickleSpeed: 200 })

function ProgressHandler() {
  const location = useLocation()

  useEffect(() => {
    NProgress.start()
    const timer = setTimeout(() => {
      NProgress.done()
    }, 50)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return null
}

function App() {
  const { ChangeProfile, SetChangeProfile } = useState('')

  return (
    <BrowserRouter>
      <NavContax.Provider value={{ ChangeProfile, SetChangeProfile }}>
        <ProgressHandler />
        <main className='row'>
          <SideBarMenu></SideBarMenu>
          <Navbar></Navbar>
        </main>
      </NavContax.Provider>
    </BrowserRouter>
  )
}

export default App
