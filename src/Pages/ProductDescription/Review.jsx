import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "@smastrom/react-rating/style.css";
import { FiCheck } from "react-icons/fi";

export const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;

  const [rating, setRating] = useState(3);
  const [img, setImg] = useState(null);
  const [text, setText] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) setImg(URL.createObjectURL(file));
  };

  const removeImg = () => setImg(null);

  const variants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-lg  lg:w-200 h-120 lg:h-160 p-6 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        {children}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <div className="text-2xl font-normal text-center mt-28 md:mt-55 xl:mt-40">
                How would you rate this item?
              </div>
              <div className="flex flex-col items-center gap-5 mt-10 w-fit mx-auto">
                <Rating
                  style={{ maxWidth: 240 }}
                  value={rating}
                  onChange={(val) => {
                    setRating(val);
                    setStep(2);
                  }}
                  transition="zoom"
                />
                <div className="flex justify-between w-full">
                  <p className="text-[.9rem]">Dislike it</p>
                  <p className="text-[.9rem]">Love it!</p>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-2xl lg:text-3xl font-semibold font-serif mt-5 md:mt-20">
                Show it off
              </h1>
              <p className="lg:text-[1.2rem]">We'd love to see it in action!</p>
              {error && (
                <p className="text-red-600 mt-4">*Fill the required fields</p>
              )}
              <div className="border h-24 w-70 lg:w-100 flex justify-center items-center mt-4">
                {!img ? (
                  <label className="bg-black text-white cursor-pointer px-6 py-3 rounded-sm font-semibold">
                    Add Photo
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleChange}
                    />
                  </label>
                ) : (
                  <div className="relative">
                    <img
                      src={img}
                      alt="preview"
                      className="h-22 w-24 object-cover rounded-sm"
                    />
                    <button
                      onClick={removeImg}
                      className="bg-gray-300 p-1 rounded-full absolute top-0 right-0 text-black"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>

              <h1 className="text-[1.2rem] lg:text-2xl font-semibold font-serif mt-6">
                Tell us more!
              </h1>
              <textarea
                className="w-70 lg:w-100 h-24 lg:h-32 border rounded px-3 py-2 mt-4"
                placeholder="Share your experience"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>

              <div className="w-full flex justify-end">
                <button
                  onClick={() => {
                    if (!img || !text.trim()) {
                      setError(true);
                      return;
                    }
                    setError(false);
                    setStep(3);
                  }}
                  className="px-10 py-3 bg-black text-white font-semibold mt-3 lg:mt-6 rounded-sm"
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center mt-5 lg:mt-25 "
            >
              <h1 className="text-3xl font-semibold font-serif mb-6">
                About You
              </h1>
              <form
                className="w-full flex flex-col items-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col lg:flex-row  gap-3 lg:gap-6 lg:mt-6">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-black font-medium"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="border px-8 w-75  py-2 lg:py-3"
                      placeholder="John"
                      maxLength={12}
                      minLength={3}
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-black font-medium"
                    >
                      Last name{" "}
                      <span className="text-[.8rem] text-zinc-500">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="border px-8 w-75 py-2 lg:py-3"
                      placeholder="Khan"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-black font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border px-8 py-3 w-75 md:w-130 lg:w-155"
                    placeholder="John@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {error && (
                  <p className="text-red-600 mt-2">
                    *Please fill all required fields
                  </p>
                )}

                <div className="w-full flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      if (!firstName.trim() || !email.trim()) {
                        setError(true);
                        return;
                      }
                      setError(false);
                      setStep(4);
                      // setTimeout(() => onClose(), 150000);
                    }}
                    className="px-10 py-3 bg-black text-white font-semibold mt-8 md:mt-40 rounded-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center md:mt-12 text-center md:text-start"
            >
              <div className="flex flex-col items-center justify-center h-112 w-full ">
                <h1 className="text-3xl font-normal mb-6">
                  Thanks for Submiting review
                </h1>
                <div className="bg-green-200 p-2 md:p-3 rounded-full w-fit">
                  <FiCheck className="text-6xl text-green-500" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
