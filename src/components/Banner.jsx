import React, { useState, useEffect } from 'react';
import Pharma from "../assets/banner/Pharma.jpg";

const bannerData = [
  {
    id: 1,
    type: 'video',
    src: 'https://res.cloudinary.com/dsgizhhfx/video/upload/v1786335908/hero11-B3wpye_T_ah4nyw.mp4',
    title: "Architects of Tomorrow's Solutions",
    description: "We design, develop, and deliver intelligent engineering solutions for a changing world. From advanced product development and reverse engineering to simulation and smart manufacturing, we work at the intersection of precision and possibility, serving industries that power the future.",
    btn1Text: "Explore Services",
    btn1Link: "#services",
    btn2Text: "Contact Us",
    btn2Link: "/contact-us"
  },
  {
    id: 2,
    type: 'image',
    src: "https://res.cloudinary.com/dsgizhhfx/image/upload/v1786336658/Pharma_puagff.jpg",
    title: "Engineering Precision That Saves Lives",
    description: "We collaborate with medical device innovators to design, prototype, and optimize life-saving technologies. From surgical tools to diagnostic systems, our engineering ensures safety, performance, and regulatory readiness.",
    btn1Text: "Our Expertise",
    btn1Link: "#expertise",
    btn2Text: "Get In Touch",
    btn2Link: "/contact-us"
  },
  {
    id: 3,
    type: 'image',
    src: 'https://res.cloudinary.com/dsgizhhfx/image/upload/v1786336697/aero_j1tuar.jpg',
    title: "Lightweight Strength for the Skies",
    description: "Aerospace demands precision and perfection. We offer high-fidelity simulations, stress analysis, and CAD solutions for weight-optimized, safety-critical aerospace components and systems.",
    btn1Text: "View Products",
    btn1Link: "#products",
    btn2Text: "Contact Us",
    btn2Link: "/contact-us"
  },
  {
    id: 4,
    type: 'image',
    src: 'https://res.cloudinary.com/dsgizhhfx/image/upload/v1786336736/Automobile_fnmafe.webp',
    title: "Designing the Next Generation of Mobility",
    description: "We bring speed and accuracy to the automotive development cycle — supporting electric vehicles, structural systems, enclosures, and tooling with CAD, FEA, and prototyping expertise.",
    btn1Text: "Case Studies",
    btn1Link: "#cases",
    btn2Text: "Consult Us",
    btn2Link: "/contact-us"
  },
  {
    id: 5,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80',
    title: "Heavy Duty. High Precision.",
    description: "We support OEMs and manufacturers with structural and functional engineering of earth movers, presses, material handlers, and custom SPMs that are built to endure.",
    btn1Text: "Success Stories",
    btn1Link: "#stories",
    btn2Text: "Contact Us",
    btn2Link: "/contact-us"
  },
  {
    id: 6,
    type: 'image',
    src: 'https://res.cloudinary.com/dsgizhhfx/image/upload/v1786336781/Heavy_s0lw6n.jpg',
    title: "Innovating for Smarter Farming",
    description: "We engineer rugged, high-efficiency equipment for modern agriculture — from precision planters and harvesters to irrigation systems and agri-processing automation.",
    btn1Text: "Learn More",
    btn1Link: "#about",
    btn2Text: "Contact Us",
    btn2Link: "/contact-us"
  },
  {
    id: 7,
    type: 'image',
    src: 'https://res.cloudinary.com/dsgizhhfx/image/upload/v1786336820/Railway_k1l4po.jpg',
    title: "Keeping Rail Systems Strong, Safe, and Moving",
    description: "We support railway infrastructure and rolling stock development with high-load components, bogie systems, vibration-tested enclosures, and long-life parts for continuous performance.",
    btn1Text: "Learn More",
    btn1Link: "#about",
    btn2Text: "Contact Us",
    btn2Link: "/contact-us"
  },
  {
    id: 8,
    type: 'image',
    src: 'https://res.cloudinary.com/dsgizhhfx/image/upload/v1786336862/Defence_cg4z2c.jpg',
    title: "Built to Endure. Engineered to Perform.",
    description: "We support the defense sector with rugged product development — from UAV mechanicals to control housings — where durability, secrecy, and functionality are mission-critical.",
    btn1Text: "Learn More",
    btn1Link: "#about",
    btn2Text: "Contact Us",
    btn2Link: "/contact-us"
  }
];

export default function OwvealHeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // If current slide is a video, do not set up automatic transition
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
      <section className="relative flex-1 w-full min-h-[calc(100vh-80px)] flex items-center justify-center bg-black overflow-hidden">
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

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 z-10" />

              {/* Text Container */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-8">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight mb-6 drop-shadow-lg">
                  {slide.title}
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-gray-100 max-w-3xl font-normal leading-relaxed mb-8 drop-shadow">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a href={slide.btn1Link} className="w-full sm:w-auto bg-[#B80000] hover:bg-[#990000] text-white px-8 py-3 rounded font-semibold transition-colors">
                    {slide.btn1Text}
                  </a>
                  <a href={slide.btn2Link} className="w-full sm:w-auto bg-transparent hover:bg-white/10 border border-white text-white px-8 py-3 rounded font-medium transition-colors">
                    {slide.btn2Text}
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Navigation Arrows */}
        <button 
          onClick={handlePrev} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button 
          onClick={handleNext} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
          aria-label="Next Slide"
        >
          ❯
        </button>
      </section>
    </div>
  );
}