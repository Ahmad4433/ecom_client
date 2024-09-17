import React from "react";
import "./productTitle.css";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Box from "../../ui/Box";
import FormBox from "../../ui/FormBox";
import SectionTitle from "../../ui/SectionTitle";
import TextArea from "../../ui/TextArea";
const ProductTitle = ({ title, titleChange, detail, detailChange }) => {
  return (
    <div className="product_title_main">
      <Box>
        <SectionTitle>Product Detail</SectionTitle>
        <FormBox>
          <div>
            <Label>product title *</Label>
            <Input
              type="text"
              placeholder="Title"
              required
              onChange={titleChange}
              value={title}
            />
          </div>
          <div>
            <Label>Product detail *</Label>
            <TextArea
              required
              placeholder="type here..."
              onChange={detailChange}
              value={detail}
              row={5}
            />
          </div>
        </FormBox>
      </Box>
    </div>
  );
};

export default ProductTitle;
