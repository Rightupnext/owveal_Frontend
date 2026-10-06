import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const toggleMobileDropdown = (menu) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  const industriesItems = [
    { name: 'Healthcare Technology', href: '/industries/healthcare' },
    { name: 'Aerospace', href: '/industries/aerospace' },
    { name: 'Automotive', href: '/industries/automotive' },
    { name: 'Heavy Machinery', href: '/industries/heavy-machinery' },
    { name: 'Agro-tech', href: '/industries/agro-tech' },
    { name: 'Technology', href: '/industries/Technology' },
    { name: 'Railway', href: '/industries/railway' },
    { name: 'Defense', href: '/industries/defense' },
    { name: 'Pharmaceuticals', href: '/industries/pharmaceuticals' },
    { name: 'Food & Beverage', href: '/industries/food-beverage' },
  ];

  const expertiseItems = [
    { name: 'Engineering and R&D', href: '/expertise/engineering-rd' },
    { name: 'Education', href: '/expertise/education' },
    { name: 'Manufacturing', href: '/expertise/manufacturing' },
    { name: 'Digital Solutions', href: '/expertise/digital-solutions' },
  ];

  const productsItems = [
    { name: 'High-Efficiency Heat Pump', href: '/products' },
    { name: 'IV Cannula Reservoir', href: '/products' },
    { name: 'Nano Blower Technology', href: '/products' },
    // { name: 'Reverse Engineering', href: '/products/reverse-engineering' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-3 h-22 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dfu9u7nlz/image/upload/v1788321201/logos-DF9Udn0B_xkck0e.png" 
              alt="Owveal Logo" 
              className="h-16 lg:h-20 object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          <Link to="/" className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-red-600 transition font-medium">
            Home
          </Link>

         {/* 1. Industries Dropdown */}
<div className="relative group py-6">
  <button className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-red-600 transition font-medium">
    <span>Industries</span>
    <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-900 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  <div className="absolute left-0 top-full w-96 pt-2 z-50 invisible opacity-0 -translate-y-2 scale-95 origin-top group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 ease-out">
    <div className="bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
      <div className="h-[3px] w-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-red-600" />
      <div className="p-3 grid grid-cols-2 gap-x-2 gap-y-1">
        {industriesItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.href}
            className="block px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-slate-50 hover:text-blue-900 rounded-lg transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>

          {/* 2. Expertise Dropdown */}
          <div className="relative group py-6">
            <button className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-red-600 transition font-medium">
              <span>Expertise</span>
              <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-900 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full w-56 pt-2 z-50 invisible opacity-0 -translate-y-2 scale-95 origin-top group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 ease-out">
              <div className="bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
                <div className="h-[3px] w-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-red-600" />
                <div className="p-2">
                  {expertiseItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.href}
                      className="block px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-slate-50 hover:text-blue-900 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Products Dropdown */}
          <div className="relative group py-6">
            <button className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-red-600 transition font-medium">
              <span>Products</span>
              <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-900 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full w-64 pt-2 z-50 invisible opacity-0 -translate-y-2 scale-95 origin-top group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 ease-out">
              <div className="bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
                <div className="h-[3px] w-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-red-600" />
                <div className="p-2">
                  {productsItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.href}
                      className="block px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-slate-50 hover:text-blue-900 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link to="/success-stories" className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-red-600 transition font-medium">Success Stories</Link>
          <Link to="/case-studies" className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-red-600 transition font-medium">Case Studies</Link>
          <Link to="/about-us" className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-red-600 transition font-medium">About Us</Link>
          <Link to="/careers" className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-red-600 transition font-medium">Careers</Link>
        </nav>

        {/* Desktop CTA */}
        <Link to="/contact-us" className="hidden xl:block bg-[#B80000] hover:bg-[#990000] text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors">
          Contact us
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="xl:hidden p-2 text-gray-800 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Responsive Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-blue-900 font-semibold">
            Home
          </Link>

          {/* Mobile Industries Accordion */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('industries')}
              className="w-full flex items-center justify-between py-2 text-gray-700 font-medium hover:text-blue-900"
            >
              <span>Industries</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === 'industries' ? 'rotate-180 text-blue-900' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeMobileDropdown === 'industries' && (
              <div className="pl-4 space-y-1 py-1 bg-slate-50 rounded-lg">
                {industriesItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1.5 text-xs text-gray-600 hover:text-blue-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Expertise Accordion */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('expertise')}
              className="w-full flex items-center justify-between py-2 text-gray-700 font-medium hover:text-blue-900"
            >
              <span>Expertise</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === 'expertise' ? 'rotate-180 text-blue-900' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeMobileDropdown === 'expertise' && (
              <div className="pl-4 space-y-1 py-1 bg-slate-50 rounded-lg">
                {expertiseItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1.5 text-xs text-gray-600 hover:text-blue-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Products Accordion */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('products')}
              className="w-full flex items-center justify-between py-2 text-gray-700 font-medium hover:text-blue-900"
            >
              <span>Products</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === 'products' ? 'rotate-180 text-blue-900' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeMobileDropdown === 'products' && (
              <div className="pl-4 space-y-1 py-1 bg-slate-50 rounded-lg">
                {productsItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1.5 text-xs text-gray-600 hover:text-blue-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/success-stories" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-900 font-medium">
            Success Stories
          </Link>
          <Link to="/case-studies" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-900 font-medium">
            Case Studies
          </Link>
          <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-900 font-medium">
            About Us
          </Link>
          <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-900 font-medium">
            Careers
          </Link>

          <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="inline-block w-full text-center bg-[#B80000] text-white py-2.5 rounded-md font-semibold mt-2">
            Contact us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;