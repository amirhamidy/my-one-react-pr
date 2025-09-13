import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BrandForm from "./BrandForm";
import PlusIcon from "../icons/PlusIcon";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BrandBox from "./BrandBox";

export default function BrandsGrid() {
    const [brandsData, setBrandsData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [loading, setLoading] = useState(true);
    const brandRefs = useRef([]);

    const fetchBrands = useCallback(() => {
        setLoading(true);
        axios.get("https://manmarket.ir/product/api/v1/brand/")
            .then(res => {
                setBrandsData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching brands:", err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetchBrands();
    }, [fetchBrands]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeIndex !== null && brandRefs.current[activeIndex] &&
                !brandRefs.current[activeIndex].contains(event.target)) {
                setActiveIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeIndex]);

    const handleClick = useCallback((index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    }, []);

    const handleActionClick = useCallback((action, brand) => {
        console.log("Action:", action, "Brand:", brand);
    }, []);

    const skeletonArray = Array.from({ length: 6 });

    return (
        <>
            <BrandForm />
            <Link
                to="/add-brand/add"
                className="text-light py-2 cs-fs-14 px-2 border-0 rounded-2 add-pr-mr"
            >
                <PlusIcon />
                <span className="mx-1">ثبت برند جدید</span>
            </Link>

            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
                {brandsData.map((brand, index) => (
                    <BrandBox 
                        key={brand.id}
                        ref={(el) => (brandRefs.current[index] = el)}
                        brand={brand}
                        isActive={activeIndex === index}
                        onClick={() => handleClick(index)}
                        onActionClick={handleActionClick}
                    />
                ))}

                {loading && skeletonArray.map((_, index) => (
                    <div key={`skeleton-${index}`} className="product-card mx-3 my-2">
                        <div className="product-content">
                            <Skeleton height={150} />
                            <p className="product-name cs-fs-14"><Skeleton width={120} /></p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
