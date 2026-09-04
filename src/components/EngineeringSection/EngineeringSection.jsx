import React from 'react';

const EngineeringSection = () => {
  const services = [
    {
      id: 1,
      badge: 'Engineering Expertise',
      title: 'New Product Development',
      description:
        'We offer complete end-to-end product development services from concept to production. Our process integrates industrial design, engineering validation, prototyping, and design for manufacturability (DFM) to deliver cost-effective and production-ready solutions.',
      tags: 'Product Engineering • Industrial Design • DFM • Prototype Development',
    },
    {
      id: 2,
      badge: 'Engineering Expertise',
      title: 'Special Purpose Machine Design',
      description:
        'We specialize in developing custom Special Purpose Machines (SPMs) that solve unique industrial challenges. Our SPMs are engineered for enhanced productivity, operational safety, and seamless integration into existing production environments.',
      tags: 'SPM Development • Automation • Machine Design • Production Systems',
    },
    {
      id: 3,
      badge: 'Engineering Expertise',
      title: 'Reverse Engineering',
      description:
        'Using our proprietary engineering techniques and CAD modeling, we recreate and improve existing components and assemblies, even without original design files. This approach ensures optimized cost, enhanced performance, and longer life-cycle support.',
      tags: 'CAD Modeling • Legacy Part Redesign • Engineering Rework',
    },
    {
      id: 4,
      badge: 'Engineering Expertise',
      title: 'Finite Element Analysis (FEA)',
      description:
        'Our simulation capabilities include structural, thermal, modal, and fatigue analyses using advanced FEA tools. We validate product integrity, reduce prototyping costs, and enhance design performance before physical production.',
      tags: 'Structural Analysis • Thermal Simulation • Fatigue Analysis • CAE',
    },
    {
      id: 5,
      badge: 'Engineering Expertise',
      title: 'Industrial Solutions',
      description:
        'We provide tailored engineering support for a wide range of industries. Whether it\'s custom machine parts, factory automation components, or product-specific challenges, we deliver solutions that boost efficiency and reliability.',
      tags: 'Factory Automation • Industrial Components • Mechanical Systems',
    },
    {
      id: 6,
      badge: 'Engineering Expertise',
      title: 'Modeling & Drafting',
      description:
        'We provide accurate 2D and 3D CAD models along with detailed manufacturing drawings. Our drafting team specializes in incorporating Geometric Dimensioning and Tolerancing (GD&T) to meet global production and inspection standards.',
      tags: '2D/3D CAD • GD&T • Engineering Drawings • Manufacturing Blueprints',
    },
    {
      id: 7,
      badge: 'Engineering Expertise',
      title: 'Value Engineering',
      description:
        'We help clients achieve functional and economic value through re-engineering. By optimizing design, materials, and processes, we reduce costs while enhancing performance and product lifespan.',
      tags: 'Cost Optimization • Design Improvement • Product Efficiency',
    },
    {
      id: 8,
      badge: 'Engineering Expertise',
      title: 'Electronics Design & Development',
      description:
        'We provide end-to-end electronic system design including circuit design, PCB layout, embedded firmware, and testing. Our services support smart product development and industrial automation systems.',
      tags: 'Embedded Systems • PCB Design • Hardware Engineering • Firmware',
    },
  ];

  return (
    <section className="w-full font-sans text-gray-800 antialiased overflow-hidden">
      {/* Dynamic Keyframes for Bottom-to-Top Fade animation */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* 1. Hero Title Banner */}
      <div className="bg-slate-950 bg-gradient-to-b from-slate-900 via-slate-950 to-black py-16 md:py-24 px-4 text-center border-b border-gray-800/40">
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide">
            Engineering & R&D
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-light max-w-2xl mx-auto">
            Engineering innovation, driven by insight and built for real-world impact.
          </p>
        </div>
      </div>

      {/* 2. Main Content & Animated Cards Grid */}
      <div className="bg-gray-50/50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        {/* Subheader Intro */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Advanced Engineering Solutions for Modern Industries
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            We design mechanical systems and sub-systems for industries ranging from food processing to automotive, addressing constraints, performance targets, manufacturability, and compliance requirements. Our engineering expertise combines innovation, precision, and production readiness.
          </p>
        </div>

        {/* 2-Column Grid with Bottom-to-Top Fade Animation */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              style={{ animationDelay: `${index * 120}ms` }}
              className="animate-fade-up opacity-0 bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm 
                         hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Tag / Badge */}
                <span className="inline-block bg-red-50 text-red-600 text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-red-100/60 mb-4">
                  {service.badge}
                </span>

                {/* Card Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom Metadata Tags */}
              <p className="text-[11px] md:text-xs text-gray-400 font-medium tracking-tight border-t border-gray-50 pt-4">
                {service.tags}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Dark Bottom CTA Banner */}
      <div className="bg-black text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center border-t border-gray-900">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Let’s Build Engineering Solutions That Scale
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            From concept development to production ready systems, Owveal Engineering delivers high-performance engineering and R&D services tailored for industrial innovation.
          </p>
          <div className="pt-2">
            <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-3 rounded-md transition-colors duration-200 shadow-lg shadow-red-600/20 active:scale-95 transform">
              Contact Our Engineering Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;