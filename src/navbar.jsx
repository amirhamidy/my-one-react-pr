import { useState, useContext, createContext } from "react"
import NavContax from "./myContaxt/contaxt"
import Security from "./pages/security"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Sotry from "./pages/storys"
import Product from "./pages/product"
import Chats from "./pages/chats"
import Users from "./pages/users"





const Navbar = () => {


    const { ChangeProfile, SetChangeProfile } = useContext(NavContax);

    console.log(ChangeProfile)

    return (
        <section className="col-md-10 m-0 p-0 d-flex justify-content-start flex-column px-3">
            <div className="d-flex justify-content-between header-sec col-md-12 px-4 py-1 align-items-center">

                <div className="d-flex justify-content-center flex-column mx-3">

                    <span className="box-pr-user">
                        <img alt="" className="w-100" src="../vite.svg" />
                    </span>

                    <span className="d-flex justify-content-center my-2">
                        <span className="mx-1 cs-li-color">Super User</span>
                        <span className="mx-1">سامان انصاری</span>
                    </span>
                </div>
                <div>.</div>
                <div className="d-flex justify-content-start flex-column w-right">
                    <span className="my-2 cs-fs-14">
                        دانلود بک آپ دیتا بیس
                        <svg className="mx-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="1.2em"
                            height="1.2em"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M7 6.5h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827c.464.694.503 1.427.506 3.167M12 6.5l-.633-1.267c-.525-1.05-1.005-2.106-2.168-2.542C8.69 2.5 8.108 2.5 6.944 2.5c-1.816 0-2.724 0-3.406.38A3 3 0 0 0 2.38 4.038C2 4.72 2 5.628 2 7.444V10.5c0 4.714 0 7.071 1.464 8.535C4.822 20.394 6.944 20.493 11 20.5h1m6.5 1v-8m0 8c-.7 0-2.009-1.994-2.5-2.5m2.5 2.5c.7 0 2.009-1.994 2.5-2.5"
                                color="currentColor"
                            ></path>
                        </svg>
                    </span>
                    <span className="my-2 cs-fs-14">
                        دانلو بک آپ فایل های مدیا
                        <svg className="mx-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="1.2em"
                            height="1.2em"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M7 6.5h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827c.464.694.503 1.427.506 3.167M12 6.5l-.633-1.267c-.525-1.05-1.005-2.106-2.168-2.542C8.69 2.5 8.108 2.5 6.944 2.5c-1.816 0-2.724 0-3.406.38A3 3 0 0 0 2.38 4.038C2 4.72 2 5.628 2 7.444V10.5c0 4.714 0 7.071 1.464 8.535C4.822 20.394 6.944 20.493 11 20.5h1m6.5 1v-8m0 8c-.7 0-2.009-1.994-2.5-2.5m2.5 2.5c.7 0 2.009-1.994 2.5-2.5"
                                color="currentColor"
                            ></path>
                        </svg>
                    </span>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<main></main>} />
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