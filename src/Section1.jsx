import React, { useState, useEffect } from "react";

function Section1() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/slider.json")
      .then((res) => res.json())
      .then((data) => {
        const imageUrls = data.map((item) => item.image);
        setImages(imageUrls);
      })
      .catch((err) => console.error("Failed to load images:", err));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  if (images.length === 0) return <div>Loading...</div>;

  return (
    <div className="container mx-auto relative overflow-hidden rounded-xl flex justify-center items-center mt-4">
      {/* Slider Image */}
      <img
        src={images[index]}
        alt="Slider"
        className="w-full sm:w-[90%] md:w-[800px] lg:w-[1100px] xl:w-[1300px] h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover transition-all duration-700 rounded-md"
      />

      {/* Prev Button */}
      <button
        onClick={() =>
          setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-2 rounded-full bg-black/40 hover:bg-black/60 transition cursor-pointer"
      >
        ◀
      </button>

      {/* Next Button */}
      <button
        onClick={() => setIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-2 rounded-full bg-black/40 hover:bg-black/60 transition cursor-pointer"
      >
        ▶
      </button>
    </div>
  );
}

export default Section1;
