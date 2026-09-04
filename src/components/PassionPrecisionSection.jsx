import React, { useState, useEffect, useRef } from 'react';

const strengthSlides = [
  {
    id: 1,
    title: "Core Strength",
    description: "Deep engineering expertise combined with real-world execution."
  },
  {
    id: 2,
    title: "Innovation Focus",
    description: "Pioneering high-precision solutions that drive industry standards forward."
  },
  {
    id: 3,
    title: "End-to-End Delivery",
    description: "Seamless concept-to-creation workflows designed for speed and scalability."
  },
  {
    id: 4,
    title: "Quality Assurance",
    description: "Rigorous mechanical, dynamic, and thermal simulation for guaranteed durability."
  }
];

const statsData = [
  { numericValue: 12, suffix: "+", label: "Years of experience" },
  { numericValue: 50, suffix: "+", label: "Client partnerships" },
  { numericValue: 50, suffix: "+", label: "Completed projects" },
  { numericValue: 95, suffix: "%", label: "Returning clients" },
  { numericValue: 4, suffix: "", label: "Patents" },
  { numericValue: 5, suffix: "", label: "Own Product" }
];

// Helper Component for Auto Animated Counting Numbers
const AnimatedCounter = ({ targetValue, suffix, duration = 2000, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = targetValue;
    const incrementTime = 20; // 50 updates per second
    const totalSteps = duration / incrementTime;
    const stepValue = (end - start) / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [trigger, targetValue, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default function PassionPrecisionSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);
  const statsRef = useRef(null);

  // Intersection Observer to trigger auto-running numbers when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasScrolledIntoView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play timer for slide transitions
  useEffect(() => {
    const timer = setInterval(() => {
      triggerSlideChange((activeSlide + 1) % strengthSlides.length, 'next');
    }, 4000);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const triggerSlideChange = (nextIndex, dir) => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setActiveSlide(nextIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    const nextIdx = activeSlide === 0 ? strengthSlides.length - 1 : activeSlide - 1;
    triggerSlideChange(nextIdx, 'prev');
  };

  const handleNext = () => {
    const nextIdx = (activeSlide + 1) % strengthSlides.length;
    triggerSlideChange(nextIdx, 'next');
  };

  return (
    <section className="bg-[#F5F5F7] py-16 px-4 sm:px-8 lg:px-16 font-sans overflow-hidden">
      {/* Keyframe Styles */}
      <style>{`
        @keyframes flowNext {
          0% { opacity: 0; transform: translateX(40px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes flowPrev {
          0% { opacity: 0; transform: translateX(-40px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .animate-flow-next {
          animation: flowNext 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-flow-prev {
          animation: flowPrev 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

    <div className="max-w-7xl mx-auto">
        
        {/* Header Title with Arrow */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#111827] tracking-tight leading-tight max-w-lg">
            Where passion meets precision
          </h2>
          <div className="hidden sm:flex items-center justify-center">
            <svg
              className="w-6 h-6 text-[#111827] cursor-pointer hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* Top Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          
          {/* Left Card */}
          <div className="bg-[#EBE7DF] rounded-xl p-8 sm:p-10 flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <p className="text-[#374151] text-base sm:text-lg leading-relaxed">
              <span className="text-[#D32F2F] font-semibold">Owveal Engineering</span> was born from a simple idea that grew into a bold vision—transforming freelance expertise into a focused, high-performance team.
            </p>

            <div className="mt-8">
              <a
                href="#about"
                className="inline-flex items-center bg-black hover:bg-gray-800 text-white font-medium text-sm px-6 py-3 rounded-lg transition duration-200 active:scale-95 shadow-sm"
              >
                Know more about us
                <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Card with Animated Slider */}
          <div
            className={`bg-[#24274C] text-white rounded-xl p-8 sm:p-10 flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-md transition-all duration-700 ease-out relative overflow-hidden transform ${
              hasScrolledIntoView ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'
            }`}
          >
            
            {/* Animated Content Wrapper */}
            <div
              key={activeSlide}
              className={direction === 'next' ? 'animate-flow-next' : 'animate-flow-prev'}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-red-500/50 flex items-center justify-center bg-red-500/10 text-red-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold tracking-wide text-white">
                  {strengthSlides[activeSlide].title}
                </h3>
              </div>

              <hr className="border-gray-600/50 mb-6" />

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed min-h-[56px]">
                {strengthSlides[activeSlide].description}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-6 z-10">
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center rounded-lg transition-transform duration-200 active:scale-90"
              >
                ❮
              </button>

              <div className="flex items-center space-x-2">
                {strengthSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => triggerSlideChange(idx, idx > activeSlide ? 'next' : 'prev')}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === idx ? 'w-6 bg-red-500' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center rounded-lg transition-transform duration-200 active:scale-90"
              >
                ❯
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Statistics Auto-Running Number Grid */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 pt-4">
          {statsData.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col group p-2 rounded-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight group-hover:text-red-600 transition-colors duration-200">
                <AnimatedCounter
                  targetValue={item.numericValue}
                  suffix={item.suffix}
                  duration={2000}
                  trigger={hasScrolledIntoView}
                />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#D32F2F] mt-1.5 leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}