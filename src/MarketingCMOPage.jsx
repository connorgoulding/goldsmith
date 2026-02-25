import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './Navigation';

gsap.registerPlugin(ScrollTrigger);

const MarketingCMOPage = () => {
  const navigate = useNavigate();
  const mainRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Entrance: Staggered Fade-Up
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.2
      });

      // Protocol Sticky Stacking Logic
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

      {/* NAVBAR */}
      <Navigation />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen w-full flex items-end pt-32 pb-12 px-6 md:pt-52 md:pb-24 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2560" className="w-full h-full object-cover scale-110" alt="Marketing Strategy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E4036] via-[#2E4036]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-white leading-[0.9] hero-text">
            <span className="block text-4xl md:text-6xl font-bold tracking-tight mb-2">Your Best Marketer Is</span>
            <span className="block text-6xl md:text-[10rem] font-serif italic font-light tracking-tighter">Building Pivot Tables.</span>
          </h1>
          <p className="hero-text text-white/80 mt-8 max-w-lg text-lg font-light leading-relaxed">
            We build AI systems that eliminate production work — so your marketing team can focus on strategy, not spreadsheets.
          </p>
          <div className="hero-text mt-8">
            <button 
              onClick={() => navigate('/scan')}
              className="bg-[#CC5833] text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform inline-flex items-center gap-3"
            >
              Book Marketing Ops Audit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section id="services" className="relative min-h-screen py-24 px-6 md:px-12 bg-[#F2F0E9]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-[#CC5833] text-sm font-bold uppercase tracking-widest">The Problem</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E4036] mt-4 leading-tight">
              Marketing Operations Has Become a Factory Job
            </h2>
          </div>

          <div className="protocol-card bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 mb-8 sticky top-32">
            <p className="text-xl text-[#1A1A1A]/80 leading-relaxed mb-8">
              Sarah was hired to build your brand.
            </p>
            <p className="text-xl text-[#1A1A1A]/80 leading-relaxed mb-8">
              Instead, she's in Excel.
            </p>
            <p className="text-lg text-[#1A1A1A]/70 leading-relaxed">
              It's 4 PM. She's been pulling campaign data from 6 platforms, normalizing it in a spreadsheet, and building a PowerPoint for tomorrow's board meeting.
            </p>
            <p className="text-lg text-[#CC5833] font-semibold mt-6">
              She hasn't written a headline in 3 weeks.
            </p>
          </div>

          <div className="protocol-card bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 mb-8 sticky top-40">
            <h3 className="text-2xl font-bold text-[#2E4036] mb-6">Most marketing teams spend 60-70% of their time on production work:</h3>
            <ul className="space-y-4 text-lg text-[#1A1A1A]/80">
              <li className="flex items-start gap-3">
                <span className="text-[#CC5833] font-bold">→</span>
                <span>Pulling reports from platforms that don't talk to each other</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CC5833] font-bold">→</span>
                <span>Repurposing the same creative for 12 different channels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CC5833] font-bold">→</span>
                <span>Updating campaign spreadsheets that are always outdated</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CC5833] font-bold">→</span>
                <span>Chasing stakeholders for approval on minor copy changes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CC5833] font-bold">→</span>
                <span>Building PowerPoints for meetings that could have been emails</span>
              </li>
            </ul>
          </div>

          <div className="protocol-card bg-[#CC5833] rounded-3xl p-8 md:p-12 shadow-xl text-white sticky top-48">
            <p className="text-2xl md:text-3xl font-bold leading-tight">
              "You're paying senior salaries for junior work."
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="process" className="relative py-24 px-6 md:px-12 bg-[#2E4036]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-[#D4BE2E] text-sm font-bold uppercase tracking-widest">The Solution</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
              We Build Marketing Operating Systems
            </h2>
            <p className="text-xl text-white/70 mt-6 max-w-2xl">
              Not templates. Not best practices. Custom AI systems that run your marketing operations so your team can run strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-3">Creative Operations</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Auto-generate ad variations from briefs</li>
                <li>• Resize for every channel simultaneously</li>
                <li>• A/B test headlines without touching design tools</li>
                <li>• Route approvals based on spend thresholds</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Intelligence</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Real-time dashboards from every platform</li>
                <li>• Automated alerts on performance thresholds</li>
                <li>• Predictive models for underperformers</li>
                <li>• Cross-channel attribution without spreadsheets</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-white mb-3">Content Operations</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Repurpose content into 20+ micro-assets automatically</li>
                <li>• Schedule and publish across all channels</li>
                <li>• Track performance and auto-optimize</li>
                <li>• Generate weekly stakeholder briefs</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Campaign Orchestration</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Automated nurture sequences adapting to behavior</li>
                <li>• Triggered campaigns from CRM signals</li>
                <li>• Dynamic creative optimization</li>
                <li>• Budget reallocation recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="relative py-24 px-6 md:px-12 bg-[#F2F0E9]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-[#CC5833] text-sm font-bold uppercase tracking-widest">Results</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E4036] mt-4 leading-tight">
              Your Team Gets Their Mornings Back
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#CC5833] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2E4036] mb-3">1,000-Agent Real Estate Brokerage</h3>
                <p className="text-[#1A1A1A]/80 mb-4">
                  <strong>Before:</strong> Three hiring managers spending 45 hours/week on admin work (scheduling, follow-ups, lead routing)
                </p>
                <p className="text-[#1A1A1A]/80 mb-4">
                  <strong>After:</strong> Same work in 5 hours. Response time dropped from 48 hours to 4 hours. Candidate satisfaction up 340%.
                </p>
                <div className="inline-block bg-[#D4BE2E] text-[#152546] px-4 py-2 rounded-full font-bold">
                  Result: Lead volume doubled in 90 days, $58,500 annual savings
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#2E4036] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2E4036] mb-3">Cosmetic Surgery Practice</h3>
                <p className="text-[#1A1A1A]/80 mb-4">
                  Spending $8,000/month on Google Ads but barely converting leads due to slow response times (4-24 hours)
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-sm text-[#1A1A1A]/60 mb-1">Before</div>
                    <div className="text-2xl font-bold text-red-600">$2,667</div>
                    <div className="text-xs text-[#1A1A1A]/70">Cost per procedure</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-sm text-[#1A1A1A]/60 mb-1">After</div>
                    <div className="text-2xl font-bold text-green-600">$421</div>
                    <div className="text-xs text-[#1A1A1A]/70">Cost per procedure</div>
                  </div>
                </div>
                <div className="inline-block bg-[#D4BE2E] text-[#152546] px-4 py-2 rounded-full font-bold">
                  Result: 10x improvement in efficiency, 6.3x more procedures sold
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 mt-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#CC5833] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2E4036] mb-3">Branding Agency (40+ Clients)</h3>
                <p className="text-[#1A1A1A]/80 mb-4">
                  Account managers spending 60% of time on reporting and admin instead of strategy
                </p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#CC5833]">4x</div>
                    <div className="text-sm text-[#1A1A1A]/70">More qualified leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#CC5833]">72</div>
                    <div className="text-sm text-[#1A1A1A]/70">Hours saved weekly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#CC5833]">40+</div>
                    <div className="text-sm text-[#1A1A1A]/70">Clients deployed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="relative py-24 px-6 md:px-12 bg-[#F2F0E9]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-[#CC5833] text-sm font-bold uppercase tracking-widest">How It Works</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E4036] mt-4 leading-tight">
              Three Phases to Marketing Freedom
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="text-5xl font-bold text-[#CC5833] mb-4">$2,500</div>
              <h3 className="text-xl font-bold text-[#2E4036] mb-2">Phase 1: The Audit</h3>
              <p className="text-[#1A1A1A]/70 mb-4">We map your current workflow and identify the 20% of work eating 80% of your team's time.</p>
              <ul className="space-y-2 text-sm text-[#1A1A1A]/80">
                <li>✓ Complete workflow analysis</li>
                <li>✓ ROI per automation</li>
                <li>✓ Prioritized roadmap</li>
              </ul>
            </div>

            <div className="bg-[#2E4036] rounded-3xl p-8 shadow-xl border border-[#2E4036] transform md:scale-105">
              <div className="inline-block bg-[#D4BE2E] text-[#152546] text-xs font-bold px-3 py-1 rounded-full mb-4">Most Popular</div>
              <div className="text-5xl font-bold text-white mb-4">$15-40K</div>
              <h3 className="text-xl font-bold text-white mb-2">Phase 2: The Build</h3>
              <p className="text-white/70 mb-4">Custom AI systems built for your exact workflow. Not templates.</p>
              <ul className="space-y-2 text-sm text-white/80">
                <li>✓ Custom OpenClaw skills</li>
                <li>✓ Your tool integrations</li>
                <li>✓ Team training included</li>
                <li>✓ 60 days optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="text-5xl font-bold text-[#CC5833] mb-4">$5K/mo</div>
              <h3 className="text-xl font-bold text-[#2E4036] mb-2">Phase 3: Optimization</h3>
              <p className="text-[#1A1A1A]/70 mb-4">New campaigns. New channels. We keep your systems running and evolving.</p>
              <ul className="space-y-2 text-sm text-[#1A1A1A]/80">
                <li>✓ Unlimited new requests</li>
                <li>✓ System maintenance</li>
                <li>✓ Quarterly reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative py-24 px-6 md:px-12 bg-[#2E4036]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4BE2E] text-sm font-bold uppercase tracking-widest">Who We Are</span>
              <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
                8 Years as CMO-Level Marketing Consultant
              </h2>
            </div>
            <div className="text-white/80 space-y-4">
              <p>
                I didn't start as a developer. I started as a marketing strategist — CMO-level consulting for growth-stage companies.
              </p>
              <p>
                I know what it's like to pitch the board on pipeline while your team is stuck in production hell.
              </p>
              <p>
                Then I discovered what AI can actually do. Not the ChatGPT hype — real operational systems that eliminate the work nobody wants to do.
              </p>
              <p className="text-[#D4BE2E] font-semibold">
                Now I combine both: I understand your marketing problem, and I can build the solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 px-6 md:px-12 bg-[#F2F0E9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-[#2E4036] mb-6 leading-tight">
            Book a 30-Minute Marketing Operations Audit
          </h2>
          <p className="text-xl text-[#1A1A1A]/70 mb-8 max-w-2xl mx-auto">
            I'll analyze one of your workflows live and show you exactly what to automate. No pitch. Just a clear plan you can use — with me or without me.
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
            Marketing Automation for CMOs
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingCMOPage;
