import React, { useEffect, useState } from "react";
import { CategoryData } from "../../DAL/collection/collection";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = (name, id) => {
    console.log(name, id, "clicked");
    if (name === `Home`) {
      navigate("/");
    } else {
      navigate(`/collection/${id}`, { state: { name } });
    }
  };

  const handleData = async () => {
    const resp = await CategoryData();
    if (resp.success) setCategory(resp.data);
  };

  useEffect(() => {
    handleData();
  }, []);
  return (
    <>
      <div className=" h-auto  relative  bg-[#000000] px-8 lg:px-32 lg:py-12 py-6 flex justify-around ">
        <div className="grid grid-cols-2 md:grid-cols-4 place-content-center w-full space-y-6 space-x-1.5 md:space-x-0 md:space-y-0 ">
          <div className="">
            <p className="text-white font-medium">Categories</p>
            <ul className="flex flex-col gap-1.5 mt-4">
              {category.map((item) => (
                <li
                  key={item.id}
                  className="text-[#757575] font-normal cursor-pointer hover:text-[#cecdcd] hover:scale-97 transition-transform duration-300 ease-in-out"
                  onClick={() => handleNavigate(item.name, item.id)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <p className="text-[#757575] font-normal mt-15">
              {" "}
              © 2025 DialoWatch. All rights reserved.
            </p>
          </div>

          <div>
            <p className="text-white font-medium">Legal</p>
            <ul className="flex flex-col gap-1.5 mt-4">
              <li className="text-[#757575] font-normal">Privacy Policy</li>
              <li className="text-[#757575] font-normal">Cookie Notice</li>
              <li className="text-[#757575] font-normal">Term of use</li>
            </ul>
          </div>

          <div>
            <p className="text-white font-medium">About Us</p>
            <ul className="flex flex-col gap-2.5 mt-4">
              <li className="text-[#757575] font-normal">
                At DIAL O WATCHES we bring you premium, <br /> 100% authentic
                watches — <br />
                delivered anywhere in Pakistan.
              </li>
              <li className="text-[#757575] font-normal">
                • 100% Authentic Products
              </li>
              <li className="text-[#757575] font-normal">
                • Free Nationwide Delivery
              </li>
              <li className="text-[#757575] font-normal">
                • Hassle-Free Returns & Exchanges
              </li>
              <li className="text-[#757575] font-normal">
                • Secure and Trusted Payments
              </li>
            </ul>
          </div>

          <div>
            <div>
              <p className="text-white font-medium">Help and contacts</p>
              <ul className=" gap-1.5 mt-4 justify-center ">
                <li className="text-[#757575] font-normal">Need Help?</li>
                <li className="text-[#757575] font-normal">Contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
