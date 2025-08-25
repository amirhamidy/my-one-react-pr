import React, { useState } from "react";

const categories = [
  { id: 1, name: "الکترونیک" },
  { id: 2, name: "پوشاک" },
  { id: 3, name: "کتاب" },
  { id: 4, name: "لوازم خانگی" },
];

const AddCta = () => {
  const [activeBox, setActiveBox] = useState(null);

  const toggleActiveBox = (id) => {
    setActiveBox((prev) => (prev === id ? null : id));
  };

  return (
    <div className="d-flex justify-content-center flex-wrap w-100 cs-h-for-pr py-4">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className={`product-card mx-2 px-3 py-3 my-2 ${
            activeBox === cat.id ? "active" : ""
          }`}
          onClick={() => toggleActiveBox(cat.id)}
        >
          <div className="category-info d-flex flex-column gap-1">
            <span className="cs-fs-15 fw-bold theme-color">
              دسته: {cat.name}
            </span>
          </div>

          {activeBox === cat.id && (
            <div className="d-flex gap-2 mt-3">
              <button className="edit-btn action-btn cs-fs-13">ویرایش</button>
              <button className="action-btn cs-fs-13 bg-danger text-white">
                حذف
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AddCta;
