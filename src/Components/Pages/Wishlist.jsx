import React, { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storeWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlist(storeWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "Do you want to remove this item from wishlist?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedWishlist = wishlist.filter((item) => item.id !== id);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
        toast.success("Item removed from wishlist");
      }
    });
  };

  const addToCart = (product) => {
    toast.success(`${product.name} added to cart`);
  };
  return (
    <>
      <div className="w-full px-4 sm:px-8 lg:px-[12%] py-12 bg-white text-gray-800">
        <ToastContainer position="top-right" reverseOrder={false} />

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 font-bricolage flex items-center justify-center gap-1">
          <BsHeart className="mr-2 text-pink-500 w-[25px]" /> My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <BsHeart className="mr-2 text-pink-500 w-[25px]" />No Items in your Wishlist!
          </div>
        ) : (
          <div className="overflow-hidden hidden md:block">
            <table className="w-full text-left border-separate border-spacing-6">
              <thead>
                <tr className="text-sm text-gray-500 border-b border-gray-200">
                  <th></th>
                  <th className="py-3">Product</th>
                  <th className="text-center">Unit Price</th>
                  <th className="text-center">Stock</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map(product => (
                  <tr key={product.id} className="bg-white border rounded-xl shadow-sm">
                    <td className="align-middle text-center">
                      <button onClick={() => removeFromWishlist} className="text-xl text-gray-400 hover:text-red-500 p-3" title="Remove">
                        <BsHeart />
                      </button>
                    </td>
                    <td className="flex items-center gap-4 px-2 py-4">
                      <img src={product.ProductsImage} alt={product.name} className="w-24 h-24 object-contain border p-2 rounded-lg" />
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                    </td>
                    <td className="text-center text-gray-800 font-semibold text-base">
                      ${parseFloat(product.Price).toFixed(2)}
                    </td>
                    <td className="text-center">
                      <span className="inline-flex items-center gap-1 text-green-600 text-sm font-medium">
                        
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
export default Wishlist;
