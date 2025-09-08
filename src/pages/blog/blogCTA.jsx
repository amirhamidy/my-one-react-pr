import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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


          <form className="w-100 d-flex justify-content-around align-items-baseline text-center flex-wrap px-3 py-4 mb-2 container cs-bg rounded-1">
                <div className="px-2 w-right text-light cs-fs-14 text-right w-25">
                    <input
                        className="form-control-custom rounded-1"
                        type="text"
                        placeholder=" جستجوی دسته بندی.... "
                    />
                </div>
                <div className="px-2 my-2 w-right text-light cs-fs-14 d-flex justify-content-around text-right w-75"></div>
            </form>

            <Link to="" className="text-light btn add-pr-mr">
                ایجاد دسته بندی جدید 
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
