import React, { useEffect, useRef, useState } from 'react';

const expertiseSections = [
  {
    id: 'engineering-rd',
    title: 'Engineering And R&D',
    subtext:
      'Engineering innovation, driven by insight and built for real-world impact.',
    items: [
      {
        title: 'New Product Development',
        content:
          'We offer complete end-to-end product development services from concept to production. Our process integrates industrial design, engineering validation, prototyping, and design for manufacturability (DFM) to deliver cost-effective and production-ready solutions.',
      },
      {
        title: 'Special Purpose Machine Design',
        content:
          'Custom automated machinery engineered to meet highly specific manufacturing challenges, boosting production speed and operational safety.',
      },
      {
        title: 'Reverse Engineering',
        content:
          'Reconstruct high-precision 3D CAD models from existing physical components using advanced laser scanning and dimensional analysis.',
      },
      {
        title: 'Finite Element Analysis (FEA)',
        content:
          'Comprehensive structural, dynamic, thermal, and fluid simulations to validate and optimize designs before prototype fabrication.',
      },
      {
        title: 'Industrial Solutions',
        content:
          'Tailored industrial engineering services designed to optimize factory layouts, throughput efficiency, and plant maintenance.',
      },
      {
        title: 'Modeling & Drafting',
        content:
          'High-accuracy 2D production drawings and 3D parametric mechanical CAD models adhering strictly to international standards.',
      },
      {
        title: 'Value Engineering',
        content:
          'Systematic evaluation of design choices and materials to reduce manufacturing costs without sacrificing product quality or performance.',
      },
      {
        title: 'Electronics Design & Development',
        content:
          'Hardware schematic design, PCB layout optimization, and embedded firmware development for integrated smart products.',
      },
    ],
  },
  {
    id: 'digital-solutions',
    title: 'Digital Solutions',
    subtext:
      'Bridging the physical and virtual worlds through smart engineering',
    items: [
      {
        title: 'Digital Manufacturing & Automation',
        content:
          'Smart factory integration, automated workflow optimization, and IoT connectivity for next-generation industrial operations.',
      },
      {
        title: 'Digital Twin Development',
        content:
          'Real-time virtual modeling of physical machinery and assets to predict maintenance needs, simulate performance, and reduce downtime.',
      },
    ],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    subtext:
      'From prototype to production, engineered with precision.',
    items: [
      {
        title: 'From Prototype to Product',
        content:
          'Seamless end-to-end transition from initial functional prototype to full-scale quality production runs.',
      },
      {
        title: 'Special Purpose Machine Manufacturing',
        content:
          'Turnkey precision assembly and manufacturing of custom-engineered industrial machinery and specialized equipment.',
      },
      {
        title: 'Component Manufacturing',
        content:
          'High-tolerance mechanical machining and custom component fabrication tailored for demanding industry requirements.',
      },
      {
        title: 'Quality Control & Inspection',
        content:
          'Rigorous Quality Assurance protocols using CMM inspection, non-destructive testing, and strict compliance verification.',
      },
    ],
  },
  {
    id: 'education',
    title: 'Education',
    subtext:
      'Bridging the gap between classroom knowledge and real world engineering.',
    items: [
      {
        title: 'Skill Development – Zero to One Program',
        content:
          'Our flagship Zero to One program covers the complete product lifecycle. From initial product visualization and CAD modeling to prototyping and mass manufacturing, this program equips learners with real, hands-on industry skills.',
      },
      {
        title: 'Internship Opportunity',
        content:
          'Get hands-on experience by working on real-time engineering projects at Owveal. Interns actively contribute to live product development, reverse engineering, and manufacturing tasks.',
      },
    ],
  },
];

/* =========================================================
   DIAMOND DOT-GRID SVG (LEFT) - MATCHES SCREENSHOT ALIGNMENT
========================================================= */

