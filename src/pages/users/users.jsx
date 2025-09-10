import { Link } from "react-router-dom";
import UserForm from "./userForm";
import axios from "axios";
import { useState } from "react";


const Users = () => {
    const [UsersData, SetUsersData] = useState([])

    axios.get('https://api.github.com/users').then(
        res => SetUsersData(res.data)
    )

    return (
        <>



            <UserForm></UserForm>

            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
                {UsersData.map((user) => (
                    <div key={user.id} className="user-card d-flex flex-wrap justify-content-center align-items-center product-card  mx-2 px-3 py-3 my-2">
                        <div className="mx-3 box-img-story">
                            <img
                                src={user.avatar_url}
                                className="img-story"
                            />
                        </div>

                        <div className="user-info w-100 text-center">
                            <p className="my-2  one-line "><strong>کد کاربر:</strong> {user.node_id}</p>
                            <p className="my-2  one-line "><strong>ایمیل:</strong> {user.type}</p>
                            <p className="my-2  one-line "><strong>نام:</strong> {user.login}</p>
                            <p className="my-2  one-line "><strong>شماره:</strong> {user.node_id}</p>
                        </div>
                        <Link to='/users/details' className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 mt-3">مشاهده تمام جزئیات</Link>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Users;
