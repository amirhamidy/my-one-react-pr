import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import StoryForm from "./storyForm";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Story = () => {
    const StoryData = [
        { StoryCode: "1", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: false, StoryDate: "2025/12/4" },
        { StoryCode: "2", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: true, StoryDate: "2025/12/4" },
        { StoryCode: "3", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: false, StoryDate: "2025/12/4" },
        { StoryCode: "4", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: true, StoryDate: "2025/12/4" },
        { StoryCode: "5", StorySrcImg: "../vite.svg", StoryTitle: "این یک نمونه تست هست", StoryBolPul: false, StoryDate: "2025/12/4" },
    ];

    const [openMenu, setOpenMenu] = useState(null);
    const [loading, setLoading] = useState(true);
    const storyRefs = useRef([]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const activeStoryIndex = StoryData.findIndex(item => item.StoryCode === openMenu);
            if (
                openMenu !== null &&
                storyRefs.current[activeStoryIndex] &&
                !storyRefs.current[activeStoryIndex].contains(event.target)
            ) {
                setOpenMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openMenu]);

    const toggleMenu = (code) => setOpenMenu(openMenu === code ? null : code);

    const menuStyles = {
        position: "absolute",
        top: "15%",
        left: "10%",
        display: "flex",
        flexDirection: "column",
        gap: "0.1rem",
        transition: "0.3s",
        animation: "fadeIn 0.3s ease forwards"
    };

    const buttonStyles = {
        borderRadius: "0.5rem",
        padding: "0.5rem 0.75rem"
    };

    return (
        <>
            <StoryForm />
            <Link to='/Sotry/AddAndEditStory' className="text-light py-2 cs-fs-14 px-2 border-0 rounded-2 add-pr-mr">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                    <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path>
                </svg>
                <span className="mx-1">ثبت استوری جدید</span>
            </Link>

            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
                {StoryData.map((item, index) => (
                    <div
                        key={item.StoryCode}
                        ref={(el) => (storyRefs.current[index] = el)}
                        className={`d-flex align-items-center product-card mx-2 my-2`}
                        style={{ padding: '16px 18px', position: 'relative' }}
                        onClick={() => toggleMenu(item.StoryCode)}
                    >
                        {openMenu === item.StoryCode && (
                            <div style={menuStyles}>
                                <button style={buttonStyles} className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">ویرایش</button>
                                <button style={buttonStyles} className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">حذف</button>
                            </div>
                        )}

                        <div
                            className="mx-3 box-img-story"
                            style={{
                                width: 60,
                                height: 60,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: '6px' // پدینگ اضافه شد
                            }}
                        >
                            {loading ? (
                                <Skeleton
                                    circle={true}
                                    height={70}
                                    width={70}
                                    baseColor="#e0e0e0"
                                    highlightColor="#f5f5f5"
                                />
                            ) : (
                                <img
                                    src={item.StorySrcImg}
                                    alt={item.StoryTitle}
                                    className="img-story"
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                />
                            )}
                        </div>

                        <div className="story-m-info mx-2 position-relative" style={{ minWidth: 150, padding: '4px' }}>
                            {loading ? (
                                <>
                                    <Skeleton width="110%" height={18} style={{ marginBottom: 6, padding: '4px' }} baseColor="#e0e0e0" highlightColor="#f5f5f5" />
                                    <Skeleton width="70%" height={16} style={{ marginBottom: 6, padding: '4px' }} baseColor="#e0e0e0" highlightColor="#f5f5f5" />
                                    <Skeleton width="90%" height={16} style={{ padding: '4px' }} baseColor="#e0e0e0" highlightColor="#f5f5f5" />
                                </>
                            ) : (
                                <>
                                    <p className="product-name mb-0">{item.StoryTitle}</p>
                                    <small className="cs-li-color">{item.StoryDate}</small>
                                    <p className={`product-status mb-0 ${item.StoryBolPul ? "published" : "unpublished"}`}>
                                        {item.StoryBolPul ? "نمایش" : "عدم نمایش"}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Story;
