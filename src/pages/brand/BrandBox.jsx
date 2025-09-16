import { forwardRef, useState, useEffect } from "react";
import EditBtn from "../BTN/EdtiBtn";
import DeleteBtn from "../BTN/DeleteBtn";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BrandBox = forwardRef(({ brand, isActive, onClick, onActionClick }, ref) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (!brand.image) return null;

    const BOX_SIZE = 60;
    const PADDING = 12;
    const TEXT_HEIGHT = 20;

    return (
        <div
            ref={ref}
            className={`product-card mx-3 my-2 ${isActive ? "active" : ""}`}
            style={{
                position: "relative",
                padding: PADDING,
                boxSizing: "border-box",
                minWidth: BOX_SIZE + PADDING * 2,
                minHeight: BOX_SIZE + TEXT_HEIGHT + PADDING * 2,
            }}
        >
            {loading ? (
                <div
                    className="product-content d-flex flex-column align-items-center justify-content-center"
                    style={{
                        width: BOX_SIZE,
                        height: BOX_SIZE + TEXT_HEIGHT,
                        boxSizing: "border-box",
                        padding: PADDING,
                    }}
                >
                    <Skeleton circle height={BOX_SIZE} width={BOX_SIZE} />
                    <Skeleton width={BOX_SIZE} height={TEXT_HEIGHT} style={{ marginTop: 8 }} />
                </div>
            ) : (
                <div
                    className="product-content d-flex flex-column align-items-center justify-content-center"
                    onClick={onClick}
                    style={{ width: BOX_SIZE, boxSizing: "border-box" }}
                >
                    <img
                        src={brand.image}
                        alt={brand.title}
                        style={{
                            width: BOX_SIZE,
                            height: BOX_SIZE,
                            borderRadius: "8px",
                            objectFit: "contain",
                        }}
                    />
                    <p className="product-name mt-2" style={{ textAlign: "center" }}>{brand.title}</p>
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
                    <EditBtn onClick={() => onActionClick("edit", brand)} />
                    <DeleteBtn onClick={() => onActionClick("delete", brand)} />
                </div>
            )}
        </div>
    );
});

export default BrandBox;
