



import { useState, useRef, useEffect } from "react";

const commentsData = [
    {
        id: 1,
        userName: "علی رضایی",
        date: "1402/12/10",
        UserEmail: "test3@gmail.com",
        text: "خیلی گوشی خوبیه، از خریدش راضی‌ام فقط باتری میتونست بهتر باشه.",
    },
    {
        id: 2,
        userName: "علی رضایی",
        date: "1402/12/10",
        UserEmail: "test3@gmail.com",
        text: "خیلی گوشی خوبیه، از خریدش راضی‌ام فقط باتری میتونست بهتر باشه.",
    },
    {
        id: 3,
        userName: "علی رضایی",
        date: "1402/12/10",
        UserEmail: "test3@gmail.com",
        text: "خیلی گوشی خوبیه، از خریدش راضی‌ام فقط باتری میتونست بهتر باشه.",
    },
    {
        id: 4,
        userName: "علی رضایی",
        date: "1402/12/10",
        UserEmail: "test3@gmail.com",
        text: "خیلی گوشی خوبیه، از خریدش راضی‌ام فقط باتری میتونست بهتر باشه.",
    },
    {
        id: 5,
        userName: "علی رضایی",
        date: "1402/12/10",
        UserEmail: "test3@gmail.com",
        text: "خیلی گوشی خوبیه، از خریدش راضی‌ام فقط باتری میتونست بهتر باشه.",
    },
    {
        id: 6,
        userName: "علی رضایی",
        date: "1402/12/10",
        UserEmail: "test3@gmail.com",
        text: "خیلی گوشی خوبیه، از خریدش راضی‌ام فقط باتری میتونست بهتر باشه.",
    },
    {
        id: 7,
        userName: "علی رضایی",
        date: "1402/12/10",
        UserEmail: "test3@gmail.com",
        text: "خیلی گوشی خوبیه، از خریدش راضی‌ام فقط باتری میتونست بهتر باشه.",
    },
    {
        id: 8,
        userName: "علی رضایی",
        date: "1402/12/10",
        UserEmail: "test3@gmail.com",
        text: "خیلی گوشی خوبیه، از خریدش راضی‌ام فقط باتری میتونست بهتر باشه.",
    },
    {
        id: 9,
        userName: "علی رضایی",
        date: "1402/12/10",
        UserEmail: "test3@gmail.com",
        text: "خیلی گوشی خوبیه، از خریدش راضی‌ام فقط باتری میتونست بهتر باشه.",
    },
    {
        id: 10,
        userName: "علی رضایی",
        date: "1402/12/10",
        UserEmail: "test3@gmail.com",
        text: "خیلی گوشی خوبیه، از خریدش راضی‌ام فقط باتری میتونست بهتر باشه.",
    },

];

export default function ContactGrid() {
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
                            <div className="product-info cs-fs-14 ">
                                <p className="product-name cs-fs-14 "><span className="text-muted mx-1 cs-fs-14 fw-bold">ایمیل :</span>{comment.UserEmail}</p>
                                <p className="product-category text-dark cs-fs-14 "><span className="text-muted mx-1 cs-fs-14  fw-bold">نام کاربر :</span> {comment.userName}</p>
                                <p className="product-code cs-fs-14 "><span className="text-muted mx-1 cs-fs-14  fw-bold">تاریخ :</span> {comment.date}</p>
                                <p className="product-desc cs-fs-14 ">
                                    <span className="text-muted mx-1 cs-fs-14  fw-bold">
                                        متن  :
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
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                                    ویرایش
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>

    );
}
