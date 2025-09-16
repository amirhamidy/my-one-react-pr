import { useState, useRef, useEffect } from "react";
import React from "react";
import ChatForm from "./ChatForm";
import ReplayBtn from "../BTN/ReplayBtn";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

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
  const [loading, setLoading] = useState(true);
  const chatRefs = useRef([]);

  const toggleActiveChat = (id) => {
    setActiveChat((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeChat !== null) {
        const activeChatRef =
          chatRefs.current[chatsData.findIndex((chat) => chat.id === activeChat)];
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
      <ChatForm />
      <div className="d-flex justify-content-center flex-wrap w-100 cs-h-for-pr py-4">
        {(loading ? Array.from({ length: 4 }) : chatsData).map((chat, index) => (
          <div
            key={loading ? index : chat.id}
            ref={(el) => (chatRefs.current[index] = el)}
            className={`d-flex flex-wrap justify-content-center align-items-center product-card mx-2 px-3 py-3 my-2 ${!loading && activeChat === chat.id ? "active" : ""
              }`}
            onClick={() => !loading && toggleActiveChat(chat.id)}
          >
            <div className="chat-info d-flex flex-column gap-1">
              <span className="chat-id cs-fs-13 theme-color">
                {loading ? <Skeleton width={100} /> : `شماره چت: ${chat.id}`}
              </span>
              <span className="chat-name cs-fs-15">
                {loading ? <Skeleton width={120} /> : chat.name}
              </span>
              <span className="chat-email cs-fs-13 cs-li-color">
                {loading ? <Skeleton width={150} /> : chat.email}
              </span>
              <span className="chat-date cs-fs-13 cs-li-color">
                {loading ? <Skeleton width={90} /> : chat.date}
              </span>
              <span
                className={`chat-type cs-fs-13 ${!loading && chat.userType === "ادمین"
                  ? "theme-color"
                  : !loading && chat.userType === "سوپر یوزر"
                    ? "cs-fs-14 theme-color"
                    : "cs-li-color"
                  }`}
              >
                {loading ? <Skeleton width={80} /> : `نوع کاربر: ${chat.userType}`}
              </span>
            </div>

            {!loading && activeChat === chat.id && (
              <div
                className="product-actions"
                style={{
                  msFlexDirection: "column",
                  position: "absolute",
                  top: "15%",
                  left: "15%",
                  flexDirection: "column",
                  display: "flex",
                  gap: "0.1rem",
                  transition: "0.3s",
                  animation: "fadeIn 0.3s ease forwards",
                }}
              >
                <Link className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2" to='/chats/singleChat'>
                  مشاهده
                </Link>
                <ReplayBtn />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Chats;
