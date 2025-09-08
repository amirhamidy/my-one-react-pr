import Security from "./pages/pass/security"
import { Route, Routes } from 'react-router-dom'
import Sotry from "./pages/story/storys"
import Product from "./pages/products/product"
import Chats from "./pages/chat/chats"
import Users from "./pages/users/users"
import MainPage from "./pages/mainPage"
import Addproduct from "./pages/products/AddProduct"
import AddCta from "./pages/category/addCategory"
import Brands from "./pages/brand/AddAndCoBrand"
import ColorList from "./pages/color/ColorList"
import Registrationdetails from "./pages/registr/Registrationdetails"
import DefaultPage from "./pages/404"
import ColoForProduct from "./pages/color/ColorForPrice"
import CommentsGrid from "./pages/comment/Comeent"
import BlogsGrid from "./pages/blog/blog"
import BlogCategory from "./pages/blog/blogCTA"
import ContactGrid from "./pages/contact/contact"
import ChatDetail from "./pages/chat/seenChat"
import AddAndEditStory from "./pages/story/AddAndEditStory"





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
                <Route path="/product/Addproduct" element={<Addproduct></Addproduct>} />
                <Route path='/AddCategory' element={<AddCta></AddCta>} />
                <Route path='/add-brand' element={<Brands></Brands>} />
                <Route path='/price-color' element={<ColorList></ColorList>} />
                <Route path="/product-specs" element={<Registrationdetails></Registrationdetails>} />
                <Route path="/color-for-product" element={<ColoForProduct></ColoForProduct>} />
                <Route path="/comments" element={<CommentsGrid></CommentsGrid>} />
                <Route path="/blogs" element={<BlogsGrid></BlogsGrid>} />
                <Route path="/blog-category" element={<BlogCategory></BlogCategory>} />
                <Route path="/contact-us" element={<ContactGrid></ContactGrid>} />
                <Route path="/chats/singleChat" element={<ChatDetail></ChatDetail>} />
                <Route path="/Sotry/AddAndEditStory" element={<AddAndEditStory></AddAndEditStory>} />
            </Routes>
        </section>
    )
}

export default Navbar