import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosClose } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const storeCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const fixedCart = storeCart.map((item) => ({
      ...item,
      Price: parseFloat(item.Price),
      quantity: item.quantity || 1,
    }));
    setCart(fixedCart);
  }, []);

  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const neQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: neQty };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const confirmRemove = window.confirm("Are yor sure yor want to remove!");
    if (!confirmRemove) return;

    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    toast.success("Item removed from cart");
  };

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toLocaleLowerCase();
    if (code === "freeship99") {
      setDiscount(10);
      toast.success("10% discount applied!");
    } else {
      setDiscount(0);
      toast.error("Invalid coupon code");
    }
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.Price * item.quantity,
    0,
  );
  const shipping = cart.length ? 300 : 0;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount + shipping;

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/checkout");
  };
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-[12%] py-12 bg-white min-h-screen">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-600">
          My Shopping Cart
        </h1>

        <ToastContainer position="top-right" autoClose={1500} />

        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-sm text-gray-500 border-b border-gray-200">
                <th></th>
                <th>Product</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border rounded-xl shadow-sm"
                >
                  <td className="text-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xl text-gray-400 hover:text-red-500"
                    >
                      <IoIosClose />
                    </button>
                  </td>
                  <td className="flex items-center gap-4 py-4 px-2">
                    <img
                      src={item.ProductsImage}
                      alt={item.name}
                      className="w-24 h-24 object-contain border p-2 rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                  </td>
                  <td className="text-center text-gray-800 font-medium">
                    ${item.Price.toFixed(2)}
                  </td>
                  <td className="text-center">
                    <div className="inline-flex items-center border rounded overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-3 py-1 hover:text-gray-200"
                      >
                        -
                      </button>
                      <span className="px-4 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-3 py-1 hover:text-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-center font-semibold text-gray-800">
                    ${(item.Price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}

              {cart.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-10 text-gray-500 flex items-center justify-center"
                  >
                    <RiShoppingCart2Line className="text-2xl mr-2" /> Your Cart
                    is Empty!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Mobile Card View */}
        <div className="md:hidden space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 shadow border"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xl text-gray-400 hover:text-red-500"
                >
                  <IoIosClose />
                </button>
              </div>
              <img
                src={item.ProductsImage}
                alt={item.name}
                className="w-full h-40 object-contain"
              />
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-base font-medium text-gray-800">
                ${item.Price.toFixed(2)}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-3 py-1 hover:text-gray-200"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-3 py-1 hover:text-gray-200"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-800 font-semibold">
                  ${item.Price * item.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Coupon Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-1/2 flex">
            <input
              type="text"
              placeholder="Coupon Code (e.g., FREESHIP99)"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border px-4 w-full rounded-l-md outline-none text-gray-700"
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-gray-800 text-white px-6 py-2 rounded-r-md hover:bg-red-500 transition cursor-pointer"
            >
              Apply
            </button>
          </div>
        </div>
        {/* Cart Totals */}
        <div className="mt-12 md:w-1/3 ml-auto border rounded-lg p-6 shadow bg-white">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Crt Totals
          </h3>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between mb-2 text-green-600 font-medium">
              <span>Discount</span>
              <span>- ${discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shippin</span>
            <span className="font-medium">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-xl border-t pt-4 mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button onClick={handlePlaceOrder} className="mt-6 w-full py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold transition cursor-pointer">Place Order</button>
        </div>
      </div>
    </>
  );
};
export default Cart;
