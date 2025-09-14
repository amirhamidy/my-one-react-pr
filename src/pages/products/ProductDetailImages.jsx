import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const ImageSkeleton = () => (
    <div className="add-pr-pr-image-skeleton" style={{ background: "#eee", height: "50px", borderRadius: "6px" }} />
);

const ProductImageUploader = ({ colorsApi = "https://manmarket.ir/product/api/v1/color/" }) => {
    const [images, setImages] = useState([]);
    const fileInputRef = useRef();

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

    return (
        <div className="add-pr-pr-container d-flex flex-column gap-3">
            <button
                type="button"
                className="add-pr-pr-btn btn btn-primary w-25"
                onClick={() => fileInputRef.current.click()}
            >
                افزودن عکس
            </button>
            <input
                type="file"
                multiple
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />

            {images.some((img) => img.selected) && (
                <button
                    type="button"
                    className="add-pr-pr-btn btn btn-danger w-25"
                    onClick={deleteSelected}
                >
                    حذف انتخاب‌شده‌ها
                </button>
            )}

            <div className="row add-pr-pr-images-grid">
                {images.map((img, index) => (
                    <div key={index} className="col-md-3 mb-3">
                        <div
                            className="add-pr-pr-image-card position-relative"
                            onClick={() => toggleSelect(index)}
                        >
                            <img
                                src={img.preview}
                                alt="product"
                                className="img-fluid rounded add-pr-pr-image"
                            />
                            {img.selected && (
                                <div className="position-absolute top-0 end-0 p-1 bg-danger text-white rounded-circle">
                                    ✓
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
                            {img.loadingColors && <ImageSkeleton />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImageUploader;
