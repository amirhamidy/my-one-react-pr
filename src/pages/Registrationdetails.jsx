

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const productRegistrationdetails = [
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

export default function Registrationdetails() {
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
            <form className="w-100 d-flex justify-content-start align-items-baseline  text-center flex-wrap px-3 py-4 mb-2 container cs-bg rounded-1">
                <div className="px-2 w-right text-light cs-fs-14  text-right w-25">
                    <input className="form-control-custom rounded-1" type="text" placeholder="جستجوی کالا ...." />
                </div>
            </form>
            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
                {productRegistrationdetails.map((product, index) => (
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
                            <div style={{ msFlexDirection: "column", position: "absolute", top: "15%", left: "20%", flexDirection: "column", display: "flex", gap: "0.1rem", transition: "0.3s", animation: "fadeIn 0.3s ease forwards", }} onClick={(e) => e.stopPropagation()}>
                                <button className="edit-btn border-none rounded-2 cs-fs-13 px-3 py-2">
                                    <svg className="mx-1"
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
                                <button className="edit-btn border-none rounded-2 cs-fs-13 px-3 py-2">
                                    <svg className="mx-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="1.5em"
                                        height="1.5em"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M6.448 1.75h.104c.898 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v11.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08h-.104c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242V6.448c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M4.405 3.317c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v11c0 .964.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095v-11c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3C8.112 3.253 7.464 3.25 6.5 3.25s-1.612.002-2.095.067m13.043 7.433h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242v2.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08h-.104c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-2.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.343-.08 2.242-.08m-2.043 1.566c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094v2c0 .964.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095v-2c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066s-1.612.002-2.095.066m1.07-10.566c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.12.29-.167.59-.188.907c-.021.304-.021.675-.021 1.12v.05c0 .445 0 .816.02 1.12c.022.317.07.617.19.907a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h2.05c.445 0 .816 0 1.12-.02a2.8 2.8 0 0 0 .907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.8 2.8 0 0 0-.19-.907a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021zm-1.453 1.595c.077-.032.194-.061.435-.078c.247-.017.567-.017 1.043-.017h2c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435c.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017h-2c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 14.25 5.5c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435c.127-.307.37-.55.677-.677"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    رفتن به مشخصات
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}