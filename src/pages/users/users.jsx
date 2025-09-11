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
    const colors = ["#eeeeee", "#dddddd", "#cccccc", "#bbbbbb"];

    return (
        <>
            <UserForm />

            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4 w-for-e-100 align-items-center">
                {loading ? (
                    skeletonArray.map((_, index) => (
                        <div
                            key={index}
                            className="user-card d-flex flex-wrap justify-content-center align-items-center product-card mx-2 px-3 py-3 my-2"
                            style={{
                                background: colors[0],
                                borderRadius: '8px',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                                boxSizing: 'border-box'
                            }}
                        >
                            <div className="mx-3 box-img-story">
                                <Skeleton
                                    circle
                                    height={80}
                                    width={80}
                                    baseColor={colors[0]}
                                    highlightColor={colors[1]}
                                    duration={0.8}
                                />
                            </div>

                            <div className="user-info w-100 text-center mt-2">
                                <p className="my-1 one-line">
                                    <Skeleton width="80%" height={14} baseColor={colors[1]} highlightColor={colors[2]} />
                                </p>
                                <p className="my-1 one-line">
                                    <Skeleton width="60%" height={14} baseColor={colors[1]} highlightColor={colors[2]} />
                                </p>
                                <p className="my-1 one-line">
                                    <Skeleton width="90%" height={14} baseColor={colors[2]} highlightColor={colors[3]} />
                                </p>
                                <p className="my-1 one-line">
                                    <Skeleton width="70%" height={14} baseColor={colors[2]} highlightColor={colors[3]} />
                                </p>
                            </div>

                            <div className="edit-btn mt-3">
                                <Skeleton
                                    width={150}
                                    height={30}
                                    baseColor={colors[1]}
                                    highlightColor={colors[2]}
                                    duration={0.8}
                                />
                            </div>
                        </div>
                    ))
                ) : UsersData.length ? (
                    UsersData.map((user) => (
                        <div key={user.id} className="user-card d-flex flex-wrap justify-content-center align-items-center product-card mx-2 px-3 py-3 my-2">
                            <div className="mx-3 box-img-story">
                                <img src={user.avatar_url} className="img-story" />
                            </div>

                            <div className="user-info w-100 text-center">
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
