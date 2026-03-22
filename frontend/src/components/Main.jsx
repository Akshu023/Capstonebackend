import React from "react";
import { Route, Routes } from "react-router-dom";
// ------------Components---------------------------;
import SignUp from "./auth/signup/SignUp.jsx";
import Login from "./auth/login/Login.jsx";
import Private from "./pages/private/Private.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Products from "./pages/products/Products.jsx";
import AddProduct from "./pages/addproduct/AddProduc.jsxt";
import UpdateProduct from "./pages/updateproduct/UpdateProduct.jsx";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route element={<Private />}>
          <Route path="/" element={<Products />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Main;
