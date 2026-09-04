import React from 'react';

const row1Logos = [
  { name: 'DEPL', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092473/8-BYLqn3X7_fzwiz7.png' },
  { name: 'Durel International LLP', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092473/4-yISjp-4A_cy0jfy.png' },
  { name: 'KB Since 1965', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092473/5-1miuBQRU_jss1dm.png' },
  { name: 'Fuji Electric', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092473/22-4PjgiRXO_wii5yr.png' },
  { name: 'Heal Your Heart', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092473/20-MM5jJIh-_rjceoy.png' },
  { name: 'Healthcare Tech', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092473/21-Cd03qjJZ_gsw2ez.png' },
  { name: 'Arul Appalam', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092474/3-DFpvDuIz_wa36ko.png' },
  { name: 'Healthcare Tech', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092475/12-B9fAQz6H_wzpkr4.png' },
  { name: 'Arul Appalam', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092475/9-5b2HyiYy_jksgx4.png' },
];

const row2Logos = [
  { name: 'Vision', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092474/18-DQmV45sa_kqettb.png' },
  { name: 'Apex Pharma', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092474/17-CspX3Sj-_s9ntau.png' },
  { name: 'Pothys', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092474/16-ClauCUD1_utq2ec.png' },
  { name: 'Qualitest', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092474/15-Cv-9owPA_fcf4yy.png' },
  { name: 'Roop Techno', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092474/2-DNjDE9Yy_jjez6q.png' },
  { name: 'Nuts & Spices', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092475/13-DjXebvR6_molbjc.png' },
  { name: 'Vinayaga Shutters', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092475/14-D5VoeayO_a4niqv.png' },
  { name: 'Healthcare Tech', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092475/11-Bxqz8T1S_uixxii.png' },
  { name: 'Arul Appalam', url: 'https://res.cloudinary.com/djuqr3qlu/image/upload/v1786092475/1-B3pj6tz8_j12qja.png' },
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-[#f4f5f7] py-12 md:py-20 px-4 overflow-hidden select-none font-sans">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
        <p className="text-slate-500 text-xs md:text-sm font-medium mb-2 tracking-wide">
          Meet our happy Clients
        </p>
        
        <div className="flex items-center justify-center gap-3 md:gap-5">
          <span className="w-8 md:w-12 h-[2px] bg-red-500 inline-block rounded-full"></span>
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Clients Trusted By Great Brands
          </h2>
          <span className="w-8 md:w-12 h-[2px] bg-red-500 inline-block rounded-full"></span>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-8">
        
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#f4f5f7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#f4f5f7] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-4 md:gap-6 shrink-0 animate-marquee-ltr group-hover:[animation-play-state:paused]">
            {[...row1Logos, ...row1Logos, ...row1Logos].map((client, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-44 sm:w-52 md:w-64 h-24 sm:h-28 md:h-32 bg-white rounded-2xl p-4 sm:p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={client.url}
                  alt={client.name}
                  className="max-h-16 sm:max-h-20 md:max-h-24 w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-4 md:gap-6 shrink-0 animate-marquee-rtl group-hover:[animation-play-state:paused]">
            {[...row2Logos, ...row2Logos, ...row2Logos].map((client, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-44 sm:w-52 md:w-64 h-24 sm:h-28 md:h-32 bg-white rounded-2xl p-4 sm:p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={client.url}
                  alt={client.name}
                  className="max-h-16 sm:max-h-20 md:max-h-24 w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }

        @keyframes marquee-rtl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }

        .animate-marquee-ltr {
          animation: marquee-ltr 30s linear infinite;
        }

        .animate-marquee-rtl {
          animation: marquee-rtl 30s linear infinite;
        }
      `}</style>
    </section>
  );
}