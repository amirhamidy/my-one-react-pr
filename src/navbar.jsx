import { useState, useContext, createContext } from "react"
import NavContax from "./myContaxt/contaxt"
import Security from "./pages/security"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Sotry from "./pages/storys"
import Product from "./pages/product"
import Chats from "./pages/chats"
import Users from "./pages/users"
import MainPage from "./pages/mainPage"
import Addproduct from "./pages/AddProduct"
import Addstory from "./pages/AddStory"
import AddCta from "./pages/addCategory"
import Brands from "./pages/AddAndCoBrand"
import ColorList from "./pages/ColorList"
import Registrationdetails from "./pages/Registrationdetails"
import DefaultPage from "./pages/default"
import ColoForProduct from "./pages/ColorForPrice"





const Navbar = () => {

    return (
        <section className="col-md-10 m-0 p-0 d-flex justify-content-start align-items-start flex-column px-3 effect-for-sec">
            <Routes>
                <Route path='*' element={<DefaultPage></DefaultPage>} />
                <Route path='/profile' element={<MainPage></MainPage>} />
                <Route path='/security' element={<Security></Security>} />
                <Route path='/Sotry' element={<Sotry></Sotry>} />
                <Route path='/chats' element={<Chats></Chats>} />
                <Route path='/product' element={<Product></Product>} />
                <Route path='/users' element={<Users></Users>} />
                <Route path='/Addproduct' element={<Addproduct></Addproduct>} />
                <Route path='/Addstory' element={<Addstory></Addstory>} />
                <Route path='/AddCategory' element={<AddCta></AddCta>} />
                <Route path='/add-brand' element={<Brands></Brands>} />
                <Route path='/price-color' element={<ColorList></ColorList>} />
                <Route path="/product-specs" element={<Registrationdetails></Registrationdetails>} />
                <Route path="/color-for-product" element={<ColoForProduct></ColoForProduct>} />
            </Routes>
        </section>
    )
}

export default Navbar