import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <main className="w-full bg-[#f8fafc] font-sans text-slate-800 antialiased">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[360px] sm:h-[450px] md:h-[520px] bg-slate-950 flex items-center justify-center text-center px-4 sm:px-8 overflow-hidden">
        {/* Industrial Background Image */}
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80"
          alt="Machining Precision"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />

        <div className="relative z-20 max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-md">
            Where passion meets precision
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-light max-w-2xl mx-auto leading-relaxed drop-shadow">
            Owveal is more than just a name. It's a mindset. We are not just designers or developers. We are problem-solvers who engineer practical, production-ready solutions.
          </p>
        </div>
      </section>

      {/* 2. Brand Origin Story */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center space-y-6">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug max-w-4xl mx-auto">
          Owveal Engineering was born from a spark during an ordinary car ride — a moment when scattered freelance projects transformed into a vision for something bigger, sharper, and bolder.
        </h2>

        <div className="max-w-3xl mx-auto space-y-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
          <p>
            Owveal Engineering was born from a spark during an ordinary car ride — a moment when freelance projects transformed into a bigger vision.
          </p>
          <p>
            With a growing pipeline of inquiries, a decision was made to build something more permanent — a company for excellence.
          </p>
          <p>
            For two years, the team worked behind the scenes — refining processes and earning trust across industries.
          </p>
          <p className="text-slate-900 font-semibold pt-2">
            Today, Owveal stands for engineering excellence and real-world solutions.
          </p>
        </div>
      </section>

      {/* 3. Mission & Vision Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-red-500 via-rose-500 to-red-600 rounded-2xl p-8 text-white shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Mission</h3>
              <p className="text-sm sm:text-base leading-relaxed text-red-50 font-normal">
                To deliver world-class engineering solutions & products that solve real problems. We are committed to helping industries innovate faster, build smarter, and grow sustainably — through hands-on collaboration, technical excellence, and unwavering integrity.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-gradient-to-br from-red-500 via-rose-500 to-red-600 rounded-2xl p-8 text-white shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Vision</h3>
              <p className="text-sm sm:text-base leading-relaxed text-red-50 font-normal">
                To become a globally trusted engineering firm that bridges the gap between design and delivery — by combining mechanical engineering, product development, and digital innovation into a single, powerful ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Modular Layout: Engineers First Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-12">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Engineers first. Founders second.<br />Problem-solvers always.
        </h2>

        {/* Row 1: Text Left + Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Behind Owveal is a team of passionate, multidisciplinary engineers with over 15 years of cumulative experience in delivering solutions across the engineering spectrum — from new product development (NPD) and Special Purpose Machine (SPM) design to Reverse Engineering (RE) and digital transformation.
            </p>
            <p>
              What began as one engineer juggling too many projects evolved into a collaborative force. With a growing pipeline of inquiries and a reputation for solving tough design problems, a decision was made to come together as a team and build something more permanent. A company that stood not just for execution, but for engineering excellence.
            </p>
          </div>

          <div className="h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-200 shadow-sm">
            <img
              src="https://res.cloudinary.com/djuqr3qlu/image/upload/q_auto/f_auto/v1775450510/9caf4055c3c340aa79060c2b44c84bdb526d1d4c_o1s8ol.png"
              alt="Industrial Plant Piping"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Row 2: Image Left + Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-200 shadow-sm order-2 md:order-1">
            <img
              src="https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775734028/Screenshot_2026-04-09_165619_m413c3.png"
              alt="Engineer Quality Control"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed order-1 md:order-2">
            <p>
              What makes our team different is not just our skills — it's our mindset. We're hands-on creators who care about outcomes, client impact, and long-term value. With backgrounds in global industrial projects and deep-rooted technical rigor, our team doesn't just talk engineering — we build it, refine it, and stand behind it.
            </p>
            <p>
              For two years, the founding team worked quietly behind the scenes — taking on freelance challenges, refining their processes, and earning the trust of over 40 clients across sectors. These weren't just one-time jobs — many clients kept returning, impressed by the clarity of thought, the precision in execution, and the results delivered.
            </p>
          </div>
        </div>

        {/* Row 3: Text & CTA Left + Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Our strength lies in the belief that no challenge is too niche, and no sector is off-limits. Whether it's a high-precision medical device or a rugged industrial machine — if it's engineering, we do it.
            </p>
            <p>
              The real turning point? One of those very clients chose to back Owveal — with resources, belief, and capital — helping turn the idea of a company into a thriving engineering hub. Today, Owveal is more than just a name. It's a mindset. We are not just designers or developers. We are problem-solvers who engineer practical, production-ready solutions for industries that move the world.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-6 py-3 rounded-full transition-colors shadow-md"
              >
                Get in touch <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-200 shadow-sm">
            <img
              src="https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1775733398/Screenshot_2026-04-09_164558_urewhw.png"
              alt="Industrial Gears Mechanism"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </main>
  );
}