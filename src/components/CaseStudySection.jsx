import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { ArrowLeft, ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const caseStudies = [
  {
    id: 1,
    title: 'SS Trolley – 500kg Capacity',
    client: 'Qualitest',
    description: 'Foldable stainless-steel trolley designed for heavy-duty usage and space-saving.',
    category: 'Industrial',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1777285877/project_3_1_pftyja.jpg',
  },
  {
    id: 2,
    title: 'Tablet Packing Machine',
    client: 'Apex Pharma',
    description: 'Manual packing of 50 tablets using stainless-steel jigs was time-consuming and required skilled labor.',
    category: 'Pharma',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775651225/Tablet_Packing_Machine_bvtlyy.jpg',
  },
  {
    id: 3,
    title: 'Adjustable Jaggery Stirrer',
    client: 'WoW Laddus',
    description: 'Semi-automated system to stir jaggery mixtures while maintaining traditional quality.',
    category: 'Food',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775651226/Adjustable_Jaggery_Stirrer_2_wzkjhh.jpg',
  },
  {
    id: 4,
    title: 'Ergonomic Stadium Chair',
    client: 'Keyurra',
    description: 'Designed ergonomic chair with automatic lifting and concealed outdoor components.',
    category: 'Furniture',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775651227/Ergonomic_Stadium_Chair_uzwtyh.jpg',
  },
  {
    id: 5,
    title: 'Pipe Aligner Redesign',
    client: 'Keyurra',
    description: 'Re-engineered heavy pipe alignment system for precision industrial assembly.',
    category: 'Industrial',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775651226/REV-ENG_PipeAligner_PDF_fnkdpk.png',
  },
  {
    id: 6,
    title: 'Pneumatic Valve Test Rig',
    client: 'Keyurra',
    description: 'Automated test rig engineered for pneumatic pressure testing and quality assurance.',
    category: 'Testing',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775651223/Pneumatic_Valve_Test_Rig_andyxv.jpg',
  },
  {
    id: 7,
    title: 'Laddu Weight Machine',
    client: 'Keyurra',
    description: 'Precision automated weighing and sorting machine designed for food processing lines.',
    category: 'Food Processing',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775651223/Laddu_weight_machine_jfzfvt.jpg',
  },
  {
    id: 8,
    title: 'Pipe Aligner Core Assembly',
    client: 'Keyurra',
    description: 'Structural redesign optimizing load distribution and operational ergonomics.',
    category: 'Engineering',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775651226/Pipe_Aligner_Redesign_jgczzz.jpg',
  },
  {
    id: 9,
    title: 'Pappad Rolling Machine',
    client: 'Keyurra',
    description: 'High-efficiency automated rolling unit built for high-volume snack manufacturing.',
    category: 'Food Processing',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775651225/Pappad_Rolling_Machine1_szxput.jpg',
  },
  {
    id: 10,
    title: 'Cover Block Demoulding Machine',
    client: 'Keyurra',
    description: 'High-speed automated demoulding machine for concrete cover blocks.',
    category: 'Construction',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775651225/Cover_Block_Demoulding_Machine_p3iasv.jpg',
  },
  {
    id: 11,
    title: 'Heat Pump Dryer',
    client: 'Keyurra',
    description: 'Energy-efficient industrial drying unit designed for temperature-sensitive products.',
    category: 'Thermal Systems',
    imageUrl: 'https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775651226/Heat_Pump_Dryer_zxtcq4.jpg',
  },
];

export default function CaseStudySection() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-10 bg-slate-50 font-sans">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Owveal
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">
            Case Study
            <span className="inline-block w-7 h-1 bg-red-500 rounded-full"></span>
          </h2>
        </div>

        <a
          href="#all"
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors duration-200 shadow-sm"
        >
          View All <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Swiper Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={20}
          slidesPerView={1.15}
          grabCursor={true}
          navigation={{
            prevEl: '.custom-prev-btn',
            nextEl: '.custom-next-btn',
          }}
          scrollbar={{
            el: '.custom-swiper-scrollbar',
            draggable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 24,
            },
          }}
          className="pb-12"
        >
          {caseStudies.map((item) => (
            <SwiperSlide
              key={item.id}
              className="h-[430px] flex flex-col rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Top Studio Lightbox Container for Uniform Image Alignment */}
              <div className="relative w-full h-56 bg-slate-100 p-5 flex items-center justify-center overflow-hidden border-b border-slate-200/60">
                {/* Category Badge */}
                <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full z-10 shadow-sm">
                  {item.category}
                </span>

                {/* Object-contain Image wrapper */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Bottom Card Content */}
              <div className="p-5 flex-1 bg-slate-900 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2 line-clamp-1 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    <span className="font-semibold text-red-400">{item.client}</span> — {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls Wrapper */}
        <div className="flex flex-col items-center gap-4 mt-2">
          {/* Scrollbar Container */}
          <div className="custom-swiper-scrollbar w-full h-1.5 bg-slate-200 rounded-full overflow-hidden [&_.swiper-scrollbar-drag]:bg-indigo-600 [&_.swiper-scrollbar-drag]:rounded-full cursor-pointer" />

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous Slide"
              className="custom-prev-btn w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:border-slate-800 hover:bg-slate-100 transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              aria-label="Next Slide"
              className="custom-next-btn w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:border-slate-800 hover:bg-slate-100 transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <a
        href="#contact"
        aria-label="Contact on WhatsApp"
        className="fixed bottom-6 right-6 w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 z-50"
      >
        <MessageCircle size={24} />
      </a>
    </section>
  );
}