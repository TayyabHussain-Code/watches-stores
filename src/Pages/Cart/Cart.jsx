import React, { useEffect, useState } from "react";
import img1 from "../../../Imgs/img1.jpg";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  CartProducts,
  RemoveCartProducts,
  UpdateCartQuantity,
} from "../../DAL/collection/collection";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [productIds, setProductTds] = useState([]);
  const [total, setTotal] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const storedIds = JSON.parse(localStorage.getItem("productId") || "[]");
  const baseUrl = "https://api.dialowatches.com";
  const navigate = useNavigate();

  const handleLists = async () => {
    const resp = await CartProducts({ cartIds: storedIds });
    if (resp.success) {
      setCartData(resp.data);
      setTotal(resp.totalPrice);
      setProductTds(resp.data.map((i) => i.productId));
    }
  };

  const handleDelete = async (id) => {
    const resp = await RemoveCartProducts(id);
    if (resp.success) {
      const updatedIds = storedIds.filter((storedId) => storedId !== id);
      localStorage.setItem("productId", JSON.stringify(updatedIds));
      handleLists();
      window.dispatchEvent(new Event("cart-update"));
    }
  };

  const handleQuantity = async (id, quantity) => {
    if (quantity > 3) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 800);
      return;
    }
    const resp = await UpdateCartQuantity(id, JSON.stringify({ quantity }));
    if (resp.success) handleLists();
  };

  useEffect(() => {
    handleLists();
  }, []);

  return (
    <div className="min-h-screen px-6 lg:px-32 flex flex-col items-center relative overflow-hidden">
      <img
        src={img1}
        alt="Catalog background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="flex justify-between items-center mt-20 w-full max-w-6xl relative z-20">
        <h1 className="text-white opacity-75 text-3xl lg:text-4xl font-semibold">
          Your Cart
        </h1>
        <p
          className="text-white opacity-60 underline text-sm lg:text-base cursor-pointer"
          onClick={() => navigate("/continue-shopping")}
        >
          Continue Shopping?
        </p>
      </div>

      <div className="w-screen max-w-6xl bg-zinc-500/20 backdrop-blur-2xl border border-gray-200/10 rounded-lg relative p-5 lg:p-10 z-20 mt-6">
        <table className="w-full hidden md:table">
          <thead>
            <tr className="border-b border-gray-500/20">
              <th className="text-gray-200 text-left py-3 font-medium">No</th>
              <th className="text-gray-200 text-left py-3 font-medium">Product</th>
              <th className="text-gray-200 text-left py-3 font-medium">Quantity</th>
              <th className="text-gray-200 text-left py-3 font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item, index) => (
              <tr key={index} className="border-b border-gray-600/20 text-gray-100">
                <td className="py-4">{index + 1}</td>
                <td className="py-4 flex items-center gap-4">
                  <img
                    src={`${baseUrl}${item.product?.coverImage}`}
                    alt={item.product?.name}
                    className="h-16 w-16 object-cover rounded-md bg-neutral-400"
                  />
                  <span className="text-sm lg:text-base">{item.product?.name}</span>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-3 border border-gray-400 rounded-md px-4 py-1 w-fit">
                    <button
                      className="text-lg text-white font-semibold cursor-pointer"
                      onClick={() => handleQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      -
                    </button>
                    <p className="text-white font-semibold">{item.quantity}</p>
                    <button
                      className="text-lg text-white font-semibold cursor-pointer"
                      onClick={() => handleQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-4">
                    <span className="text-white">Rs. {item.price} PKR</span>
                    <RiDeleteBin6Line
                      className="text-white text-xl opacity-80 cursor-pointer"
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="block md:hidden mt-4 space-y-4">
          {cartData.map((item, index) => (
            <div key={index} className="bg-zinc-700/30 border border-gray-500/20 rounded-lg p-4">
              <div className="flex gap-4 items-start">
                <img
                  src={`${baseUrl}${item.product?.coverImage}`}
                  alt={item.product?.name}
                  className="h-20 w-20 object-cover rounded-md bg-neutral-300"
                />
                <div>
                  <h1 className="text-white text-base font-medium">{item.product?.name}</h1>
                  <p className="text-gray-300 text-sm mt-1">Rs. {item.price} PKR</p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 mt-3">
                <div className="flex items-center gap-3 border border-gray-400 rounded-md px-3 py-1">
                  <button
                    className="text-lg text-white font-semibold"
                    onClick={() => handleQuantity(item.id, Math.max(1, item.quantity - 1))}
                  >
                    -
                  </button>
                  <p className="text-white text-sm font-semibold">{item.quantity}</p>
                  <button
                    className="text-lg text-white font-semibold"
                    onClick={() => handleQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <RiDeleteBin6Line
                  className="text-white text-xl opacity-80 cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            </div>
          ))}
        </div>

        {cartData.length === 0 && (
          <p className="text-white mt-10 text-center text-sm">No items in cart</p>
        )}

        {cartData.length > 0 && (
          <div className="text-white flex flex-col items-end mt-10">
            <div className="flex flex-col items-center w-full md:block md:w-fit">
              <div className="flex flex-wrap gap-3 items-center">
                <h1 className="text-xl lg:text-2xl opacity-70 font-semibold">Estimated Total:</h1>
                <p className="font-semibold text-lg lg:text-xl">Rs. {total} PKR</p>
              </div>
              <p className="opacity-50 mt-1 text-xs lg:text-sm">
                Taxes, discounts, and shipping calculated at checkout.
              </p>
              <button
                onClick={() => navigate("/checkout", { state: { productIds, total } })}
                className="px-30 lg:px-32 py-3 mt-3 bg-[#434343] hover:bg-[#535353] font-semibold cursor-pointer rounded-full transition"
              >
                Check out
              </button>
            </div>
          </div>
        )}

        {showPopup && (
          <div className="fixed -bottom-10 left-1/2 -translate-x-1/2 bg-[#e52222] text-white text-md px-1 md:px-6 py-3 rounded-lg shadow-lg z-50 text-center">
            Quantity cannot exceed 3
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
