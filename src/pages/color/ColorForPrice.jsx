import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ColorForm from "./colorForm";
import EditBtn from "../BTN/EdtiBtn";
import GoToColor from "../BTN/GoToColor";
import SeenToSite from "../BTN/SeenToSite";

const sampleProducts = [
    { code: "P001",ProductCTA : "موبایل" , name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "published" },
    { code: "P002",ProductCTA : "موبایل" , name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "unpublished" },
    { code: "P003",ProductCTA : "موبایل" , name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "published" },
    { code: "P004",ProductCTA : "موبایل" , name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "unpublished" },
    { code: "P005",ProductCTA : "موبایل" , name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "published" },
    { code: "P006",ProductCTA : "موبایل" , name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "unpublished" },
    { code: "P007",ProductCTA : "موبایل" , name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "published" },
    { code: "P008",ProductCTA : "موبایل" , name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "unpublished" },
    { code: "P009",ProductCTA : "موبایل" , name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "published" },

];

export default function ColoForProduct({ products = sampleProducts }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const productRefs = useRef([]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeIndex !== null && !productRefs.current[activeIndex]?.contains(event.target)) {
                setActiveIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeIndex]);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
                <ColorForm></ColorForm>

            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
                {products.map((product, index) => (
                    <div
                        key={product.code}
                        className={`product-card mx-3 my-2 ${activeIndex === index ? "active" : ""}`}
                    >
                        <div className="product-content" onClick={() => handleClick(index)}>
                            <div className="product-info">
                                <p className="product-code">کد: {product.code}</p>
                                <p className="product-name">{product.name}</p>
                                <p className="product-category "> دسته بندی :  {product.ProductCTA}</p>
                                <p className={`product-status ${product.status}`}>
                                    وضعیت: {product.status === "published" ? "نمایش" : "عدم نمایش"}
                                </p>
                            </div>
                        </div>

                        {activeIndex === index && (
                            <div className="product-actions" onClick={(e) => e.stopPropagation()}>
                                <EditBtn></EditBtn>
                                <GoToColor></GoToColor>
                                <SeenToSite></SeenToSite>
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                                    نمایش برای ادمین
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
