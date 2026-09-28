import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Main Page/Home";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import ProductDescription from "./Pages/ProductDescription/ProductDescription";
import Mencat from "./Pages/Men/MenCat";
import Collection from "./Pages/Collection/Collection";
// import WomenCat from "./Women/WomenCat";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";

const AppContent = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/checkout";

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product-des" element={<ProductDescription />} />
        <Route path="/men" element={<Mencat />} />
        {/* <Route path="/women" element={<WomenCat />} /> */}
        <Route path="/collection/:id" element={<Collection />} />
        <Route path="/new" element={<Collection />} />
        <Route path="/straps" element={<Collection />} />
        <Route path="/contact" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/continue-shopping" element={<Collection />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
