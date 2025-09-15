import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from "../icons/BackIcon";
import BrandForm from "./BrandForm";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AdmBrandPanel = () => {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    logo: null,
  });

  const [logoPreview, setLogoPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo" && files[0]) {
      setForm({ ...form, logo: files[0] });
      setLogoPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Brand Data:", form);
  };

  return (
    <>
      <BrandForm></BrandForm>
      <button
        onClick={() => navigate(-1)}
        className="text-light py-2 px-2 border-0 cs-fs-14 rounded-2 add-pr-mr "
      >
        <BackIcon></BackIcon>
        بازگشت
      </button>

      <div className="add-pr-container container px-5">
        <h3 className="text-right py-4 cs-fs-15 fw-bold">افزودن برند</h3>
        <form onSubmit={handleSubmit}>
          <div className="row add-pr-row">
            <div className="col-md-6">
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <input
                  type="text"
                  className="form-control-custom add-pr-input"
                  placeholder="نام برند"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              )}
            </div>

            <div className="col-md-6">
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <input
                  type="text"
                  className="form-control-custom add-pr-input"
                  placeholder="اسلاگ برند"
                  name="slug"
                  value={form.slug}
                  onChange={handleChange}
                />
              )}
            </div>

            <div className="col-md-6">
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <>
                  <div
                    className="form-control-custom add-pr-input cursor-pointer d-flex align-items-center"
                    style={{ height: "50px" }}
                    onClick={() => document.getElementById("logoInput").click()}
                  >
                    {form.logo ? form.logo.name : "آپلود لوگو برند"}
                  </div>
                  <input
                    type="file"
                    id="logoInput"
                    accept="image/*"
                    name="logo"
                    onChange={handleChange}
                    style={{ display: "none" }}
                  />
                  {logoPreview && (
                    <img
                      src={logoPreview}
                      alt="لوگو برند"
                      className="img-story-2 mt-2"
                    />
                  )}
                </>
              )}
            </div>

            <div className="col-12">
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <button
                  type="submit"
                  className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 my-3"
                >
                  اضافه کردن برند
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdmBrandPanel;
