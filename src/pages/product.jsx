import { useState } from "react";

const productsData = [
  { code: "P001", name: "محصول اول با نام طولانی", category: "دسته A", status: "published" },
  { code: "P002", name: "محصول دوم", category: "دسته B", status: "unpublished" },
  { code: "P003", name: "محصول سوم", category: "دسته C", status: "published" },
  { code: "P004", name: "محصول چهارم با نام طولانی", category: "دسته A", status: "published" },
  { code: "P005", name: "محصول پنجم", category: "دسته B", status: "unpublished" },
  { code: "P006", name: "محصول ششم", category: "دسته C", status: "published" },
  { code: "P007", name: "محصول هفتم", category: "دسته A", status: "published" },
  { code: "P008", name: "محصول هشتم", category: "دسته B", status: "unpublished" },
  { code: "P009", name: "محصول نهم", category: "دسته C", status: "published" },
  { code: "P010", name: "محصول دهم", category: "دسته A", status: "published" },
];

export default function ProductsGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="products-grid">
      {productsData.map((product, index) => (
        <div
          key={product.code}
          className={`product-card ${activeIndex !== null && activeIndex !== index ? "inactive" : ""}`}
        >
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
              <button className="action-btn edit-btn">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M20 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"/>
                  <path d="M18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"/>
                </svg>
                ویرایش
              </button>
              <button className="action-btn view-btn">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" stroke="currentColor"/>
                </svg>
                مشاهده
              </button>
              <button className="action-btn delete-btn">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
                حذف
              </button>
              <button className="action-btn share-btn">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M18 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3.027 3.027 0 0 0 0-.74l4.94-2.47A3 3 0 0 0 18 8Z" fill="currentColor"/>
                </svg>
                اشتراک
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}