import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./pages/home";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import TopFooter from "./components/TopFooter/page.jsx";
import MainNavbar from "./components/MainNavbar/page.jsx";
import Navbar2 from "./components/Navbar/page.jsx";
import Profile from "./components/Profile/page.jsx";
import ProductDetailsPage from "./components/Home/Categories/MainMapping/ProductDetailsPage.jsx";
import CategoriesMain from "./components/ProductDetails/CategoriesMain.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainMapping from "./components/Home/Categories/MainMapping";
import ProductCard from "./components/ProductCard";
import ProductCheckount from "./components/ProductCheckout/ProductChekouts";
import ProductCheckounts from "./components/ProductCheckout";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      <ToastContainer />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<ProductCard />} path="/product-card" />
        <Route element={<ProductCheckounts />} path="/product-checkout" />

        <Route path="/categories" element={<MainMapping />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/categoriesMain" element={<CategoriesMain />} />
        {/* <ToastContainer position="top-right" autoClose={2000} /> */}
      </Routes>

      <TopFooter />
      <Footer />
    </>
  );
}

export default App;
