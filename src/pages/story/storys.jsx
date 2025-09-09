import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import StoryForm from "./storyForm";

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
    const storyRefs = useRef([]);

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

    const toggleMenu = (code) => {
        setOpenMenu(openMenu === code ? null : code);
    };

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

            <StoryForm></StoryForm>
            <Link to='/Sotry/AddAndEditStory' className="text-light py-2 px-3 cs-fs-14 border-0 rounded-2 add-pr-mr">
                استوری جدید
            </Link>
            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
                {StoryData.map((item, index) => (
                    <div
                        key={item.StoryCode}
                        ref={(el) => (storyRefs.current[index] = el)}
                        className={`d-flex align-items-center product-card mx-2 px-3 py-5 my-2 ${openMenu === item.StoryCode ? "active" : ""}`}
                        onClick={() => toggleMenu(item.StoryCode)}
                    >
                        <div className="product-actions" style={{ msFlexDirection: "column", position: "absolute", top: "15%", left: "10%", flexDirection: "column", display: "flex", gap: "0.1rem", transition: "0.3s", animation: "fadeIn 0.3s ease forwards" }}>
                            {openMenu === item.StoryCode && (
                                <div style={menuStyles}>
                                    <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2" style={buttonStyles}>ویرایش</button>
                                    <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2" style={buttonStyles}>حذف</button>
                                </div>
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
                                className={`product-status mb-0 ${item.StoryBolPul ? "published" : "unpublished"}`}
                            >
                                {item.StoryBolPul ? "نمایش" : "عدم نمایش"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Story;