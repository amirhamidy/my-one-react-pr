import React, { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("محصول اضافه شد!");
  };

  return (
    <div className="container my-4">
      <h3 className="mb-4" style={{ color: "#ff4f29" }}>افزودن محصول</h3>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control shadow-sm rounded"
              placeholder="نام محصول"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control shadow-sm rounded"
              placeholder="اسلاگ"
              name="slug"
              value={form.slug}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="status"
                checked={form.status}
                onChange={handleChange}
              />
              <label className="form-check-label">نمایش محصول</label>
            </div>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control shadow-sm rounded"
              placeholder="دسته بندی"
              name="category"
              value={form.category}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control shadow-sm rounded"
              placeholder="برند"
              name="brand"
              value={form.brand}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control shadow-sm rounded"
              placeholder="تایتل انگلیسی"
              name="englishTitle"
              value={form.englishTitle}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control shadow-sm rounded"
              placeholder="گارانتی"
              name="warranty"
              value={form.warranty}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control shadow-sm rounded"
              placeholder="متا دیسکریپشن"
              name="metaDescription"
              value={form.metaDescription}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control shadow-sm rounded"
              placeholder="متا تایتل"
              name="metaTitle"
              value={form.metaTitle}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn mt-4"
          style={{ backgroundColor: "#ff4f29", color: "#fff" }}
        >
          اضافه کردن محصول
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
