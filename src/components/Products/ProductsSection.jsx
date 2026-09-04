import React from 'react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: 'High-Efficiency Heat Pump',
      description:
        'Smart thermal management system engineered for both industrial and consumer applications with energy optimization.',
    },
    {
      id: 2,
      title: 'IV Cannula Reservoir',
      description:
        'Safety-focused add-on for IV systems that reduces backflow and contamination, improving patient safety in medical care.',
    },
    {
      id: 3,
      title: 'Nano Blower Technology',
      description:
        'Ultra-compact air movement system designed for cooling electronics and medical devices with high efficiency in minimal space.',
    },
  ];

  return (
    <section className="w-full font-sans text-gray-800 antialiased overflow-hidden">
      {/* 1. Hero Header Banner */}
      <div className="bg-slate-950 bg-gradient-to-b from-slate-900 to-black py-16 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide uppercase">
            Our Product
          </h1>
          <p className="mt-3 text-gray-300 text-sm md:text-base font-light">
            Engineering inventions that make industries smarter.
          </p>
        </div>
      </div>

      {/* 2. Intro Text & Animated Cards Grid */}
      <div className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Paragraphs */}
        <div className="max-w-4xl mx-auto text-center space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
          <p>
            At Owveal, product innovation is in our DNA. Beyond client projects, we are actively developing our own portfolio of next-generation engineering products that address real-world industrial and healthcare challenges.
          </p>
          <p>
            From compact air movement systems to energy-efficient thermal solutions and life-saving healthcare devices — our in-house innovations are designed to be scalable, affordable, and globally relevant.
          </p>
        </div>

        {/* Animated Product Cards */}
        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col cursor-pointer
                         transform transition-all duration-300 ease-out 
                         hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-red-100
                         active:scale-95"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
                {product.title}
              </h3>

              {/* Red Accent Bar with expand animation on hover */}
              <div className="w-8 group-hover:w-16 h-[2px] bg-red-600 mb-4 transition-all duration-300 ease-in-out"></div>

              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Dark Bottom Callout Banner */}
      <div className="bg-black text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            Each product is engineered, tested, and iterated in-house by our R&D team, with a strong focus on cost-effective manufacturing, compliance, and global deployment.
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
            We don’t just serve the market — we build for it.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;