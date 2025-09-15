import { forwardRef, useState, useEffect } from "react";
import EditBtn from "../BTN/EdtiBtn";
import DeleteBtn from "../BTN/DeleteBtn";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BrandBox = forwardRef(({ brand, isActive, onClick, onActionClick }, ref) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            ref={ref}
            className={`product-card mx-3 my-2 ${isActive ? "active" : ""} ${brand.image ? "" : "d-none"}`}>
            {loading ? (
                <div className="product-content d-flex flex-column align-items-center justify-content-center">
                    <Skeleton circle={true} height={60} width={60} />
                    <Skeleton width={80} height={20} style={{ marginTop: 8 }} />
                </div>
            ) : (
                <div
                    className="product-content d-flex flex-column align-items-center justify-content-center"
                    onClick={onClick} >
                    <img
                        src={brand.image || "/fallback-brand.png"}
                        alt={brand.title}
                        style={{ width: "60px", height: "60px", borderRadius: "8px", objectFit: "contain" }}
                    />
                    <p className="product-name mt-2">{brand.title}</p>
                </div>
            )}

            {isActive && !loading && (
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
