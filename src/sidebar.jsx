import { Link, NavLink, useLocation } from 'react-router-dom';
import ProfileIcon from './pages/icons/profileIcon';
import SecurityIcon from './pages/icons/securityIcon';
import ProdutIcon from './pages/icons/productIcon';
import ChatsIcon from './pages/icons/chatsIcon';
import StoryIcon from './pages/icons/storyIcon';
import UsersIcon from './pages/icons/usersIcon';
import OrdersIcon from './pages/icons/ordersIcon';

const SideBarMenu = () => {
    const location = useLocation();

    const menuItems = [
        {
            path: '/profile',
            name: 'پروفایل',
            icon: (
                <ProfileIcon></ProfileIcon>
            )
        },
        {
            path: '/security',
            name: 'امنیت',
            icon: (
                <SecurityIcon></SecurityIcon>
            )
        },
        {
            path: '/product',
            name: 'محصولات',
            icon: (

                <ProdutIcon></ProdutIcon>
                
            )
        },
        {
            path: '/chats',
            name: 'گفتگو ها',
            icon: (
                <ChatsIcon></ChatsIcon>
            )
        },
        {
            path: '/Sotry',
            name: 'استوری ها',
            icon: (
                <StoryIcon></StoryIcon>
            )
        },
        {
            path: '/users',
            name: 'کاربران',
            icon: (
               <UsersIcon></UsersIcon>
            )
        },
        {
            path: '/orders',
            name: 'پیگیری سفارشات',
            icon: (
                <OrdersIcon></OrdersIcon>
            )
        },
        {
            path: '/AddCategory',
            name: 'افزودن دسته بندی',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3h6m-3-3v6"></path>
                </svg>
            )
        },
        {
            path: '/add-brand',
            name: 'افزودن برند',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                    <path fill="currentColor" d="M14 10H3v2h11zm0-4H3v2h11zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2zM3 16h7v-2H3z"></path>
                </svg>
            )
        },

        {
            path: '/price-color',
            name: 'لیست رنگ',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.2em" height="1.2em">
                    <path fill="currentColor" d="M8 .5C3.58.5 0 3.86 0 8s3.58 7.5 8 7.5c4.69 0 1.04-2.83 2.79-4.55c.76-.75 1.63-.87 2.44-.87c.37 0 .73.03 1.06.03c.99 0 1.72-.23 1.72-2.1C16 3.86 12.42.5 8 .5m6.65 8.32c-.05.01-.16.02-.37.02c-.14 0-.29 0-.45-.01c-.19 0-.39-.01-.61-.01c-.89 0-2.19.13-3.32 1.23c-1.17 1.16-.9 2.6-.74 3.47c.03.18.08.44.09.6c-.16.05-.52.13-1.26.13c-3.72 0-6.75-2.8-6.75-6.25S4.28 1.75 8 1.75s6.75 2.8 6.75 6.25c0 .5-.06.74-.1.82"></path>
                    <path fill="currentColor" d="M5.9 9.47c-1.03 0-1.86.8-1.86 1.79s.84 1.79 1.86 1.79s1.86-.8 1.86-1.79s-.84-1.79-1.86-1.79m0 2.35c-.35 0-.64-.25-.64-.56s.29-.56.64-.56s.64.25.64.56s-.29.56-.64.56m-.2-4.59c0-.99-.84-1.79-1.86-1.79s-1.86.8-1.86 1.79s.84 1.79 1.86 1.79s1.86-.8 1.86-1.79m-1.86.56c-.35 0-.64-.25-.64-.56s.29-.56.64-.56s.64.25.64.56s-.29.56-.64.56M7.37 2.5c-1.03 0-1.86.8-1.86 1.79s.84 1.79 1.86 1.79s1.86-.8 1.86-1.79S8.39 2.5 7.37 2.5m0 2.35c-.35 0-.64-.25-.64-.56s.29-.56.64-.56s.64.25.64.56s-.29.56-.64.56m2.47 1.31c0 .99.84 1.79 1.86 1.79s1.86-.8 1.86-1.79s-.84-1.79-1.86-1.79s-1.86.8-1.86 1.79m2.5 0c0 .31-.29.56-.64.56s-.64-.25-.64-.56s.29-.56.64-.56s.64.25.64.56"></path>
                </svg>

            )
        },
        {
            path: '/product-specs',
            name: 'ثبت مشخصات محصول',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.2em" height="1.2em">
                    <path fill="currentColor" d="M8 .5C3.58.5 0 3.86 0 8s3.58 7.5 8 7.5c4.69 0 1.04-2.83 2.79-4.55c.76-.75 1.63-.87 2.44-.87c.37 0 .73.03 1.06.03c.99 0 1.72-.23 1.72-2.1C16 3.86 12.42.5 8 .5m6.65 8.32c-.05.01-.16.02-.37.02c-.14 0-.29 0-.45-.01c-.19 0-.39-.01-.61-.01c-.89 0-2.19.13-3.32 1.23c-1.17 1.16-.9 2.6-.74 3.47c.03.18.08.44.09.6c-.16.05-.52.13-1.26.13c-3.72 0-6.75-2.8-6.75-6.25S4.28 1.75 8 1.75s6.75 2.8 6.75 6.25c0 .5-.06.74-.1.82"></path>
                    <path fill="currentColor" d="M5.9 9.47c-1.03 0-1.86.8-1.86 1.79s.84 1.79 1.86 1.79s1.86-.8 1.86-1.79s-.84-1.79-1.86-1.79m0 2.35c-.35 0-.64-.25-.64-.56s.29-.56.64-.56s.64.25.64.56s-.29.56-.64.56m-.2-4.59c0-.99-.84-1.79-1.86-1.79s-1.86.8-1.86 1.79s.84 1.79 1.86 1.79s1.86-.8 1.86-1.79m-1.86.56c-.35 0-.64-.25-.64-.56s.29-.56.64-.56s.64.25.64.56s-.29.56-.64.56M7.37 2.5c-1.03 0-1.86.8-1.86 1.79s.84 1.79 1.86 1.79s1.86-.8 1.86-1.79S8.39 2.5 7.37 2.5m0 2.35c-.35 0-.64-.25-.64-.56s.29-.56.64-.56s.64.25.64.56s-.29.56-.64.56m2.47 1.31c0 .99.84 1.79 1.86 1.79s1.86-.8 1.86-1.79s-.84-1.79-1.86-1.79s-1.86.8-1.86 1.79m2.5 0c0 .31-.29.56-.64.56s-.64-.25-.64-.56s.29-.56.64-.56s.64.25.64.56"></path>
                </svg>
            )
        },
        {
            path: '/color-for-product',
            name: 'ثبت رنگ برای قیمت',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.4em" height="1.4em"
                > <path fill="currentColor" d="M11 13V9c0-.55-.45-1-1-1H6V6h4c.55 0 1-.45 1-1s-.45-1-1-1H8.5c0-.55-.45-1-1-1s-1 .45-1 1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H5c-.55 0-1 .45-1 1s.45 1 1 1h1.5c0 .55.45 1 1 1s1-.45 1-1H10c.55 0 1-.45 1-1m7.88.22l-4.95 4.95l-2.12-2.12a.996.996 0 1 0-1.41 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l5.66-5.66a.996.996 0 0 0 0-1.41c-.4-.39-1.03-.39-1.42 0"></path>
                </svg>

            )
        },
        {
            path: '/comments',
            name: 'نظرات',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1.2em" height="1.2em">
                    <path fill="currentColor" d="M56 7.9H8c-3.4 0-6.3 2.8-6.3 6.3v37.7c0 1.6.9 3.1 2.4 3.8c.6.3 1.2.4 1.8.4c1 0 1.9-.3 2.7-1l8.5-7H56c3.4 0 6.3-2.8 6.3-6.3V14.2c0-3.5-2.9-6.3-6.3-6.3m1.8 33.9c0 1-.8 1.8-1.8 1.8H16.3c-.5 0-1 .2-1.4.5l-8.6 7.1v-37c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v27.6z"></path>
                    <path fill="currentColor" d="M15.8 20.7c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1s-2.8-6.1-6.1-6.1m0 7.8c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6s1.6.7 1.6 1.6c0 .8-.7 1.6-1.6 1.6M32 20.7c-3.4 0-6.1 2.7-6.1 6.1S28.6 33 32 33s6.1-2.7 6.1-6.1s-2.7-6.2-6.1-6.2m0 7.8c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6s1.6.7 1.6 1.6c0 .8-.7 1.6-1.6 1.6m16.2-7.8c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1s-2.7-6.1-6.1-6.1m0 7.8c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6s1.6.7 1.6 1.6c.1.8-.7 1.6-1.6 1.6"></path>
                </svg>
            )
        },
        {
            path: '/blogs',
            name: 'بلاگ',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" width="1.2em" height="1.2em">
                    <path fill="currentColor" d="M1536 768v128H512V768zm-256-512v128H512V256zm-256 1536v-640h512v640zm128-512v384h256v-384zm384-768v128H512V512zM256 0h1536v2048H256zm1408 1920V128H384v1792zm-768-256v128H512v-128zm0-512v128H512v-128zm0 256v128H512v-128z"></path>
                </svg>
            )
        },
        {
            path: '/blog-category',
            name: 'دسته بندی بلاگ',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.2em" height="1.2em">
                    <path fill="currentColor" d="M27 22.141V18a2 2 0 0 0-2-2h-8v-4h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4H7a2 2 0 0 0-2 2v4.142a4 4 0 1 0 2 0V18h8v4.142a4 4 0 1 0 2 0V18h8v4.141a4 4 0 1 0 2 0M13 4h6l.001 6H13ZM8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m10 0a2 2 0 1 1-2-2a2.003 2.003 0 0 1 2 2m8 2a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></path>
                </svg>
            )
        },
        {
            path: '/contact-us',
            name: 'ارتباط با ما',
            icon: (
                <svg className="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.2em"
                    height="1.2em"
                >
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></path>
                        <path strokeLinecap="round" d="M12 16V8m-4 6v-4m8 4v-4"></path>
                    </g>
                </svg>
            )
        },
    ];

    return (
        <div className="main-box-sidebar col-12 py-2 px-1 col-md-2 align-items-center w-center px-3">
            <span className="w-100 py-5" >
                <img alt="" className="w-25" src="../vite.svg" />
            </span>
            <div className="d-flex justify-content-start flex-column text-right list-box-sidebar mx-1 px-1 mt-4">
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
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