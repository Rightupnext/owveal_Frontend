import React from 'react';
import { Check } from 'lucide-react';

export default function CareersPage() {
  return (
    <main className="w-full bg-[#f8fafc] font-sans text-slate-800 antialiased min-h-screen">
      {/* 1. Hero Banner */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1e1b4b] to-[#0f172a] py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Build Your Career With Us
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Join a team that's redefining engineering through innovation, precision, and real-world impact. Work on real-time projects and grow your skills with Owveal.
          </p>

          {/* Social Icons inside Hero */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <a
              href="https://www.linkedin.com/company/owveal-engineering/"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#youtube"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Why Work With Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Work With Us?
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                At Owveal Engineering, we believe in building not just products, but people. Grow with innovation and real-world experience.
              </p>
              <p>
                Get hands-on experience by working on real-time engineering projects at Owveal. Interns actively contribute to live product development, reverse engineering, and manufacturing tasks. For groups of 5 or more, our exclusive Zero to One Skill Development Program is also offered, covering the complete product lifecycle from concept to production.
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3 pt-2">
              {[
                'Real-world engineering projects',
                'Expert mentorship',
                'Growth & innovation',
                'Latest technologies',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center flex-shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image Illustration Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
              <img
                src="https://res.cloudinary.com/dcuodmb77/image/upload/q_auto/f_auto/v1777371930/job-hiring-vacancy-team-interview-career-recruiting_53876-121268_t147yz.avif"
                alt="Jobs at Owveal"
                className="w-full h-auto max-h-[420px] object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Apply Action Section */}
      <section className="bg-slate-50 border-t border-slate-200/60 py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Careers at Owveal
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Join our team and build real-world engineering solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#apply-job"
              className="w-full sm:w-auto bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-8 py-3 rounded-md transition-colors shadow-sm"
            >
              Apply for Job
            </a>
            <a
              href="#apply-internship"
              className="w-full sm:w-auto bg-[#D00000] hover:bg-[#B00000] text-white font-semibold text-xs sm:text-sm px-8 py-3 rounded-md transition-colors shadow-sm"
            >
              Apply for Internship
            </a>
          </div>

          {/* Footer Social Icons */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <a href="https://www.linkedin.com/company/owveal-engineering/" className="text-slate-500 hover:text-slate-900 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#instagram" className="text-slate-500 hover:text-rose-600 transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#youtube" className="text-slate-500 hover:text-red-600 transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}