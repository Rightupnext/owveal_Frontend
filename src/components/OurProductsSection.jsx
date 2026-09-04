import React, { useState } from 'react';

const productsData = [
  {
    id: 1,
    category: "ENGINEERING PRODUCT",
    title: "HEAT PUMP TECHNOLOGY (DEHYDRATOR)",
    description: "Owveal's heat pump dehydrator is designed to deliver controlled, uniform drying while significantly reducing energy consumption. Built for industrial, agro & non-agro processing applications, it enables consistent product quality independent of environmental conditions.",
    highlights: [
      "Up to 60–70% energy savings compared to conventional drying methods",
      "Uniform drying with controlled temperature (10 to 80°C) and 10 to 15% humidity",
      "Scalable solution for food, agro, and industrial applications"
    ],
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1778305942/Heat_pump_-_2_wmu45a.png" // Replace with Cloudinary link
  },
  {
    id: 2,
    category: "AUTOMATION & MACHINERY",
    title: "IV CANNULA RESERVOIR",
    description: "The IV cannula reservoir is developed to address a critical gap in fluid management by preventing backflow and reducing contamination risks. Designed with precision and usability in mind, it enhances patient safety while integrating seamlessly into existing medical setups.",
    highlights: [
      "Minimizes risk of backflow and contamination",
      "Improves safety and hygiene in IV administration",
      "Simple integration with existing clinical workflows"
    ],
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1778305941/IV_canulla_tnepfb.png"
  },
  {
    id: 3,
    category: "ENGINEERING PRODUCTS",
    title: "NANO BLOWER",
    description: "Owveal’s nano blower is a compact, high-efficiency air movement system designed for advanced thermal management in electronics and confined environments. It delivers effective cooling in a significantly smaller footprint compared to traditional fans.",
    highlights: [
      "Ultra-compact design for space-constrained applications",
      "Efficient cooling for electronics and precision systems",
      "Low power consumption with high airflow performance (up to 200 Km/hr)"
    ],
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1778305941/Nano_blower_ivkrev.png"
  }
];

export default function OurProductsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? productsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === productsData.length - 1 ? 0 : prev + 1));
  };

  const current = productsData[currentSlide];

  return (
    <section className="bg-[#F4F5F7] py-16 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-center justify-center space-x-3 mb-10">
          <div className="w-8 h-[2px] bg-gray-800" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-wide">
            Our Products
          </h2>
          <div className="w-8 h-[2px] bg-gray-800" />
        </div>

        {/* Main Product Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Single Image Frame */}
            <div className="lg:col-span-5 h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden bg-slate-100/80 border border-slate-200/60 p-4 flex items-center justify-center">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80";
                }}
              />
            </div>

            {/* Right Side: Product Details & Highlights */}
            <div className="lg:col-span-7 space-y-4">
              {/* Category Tag */}
              <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                {current.category}
              </span>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827] leading-snug">
                {current.title}
              </h3>

              {/* Paragraph Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {current.description}
              </p>

              {/* Key Highlights Section */}
              <div className="pt-2">
                <h4 className="text-sm font-bold text-gray-900 mb-3">
                  Key Highlights
                </h4>

                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  {current.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-red-600 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center justify-center space-x-3 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous Product"
            className="w-10 h-10 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition focus:outline-none"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Product"
            className="w-10 h-10 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition focus:outline-none"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}