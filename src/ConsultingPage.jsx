import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './Navigation';

gsap.registerPlugin(ScrollTrigger);

const ConsultingPage = () => {
  const navigate = useNavigate();
  const mainRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Entrance: Staggered Fade-Up
      gsap.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.15
      });

      // Sticky Stacking Cards - only on desktop
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        const cards = gsap.utils.toArray('.practice-card');
        cards.forEach((card, i) => {
          if (i !== cards.length - 1) {
            gsap.to(card, {
              scale: 0.95,
              filter: "blur(8px)",
              opacity: 0.5,
              scrollTrigger: {
                trigger: cards[i + 1],
                start: "top center",
                end: "top top",
                scrub: true,
              }
            });
          }
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative bg-[#F2F0E9] text-[#1A1A1A] overflow-x-hidden font-['Plus_Jakarta_Sans'] selection:bg-[#CC5833] selection:text-white">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] contrast-150 brightness-100">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* NAVIGATION */}
      <Navigation />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen w-full flex items-end pb-16 pt-32 px-6 md:pt-52 md:pb-24 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2560" className="w-full h-full object-cover scale-110" alt="Executive Office" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E4036] via-[#2E4036]/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-5xl">
          <h1 className="text-white leading-[1.2] md:leading-[1.1] hero-text">
            <span className="block text-2xl md:text-5xl font-light tracking-wide mb-4 md:mb-8 opacity-90">They give you PowerPoints.</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] font-serif italic font-light tracking-tight">We give you working systems.</span>
          </h1>
          <p className="hero-text text-white/70 mt-6 md:mt-8 max-w-xl text-base md:text-lg font-light leading-relaxed">
            Operations, AI, and marketing — one team that diagnoses AND builds. Not another strategy deck. Actual working systems in 4-8 weeks.
          </p>
          <div className="hero-text mt-6 md:mt-8">
            <button 
              onClick={() => navigate('/scan')}
              className="bg-[#CC5833] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold hover:scale-105 transition-transform inline-flex items-center gap-2 md:gap-3"
            >
              Book Consulting Audit
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* THREE PRACTICES — Cards */}
      <section className="relative">
        {/* Operations Card */}
        <div className="practice-card md:sticky md:top-0 min-h-auto md:min-h-screen w-full bg-[#F2F0E9] py-16 md:py-0 md:flex md:items-center border-t border-[#1A1A1A]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <span className="font-mono text-xs md:text-sm text-[#CC5833] tracking-widest uppercase">[ 01 ]</span>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#2E4036] mt-2 md:mt-4 mb-4 md:mb-6">Operations</h2>
              <p className="text-lg md:text-xl text-[#1A1A1A]/70 leading-relaxed mb-6 md:mb-8">
                We map your workflow, find the bottlenecks, and fix them. Not with another process document — with systems that actually run.
              </p>
              <ul className="space-y-2 md:space-y-3 text-[#1A1A1A]/60 text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full shrink-0" />
                  Workflow automation that eliminates busywork
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full shrink-0" />
                  Process redesign that gets adopted
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full shrink-0" />
                  Systems integration without 6-month IT projects
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-[#1A1A1A]/5">
              <div className="font-mono text-xs text-[#CC5833] tracking-widest uppercase mb-3 md:mb-4">Recent Win</div>
              <div className="text-2xl md:text-3xl font-bold text-[#2E4036] mb-2">1,000-Agent Brokerage</div>
              <p className="text-[#1A1A1A]/60 mb-4 md:mb-6 text-sm md:text-base">45 hours of admin work eliminated weekly</p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-[#F2F0E9] rounded-xl md:rounded-2xl p-3 md:p-4">
                  <div className="text-xl md:text-2xl font-bold text-[#CC5833]">2x</div>
                  <div className="text-xs text-[#1A1A1A]/60">Lead volume</div>
                </div>
                <div className="bg-[#F2F0E9] rounded-xl md:rounded-2xl p-3 md:p-4">
                  <div className="text-xl md:text-2xl font-bold text-[#CC5833]">4.9x</div>
                  <div className="text-xs text-[#1A1A1A]/60">ROI year one</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Card */}
        <div className="practice-card md:sticky md:top-0 min-h-auto md:min-h-screen w-full bg-[#2E4036] py-16 md:py-0 md:flex md:items-center text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <span className="font-mono text-xs md:text-sm text-[#D4BE2E] tracking-widest uppercase">[ 02 ]</span>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight mt-2 md:mt-4 mb-4 md:mb-6">AI With Guardrails</h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6 md:mb-8">
                Everyone's building AI agents. Almost nobody's building them safely. Our founding team led conversational AI and ethical AI at Microsoft.
              </p>
              <ul className="space-y-2 md:space-y-3 text-white/60 text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D4BE2E] rounded-full shrink-0" />
                  AI agents that work in production
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D4BE2E] rounded-full shrink-0" />
                  Safety frameworks preventing hallucinations
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D4BE2E] rounded-full shrink-0" />
                  Compliance guardrails for regulated industries
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 border border-white/10">
              <div className="font-mono text-xs text-[#D4BE2E] tracking-widest uppercase mb-3 md:mb-4">Recent Win</div>
              <div className="text-2xl md:text-3xl font-bold mb-2">Cosmetic Surgery Practice</div>
              <p className="text-white/60 mb-4 md:mb-6 text-sm md:text-base">10x improvement in lead conversion</p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white/5 rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10">
                  <div className="text-xl md:text-2xl font-bold text-[#D4BE2E]">90s</div>
                  <div className="text-xs text-white/60">Response time</div>
                </div>
                <div className="bg-white/5 rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10">
                  <div className="text-xl md:text-2xl font-bold text-[#D4BE2E]">0</div>
                  <div className="text-xs text-white/60">AI incidents</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Card */}
        <div className="practice-card md:sticky md:top-0 min-h-auto md:min-h-screen w-full bg-[#F2F0E9] py-16 md:py-0 md:flex md:items-center border-t border-[#1A1A1A]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <span className="font-mono text-xs md:text-sm text-[#CC5833] tracking-widest uppercase">[ 03 ]</span>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#2E4036] mt-2 md:mt-4 mb-4 md:mb-6">Marketing</h2>
              <p className="text-lg md:text-xl text-[#1A1A1A]/70 leading-relaxed mb-6 md:mb-8">
                Strategy without execution is just theory. We do both. 8 years as CMO-level marketing consultants.
              </p>
              <ul className="space-y-2 md:space-y-3 text-[#1A1A1A]/60 text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full shrink-0" />
                  Marketing operations that scale
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full shrink-0" />
                  Creative automation with brand standards
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full shrink-0" />
                  Performance intelligence that drives decisions
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-[#1A1A1A]/5">
              <div className="font-mono text-xs text-[#CC5833] tracking-widest uppercase mb-3 md:mb-4">Recent Win</div>
              <div className="text-2xl md:text-3xl font-bold text-[#2E4036] mb-2">Branding Agency</div>
              <p className="text-[#1A1A1A]/60 mb-4 md:mb-6 text-sm md:text-base">40+ clients, automated reporting</p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-[#F2F0E9] rounded-xl md:rounded-2xl p-3 md:p-4">
                  <div className="text-xl md:text-2xl font-bold text-[#CC5833]">4x</div>
                  <div className="text-xs text-[#1A1A1A]/60">Qualified leads</div>
                </div>
                <div className="bg-[#F2F0E9] rounded-xl md:rounded-2xl p-3 md:p-4">
                  <div className="text-xl md:text-2xl font-bold text-[#CC5833]">72h</div>
                  <div className="text-xs text-[#1A1A1A]/60">Saved weekly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section className="bg-[#1A1A1A] py-20 md:py-40 px-6 md:px-24 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" alt="Office Workspace" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
            <h2 className="text-white/40 text-2xl md:text-4xl font-bold leading-tight">
              Traditional consultants ask: <br/>
              <span className="text-white">"What software should you buy?"</span>
            </h2>
            <h2 className="text-[#CC5833] text-3xl md:text-5xl lg:text-7xl font-serif italic leading-tight">
              We ask: <br/>
              <span className="text-[#F2F0E9] not-italic font-sans font-bold uppercase tracking-tight text-xl md:text-3xl lg:text-4xl">What work should disappear?</span>
            </h2>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative">
        <ProcessCard title="Consulting Audit" num="01" subtitle="We diagnose your operations, assess AI readiness, audit your marketing. One week. $2,500." color="bg-[#2E4036]" />
        <ProcessCard title="The Build" num="02" subtitle="Working systems in 4-8 weeks. Custom. Not templates. $15K-75K." color="bg-[#CC5833]" />
        <ProcessCard title="Optimization" num="03" subtitle="Stay on as your operating partner. $5-15K/month." color="bg-[#1A1A1A]" />
      </section>

      {/* CREDIBILITY */}
      <section className="bg-[#F2F0E9] py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs md:text-sm text-[#CC5833] tracking-widest uppercase">Credentials</span>
          <h2 className="text-3xl md:text-6xl font-bold text-[#2E4036] mt-2 md:mt-4 mb-8 md:mb-12 leading-tight">
            Microsoft AI Ethics +<br/>8 Years CMO Experience
          </h2>
          <p className="text-base md:text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto mb-6 md:mb-8">
            Our founding team led conversational AI and ethical AI at Microsoft. We built the guardrails that keep AI safe in production.
          </p>
          <p className="text-sm md:text-lg text-[#1A1A1A]/60 max-w-xl mx-auto">
            Combined with 8 years as CMO-level marketing consultants and operations specialists who've actually run P&Ls.
          </p>
          <p className="text-[#CC5833] font-semibold text-lg md:text-xl mt-6 md:mt-8">
            We know what breaks — and how to prevent it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2E4036] py-20 md:py-32 px-6 md:px-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Book a Consulting Audit
          </h2>
          <p className="text-base md:text-xl text-white/70 mb-3 md:mb-4">
            One week. $2,500. You get a clear plan for what to fix, in what order, with what ROI.
          </p>
          <p className="text-sm md:text-lg text-white/50 mb-8 md:mb-12">
            No pitch. Just a plan you can use.
          </p>
          <button 
            onClick={() => navigate('/scan')}
            className="bg-[#CC5833] text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-lg md:text-xl font-bold hover:scale-105 transition-transform inline-flex items-center gap-2 md:gap-3"
          >
            Book the Audit
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] text-white pt-16 md:pt-32 pb-8 md:pb-12 px-6 md:px-12 rounded-t-[2rem] md:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
          <div>
            <h4 className="text-[15vw] md:text-[12vw] font-bold tracking-tighter leading-none mb-6 md:mb-12">GOLDSMITH.</h4>
            <div className="flex gap-4 items-center font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              System Operational
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mb-4">
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium uppercase tracking-widest opacity-60">
              <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => navigate('/consulting')}>Consulting</li>
              <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => navigate('/automation')}>Automation</li>
              <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => navigate('/marketing')}>Marketing</li>
            </ul>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium uppercase tracking-widest opacity-60">
              <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => navigate('/blog')}>Blog</li>
              <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => navigate('/scan')}>Get Audit</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-Components
const ProcessCard = ({ title, num, subtitle, color }) => (
  <div className={`md:sticky md:top-0 min-h-[60vh] md:min-h-screen w-full ${color} flex flex-col items-center justify-center px-6 py-12 md:p-24 text-white border-t border-white/10`}>
    <span className="font-mono text-sm md:text-lg md:text-xl mb-3 md:mb-4 md:mb-8 tracking-widest opacity-50">[{num}]</span>
    <h2 className="text-3xl sm:text-4xl md:text-5xl md:text-7xl lg:text-[8vw] font-bold tracking-tighter uppercase text-center mb-3 md:mb-6">{title}</h2>
    <p className="text-white/60 text-center max-w-xl text-sm md:text-lg px-4">{subtitle}</p>
    <div className="mt-4 md:mt-8 h-[2px] w-16 md:w-24 md:w-40 bg-[#D4BE2E]" />
  </div>
);

export default ConsultingPage;
