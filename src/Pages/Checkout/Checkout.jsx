import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CartProducts, CheckoutData } from "../../DAL/collection/collection";

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    city: "",
    postal: "",
    phone: "",
  });
  const [details, setDetails] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
  const { state } = useLocation();
  const storedIds = JSON.parse(localStorage.getItem("productId") || "[]");
  const baseUrl = "https://api.dialowatches.com";

  const handleInput = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const finalData = {
      ...formData,
      address: `${formData.address}, ${formData.city}`,
      products: details.map((item) => ({
        productId: item.product?.id || null,
        cartId: item.id,
        name: item.product?.name,
        quantity: item.quantity,
        price: item.price,
      })),
    };
    
    CheckoutData(finalData)
      .then((res) => {
        console.log("Checkout successful:", res);
        setShowSuccessPopup(true);
        // Clear cart from localStorage if needed
        localStorage.removeItem("productId");
      })
      .catch((error) => {
        console.error("Checkout failed:", error);
        // Handle error (show error message, etc.)
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleLists = async () => {
    const resp = await CartProducts({ cartIds: storedIds });
    if (resp.success) setDetails(resp.data);
  };

  useEffect(() => {
    if (state?.products) {
      setDetails(
        state.products.map((p) => ({
          product: { name: p.name, coverImage: p.img },
          price: p.price,
          quantity: p.quantity,
        }))
      );
    } else {
      handleLists(); 
    }
  }, [state]);
  useEffect(() => {
  if (showSuccessPopup) {
    const timer = setTimeout(() => {
      setShowSuccessPopup(false);
      window.location.href = "/";
    }, 5000);
    return () => clearTimeout(timer);
  }
}, [showSuccessPopup]);

  const totalAmount =
    state?.total || details.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className="bg-black min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-8 md:px-10 max-w-5xl mx-auto "
        >
          <div className="text-white">
            
            <div>
              <label className="block mb-2 text-lg font-semibold">Contact</label>
              <input
                type="email"
                id="email"
                className="border border-gray-600 bg-transparent text-white placeholder-gray-400 px-3 py-2 rounded-sm w-full  focus:outline-none focus:border-white transition"
                placeholder="Email"
                required
                onChange={handleInput}
              />
            </div>

            <label className="block mb-2 text-lg font-semibold mt-6">Delivery</label>
            <label className="block mb-2 text-sm px-1 text-gray-300 font-medium">Country</label>
            <input
              type="text"
              id="country"
              className="border border-gray-600 bg-gray-900 text-gray-400 px-3 py-2 rounded-sm w-full cursor-not-allowed"
              defaultValue="Pakistan"
              disabled
            />

            <div className="mt-4">
              <label className="block mb-2 text-sm px-1 text-gray-300 font-medium">Name</label>
              <input
                type="text"
                id="name"
                placeholder="John"
                className="border border-gray-600 bg-transparent text-white placeholder-gray-400 px-3 py-2 rounded-sm w-full focus:outline-none focus:border-white transition"
                required
                onChange={handleInput}
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm px-1 text-gray-300 font-medium">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Street, building..."
                className="border border-gray-600 bg-transparent text-white placeholder-gray-400 px-3 py-2 rounded-sm w-full focus:outline-none focus:border-white transition"
                required
                onChange={handleInput}
              />
            </div>

            <div className="flex gap-3 mt-4">
              <div>
                <label className="block mb-2 text-sm px-1 text-gray-300 font-medium">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Karachi"
                  required
                  className="border border-gray-600 bg-transparent text-white placeholder-gray-400 px-3 py-2 rounded-sm w-full focus:outline-none focus:border-white transition"
                  onChange={handleInput}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm px-1 text-gray-300 font-medium">Postal Code</label>
                <input
                  type="number"
                  id="postal"
                  placeholder="(optional)"
                  className="border border-gray-600 bg-transparent text-white placeholder-gray-400 px-3 py-2 rounded-sm w-full focus:outline-none focus:border-white transition"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm px-1 text-gray-300 font-medium">Phone Number</label>
              <input
                type="number"
                id="phone"
                placeholder="03xxx"
                required
                className="border border-gray-600 bg-transparent text-white placeholder-gray-400 px-3 py-2 rounded-sm w-full focus:outline-none focus:border-white transition"
                onChange={handleInput}
              />
            </div>

            <label className="block mb-2 text-sm font-semibold mt-6">Shipping method</label>
            <div className="rounded-sm flex items-center justify-between px-3 py-2 border border-gray-600 bg-gray-900 text-gray-400">
              <input
                type="text"
                id="shipping"
                className="bg-transparent w-full cursor-not-allowed"
                defaultValue="Standard Shipping"
                disabled
              />
              <p>FREE</p>
            </div>

            <label className="block text-sm font-semibold mt-6">Payment</label>
            <p className="text-neutral-500 text-sm mt-2">
              All transactions are secure and encrypted.
            </p>
            <input
              type="text"
              id="payment"
              className="px-3 py-2 border border-gray-600 bg-gray-900 text-gray-400 mt-2 rounded-sm w-full cursor-not-allowed"
              defaultValue="Cash on Delivery (COD)"
              disabled
            />

            <label className="block text-sm font-semibold mt-6">Billing address</label>
            <input
              type="text"
              id="billing"
              className="px-3 py-2 border border-gray-600 bg-gray-900 text-gray-400 mt-3 rounded-sm w-full cursor-not-allowed"
              defaultValue="Same as shipping address"
              disabled
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-3 hidden md:block py-2 w-full rounded-sm bg-[#197bbd] font-semibold mt-6 hover:bg-[#156aa5] transition disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Complete order"}
            </button>
          </div>

          <div className="bg-[#b7b6b60f] backdrop-blur-3xl">
            <div className="text-white px-4 py-6 md:px-12 md:py-12 sticky top-8 self-start">
              <p className="text-white mb-4 text-[1.2rem] font-medium md:hidden">Order Summary</p>
              {details.map((item, index) => (
                <div key={index} className="sm:flex justify-between items-center mb-3">
                  <div className="flex gap-4 items-center">
                    <img
                      src={`${baseUrl}${item.product?.coverImage}`}
                      alt="product"
                      className="h-16 w-16 object-cover rounded-sm bg-[#fff9f910]"
                    />
                    <p className="w-48">{item?.product?.name}</p>
                  </div>
                  <p className="flex justify-end">Rs {item?.price}</p>
                </div>
              ))}

              <div className="flex justify-between mt-4">
                <p>Subtotal</p>
                <p>Rs {totalAmount} PKR</p>
              </div>

              <div className="flex justify-between mt-2">
                <p>Shipping</p>
                <p>FREE</p>
              </div>

              <div className="flex justify-between mt-6 text-lg font-semibold">
                <p>Total</p>
                <div className="flex gap-2 items-end">
                  <p className="text-sm text-neutral-500">PKR</p>
                  <p>Rs {totalAmount}</p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-3 py-2 w-full block md:hidden rounded-sm bg-[#197bbd] font-semibold mt-6 hover:bg-[#156aa5] transition text-white disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Complete order"}
            </button>
          </div>
        </form>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full mx-auto transform transition-all">
            {/* Header */}
            <div className="bg-green-500 text-white p-6 rounded-t-lg text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Order Confirmed!</h3>
              <p className="text-green-100 mt-2">Thank you for your purchase</p>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <p className="text-gray-600 mb-4">
                Your order has been successfully placed. You will receive a confirmation email shortly.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-500 mb-2">Order Total</p>
                <p className="text-2xl font-bold text-gray-800">Rs {totalAmount} PKR</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={() => {
                    // Navigate to order history or home page
                    window.location.href = "/";
                  }}
                  className="flex-1 px-4 py-3 bg-[#197bbd] text-white rounded-lg font-medium hover:bg-[#156aa5] transition"
                >
                  Track Order
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 text-center">
              <p className="text-sm text-gray-500">
                Need help? <a href="#" className="text-[#197bbd] hover:underline">Contact Support</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;