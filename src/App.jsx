import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Pages/Index";
import ProductDetails from './Components/Pages/ProductDetails';
import WishList from './Components/Pages/Wishlist';
import { ToastContainer } from "react-toastify";
import Cart from "./Components/Pages/Cart";

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
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
};
export default App;
