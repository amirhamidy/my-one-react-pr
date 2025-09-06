import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "./Editor";

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
      <div className="w-100 pb-3">
        <form className="w-100 d-flex justify-content-around align-items-baseline  text-center flex-wrap px-3 py-3 mb-2 container cs-bg rounded-1">
          <div className="px-2 w-right text-light cs-fs-14  text-right w-25">
            <input className="form-control-custom rounded-1" type="text" placeholder="کد محصول یا نام محصول و .... " />
          </div>
          <div className="px-2 my-2 w-right text-light cs-fs-14 d-flex justify-content-around text-right w-75">
            <ul className="fill-titr align-items-center">
              دسته بندی
              <svg className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
              >
                <path
                  fill="currentColor"
                  d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M9 9H5V5h4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 6h-4V5h4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6H5v-4h4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2"
                ></path>
              </svg>
              <ul className="fill-list">
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
              </ul>
            </ul>
            <ul className="fill-titr">
              وضعیت نمایش
              <svg className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
              >
                <path
                  fill="currentColor"
                  d="M8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5m3.945 2.652c.94.6 1.737 1.403 2.335 2.348a7.6 7.6 0 0 1-2.335 2.348a7.33 7.33 0 0 1-7.889 0A7.6 7.6 0 0 1 1.721 8a7.6 7.6 0 0 1 2.52-2.462a4 4 0 1 0 7.518 0q.093.056.185.114zM8 6.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 6.5"
                ></path>
              </svg>

              <ul className="fill-list">
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
              </ul>
            </ul>
            <ul className="fill-titr">
              برند
              <svg className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
              >
                <path
                  fill="currentColor"
                  d="M15.778 8.208c-.473-.037-.98.076-1.758.373c.065-.025-.742.29-.969.37c-.502.175-.915.271-1.378.271c-.458 0-.88-.092-1.365-.255a11 11 0 0 1-.505-.186l-.449-.177c-.648-.254-1.012-.35-1.315-.342c-1.153.014-2.243.68-2.877 1.782c-1.292 2.243-.576 6.299 1.313 9.031c1.005 1.444 1.556 1.96 1.777 1.953c.222-.01.386-.057.784-.225l.166-.071c1.006-.429 1.71-.618 2.771-.618c1.021 0 1.703.186 2.669.602l.168.072c.397.17.54.208.792.202c.357-.005.798-.417 1.777-1.854c.268-.391.505-.803.71-1.22a7 7 0 0 1-.391-.347c-1.29-1.228-2.087-2.884-2.109-4.93A6.63 6.63 0 0 1 17 8.458a4.1 4.1 0 0 0-1.221-.25m.155-1.994c.708.048 2.736.264 4.056 2.196c-.108.06-2.424 1.404-2.4 4.212c.036 3.36 2.94 4.476 2.976 4.488c-.024.084-.468 1.596-1.536 3.156c-.924 1.356-1.884 2.7-3.396 2.724c-1.488.036-1.968-.876-3.66-.876c-1.704 0-2.232.852-3.636.912c-1.464.048-2.568-1.464-3.504-2.808c-1.908-2.76-3.36-7.776-1.404-11.172c.972-1.692 2.7-2.76 4.584-2.784c1.428-.036 2.784.96 3.66.96c.864 0 2.412-1.152 4.26-1.008m-1.14-1.824c-.78.936-2.052 1.668-3.288 1.572c-.168-1.272.456-2.604 1.176-3.432c.804-.936 2.148-1.632 3.264-1.68c.144 1.296-.372 2.604-1.152 3.54"
                ></path>
              </svg>
              <ul className="fill-list">
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
              </ul>
            </ul>
            <ul className="fill-titr">
              مرتب سازی
              <svg className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.3em"
                height="1.3em"
              >
                <path
                  fill="currentColor"
                  d="M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 6.9a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M8 11h13v2H8zm0 7h13v2H8z"
                ></path>
              </svg>
              <ul className="fill-list">
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
                <li>این یک نمونه تست هست</li>
              </ul>
            </ul>
          </div>
        </form>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="text-light py-2 px-3 border-0 rounded-2 add-pr-mr"
      >
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

          <button
            type="submit"
            className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 my-3"
          >
            اضافه کردن محصول
          </button>
        </form>
        <Editor></Editor>
      </div>
    </>
  );
};

export default AddProduct;
