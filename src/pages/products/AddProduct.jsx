import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "./Editor";
import ProductForm from "./ProductForm";

const categoriesMock = [
  { id: 1, name: "لوازم خانگی" },
  { id: 2, name: "گوشی موبایل" },
  { id: 3, name: "کامپیوتر" },
  { id: 4, name: "کتاب" },
  { id: 5, name: "لباس" },
  { id: 6, name: "کفش" },
  { id: 7, name: "ساعت" },
  { id: 8, name: "ورزشی" },
  { id: 9, name: "غذا و نوشیدنی" },
  { id: 10, name: "زیبایی و سلامت" },
  { id: 11, name: "لپتاپ" },
  { id: 12, name: "تبلت" },
  { id: 13, name: "تلویزیون" },
  { id: 14, name: "کنسول بازی" },
  { id: 15, name: "لوازم آشپزخانه" },
  { id: 16, name: "دوربین" },
  { id: 17, name: "عطر" },
  { id: 18, name: "موسیقی" },
  { id: 19, name: "نوشت‌افزار" },
  { id: 20, name: "بازی و سرگرمی" },
];

const brandsMock = [
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
  { id: 11, name: "نینتندو" },
  { id: 12, name: "کاسیو" },
  { id: 13, name: "آدیداس" },
  { id: 14, name: "نایک" },
  { id: 15, name: "پاناسونیک" },
  { id: 16, name: "کنون" },
  { id: 17, name: "نیکون" },
  { id: 18, name: "فیلیپس" },
  { id: 19, name: "شیندلر" },
  { id: 20, name: "گروندیگ" },
];

const AddProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    slug: "",
    status: false,
    category: "",
    brand: "",
    englishTitle: "",
    warranty: "",
    metaDescription: "",
    metaTitle: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [categoryActiveIndex, setCategoryActiveIndex] = useState(-1);
  const [brandActiveIndex, setBrandActiveIndex] = useState(-1);
  const [statusOpen, setStatusOpen] = useState(false);

  const categoryRef = useRef(null);
  const brandRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategoryOpen(false);
      }
      if (brandRef.current && !brandRef.current.contains(event.target)) {
        setBrandOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });

    if (name === "category") {
      const filtered = categoriesMock.filter((c) => c.name.startsWith(value));
      setFilteredCategories(filtered);
      setCategoryOpen(true);
      setCategoryActiveIndex(-1);
    }

    if (name === "brand") {
      const filtered = brandsMock.filter((b) => b.name.startsWith(value));
      setFilteredBrands(filtered);
      setBrandOpen(true);
      setBrandActiveIndex(-1);
    }
  };

  const handleSelectCategory = (name) => {
    setForm({ ...form, category: name });
    setCategoryOpen(false);
  };

  const handleSelectBrand = (name) => {
    setForm({ ...form, brand: name });
    setBrandOpen(false);
  };

  const handleKeyDown = (e, type) => {
    let list, activeIndexSetter, activeIndex;
    if (type === "category") {
      list = filteredCategories;
      activeIndexSetter = setCategoryActiveIndex;
      activeIndex = categoryActiveIndex;
    } else {
      list = filteredBrands;
      activeIndexSetter = setBrandActiveIndex;
      activeIndex = brandActiveIndex;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndexSetter((prev) => (prev + 1) % list.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndexSetter((prev) => (prev - 1 + list.length) % list.length);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      type === "category"
        ? handleSelectCategory(list[activeIndex].name)
        : handleSelectBrand(list[activeIndex].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("محصول اضافه شد!");
  };






  return (
    <>

      <ProductForm></ProductForm>
      <button
        onClick={() => navigate(-1)}
        className="text-light py-2 px-2 border-0 cs-fs-14 rounded-2 add-pr-mr "
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M6 12.4h12M12.6 7l5.4 5.4l-5.4 5.4"
            ></path>
          </svg>

          بازگشت
      </button>
      <div className="add-pr-container container px-5">
        <h3 className="text-right py-4 cs-fs-15 fw-bold">افزودن محصول</h3>
        <form onSubmit={handleSubmit}>
          <div className="row add-pr-row">
            <div className="col-md-6">
              <input
                type="text"
                autoComplete="off"
                className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr w-75"
                placeholder="نام محصول"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                autoComplete="off"
                className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr w-75"
                placeholder="اسلاگ"
                name="slug"
                value={form.slug}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 add-pr-autocomplete">
              <input
                type="text"
                readOnly
                className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr w-75"
                placeholder="وضعیت نمایش"
                name="status"
                value={form.status ? "نمایش محصول" : "عدم نمایش"}
                onClick={() => setStatusOpen(!statusOpen)}
              />
              {statusOpen && (
                <ul className="add-pr-suggestions">
                  <li onMouseDown={() => { setForm({ ...form, status: true }); setStatusOpen(false); }}>
                    نمایش محصول
                  </li>
                  <li onMouseDown={() => { setForm({ ...form, status: false }); setStatusOpen(false); }}>
                    عدم نمایش
                  </li>
                </ul>
              )}
            </div>


            <div className="col-md-6 add-pr-autocomplete" ref={categoryRef}>
              <input
                type="text"
                autoComplete="off"
                className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr w-75"
                placeholder="دسته بندی"
                name="category"
                value={form.category}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, "category")}
              />
              {categoryOpen && filteredCategories.length > 0 && (
                <ul className="add-pr-suggestions">
                  {filteredCategories.map((c, idx) => (
                    <li
                      key={c.id}
                      className={categoryActiveIndex === idx ? "active" : ""}
                      onMouseDown={() => handleSelectCategory(c.name)}
                    >
                      {c.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="col-md-6 add-pr-autocomplete" ref={brandRef}>
              <input
                type="text"
                className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr w-75"
                placeholder="برند"
                name="brand"
                value={form.brand}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, "brand")}
              />
              {brandOpen && filteredBrands.length > 0 && (
                <ul className="add-pr-suggestions">
                  {filteredBrands.map((b, idx) => (
                    <li
                      key={b.id}
                      className={brandActiveIndex === idx ? "active" : ""}
                      onMouseDown={() => handleSelectBrand(b.name)}
                    >
                      {b.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="col-md-6">
              <input
                type="text"
                autoComplete="off"
                className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr w-75"
                placeholder="تایتل انگلیسی"
                name="englishTitle"
                value={form.englishTitle}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                autoComplete="off"
                className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr w-75"
                placeholder="گارانتی"
                name="warranty"
                value={form.warranty}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr w-75"
                placeholder="متا دیسکریپشن"
                name="metaDescription"
                value={form.metaDescription}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                autoComplete="off"
                className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr w-75"
                placeholder="متا تایتل"
                name="metaTitle"
                value={form.metaTitle}
                onChange={handleChange}
              />
            </div>
          </div>

        </form>
        <Editor></Editor>


        <div className="col-md-6 add-pr-autocomplete d-flex align-items-center gap-3">
          <label
            htmlFor="productImage"
            className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 my-3"
            style={{ cursor: "pointer" }}
          >
            اضافه کردن تصویر اصلی محصول
          </label>
          <input
            className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 my-3"
            type="file"
            id="productImage"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="preview"
              className="editor-image size-25 align-left"
            />
          )}
        </div>

        <button
          type="submit"
          className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 my-3"
        >
          ثبت محصول
          <svg className="mx-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="1.5em"
            height="1.5em">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"></path>
              <path d="m5.75 7.75l2.5 2.5l6-6.5"></path>
            </g>
          </svg>
        </button>
      </div>


    </>


  );
};

export default AddProduct;