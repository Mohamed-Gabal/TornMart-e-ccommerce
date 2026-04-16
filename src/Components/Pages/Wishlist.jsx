import React, { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { IoIosClose } from "react-icons/io";
import { RiCheckboxCircleLine, RiShoppingCart2Line } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";



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
                        <IoIosClose />
                      </button>
                    </td>
                    <td className="flex items-center gap-4 px-2 py-4">
                      <img src={product.ProductsImage} alt={product.name} className="w-24 h-24 object-contain border p-2 rounded-lg" />
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                    </td>
                    <td className="text-center text-gray-80 font-semibold text-base">
                      ${parseFloat(product.Price).toFixed(2)}
                    </td>
                    <td className="text-center">
                      <span className="inline-flex items-center gap-1 text-green-600 text-sm font-medium">
                        <RiCheckboxCircleLine className="text-lg"/> In Stock
                      </span>
                    </td>
                    <td>
                      <button onClick={() => addToCart(product)} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400 text-sm font-semibold hover:bg-yellow-500 transition">
                        <RiShoppingCart2Line /> Add To Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {wishlist.map(product => (
            <div key={product.id} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
                <button onClick={() => removeFromWishlist(product.id)} className="text-gray-400 hover:text-red-500 text-2xl" title="Remove">
                  <IoIosClose />
                </button>
              </div>
              <img src={product.ProductsImage} alt={product.name} className="w-full h-40 object-contain" />
              <p className="text-sm text-gray-500">{product.category}</p>
              <div className="text-base font-semibold text-gray-800">
                Price: ${parseFloat(product.Price).toFixed(2)}
              </div>
              <div className="text-sm text-green-600 font-medium flex items-center gap-2">
                <RiCheckboxCircleLine className="text-lg" /> In Sock
              </div>
              <button onClick={() => addToCart(product)} className="w-full inline-flex justify-center items-center gap-2 px-5 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 ">
                <RiShoppingCart2Line /> Add To Cart
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to='/shop' className='inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-yellow-500 border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition-all'>
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
};
export default Wishlist;
