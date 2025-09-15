import { Link } from "react-router-dom";
import UserForm from "./userForm";
import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Users = () => {
    const [UsersData, SetUsersData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.github.com/users')
            .then(res => {
                SetUsersData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const skeletonArray = Array(6).fill(0);

    return (
        <>
            <UserForm />

            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4 w-for-e-100 align-items-center">
                {loading ? (
                    skeletonArray.map((_, index) => (
                        <div
                            key={index}
                            className="user-card product-card mx-2 px-3 py-3 my-2"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                alignItems: "center",
                                boxSizing: "border-box"
                            }}
                        >
                            <div className="mx-3" style={{ width: 80, height: 80 }}>
                                <Skeleton width={80} height={80} style={{ borderRadius: 0, display: "block" }} />
                            </div>

                            <div className="user-info w-100 text-center mt-2">
                                <p className="my-1 one-line">
                                    <Skeleton width="80%" height={14} />
                                </p>
                                <p className="my-1 one-line">
                                    <Skeleton width="60%" height={14} />
                                </p>
                                <p className="my-1 one-line">
                                    <Skeleton width="90%" height={14} />
                                </p>
                                <p className="my-1 one-line">
                                    <Skeleton width="70%" height={14} />
                                </p>
                            </div>
                        </div>
                    ))
                ) : UsersData.length ? (
                    UsersData.map((user) => (
                        <div key={user.id} className="user-card product-card mx-2 px-3 py-3 my-2 d-flex flex-wrap justify-content-center align-items-center">
                            <div className="mx-3" style={{ width: 80, height: 80 }}>
                                <img src={user.avatar_url} alt={user.login} style={{ width: "100%", height: "100%", objectFit: "cover" , borderRadius : "50%" }} />
                            </div>

                            <div className="user-info w-100 text-center mt-2">
                                <p className="my-2 one-line"><strong>کد کاربر:</strong> {user.node_id}</p>
                                <p className="my-2 one-line"><strong>ایمیل:</strong> {user.type}</p>
                                <p className="my-2 one-line"><strong>نام:</strong> {user.login}</p>
                                <p className="my-2 one-line"><strong>شماره:</strong> {user.node_id}</p>
                            </div>

                            <Link to={`/users/${user.login}`} className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 mt-3">
                                مشاهده تمام جزئیات
                            </Link>
                        </div>
                    ))
                ) : (
                    <h4>هیچ کاربری یافت نشد</h4>
                )}
            </div>
        </>
    );
};

export default Users;
