import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 md:pt-32 pb-8 md:pb-12 px-6 md:px-12 rounded-t-[2rem] md:rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
        <div>
          <h4 className="text-[15vw] md:text-[12vw] font-bold tracking-tighter leading-none mb-6 md:mb-12">GOLDSMITH.</h4>
          <div className="flex gap-4 items-center font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            System Operational: v4.2.0
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mb-4">
          <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium uppercase tracking-widest opacity-60">
            <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => handleNav('/blog')}>BLOG</li>
            <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => handleNav('/')}>CONSULTING</li>
            <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => handleNav('/marketing')}>MARKETING</li>
          </ul>
          <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium uppercase tracking-widest opacity-60">
            <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => handleNav('/automation')}>AUTOMATION</li>
            <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => window.open('https://www.linkedin.com/company/goldsmith-growth', '_blank')}>LINKEDIN</li>
            <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => handleNav('/privacy')}>PRIVACY</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
