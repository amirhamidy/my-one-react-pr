import { forwardRef } from "react";
import EditBtn from "../BTN/EdtiBtn";
import DeleteBtn from "../BTN/DeleteBtn";

const BrandBox = forwardRef(({ brand, isActive, onClick, onActionClick }, ref) => {
    return (
        <div
            ref={ref}
            className={`product-card mx-3 my-2 ${isActive ? "active" : ""} ${brand.image ? "" : "d-none"}`}
        >
            <div
                className="product-content d-flex flex-column align-items-center justify-content-center"
                onClick={onClick}
            >
                <img
                    src={brand.image || "/fallback-brand.png"}
                    alt={brand.title}
                    style={{ width: "60px", height: "60px", borderRadius: "8px", objectFit: "contain" }}
                />
                <p className="product-name mt-2">{brand.title}</p>
            </div>

            {isActive && (
                <div
                    className="product-actions"
                    style={{
                        position: "absolute",
                        top: "15%",
                        left: "10%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.1rem",
                        transition: "0.3s",
                        animation: "fadeIn 0.3s ease forwards",
                    }}
                >
                    <EditBtn onClick={() => onActionClick("edit", brand)}></EditBtn>
                    <DeleteBtn onClick={() => onActionClick("delete", brand)}></DeleteBtn>
                </div>
            )}
        </div>
    );
});

export default BrandBox;
