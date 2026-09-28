import React, { useState, useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";
import "../../App.css";
import { Modal } from "./Review";

const BestSelling = () => {
  const carouselRef = useRef(null);
  const [expanded, setExpanded] = useState({});
  const [showReadMore, setShowReadMore] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Khalid Mehamood",
      img: "https://images.loox.io/uploads/2025/8/27/Oy_YQBSfO1.jpg",
      text: `The Watch is amazing, exactly as shown. The dial looks very premium and high quality. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae mauris sit amet libero dictum efficitur. Donec facilisis turpis non dolor pulvinar varius. Nulla facilisi. Integer pharetra orci ut lorem interdum, nec accumsan ligula dictum.`,
      date: "10/2/2025",
    },
    {
      id: 2,
      name: "Khalid Mehamood",
      img: "https://images.loox.io/uploads/2025/8/27/Oy_YQBSfO1.jpg",
      text: "The Watch is amazing, exactly as shown. The dial looks very premium and high quality.",
      date: "10/2/2025",
    },
    {
      id: 3,
      name: "Khalid Mehamood",
      img: "https://images.loox.io/uploads/2025/8/27/Oy_YQBSfO1.jpg",
      text: "Short review text — no need for read more.",
      date: "10/3/2025",
    },
    {
      id: 4,
      name: "Khalid Mehamood",
      img: "https://images.loox.io/uploads/2025/8/27/Oy_YQBSfO1.jpg",
      text: "Short review text — no need for read more. lorem100 Short review text — no need for read more. lorem100  Short review text — no need for read more. lorem100  Short review text — no need for read more. lorem100  ",
      date: "10/3/2025",
    },
    {
      id: 5,
      name: "Khalid Mehamood",
      img: "https://images.loox.io/uploads/2025/8/27/Oy_YQBSfO1.jpg",
      text: "Short review text — no need for read more. lorem100 Short review text — no need for read more. lorem100  Short review text — no need for read more. lorem100  Short review text — no need for read more. lorem100  ",
      date: "10/3/2025",
    },
  ];

  const textRefs = useRef({});

  useEffect(() => {
    const visibility = {};
    reviews.forEach((r) => {
      const el = textRefs.current[r.id];
      if (el) {
        visibility[r.id] = el.scrollHeight > el.clientHeight;
      }
    });
    setShowReadMore(visibility);
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="relative z-10 mt-24">
      <h1 className=" text-2xl md:text-4xl font-bold text-center text-white">
        Hear From Our Happy Customers
      </h1>

      <p className=" md:text-2xl md:font-medium text-center mt-2 text-white">
        Real customers share why Dial o Watches has become their favourite brand
      </p>

      <div className="flex justify-between mt-8 md:px-22 items-center py-4">
        <p className="text-white font-normal">Total Reviews {reviews.length}</p>
        <button onClick={()=>setOpenModal(true)} className="border border-white px-3 md:px-4 py-1 lg:py-2 text-neutral-100 bg-neutral-800 backdrop-blur-3xl md:text-[1.2rem] md:font-medium opacity-90 rounded-sm md:rounded-lg">
          Write a review
        </button>
      </div>
      

      <div className="relative flex items-center justify-center">
        {reviews.length > 4 && (
          <>
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-[40%] z-20 bg-[#6e6c6c5f] backdrop-blur-2xl p-2 rounded-full hover:bg-black/70"
            >
              <RiArrowLeftWideFill color="white" size={28} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 z-20 top-[40%] bg-[#6e6c6c5f] backdrop-blur-2xl p-2 rounded-full hover:bg-black/70"
            >
              <RiArrowRightWideFill color="white" size={28} />
            </button>
          </>
        )}

        <div
          ref={carouselRef}
          className="flex gap-14 overflow-x-auto scroll-smooth hide-scrollbar px-12 snap-x snap-mandatory"
        >
          {reviews.map((r) => (
            <div
              key={r.id}
              className={`snap-center shrink-0 bg-zinc-500/20 backdrop-blur-2xl w-78 md:w-88 xl:w-78 lg:w-100 md:h-136 relative rounded-lg transition-all ${
                expanded[r.id]
                  ? "overflow-y-auto scrollbar-custom"
                  : "overflow-hidden"
              }`}
            >
              <img
                src={r.img}
                alt={r.name}
                className="w-full md:w-88 lg:w-100 xl:w-88 h-80 md:h-100 object-cover"
              />
              <div className="px-4 py-3">
                <p className="text-white text-[1.3rem] font-semibold">
                  {r.name}
                </p>
                <div className="flex my-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} size={15} color="#ffd700" />
                  ))}
                </div>
                <p
                  ref={(el) => (textRefs.current[r.id] = el)}
                  className={`text-white font-normal mt-2 ${
                    expanded[r.id] ? "" : "line-clamp-2"
                  }`}
                >
                  {r.text}
                </p>
                <p className="text-[#dfdddd] mt-2 text-end">{r.date}</p>
                {showReadMore[r.id] && (
                  <p
                    className="text-white md:bg-[#19191b] text-end underline mt-2  w-auto p-2 cursor-pointer sticky bottom-0 right-0"
                    onClick={() => toggleExpand(r.id)}
                  >
                    {expanded[r.id] ? "Show less" : "Read more"}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Write a Review"
      >
        
      </Modal>
    </div>
  );
};

export default BestSelling;
