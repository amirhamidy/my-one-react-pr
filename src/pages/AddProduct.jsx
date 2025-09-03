import React, { useState } from "react";

const categoriesMock = [
  { id: 1, name: "لوازم خانگی" },
  { id: 2, name: "گوشی موبایل" },
  { id: 3, name: "کامپیوتر" },
  { id: 4, name: "کتاب" },
  { id: 5, name: "لباس" },
];

const brandsMock = [
  { id: 1, name: "سامسونگ" },
  { id: 2, name: "اپل" },
  { id: 3, name: "شیائومی" },
  { id: 4, name: "هوآوی" },
  { id: 5, name: "دل" },
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "category") {
      const filtered = categoriesMock.filter((c) =>
        c.name.includes(value)
      );
      setFilteredCategories(filtered);
    }

    if (name === "brand") {
      const filtered = brandsMock.filter((b) => b.name.includes(value));
      setFilteredBrands(filtered);
    }
  };

  const handleSelectCategory = (name) => {
    setForm({ ...form, category: name });
    setFilteredCategories([]);
  };

  const handleSelectBrand = (name) => {
    setForm({ ...form, brand: name });
    setFilteredBrands([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("محصول اضافه شد!");
  };

  return (
    <div className="add-pr-container">
      <h3 className="add-pr-title">افزودن محصول</h3>
      <form onSubmit={handleSubmit}>
        <div className="row add-pr-row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control add-pr-input"
              placeholder="نام محصول"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control add-pr-input"
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
              <label className="form-check-label">نمایش محصول</label>
            </div>
          </div>

          <div className="col-md-6 add-pr-autocomplete">
            <input
              type="text"
              className="form-control add-pr-input"
              placeholder="دسته بندی"
              name="category"
              value={form.category}
              onChange={handleChange}
            />
            {filteredCategories.length > 0 && (
              <ul className="add-pr-suggestions">
                {filteredCategories.map((c) => (
                  <li
                    key={c.id}
                    onClick={() => handleSelectCategory(c.name)}
                  >
                    {c.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="col-md-6 add-pr-autocomplete">
            <input
              type="text"
              className="form-control add-pr-input"
              placeholder="برند"
              name="brand"
              value={form.brand}
              onChange={handleChange}
            />
            {filteredBrands.length > 0 && (
              <ul className="add-pr-suggestions">
                {filteredBrands.map((b) => (
                  <li key={b.id} onClick={() => handleSelectBrand(b.name)}>
                    {b.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control add-pr-input"
              placeholder="تایتل انگلیسی"
              name="englishTitle"
              value={form.englishTitle}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control add-pr-input"
              placeholder="گارانتی"
              name="warranty"
              value={form.warranty}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control add-pr-input"
              placeholder="متا دیسکریپشن"
              name="metaDescription"
              value={form.metaDescription}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control add-pr-input"
              placeholder="متا تایتل"
              name="metaTitle"
              value={form.metaTitle}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn add-pr-btn">
          اضافه کردن محصول
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
