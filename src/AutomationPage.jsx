import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './Navigation';

gsap.registerPlugin(ScrollTrigger);

const AutomationPage = () => {
  const navigate = useNavigate();
  const mainRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Entrance: Staggered Fade-Up
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.2
      });

      // 2. Protocol Sticky Stacking Logic
      const protocolCards = gsap.utils.toArray('.protocol-card');
      protocolCards.forEach((card, i) => {
        if (i !== protocolCards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            filter: "blur(20px)",
            opacity: 0.5,
            scrollTrigger: {
              trigger: protocolCards[i + 1],
              start: "top center",
              end: "top top",
              scrub: true,
            }
          });
        }
      });
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

      {/* A. NAVBAR: The Floating Island */}
      <Navigation />

      {/* B. HERO SECTION: Operations is the Algorithm */}
      <section ref={heroRef} className="relative h-screen w-full flex items-end p-12 md:p-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2560" className="w-full h-full object-cover scale-110" alt="Vintage Office" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E4036] via-[#2E4036]/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-white leading-[0.85] hero-text">
            <span className="block text-4xl md:text-6xl font-bold tracking-tight mb-2">Operations is the</span>
            <span className="block text-7xl md:text-[12rem] font-serif italic font-light tracking-tighter">Algorithm.</span>
          </h1>
          <p className="hero-text text-white/70 mt-8 max-w-md text-lg font-light leading-relaxed">
            Most businesses run on chaos. We run on systems. Custom AI automations that eliminate the repetitive work eating your team's time.
          </p>
          <div className="hero-text mt-8">
            <button 
              onClick={() => navigate('/scan')}
              className="bg-[#CC5833] text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform inline-flex items-center gap-3"
            >
              Start Automation Scan
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* C. FEATURES: The Precision Micro-UI */}
      <section id="features" className="py-32 px-12 md:px-24 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#F2F0E9]">
        {/* Card 1: Workflow Audit */}
        <div className="bg-white p-10 rounded-[2.5rem] h-[500px] flex flex-col justify-between overflow-hidden shadow-sm border border-[#1A1A1A]/5 relative group">
          <div className="relative h-48 w-full">
            <DiagnosticShuffler />
          </div>
          <div>
            <h3 className="text-3xl font-bold tracking-tight mb-4 text-[#2E4036]">Workflow Audit</h3>
            <p className="text-[#1A1A1A]/60">Deep-stack analysis of your operations. We map every repetitive task, every manual handoff, every hour lost to busywork.</p>
          </div>
        </div>

        {/* Card 2: Live Automation */}
        <div className="bg-[#1A1A1A] p-10 rounded-[2.5rem] h-[500px] flex flex-col justify-between overflow-hidden relative">
          <div className="font-mono text-[#CC5833] text-sm space-y-2 pt-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#CC5833] rounded-full animate-pulse" />
              <span className="uppercase tracking-widest">Live Automation</span>
            </div>
            <TelemetryTypewriter />
          </div>
          <div className="text-white">
            <h3 className="text-3xl font-bold tracking-tight mb-4">Live Automation</h3>
            <p className="opacity-60 text-sm">Real-time visibility into your automated workflows. Watch the system work while your team focuses on what matters.</p>
          </div>
        </div>

        {/* Card 3: Adaptive Systems */}
        <div className="bg-white p-10 rounded-[2.5rem] h-[500px] flex flex-col justify-between overflow-hidden shadow-sm border border-[#1A1A1A]/5 relative">
          <ProtocolScheduler />
          <div>
            <h3 className="text-3xl font-bold tracking-tight mb-4 text-[#2E4036]">Adaptive Systems</h3>
            <p className="text-[#1A1A1A]/60">Automations that evolve with your business. New client? New workflow? The system adjusts automatically.</p>
          </div>
        </div>
      </section>

      {/* D. PHILOSOPHY: The Manifesto */}
      <section id="philosophy" className="bg-[#1A1A1A] py-40 px-12 md:px-24 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" alt="Office Workspace" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <h2 className="text-white/40 text-4xl font-bold leading-tight">
              Traditional consultants ask: <br/>
              <span className="text-white">"What software should you buy?"</span>
            </h2>
            <h2 className="text-[#CC5833] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic leading-tight">
              We ask: <br/>
              <span className="text-[#F2F0E9] not-italic font-sans font-bold uppercase tracking-tight">What work should disappear?</span>
            </h2>
          </div>
        </div>
      </section>

      {/* E. PROTOCOL: Sticky Stacking */}
      <section className="relative">
        <ProtocolCard title="Process Discovery" num="01" color="bg-[#2E4036]" />
        <ProtocolCard title="System Build" num="02" color="bg-[#CC5833]" />
        <ProtocolCard title="Continuous Optimization" num="03" color="bg-[#1A1A1A]" />
      </section>

      {/* PRICING */}
      <section className="relative py-24 px-6 md:px-12 bg-[#F2F0E9]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-[#CC5833] text-sm font-bold uppercase tracking-widest">Investment</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E4036] mt-4 leading-tight">
              Simple Pricing.<br/>Serious Results.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="text-5xl font-bold text-[#CC5833] mb-4">$2,500</div>
              <h3 className="text-xl font-bold text-[#2E4036] mb-2">Phase 1: Automation Audit</h3>
              <p className="text-[#1A1A1A]/70 mb-4">We map your workflows, identify bottlenecks, and build a prioritized roadmap.</p>
              <ul className="space-y-2 text-sm text-[#1A1A1A]/80">
                <li>✓ Complete workflow analysis</li>
                <li>✓ ROI calculation per automation</li>
                <li>✓ Prioritized build roadmap</li>
                <li>✓ Go/no-go decision framework</li>
              </ul>
            </div>

            <div className="bg-[#2E4036] rounded-3xl p-8 shadow-xl border border-[#2E4036] transform md:scale-105">
              <div className="inline-block bg-[#D4BE2E] text-[#152546] text-xs font-bold px-3 py-1 rounded-full mb-4">Most Popular</div>
              <div className="text-5xl font-bold text-white mb-4">$5-30K</div>
              <h3 className="text-xl font-bold text-white mb-2">Phase 2: The Build</h3>
              <p className="text-white/70 mb-4">Working automations in 4-8 weeks. Custom OpenClaw skills built for your exact workflow.</p>
              <ul className="space-y-2 text-sm text-white/80">
                <li>✓ Custom automation systems</li>
                <li>✓ Your tool integrations</li>
                <li>✓ Team training included</li>
                <li>✓ 60 days optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="text-5xl font-bold text-[#CC5833] mb-4">$2K+/mo</div>
              <h3 className="text-xl font-bold text-[#2E4036] mb-2">Phase 3: Optimization</h3>
              <p className="text-[#1A1A1A]/70 mb-4">Stay on as your automation partner. New workflows, continuous improvement.</p>
              <ul className="space-y-2 text-sm text-[#1A1A1A]/80">
                <li>✓ Unlimited new automations</li>
                <li>✓ System maintenance</li>
                <li>✓ Quarterly optimization reviews</li>
              </ul>
            </div>
          </div>
          
          {/* Pricing Disclaimer */}
          <div className="mt-12 p-6 bg-[#2E4036]/5 rounded-2xl border border-[#2E4036]/10">
            <p className="text-sm text-[#1A1A1A]/60 text-center">
              <span className="font-semibold text-[#2E4036]">Note:</span> Every business is different. Final pricing depends on scope, complexity, and timeline. We'll give you a precise quote after the audit — no surprises, ever.
            </p>
          </div>
        </div>
      </section>

      {/* F. FOOTER */}
      <footer className="bg-[#1A1A1A] text-white pt-32 pb-12 px-12 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div>
            <h4 className="text-[8vw] font-bold tracking-tighter leading-none mb-12">GOLDSMITH.</h4>
            <div className="flex gap-4 items-center font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              System Operational: v4.2.0
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 mb-4">
            <ul className="space-y-4 text-sm font-medium uppercase tracking-widest opacity-60">
              <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => navigate('/blog')}>Blog</li>
              <li className="hover:text-[#CC5833] cursor-pointer">Archive</li>
              <li className="hover:text-[#CC5833] cursor-pointer">Privacy</li>
            </ul>
            <ul className="space-y-4 text-sm font-medium uppercase tracking-widest opacity-60">
              <li className="hover:text-[#CC5833] cursor-pointer">LinkedIn</li>
              <li className="hover:text-[#CC5833] cursor-pointer">Insta</li>
              <li className="hover:text-[#CC5833] cursor-pointer">Terminal</li>
            </ul>
            <ul className="space-y-4 text-sm font-medium uppercase tracking-widest opacity-60 hidden md:block">
              <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => navigate('/scan')}>Get Audit</li>
              <li className="hover:text-[#CC5833] cursor-pointer" onClick={() => navigate('/#philosophy')}>Process</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Sub-Components (Functional Artifacts) ---

