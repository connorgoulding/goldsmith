import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className="relative bg-[#F2F0E9] text-[#1A1A1A] overflow-x-hidden font-['Plus_Jakarta_Sans'] selection:bg-[#CC5833] selection:text-white min-h-screen flex flex-col">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] contrast-150 brightness-100">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 md:px-24 bg-[#2E4036]">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-sm text-[#D4BE2E] tracking-widest uppercase">[ LEGAL ]</span>
          <h1 className="text-5xl md:text-8xl font-bold text-white mt-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-white/60 mt-4 text-lg">Last updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-grow py-16 md:py-24 px-6 md:px-24 bg-[#F2F0E9]">
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div>
            <h2 className="text-2xl font-bold text-[#2E4036] mb-4">The Short Version</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              We collect only what we need to deliver working systems. We don't sell your data. We don't spam you. We keep things secure. If you want your data deleted, just ask.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2E4036] mb-4">What We Collect</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
              When you work with us, we collect:
            </p>
            <ul className="space-y-2 text-[#1A1A1A]/70">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full mt-2 shrink-0" />
                Contact info (name, email, phone) — so we can actually talk to you
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full mt-2 shrink-0" />
                Business information — so we understand what we're automating
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full mt-2 shrink-0" />
                Usage data — so we know which automations are working
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full mt-2 shrink-0" />
                Payment information — so we can get paid (processed securely via Stripe)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2E4036] mb-4">How We Use It</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
              We use your data for exactly three things:
            </p>
            <ul className="space-y-2 text-[#1A1A1A]/70">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full mt-2 shrink-0" />
                Building and maintaining your systems
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full mt-2 shrink-0" />
                Communicating with you about your project
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full mt-2 shrink-0" />
                Improving our services (anonymized where possible)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2E4036] mb-4">What We Don't Do</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              We don't sell your data to third parties. We don't use your information for advertising (we don't run ads). We don't share your business details with other clients. We don't keep your data longer than necessary — if you stop working with us, we delete what we don't need for legal or operational purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2E4036] mb-4">Security</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              We take security seriously — it's literally part of what we sell (AI with guardrails, remember?). We use industry-standard encryption, secure cloud infrastructure, and access controls. That said, no system is perfect. If we ever have a breach, we'll tell you immediately and fix it fast.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2E4036] mb-4">Cookies & Tracking</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              We use Google Analytics to understand how people use our site. We use Google Tag Manager to measure what marketing actually works. You can block these with your browser settings — we won't hold it against you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2E4036] mb-4">Your Rights</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
              Depending on where you live, you have rights to:
            </p>
            <ul className="space-y-2 text-[#1A1A1A]/70">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full mt-2 shrink-0" />
                See what data we have about you
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full mt-2 shrink-0" />
                Correct inaccurate information
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full mt-2 shrink-0" />
                Delete your data (with some legal exceptions)
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#CC5833] rounded-full mt-2 shrink-0" />
                Opt out of marketing communications
              </li>
            </ul>
            <p className="text-[#1A1A1A]/70 leading-relaxed mt-4">
              Just email us at privacy@goldsmithgrowth.com and we'll handle it. No complicated forms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2E4036] mb-4">Third-Party Services</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              We use trusted third parties to run our business: Stripe for payments, Google for analytics and email, AWS for hosting, OpenClaw for automation infrastructure. Each has their own privacy policies, but we only work with providers who meet our security standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2E4036] mb-4">Changes to This Policy</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              If we change this policy, we'll update the date at the top and notify active clients. We won't make changes that reduce your privacy rights without telling you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2E4036] mb-4">Questions?</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed">
              Privacy can be complicated. If you have questions, just ask: <a href="mailto:privacy@goldsmithgrowth.com" className="text-[#CC5833] hover:underline">privacy@goldsmithgrowth.com</a>
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
