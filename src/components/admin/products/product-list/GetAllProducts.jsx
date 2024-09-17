import React, { useEffect, useState } from "react";
import SingleProductRow from "./SingleProductRow";
import httpAction from "../../../../utils/httpAction";
import apiActions from "../../../../utils/apiActions";
import useProvideGeneralHooks from "../../../../hooks/useProvideGeneralHooks";
import LoadingBackdrop from "../../../ui/LoadigBackdrop";
import Table from "../../../ui/Table";
const GetAllProducts = () => {
  const { dispatch, loading, setLoading } = useProvideGeneralHooks();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getRroducts = async () => {
      setLoading(true);
      const result = await dispatch(httpAction(apiActions().getAllProducts()));
      setLoading(false);
      if (result?.status) {
        setProducts(result?.list);
      }
    };
    getRroducts();
  }, []);

  const headers = [
    "id",
    "img",
    "title",
    "stock",
    "sale price",
    "purchase",
    "category",
    "brand",
    "active",
    "actions",
  ];

  return (
    <div className="table_container">
      <LoadingBackdrop open={loading} handleClose={() => setLoading(false)} />
      <Table headers={headers}>
        {products?.map((product, index) => (
          <SingleProductRow key={index} item={product} />
        ))}
      </Table>
    </div>
  );
};

export default GetAllProducts;
