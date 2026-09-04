import React from 'react';

// Cloudinary & Unsplash high-res engineering images for realistic presentation
const successStories = [
  {
    id: 1,
    title: 'SS Trolley for Qualitest – Strength with Smart Storage',
    description: 'Foldable stainless-steel trolley designed for heavy-duty industrial usage and space-saving efficiency. Engineered for high load capacity (up to 500kg) while maintaining seamless maneuverability across plant floors.',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1776236020/trolley_hvp3us.png',
    align: 'left',
  },
  {
    id: 2,
    title: 'Abhiramhi Enterprises – Demoulding Time Reduced from 15min to 3min (by 80%)',
    description: 'Custom automated demoulding fixture designed and built for polyurethane components. Significantly boosted throughput, reduced operator fatigue, and minimized surface defects during part extraction.',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/v1775708230/Demoulding_option_2_qeszko.png',
    align: 'right',
  },
  {
    id: 3,
    title: 'Arul Pappad – Heat Pump Drying',
    description: 'Energy-efficient heat pump drying system developed to maintain consistent thermal processing for food products. Reduced energy consumption while preserving authentic food taste and quality.',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775651226/Heat_Pump_Dryer_zxtcq4.jpg',
    align: 'left',
  },
  {
    id: 4,
    title: 'APEX Pharma – Tablet Packing Automation',
    description: 'Automated 50-tablet packing mechanism replacing time-consuming manual jig operations. Improved packaging speed, consistency, and cleanroom hygiene compliance.',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1778308213/Tablet_Packing_Machine_hldc83.jpg',
    align: 'right',
  },
  {
    id: 5,
    title: 'WoW Laddus – Traditional Taste, Modern Technique',
    description: 'Semi-automated jaggery stirring machine designed to maintain precise thermal mixing and traditional recipe consistency while reducing physical labor requirements.',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1778308594/Adjustable_Jaggery_Stirrer_2_nzxpqy.jpg',
    align: 'left',
  },
  {
    id: 6,
    title: 'Keyurra – Stylish Seating with Smart Mechanics',
    description: 'Ergonomic stadium chair mechanism featuring an automatic gravity-assisted fold-up system and concealed weatherproof pivot joints designed for extreme outdoor durability.',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/v1775708230/chair_fdtwcg.png',
    align: 'right',
  },
  {
    id: 7,
    title: 'Deepa Erectors – Structural Sheet Planning',
    description: 'Comprehensive 2D drafting, structural detailing, and layout optimization for industrial roofing and heavy structural steel installations.',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1778308212/Sheet_Metal_Development_Planning_2_rke05x.png',
    align: 'left',
  },
  {
    id: 8,
    title: 'Micro Precision – Reliable Wire Bending',
    description: 'Precision wire bending machine setup engineered for high repeatability, tight tolerance forming, and rapid tooling adjustments across multiple wire gauge sizes.',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1778308496/Pneumatic_Valve_Test_Rig_hbv0ug.jpg',
    align: 'right',
  },
  {
    id: 9,
    title: 'WoW Laddus – Perfect Pot Gas Automation',
    description: 'Custom gas burner automation fixture engineered for safe thermal regulation, flame monitoring, and operational safety during heavy-duty confectionery manufacturing.',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/v1775708228/Laddu_obxdnw.png',
    align: 'left',
  },
  {
    id: 10,
    title: 'Durel – Sunroof Mechanism Alignment',
    description: 'Advanced CAD kinematics design and alignment jig fixture developed for automotive sunroof glass panel assembly, ensuring zero-noise operation and leak-proof sealing.',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1778308495/Pipe_Aligner_Redesign_p9oxbb.jpg',
    align: 'right',
  },
  {
    id: 11,
    title: 'Arul Pappad – Precision Pappad Machine',
    description: 'Custom extrusion and cutting assembly engineered for uniform food product thickness, automated feeding, and high-throughput commercial processing.',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1778308213/Pappad_Rolling_Machine1_ccqvqa.jpg',
    align: 'left',
  },
];

export default function ClientSuccessStoriesPage() {
  return (
    <main className="w-full bg-[#f8fafc] font-sans antialiased text-slate-800">
      {/* 1. Hero Banner Image Section */}
      <section className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] bg-slate-900 overflow-hidden">
        <img
          src="https://res.cloudinary.com/djuqr3qlu/image/upload/q_auto/f_auto/v1775454633/14269c6e85a8afd5afa5a09c739216a582a06ba7_lxozmy.png"
          alt="Engineering Hydraulic Machinery"
          className="w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
      </section>

      {/* 2. Main Title Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-3">
          Engineering Client Success Stories
        </h1>
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest">
          <span>Redefining Industries Through Expertise</span>
        </div>
        <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
      </section>

      {/* 3. Alternating Case Studies List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-12 sm:space-y-16">
        {successStories.map((story) => {
          const isLeft = story.align === 'left';

          return (
            <div
              key={story.id}
              className={`flex flex-col md:flex-row items-center gap-8 sm:gap-12 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md ${
                isLeft ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Details Container */}
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {story.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {story.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Spacer Bottom */}
      <div className="h-16" />
    </main>
  );
}