function LeftDiamondGridSVG({ scrollY }) {
  // Move down smoothly when scrolling down
  const translateY = scrollY * 0.2;

  const dots = [];
  const rows = 30;
  const cols = 30;
  const spacing = 16;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const distFromCenter = Math.sqrt(
        Math.pow(r - rows / 2, 2) + Math.pow(c - cols / 2, 2)
      );
      // Halftone dot size gradient calculation
      const dotSize = Math.max(0.5, 3.2 - distFromCenter * 0.1);

      dots.push({
        x: c * spacing,
        y: r * spacing,
        size: dotSize,
        key: `l-${r}-${c}`,
      });
    }
  }

  return (
    <div
      className="hidden md:block absolute -left-[180px] top-[180px] pointer-events-none z-0 floating-bg-left"
      style={{
        transform: `translate3d(0, ${translateY}px, 0)`,
        willChange: 'transform',
      }}
    >
      <div className="rotate-[38deg] opacity-45 overflow-visible">
        <svg
          width="480"
          height="480"
          viewBox="0 0 480 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#9CA3AF">
            {dots.map((dot) => (
              <circle key={dot.key} cx={dot.x} cy={dot.y} r={dot.size} />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

/* =========================================================
   DIAMOND DOT-GRID SVG (RIGHT) - MATCHES SCREENSHOT ALIGNMENT
========================================================= */

function RightDiamondGridSVG({ scrollY }) {
  // Move down smoothly when scrolling down
  const translateY = scrollY * 0.2;

  const dots = [];
  const rows = 30;
  const cols = 30;
  const spacing = 16;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const distFromCenter = Math.sqrt(
        Math.pow(r - rows / 2, 2) + Math.pow(c - cols / 2, 2)
      );
      const dotSize = Math.max(0.5, 3.2 - distFromCenter * 0.1);

      dots.push({
        x: c * spacing,
        y: r * spacing,
        size: dotSize,
        key: `r-${r}-${c}`,
      });
    }
  }

  return (
    <div
      className="hidden md:block absolute -right-[180px] top-[220px] pointer-events-none z-0 floating-bg-right"
      style={{
        transform: `translate3d(0, ${translateY}px, 0)`,
        willChange: 'transform',
      }}
    >
      <div className="rotate-[-38deg] opacity-45 overflow-visible">
        <svg
          width="480"
          height="480"
          viewBox="0 0 480 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#9CA3AF">
            {dots.map((dot) => (
              <circle key={dot.key} cx={dot.x} cy={dot.y} r={dot.size} />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function OurExpertiseSection() {
  const [openItem, setOpenItem] = useState('New Product Development');
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const animationFrame = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      animationFrame.current = requestAnimationFrame(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const scrollOffset = Math.max(0, -rect.top);
          setScrollY(scrollOffset);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  const toggleAccordion = (title) => {
    setOpenItem(openItem === title ? null : title);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F8F9FA] text-[#1A1A1A] py-16 px-4 sm:px-8 lg:px-16 font-sans overflow-hidden"
    >
      {/* Floating Motion Keyframes */}
      <style>{`
        @keyframes floatUpDownLeft {
          0%, 100% {
            margin-top: 0px;
          }
          50% {
            margin-top: -12px;
          }
        }

        @keyframes floatUpDownRight {
          0%, 100% {
            margin-top: 0px;
          }
          50% {
            margin-top: 12px;
          }
        }

        .floating-bg-left {
          animation: floatUpDownLeft 5s ease-in-out infinite;
        }

        .floating-bg-right {
          animation: floatUpDownRight 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-bg-left, .floating-bg-right {
            animation: none;
          }
        }
      `}</style>

      {/* Decorative Floating SVGs linked to relative scroll position */}
      <LeftDiamondGridSVG scrollY={scrollY} />
      <RightDiamondGridSVG scrollY={scrollY} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-center space-x-4 mb-16 sm:mb-20">
          <div className="w-8 sm:w-10 h-[2px] bg-red-600" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-gray-800 uppercase">
            OUR EXPERTISE
          </span>
          <div className="w-8 sm:w-10 h-[2px] bg-red-600" />
        </div>

        {/* Content Section List */}
        <div className="space-y-20 lg:space-y-24">
          {expertiseSections.map((section) => (
            <div
              key={section.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column Content */}
              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                    {section.title}
                  </h2>
                  <div className="w-8 h-[2.5px] bg-red-600" />
                </div>

                <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md pt-1">
                  {section.subtext}
                </p>

                <div className="pt-2">
                  <a
                    href="/contact-us"
                    className="inline-block bg-[#5138EE] hover:bg-[#4127DC] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded shadow-sm transition duration-200"
                  >
                    Explore more
                  </a>
                </div>
              </div>

              {/* Right Column Accordion */}
              <div className="lg:col-span-7 divide-y divide-gray-200 border-t border-b border-gray-200">
                {section.items.map((item, idx) => {
                  const isOpen = openItem === item.title;

                  return (
                    <div key={idx} className="py-3.5">
                      <button
                        onClick={() => toggleAccordion(item.title)}
                        className="w-full flex items-center justify-between text-left focus:outline-none group py-1"
                      >
                        <span
                          className={`text-sm sm:text-base font-semibold transition-colors ${
                            isOpen ? 'text-gray-900' : 'text-gray-800 group-hover:text-gray-900'
                          }`}
                        >
                          {item.title}
                        </span>

                        <svg
                          className={`w-4 h-4 text-gray-700 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="mt-2 pr-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {item.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}