

import { useState, useRef, useEffect } from "react";
import EditBtn from "../BTN/EdtiBtn";

const commentsData = [
  {
    id: 1,
    productTitle: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال",
    userName: "علی رضایی",
    rating: 4,
    date: "1402/12/10",
    status: "approved",
    text: "خیلی گوشی خوبیه، از خریدش راضی‌ام فقط باتری میتونست بهتر باشه.",
  },
  {
    id: 4,
    productTitle: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال",
    userName: "علی رضایی",
    rating: 4,
    date: "1402/12/10",
    status: "approved",
    text: "خیلی گوشی خوبیه، از خریدش راضی‌ام فقط باتری میتونست بهتر باشه.",
  },
  {
    id: 5,
    productTitle: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال",
    userName: "علی رضایی",
    rating: 4,
    date: "1402/12/10",
    status: "approved",
    text: "خیلی گوشی خوبیه، از خریدش راضی‌ام فقط باتری میتونست بهتر باشه.",
  },
  {
    id: 2,
    productTitle: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال",
    userName: "مریم احمدی",
    rating: 5,
    date: "1403/01/15",
    status: "pending",
    text: "بسیار قوی و پرسرعت، برای گیمینگ عالیه. امیدوارم زود تایید بشه.",
  },
  {
    id: 3,
    productTitle: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال",
    userName: "حسین مرادی",
    rating: 3,
    date: "1403/02/01",
    status: "approved",
    text: "کیفیت صدا متوسطه، ولی نسبت به قیمتش می‌ارزه.",
  },
];

export default function CommentsGrid() {
  const [activeIndex, setActiveIndex] = useState(null);
  const commentRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeIndex !== null &&
        commentRefs.current[activeIndex] &&
        !commentRefs.current[activeIndex].contains(event.target)
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

      <form className="w-100 d-flex justify-content-start align-items-baseline  text-center flex-wrap px-3 py-4 mb-2 container cs-bg rounded-1">
        <div className="px-2 w-right text-light cs-fs-14  text-right w-25">
          <input className="form-control-custom rounded-1" type="text" placeholder="جستجوی کالا ...." />
        </div>
      </form>
      <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
        {commentsData.map((comment, index) => (
          <div
            key={comment.id}
            ref={(el) => (commentRefs.current[index] = el)}
            className={`product-card mx-3 my-2 ${activeIndex === index ? "active" : ""
              }`}
          >
            <div className="product-content" onClick={() => handleClick(index)}>
              <div className="product-info">
                <p className="product-name">محصول: {comment.productTitle}</p>
                <p className="product-category">کاربر: {comment.userName}</p>
                <p className="product-code">امتیاز: {comment.rating} ⭐</p>
                <p className="product-code">تاریخ: {comment.date}</p>
                <p
                  className={`product-status ${comment.status === "approved" ? "published" : "unpublished"
                    }`}
                >
                  وضعیت:{" "}
                  {comment.status === "approved" ? "تایید شده" : "تایید نشده"}
                </p>
                <p className="product-desc">
                  <span className="text-muted mx-1">
                    متن نظر :
                  </span>
                  {comment.text}</p>
              </div>
            </div>

            {activeIndex === index && (
              <div
              style={{ msFlexDirection: "column", position: "absolute", top: "35%", left: "10%", flexDirection: "column", display: "flex", gap: "0.1rem", transition: "0.3s", animation: "fadeIn 0.3s ease forwards", }}
                className="product-actions"
                onClick={(e) => e.stopPropagation()}
              >
                <EditBtn></EditBtn>
              </div>
            )}
          </div>
        ))}
      </div>
    </>

  );
}