const ProtocolCard = ({ title, num, color }) => (
  <div className={`protocol-card sticky top-0 h-screen w-full ${color} flex flex-col items-center justify-center px-6 py-12 md:p-24 text-white border-t border-white/10`}>
    <span className="font-mono text-lg md:text-xl mb-4 md:mb-8 tracking-widest opacity-50">[{num}]</span>
    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[10vw] font-bold tracking-tighter uppercase text-center">{title}</h2>
    <div className="mt-6 md:mt-12 h-[2px] w-24 md:w-40 bg-[#CC5833]" />
  </div>
);

const TelemetryTypewriter = () => {
  const [text, setText] = useState("");
  const messages = [
    "Processing Invoice Batch #2847...",
    "Routing Lead: Qualified → Sales...",
    "Generating Weekly Report...",
    "System Load: 23% Capacity..."
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    const interval = setInterval(() => {
      setText(messages[index].substring(0, charIndex));
      charIndex++;
      if (charIndex > messages[index].length) {
        clearInterval(interval);
        setTimeout(() => setIndex((index + 1) % messages.length), 2000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [index]);

  return <p className="text-lg leading-tight h-12">{text}<span className="animate-pulse">_</span></p>;
};

const DiagnosticShuffler = () => {
  const [items, setItems] = useState(["Manual Data Entry", "Status Reports", "Email Follow-ups"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setItems(prev => {
        const copy = [...prev];
        const last = copy.pop();
        copy.unshift(last);
        return copy;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex justify-center pt-8">
      {items.map((item, i) => (
        <div
          key={item}
          className="absolute w-48 h-12 bg-[#F2F0E9] border border-[#2E4036]/20 rounded-xl flex items-center justify-center font-bold text-xs shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]"
          style={{
            transform: `translateY(${i * 20}px) scale(${1 - i * 0.05})`,
            zIndex: 10 - i,
            opacity: 1 - i * 0.3
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

const ProtocolScheduler = () => (
  <div className="w-full bg-[#F2F0E9]/50 rounded-2xl p-6 relative group overflow-hidden border border-black/5">
    <div className="flex justify-between mb-4">
      {['S','M','T','W','T','F','S'].map((d, i) => (
        <div
          key={i}
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold ${i === 2 ? 'bg-[#CC5833] text-white' : 'bg-white text-[#2E4036]'}`}
        >
          {d}
        </div>
      ))}
    </div>
    <div className="h-20 flex items-center justify-center">
      <div className="w-full h-[1px] bg-[#2E4036]/10 relative">
        <div className="absolute left-1/3 -top-1 w-2 h-2 bg-[#CC5833] rounded-full animate-ping" />
      </div>
    </div>
    {/* Mock SVG Cursor animation would go here via GSAP */}
  </div>
);

export default AutomationPage;