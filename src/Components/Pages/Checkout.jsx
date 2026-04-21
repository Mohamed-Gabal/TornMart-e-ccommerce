import React, { useEffect, useState } from "react";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("bank");
  const [discount, setDiscount] = useState(100);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = storedCart.map((item) => ({
      ...item,
      Price: parseFloat(item.Price),
      quantity: item.quantity || 1,
    }));
    setCart(updatedCart);
  }, []);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.Price * item.quantity,
    0,
  );
  const shipping = cart.length ? 300 : 0;
  const total = subtotal + shipping - discount;

  const PaymentOption = ({ id, label }) => (
    <label
      htmlFor={id}
      className={`flex items-start gap-3 p-4 border rounded-md cursor-pointer transition-all ${selectedPayment === id ? "border-yellow-400 bg-yellow-50 shadow-sm" : "border-gray-300"}`}
    >
      <input
        type="radio"
        id={id}
        name="payment"
        value={id}
        checked={selectedPayment === id}
        onChange={() => setSelectedPayment(id)}
        className="mt-1 w-4 h-4 text-yellow-400 accent-yellow-400"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
  return (
    <>
      <div className="min-h-screen px-[8%] lg:px-[12%] py-14 bg-white text-gray-800">
        <h1 className="text-5xl font-semibold text-center mb-10">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Billing Section */}
          <div className="lg:col-span-2 bg-white p-8 border rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="Jack"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Wayley"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Country *
                </label>
                <select className="w-full border rounded-md px-4 py-2">
                  <option>Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  placeholder="470 lury Forks"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Apt, Suit, Etc. *
                </label>
                <input
                  type="text"
                  placeholder="YC7B 7UT"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City *</label>
                <input
                  type="text"
                  placeholder="London"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  PostCode/zip *
                </label>
                <input
                  type="text"
                  placeholder="9999"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  State *
                </label>
                <select className="w-full border rounded-md px-4 py-2">
                  <option>Select State</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="text"
                  placeholder="Jack@gmail.com"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone *
                </label>
                <input
                  type="text"
                  placeholder="+1 (062) 109-9222"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
            </form>
            {/* Additional Options */}
            <div className="mt-6 space-y-4">
              <label className="flex items-center text-sm gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-yellow-400 cursor-pointer"
                />
                Create An Account?
              </label>
              <label className="flex items-center text-sm gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-yellow-400 cursor-pointer"
                />
                Ship To A Different Address?
              </label>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Order Notes *
                </label>
                <textarea
                  placeholder="Notes About your Order, e.g Special delivery instructions"
                  className="w-full border rounded-md px-4 py-3 min-h-[100px]"
                ></textarea>
              </div>
            </div>
          </div>
          {/* Order Summary */}
          <div className="bg-gray-50 p-8 rounded-xl border h-fit shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Your Order</h2>

            <div className="space-y-3 text-sm">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.Price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <hr className="my-2" />
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Discount</span>
                <span className="text-green-600">- ${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500 border-t pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            {/* Payment Method */}
            <div className="mt-6 space-y-3">
              <PaymentOption id="bank" label="Direct Bank Transfer">
                <div className="text-xs text-gray-600 m-6">
                  Make your payment directly into our bank account. Your order
                  will not be shipped until the funds have cleared.
                </div>
              </PaymentOption>
              <PaymentOption id="check" label="Check Payments" />
              <PaymentOption id="cod" label="Cash On Delivery" />
              <PaymentOption id="Paypal" label="PayPal" />
            </div>
            {/* Terms */}
            <div className="mt-6 text-sm">
              <label className="flex items-center gap-2 whitespace-nowrap">
                <input type="checkbox" className="accent-yellow-400" required />
                <span>
                  I Have Read And Agree To The Website
                  <span className="text-blue-600 underline cursor-pointer ml-1">
                    Terms And Conditions
                  </span>
                </span>
              </label>
            </div>
            <button className="mt-6 w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-md transition cursor-pointer">
              Place Your Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
