import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Pages/Index";
import ProductDetails from './Components/Pages/ProductDetails';
import WishList from './Components/Pages/Wishlist';
import { ToastContainer } from "react-toastify";
import Cart from "./Components/Pages/Cart";
import Checkout from "./Components/Pages/Checkout";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Pages/About";
import Shop from "./Components/Pages/Shop";
import Blog from "./Components/Pages/Blog";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </>
  );
};
export default App;
