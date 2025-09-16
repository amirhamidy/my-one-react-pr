import { useState, useRef, useEffect } from "react";
import ColorForm from "./colorForm";
import PlusIcon from "../icons/PlusIcon";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const colorsData = [
    { id: 1, name: "قرمز", hex: "#FF0000" },
    { id: 2, name: "آبی", hex: "#0000FF" },
    { id: 3, name: "سبز", hex: "#008000" },
    { id: 4, name: "زرد", hex: "#FFFF00" },
    { id: 5, name: "بنفش", hex: "#800080" },
    { id: 6, name: "مشکی", hex: "#000000" },
    { id: 7, name: "نارنجی", hex: "#FFA500" },
    { id: 8, name: "فیروزه‌ای", hex: "#40E0D0" },
];

const ColorList = () => {
    const [activeColor, setActiveColor] = useState(null);
    const [loading, setLoading] = useState(true);
    const colorRefs = useRef([]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeColor !== null && colorRefs.current[activeColor] && !colorRefs.current[activeColor].contains(event.target)) {
                setActiveColor(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeColor]);

    const toggleActiveColor = (index) => setActiveColor(activeColor === index ? null : index);

    return (
        <>
            <ColorForm />
            <button className="text-light py-2 cs-fs-14 px-2 border-0 rounded-2 add-pr-mr">
                <PlusIcon />
                <span className="mx-1">ثبت رنگ جدید</span>
            </button>

            <div className="d-flex justify-content-center flex-wrap w-100 cs-h-for-pr py-4">
                {(loading ? Array.from({ length: 8 }) : colorsData).map((color, index) => (
                    <div
                        key={loading ? index : color.id}
                        ref={(el) => (colorRefs.current[index] = el)}
                        className={`product-card mx-3 my-2 ${!loading && activeColor === index ? "active" : ""}`}
                        style={{
                            borderRadius: loading ? "1rem" : "0.5rem",
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "100px",
                            minHeight: "130px",
                        }}
                    >
                        {loading ? (
                            <>
                                <Skeleton circle height={50} width={50} />
                                <Skeleton width={60} height={20} style={{ marginTop: "10px" }} />
                            </>
                        ) : (
                            <>
                                <div
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                        backgroundColor: color.hex,
                                        border: "1px solid #ddd",
                                    }}
                                />
                                <p className="product-name mt-2">{color.name}</p>
                            </>
                        )}

                        {!loading && activeColor === index && (
                            <div className="product-actions" style={{ msFlexDirection: "column", position: "absolute", top: "15%", left: "10%", flexDirection: "column", display: "flex", gap: "0.1rem", transition: "0.3s", animation: "fadeIn 0.3s ease forwards" }}>
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">ویرایش</button>
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">حذف</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ColorList;
