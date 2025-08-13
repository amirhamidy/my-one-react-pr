import { Link, useLocation } from 'react-router-dom';

const SideBarMenu = () => {
    const location = useLocation();

    const menuItems = [
        {
            path: '/',
            name: 'پروفایل',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                        <path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></path>
                        <path d="M6.374 19.653a6.333 6.333 0 0 1 11.252 0M12 13.056a3.399 3.399 0 1 0 0-6.798a3.399 3.399 0 0 0 0 6.798"></path>
                    </g>
                </svg>
            )
        },
        {
            path: '/security',
            name: 'امنیت',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="1.2em" height="1.2em">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="10" height="8" x="2" y="5.5" rx="1"></rect>
                        <path d="M10.5 5.5V4a3.5 3.5 0 0 0-7 0v1.5"></path>
                        <circle cx="7" cy="9.5" r=".5"></circle>
                    </g>
                </svg>
            )
        },
        {
            path: '/product',
            name: 'محصولات',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" width="1.2em" height="1.2em">
                    <path fill="currentColor" d="m1344 2l704 352v785l-128-64V497l-512 256v258l-128 64V753L768 497v227l-128-64V354zm0 640l177-89l-463-265l-211 106zm315-157l182-91l-497-249l-149 75zm-507 654l-128 64v-1l-384 192v455l384-193v144l-448 224L0 1735v-676l576-288l576 288zm-640 710v-455l-384-192v454zm64-566l369-184l-369-185l-369 185zm576-1l448-224l448 224v527l-448 224l-448-224zm384 576v-305l-256-128v305zm384-128v-305l-256 128v305zm-320-288l241-121l-241-120l-241 120z"></path>
                </svg>
            )
        },
        {
            path: '/chats',
            name: 'گفتگو ها',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.625 12a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0H8.25m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0H12m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.8 9.8 0 0 1-2.555-.337A5.97 5.97 0 0 1 5.41 20.97a6 6 0 0 1-.474-.065a4.5 4.5 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25"></path>
                </svg>
            )
        },
        {
            path: '/Sotry',
            name: 'استوری ها',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                    <path fill="currentColor" d="m15.1 19.37l1 1.74c-.96.44-2.01.73-3.1.84v-2.02c.74-.09 1.44-.28 2.1-.56M4.07 13H2.05c.11 1.1.4 2.14.84 3.1l1.74-1c-.28-.66-.47-1.36-.56-2.1M15.1 4.63l1-1.74c-.96-.44-2-.73-3.1-.84v2.02c.74.09 1.44.28 2.1.56M19.93 11h2.02c-.11-1.1-.4-2.14-.84-3.1l-1.74 1c.28.66.47 1.36.56 2.1M8.9 19.37l-1 1.74c.96.44 2.01.73 3.1.84v-2.02c-.74-.09-1.44-.28-2.1-.56M11 4.07V2.05c-1.1.11-2.14.4-3.1.84l1 1.74c.66-.28 1.36-.47 2.1-.56m7.36 3.1l1.74-1.01c-.63-.87-1.4-1.64-2.27-2.27l-1.01 1.74c.59.45 1.1.96 1.54 1.54M4.63 8.9l-1.74-1c-.44.96-.73 2-.84 3.1h2.02c.09-.74.28-1.44.56-2.1m15.3 4.1c-.09.74-.28 1.44-.56 2.1l1.74 1c.44-.96.73-2.01.84-3.1zm-3.1 5.36l1.01 1.74c.87-.63 1.64-1.4 2.27-2.27l-1.74-1.01c-.45.59-.96 1.1-1.54 1.54M7.17 5.64l-1-1.75c-.88.64-1.64 1.4-2.27 2.28l1.74 1.01a7.7 7.7 0 0 1 1.53-1.54M5.64 16.83l-1.74 1c.63.87 1.4 1.64 2.27 2.27l1.01-1.74a7.7 7.7 0 0 1-1.54-1.53M13 7h-2v5.41l4.29 4.29l1.41-1.41l-3.7-3.7z"></path>
                </svg>
            )
        },
        {
            path: '/users',
            name: 'کاربران',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19.128a9.4 9.4 0 0 0 2.625.372a9.3 9.3 0 0 0 4.121-.952q.004-.086.004-.173a4.125 4.125 0 0 0-7.536-2.32M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.3 12.3 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0a3.375 3.375 0 0 1 6.75 0m8.25 2.25a2.625 2.625 0 1 1-5.25 0a2.625 2.625 0 0 1 5.25 0"></path>
                </svg>
            )
        },
        {
            path: '/orders',
            name: 'پیگیری سفارشات',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="1.2em" height="1.2em">
                    <path fill="none" stroke="currentColor" d="M11 1.5h2.5v12a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-12H4m1 7l2 2l3.5-4m-6-6h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"></path>
                </svg>
            )
        },
        {
            path: '/in-person-sales',
            name: 'فروش حضوری',
            icon: (
                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1.2em" height="1.2em">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                        <path d="M4 12h40v8l-1.398.84a7 7 0 0 1-7.203 0L34 20l-1.398.84a7 7 0 0 1-7.203 0L24 20l-1.398.84a7 7 0 0 1-7.203 0L14 20l-1.399.84a7 7 0 0 1-7.202 0L4 20z"></path>
                        <path d="M8 22.489V44h32V22M8 11.822V4h32v8"></path>
                        <path d="M19 32h10v12H19z"></path>
                    </g>
                </svg>
            )
        },
        {
            path: '/add-category',
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
            path: '/price-color',
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
            path: '/blog',
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
                <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em">
                    <path fill="currentColor" d="m10.2 13.2l-1.05-1.05q.2-.275.275-.562T9.5 11t-.075-.587t-.275-.538L10.2 8.8q.4.475.6 1.05T11 11t-.2 1.138t-.6 1.062m2.125 2.15l-1.075-1.075q.625-.7.938-1.55T12.5 11t-.312-1.712t-.938-1.538l1.075-1.075q.85.925 1.263 2.038T14 11t-.413 2.3t-1.262 2.05M5 12q-.825 0-1.412-.587T3 10t.588-1.412T5 8t1.413.588T7 10t-.587 1.413T5 12m-4 4v-.575q0-.6.325-1.1t.9-.75q.65-.275 1.338-.425T5 13t1.438.15t1.337.425q.575.25.9.75t.325 1.1V16zm18-4q-.825 0-1.412-.587T17 10t.588-1.412T19 8t1.413.588T21 10t-.587 1.413T19 12m-4 4v-.575q0-.6.325-1.1t.9-.75q.65-.275 1.337-.425T19 13t1.437.15t1.338.425q.575.25.9.75t.325 1.1V16z"></path>
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
                    <Link
                        key={index}
                        to={item.path}
                        className={`sidebar-list cs-fs-13 py-3 px-1 d-flex justify-content-start align-items-center ${location.pathname === item.path ? 'active-sidebar-list' : ''}`}
                    >
                        {item.icon}
                        {item.name}
                    </Link>
                ))}
            </div>
            <button className="btn theme-bg-color w-100 mt-4 mx-1 text-light">
                خروج
            </button>
        </div>
    );
};

export default SideBarMenu;