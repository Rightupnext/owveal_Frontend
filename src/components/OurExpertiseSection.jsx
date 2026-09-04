import React, { useState } from 'react';

const expertiseSections = [
  {
    id: 'engineering-rd',
    title: 'Engineering And R&D',
    subtext: 'Engineering innovation, driven by insight and built for real-world impact.',
    dotPosition: 'left',
    items: [
      {
        title: 'New Product Development',
        content: 'We offer complete end-to-end product development services from concept to production. Our process integrates industrial design, engineering validation, prototyping, and design for manufacturability (DFM) to deliver cost-effective and production-ready solutions.'
      },
      {
        title: 'Special Purpose Machine Design',
        content: 'Custom automated machinery engineered to meet highly specific manufacturing challenges, boosting production speed and operational safety.'
      },
      {
        title: 'Reverse Engineering',
        content: 'Reconstruct high-precision 3D CAD models from existing physical components using advanced laser scanning and dimensional analysis.'
      },
      {
        title: 'Finite Element Analysis (FEA)',
        content: 'Comprehensive structural, dynamic, thermal, and fluid simulations to validate and optimize designs before prototype fabrication.'
      },
      {
        title: 'Industrial Solutions',
        content: 'Tailored industrial engineering services designed to optimize factory layouts, throughput efficiency, and plant maintenance.'
      },
      {
        title: 'Modeling & Drafting',
        content: 'High-accuracy 2D production drawings and 3D parametric mechanical CAD models adhering strictly to international standards.'
      },
      {
        title: 'Value Engineering',
        content: 'Systematic evaluation of design choices and materials to reduce manufacturing costs without sacrificing product quality or performance.'
      }
    ]
  },
  {
    id: 'digital-solutions',
    title: 'Digital Solutions',
    subtext: 'Bridging the physical and virtual worlds through smart engineering',
    dotPosition: 'none',
    items: [
      {
        title: 'Digital Manufacturing & Automation',
        content: 'Smart factory integration, automated workflow optimization, and IoT connectivity for next-generation industrial operations.'
      },
      {
        title: 'Digital Twin Development',
        content: 'Real-time virtual modeling of physical machinery and assets to predict maintenance needs, simulate performance, and reduce downtime.'
      }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    subtext: 'From prototype to production, engineered with precision.',
    dotPosition: 'right',
    items: [
      {
        title: 'From Prototype to Product',
        content: 'Seamless end-to-end transition from initial functional prototype to full-scale quality production runs.'
      },
      {
        title: 'Special Purpose Machine Manufacturing',
        content: 'Turnkey precision assembly and manufacturing of custom-engineered industrial machinery and specialized equipment.'
      },
      {
        title: 'Component Manufacturing',
        content: 'High-tolerance mechanical machining and custom component fabrication tailored for demanding industry requirements.'
      },
      {
        title: 'Quality Control & Inspection',
        content: 'Rigorous Quality Assurance protocols using CMM inspection, non-destructive testing, and strict compliance verification.'
      }
    ]
  },

   {
    id: 'Education',
    title: 'Education',
    subtext: 'Bridging the gap between classroom knowledge and real world engineering.',
    dotPosition: 'right',
    items: [
      {
        title: 'Skill Development – Zero to One Program',
        content: 'Our flagship Zero to One program covers the complete product lifecycle. From initial product visualization and CAD modeling to prototyping and mass manufacturing, this program equips learners with real, hands-on industry skills.'
      },
      {
        title: 'Internship Opportunity',
        content: 'Get hands-on experience by working on real-time engineering projects at Owveal. Interns actively contribute to live product development, reverse engineering, and manufacturing tasks. For groups of 5 or more, our exclusive Zero to One Skill Development Program is also offered, covering the complete product lifecycle from concept to production.'
      }
     
    ]
  }

];

export default function OurExpertiseSection() {
  // Default open accordion item: 'New Product Development'
  const [openItem, setOpenItem] = useState('New Product Development');

  const toggleAccordion = (title) => {
    setOpenItem(openItem === title ? null : title);
  };

  return (
    <section className="relative bg-[#F8F9FA] text-[#1A1A1A] py-16 px-4 sm:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex items-center justify-center space-x-4 mb-16 sm:mb-20">
          <div className="w-8 sm:w-12 h-[2px] bg-red-600" />
          <span className="text-sm sm:text-base font-semibold tracking-widest text-gray-700 uppercase">
            OUR EXPERTISE
          </span>
          <div className="w-8 sm:w-12 h-[2px] bg-red-600" />
        </div>

        {/* Expertise Sections */}
        <div className="space-y-20 lg:space-y-24">
          {expertiseSections.map((section) => (
            <div key={section.id} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Dot Grid Background Accents */}
              {section.dotPosition === 'left' && (
                <div 
                  className="hidden lg:block absolute -left-12 -bottom-10 w-64 h-64 opacity-30 pointer-events-none -z-0"
                  style={{
                    backgroundImage: 'radial-gradient(#9CA3AF 1.5px, transparent 1.5px)',
                    backgroundSize: '16px 16px'
                  }}
                />
              )}

              {section.dotPosition === 'right' && (
                <div 
                  className="hidden lg:block absolute -right-12 -bottom-10 w-64 h-64 opacity-30 pointer-events-none -z-0"
                  style={{
                    backgroundImage: 'radial-gradient(#9CA3AF 1.5px, transparent 1.5px)',
                    backgroundSize: '16px 16px'
                  }}
                />
              )}

              {/* Left Column: Title, Subtext, Accent Bar & Button */}
              <div className="lg:col-span-5 relative z-10 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                    {section.title}
                  </h2>
                  <div className="w-8 h-[2.5px] bg-red-600" />
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md pt-2">
                  {section.subtext}
                </p>

                <div className="pt-2">
                  <a
                    href="#explore"
                    className="inline-block bg-[#5138EE] hover:bg-[#4127DC] text-white text-sm font-semibold px-6 py-2.5 rounded-md shadow-sm transition duration-200"
                  >
                    Explore more
                  </a>
                </div>
              </div>

              {/* Right Column: Accordions */}
              <div className="lg:col-span-7 relative z-10 divide-y divide-gray-200 border-t border-b border-gray-200">
                {section.items.map((item, idx) => {
                  const isOpen = openItem === item.title;
                  return (
                    <div key={idx} className="py-4">
                      <button
                        onClick={() => toggleAccordion(item.title)}
                        className="w-full flex items-center justify-between text-left focus:outline-none group"
                      >
                        <span className={`text-sm sm:text-base font-semibold transition-colors ${
                          isOpen ? 'text-gray-900' : 'text-gray-800 group-hover:text-gray-900'
                        }`}>
                          {item.title}
                        </span>

                        <svg
                          className={`w-4 h-4 text-gray-700 transition-transform duration-300 transform ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Expandable Accordion Body */}
                      {isOpen && (
                        <div className="mt-3 pr-4 text-xs sm:text-sm text-gray-600 leading-relaxed transition-all duration-300">
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