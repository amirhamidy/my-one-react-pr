import React, { useState, useRef } from "react";

const ImageSkeleton = () => (
    <div className="add-pr-image-preview" style={{ background: "#eee" }} />
);

const ProductImageUploader = ({ colorsApi }) => {
    const [images, setImages] = useState([]); 
    const [colorList, setColorList] = useState([]);
    const [searchColor, setSearchColor] = useState("");
    const [loadingColors, setLoadingColors] = useState(false);

    const fileInputRef = useRef();

    const fetchColors = async (query) => {
        setLoadingColors(true);
        try {
            const res = await fetch(colorsApi);
            const data = await res.json();
            const filtered = data.filter((c) =>
                c.title.toLowerCase().includes(query.toLowerCase())
            );
            setColorList(filtered);
        } catch (err) {
            console.error(err);
        }
        setLoadingColors(false);
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
            colorId: null,
            colorTitle: "",
            selected: false,
        }));
        setImages((prev) => [...prev, ...newImages]);
    };

    const handleColorSelect = (index, color) => {
        setImages((prev) =>
            prev.map((img, i) =>
                i === index
                    ? { ...img, colorId: color.id, colorTitle: color.title }
                    : img
            )
        );
        setColorList([]);
        setSearchColor("");
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
        <div className="add-pr-autocomplete d-flex align-items-center flex-column gap-3">
            <button
                type="button"
                className="edit-btn border-none rounded-2 cs-fs-14 py-2 my-3"
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
                    className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 mx-3"
                    style={{ marginBottom: "15px" }}
                    onClick={deleteSelected}
                >
                    حذف انتخاب‌شده‌ها
                </button>
            )}

            <div className="adm-story-list">
                {images.map((img, index) => (
                    <div
                        className="adm-story-card"
                        key={index}
                        style={{ width: "150px", height: "180px" }}
                    >
                        <div
                            className="box-d-img"
                            onClick={() => toggleSelect(index)}
                            style={{ position: "relative" }}
                        >
                            <img
                                src={img.preview}
                                alt="product"
                                className="add-pr-image-preview width-for-main-product"
                            />
                            {img.selected && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "5px",
                                        right: "5px",
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        background: "#ff4f29",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#fff",
                                        fontSize: "14px",
                                    }}
                                >
                                    ✓
                                </div>
                            )}
                        </div>

                        <div className="add-pr-autocomplete" style={{ marginTop: "5px" }}>
                            <input
                                type="text"
                                value={img.colorTitle || searchColor}
                                placeholder="انتخاب رنگ"
                                className="add-pr-input"
                                onChange={(e) => {
                                    setSearchColor(e.target.value);
                                    fetchColors(e.target.value);
                                }}
                            />
                            {colorList.length > 0 && (
                                <ul className="add-pr-suggestions">
                                    {colorList.map((color) => (
                                        <li
                                            key={color.id}
                                            onClick={() => handleColorSelect(index, color)}
                                        >
                                            {color.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {loadingColors && <ImageSkeleton />}
                        </div>

                        {img.colorTitle && (
                            <p
                                className="product-name"
                                style={{ fontSize: "12px", textAlign: "center" }}
                            >
                                {img.colorTitle}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImageUploader;
