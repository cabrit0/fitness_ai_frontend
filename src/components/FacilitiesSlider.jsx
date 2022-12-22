import React, { useState } from "react";
import facility1 from "../assets/facility1Img.jpg";
import facility2 from "../assets/facility2Img.jpg";
import facility3 from "../assets/facility3Img.jpg";
import facility4 from "../assets/facility4Img.jpg";
import facility5 from "../assets/facility5Img.jpg";
import facility6 from "../assets/facility6Img.jpg";

const Facilities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: facility1, alt: "Facility 1" },
    { src: facility2, alt: "Facility 2" },
    { src: facility3, alt: "Facility 3" },
    { src: facility4, alt: "Facility 4" },
    { src: facility5, alt: "Facility 5" },
    { src: facility6, alt: "Facility 6" },
  ];
  const goToNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex > images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
  };
  const goToPrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(prevIndex);
    }
  };
  const goToImage = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative overflow-hidden py-4 px-12 mt-10 mx-6">
      <div className="text-3xl font-bold text-center text-gray-600 px-4 py-6">
        Nossas Instalações
      </div>
      <div className="h-full w-full">
        <div className="relative h-full max-w-screen-xl mx-auto">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="block mx-auto w-auto h-96 object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center inset-auto lg:mr-20">
        <button
          className="p-1 rounded-full hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300  ease-in-out transition-transform duration-200 transform hover:scale-110"
          onClick={goToNext}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center inset-auto lg:ml-20">
        <button
          className="p-1 rounded-full hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300  ease-in-out transition-transform duration-200 transform hover:scale-110"
          onClick={goToPrev}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="relative mt-3 ml-3">
        <div className="relative align-bottom flex justify-center">
          {/* Render a dot for each image and add an onClick event to go to the corresponding image */}
          {images.map((image, index) => (
            <button
              key={image.alt}
              className={`h-2.5 w-2.5 rounded-full ${
                index === currentIndex
                  ? "bg-gray-500 transform scale-125"
                  : "bg-gray-300"
              } mx-0.5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 ease-in-out transition-transform duration-300 transform hover:scale-150`}
              onClick={() => goToImage(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
