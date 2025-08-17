import { useState, useRef, useEffect } from "react";

const productsData = [
    { code: "P001", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", category: "موبایل", status: "published" },
    { code: "P002", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", category: "موبایل", status: "unpublished" },
    { code: "P003", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", category: "موبایل", status: "published" },
    { code: "P004", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", category: "موبایل", status: "published" },
    { code: "P005", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", category: "موبایل", status: "unpublished" },
    { code: "P006", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", category: "موبایل", status: "published" },
    { code: "P007", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", category: "موبایل", status: "published" },
    { code: "P008", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", category: "موبایل", status: "unpublished" },
    { code: "P009", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", category: "موبایل", status: "published" },
    { code: "P010", name: "محصول دهم", category: "دسته A", status: "published" },
];

export default function ProductsGrid() {
    const [activeIndex, setActiveIndex] = useState(null);
    const productRefs = useRef([]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeIndex !== null && !productRefs.current[activeIndex].contains(event.target)) {
                setActiveIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [activeIndex]);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (

        <>
            <div className="w-100 mb-3">
                <form className="w-100 d-flex justify-content-center align-items-center text-center flex-wrap px-3 py-3 mb-2 mt-5 container cs-bg rounded-1">
                    <div className="px-2 my-2 w-right text-light cs-fs-14  text-right w-50">
                        جستجوی محصول
                        <input className="form-control-custom my-2 rounded-1" type="text" placeholder="کد محصول یا نام محصول و .... " />
                    </div>
                    <div className="px-2 my-2 w-right text-light cs-fs-14 d-flex justify-content-around  text-right w-100">

                        <span>........</span>
                        <span>........</span>
                        <span>........</span>
                        <span>........</span>
                        <span>........</span>

                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr">
                {productsData.map((product, index) => (
                    <div
                        key={product.code}
                        ref={el => productRefs.current[index] = el}
                        className={`product-card mx-3 my-2 ${activeIndex === index ? "active" : ""}`}
                    >
                        <div className="product-content" onClick={() => handleClick(index)}>
                            <div className="product-info">
                                <p className="product-code">کد: {product.code}</p>
                                <p className="product-name">{product.name}</p>
                                <p className="product-category">دسته بندی :  {product.category} </p>
                                <p className={`product-status ${product.status}`}>
                                    وضعیت: {product.status === "published" ? "نمایش " : "عدم نمایش"}
                                </p>
                            </div>
                        </div>

                        {activeIndex === index && (
                            <div className="product-actions" onClick={(e) => e.stopPropagation()}>
                                <button className="action-btn edit-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="2em"
                                        height="2em"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13l.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71l-5.3 5.3V21h2.12l5.3-5.3z"
                                        ></path>
                                    </svg>
                                    ویرایش
                                </button>
                                <button className="action-btn view-btn">
                                    <svg className="mx-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        width="1.3em"
                                        height="2em"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5m3.945 2.652c.94.6 1.737 1.403 2.335 2.348a7.6 7.6 0 0 1-2.335 2.348a7.33 7.33 0 0 1-7.889 0A7.6 7.6 0 0 1 1.721 8a7.6 7.6 0 0 1 2.52-2.462a4 4 0 1 0 7.518 0q.093.056.185.114zM8 6.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 6.5"
                                        ></path>
                                    </svg>
                                    مشاهده
                                </button>
                                <button className="action-btn delete-btn text-nowrap">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width="2em"
                                        height="2em"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M490.667 448v42.667H384V448zm-128 0v42.667H320V448zm128-64v42.667H384V384zm-128 0v42.667H320V384zm-64 0v42.667H64V384zm192-64v42.667H384V320zm-128 0v42.667H320V320zM256 42.667v210.56l93.013-77.653l27.307 32.853L234.667 326.4L93.013 208.427l27.307-32.853l93.013 77.653V42.667z"
                                        ></path>
                                    </svg>
                                    گرفتن مشخصات
                                </button>
                                <button className="action-btn share-btn">
                                    <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.3em" height="2em">
                                        <path fill="currentColor" d="M8 .5C3.58.5 0 3.86 0 8s3.58 7.5 8 7.5c4.69 0 1.04-2.83 2.79-4.55c.76-.75 1.63-.87 2.44-.87c.37 0 .73.03 1.06.03c.99 0 1.72-.23 1.72-2.1C16 3.86 12.42.5 8 .5m6.65 8.32c-.05.01-.16.02-.37.02c-.14 0-.29 0-.45-.01c-.19 0-.39-.01-.61-.01c-.89 0-2.19.13-3.32 1.23c-1.17 1.16-.9 2.6-.74 3.47c.03.18.08.44.09.6c-.16.05-.52.13-1.26.13c-3.72 0-6.75-2.8-6.75-6.25S4.28 1.75 8 1.75s6.75 2.8 6.75 6.25c0 .5-.06.74-.1.82"></path>
                                        <path fill="currentColor" d="M5.9 9.47c-1.03 0-1.86.8-1.86 1.79s.84 1.79 1.86 1.79s1.86-.8 1.86-1.79s-.84-1.79-1.86-1.79m0 2.35c-.35 0-.64-.25-.64-.56s.29-.56.64-.56s.64.25.64.56s-.29.56-.64.56m-.2-4.59c0-.99-.84-1.79-1.86-1.79s-1.86.8-1.86 1.79s.84 1.79 1.86 1.79s1.86-.8 1.86-1.79m-1.86.56c-.35 0-.64-.25-.64-.56s.29-.56.64-.56s.64.25.64.56s-.29.56-.64.56M7.37 2.5c-1.03 0-1.86.8-1.86 1.79s.84 1.79 1.86 1.79s1.86-.8 1.86-1.79S8.39 2.5 7.37 2.5m0 2.35c-.35 0-.64-.25-.64-.56s.29-.56.64-.56s.64.25.64.56s-.29.56-.64.56m2.47 1.31c0 .99.84 1.79 1.86 1.79s1.86-.8 1.86-1.79s-.84-1.79-1.86-1.79s-1.86.8-1.86 1.79m2.5 0c0 .31-.29.56-.64.56s-.64-.25-.64-.56s.29-.56.64-.56s.64.25.64.56"></path>
                                    </svg>
                                    گرفتن رنگ و قیمت
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}