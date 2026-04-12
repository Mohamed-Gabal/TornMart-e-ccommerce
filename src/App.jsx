import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Pages/Index";
import ProductDetails from './Components/Pages/ProductDetails';
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
};
export default App;
