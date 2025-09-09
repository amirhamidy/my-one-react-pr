import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductForm from "./ProductForm";

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
            <ProductForm></ProductForm>
            <Link to='/product/Addproduct' className="text-light py-2 px-3 border-0 rounded-2 add-pr-mr">
                محصول جدید
            </Link>
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