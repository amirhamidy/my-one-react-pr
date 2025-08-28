

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const colorsData = [
    { id: 1, name: "قرمز", hex: "red" },
    { id: 2, name: "آبی", hex: "blue" },
    { id: 3, name: "سبز", hex: "green" },
    { id: 4, name: "زرد", hex: "yellow" },
    { id: 5, name: "بنفش", hex: "purple" },
    { id: 6, name: "مشکی", hex: "black" },
    { id: 7, name: "نارنجی", hex: "orange" },
    { id: 8, name: "فیروزه‌ای", hex: "turquoise" },
    { id: 9, name: "صورتی", hex: "pink" },
    { id: 10, name: "خاکستری", hex: "gray" },
    { id: 11, name: "کرم", hex: "wormy" },
    { id: 12, name: "سبز تیره", hex: "drakgreen" },
    { id: 13, name: "آبی تیره", hex: "darkblue" },
    { id: 14, name: "بژ", hex: "beige" },
    { id: 15, name: "ارغوانی", hex: "darkpurple" },
];

const ColorList = () => {
    const [activeColor, setActiveColor] = useState(null);
    const colorRefs = useRef([]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                activeColor !== null &&
                !colorRefs.current[activeColor].contains(event.target)
            ) {
                setActiveColor(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeColor]);

    const toggleActiveColor = (index) => {
        setActiveColor(activeColor === index ? null : index);
    };

    return (

        <>


            <form className="w-100 d-flex justify-content-start align-items-baseline  text-center flex-wrap px-3 py-4 mb-2 container cs-bg rounded-1">
                <div className="px-2 w-right text-light cs-fs-14  text-right w-25">
                    <input className="form-control-custom rounded-1" type="text" placeholder="عنوان رنگ ....." />
                </div>
            </form>

            <Link to='/Addstory' className="text-light btn add-pr-mr">
                رنگ جدید
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
            <div className="d-flex justify-content-center flex-wrap w-100 cs-h-for-pr py-4">
                {colorsData.map((color, index) => (
                    <div
                        key={color.id}
                        ref={(el) => (colorRefs.current[index] = el)}
                        className={`product-card mx-3 my-2 ${activeColor === index ? "active" : ""}`}
                    >
                        <div
                            className="product-content d-flex flex-column align-items-center justify-content-center"
                            onClick={() => toggleActiveColor(index)}
                        >
                            <div
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%",
                                    backgroundColor: color.hex,
                                    border: "1px solid #ddd",
                                }}
                            ></div>
                            <p className="product-name mt-2">{color.name}</p>
                        </div>

                        {activeColor === index && (
                            <div className="action-buttons">
                                <button className="action-btn edit-btn">ویرایش</button>
                                <button className="action-btn delete-btn">حذف</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>

    );
};

export default ColorList;
