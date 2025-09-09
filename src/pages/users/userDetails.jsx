import React from "react";

const UserDetails = () => {
  const user = {
    id: 123,
    fullName: "مریم احمدی",
    phone: "09381234567",
    userType: "ادمین",
    ordersCount: 0,
    age: 32,
    avatar: "src/assets/img/d-profile.png",
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm p-3">
        <div className="d-flex align-items-center mb-3">
          <img
            src={user.avatar}
            alt={user.fullName}
            className="rounded-circle me-3"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          <div>
            <h5 className="mb-1">{user.fullName}</h5>
            <p className="mb-0 text-muted">{user.userType}</p>
          </div>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            شماره تلفن
            <span>{user.phone}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            سن
            <span>{user.age}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            تعداد سفارش‌ها
            <span>
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
  );
};

export default UserDetails;
