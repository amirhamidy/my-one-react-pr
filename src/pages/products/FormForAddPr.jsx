import React, { useState, useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
];

const MainDetaForPr = ({ onSubmit }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

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
        if (onSubmit) {
            onSubmit(form);
        } else {
            console.log(form);
            alert("محصول اضافه شد!");
        }
    };

    if (loading) {
        return (
            <div className="row add-pr-row">
                {Array.from({ length: 10 }).map((_, idx) => (
                    <div key={idx} className="col-md-6 mb-3">
                        <Skeleton height={40} />
                    </div>
                ))}
            </div>
        );
    }

    return (
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
                            <li
                                onMouseDown={() => {
                                    setForm({ ...form, status: true });
                                    setStatusOpen(false);
                                }}
                            >
                                نمایش محصول
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
    );
};

export default MainDetaForPr;
