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

    const toggleBox = useCallback(
        (index) => setActiveIndex((prev) => (prev === index ? null : index)),
        []
    );

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
                {(loading ? skeletonArray : categories).map((cat, index) => (
                    <div
                        key={loading ? index : cat.id}
                        ref={(el) => (boxRefs.current[index] = el)}
                        className={`product-card mx-2 px-3 py-3 my-2 ${!loading && activeIndex === index ? "active" : ""} ${!loading && !cat.image ? "d-none" : ""
                            }`}
                        onClick={() => !loading && toggleBox(index)}
                        style={{ width: "38%", minHeight: "120px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                    >
                        {loading ? (
                            <>
                                <Skeleton circle height={70} width={70} style={{ marginBottom: 10 }} />
                                <Skeleton width="60%" height={20} style={{ borderRadius: "0.5rem" }} />
                            </>
                        ) : (
                            <>
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    style={{ width: 70, height: 70, borderRadius: 5, marginBottom: 10 }}
                                />
                                <span className="cs-fs-14 fw-bold">{cat.title}</span>
                            </>
                        )}

                        {!loading && activeIndex === index && (
                            <div
                                className="d-flex gap-2 mt-3 action-buttons"
                                style={{ position: "absolute", top: "10%", left: "10%", flexDirection: "column" }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <EditBtn />
                                <DeleteBtn />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
