import { Link } from "react-router-dom";

const Users = () => {
    const UsersData = [
        { UserCode: "1", UserEmail: "test1@gmail.com", Useravatar: 'src/assets/img/m-main-prof.png', UserName: "علی", UserPhone: "09380000001", UserLevel: "کاربر عادی" },
        { UserCode: "2", UserEmail: "test2@gmail.com", Useravatar: 'src/assets/img/m-main-prof.png', UserName: "مریم", UserPhone: "09380000002", UserLevel: "ادمین" },
        { UserCode: "3", UserEmail: "test3@gmail.com", Useravatar: 'src/assets/img/m-main-prof.png', UserName: "حسین", UserPhone: "09380000003", UserLevel: "کاربر عادی" },
        { UserCode: "4", UserEmail: "test1@gmail.com", Useravatar: 'src/assets/img/m-main-prof.png', UserName: "علی", UserPhone: "09380000001", UserLevel: "کاربر عادی" },
        { UserCode: "5", UserEmail: "test2@gmail.com", Useravatar: 'src/assets/img/m-main-prof.png', UserName: "مریم", UserPhone: "09380000002", UserLevel: "ادمین" },
        { UserCode: "6", UserEmail: "test3@gmail.com", Useravatar: 'src/assets/img/m-main-prof.png', UserName: "حسین", UserPhone: "09380000003", UserLevel: "کاربر عادی" },
        { UserCode: "7", UserEmail: "test1@gmail.com", Useravatar: 'src/assets/img/m-main-prof.png', UserName: "علی", UserPhone: "09380000001", UserLevel: "کاربر عادی" },
        { UserCode: "9", UserEmail: "test2@gmail.com", Useravatar: 'src/assets/img/m-main-prof.png', UserName: "مریم", UserPhone: "09380000002", UserLevel: "ادمین" },
        { UserCode: "10", UserEmail: "test3@gmail.com", Useravatar: 'src/assets/img/m-main-prof.png', UserName: "حسین", UserPhone: "09380000003", UserLevel: "کاربر عادی" },
        { UserCode: "11", UserEmail: "test3@gmail.com", Useravatar: 'src/assets/img/m-main-prof.png', UserName: "حسین", UserPhone: "09380000003", UserLevel: "کاربر عادی" },
    ];

    return (
        <>

            <form className="w-100 d-flex justify-content-start align-items-baseline w-right flex-wrap px-3 py-4 mb-2 container cs-bg rounded-1">
                <div className="px-2 w-right text-light cs-fs-14  text-right w-25">
                    <input className="form-control-custom rounded-1" type="text" placeholder="کد یا نام کاربر را وارد کنید ...." />
                </div>
            </form>

            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
                {UsersData.map((user) => (
                    <div key={user.UserCode} className="user-card d-flex flex-wrap justify-content-center align-items-center product-card  mx-2 px-3 py-3 my-2">
                        <div className="mx-3 box-img-story">
                            <img
                                src={user.Useravatar}
                                className="img-story"
                            />
                        </div>

                        <div className="user-info w-100 text-center">
                            <p className="my-2  one-line "><strong>کد کاربر:</strong> {user.UserCode}</p>
                            <p className="my-2  one-line "><strong>ایمیل:</strong> {user.UserEmail}</p>
                            <p className="my-2  one-line "><strong>نام:</strong> {user.UserName}</p>
                            <p className="my-2  one-line "><strong>شماره:</strong> {user.UserPhone}</p>
                            <p className="mb-0 user-level one-line ">{user.UserLevel}</p>
                        </div>
                        <button className="btn add-pr-mr text-light rounded-3 my-2">مشاهده تمام جزئیات</button>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Users;
