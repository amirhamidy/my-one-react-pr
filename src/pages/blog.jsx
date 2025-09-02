

import { useState, useRef, useEffect } from "react";

const blogsData = [
  {
    id: 1,
    title: "نقد و بررسی گوشی شیائومی Redmi Note 13 Pro",
    category: "موبایل",
    status: "published", 
  },
  {
    id: 2,
    title: "راهنمای خرید بهترین لپ‌تاپ‌های 2024",
    category: "لپ تاپ",
    status: "unpublished",
  },
  {
    id: 3,
    title: "10 ترفند برای افزایش عمر باتری گوشی",
    category: "موبایل",
    status: "published",
  },
];

export default function BlogsGrid() {
  const [activeIndex, setActiveIndex] = useState(null);
  const blogRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeIndex !== null &&
        blogRefs.current[activeIndex] &&
        !blogRefs.current[activeIndex].contains(event.target)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeIndex]);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <form className="w-100 d-flex justify-content-start align-items-baseline text-center flex-wrap px-3 py-4 mb-2 container cs-bg rounded-1">
        <div className="px-2 w-right text-light cs-fs-14 text-right w-25">
          <input
            className="form-control-custom rounded-1"
            type="text"
            placeholder="جستجوی بلاگ ...."
          />
        </div>
      </form>

      <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
        {blogsData.map((blog, index) => (
          <div
            key={blog.id}
            ref={(el) => (blogRefs.current[index] = el)}
            className={`product-card mx-3 my-2 ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div className="product-content" onClick={() => handleClick(index)}>
              <div className="product-info">
                <p className="product-name">شماره بلاگ: {blog.id}</p>
                <p className="product-category">عنوان: {blog.title}</p>
                <p className="product-code">دسته‌بندی: {blog.category}</p>
                <p
                  className={`product-status ${
                    blog.status === "published" ? "published" : "unpublished"
                  }`}
                >
                  وضعیت:{" "}
                  {blog.status === "published" ? "منتشر شده" : "منتشر نشده"}
                </p>
              </div>
            </div>

            {activeIndex === index && (
              <div
                style={{
                  msFlexDirection: "column",
                  position: "absolute",
                  top: "15%",
                  left: "10%",
                  flexDirection: "column",
                  display: "flex",
                  gap: "0.1rem",
                  transition: "0.3s",
                  animation: "fadeIn 0.3s ease forwards",
                }}
                className="product-actions"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                  ویرایش
                </button>
                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                  نمایش
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
