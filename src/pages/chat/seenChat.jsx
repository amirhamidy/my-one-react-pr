import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatForm from "./ChatForm";
import BackIcon from "../icons/BackIcon";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const chatData = {
    productName: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال",
    userName: "علی رضایی",
    userEmail: "ali@example.com",
    message: "سلام، می‌خواستم بدونم سایز هنوز موجود دارید؟",
    date: "2025-08-21",
};

const ChatDetail = ({ chat = chatData }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <ChatForm />

            <button
                onClick={() => navigate(-1)}
                className="text-light py-2 px-2 border-0 cs-fs-14 rounded-2 add-pr-mr "
            >
                <BackIcon />
                بازگشت
            </button>

            <div className="cs-h-for-pr w-100 px-3 py-3">
                <div className="px-3 py-3 rounded-1 w-100">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="fw-bold">
                            موضوع پیام:
                            <span className="text-muted mx-1">
                                {loading ? <Skeleton width={400} height={20} style={{ borderRadius: '0.5rem' }} /> : chat.productName}
                            </span>
                        </h5>
                    </div>

                    <div className="user-card rounded-2 mb-3 p-3 shadow-sm">
                        <p className="cs-fs-12 text-end">
                            نام کاربر :
                            <span className="text-muted mx-1">
                                {loading ? <Skeleton width={150} height={15} style={{ borderRadius: '0.5rem' }} /> : chat.userName}
                            </span>
                        </p>
                        <p className="cs-fs-12 text-end">
                            ایمیل کاربر :
                            <span className="text-muted mx-1">
                                {loading ? <Skeleton width={200} height={15} style={{ borderRadius: '0.5rem' }} /> : chat.userEmail}
                            </span>
                        </p>
                        <p className="cs-fs-12 text-end">
                            پیام :
                            <span className="text-muted mx-1">
                                {loading ? <Skeleton count={3} height={15} style={{ borderRadius: '0.5rem', marginBottom: 5 }} /> : chat.message}
                            </span>
                        </p>
                        <p className="cs-fs-12 text-end">
                            تاریخ ارسال پیام :
                            <span className="text-muted mx-1">
                                {loading ? <Skeleton width={100} height={15} style={{ borderRadius: '0.5rem' }} /> : chat.date}
                            </span>
                        </p>
                    </div>

                    <div className="d-flex gap-2">
                        <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">حذف</button>
                        <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">پاسخ</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatDetail;
