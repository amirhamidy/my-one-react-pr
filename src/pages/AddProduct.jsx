import React, { useState, useEffect, useRef } from "react";

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
      const filtered = categoriesMock.filter((c) =>
        c.name.startsWith(value)
      );
      setFilteredCategories(filtered);
      setCategoryOpen(true);
      setCategoryActiveIndex(-1);
    }

    if (name === "brand") {
      const filtered = brandsMock.filter((b) =>
        b.name.startsWith(value)
      );
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
    <div className="add-pr-container">
      <h3 className="text-right py-4 cs-fs-15 fw-bold">افزودن محصول</h3>
      <form onSubmit={handleSubmit}>
        <div className="row add-pr-row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr"
              placeholder="نام محصول"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr"
              placeholder="اسلاگ"
              name="slug"
              value={form.slug}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="form-check">
              <input
                className="form-check-input add-pr-checkbox"
                type="checkbox"
                name="status"
                checked={form.status}
                onChange={handleChange}
              />
              <label className="form-check-label cs-fs-13">نمایش محصول</label>
            </div>
          </div>

          <div className="col-md-6 add-pr-autocomplete" ref={categoryRef}>
            <input
              type="text"
              className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr"
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
              className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr"
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
              className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr"
              placeholder="تایتل انگلیسی"
              name="englishTitle"
              value={form.englishTitle}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr"
              placeholder="گارانتی"
              name="warranty"
              value={form.warranty}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr"
              placeholder="متا دیسکریپشن"
              name="metaDescription"
              value={form.metaDescription}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control-custom rounded-2 add-pr-input cs-fs-14 px-2 py-cs-for-pr"
              placeholder="متا تایتل"
              name="metaTitle"
              value={form.metaTitle}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 my-3">
          اضافه کردن محصول
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
