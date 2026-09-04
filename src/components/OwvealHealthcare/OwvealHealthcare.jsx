import React, { useState } from 'react';
import { 
  Check, 
  ChevronDown, 
  Menu, 

} from 'lucide-react';

export default function OwvealHealthcare() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* ----------------- HEADER / NAVBAR ----------------- */}
  

      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative bg-slate-950 text-white py-24 sm:py-32 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1778304514/Healthcare_wkqahh.jpg"
            alt="Healthcare Technology Background"
            className="w-full h-full object-cover opacity-35 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Healthcare Technology
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Engineering solutions that improve patient care, safety, and medical efficiency.
          </p>
        </div>
      </section>

      {/* ----------------- SECTION 1: PRECISION ENGINEERING ----------------- */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Text */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                Engineering Precision for Life-Critical Applications
              </h2>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We design and develop reliable healthcare and medical solutions where accuracy, safety, and consistency are critical. Our approach combines precision engineering with real-world usability to support scalable and compliant medical systems.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3.5 pt-2">
                {[
                  "Medical device design & prototyping",
                  "Precision components & assemblies",
                  "Sterile-ready mechanical design",
                  "Embedded & controlled systems"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-sm sm:text-base text-gray-800 font-medium">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-indigo-700 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732297/Screenshot_2026-04-09_162758_hwodot.png"
                alt="Medical Research Laboratory"
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- SECTION 2: INDUSTRY-FOCUSED SOLUTIONS ----------------- */}
      <section className="py-16 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Industry-Focused Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <div className="bg-gray-100/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-200 border border-gray-200/60 flex flex-col">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src="https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732076/304_od9dlv.jpg"
                  alt="Safer IV Cannula Systems"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-start">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  Safer IV Cannula Systems
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Reducing backflow and contamination through precision-designed fluid control components.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-200 border border-gray-200/60 flex flex-col">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src="https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732076/711_zqptbx.jpg"
                  alt="Compact Cooling for Medical Devices"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-start">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  Compact Cooling for Medical Devices
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Efficient thermal management for portable and diagnostic equipment.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-200 border border-gray-200/60 flex flex-col">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src="https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775732075/1095_n5tgpj.jpg"
                  alt="Custom Lab & Surgical Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-start">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  Custom Lab & Surgical Equipment
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Durable, ergonomic designs built for high-usage environments.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- SECTION 3: BANNER HIGHLIGHT ----------------- */}
      <section className="py-16 bg-gray-100/60 text-center border-t border-b border-gray-200/50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Safer IV Cannula Systems
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Reducing backflow and contamination through precision-designed fluid control components.
          </p>
        </div>
      </section>

   

    </div>
  );
}