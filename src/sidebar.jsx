import { Link, NavLink, useLocation } from 'react-router-dom';
import ProfileIcon from './pages/icons/profileIcon';
import SecurityIcon from './pages/icons/securityIcon';
import ProdutIcon from './pages/icons/productIcon';
import ChatsIcon from './pages/icons/chatsIcon';
import StoryIcon from './pages/icons/storyIcon';
import UsersIcon from './pages/icons/usersIcon';
import OrdersIcon from './pages/icons/ordersIcon';
import CategoryIcon from './pages/icons/categoryIcon';
import BrandIcon from './pages/icons/brandIcon';
import ColorIcon from './pages/icons/colorIcon';
import ProductSpaceIcon from './pages/icons/productspecsIcon';
import ColorForPriceIcon from './pages/icons/colorForPriceIcon';
import CommentsIcon from './pages/icons/commentsIcon';
import BlogIcon from './pages/icons/blogIcon';
import BlogCtaIcon from './pages/icons/blogCategoryIcon';
import ContactIcon from './pages/icons/contactIcon';

const SideBarMenu = () => {
    const location = useLocation();

    const menuItems = [
        {
            id: 1,
            path: '/profile',
            name: 'پروفایل',
            icon: (
                <ProfileIcon></ProfileIcon>
            )
        },
        {
            id: 2,
            path: '/security',
            name: 'امنیت',
            icon: (
                <SecurityIcon></SecurityIcon>
            )
        },
        {
            id: 3,
            path: '/product',
            name: 'محصولات',
            icon: (

                <ProdutIcon></ProdutIcon>

            )
        },
        {
            id: 4,
            path: '/chats',
            name: 'گفتگو ها',
            icon: (
                <ChatsIcon></ChatsIcon>
            )
        },
        {
            id: 5,
            path: '/Sotry',
            name: 'استوری ها',
            icon: (
                <StoryIcon></StoryIcon>
            )
        },
        {
            id: 6,
            path: '/users',
            name: 'کاربران',
            icon: (
                <UsersIcon></UsersIcon>
            )
        },
        {
            id: 7,
            path: '/orders',
            name: 'پیگیری سفارشات',
            icon: (
                <OrdersIcon></OrdersIcon>
            )
        },
        {
            id: 8,
            path: '/AddCategory',
            name: 'افزودن دسته بندی',
            icon: (
                <CategoryIcon></CategoryIcon>
            )
        },
        {
            id: 9,
            path: '/add-brand',
            name: 'افزودن برند',
            icon: (
                <BrandIcon></BrandIcon>
            )
        },

        {
            id: 10,
            path: '/price-color',
            name: 'لیست رنگ',
            icon: (
                <ColorIcon></ColorIcon>

            )
        },
        {
            id: 11,
            path: '/product-specs',
            name: 'ثبت مشخصات محصول',
            icon: (
                <ProductSpaceIcon></ProductSpaceIcon>
            )
        },
        {
            id: 12,
            path: '/color-for-product',
            name: 'ثبت رنگ برای قیمت',
            icon: (
                <ColorForPriceIcon></ColorForPriceIcon>
            )
        },
        {
            id: 13,
            path: '/comments',
            name: 'نظرات',
            icon: (
                <CommentsIcon></CommentsIcon>
            )
        },
        {
            id: 14,
            path: '/blogs',
            name: 'بلاگ',
            icon: (
                <BlogIcon></BlogIcon>
            )
        },
        {
            id: 15,
            path: '/blog-category',
            name: 'دسته بندی بلاگ',
            icon: (
                <BlogCtaIcon></BlogCtaIcon>
            )
        },
        {
            id: 16,
            path: '/contact-us',
            name: 'ارتباط با ما',
            icon: (
                <ContactIcon></ContactIcon>
            )
        },
    ];

    return (
        <div className="main-box-sidebar col-12 py-2 px-1 col-md-2 align-items-center w-center px-3">
            <span className="w-100 py-5" >
                <img alt="" className="w-25" src="../vite.svg" />
            </span>
            <div className="d-flex justify-content-start flex-column text-right list-box-sidebar mx-1 px-1 mt-4">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        end={false}
                        to={item.path}
                        className={({ isActive }) =>
                            `sidebar-list cs-fs-13 py-3 px-1 d-flex justify-content-start align-items-center ${isActive ? 'active-sidebar-list' : ''}`
                        } >
                        {item.icon}
                        {item.name}
                    </NavLink>
                ))}
            </div>
            <button className="btn theme-bg-color w-75 mt-4 mx-1 text-light">
                خروج
            </button>
        </div>
    );
};

export default SideBarMenu;