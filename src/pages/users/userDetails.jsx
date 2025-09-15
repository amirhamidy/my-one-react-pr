import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserForm from "./userForm";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.github.com/users/${id}`)
            .then(res => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <>
                <UserForm />

                <button className="text-light py-2 px-2 border-0 cs-fs-14 rounded-2 add-pr-mr">
                    بازگشت
                </button>

                <div className="cs-h-for-pr w-100 px-3 py-3">
                    <div className="p-3">
                        <div className="d-flex align-items-center mb-3 w-100 bg-white py-2 px-3 cs-fs-14 rounded-2 list-group-item w-25">
                            <div style={{ width: "50px", height: "50px", marginRight: "1rem" }}>
                                <Skeleton circle height={50} width={50} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <Skeleton height={20} width="80%" className="mb-1" />
                                <Skeleton height={16} width="60%" />
                            </div>
                        </div>

                        <ul className="list-group list-group-flush d-flex justify-content-center align-items-center w-100">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <li key={i} className="py-3 cs-fs-14 px-5 w-100 d-flex justify-content-center align-items-center">
                                    <Skeleton height={50} width={200} className="mx-4 rounded-2" />
                                    <Skeleton height={50} width={200} className="mx-4 rounded-2" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        );
    }

    if (!user) return <h4>کاربری یافت نشد</h4>;

    return (
        <>
            <UserForm />

            <button onClick={() => navigate(-1)} className="text-light py-2 px-2 border-0 cs-fs-14 rounded-2 add-pr-mr">
                بازگشت
            </button>

            <div className="cs-h-for-pr w-100 px-3 py-3">
                <div className="p-3">
                    <div className="d-flex align-items-center mb-3 w-100 bg-white py-2 px-3 cs-fs-14 rounded-2 list-group-item w-25">
                        <img src={user.avatar_url || "../src/assets/img/m-main-prof.png"} alt={user.login} className="rounded-circle me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                        <div>
                            <h6 className="mb-1 mx-5 fw-bold">{user.login}</h6>
                            <p className="mb-0 text-muted mx-5">{user.type}</p>
                        </div>

                        <div className="w-75 d-flex align-items-end justify-content-center">
                            <p className="mb-0 align-items-center d-flex justify-content-center text-nowrap my-2 flex-wrap text-center mx-5">
                                مورد علاقه ها: 0
                                <button className="edit-btn border-none rounded-2 cs-fs-14 mt-3 px-2 py-2">مشاهده</button>
                            </p>
                            <p className="mb-0 align-items-center d-flex justify-content-center text-nowrap my-2 flex-wrap text-center mx-5">
                                گفتگو: 0
                                <button className="edit-btn border-none rounded-2 cs-fs-14 mt-3 px-2 py-2">مشاهده</button>
                            </p>
                            <p className="mb-0 align-items-center d-flex justify-content-center text-nowrap my-2 flex-wrap text-center mx-5">
                                تاریخ ثبت نام: -
                                <button className="edit-btn border-none rounded-2 cs-fs-14 mt-3 px-2 py-2">مشاهده</button>
                            </p>
                            <p className="mb-0 align-items-center d-flex justify-content-center text-nowrap my-2 flex-wrap text-center mx-5">
                                کیف پول: 0
                                <button className="edit-btn border-none rounded-2 cs-fs-14 mt-3 px-2 py-2">مشاهده</button>
                            </p>
                            <p className="mb-0 align-items-center d-flex justify-content-center text-nowrap my-2 flex-wrap text-center mx-5">
                                کامنت ها: 0
                                <button className="edit-btn border-none rounded-2 cs-fs-14 mt-3 px-2 py-2">مشاهده</button>
                            </p>
                        </div>
                    </div>

                    <ul className="list-group list-group-flush d-flex justify-content-center align-items-center">
                        <li className="py-3 cs-fs-14 px-5 w-100 d-flex justify-content-center align-items-center">
                            <span className="mx-4 rounded-2 py-3 px-4 list-group-item w-25">شماره تلفن</span>
                            <span className="mx-4 rounded-2 py-3 px-4 list-group-item w-25">{user.node_id}</span>
                        </li>
                        <li className="py-3 cs-fs-14 px-5 w-100 d-flex justify-content-center align-items-center">
                            <span className="mx-4 rounded-2 py-3 px-4 list-group-item w-25">سن</span>
                            <span className="mx-4 rounded-2 py-3 px-4 list-group-item w-25">-</span>
                        </li>
                        <li className="py-3 cs-fs-14 px-5 w-100 d-flex justify-content-center align-items-center">
                            <span className="mx-4 rounded-2 py-3 px-4 list-group-item w-25">تعداد سفارش‌ها</span>
                            <span className="mx-4 rounded-2 py-3 px-4 list-group-item w-25">ندارد</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default UserDetails;
