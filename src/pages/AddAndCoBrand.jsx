

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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

            <form className="w-100 d-flex justify-content-start align-items-baseline  text-center flex-wrap px-3 py-4 mb-2 container cs-bg rounded-1">
                <div className="px-2 w-right text-light cs-fs-14  text-right w-25">
                    <input className="form-control-custom rounded-1" type="text" placeholder="عنوان برند ....." />
                </div>
            </form>

            <Link to='/Addstory' className="text-light btn add-pr-mr">
                برند جدید
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

export default Brands;
