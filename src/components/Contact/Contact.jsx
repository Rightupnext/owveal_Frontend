import React, { useState } from 'react';
import { Phone, Smartphone, Mail, MapPin, User } from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    industry: '',
    country: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for contacting us! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      contactNumber: '',
      industry: '',
      country: '',
      message: '',
    });
  };

  return (
    <main className="w-full bg-[#f8fafc] font-sans text-slate-800 antialiased min-h-screen">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] bg-slate-950 flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Overlay Image */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
          alt="Business Meeting"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent z-10" />

        {/* Hero Title Container */}
        <div className="relative z-20 flex flex-col items-center space-y-3">
          {/* Top User Icon Badge */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-2 shadow-lg">
            <User size={30} className="stroke-[1.5]" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-widest uppercase drop-shadow-md">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* 2. Main Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Find Us Cards & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Find us
            </h2>

            <div className="space-y-4">
              {/* Call Us Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 flex items-center gap-4 transition-all duration-300 hover:shadow-md">
                <div className="w-11 h-11 rounded-full bg-[#ef4444] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Call Us</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">044-46166727</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 flex items-center gap-4 transition-all duration-300 hover:shadow-md">
                <div className="w-11 h-11 rounded-full bg-[#ef4444] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Phone</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">+91 99400 48987</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 flex items-center gap-4 transition-all duration-300 hover:shadow-md">
                <div className="w-11 h-11 rounded-full bg-[#ef4444] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Email</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">sales@owveal.com</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 flex items-start gap-4 transition-all duration-300 hover:shadow-md">
                <div className="w-11 h-11 rounded-full bg-[#ef4444] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Address</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    3rd floor, Bearing No: T-1, Sri Maruthi flats, No28, Vigneshwara St, Ganesh Nagar, Guindy, Chennai, Tamil Nadu 600032
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-800 hover:text-red-600 hover:border-red-600 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/owveal-engineering/"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-800 hover:text-blue-700 hover:border-blue-700 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-800 hover:text-red-600 hover:border-red-600 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Keep In Touch Form */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Contact info
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Keep In Touch
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                We prioritize responding quickly to your inquiries.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f1f5f9] border border-slate-300/80 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/80 focus:bg-white transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f1f5f9] border border-slate-300/80 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/80 focus:bg-white transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f1f5f9] border border-slate-300/80 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/80 focus:bg-white transition-all"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="industry"
                  placeholder="Industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full bg-[#f1f5f9] border border-slate-300/80 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/80 focus:bg-white transition-all"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-[#f1f5f9] border border-slate-300/80 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/80 focus:bg-white transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f1f5f9] border border-slate-300/80 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/80 focus:bg-white transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-sm transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}