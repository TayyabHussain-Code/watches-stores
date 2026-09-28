import React from "react";
import WatchData from "./WatchData";

const Catalog = () => {

   
  return (
    <>
    <div className="relative w-full">
    

      
      <div className="pt-22 px-8 w-full bg-black">
        <h1 className="text-3xl lg:text-4xl font-semibold text-white relative z-5">Featured Products</h1>
        <WatchData/>
      </div>
    </div>
    
    </>
  );
};

export default Catalog;
