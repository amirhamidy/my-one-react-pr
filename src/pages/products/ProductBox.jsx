import { memo, forwardRef } from "react";

const ProductBox = forwardRef(({ product, isActive, onClick, onActionClick }, ref) => {
    return (
        <div
            ref={ref}
            className={`product-card mx-3 my-2 ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            <div className="product-content">
                <div className="product-info">
                    <img
                        className="width-for-main-product"
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                    />
                    <p className="product-code cs-fs-14">کد: {product.id}</p>
                    <p className="product-name cs-fs-14">{product.title}</p>
                    <p className="product-category cs-fs-14">
                        دسته بندی: {product.category.title}
                    </p>
                    <p
                        className={`product-status cs-fs-14 ${product.status === "published" ? "text-success" : "text-danger"
                            }`}
                    >
                        وضعیت: {product.status === "published" ? "نمایش " : "عدم نمایش"}
                    </p>
                </div>
            </div>

            {isActive && (
                <div className="product-actions" onClick={(e) => e.stopPropagation()}>
                    <button type="button" className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2" onClick={() => onActionClick("edit", product)}>ویرایش</button>
                    <button type="button" className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2" onClick={() => onActionClick("view", product)}>مشاهده</button>
                    <button type="button" className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2" onClick={() => onActionClick("info", product)}>گرفتن مشخصات</button>
                    <button type="button" className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2" onClick={() => onActionClick("color-price", product)}>گرفتن رنگ و قیمت</button>
                </div>
            )}
        </div>
    );
});

export default memo(ProductBox);
