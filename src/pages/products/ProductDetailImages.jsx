import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import SelectIcon from "../icons/SelectIcon";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductImageUploader = ({ colorsApi = "https://manmarket.ir/product/api/v1/color/" }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const fileInputRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
            color: "",
            colorList: [],
            loadingColors: false,
            dropdownOpen: false,
            activeIndex: -1,
        }));
        setImages((prev) => [...prev, ...newImages]);
    };

    const handleSearchColor = async (index, value) => {
        setImages((prev) =>
            prev.map((img, i) =>
                i === index ? { ...img, color: value, loadingColors: true, dropdownOpen: true } : img
            )
        );

        try {
            const res = await axios.get(colorsApi);
            const filtered = res.data.filter((c) =>
                c.title.toLowerCase().includes(value.toLowerCase())
            );

            setImages((prev) =>
                prev.map((img, i) =>
                    i === index ? { ...img, colorList: filtered, loadingColors: false } : img
                )
            );
        } catch (err) {
            console.error(err);
            setImages((prev) =>
                prev.map((img, i) =>
                    i === index ? { ...img, colorList: [], loadingColors: false } : img
                )
            );
        }
    };

    const handleSelectColor = (index, color) => {
        setImages((prev) =>
            prev.map((img, i) =>
                i === index ? { ...img, color: color.title, dropdownOpen: false } : img
            )
        );
    };

    const handleKeyDown = (e, index) => {
        const img = images[index];
        if (!img.dropdownOpen || img.colorList.length === 0) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setImages((prev) =>
                prev.map((item, i) =>
                    i === index
                        ? { ...item, activeIndex: (item.activeIndex + 1) % item.colorList.length }
                        : item
                )
            );
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setImages((prev) =>
                prev.map((item, i) =>
                    i === index
                        ? { ...item, activeIndex: (item.activeIndex - 1 + item.colorList.length) % item.colorList.length }
                        : item
                )
            );
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (img.activeIndex >= 0) handleSelectColor(index, img.colorList[img.activeIndex]);
        }
    };

    const toggleSelect = (index) => {
        setImages((prev) =>
            prev.map((img, i) =>
                i === index ? { ...img, selected: !img.selected } : img
            )
        );
    };

    const deleteSelected = () => {
        setImages((prev) => prev.filter((img) => !img.selected));
    };

    if (loading) {
        return <Skeleton height={150} count={3} />;
    }

    return (
        <div className="add-pr-pr-container row gap-3 my-1 col-md-12 w-100 fts-bg-white">
            <div className="w-100 d-flex col-md-12 ">
                <button
                    type="button"
                    className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 my-3"
                    onClick={() => fileInputRef.current.click()}
                >
                    اضافه کردن تصاویر دیگر و انتخاب رنگ
                </button>
                <input type="file" multiple accept="image/*" ref={fileInputRef} style={{ visibility: "hidden" }} onChange={handleFileChange} />
                {images.some((img) => img.selected) && (
                    <button
                        type="button"
                        className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 my-3"
                        onClick={deleteSelected}
                    >
                        حذف انتخاب‌شده‌ها
                    </button>
                )}
            </div>
            <div className="row col-md-12 add-pr-pr-images-grid w-100">
                {images.map((img, index) => (
                    <div key={index} className="col-md-2 mb-3 text-center">
                        <div
                            className="add-pr-pr-image-card"
                            onClick={() => toggleSelect(index)}
                        >
                            <img
                                src={img.preview}
                                alt="product"
                                className="img-fluid rounded add-pr-pr-image"
                            />
                            {img.selected && (
                                <div className="tick-for-delete theme-bg-color text-white">
                                    <SelectIcon></SelectIcon>
                                </div>
                            )}
                        </div>
                        <div className="add-pr-autocomplete position-relative mt-2">
                            <input
                                type="text"
                                className="form-control add-pr-pr-color-input"
                                placeholder="انتخاب رنگ"
                                value={img.color}
                                onChange={(e) => handleSearchColor(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                            {img.dropdownOpen && img.colorList.length > 0 && (
                                <ul className="add-pr-suggestions position-absolute w-100 bg-white border rounded z-index-10">
                                    {img.colorList.map((c, idx) => (
                                        <li
                                            key={c.id}
                                            className={`px-2 py-1 ${img.activeIndex === idx ? "bg-primary text-white" : ""}`}
                                            onMouseDown={() => handleSelectColor(index, c)}
                                        >
                                            {c.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {img.loadingColors && <Skeleton count={3} height={20} style={{ margin: "5px 0" }} />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImageUploader;
