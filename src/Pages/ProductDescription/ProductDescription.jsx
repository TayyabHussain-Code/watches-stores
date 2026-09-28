import React, { useEffect, useState } from "react";
import img1 from "../../../Imgs/b2.jpg";
import BestSelling from "./BestSelling";
import { useLocation, useNavigate } from "react-router-dom";
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";
import { CategoryDetails, sendData } from "../../DAL/collection/collection";

const ProductDescription = () => {
  const [count, setCount] = useState(1);
  const [details, setDetails] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const baseUrl = "https://api.dialowatches.com";
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state?.id;

  const handleLists = async () => {
    const resp = await CategoryDetails(id);
    if (resp.success) setDetails(resp.data);
  };

  const handleAddToCart = async () => {
    setLoading(true);
    const payload = { productId: id, quantity: count };
    const response = await sendData(payload);
    if (response.success) {
      const existing = JSON.parse(localStorage.getItem("productId")) || [];
      existing.push(response.cartId);
      localStorage.setItem("productId", JSON.stringify(existing));
      window.dispatchEvent(new Event("cart-update"));
    }
    setTimeout(() => setLoading(false), 800);
  };

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        products: [
          {
            name: details.name,
            price: details.totalprice * count,
            img: details.coverImage,
            quantity: count,
          },
        ],
        total: details.totalprice * count,
      },
    });
  };

  useEffect(() => {
    handleLists();
  }, []);

  const allImages = [details.coverImage, ...(details.otherImages || [])];
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));

  return (
    <div className="h-auto w-full px-8 xl:px-31 py-33 bg-black">
      <img
        src={img1}
        alt="Catalog"
        className="absolute inset-0 w-screen lg:h-[200vh] object-cover z-1"
      />
      <div className="absolute lg:h-[200vh] inset-0 bg-black/40 backdrop-blur-sm z-1"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 relative z-2">
        <div className="bg-[#e1e1e1] overflow-hidden group md:h-125 xl:h-140 xl:w-[90%] mx-auto md:mr-0 relative">
          <RiArrowLeftWideFill
            className="absolute top-[45%] left-3 text-zinc-800 z-10 text-4xl cursor-pointer"
            onClick={handlePrev}
          />
          <RiArrowRightWideFill
            className="absolute top-[45%] right-3 text-zinc-800 z-10 text-4xl cursor-pointer"
            onClick={handleNext}
          />
          {allImages.length > 0 && (
            <img
              src={`${baseUrl}${allImages[currentIndex]}`}
              className="xl:h-145 transition-transform duration-500 ease-in-out transform hover:scale-103 select-none w-full object-contain"
              alt="product"
            />
          )}
        </div>

        <div className="text-white px-3 py-6 lg:px-8 lg:py-0 xl:p-12 flex flex-col justify-center">
          <h1 className="text-3xl">{details.name}</h1>
          <ul className="mt-3 space-y-1.5 list-disc list-inside">
            {details.description?.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>

          <div className="flex gap-4 mt-6">
            <p className="text-[1.3rem] line-through">
              Rs. {details.price} PKR
            </p>
            <p className="text-[1.3rem] font-medium">
              Rs. {details.totalprice * count} PKR
            </p>
          </div>

          <div className="flex gap-5 border rounded-md border-gray-500 px-5 py-2 w-fit mt-8">
            <button
              className="text-[1.4rem]"
              onClick={() => setCount(count > 1 ? count - 1 : 1)}
            >
              -
            </button>
            <p className="text-[1.2rem]">{count}</p>
            <button
              className="text-[1.4rem]"
              onClick={() => {
                if (count >= 3) {
                  setShowPopup(true);
                  setTimeout(() => setShowPopup(false), 1000);
                } else setCount(count + 1);
              }}
            >
              +
            </button>
            {showPopup && (
              <div className="fixed bottom-10 left-1/2 bg-[#e52222] -translate-x-1/2 px-1 md:px-6 py-3 rounded-lg shadow-lg z-50 text-center">
                Quantity cannot exceed 3
              </div>
            )}
          </div>

          <div className="mt-12 flex flex-col gap-6">
            <button
              disabled={loading}
              className={`border cursor-pointer text-gray-300 font-semibold border-gray-600 lg:px-32 py-4 rounded-lg ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#2222227e] hover:text-white"
              }`}
              onClick={handleAddToCart}
            >
              {loading ? "Adding..." : "Add to cart"}
            </button>
            <button
              onClick={handleBuyNow}
              className="border bg-zinc-300 text-black font-semibold border-gray-600 lg:px-32 py-4 rounded-lg hover:bg-zinc-50 cursor-pointer"
            >
              Buy it now
            </button>
          </div>
        </div>
      </div>

      <BestSelling />
    </div>
  );
};

export default ProductDescription;
