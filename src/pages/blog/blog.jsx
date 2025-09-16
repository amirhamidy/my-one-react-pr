import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogForm from "./BlogForm";
import PlusIcon from "../icons/PlusIcon";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const blogsData = [
    { id: 1, title: "نقد و بررسی گوشی شیائومی Redmi Note 13 Pro", category: "موبایل", status: "published" },
    { id: 2, title: "راهنمای خرید بهترین لپ‌تاپ‌های 2024", category: "لپ تاپ", status: "unpublished" },
    { id: 3, title: "10 ترفند برای افزایش عمر باتری گوشی", category: "موبایل", status: "published" },
    { id: 4, title: "نقد و بررسی گوشی شیائومی Redmi Note 13 Pro", category: "موبایل", status: "published" },
    { id: 5, title: "راهنمای خرید بهترین لپ‌تاپ‌های 2024", category: "لپ تاپ", status: "unpublished" },
    { id: 6, title: "10 ترفند برای افزایش عمر باتری گوشی", category: "موبایل", status: "published" },
];

export default function BlogsGrid() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [loading, setLoading] = useState(true);
    const blogRefs = useRef([]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeIndex !== null && blogRefs.current[activeIndex] && !blogRefs.current[activeIndex].contains(event.target)) {
                setActiveIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeIndex]);

    const handleClick = (index) => setActiveIndex(activeIndex === index ? null : index);

    const skeletonArray = Array.from({ length: 6 });

    return (
        <>
            <BlogForm />

            <Link to='/' className="text-light py-2 cs-fs-14 px-2 border-0 rounded-2 add-pr-mr">
                <PlusIcon />
                <span className="mx-1">ثبت بلاگ جدید</span>
            </Link>

            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4  ">
                {(loading ? skeletonArray : blogsData).map((blog, index) => (
                    <div
                        key={loading ? index : blog.id}
                        ref={(el) => (blogRefs.current[index] = el)}
                        className={`product-card mx-3 my-2 ${!loading && activeIndex === index ? "active" : ""}`}
                        style={{ padding: "15px", minWidth: "250px" }}
                    >
                        {loading ? (
                            <div style={{
                                width: "100%",
                                padding: "20px",
                                borderRadius: "0.5rem"
                            }}>
                                <Skeleton height={13} width={270} style={{ marginBottom: "5px", borderRadius: "0.5rem", backgroundColor: "#e0e0e0", textAlign: 'center' }} />
                                <Skeleton height={13} width={200} style={{ marginBottom: "5px", borderRadius: "0.5rem", backgroundColor: "#e0e0e0", textAlign: 'center' }} />
                                <Skeleton height={13} width={250} style={{ marginBottom: "5px", borderRadius: "0.5rem", backgroundColor: "#e0e0e0", textAlign: 'center' }} />
                                <Skeleton height={13} width={260} style={{ borderRadius: "0.5rem", backgroundColor: "#e0e0e0" }} />
                            </div>
                        ) : (
                            <>
                                <div className="product-content" onClick={() => handleClick(index)}>
                                    <div className="product-info">
                                        <p className="product-name w-right justify-content-start w-100">شماره بلاگ: {blog.id}</p>
                                        <p className="product-category w-right justify-content-start w-100">عنوان: {blog.title}</p>
                                        <p className="product-code w-right justify-content-start w-100">دسته‌بندی: {blog.category}</p>
                                        <p className={`product-status w-right justify-content-start w-100 ${blog.status === "published" ? "published" : "unpublished"}`}>
                                            وضعیت: {blog.status === "published" ? "منتشر شده" : "منتشر نشده"}
                                        </p>
                                    </div>
                                </div>

                                {activeIndex === index && (
                                    <div
                                        style={{
                                            msFlexDirection: "column",
                                            position: "absolute",
                                            top: "25%",
                                            left: "10%",
                                            flexDirection: "column",
                                            display: "flex",
                                            gap: "0.1rem",
                                            transition: "0.3s",
                                            animation: "fadeIn 0.3s ease forwards",
                                        }}
                                        className="product-actions"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">ویرایش</button>
                                        <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">نمایش</button>
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
