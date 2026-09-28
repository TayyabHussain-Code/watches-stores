import React from "react";
import banner2 from "../../../Imgs/banner2.jpg";

const Banner = () => {
  return (
    <div className="relative flex justify-center">
      <img src={banner2} alt="" className="h-90 lg:h-122 w-full object-cover" />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-1"></div>


      <div className="absolute z-10 text-white text-center px-4 sm:px-6 md:px-8 top-[25%] sm:top-[35%] md:top-[30%] lg:top-[38%]  w-full">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
          Redefining Time with Luxury and Craftsmanship.
        </h1>
      </div>
      <p className="absolute z-10 text-white text-center px-4 sm:px-6 md:px-8 top-[45%] sm:top-[48%] md:top-[50%] lg:top-[50%]  text-sm sm:text-base md:text-lg w-full  leading-relaxed">
        Explore watches that blend luxury with precision.
        <br className="hidden sm:block" />
        Crafted to elevate your style and celebrate every moment.
      </p>
    </div>
  );
};

export default Banner;
