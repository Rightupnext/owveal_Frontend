import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#F4F5F7] text-gray-700 font-sans border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Logo & AddresAAs */}
          <div className="lg:col-span-4 space-y-6">
            {/* Cloudinary Image Logo */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dfu9u7nlz/image/upload/v1788321201/logos-DF9Udn0B_xkck0e.png"
                  alt="Owveal Engineering Logo"
                  className="h-15 sm:h-12 w-full object-contain"
                />
              </a>
            </div>

            {/* Address & Contact Details */}
            <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">Address</h4>
              
              <p>
                3rd floor, Bearing No: T-1, Sri<br />
                Maruthi flats, No28, Vigneshwara St,<br />
                Ganesh Nagar, Guindy, Chennai,<br />
                Tamil Nadu 600032
              </p>

              <div className="pt-2 space-y-1">
                <p>CALL US - 044-46166727</p>
                <p>Phone - +91 99400 48987</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-800 hover:text-red-600 hover:border-red-600 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/owveal-engineering/"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-800 hover:text-blue-700 hover:border-blue-700 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-800 hover:text-red-600 hover:border-red-600 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Industries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-gray-900 text-sm sm:text-base">Industries</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li><a href="/industries/healthcare" className="hover:text-red-600 transition">Healthcare</a></li>
              <li><a href="/industries/Technology" className="hover:text-red-600 transition">Technology</a></li>
              <li><a href="/industries/railway" className="hover:text-red-600 transition">Railway</a></li>
              <li><a href="/industries/aerospace" className="hover:text-red-600 transition">Aerospace</a></li>
              <li><a href="/industries/defense" className="hover:text-red-600 transition">Defense</a></li>
              <li><a href="/industries/automotive" className="hover:text-red-600 transition">Automotive</a></li>
              <li><a href="/industries/pharmaceuticals" className="hover:text-red-600 transition">Pharmaceuticals</a></li>
              <li><a href="/industries/heavy-machinery" className="hover:text-red-600 transition">Heavy Machinery</a></li>
              <li><a href="/industries/food-beverage" className="hover:text-red-600 transition">Food & Beverage</a></li>
              <li><a href="/industries/agro-tech" className="hover:text-red-600 transition">Agro-tech</a></li>
            </ul>
          </div>

          {/* Column 3: Expertise */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-gray-900 text-sm sm:text-base">Expertise</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li><a href="/expertise/engineering-rd" className="hover:text-red-600 transition">Engineering and R&D</a></li>
              <li><a href="/expertise/education" className="hover:text-red-600 transition">Education</a></li>
              <li><a href="/expertise/manufacturing" className="hover:text-red-600 transition">Manufacturing</a></li>
              <li><a href="/expertise/digital-solutions" className="hover:text-red-600 transition">Digital Solutions</a></li>
            </ul>
          </div>

          {/* Column 4: Insights */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-gray-900 text-sm sm:text-base">Insights</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li><a href="/expertise/engineering-rd" className="hover:text-red-600 transition">Case Studies</a></li>
              <li><a href="/success-stories" className="hover:text-red-600 transition">Success Story</a></li>
              <li><a href="/careers" className="hover:text-red-600 transition">Careers</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="border-t border-gray-200 py-6 px-6 sm:px-8 lg:px-12 text-xs sm:text-sm text-gray-600">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Owveal Engineering
          </div>

          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-gray-900 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-900 transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}