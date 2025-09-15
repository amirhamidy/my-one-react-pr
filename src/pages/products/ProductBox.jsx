import { memo, forwardRef } from "react";
import EditBtn from "../BTN/EdtiBtn";
import SeenBtn from "../BTN/SeenBtn";
import InfoBtn from "../BTN/InfoBtn";
import ColorPriceBtn from "../BTN/ColorPriceBtn";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductBox = forwardRef(({ product, isActive, onClick, onActionClick, loading }, ref) => {
    if (loading) {
        return (
            <div className="product-card mx-3 my-2">
                <div className="product-content">
                    <Skeleton height={150} />
                    <p className="product-code cs-fs-14"><Skeleton width={80} /></p>
                    <p className="product-name cs-fs-14"><Skeleton width={120} /></p>
                    <p className="product-category cs-fs-14"><Skeleton width={100} /></p>
                    <p className="product-status cs-fs-14"><Skeleton width={90} /></p>
                </div>
            </div>
        );
    }

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
                    <EditBtn onClick={() => onActionClick("edit", product)}></EditBtn>
                    <SeenBtn onClick={() => onActionClick("view", product)}></SeenBtn>
                    <InfoBtn onClick={() => onActionClick("info", product)}></InfoBtn>
                    <ColorPriceBtn onClick={() => onActionClick("color-price", product)}></ColorPriceBtn>
                </div>
            )}
        </div>
    );
});

export default memo(ProductBox);
