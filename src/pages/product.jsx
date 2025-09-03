import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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
    { code: "P0011", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", category: "موبایل", status: "unpublished" },
    { code: "P0012", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", category: "موبایل", status: "published" },
    { code: "P0013", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", category: "موبایل", status: "published" },
    { code: "P0014", name: "محصول دهم", category: "دسته A", status: "published" },
    { code: "P0015", name: "محصول دهم", category: "دسته A", status: "published" },

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
            <div className="w-100 pb-3">
                <form className="w-100 d-flex justify-content-around align-items-baseline  text-center flex-wrap px-3 py-4 mb-2 container cs-bg rounded-1">
                    <div className="px-2 w-right text-light cs-fs-14  text-right w-25">
                        <input className="form-control-custom rounded-1" type="text" placeholder="کد محصول یا نام محصول و .... " />
                    </div>
                    <div className="px-2 my-2 w-right text-light cs-fs-14 d-flex justify-content-around text-right w-75">
                        <ul className="fill-titr align-items-center">
                            دسته بندی
                            <svg className="mx-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1.2em"
                                height="1.2em"
                            >
                                <path
                                    fill="currentColor"
                                    d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M9 9H5V5h4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 6h-4V5h4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6H5v-4h4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2"
                                ></path>
                            </svg>
                            <ul className="fill-list">
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                            </ul>
                        </ul>
                        <ul className="fill-titr">
                            وضعیت نمایش
                            <svg className="mx-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                width="1em"
                                height="1em"
                            >
                                <path
                                    fill="currentColor"
                                    d="M8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5m3.945 2.652c.94.6 1.737 1.403 2.335 2.348a7.6 7.6 0 0 1-2.335 2.348a7.33 7.33 0 0 1-7.889 0A7.6 7.6 0 0 1 1.721 8a7.6 7.6 0 0 1 2.52-2.462a4 4 0 1 0 7.518 0q.093.056.185.114zM8 6.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 6.5"
                                ></path>
                            </svg>

                            <ul className="fill-list">
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                            </ul>
                        </ul>
                        <ul className="fill-titr">
                            برند
                            <svg className="mx-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1.2em"
                                height="1.2em"
                            >
                                <path
                                    fill="currentColor"
                                    d="M15.778 8.208c-.473-.037-.98.076-1.758.373c.065-.025-.742.29-.969.37c-.502.175-.915.271-1.378.271c-.458 0-.88-.092-1.365-.255a11 11 0 0 1-.505-.186l-.449-.177c-.648-.254-1.012-.35-1.315-.342c-1.153.014-2.243.68-2.877 1.782c-1.292 2.243-.576 6.299 1.313 9.031c1.005 1.444 1.556 1.96 1.777 1.953c.222-.01.386-.057.784-.225l.166-.071c1.006-.429 1.71-.618 2.771-.618c1.021 0 1.703.186 2.669.602l.168.072c.397.17.54.208.792.202c.357-.005.798-.417 1.777-1.854c.268-.391.505-.803.71-1.22a7 7 0 0 1-.391-.347c-1.29-1.228-2.087-2.884-2.109-4.93A6.63 6.63 0 0 1 17 8.458a4.1 4.1 0 0 0-1.221-.25m.155-1.994c.708.048 2.736.264 4.056 2.196c-.108.06-2.424 1.404-2.4 4.212c.036 3.36 2.94 4.476 2.976 4.488c-.024.084-.468 1.596-1.536 3.156c-.924 1.356-1.884 2.7-3.396 2.724c-1.488.036-1.968-.876-3.66-.876c-1.704 0-2.232.852-3.636.912c-1.464.048-2.568-1.464-3.504-2.808c-1.908-2.76-3.36-7.776-1.404-11.172c.972-1.692 2.7-2.76 4.584-2.784c1.428-.036 2.784.96 3.66.96c.864 0 2.412-1.152 4.26-1.008m-1.14-1.824c-.78.936-2.052 1.668-3.288 1.572c-.168-1.272.456-2.604 1.176-3.432c.804-.936 2.148-1.632 3.264-1.68c.144 1.296-.372 2.604-1.152 3.54"
                                ></path>
                            </svg>
                            <ul className="fill-list">
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                            </ul>
                        </ul>
                        <ul className="fill-titr">
                            مرتب سازی
                            <svg className="mx-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1.3em"
                                height="1.3em"
                            >
                                <path
                                    fill="currentColor"
                                    d="M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 6.9a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M8 11h13v2H8zm0 7h13v2H8z"
                                ></path>
                            </svg>
                            <ul className="fill-list">
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                                <li>این یک نمونه تست هست</li>
                            </ul>
                        </ul>
                    </div>
                </form>
                <Link to='/product/Addproduct' className="text-light btn add-pr-mr">
                    محصول جدید
                    <svg className="mx-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="1em"
                        height="1em"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                    </svg>
                </Link>
            </div>
            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
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
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                                    ویرایش
                                </button>
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                                    مشاهده
                                </button>
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                                    گرفتن مشخصات
                                </button>
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
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