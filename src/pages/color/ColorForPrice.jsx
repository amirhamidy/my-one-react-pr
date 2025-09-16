import { useState, useRef, useEffect } from "react";
import ColorForm from "./colorForm";
import EditBtn from "../BTN/EdtiBtn";
import GoToColor from "../BTN/GoToColor";
import SeenToSite from "../BTN/SeenToSite";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const sampleProducts = [
    { code: "P001", ProductCTA: "موبایل", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "published" },
    { code: "P002", ProductCTA: "موبایل", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "unpublished" },
    { code: "P003", ProductCTA: "موبایل", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "published" },
    { code: "P004", ProductCTA: "موبایل", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "unpublished" },
    { code: "P005", ProductCTA: "موبایل", name: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال", status: "published" },
];

export default function ColoForProduct({ products = sampleProducts }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const [loading, setLoading] = useState(true);
    const productRefs = useRef([]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeIndex !== null && productRefs.current[activeIndex] && !productRefs.current[activeIndex].contains(event.target)) {
                setActiveIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeIndex]);

    const handleClick = (index) => setActiveIndex(activeIndex === index ? null : index);

    return (
        <>
            <ColorForm />
            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
                {(loading ? Array.from({ length: 5 }) : products).map((product, index) => (
                    <div
                        key={loading ? index : product.code}
                        ref={(el) => (productRefs.current[index] = el)}
                        className={`product-card mx-3 my-3 ${!loading && activeIndex === index ? "active" : ""}`}
                        style={{
                            borderRadius: "0.5rem",
                            padding: "15px",
                            minWidth: "250px",
                        }}
                    >
                        {loading ? (
                            <div style={{ width: "100%" }}>
                                <Skeleton width="60%" height={20} style={{ marginBottom: "16px", backgroundColor: "#e0e0e0", borderRadius: "0.5rem" }} />
                                <Skeleton width="80%" height={20} style={{ marginBottom: "16px", backgroundColor: "#e0e0e0", borderRadius: "0.5rem" }} />
                                <Skeleton width="90%" height={20} style={{ marginBottom: "16px", backgroundColor: "#e0e0e0", borderRadius: "0.5rem" }} />
                                <Skeleton width="70%" height={20} style={{ backgroundColor: "#e0e0e0", borderRadius: "0.5rem" }} />
                            </div>
                        ) : (
                            <>
                                <div className="product-content" onClick={() => handleClick(index)}>
                                    <div className="product-info">
                                        <p className="product-code">کد: {product.code}</p>
                                        <p className="product-name">{product.name}</p>
                                        <p className="product-category">دسته بندی : {product.ProductCTA}</p>
                                        <p className={`product-status ${product.status}`}>
                                            وضعیت: {product.status === "published" ? "نمایش" : "عدم نمایش"}
                                        </p>
                                    </div>
                                </div>

                                {activeIndex === index && (
                                    <div className="product-actions" onClick={(e) => e.stopPropagation()}>
                                        <EditBtn />
                                        <GoToColor />
                                        <SeenToSite />
                                        <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                                            نمایش برای ادمین
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
