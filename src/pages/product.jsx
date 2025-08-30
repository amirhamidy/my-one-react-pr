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
    { code: "P014", name: "محصول دهم", category: "دسته A", status: "published" },
    { code: "P015", name: "محصول دهم", category: "دسته A", status: "published" },

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
                <Link to='/Addproduct' className="text-light btn add-pr-mr">
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
                                <button className="action-btn edit-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="1.5em"
                                        height="1.5em"
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
                                        width="1.2em"
                                        height="1.2em"
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
                                        width="1.5em"
                                        height="1.5em"
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
                                    <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.2em" height="1.2em">
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