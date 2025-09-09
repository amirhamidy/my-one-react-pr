import React from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "./userForm";


const UserDetails = () => {

    const navigate = useNavigate();

    const user = {
        id: 123,
        fullName: "amirixamz",
        phone: "09380373793",
        userType: "ادمین",
        ordersCount: 0,
        age: 26,
        avatar: "../src/assets/img/m-main-prof.png",
        favriteProduct: 1,
        chats: 0,
        SubDate: '2025/2/4',
        money: '40000',
        comments: 2,
    };

    return (
        <>
            <UserForm>
            </UserForm>
            <button
                onClick={() => navigate(-1)}
                className="text-light py-2 px-2 border-0 cs-fs-14 rounded-2 add-pr-mr "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.2em"
                    height="1.2em"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M6 12.4h12M12.6 7l5.4 5.4l-5.4 5.4"
                    ></path>
                </svg>

                بازگشت
            </button>

            <div className="cs-h-for-pr w-100 px-3 py-3">
                <div className="p-3">
                    <div className="d-flex align-items-center mb-3 w-100 bg-white py-2 px-3 cs-fs-14 rounded-2 list-group-item w-25">
                        <img
                            src={user.avatar}
                            alt={user.fullName}
                            className="rounded-circle me-3"
                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                        />
                        <div>
                            <h6 className="mb-1 mx-5 fw-bold">{user.fullName}</h6>
                            <p className="mb-0 text-muted mx-5">{user.userType}</p>
                        </div>

                        <div className="w-75 d-flex align-items-end justify-content-center">

                            <p className="mb-0 align-items-center d-flex justify-content-center text-nowrap my-2 flex-wrap text-center mx-5">  مورد علاقه ها   : {user.favriteProduct}
                                <button className="edit-btn border-none rounded-2 cs-fs-14 mt-3 px-2 py-2">مشاهده</button>
                            </p>
                            <p className="mb-0 align-items-center d-flex justify-content-center text-nowrap my-2 flex-wrap text-center mx-5">  گفتگو   : {user.chats}
                                <button className="edit-btn border-none rounded-2 cs-fs-14 mt-3 px-2 py-2">مشاهده</button>
                            </p>
                            <p className="mb-0 align-items-center d-flex justify-content-center text-nowrap my-2 flex-wrap text-center mx-5">  تاریخ ثبت نام  : {user.SubDate}
                                <button className="edit-btn border-none rounded-2 cs-fs-14 mt-3 px-2 py-2">مشاهده</button>
                            </p>
                            <p className="mb-0 align-items-center d-flex justify-content-center text-nowrap my-2 flex-wrap text-center mx-5">  کیف پول  : {user.money}
                                <button className="edit-btn border-none rounded-2 cs-fs-14 mt-3 px-2 py-2">مشاهده</button>
                            </p>
                            <p className="mb-0 align-items-center d-flex justify-content-center text-nowrap my-2 flex-wrap text-center mx-5"> کامنت ها   : {user.comments}
                                <button className="edit-btn border-none rounded-2 cs-fs-14 mt-3 px-2 py-2">مشاهده</button>
                            </p>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush d-flex justify-content-centar align-items-center">
                        <li className=" py-3 cs-fs-14 px-5 w-100 d-flex justify-content-center align-items-center">
                            <span className="mx-4 rounded-2 py-3 px-4 list-group-item w-25">
                                شماره تلفن
                            </span>
                            <span className="mx-4 rounded-2 py-3 px-4 list-group-item w-25">{user.phone}</span>
                        </li>
                        <li className=" py-3 cs-fs-14 px-5 w-100 d-flex justify-content-center align-items-center">
                            <span className="mx-4 rounded-2 py-3 px-4 list-group-item w-25">
                                سن
                            </span>
                            <span className="mx-4 rounded-2 py-3 px-4 list-group-item w-25">{user.age}</span>
                        </li>
                        <li className=" py-3 cs-fs-14 px-5 w-100 d-flex justify-content-center align-items-center">
                            <span className="mx-4 rounded-2 py-3 px-4 list-group-item w-25">
                                تعداد سفارش‌ها
                            </span>
                            <span className="mx-4 rounded-2 py-3 px-4 list-group-item w-25">
                                {user.ordersCount === 0 ? (
                                    "ندارد"
                                ) : (
                                    <div className="d-flex align-items-center">
                                        <span className="me-2">{user.ordersCount}</span>
                                        {user.ordersCount === 1 && (
                                            <button className="btn btn-sm btn-outline-primary">
                                                مشاهده جزئیات سفارش
                                            </button>
                                        )}
                                    </div>
                                )}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );
};

export default UserDetails;
