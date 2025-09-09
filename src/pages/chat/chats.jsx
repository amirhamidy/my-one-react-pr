import { useState, useRef, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import ChatForm from "./ChatForm";

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
  {
    id: 5,
    name: "علی رضایی",
    email: "ali@example.com",
    date: "2025-08-21 14:35",
    userType: "کاربر عادی",
  },
  {
    id: 6,
    name: "سارا محمدی",
    email: "sara@example.com",
    date: "2025-08-20 09:20",
    userType: "سوپر یوزر",
  },
  {
    id: 7,
    name: "محمد احمدی",
    email: "mohammad@example.com",
    date: "2025-08-19 12:10",
    userType: "ادمین",
  },
  {
    id: 8,
    name: "فاطمه نادری",
    email: "fateme@example.com",
    date: "2025-08-18 18:50",
    userType: "کاربر عادی",
  },
];

const Chats = () => {
  const [activeChat, setActiveChat] = useState(null);
  const chatRefs = useRef([]);

  const toggleActiveChat = (id) => {
    setActiveChat((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeChat !== null) {
        const activeChatRef = chatRefs.current[chatsData.findIndex(chat => chat.id === activeChat)];
        if (activeChatRef && !activeChatRef.contains(event.target)) {
          setActiveChat(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeChat]);

  return (
    <>
    

    <ChatForm></ChatForm>
      <div className="d-flex justify-content-center flex-wrap w-100 cs-h-for-pr py-4">
        {chatsData.map((chat, index) => (
          <div
            key={chat.id}
            ref={(el) => (chatRefs.current[index] = el)}
            className={`d-flex flex-wrap justify-content-center align-items-center product-card mx-2 px-3 py-3 my-2 ${activeChat === chat.id ? "active" : ""
              }`}
            onClick={() => toggleActiveChat(chat.id)}
          >
            <div className="chat-info d-flex flex-column gap-1">
              <span className="chat-id cs-fs-13 theme-color">
                شماره چت: {chat.id}
              </span>
              <span className="chat-name cs-fs-15">{chat.name}</span>
              <span className="chat-email cs-fs-13 cs-li-color">
                {chat.email}
              </span>
              <span className="chat-date cs-fs-13 cs-li-color">
                {chat.date}
              </span>
              <span
                className={`chat-type cs-fs-13 ${chat.userType === "ادمین"
                  ? "theme-color"
                  : chat.userType === "سوپر یوزر"
                    ? "cs-fs-14 theme-color"
                    : "cs-li-color"
                  }`}
              >
                نوع کاربر: {chat.userType}
              </span>
            </div>

            {activeChat === chat.id && (
              <div className="product-actions" style={{ msFlexDirection: "column", position: "absolute", top: "15%", left: "15%", flexDirection: "column", display: "flex", gap: "0.1rem", transition: "0.3s", animation: "fadeIn 0.3s ease forwards", }} >
                <Link to="singleChat" className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                  مشاهده گفتگو
                </Link>
                <Link to="" className="edit-btn border-none rounded-2 text-center cs-fs-14 px-2 py-2">
                  پاسخ
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Chats;