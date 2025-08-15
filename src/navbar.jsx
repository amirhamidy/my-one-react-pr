import { useState, useContext, createContext } from "react"
import NavContax from "./myContaxt/contaxt"
import Security from "./pages/security"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Sotry from "./pages/storys"
import Product from "./pages/product"
import Chats from "./pages/chats"
import Users from "./pages/users"
import MainPage from "./pages/mainPage"





const Navbar = () => {


    const { ChangeProfile, SetChangeProfile } = useContext(NavContax);

    console.log(ChangeProfile)

    return (
        <section className="col-md-10 m-0 p-0 d-flex justify-content-start flex-column px-3">
            <Routes>
                <Route path='/' element={<MainPage></MainPage>} />
                <Route path='/security' element={<Security></Security>} />
                <Route path='/Sotry' element={<Sotry></Sotry>} />
                <Route path='/chats' element={<Chats></Chats>} />
                <Route path='/product' element={<Product></Product>} />
                <Route path='/users' element={<Users></Users>} />
            </Routes>
        </section>
    )
}

export default Navbar