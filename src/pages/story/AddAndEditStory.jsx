
import { useState, useRef, useEffect } from "react";

const AdmStoryPanel = () => {
  const [stories, setStories] = useState([
    { id: "1", thumbnail: "../vite.svg", video: "../sample.mp4", storyTitle: "این یک نمونه تست هست", approved: false, productTitle: "محصول 1", productLink: "https://example.com/product1" },
    { id: "2", thumbnail: "../vite.svg", video: "../sample.mp4", storyTitle: "این یک نمونه تست هست", approved: true, productTitle: "محصول 2", productLink: "https://example.com/product2" },
  ]);

  const [openMenu, setOpenMenu] = useState(null);
  const storyRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const activeIndex = stories.findIndex((s) => s.id === openMenu);
      if (openMenu && storyRefs.current[activeIndex] && !storyRefs.current[activeIndex].contains(event.target)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu, stories]);

  const toggleMenu = (id) => setOpenMenu(openMenu === id ? null : id);

  return (
    <div className="adm-story-panel">
      <button className="adm-story-add-btn">+ ایجاد استوری جدید</button>
      <div className="adm-story-list">
        {stories.map((story, idx) => (
          <div key={story.id} ref={(el) => (storyRefs.current[idx] = el)} className={`adm-story-card ${openMenu === story.id ? "active" : ""}`}>
            <div className="adm-story-thumb"><img src={story.thumbnail} alt={story.storyTitle} /></div>
            <div className="adm-story-info">
              <h4 className="adm-story-title">{story.storyTitle}</h4>
              <p className={`adm-story-status ${story.approved ? "approved" : "pending"}`}>{story.approved ? "تایید شده" : "در انتظار تایید"}</p>
              <p className="adm-story-product">{story.productTitle} - <a href={story.productLink} target="_blank">لینک محصول</a></p>
            </div>
            <div className="adm-story-actions">
              <button onClick={() => toggleMenu(story.id)}>⋮</button>
              {openMenu === story.id && (
                <div className="adm-story-menu">
                  <button>ویرایش</button>
                  <button>حذف</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmStoryPanel;
