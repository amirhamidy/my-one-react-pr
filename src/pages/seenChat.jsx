import React from "react";

const chatData = {
  productName: "کفش ورزشی نایک",
  userName: "علی رضایی",
  userEmail: "ali@example.com",
  message: "سلام، می‌خواستم بدونم سایز ۴۲ موجود دارید؟",
  date: "2025-08-21 14:35",
};

const ChatDetail = ({ chat = chatData, onBack }) => {
  return (
    <div className="cs-bg p-4 rounded-1 shadow-lg w-100 max-w-2xl mx-auto">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="cs-fs-18 fw-bold theme-color">
          پیام برای: {chat.productName}
        </h2>
        <button className="action-btn px-3 py-2" onClick={onBack}>
          بازگشت
        </button>
      </div>

      <div className="user-card mb-3 p-3 shadow-sm">
        <p className="cs-fs-15 fw-bold">{chat.userName}</p>
        <p className="cs-fs-13 cs-li-color">{chat.userEmail}</p>
      </div>

      <div className="user-card p-3 shadow-sm mb-3">
        <p className="cs-fs-14">{chat.message}</p>
        <p className="cs-fs-12 cs-li-color text-end">{chat.date}</p>
      </div>

      <div className="d-flex gap-2">
        <button className="delete-btn action-btn px-3 py-2">حذف</button>
        <button className="edit-btn action-btn px-3 py-2">پاسخ</button>
      </div>
    </div>
  );
};

export default ChatDetail;
