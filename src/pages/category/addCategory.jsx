import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import CTAForm from "./CTAForm";
import PlusIcon from "../icons/PlusIcon";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DeleteBtn from "../BTN/DeleteBtn";
import EditBtn from "../BTN/EdtiBtn";

export default function CategoriesGrid() {
    const [categories, setCategories] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [loading, setLoading] = useState(true);
    const boxRefs = useRef([]);

    // Fetch categories once
    useEffect(() => {
        setLoading(true);
        axios
            .get("https://manmarket.ir/product/api/v1/category/")
            .then((res) => {
                setCategories(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading categories:", err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                activeIndex !== null &&
                boxRefs.current[activeIndex] &&
                !boxRefs.current[activeIndex].contains(event.target)
            ) {
                setActiveIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeIndex]);

    const toggleBox = useCallback((index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    }, []);

    const skeletonArray = Array.from({ length: 6 });

    return (
        <>


            <CTAForm />
            <Link
                to="/AddCategory/add"
                className="text-light py-2 cs-fs-14 px-2 border-0 rounded-2 add-pr-mr"
            >
                <PlusIcon />
                <span className="mx-1">ثبت دسته بندی جدید</span>
            </Link>

            <div className="d-flex justify-content-center flex-wrap w-100 cs-h-for-pr py-4">
                {loading
                    ? skeletonArray.map((_, index) => (
                        <div
                            key={`skeleton-${index}`}
                            className="product-card mx-2 px-3 py-3 my-2"
                        >
                            <Skeleton height={70} width={70} />
                            <Skeleton width={100} style={{ marginTop: 10 }} />
                        </div>
                    ))
                    : categories.map((cat, index) => (
                        <div
                            key={cat.id}
                            ref={(el) => (boxRefs.current[index] = el)}
                            className={`product-card mx-2 px-3 py-3 my-2 ${activeIndex === index ? "active" : ""
                                } ${cat.image ? "" : "d-none"}`}
                            onClick={() => toggleBox(index)}
                        >
                            <div className="d-flex align-items-center gap-2">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    style={{ width: 70, height: 70, borderRadius: 5 }}
                                />
                                <span className="cs-fs-14 fw-bold">{cat.title}</span>
                            </div>

                            {activeIndex === index && (
                                <div
                                    style={{ top: "0", left: "18%" }}
                                    className="d-flex gap-2 mt-3 action-buttons"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <EditBtn></EditBtn>
                                    <DeleteBtn></DeleteBtn>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </>
    );
}
