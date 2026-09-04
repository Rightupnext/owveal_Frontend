import React, { useState } from 'react';

const successStories = [
  {
    id: 1,
    title: "SS Trolley for Qualitest – Strength with Smart Storage",
    description: "When Qualitest needed a 500 kg-capacity stainless-steel trolley that could be stored efficiently, Owveal engineered a space-saving foldable design without compromising load-bearing capacity. The client received a rugged, compact logistics solution that improved material handling without increasing floor space.",
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1776236020/trolley_hvp3us.png", // Replace with your Cloudinary URL
    logo: "https://res.cloudinary.com/djuqr3qlu/image/upload/v1786680573/logos-DF9Udn0B_r6zuhw.png"
  },
  {
    id: 2,
    title: "Abhirami Enterprises – Demoulding Time Slashed by 90%",
    description: "Manual demoulding of concrete cover blocks was slowing down Abhirami’s production line and fatiguing workers. Owveal’s smart mechanical demoulding system automated the process, reducing demoulding time from 50 seconds to just 4 seconds. This dramatically increased throughput and reduced physical strain on workers.",
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775708230/Demoulding_option_2_qeszko.png",
    logo: "https://res.cloudinary.com/djuqr3qlu/image/upload/v1786680573/logos-DF9Udn0B_r6zuhw.png"
  },
  {
    id: 3,
    title: "Arul Depot – From Sun-Drying to Energy-Efficient Heat Pump Drying",
    description: "Traditional sun-drying of pappads was inconsistent and weather-dependent. Owveal delivered a custom-built heat pump dryer consuming one-third the energy, ensuring consistent drying and better product quality.",
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1776244928/heat-pump_rvxtue.png",
    logo: "https://res.cloudinary.com/djuqr3qlu/image/upload/v1786680573/logos-DF9Udn0B_r6zuhw.png"
  },
  {
    id: 4,
    title: "Keyurra – Smart Stadium Seating",
    description: "Owveal developed ergonomic foldable stadium chairs with automatic lifting and corrosion resistance, ideal for large-scale deployment.",
    image: "http://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775708230/chair_fdtwcg.png",
    logo: "https://res.cloudinary.com/djuqr3qlu/image/upload/v1786680573/logos-DF9Udn0B_r6zuhw.png"
  },
  {
    id: 5,
    title: "Deepa Erectors – Digital Sheet Planning",
    description: "3D modeling and nesting reduced waste, improved accuracy, and cut planning time in half.",
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775708229/Deepa_erectors_p8hb8r.png",
    logo: "https://res.cloudinary.com/djuqr3qlu/image/upload/v1786680573/logos-DF9Udn0B_r6zuhw.png"
  },
  {
    id: 6,
    title: "Micro Precision – Valve Testing System",
    description: "Custom test rig improved QC reliability, consistency, and ISO-ready reporting.",
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775708229/Pneumatic_jig_viuccu.png",
    logo: "https://res.cloudinary.com/djuqr3qlu/image/upload/v1786680573/logos-DF9Udn0B_r6zuhw.png"
  },
  {
    id: 7,
    title: "WoW Laddus – Perfect Portion Automation",
    description: "Custom cavity mould enabled precise 38g laddu production at scale with reduced labor.",
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775708228/Laddu_obxdnw.png",
    logo: "https://res.cloudinary.com/djuqr3qlu/image/upload/v1786680573/logos-DF9Udn0B_r6zuhw.png"
  },
  {
    id: 8,
    title: "Durel – Smart Pipe Alignment",
    description: "Reverse engineered assembly reduced cost and improved manufacturability.",
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1776245215/pipe-peeler_xcpnmf.png",
    logo: "https://res.cloudinary.com/djuqr3qlu/image/upload/v1786680573/logos-DF9Udn0B_r6zuhw.png"
  },
  {
    id: 9,
    title: "Arul Depot – Precision Pappad Press",
    description: "Custom mold ensured consistent shape, thickness, and reduced operator fatigue.",
    image: "https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775708228/Pappad_ddgfkp.png",
    logo: "https://res.cloudinary.com/djuqr3qlu/image/upload/v1786680573/logos-DF9Udn0B_r6zuhw.png"
  }
];

export default function SuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
  };

  const current = successStories[currentIndex];

  return (
    <section className="bg-[#F8F9FA] py-16 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10">
          Success Stories
        </h2>

        {/* Carousel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Product Image */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-sm bg-gray-200">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-all duration-500"
                onError={(e) => {
                  // Fallback preview if Cloudinary URL is loading/empty
                  e.currentTarget.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80";
                }}
              />
            </div>
          </div>

          {/* Right Side: Content Details */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between h-full space-y-6">
            
            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
              {current.title}
            </h3>

            {/* Logo + Description Box */}
            <div className="flex items-start space-x-4">
              {/* Logo Card */}
         <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-2">
  <img
    src="https://res.cloudinary.com/djuqr3qlu/image/upload/v1786680573/logos-DF9Udn0B_r6zuhw.png"
    alt="Logo"
    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
  />
</div>

              {/* Description Paragraph */}
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Bottom Row: Counter & Navigation Arrows */}
            <div className="flex items-center justify-between pt-6">
              {/* Pagination Counter */}
              <span className="text-xs sm:text-sm text-gray-500 font-medium">
                {currentIndex + 1} / {successStories.length}
              </span>

              {/* Control Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Story"
                  className="w-10 h-10 rounded-full border border-gray-800 bg-white hover:bg-gray-100 text-gray-900 flex items-center justify-center transition focus:outline-none"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next Story"
                  className="w-10 h-10 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition focus:outline-none"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}