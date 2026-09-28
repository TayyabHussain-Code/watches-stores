import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CategoryData } from "../../DAL/collection/collection";
import logo from "../../../Imgs/transparentLogo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const updateQuantity = () => {
    const cartItems = JSON.parse(localStorage.getItem("productId") || "[]");
    setQuantity(cartItems.length);
  };

  const handleData = async () => {
    const resp = await CategoryData();
    if (resp.success) setCategory(resp.data);
  };

  const handleNavigate = (name, id) => {
    if (name === "Home") navigate("/");
    else navigate(`/collection/${id}`, { state: { name } });
  };

  useEffect(() => {
    handleData();
    updateQuantity();
    window.addEventListener("cart-update", updateQuantity);
    return () => window.removeEventListener("cart-update", updateQuantity);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full md:px-8 xl:px-31 px-8 py-4 flex items-center justify-between text-white backdrop-blur-lg bg-white/1 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="text-2xl md:hidden focus:outline-none"
          >
            <GiHamburgerMenu />
          </button>
          <img src={logo} alt="Logo" className="w-12 h-auto" />
        </div>

        <ul className="hidden md:flex gap-6 ml-2 text-sm">
          {category.map((item) => (
            <li
              key={item.id}
              className="group relative cursor-pointer uppercase"
              onClick={() => handleNavigate(item?.name, item?.id)}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 text-xl">
          <BsPerson className="hover:text-gray-400 cursor-pointer transition" />
          <div className="relative">
            <Link to="/cart">
              {quantity > 0 && (
                <div className="absolute bg-white h-4 w-4 rounded-full bottom-3 right-2 flex items-center justify-center text-black text-sm">
                  {quantity}
                </div>
              )}
              <HiOutlineShoppingCart className="hover:text-gray-400 cursor-pointer transition" />
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">MENU</h2>
          <IoClose
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
        <ul className="flex flex-col p-4 gap-4 text-sm">
          {category.map((item) => (
            <li key={item.id}>
              <button
                to={item.path}
                onClick={() => {
                  setOpen(false);
                  handleNavigate(item?.name, item?.id);
                }}
                className="block hover:text-gray-400 transition"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
