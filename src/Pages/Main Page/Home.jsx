import React, { useEffect, useState, useRef } from "react";
import Catalog from "../Catalog/Catalog";
import img1 from "../../../Imgs/img1.jpg";
import img2 from "../../../Imgs/img3.jpg";
import men1 from "../../../Imgs/men1.jpg";
import women1 from "../../../Imgs/women1.jpg";
import rolex1 from "../../../Imgs/rolex1.mp4";
// import Catalog from "../Catalog/Catalog";
import Banner from "../Banner/Banner";
import { useParams } from "react-router-dom";

const Home = () => {
  const { id } = useParams();

  return (
    <>
      <div className="sticky top-0 ">
        <img
          src={img1}
          alt=""
          className="h-screen w-screen  object-cover relative"
        />
        <div className="absolute bottom-[13%]  md:left-32 text-white px-6 md:px-0">
          <p className="text-3xl lg:text-5xl font-semibold">
            Timeless Elegance
          </p>
          <p className=" mt-3 lg:mt-5 ">
            Discover watches that define your moments. <br />
            Precision, craftsmanship, and design—crafted for you.
          </p>
          <button
            className="border mt-5 lg:mt-8 rounded-4xl px-12 py-3 text-[.8rem] cursor-pointer 
             hover:bg-[#222222b7] hover:scale-101 transition-all duration-500 ease-in-out"
          >
            DISCOVER THE COLLECTION
          </button>
        </div>
      </div>

      <div className="sticky top-0">
        <img src={img2} alt="" className="h-screen w-screen object-cover " />
        <div className="absolute bottom-[15%] lg:bottom-[10%]   w-full text-white text-center px-6 lg:px-0">
          <p className="text-3xl lg:text-5xl font-semibold">Time Refined</p>
          <p className=" mt-3 lg:mt-5">
            Explore our curated collection of modern and luxury timepieces.{" "}
            <br />
            Built for those who value every second.
          </p>
          <button
            className="border mt-5 lg:mt-8 rounded-4xl px-12 py-3 text-[.8rem]  cursor-pointer 
             hover:bg-[#222222b7] hover:scale-101 transition-all duration-500 ease-in-out"
          >
            DISCOVER THE COLLECTION
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sticky top-0 overflow-hidden">
        <div className="relative">
          <img
            src={men1}
            alt=""
            className="h-screen w-screen object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          />

          <div className="absolute bottom-[15%] lg:bottom-[8%]  w-full text-white text-center px-4">
            <p className="text-2xl lg:text-4xl font-semibold">
              Timeless. Masculine. Refined.
            </p>
            <button className="border mt-3 lg:mt-8 rounded-4xl px-3 py-1 lg:px-12 lg:py-3 text-[.8rem]  cursor-pointer 
             hover:bg-[#222222b7] hover:scale-101 transition-all duration-500 ease-in-out">
              DISCOVER MEN COLLECTION
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={women1}
            alt=""
            className="h-screen w-screen object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          />
          <div className="absolute bottom-[15%] lg:bottom-[8%]  w-full text-white text-center px-4">
            <p className="text-2xl lg:text-4xl font-semibold">
              Grace in Every Second
            </p>

            <button className="border mt-3 lg:mt-8 rounded-4xl px-3 py-1 lg:px-12 lg:py-3 text-[.8rem]  cursor-pointer 
             hover:bg-[#222222b7] hover:scale-101 transition-all duration-500 ease-in-out">
              DISCOVER WOMEN COLLECTION
            </button>
          </div>
        </div>
      </div>

      <Catalog />
      <Banner />
    </>
  );
};

export default Home;
