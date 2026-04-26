
import React from "react";
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

    // Navigate بعد ما التوست يظهر (أنضف UX)
    setTimeout(() => {
      navigate("/cart");
    }, 1200);
  };

  return (
    <>
      {/* Page Title */}
      <div className="w-full bg-yellow-100 py-3 px-4 md:px-[8%] lg:px-[12%]">
        <div className="text-sm md:text-lg text-gray-600 flex items-center justify-center space-x-2">
          <Link to="/" className="hover:underline font-medium">
            Home
          </Link>
          <span>/</span>
          <span className="text-yellow-700 font-semibold">Shop</span>
        </div>
      </div>

      {/* Products */}
      <div className="px-4 md:px-[8%] lg:px-[12%] py-6 md:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white shadow-sm hover:shadow-xl transition rounded-xl p-3 md:p-4 flex flex-col"
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
                  className="w-full h-24 sm:h-28 md:h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              {/* Title */}
              <Link to={`/shop/${product.id}`}>
                <h4 className="text-sm md:text-base font-medium mt-2 text-yellow-800 line-clamp-2 hover:underline">
                  {product.name}
                </h4>
              </Link>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-auto pt-3">
                {product.OldPrice ? (
                  <div className="text-xs md:text-sm">
                    <span className="line-through text-gray-400 block">
                      ${product.OldPrice}
                    </span>
                    <span className="text-red-600 font-bold">
                      ${product.Price}
                    </span>
                  </div>
                ) : (
                  <div className="text-sm md:text-base font-semibold">
                    ${product.Price}
                  </div>
                )}

                {/* Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-yellow-400 text-white text-lg md:text-xl rounded-full w-9 h-9 md:w-11 md:h-11 flex items-center justify-center hover:bg-red-500 transition"
                >
                  <CiShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={1200}
      />
    </>
  );
};
export default Shop;
