import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './Navigation';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.2
      });

      const cards = gsap.utils.toArray('.practice-card');
      cards.forEach((card, i) => {
        if (i !== cards.length - 1) {
          gsap.to(card, {
            scale: 0.95,
            opacity: 0.7,
            scrollTrigger: {
              trigger: cards[i + 1],
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
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] contrast-150 brightness-100">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* NAVBAR */}
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-end pt-32 pb-12 px-12 md:pt-40 md:pb-24 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2560" className="w-full h-full object-cover scale-110" alt="Executive Office" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E4036] via-[#2E4036]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-white leading-[0.9] hero-text">
            <span className="block text-4xl md:text-6xl font-bold tracking-tight mb-2">McKinsey Gives You Decks.</span>
            <span className="block text-5xl md:text-[8rem] font-serif italic font-light tracking-tighter">We Give You Working Systems.</span>
          </h1>
          <p className="hero-text text-white/80 mt-8 max-w-xl text-lg font-light leading-relaxed">
            Operations, AI, and marketing — one team that diagnoses AND builds. Not another 200-slide presentation. Actual working systems in 4-8 weeks.
          </p>
          <div className="hero-text mt-8">
            <button 
              onClick={() => navigate('/scan')}
              className="bg-[#CC5833] text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform inline-flex items-center gap-3"
            >
              Book Consulting Audit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="relative py-24 px-6 md:px-12 bg-[#F2F0E9]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-[#CC5833] text-sm font-bold uppercase tracking-widest">The Problem</span>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
              <p className="text-xl text-[#1A1A1A]/80 leading-relaxed mb-4">
                You paid McKinsey $500K. They handed you a 200-slide deck and walked away.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
              <p className="text-xl text-[#1A1A1A]/80 leading-relaxed mb-4">
                You paid the AI agency $50K. They built a chatbot that hallucinates your pricing and insults your customers.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
              <p className="text-xl text-[#1A1A1A]/80 leading-relaxed mb-4">
                You paid the marketing firm $30K/month. They ran ads and sent you reports nobody read.
              </p>
            </div>

            <div className="bg-[#CC5833] rounded-3xl p-8 md:p-12 shadow-xl text-white">
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                Nobody actually fixed anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PRACTICES */}
      <section className="relative py-24 px-6 md:px-12 bg-[#2E4036]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-[#D4BE2E] text-sm font-bold uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
              Three Practices. One Outcome.
            </h2>
          </div>

          <div className="space-y-6">
            {/* Operations */}
            <div className="practice-card bg-white/10 backdrop-blur rounded-3xl p-8 md:p-12 border border-white/20 sticky top-32">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <span className="text-[#D4BE2E] text-sm font-bold uppercase tracking-widest">Practice 01</span>
                  <h3 className="text-3xl font-bold text-white mt-2 mb-4">Operations Consulting</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    We map your workflow, find the bottlenecks, and fix them. Not with another process document — with systems that actually run.
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>→ Workflow automation that eliminates busywork</li>
                    <li>→ Process redesign that actually gets adopted</li>
                    <li>→ Systems integration without 6-month IT projects</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-sm text-[#D4BE2E] font-bold mb-2">RECENT WIN</div>
                  <div className="text-white font-semibold mb-2">1,000-Agent Real Estate Brokerage</div>
                  <p className="text-white/70 text-sm mb-4">45 hours of admin work eliminated weekly</p>
                  <div className="inline-block bg-[#D4BE2E] text-[#152546] px-3 py-1 rounded-full text-sm font-bold">
                    Lead volume doubled in 90 days
                  </div>
                </div>
              </div>
            </div>

            {/* AI Implementation */}
            <div className="practice-card bg-white/10 backdrop-blur rounded-3xl p-8 md:p-12 border border-white/20 sticky top-40">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <span className="text-[#D4BE2E] text-sm font-bold uppercase tracking-widest">Practice 02</span>
                  <h3 className="text-3xl font-bold text-white mt-2 mb-4">AI Implementation (With Guardrails)</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Everyone's building AI agents. Almost nobody's building them safely. Our founding team led conversational AI and ethical AI at Microsoft.
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>→ AI agents that work in production</li>
                    <li>→ Safety frameworks preventing hallucinations</li>
                    <li>→ Compliance guardrails for regulated industries</li>
                    <li>→ Human-in-the-loop systems</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-sm text-[#D4BE2E] font-bold mb-2">RECENT WIN</div>
                  <div className="text-white font-semibold mb-2">Cosmetic Surgery Practice</div>
                  <p className="text-white/70 text-sm mb-4">10x improvement in lead conversion</p>
                  <div className="inline-block bg-[#D4BE2E] text-[#152546] px-3 py-1 rounded-full text-sm font-bold">
                    Zero AI incidents
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing */}
            <div className="practice-card bg-white/10 backdrop-blur rounded-3xl p-8 md:p-12 border border-white/20 sticky top-48">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <span className="text-[#D4BE2E] text-sm font-bold uppercase tracking-widest">Practice 03</span>
                  <h3 className="text-3xl font-bold text-white mt-2 mb-4">CMO-Level Marketing</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Strategy without execution is just theory. We do both. 8 years as CMO-level marketing consultants.
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>→ Marketing operations that scale</li>
                    <li>→ Creative automation with brand standards</li>
                    <li>→ Performance intelligence that drives decisions</li>
                    <li>→ Attribution that makes sense</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-sm text-[#D4BE2E] font-bold mb-2">RECENT WIN</div>
                  <div className="text-white font-semibold mb-2">Branding Agency (40+ clients)</div>
                  <p className="text-white/70 text-sm mb-4">4x increase in qualified leads</p>
                  <div className="inline-block bg-[#D4BE2E] text-[#152546] px-3 py-1 rounded-full text-sm font-bold">
                    72 hours/week saved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="relative py-24 px-6 md:px-12 bg-[#F2F0E9]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-[#CC5833] text-sm font-bold uppercase tracking-widest">Why We Win</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E4036] mt-4 leading-tight">
              Strategy That Ships
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 font-bold text-[#2E4036]">The Big 4</th>
                  <th className="text-left py-4 font-bold text-[#CC5833]">Goldsmith</th>
                </tr>
              </thead>
              <tbody className="text-[#1A1A1A]/80">
                <tr className="border-b border-slate-100">
                  <td className="py-4">200-slide decks</td>
                  <td className="py-4 font-semibold text-[#2E4036]">Working systems</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4">Junior associates</td>
                  <td className="py-4 font-semibold text-[#2E4036]">Founders who build</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4">6-month timelines</td>
                  <td className="py-4 font-semibold text-[#2E4036]">4-8 week delivery</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4">$500K+ projects</td>
                  <td className="py-4 font-semibold text-[#2E4036]">$15-75K builds</td>
                </tr>
                <tr>
                  <td className="py-4">Insights</td>
                  <td className="py-4 font-semibold text-[#2E4036]">Outcomes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-red-50 rounded-2xl border border-red-100">
            <p className="text-red-900 font-semibold mb-2">⚠️ The AI Agencies</p>
            <p className="text-red-800 text-sm">Build fast, break things, leave you with a PR crisis.</p>
          </div>

          <div className="mt-4 p-6 bg-green-50 rounded-2xl border border-green-100">
            <p className="text-green-900 font-semibold mb-2">✓ Goldsmith</p>
            <p className="text-green-800 text-sm">Build fast, build safe, ship systems that actually work.</p>
          </div>
        </div>
      </section>

      {/* PROCESS / PRICING */}
      <section className="relative py-24 px-6 md:px-12 bg-[#F2F0E9]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-[#CC5833] text-sm font-bold uppercase tracking-widest">How It Works</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E4036] mt-4 leading-tight">
              From Diagnosis to Deployment
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="text-5xl font-bold text-[#CC5833] mb-4">$2,500</div>
              <h3 className="text-xl font-bold text-[#2E4036] mb-2">Phase 1: Consulting Audit</h3>
              <p className="text-[#1A1A1A]/70 mb-4">One week inside your business. We diagnose operations, assess AI readiness, and audit marketing.</p>
              <ul className="space-y-2 text-sm text-[#1A1A1A]/80">
                <li>✓ Complete workflow analysis</li>
                <li>✓ AI readiness & safety assessment</li>
                <li>✓ Marketing operations audit</li>
                <li>✓ Prioritized roadmap with ROI</li>
              </ul>
            </div>

            <div className="bg-[#2E4036] rounded-3xl p-8 shadow-xl border border-[#2E4036] transform md:scale-105">
              <div className="inline-block bg-[#D4BE2E] text-[#152546] text-xs font-bold px-3 py-1 rounded-full mb-4">Most Popular</div>
              <div className="text-5xl font-bold text-white mb-4">$15-75K</div>
              <h3 className="text-xl font-bold text-white mb-2">Phase 2: The Build</h3>
              <p className="text-white/70 mb-4">Working systems in 4-8 weeks. Not templates. Built for your exact needs.</p>
              <ul className="space-y-2 text-sm text-white/80">
                <li>✓ Custom systems built from scratch</li>
                <li>✓ AI safety guardrails included</li>
                <li>✓ Your tool integrations</li>
                <li>✓ Team training included</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="text-5xl font-bold text-[#CC5833] mb-4">$5-15K/mo</div>
              <h3 className="text-xl font-bold text-[#2E4036] mb-2">Phase 3: Optimization</h3>
              <p className="text-[#1A1A1A]/70 mb-4">Stay on as your operating partner. New challenges, new systems, continuous improvement.</p>
              <ul className="space-y-2 text-sm text-[#1A1A1A]/80">
                <li>✓ Unlimited new requests</li>
                <li>✓ System maintenance</li>
                <li>✓ Quarterly strategy reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="relative py-24 px-6 md:px-12 bg-[#2E4036]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4BE2E] text-sm font-bold uppercase tracking-widest">Credentials</span>
              <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
                Microsoft AI Ethics + 8 Years CMO Experience
              </h2>
            </div>
            <div className="text-white/80 space-y-4">
              <p>
                Our founding team led conversational AI and ethical AI at Microsoft. We built the guardrails that keep AI safe in production.
              </p>
              <p>
                Combined with 8 years as CMO-level marketing consultants and operations specialists who've actually run P&Ls.
              </p>
              <p className="text-[#D4BE2E] font-semibold">
                We know what breaks — and how to prevent it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 md:px-12 bg-[#F2F0E9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-[#2E4036] mb-6 leading-tight">
            Book a Consulting Audit
          </h2>
          <p className="text-xl text-[#1A1A1A]/70 mb-4 max-w-2xl mx-auto">
            One week. $2,500. We diagnose your operations, assess your AI readiness, and audit your marketing.
          </p>
          <p className="text-lg text-[#1A1A1A]/60 mb-8 max-w-xl mx-auto">
            You get a clear plan for what to fix, in what order, with what ROI. No pitch. Just a plan you can use.
          </p>
          <button 
            onClick={() => navigate('/scan')}
            className="bg-[#CC5833] text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform inline-flex items-center gap-3"
          >
            Book the Audit
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="font-bold tracking-tighter text-xl mb-4 md:mb-0">GOLDSMITH</div>
          <div className="text-sm opacity-60">
            Strategy That Ships
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;