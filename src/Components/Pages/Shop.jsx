
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductData from "../../Data.json";
import { CiShoppingCart } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shop = () => {
  const products = Array.isArray(ProductData.Products)
    ? ProductData.Products
    : [];

  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);

  const handleAddToCart = (product) => {
    let cart = [];
    try {
      cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    } catch {
      cart = [];
    }

    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
      toast.info("Quantity updated 🛒");
    } else {
      cart.push({ ...product, quantity: 1 });
      toast.success("Added to cart ✅");
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  return (
    <>
      {/* Page Title */}
      <div className="w-full bg-yellow-100 py-3 px-4 sm:px-6 md:px-8 lg:px-[10%]">
        <div className="text-sm md:text-base text-gray-600 flex items-center justify-center gap-2">
          <Link to="/" className="hover:underline font-medium">
            Home
          </Link>
          <span>/</span>
          <span className="text-yellow-700 font-semibold">Shop</span>
        </div>
      </div>

      {/* زرار الفلتر للموبايل */}
      <div className="lg:hidden px-4 mt-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full bg-yellow-400 text-white py-2 rounded-lg"
        >
          Filters
        </button>
      </div>

      {/* Layout */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-[10%] py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Products */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition rounded-xl p-3 flex flex-col"
              >
                {/* Category */}
                <span className="text-[10px] md:text-xs text-white bg-red-500 px-2 py-1 rounded-full w-fit mb-2">
                  {product.category}
                </span>

                {/* Image */}
                <Link to={`/shop/${product.id}`}>
                  <img
                    src={product.ProductsImage}
                    alt={product.name}
                    className="w-full h-32 sm:h-36 md:h-40 object-contain transition group-hover:scale-105"
                  />
                </Link>

                {/* Title */}
                <Link to={`/shop/${product.id}`}>
                  <h4 className="text-sm md:text-base font-medium mt-2 text-yellow-800 line-clamp-2 hover:underline">
                    {product.name}
                  </h4>
                </Link>

                {/* Price */}
                <div className="flex items-center justify-between mt-auto pt-3">
                  <div>
                    {product.OldPrice && (
                      <span className="line-through text-xs text-gray-400 block">
                        ${product.OldPrice}
                      </span>
                    )}
                    <span className="text-sm md:text-base font-bold text-red-600">
                      ${product.Price}
                    </span>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-500 transition"
                  >
                    <CiShoppingCart />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div
          className={`bg-white p-4 rounded-xl shadow-md lg:block ${
            showFilters ? "block" : "hidden"
          } lg:sticky lg:top-20 h-fit`}
        >
          <h2 className="border-b pb-2 mb-4 font-semibold">Filters</h2>

          {/* Brands */}
          <h3 className="font-bold">Brands</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><label><input type="checkbox" className="mr-2" /> Nike</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Adidas</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Puma</label></li>
          </ul>

          {/* Colors */}
          <h3 className="font-bold mt-6">Colors</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><label><input type="checkbox" className="mr-2" /> Black</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Red</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Gold</label></li>
          </ul>

          {/* Latest */}
          <h3 className="border-b pb-2 mt-6 mb-3 font-semibold">
            Latest Product
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {products.slice(0, 4).map((product) => (
              <Link key={product.id} to={`/shop/${product.id}`}>
                <div className="flex items-center gap-3">
                  <img
                    src={product.ProductsImage}
                    className="w-14 h-14 object-contain"
                  />
                  <div className="text-sm">
                    <p className="line-clamp-1">{product.name}</p>
                    <span className="text-red-500 font-bold">
                      ${product.Price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={1200} />
    </>
  );
};
export default Shop;