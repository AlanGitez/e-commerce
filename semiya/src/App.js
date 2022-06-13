import React, {useEffect, useState} from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProductList from "./commons/ProductList.js";
import ProductDetail from "./commons/ProductDetail.js";
import NotFound from "./commons/NotFound.js";
import ShoppingCart from "./components/ShoppingCart";
import CheckOut from "./components/CheckOut.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import ForgotPassword from "./components/ForgotPassword.js";
import Contact from "./components/Contact.js";
import { useDispatch, useSelector } from "react-redux";
import { defaultProductRequest } from "./state/defaultProducts.js";
import { updateFromStorage } from "./state/cart.js";
import useLocalStorage from "./hooks/useLocalStorage";
import { setUser } from "./state/user";

function App() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [storageCart, setStorageCart] = useLocalStorage("cart", cart);
  const [storageUser, setStorageUser] = useLocalStorage("user", "");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(defaultProductRequest());
    dispatch(setUser());
    user.id && setStorageUser(user.id);
    !cart.length && dispatch(updateFromStorage());
  }, []);

  useEffect(() => {
    cart.length && setStorageCart(cart);
  }, [cart]);

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/shopping-cart/check-out" element={<CheckOut />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
