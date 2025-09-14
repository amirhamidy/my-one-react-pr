import { useNavigate } from "react-router-dom";
import Editor from "./Editor";
import TickIcon from "../icons/TickIcon";
import BackIcon from "../icons/BackIcon";
import MainDetaForPr from "./FormForAddPr";
import ProductForm from "./ProductForm";
import MainImgProduct from "./MainImgProduct";
import ProductDetailImages from "./ProductDetailImages";

const AddProduct = () => {
  const navigate = useNavigate();


  const handleFormSubmit = (formData) => {
    console.log("📦 محصول ثبت شد:", formData);
    alert("محصول اضافه شد!");
  };

  return (
    <>

    <ProductForm></ProductForm>
      <button
        onClick={() => navigate(-1)}
        className="text-light py-2 px-2 border-0 cs-fs-14 rounded-2 add-pr-mr "
      >
        <BackIcon /> بازگشت
      </button>

      <div className="add-pr-container container px-5">
        <h3 className="text-right py-4 cs-fs-15 fw-bold">افزودن محصول</h3>

        <MainDetaForPr onSubmit={handleFormSubmit} />

        <Editor />

        <MainImgProduct></MainImgProduct>


        <ProductDetailImages></ProductDetailImages>
        
        <button
          type="submit"
          className="edit-btn border-none rounded-2 cs-fs-14 px-2 py-2 my-3"
        >
          ثبت محصول
          <TickIcon />
        </button>
      </div>
    </>
  );
};

export default AddProduct;
