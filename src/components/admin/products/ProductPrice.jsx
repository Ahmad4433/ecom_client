import React from "react";
import "./productPrice.css";
import Input from "../../ui/Input";
import Box from "../../ui/Box";
import FormBox from "../../ui/FormBox";
import Label from "../../ui/Label";
import SectionTitle from "../../ui/SectionTitle";
import Row from "../../ui/Row";
const ProductPrice = ({ priceChange, price, purchaseChange, purchase }) => {
  return (
    <div className="product_price_main">
      <Box>
        <SectionTitle>Product Pricing</SectionTitle>
        <FormBox>
          <Row>
            <div>
              <Label>Sale Price *</Label>
              <Input
                type="number"
                placeholder="sale price"
                onChange={priceChange}
                value={price}
                required
              />
            </div>
            <div>
              <Label>Purchase Price *</Label>
              <Input
                type="number"
                placeholder="purchase price"
                onChange={purchaseChange}
                value={purchase}
                required
              />
            </div>
          </Row>
        </FormBox>
      </Box>
    </div>
  );
};

export default ProductPrice;
