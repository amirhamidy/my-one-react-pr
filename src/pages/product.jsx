import { useState } from "react";

const productsData = [
  { code: "P001", name: "آیفون 12 پرو مکس 256 گیگابایت", category: "موبایل", status: "published" },
  { code: "P002", name: "سامسونگ گلکسی S23 اولترا", category: "موبایل", status: "published" },
  { code: "P003", name: "لپ تاپ اپل مک بوک پرو 16 اینچ", category: "لپ تاپ", status: "published" },
  { code: "P004", name: "هدفون سونی WH-1000XM5", category: "لوازم جانبی", status: "published" },
  { code: "P005", name: "دوربین کانن EOS R5", category: "دوربین", status: "unpublished" },
  { code: "P006", name: "پلی استیشن 5 دیجیتال", category: "کنسول", status: "published" },
  { code: "P007", name: "تلویزیون الجی OLED 65 اینچ", category: "تلویزیون", status: "published" },
  { code: "P008", name: "اسپیکر جی‌بی ال پارتiboom", category: "صوتی", status: "unpublished" },
];

export default function ProductsGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="products-grid">
      {productsData.map((product, index) => (
        <div key={product.code} className={`product-card ${activeIndex !== null && activeIndex !== index ? "inactive" : ""}`}>
          <div className="product-content" onClick={() => handleClick(index)}>
            <div className="product-info">
              <p className="product-code">کد: {product.code}</p>
              <p className="product-name">{product.name}</p>
              <p className="product-category">{product.category}</p>
              <p className={`product-status ${product.status}`}>
                وضعیت: {product.status === "published" ? "نشر شده" : "نشر نشده"}
              </p>
            </div>
          </div>
          
          {activeIndex === index && (
            <div className="product-actions">
              <button className="action-button edit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"/>
                  <path d="M18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"/>
                  <path d="M12 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"/>
                </svg>
                ویرایش
              </button>
              <button className="action-button view">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                مشاهده
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}