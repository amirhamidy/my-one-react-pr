

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import BrandForm from "./brandForm";
import PlusIcon from "../icons/PlusIcon";

const brandsData = [
    { id: 1, name: "شیائومی", img: "src/assets/img/category/xiaomi.png" },
    { id: 2, name: "سامسونگ", img: "src/assets/img/category/samsung.png" },
    { id: 3, name: "اپل", img: "src/assets/img/category/Apple.png" },
    { id: 4, name: "هانر", img: "src/assets/img/category/Honor.png" },
    { id: 5, name: "نوکیا", img: "src/assets/img/category/nokia.png" },
    { id: 6, name: "ام اس ای", img: "src/assets/img/category/msi.png" },
    { id: 7, name: "شیائومی", img: "src/assets/img/category/xiaomi.png" },
    { id: 8, name: "سامسونگ", img: "src/assets/img/category/samsung.png" },
    { id: 9, name: "اپل", img: "src/assets/img/category/Apple.png" },
    { id: 10, name: "هانر", img: "src/assets/img/category/Honor.png" },
    { id: 11, name: "نوکیا", img: "src/assets/img/category/nokia.png" },
    { id: 12, name: "ام اس ای", img: "src/assets/img/category/msi.png" },
];

const Brands = () => {
    const [activeBrand, setActiveBrand] = useState(null);
    const brandRefs = useRef([]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                activeBrand !== null &&
                !brandRefs.current[activeBrand].contains(event.target)
            ) {
                setActiveBrand(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeBrand]);

    const toggleActiveBrand = (index) => {
        setActiveBrand(activeBrand === index ? null : index);
    };

    return (


        <>

            <BrandForm></BrandForm>

            <Link to='/add-brand/add' className="text-light py-2 cs-fs-14 px-2 border-0 rounded-2 add-pr-mr">
                <PlusIcon></PlusIcon>
                <span className="mx-1">
                    ثبت برند جدید
                </span>
            </Link>
            <div className="d-flex justify-content-center flex-wrap w-100 cs-h-for-pr py-4">
                {brandsData.map((brand, index) => (
                    <div
                        key={brand.id}
                        ref={(el) => (brandRefs.current[index] = el)}
                        className={`product-card mx-3 my-2 ${activeBrand === index ? "active" : ""}`}
                    >
                        <div className="product-content d-flex flex-column align-items-center justify-content-center"
                            onClick={() => toggleActiveBrand(index)}>
                            <img src={brand.img} alt={brand.name} style={{ width: "60px", height: "60px", borderRadius: "8px" }} />
                            <p className="product-name mt-2">{brand.name}</p>
                        </div>

                        {activeBrand === index && (
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

export default Brands;
