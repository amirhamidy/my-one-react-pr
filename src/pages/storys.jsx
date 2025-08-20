import React, { useState} from "react";
import { Link } from "react-router-dom";

const Story = () => {
    const StoryData = [
        { StoryCode: "1", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: false, StoryDate: "2025/12/4" },
        { StoryCode: "2", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: true, StoryDate: "2025/12/4" },
        { StoryCode: "3", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: false, StoryDate: "2025/12/4" },
        { StoryCode: "4", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: true, StoryDate: "2025/12/4" },
        { StoryCode: "5", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: false, StoryDate: "2025/12/4" },
        { StoryCode: "6", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: true, StoryDate: "2025/12/4" },
        { StoryCode: "7", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: false, StoryDate: "2025/12/4" },
        { StoryCode: "8", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: true, StoryDate: "2025/12/4" },
        { StoryCode: "9", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: false, StoryDate: "2025/12/4" },
        { StoryCode: "10", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: true, StoryDate: "2025/12/4" },
        { StoryCode: "11", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: false, StoryDate: "2025/12/4" },
        { StoryCode: "12", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: true, StoryDate: "2025/12/4" },
    ];

    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (code) => {
        setOpenMenu(openMenu === code ? null : code);
    };

    return (
        <>
            <form className="w-100 d-flex justify-content-around align-items-baseline text-center flex-wrap px-3 py-4 mb-2 container cs-bg rounded-1">
                <div className="px-2 w-right text-light cs-fs-14 text-right w-25">
                    <input
                        className="form-control-custom rounded-1"
                        type="text"
                        placeholder=" جستجو ی استوری.... "
                    />
                </div>
                <div className="px-2 my-2 w-right text-light cs-fs-14 d-flex justify-content-around text-right w-75">
                </div>
            </form>

            <Link to='/Addstory' className="text-light btn add-pr-mr">
                استوری جدید
                <svg className="mx-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                </svg>
            </Link>

            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
                {StoryData.map((item) => (

                    <>

                        <div key={item.StoryCode} className="d-flex align-items-center product-card mx-2 px-3 py-5 my-2">
                            <div className="story-more-menu">
                                <button className="btn-more" onClick={() => toggleMenu(item.StoryCode)}>
                                    &#x22EE;
                                </button>
                                {openMenu === item.StoryCode && (
                                    <ul className="menu-options">
                                        <li>ویرایش</li>
                                        <li>حذف</li>
                                        <li>اشتراک گذاری</li>
                                    </ul>
                                )}
                            </div>
                            <div className="mx-3 box-img-story">
                                <img
                                    src={item.StorySrcImg}
                                    alt={item.StoryTitle}
                                    className="img-story"
                                />
                            </div>
                            <div className="story-m-info mx-2 position-relative">
                                <p className="product-name mb-0">{item.StoryTitle}</p>
                                <small className="cs-li-color">{item.StoryDate}</small>
                                <p
                                    className={`product-status mb-0 ${item.StoryBolPul ? "published" : "unpublished"
                                        }`}
                                >
                                    {item.StoryBolPul ? "نمایش" : "عدم نمایش"}
                                </p>
                            </div>
                        </div>
                    </>

                ))}
            </div>
        </>
    );
};

export default Story;
