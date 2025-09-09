import { Space } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import ChatForm from "./ChatForm";

const chatData = {
    productName: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو سیم‌کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - گلوبال",
    userName: "علی رضایی",
    userEmail: "ali@example.com",
    message: "سلام، می‌خواستم بدونم سایز هنوز موجود دارید؟",
    date: "2025-08-21",
};

const ChatDetail = ({ chat = chatData, onBack }) => {
    const navigate = useNavigate();

    return (
        <>
          <ChatForm></ChatForm>
            <button
                onClick={() => navigate(-1)}
                className="text-light py-2 px-3 mt-2 cs-fs-14 border-0 rounded-2 add-pr-mr"
            >
                بازگشت
            </button>
            <div className="cs-h-for-pr w-100 px-3 py-3">
                <div className=" px-3 py-3 rounded-1 w-100">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="fw-bold"> موضوع پیام:
                            <span className="text-muted mx-1 ">
                                {chat.productName}
                            </span>
                        </h5>
                    </div>

                    <div className="user-card rounded-2 mb-3 p-3 shadow-sm">
                        <p className="cs-fs-12 text-end "> نام کاربر :
                            <span className="text-muted mx-1 ">
                                {chat.userName}
                            </span>
                        </p>
                        <p className="cs-fs-12 text-end "> ایمیل کاربر :
                            <span className="text-muted mx-1 ">
                                {chat.userEmail}
                            </span>
                        </p>
                        <p className="cs-fs-12 text-end "> پیام :
                            <span className="text-muted mx-1 ">
                                {chat.message}
                            </span>
                        </p>                        <p className="cs-fs-12 text-end "> تاریخ ارسال پیام :
                            <span className="text-muted mx-1 ">
                                {chat.date}
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
