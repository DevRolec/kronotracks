"use client";
import { useState } from "react";

export default function HighlightsPage() {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      image: "/",
      caption: "An Unforgettable Journey in Turkey",
      reviewer: "Maria Angelica",
      location: "Manila, Philippines",
      stars: 5,
      description:
        "Turkey is a place I treasure — the colors, the food, the people. This trip made me feel alive in every sense. I will definitely return! Great question. Moving from React.js to Next.js is more of an evolution than a shift, but it introduces a number of important differences you’ll need to adapt to—especially around routing, rendering, and data fetching. Below is a breakdown of what you need to know",
    },
    {
      image: "/",
      caption: "Sunset from Bosphorus Yacht Cruise",
      reviewer: "David O.",
      location: "Lagos, Nigeria",
      stars: 4,
      description:
        "The Bosphorus sunset cruise was magical. A perfect way to unwind and soak in the skyline. Highly recommended for Great question. Moving from React.js to Next.js is more of an evolution than a shift, but it introduces a number of important differences you’ll need to adapt to—especially around routing, rendering, and data fetching. Below is a breakdown of what you need to know:couples.",
    },
    {
      image: "/",
      caption: "Exploring Cappadocia",
      reviewer: "Leila M.",
      location: "Dubai, UAE",
      stars: 5,
      description:
        "Riding a hot air balloon over Cappadocia was surreal. It felt like I was floating in a dream. Great question. Moving from React.js to Next.js is more of an evolution than a shift, but it introduces a number of important differences you’ll need to adapt to—especially around routing, rendering, and data fetching. Below is a breakdown of what you need to know: A bucket-list must-do!",
    },
  ];

  return (
    <div className="bg-light flex mt-4 mb-4 items-center justify-center flex-col h-auto sm:h-[500px] px-4 pt-4 pb-4">
      <h2 className="text-4xl font-bold text-[var(--purplelt)] mb-6 leading-tight">
        Trekker’s Highlights
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full h-[90%] sm:w-[98%] pt-4 ">
        {/* Left Column - Text Review */}
        <div className="flex items-center justify-center flex-col w-full md:w-[50%] h-auto md:h-[90%]">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
            <div>
              <p className="font-semibold text-gray-700">
                {slides[current].reviewer}
              </p>
              <p className="text-sm text-gray-500">
                {slides[current].location}
              </p>
            </div>
          </div>
          <div className="flex text-yellow-400 mb-2">
            {"★".repeat(slides[current].stars)}
            {"☆".repeat(5 - slides[current].stars)}
          </div>
          <h3 className="text-xl font-semibold text-[var(--purple)] mb-2">
            {slides[current].caption}
          </h3>
          <p className="text-[0.875rem] font-sans  text-justify text-[var(--dark)] font-semibold max-w-[90%]">
            {slides[current].description}
          </p>
        </div>

        {/* Center - Image Slider */}
        <div className="flex items-center flex-col w-[90%] sm:w-[60%] md:w-[25%] h-auto md:h-[80%]">
          <div className="w-full h-[250px] sm:h-[300px] md:h-[90%]S  flex items-center justify-center  border-2 border-[var(--purplelt)] rounded-[10px] p-2">
            <img
              src={slides[current].image}
              alt="Highlight"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="flex justify-center mt-2 gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === current
                    ? " bg-[var(--purplelt)]"
                    : "border-1 border-[var(--purplelt)] "
                }`}
                onClick={() => setCurrent(i)}
              ></button>
            ))}
          </div>
        </div>

        {/* Right - Video or second image placeholder */}
        <div className="flex items-center flex-col w-[90%] sm:w-[60%] md:w-[20%] h-[80%] md:h-[80%] gap-4">
          <div className="w-full h-[200px] sm:h-[60%] flex items-center justify-center   border-2 border-[var(--purplelt)] rounded-[10px] p-2">
            <span className="text-[var(--dark)] text-3xl">▶</span>
          </div>
          <p className="text-[0.875rem] font-sans text-justify text-[var(--dark)] font-semibold max-w-[80%]">
            {slides[current].caption}
          </p>
          <button className="bg-purple text-light m-3 h-auto px-6 py-2 rounded">
            See more highlights
          </button>
        </div>
      </div>
    </div>
  );
}
