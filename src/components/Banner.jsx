import React, { useState, useEffect } from 'react';

const bannerData = [
  {
    id: 1,
    // category: "ENGINEERING SOLUTIONS",
    type: 'video',
    src: 'https://res.cloudinary.com/dsgizhhfx/video/upload/v1786335908/hero11-B3wpye_T_ah4nyw.mp4',
    title: "Architects of Tomorrow's Solutions",
    description: "We design, develop, and deliver intelligent engineering solutions for a changing world. From advanced product development and reverse engineering to simulation and smart manufacturing, we work at the intersection of precision and possibility, serving industries that power the future.",
    btn1Text: "Explore Services",
    btn1Link: "/contact-us",
    btn2Text: "Contact Us",
    btn2Link: "/contact-us"
  },
  {
    id: 2,
    category: "HEALTHCARE TECHNOLOGY",
    type: 'image',
    src: "https://res.cloudinary.com/dsgizhhfx/image/upload/v1786336658/Pharma_puagff.jpg",
    title: "Engineering Precision That Saves Lives",
    description: "We collaborate with medical device innovators to design, prototype, and optimize life-saving technologies. From surgical tools to diagnostic systems, our engineering ensures safety, performance, and regulatory readiness.",
    btn1Text: "Explore Healthcare",
    btn1Link: "/contact-us",
    btn2Text: "Contact Us",
    btn2Link: "/contact-us"
  },
  {
    id: 3,
    category: "AEROSPACE",
    type: 'image',
    src: 'https://res.cloudinary.com/dsgizhhfx/image/upload/v1786336697/aero_j1tuar.jpg',
    title: "Lightweight Strength for the Skies",
    description: "Aerospace demands precision and perfection. We offer high-fidelity simulations, stress analysis, and CAD solutions for weight-optimized, safety-critical aerospace components and systems.",
    btn1Text: "Explore Aerospace",
    btn1Link: "/contact-us",
    btn2Text: "Contact Us",
    btn2Link: "/contact-us"
  },
  {
    id: 4,
    category: "AUTOMOTIVE MOBILITY",
    type: 'image',
    src: 'https://res.cloudinary.com/dsgizhhfx/image/upload/v1786336736/Automobile_fnmafe.webp',
    title: "Designing the Next Generation of Mobility",
    description: "We bring speed and accuracy to the automotive development cycle — supporting electric vehicles, structural systems, enclosures, and tooling with CAD, FEA, and prototyping expertise.",
    btn1Text: "Explore Automotive",
    btn1Link: "/contact-us",
    btn2Text: "Consult Us",
    btn2Link: "/contact-us"
  },
  {
    id: 5,
    category: "HEAVY MACHINERY",
    type: 'image',
    src: 'https://heroic-mandazi-5c0a1f.netlify.app/assets/Heavy-3dBZJyYP.jpg',
    title: "Heavy Duty. High Precision.",
    description: "We support OEMs and manufacturers with structural and functional engineering of earth movers, presses, material handlers, and custom SPMs that are built to endure.",
    btn1Text: "Explore Machinery",
    btn1Link: "/contact-us",
    btn2Text: "Contact Us",
    btn2Link: "/contact-us"
  },
  {
    id: 6,
    category: "Agro-tech",
    type: 'image',
    src: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1777370530/Agro_Agricultural_Technology_imw4ho.jpg',
    title: "Innovating for Smarter Farming",
    description: "We engineer rugged, high-efficiency equipment for modern agriculture — from precision planters and harvesters to irrigation systems and agri-processing automation.",
    btn1Text: "Explore Agro-tech",
    btn1Link: "/contact-us",
    btn2Text: "Contact Us",
    btn2Link: "/contact-us"
  },
  {
    id: 7,
    category: "RAILWAY",
    type: 'image',
    src: 'https://res.cloudinary.com/dsgizhhfx/image/upload/v1786336820/Railway_k1l4po.jpg',
    title: "Keeping Rail Systems Strong, Safe, and Moving",
    description: "We support railway infrastructure and rolling stock development with high-load components, bogie systems, vibration-tested enclosures, and long-life parts for continuous performance.",
    btn1Text: "Explore Railway",
    btn1Link: "/contact-us",
    btn2Text: "Contact Us",
    btn2Link: "/contact-us"
  },
  {
    id: 8,
    category: "DEFENSE",
    type: 'image',
    src: 'https://res.cloudinary.com/dsgizhhfx/image/upload/v1786336862/Defence_cg4z2c.jpg',
    title: "Built to Endure. Engineered to Perform.",
    description: "We support the defense sector with rugged product development — from UAV mechanicals to control housings — where durability, secrecy, and functionality are mission-critical.",
    btn1Text: "Explore Defence",
    btn1Link: "/contact-us",
    btn2Text: "Contact Us",
    btn2Link: "/contact-us"
  }
];

export default function OwvealHeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (bannerData[currentSlide]?.type === 'video') {
      return;
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
    }, 18000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col font-sans bg-gray-900">
      {/* Hero Carousel */}
      <section className="relative flex-1 w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {bannerData.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Media Layer */}
              {slide.type === 'video' ? (
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
              )}

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 z-10" />

              {/* Text Container */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-8">
                {/* Red Subtitle / Category Header */}
                <span className="text-red-600 font-bold tracking-[0.25em] text-sm  sm:text-lg uppercase mb-3">
                  {slide.category}
                </span>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl leading-tight mb-4 drop-shadow-md">
                  {slide.title}
                </h1>

                {/* Description Text */}
                <p className="text-xs sm:text-sm lg:text-base text-gray-200 max-w-2xl font-normal leading-relaxed mb-8 opacity-90">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-row items-center justify-center gap-3">
                  <a
                    href={slide.btn1Link}
                    className="bg-[#D00000] hover:bg-[#B00000] text-white px-5 py-2.5 rounded text-xs sm:text-sm font-semibold transition-all shadow-md"
                  >
                    {slide.btn1Text}
                  </a>
                  <a
                    href={slide.btn2Link}
                    className="bg-transparent hover:bg-white/10 border border-white/80 text-white px-5 py-2.5 rounded text-xs sm:text-sm font-medium transition-all"
                  >
                    {slide.btn2Text}
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors border border-white/20"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button 
          onClick={handleNext} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors border border-white/20"
          aria-label="Next Slide"
        >
          ❯
        </button>

        {/* Carousel Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
          {bannerData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-6 bg-red-600' : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Floating WhatsApp Action Button */}
        {/* <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
        </a> */}
      </section>
    </div>
  );
}