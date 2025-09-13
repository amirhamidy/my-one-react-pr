import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductForm from "./ProductForm";
import PlusIcon from "../icons/PlusIcon";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProductBox from "./ProductBox";

export default function ProductsGrid() {
    const [ProductsData, SetProductsData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(null);
    const productRefs = useRef([]);
    const observer = useRef(null);

    const fetchProducts = useCallback((url) => {
        setLoading(true);
        axios.get(url)
            .then(res => {
                SetProductsData(prev => {
                    const newProducts = res.data.results.filter(
                        p => !prev.some(existing => existing.id === p.id)
                    );
                    return [...prev, ...newProducts];
                });
                setNextPage(res.data.links.next);
                setLoading(false);
            })
            .catch(err => {
                console.error("ارور توی بخش محصولات", err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetchProducts("https://manmarket.ir/product/api/v1/product/");
    }, [fetchProducts]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeIndex !== null && productRefs.current[activeIndex] &&
                !productRefs.current[activeIndex].contains(event.target)) {
                setActiveIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeIndex]);

    const handleClick = useCallback((index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    }, []);

    const handleActionClick = useCallback((action, product) => {
        console.log("Action:", action, "Product:", product);
    }, []);

    const lastProductRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && nextPage) {
                    fetchProducts(nextPage);
                }
            });

            if (node) observer.current.observe(node);
        },
        [loading, nextPage, fetchProducts]
    );

    const skeletonArray = Array.from({ length: 6 });

    return (
        <>
            <ProductForm />
            <Link
                to="/product/Addproduct"
                className="text-light py-2 cs-fs-14 px-2 border-0 rounded-2 add-pr-mr"
            >
                <PlusIcon />
                <span className="mx-1">ثبت محصول جدید</span>
            </Link>

            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
                {ProductsData.map((product, index) => {
                    const isLast = index === ProductsData.length - 1;
                    return (
                        <ProductBox
                            key={product.id} 
                            ref={isLast ? lastProductRef : (el) => (productRefs.current[index] = el)}
                            product={product}
                            isActive={activeIndex === index}
                            onClick={() => handleClick(index)}
                            onActionClick={handleActionClick}
                        />
                    );
                })}

                {loading && skeletonArray.map((_, index) => (
                    <div key={`skeleton-${index}`} className="product-card mx-3 my-2">
                        <div className="product-content">
                            <Skeleton height={150} />
                            <p className="product-code cs-fs-14"><Skeleton width={80} /></p>
                            <p className="product-name cs-fs-14"><Skeleton width={120} /></p>
                            <p className="product-category cs-fs-14"><Skeleton width={100} /></p>
                            <p className="product-status cs-fs-14"><Skeleton width={90} /></p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
