import React, { useState } from "react";

const chatsData = [
  {
    id: 1,
    name: "علی رضایی",
    email: "ali@example.com",
    date: "2025-08-21 14:35",
    userType: "کاربر عادی",
  },
  {
    id: 2,
    name: "سارا محمدی",
    email: "sara@example.com",
    date: "2025-08-20 09:20",
    userType: "سوپر یوزر",
  },
  {
    id: 3,
    name: "محمد احمدی",
    email: "mohammad@example.com",
    date: "2025-08-19 12:10",
    userType: "ادمین",
  },
  {
    id: 4,
    name: "فاطمه نادری",
    email: "fateme@example.com",
    date: "2025-08-18 18:50",
    userType: "کاربر عادی",
  },
];

const Chats = () => {
  const [activeChat, setActiveChat] = useState(null);

  const toggleActiveChat = (id) => {
    setActiveChat((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <form className="w-100 d-flex justify-content-start align-items-baseline w-right flex-wrap px-3 py-4 mb-2 container cs-bg rounded-1">
        <div className="search-input w-25 px-2 w-right text-light cs-fs-14 text-right">
          <input
            className="form-control-custom rounded-1"
            type="text"
            placeholder="عنوان محصول یا نام کاربر را وارد کنید ..."
          />
        </div>
      </form>

      <div className="d-flex justify-content-center flex-wrap w-100 cs-h-for-pr py-4">
        {chatsData.map((chat) => (
          <div
            key={chat.id}
            className={`d-flex flex-wrap justify-content-center align-items-center product-card  mx-2 px-3 py-3 my-2 ${
              activeChat === chat.id ? "active" : ""
            }`}
            onClick={() => toggleActiveChat(chat.id)}
          >
            <div className="chat-info d-flex flex-column gap-1">
              <span className="chat-id cs-fs-13 theme-color">
                شماره چت: {chat.id}
              </span>
              <span className="chat-name cs-fs-15">{chat.name}</span>
              <span className="chat-email cs-fs-13 cs-li-color">{chat.email}</span>
              <span className="chat-date cs-fs-13 cs-li-color">{chat.date}</span>
              <span
                className={`chat-type cs-fs-13 ${
                  chat.userType === "ادمین"
                    ? "theme-color"
                    : chat.userType === "سوپر یوزر"
                    ? "cs-fs-14 theme-color"
                    : "cs-li-color"
                }`}
              >
                نوع کاربر: {chat.userType}
              </span>
            </div>

            <div
              className={`chat-actions d-flex flex-wrap gap-2 mt-3  box-btn-p ${
                activeChat === chat.id ? "show" : "hide"
              }`}
            >
              <button className="view-user-btn action-btn cs-fs-13">
                جزئیات کاربر
              </button>
              <button className="view-chat-btn action-btn cs-fs-13">
                مشاهده گفتگو
              </button>
              <button className="reply-chat-btn action-btn cs-fs-13">
                جواب دادن
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Chats;
