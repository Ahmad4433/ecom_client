import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import Layout from "./components/layout/Layout";
import UpdatePassword from "./components/accounts/UpdatePassword";
import AccountVerify from "./components/accounts/AccountVerify";
import ForgetPassword from "./components/accounts/ForgetPassword";
import SuperForForget from "./components/auth/SuperForForget";
import CreateProduct from "./components/admin/products/CreateProduct";
import GetAllProducts from "./components/admin/products/product-list/GetAllProducts";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget/password" element={<ForgetPassword />} />
      <Route element={<SuperForForget />}>
        <Route path="/account/verify" element={<AccountVerify />} />
        <Route path="/update/password" element={<UpdatePassword />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/admin/create/product" element={<CreateProduct />} />
        <Route path="/admin/product/list" element={<GetAllProducts/>} />
      </Route>
    </Routes>
  );
};

export default App;
