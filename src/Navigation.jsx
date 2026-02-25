import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'CONSULTING' },
    { path: '/automation', label: 'AUTOMATION' },
    { path: '/marketing', label: 'MARKETING' },
    { path: '/blog', label: 'BLOG' },
  ];

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
        <div className="bg-white/60 backdrop-blur-xl border border-white/20 px-4 md:px-8 py-4 rounded-full flex justify-between items-center shadow-2xl">
          {/* Logo */}
          <button 
            onClick={() => handleNav('/')}
            className="font-bold tracking-tighter text-[#2E4036] text-lg md:text-xl hover:opacity-70 transition-opacity"
          >
            GOLDSMITH
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-widest opacity-80">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`hover:text-[#CC5833] transition-colors ${
                  location.pathname === item.path ? 'text-[#CC5833]' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => handleNav('/scan')}
            className="hidden md:block bg-[#2E4036] text-white px-4 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform active:scale-95"
          >
            Get Audit
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#2E4036] p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-24 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 border border-slate-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className={`text-left text-lg font-bold uppercase tracking-widest py-3 border-b border-slate-100 last:border-0 ${
                    location.pathname === item.path ? 'text-[#CC5833]' : 'text-[#2E4036]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNav('/scan')}
                className="mt-4 bg-[#CC5833] text-white px-6 py-4 rounded-full text-lg font-bold text-center"
              >
                Get Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
