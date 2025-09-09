import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CTAForm from "./CTAForm";

const categories = [
    { id: 1, name: "الکترونیک", img: "../vite.svg" },
    { id: 2, name: "پوشاک", img: "../vite.svg" },
    { id: 3, name: "کتاب", img: "../vite.svg" },
    { id: 4, name: "لوازم خانگی", img: "../vite.svg" },
    { id: 5, name: "زیبایی و سلامت", img: "../vite.svg" },
    { id: 6, name: "ورزشی", img: "../vite.svg" },
    { id: 7, name: "مادر و کودک", img: "../vite.svg" },
    { id: 8, name: "سوپرمارکت", img: "../vite.svg" },
    { id: 9, name: "موسیقی و فیلم", img: "../vite.svg" },
    { id: 10, name: "سرگرمی", img: "../vite.svg" },
    { id: 11, name: "الکترونیک", img: "../vite.svg" },
    { id: 12, name: "پوشاک", img: "../vite.svg" },
    { id: 13, name: "کتاب", img: "../vite.svg" },
    { id: 14, name: "لوازم خانگی", img: "../vite.svg" },
    { id: 15, name: "زیبایی و سلامت", img: "../vite.svg" },
    { id: 16, name: "ورزشی", img: "../vite.svg" },
    { id: 17, name: "مادر و کودک", img: "../vite.svg" },
    { id: 18, name: "سوپرمارکت", img: "../vite.svg" },
    { id: 19, name: "موسیقی و فیلم", img: "../vite.svg" },
    { id: 20, name: "سرگرمی", img: "../vite.svg" },
];

const AddCta = () => {
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

    const toggleBox = (id) => {
        setActiveBox((prev) => (prev === id ? null : id));
    };

    return (
        <>
            <CTAForm></CTAForm>
            <Link to='/AddCategory/add' className="text-light py-2 cs-fs-14 px-2 border-0 rounded-2 add-pr-mr">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.2em"
                    height="1.2em"
                >
                    <path
                        fill="currentColor"
                        d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                    ></path>
                </svg>
                <span className="mx-1">
                    ثبت دسته بندی جدید
                </span>
            </Link>
            <div className="d-flex justify-content-center flex-wrap w-100 cs-h-for-pr py-4">
                {categories.map((cat, index) => (
                    <div
                        key={cat.id}
                        ref={(el) => (boxRefs.current[index] = el)}
                        className={`product-card mx-2 px-3 py-3 my-2 ${activeBox === index ? "active" : ""
                            }`}
                        onClick={() => toggleBox(index)}
                    >
                        <div className="d-flex align-items-center gap-2">
                            <img src={cat.img} alt={cat.name} style={{ width: 40, height: 40, borderRadius: 5 }} />
                            <span className="cs-fs-14 fw-bold ">{cat.name}</span>
                        </div>

                        {activeBox === index && (
                            <div style={{ top: " 0%", left: "18%" }}
                                className="d-flex gap-2 mt-3 action-buttons"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                                    ویرایش
                                </button>
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                                    حذف
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default AddCta;
