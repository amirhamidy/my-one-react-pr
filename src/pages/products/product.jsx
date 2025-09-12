import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductForm from "./ProductForm";
import PlusIcon from "../icons/PlusIcon";


export default function ProductsGrid() {

    const [ProductsData, SetProductsData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const productRefs = useRef([]);

    useEffect(() => {


        axios.get('https://manmarket.ir/product/api/v1/product/').then(res => {
            SetProductsData(res.data.results)
        }).catch(err => {
            alert('ارور توی بخش محصولات')
        })



        const handleClickOutside = (event) => {
            if (activeIndex !== null && !productRefs.current[activeIndex].contains(event.target)) {
                setActiveIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [activeIndex]);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <ProductForm></ProductForm>
            <Link to='/product/Addproduct' className="text-light py-2 cs-fs-14 px-2 border-0 rounded-2 add-pr-mr">
                <PlusIcon></PlusIcon>
                <span className="mx-1">
                    ثبت محصول جدید
                </span>
            </Link>
            <div className="d-flex justify-content-center flex-wrap cs-h-for-pr py-4">
                {ProductsData.map((product, index) => (
                    <div
                        key={product.id}
                        ref={el => productRefs.current[index] = el}
                        className={`product-card mx-3 my-2 ${activeIndex === index ? "active" : ""}`}
                    >
                        <div className="product-content" onClick={() => handleClick(index)}>
                            <div className="product-info">
                                <img className="width-for-main-product" src={product.image} />
                                <p className="product-code cs-fs-14">کد: {product.id}</p>
                                <p className="product-name cs-fs-14">{product.title}</p>
                                <p className="product-category cs-fs-14">
                                    دسته بندی: {product.category.title}
                                </p>
                                <p className={`product-status cs-fs-14 ${product.status === "published" ? "text-success" : "text-danger"}`}>
                                    وضعیت: {product.status === "published" ? "نمایش " : "عدم نمایش"}
                                </p>
                            </div>
                        </div>

                        {activeIndex === index && (
                            <div className="product-actions" onClick={(e) => e.stopPropagation()}>
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                                    ویرایش
                                </button>
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                                    مشاهده
                                </button>
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                                    گرفتن مشخصات
                                </button>
                                <button className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2">
                                    گرفتن رنگ و قیمت
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}