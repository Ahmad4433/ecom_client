import React, { useState } from "react";
import ProductTitle from "./ProductTitle";
import "./createProduct.css";
import ProductPrice from "./ProductPrice";
import ProductBrnading from "./ProductBrnading";
import ProductMedia from "./ProductMedia";
import FormBox from "../../ui/FormBox";
import Button from "../../ui/Button";
import httpAction from "../../../utils/httpAction";
import apiActions from "../../../utils/apiActions";
import useProvideGeneralHooks from "../../../hooks/useProvideGeneralHooks";
import toast from "react-hot-toast";
const CreateProduct = () => {
  const { dispatch, loading, setLoading, useSelector } =
    useProvideGeneralHooks();
  const product = useSelector((state) => state.product.singleProduct);

  const [title, setTitle] = useState(product?.title || "");
  const [detail, setDetail] = useState(product?.detail || "");
  const [price, setPrice] = useState(product?.salePrice || "");
  const [purchase, setPurchase] = useState(product?.purchasePrice || "");
  const [stock, setStock] = useState(product?.stock || "");
  const [brand, setBrand] = useState(product?.brand?.title || "");
  const [category, setCategory] = useState(product?.category?.title || "");
  const [files, setFiles] = useState(product?.image || []);

  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const detailChange = (event) => {
    setDetail(event.target.value);
  };
  const priceChange = (event) => {
    setPrice(event.target.value);
  };
  const purchaseChange = (event) => {
    setPurchase(event.target.value);
  };
  const stockChange = (event) => {
    setStock(event.target.value);
  };

  const brandChange = (event) => {
    setBrand(event.target.value);
  };
  const categoryChange = (event) => {
    setCategory(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const body = {
      title,
      salePrice: price,
      purchasePrice: purchase,
      detail,
      images: files,
      stock,
      category,
      brand,
    };
    setLoading(true);
    const result = await dispatch(
      httpAction(apiActions().createNewProduct({ ...body }))
    );
    setLoading(false);

    if (result?.status) {
      toast.success(result?.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="create_product_main">
        <FormBox>
          <ProductTitle
            detail={detail}
            detailChange={detailChange}
            title={title}
            titleChange={titleChange}
          />
          <ProductPrice
            price={price}
            priceChange={priceChange}
            purchase={purchase}
            purchaseChange={purchaseChange}
          />
          <ProductBrnading
            brand={brand}
            brandChange={brandChange}
            category={category}
            categoryChange={categoryChange}
            stock={stock}
            stockChange={stockChange}
          />
          <ProductMedia setFiles={setFiles} files={files} />
          <div style={{ textAlign: "right" }}>
            <Button disabled={loading} small>
              {loading ? "please wait..." : "Add Product"}
            </Button>
          </div>
        </FormBox>
      </div>
    </form>
  );
};

export default CreateProduct;
