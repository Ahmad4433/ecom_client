import React, { useEffect, useState } from "react";
import "./productBranding.css";
import Input from "../../ui/Input";
import Box from "../../ui/Box";
import Label from "../../ui/Label";
import FormBox from "../../ui/FormBox";
import SectionTitle from "../../ui/SectionTitle";
import Select from "../../ui/Select";
import Row from "../../ui/Row";
import PopupModal from "../../ui/PopupModal";
import { IoAddOutline } from "react-icons/io5";
import FileSelect from "../../common/FileSelect";
import Button from "../../ui/Button";
import httpAction from "../../../utils/httpAction";
import apiActions from "../../../utils/apiActions";
import useProvideGeneralHooks from "../../../hooks/useProvideGeneralHooks";
import toast from "react-hot-toast";
const ProductBrnading = ({
  stockChange,
  stock,
  brandChange,
  brand,
  category,
  categoryChange,
}) => {
  const { dispatch, loading, setLoading } = useProvideGeneralHooks();
  const [openBrand, setOpenBrand] = useState(false);
  const [title, setTitle] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [file, setFile] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const newCategoryChange = (event) => {
    setNewCategory(event.target.value);
  };

  const openBrandModal = (title) => {
    setOpenBrand(true);
    setTitle(title);
    if (title.includes("Category")) {
      setPlaceholder("category");
    } else {
      setPlaceholder("brand");
    }
  };

  const closeHandler = () => {
    setOpenBrand(false);
    setFile([]);
    setNewCategory("");
    setTitle("");
  };

  const addBranding = async (event) => {
    if (file.length === 0) {
      return;
    }

    const { url } = file[0];
    const result = await dispatch(
      httpAction(
        title.includes("Category")
          ? apiActions().addNewCategory({ title: newCategory, image: url })
          : apiActions().addNewBrand({ title: newCategory, image: url })
      )
    );
    if (result?.status) {
      toast.success(result?.message);
      setFile([]);
      setNewCategory("");
      setOpenBrand(false);
      setTitle("");
      if (title.includes("Category")) {
        setCategoryOptions((prevCategory) => [
          ...prevCategory,
          result?.category,
        ]);
      } else {
        setBrandOptions((prevOption) => [...prevOption, result?.brand]);
      }
    }
  };

  const brandingList = async (data) => {
    setLoading(true);
    const result = await dispatch(
      httpAction(apiActions().getAllCategory(data))
    );
    setLoading(false);
    if (result?.status) {
      if (data === "category") {
        setCategoryOptions(result?.list);
      } else {
        setBrandOptions(result?.list);
      }
    }
  };

  return (
    <div className="product_branding_main">
      <PopupModal title={title} show={openBrand} onClose={closeHandler}>
        <FormBox>
          <div>
            <Label>{placeholder} Title *</Label>
            <Input
              type="text"
              placeholder={placeholder}
              required
              onChange={newCategoryChange}
              value={newCategory}
            />
          </div>

          <div>
            <Label>Select Image *</Label>
            <FileSelect
              replaceOld
              title="Upload Image"
              files={file}
              setFiles={setFile}
            />
          </div>
          <Button onClick={addBranding} type="button">
            Add
          </Button>
        </FormBox>
      </PopupModal>
      <Box>
        <SectionTitle>Product Branding</SectionTitle>
        <FormBox>
          <Row>
            <div>
              <Label>Stock *</Label>
              <Input
                type="number"
                placeholder="stock"
                required
                onChange={stockChange}
                value={stock}
              />
            </div>
            <div>
              <div className="common_row">
                <Label>Select Brand *</Label>

                <span
                  onClick={() => openBrandModal("Add New Brand")}
                  className="common_yellow"
                >
                  Add New Brand <IoAddOutline />
                </span>
              </div>
              <Select
                onClick={() => brandingList("brand")}
                options={brandOptions}
                onChange={brandChange}
                value={brand}
                placeholder="Select Brand"
              />
            </div>
            <div>
              <div className="common_row">
                <Label>Select category *</Label>
                <span
                  onClick={() => openBrandModal("Add New Category")}
                  className="common_yellow"
                >
                  Add New Category <IoAddOutline />
                </span>
              </div>
              <Select
                onClick={() => brandingList("category")}
                onChange={categoryChange}
                value={category}
                options={categoryOptions}
                placeholder="Select Category"
              />
            </div>
          </Row>
        </FormBox>
      </Box>
    </div>
  );
};

export default ProductBrnading;
