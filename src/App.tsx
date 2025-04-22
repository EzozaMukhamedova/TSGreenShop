import "./App.css";
// import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./pages/home";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import TopFooter from "./components/TopFooter/page.jsx";
import MainNavbar from "./components/MainNavbar/page.jsx";
import Navbar2 from "./components/Navbar/page.jsx";
import Profile from "./components/Profile/page.js";
import ProductDetailsPage from "./components/Home/Categories/MainMapping/ProductDetailsPage.jsx";
import CategoriesMain from "./components/ProductDetails/CategoriesMain.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainMapping from "./components/Home/Categories/MainMapping";
import ProductCard from "./components/ProductCard";
import ProductCheckounts from "./components/ProductCheckout";
import Blog from "./components/Blog";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./layouts/Layout";
import AccountDetails from "./components/Profile/AccountDetails";
import MyProducts from "./components/Profile/MyProducts";
import Address from "./components/Profile/Address";
import Wishlist from "./components/Profile/Wishlist";
import TrackOrder from "./components/Profile/TrackOrder";
import Logout from "./components/Profile/Logout";
import { Layout } from "antd";
import AboutBlog from "./components/Blog/AboutBlog";

function App() {
  return (
    <>
      <Navbar2 />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product-card" element={<ProductCard />} />
        <Route path="/product-checkout" element={<ProductCheckounts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<AboutBlog />} />
        <Route path="/categories" element={<MainMapping />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/categoriesMain" element={<CategoriesMain />} />

        {/*  profil menyulari */}
        <Route path="/account-details" element={<AccountDetails />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/address" element={<Address />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <TopFooter />
      <Footer />
    </>
  );
}
export default App;
