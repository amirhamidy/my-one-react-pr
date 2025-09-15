import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CTAForm from "./CTAForm";
import BackIcon from "../icons/BackIcon";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AdmCategoryPanel = () => {
    const [form, setForm] = useState({
        title: "",
        slug: "",
        image: null,
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image" && files[0]) {
            setForm({ ...form, image: files[0] });
            setImagePreview(URL.createObjectURL(files[0]));
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Category Data:", form);
    };

    return (
        <>
            <CTAForm />
            <button
                onClick={() => navigate(-1)}
                className="text-light py-2 px-2 border-0 cs-fs-14 rounded-2 add-pr-mr "
            >
                <BackIcon />
                بازگشت
            </button>

            <div className="add-pr-container container px-5">
                <h3 className="text-right py-4 cs-fs-15 fw-bold">افزودن دسته‌بندی</h3>

                {loading ? (
                    <div className="row add-pr-row">
                        <div className="col-md-6">
                            <Skeleton height={40} style={{ marginBottom: "10px" }} />
                        </div>
                        <div className="col-md-6">
                            <Skeleton height={40} style={{ marginBottom: "10px" }} />
                        </div>
                        <div className="col-md-6">
                            <Skeleton height={50} style={{ marginBottom: "10px" }} />
                        </div>
                        <div className="col-12">
                            <Skeleton height={40} style={{ marginBottom: "10px" }} />
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="row add-pr-row">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control-custom add-pr-input"
                                    placeholder="عنوان دسته‌بندی"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control-custom add-pr-input"
                                    placeholder="اسلاگ دسته‌بندی"
                                    name="slug"
                                    value={form.slug}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6">
                                <div
                                    className="form-control-custom add-pr-input cursor-pointer d-flex align-items-center"
                                    style={{ height: "50px" }}
                                    onClick={() => document.getElementById("imageInput").click()}
                                >
                                    {form.image ? form.image.name : "آپلود تصویر دسته‌بندی"}
                                </div>
                                <input
                                    type="file"
                                    id="imageInput"
                                    accept="image/*"
                                    name="image"
                                    onChange={handleChange}
                                    style={{ display: "none" }}
                                />
                                {imagePreview && (
                                    <img
                                        src={imagePreview}
                                        alt="دسته‌بندی"
                                        className="img-story-2 mt-2"
                                    />
                                )}
                            </div>

                            <div className="col-12">
                                <button
                                    type="submit"
                                    className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 my-3"
                                >
                                    اضافه کردن دسته‌بندی
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </>
    );
};

export default AdmCategoryPanel;
