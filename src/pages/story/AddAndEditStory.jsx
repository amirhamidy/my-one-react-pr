import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StoryForm from "./storyForm";

const productsMock = [
  { id: 1, name: "سامسونگ" },
  { id: 2, name: "اپل" },
  { id: 3, name: "شیائومی" },
  { id: 4, name: "هوآوی" },
  { id: 5, name: "دل" },
  { id: 6, name: "اچ‌پی" },
  { id: 7, name: "سونی" },
  { id: 8, name: "ال‌جی" },
  { id: 9, name: "ایسوس" },
  { id: 10, name: "مایکروسافت" },
];

const AdmStoryPanel = () => {
  const [form, setForm] = useState({
    storyTitle: "",
    captionTitle: "",
    video: null,
    banner: null,
    product: "",
    status: false,
  });

  const [videoPreview, setVideoPreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productOpen, setProductOpen] = useState(false);
  const [productActiveIndex, setProductActiveIndex] = useState(-1);
  const [statusOpen, setStatusOpen] = useState(false);

  const productRef = useRef(null);

  const navigate = useNavigate();


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (productRef.current && !productRef.current.contains(e.target)) {
        setProductOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (name === "video" && files[0]) {
      setForm({ ...form, video: files[0] });
      setVideoPreview(URL.createObjectURL(files[0]));
    } else if (name === "banner" && files[0]) {
      setForm({ ...form, banner: files[0] });
      setBannerPreview(URL.createObjectURL(files[0]));
    } else if (name === "product") {
      setForm({ ...form, product: value });
      const filtered = productsMock.filter((p) =>
        p.name.startsWith(value)
      );
      setFilteredProducts(filtered);
      setProductOpen(true);
      setProductActiveIndex(-1);
    } else if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSelectProduct = (name) => {
    setForm({ ...form, product: name });
    setProductOpen(false);
  };

  const handleKeyDown = (e) => {
    if (!productOpen) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setProductActiveIndex((prev) => (prev + 1) % filteredProducts.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setProductActiveIndex(
        (prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length
      );
    } else if (e.key === "Enter" && productActiveIndex >= 0) {
      e.preventDefault();
      handleSelectProduct(filteredProducts[productActiveIndex].name);
    }
  };


  return (

    <>

      <StoryForm></StoryForm>

      <button
        onClick={() => navigate(-1)}
        className="text-light py-2 px-3 border-0 cs-fs-14 rounded-2 add-pr-mr"
      >
        بازگشت
      </button>
      <div className="add-pr-container container px-5">
        <h3 className="text-right py-4 cs-fs-15 fw-bold">افزودن استوری</h3>
        <form>
          <div className="row add-pr-row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control-custom add-pr-input"
                placeholder="عنوان استوری"
                name="storyTitle"
                value={form.storyTitle}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control-custom add-pr-input"
                placeholder="عنوان محصول در کپشن"
                name="captionTitle"
                value={form.captionTitle}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <div
                className="form-control-custom add-pr-input cursor-pointer d-flex align-items-center"
                style={{ height: "50px" }}
                onClick={() => document.getElementById("videoInput").click()}
              >
                {form.video ? form.video.name : "آپلود ویدئو"}
              </div>
              <input
                type="file"
                id="videoInput"
                accept="video/*"
                name="video"
                onChange={handleChange}
                style={{ display: "none" }}
              />
              {videoPreview && (
                <video
                  src={videoPreview}
                  controls
                  className="img-story-2 mt-2"
                />
              )}
            </div>
            <div className="col-md-6">
              <div
                className="form-control-custom add-pr-input cursor-pointer d-flex align-items-center "
                style={{ height: "50px" }}
                onClick={() => document.getElementById("bannerInput").click()}
              >
                {form.banner ? form.banner.name : "آپلود بنر قبل از پخش"}
              </div>
              <input
                type="file"
                id="bannerInput"
                accept="image/*"
                name="banner"
                onChange={handleChange}
                style={{ display: "none", textAlign: "right" }}
              />
              {bannerPreview && (
                <img
                  src={bannerPreview}
                  alt="بنر"
                  className="img-story-2 mt-2"
                />
              )}
            </div>
            <div className="col-md-6 add-pr-autocomplete" ref={productRef}>
              <input
                type="text"
                className="form-control-custom add-pr-input"
                placeholder="انتخاب محصول"
                name="product"
                value={form.product}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                autoComplete="off"
              />
              {productOpen && filteredProducts.length > 0 && (
                <ul className="add-pr-suggestions">
                  {filteredProducts.map((p, idx) => (
                    <li
                      key={p.id}
                      className={productActiveIndex === idx ? "active" : ""}
                      onMouseDown={() => handleSelectProduct(p.name)}
                    >
                      {p.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="col-md-6 add-pr-autocomplete">
              <input
                type="text"
                className="form-control-custom add-pr-input"
                placeholder="وضعیت نمایش"
                readOnly
                value={form.status ? "نمایش استوری" : "عدم نمایش"}
                onClick={() => setStatusOpen(!statusOpen)}
              />
              {statusOpen && (
                <ul className="add-pr-suggestions">
                  <li
                    onMouseDown={() => {
                      setForm({ ...form, status: true });
                      setStatusOpen(false);
                    }}
                  >
                    نمایش استوری
                  </li>
                  <li
                    onMouseDown={() => {
                      setForm({ ...form, status: false });
                      setStatusOpen(false);
                    }}
                  >
                    عدم نمایش
                  </li>
                </ul>
              )}
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 my-3"
              >
                اضافه کردن استوری
              </button>
            </div>
          </div>
        </form>
      </div>
    </>

  );
};

export default AdmStoryPanel;
