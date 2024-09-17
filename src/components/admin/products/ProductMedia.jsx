import React from "react";
import "./productMedia.css";
import FileSelect from "../../common/FileSelect";
import Box from "../../ui/Box";
import FormBox from "../../ui/FormBox";
import Label from "../../ui/Label";
import SectionTitle from "../../ui/SectionTitle";

const ProductMedia = ({  files, setFiles }) => {
  return (
    <div className="product_media_main">
      <Box>
        <SectionTitle>Product Media</SectionTitle>
        <FormBox>
          <div>
            <Label>Select Files *</Label>
            <FileSelect
            showFeatue
              setFiles={setFiles}
              files={files}
              multiple={true}
        
              title="upload image"
            />
          </div>
        </FormBox>
      </Box>
    </div>
  );
};

export default ProductMedia;
