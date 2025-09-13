import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CTAForm from "./CTAForm";
import PlusIcon from "../icons/PlusIcon";
import axios from "axios";



const AddCta = () => {
    const [activeBox, setActiveBox] = useState(null);
    const boxRefs = useRef([]);
    const [categories , Setcategories] = useState([]);


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


    axios.get('https://manmarket.ir/product/api/v1/category/').then(res=>{
        Setcategories(res.data)
    })
    //     alert('ارور توی دسته بندی ')
    // })

    const toggleBox = (id) => {
        setActiveBox((prev) => (prev === id ? null : id));
    };

    return (
        <>
            <CTAForm></CTAForm>
            <Link to='/AddCategory/add' className="text-light py-2 cs-fs-14 px-2 border-0 rounded-2 add-pr-mr">
                <PlusIcon></PlusIcon>
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
                            } ${cat.image ? '' : 'd-none'}`}
                        onClick={() => toggleBox(index)}
                    >
                        <div className="d-flex align-items-center gap-2">
                            <img src={cat.image} alt={cat.title} style={{ width: 70, height: 70, borderRadius: 5 }} />
                            <span className="cs-fs-14 fw-bold ">{cat.title}</span>
                        </div>

                        {activeBox === index && (
                            <div style={{ top: " 0", left: "18%" }}
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
