import React, { useEffect, useState } from "react";
import { CategoryLists } from "../../DAL/collection/collection";
import img1 from "../../../Imgs/img1.jpg";
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const WatchData = () => {
  const navigate = useNavigate();
  const [homeProducts, sethomeProducts] = useState([]);
  const [currentIndexes, setCurrentIndexes] = useState({});
  const baseUrl = "https://api.dialowatches.com";

  const handleLists = async () => {
    const resp = await CategoryLists();
    if (resp.success === true) {
      sethomeProducts(resp.data);
    }
  };
  console.log(homeProducts, "adw");

  useEffect(() => {
    handleLists();
  }, []);

  const handlePrev = (index, imagesLength) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [index]: prev[index] === 0 ? imagesLength - 1 : (prev[index] || 0) - 1,
    }));
  };

  const handleNext = (index, imagesLength) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [index]: prev[index] === imagesLength - 1 ? 0 : (prev[index] || 0) + 1,
    }));
  };

  return (
    <div className="pb-12 bg-black relative">
      <img
        src={img1}
        alt="Catalog background"
        className="absolute inset-0 w-full h-[130vh] object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

      <div className="flex gap-4 mt-12 flex-wrap justify-center relative z-10">
        {homeProducts.map((item, index) => {
          const images = [item.coverImage, ...(item.otherImages || [])];
          const currentIndex = currentIndexes[index] || 0;

          return (
            <div
              key={item.id}
              className="relative text-white mb-2 cursor-pointer"
            >
              <div className="bg-[#e1e1e1] overflow-hidden group relative">
                <RiArrowLeftWideFill
                  onClick={() => handlePrev(index, images.length)}
                  className="absolute top-[45%] left-3 text-[#9d9a9a] z-20 text-3xl cursor-pointer hidden group-hover:block"
                />
                <RiArrowRightWideFill
                  onClick={() => handleNext(index, images.length)}
                  className="absolute top-[45%] right-3 text-[#9d9a9a] z-20 text-3xl cursor-pointer hidden group-hover:block"
                />
                <img
                  src={`${baseUrl}${images[currentIndex]}`}
                  alt={item.name}
                  onClick={() => {
                    navigate("/product-des", { state: { id: item.id } });
                  }}
                  className="h-80 lg:h-102 w-full object-cover select-none transition-transform duration-500 ease-in-out transform hover:scale-103 rounded-lg"
                />
              </div>

              <div className="p-3">
                <h1 className="text-[1.2rem] font-semibold">{item.name}</h1>
                <div className="flex gap-4 mt-1">
                  <p className="text-[1.1rem] line-through text-neutral-300">
                    Rs. {item.price} PKR
                  </p>
                  <p className="text-[1.1rem] font-medium">
                    Rs. {item.discount} PKR
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchData;
