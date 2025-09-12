import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogForm from "./BlogForm";
import PlusIcon from "../icons/PlusIcon";

const blogCategories = [
    { id: 1, name: "موبایل و تبلت" },
    { id: 2, name: "لپ تاپ و کامپیوتر" },
    { id: 3, name: "بازی و سرگرمی " },
    { id: 4, name: " کالا ی دیجیتال " },
    { id: 5, name: "گجت های هوشمند" },
    { id: 6, name: "اپلیکیشن و نرم افزار " },
    { id: 7, name: "آموزش و ترفند" },
    { id: 8, name: "مد و سبک زندگی" },
    { id: 9, name: "خانه و آشپز خانه" },
];

const BlogCategory = () => {
    const [activeBox, setActiveBox] = useState(null);
    const boxRefs = useRef([]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                activeBox !== null &&
                boxRefs.current[activeBox] &&
                !boxRefs.current[activeBox].contains(event.target)
            ) {
                setActiveBox(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeBox]);

    const toggleBox = (index) => {
        setActiveBox((prev) => (prev === index ? null : index));
    };

    return (

        <>


            <BlogForm></BlogForm>

            <Link to='/' className="text-light py-2 cs-fs-14 px-2 border-0 rounded-2 add-pr-mr">
                <PlusIcon></PlusIcon>
                <span className="mx-1">
                    ثبت دسته بندی بلاگ جدید
                </span>
            </Link>
            <div className="d-flex justify-content-center flex-wrap w-100 cs-h-for-pr py-4">
                {blogCategories.map((cat, index) => (
                    <div
                        key={cat.id}
                        ref={(el) => (boxRefs.current[index] = el)}
                        className={`product-card mx-2 px-3 py-3 my-2 ${activeBox === index ? "active" : ""}`}
                        onClick={() => toggleBox(index)}
                    >
                        <div className="d-flex align-items-center gap-2">
                            <span className="cs-fs-14 fw-bold">{cat.id} - {cat.name}</span>
                        </div>

                        {activeBox === index && (
                            <div
                                className="d-flex gap-2 mt-3 action-buttons"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                                    ویرایش
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>

    );
};

export default BlogCategory;
