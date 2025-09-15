
import React, { useState } from "react";


const MainImgProduct = () => {


    const [imagePreview, setImagePreview] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };


    return (

        <div className="add-pr-pr-container row d-flex justify-content-start align-items-start flex-column gap-3 my-1 col-md-12 fts-bg-white">
            <label
                htmlFor="productImage"
                className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 my-3 w-auto"
                style={{ cursor: "pointer" }}
            >
                اضافه کردن تصویر اصلی محصول
            </label>
            <input
                className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 my-3"
                type="file"
                id="productImage"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
            />
            {imagePreview && (
                <img
                    src={imagePreview}
                    alt="preview"
                    className="editor-image w-25 "
                />
            )}
        </div>
    )
}


export default MainImgProduct