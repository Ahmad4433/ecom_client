import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";
import { Switch } from "@mui/material";
import { IoAnalyticsSharp } from "react-icons/io5";
import useProvideGeneralHooks from "../../../../hooks/useProvideGeneralHooks";
import "./singleProductRow.css";
import { productActions } from "../../../../store/slices/product-slice";
const SingleProductRow = ({ item }) => {
  const { dispatch, navigate } = useProvideGeneralHooks();
  const [itemStatus, setItemStatus] = useState(null);
  const [featureImg, setFeatureImg] = useState("");
  useEffect(() => {
    const findedImg = item?.image?.find((img) => {
      return img.feature === true;
    });
    setFeatureImg(findedImg);
    setItemStatus(item?.isActive);
  }, [item]);

  const itemcStatusChange = (event) => {
    setItemStatus(event.target.checked);
  };

  const productUpdateDispatch = () => {
    dispatch(productActions.setSingleproduct(item));
    navigate("/admin/create/product");
  };

  return (
    <tr>
      <td>{item?._id?.substring(0, 6)}</td>
      <td>
        <img className="single_product_row_img" src={featureImg?.url} />
      </td>
      <td className="truncate">{item?.title}</td>
      <td className="color_primary semibold">{item?.stock}</td>
      <td>{item?.salePrice?.toFixed(2)}</td>
      <td>{item?.purchasePrice?.toFixed(2)}</td>
      <td className="capitalize">{item?.category?.title}</td>
      <td className="capitaize">{item?.brand?.title}</td>
      <td>
        <Switch
          size="small"
          checked={itemStatus}
          onChange={itemcStatusChange}
        />
      </td>
      <td>
        <tr className="single_product_row_actions">
          <td>
            <span className="icon">
              <MdDeleteForever />
            </span>
          </td>
          <td>
            <span onClick={productUpdateDispatch} className="icon">
              <CiEdit />
            </span>
          </td>
          <td>
            <span className="icon">
              <HiMiniViewfinderCircle />
            </span>
          </td>

          <td>
            <span className="icon">
              <IoAnalyticsSharp />
            </span>
          </td>
        </tr>
      </td>
    </tr>
  );
};

export default SingleProductRow;
