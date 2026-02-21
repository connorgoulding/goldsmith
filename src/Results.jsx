import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScanResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};

  // Calculate automation score
  const calculateScore = () => {
    let score = 0;
    let count = 0;
    
    // Hours score
    const hoursMap = { 1: 25, 2: 50, 3: 75, 4: 100 };
    if (answers.hours) {
      score += hoursMap[answers.hours] || 0;
      count++;
    }
    
    // Tools score
    const toolsMap = { 1: 25, 2: 50, 3: 75, 4: 100 };
    if (answers.tools) {
      score += toolsMap[answers.tools] || 0;
      count++;
    }
    
    // Frustration score
    const frustrationMap = { data: 80, manual: 90, visibility: 70, scale: 100 };
    if (answers.frustration) {
      score += frustrationMap[answers.frustration] || 0;
      count++;
    }
    
    return count > 0 ? Math.round(score / count) : 0;
  };

  const score = calculateScore();

  // Generate insights based on answers
  const generateInsights = () => {
    const insights = [];
    
    if (answers.hours >= 3) {
      insights.push("Your team is losing 15+ hours weekly to repetitive tasks. That's nearly 2 full workdays.");
    } else if (answers.hours >= 2) {
      insights.push("You're losing 5-15 hours per week to manual work. That's 20-60 hours per month.");
    }
    
    if (answers.tools >= 3) {
      insights.push(`With ${answers.tools === 4 ? '10+' : '7-10'} tools, you're likely dealing with data silos and integration gaps.`);
    }
    
    if (answers.frustration === 'manual') {
      insights.push("Manual processes don't scale. The work grows linearly with your business.");
    } else if (answers.frustration === 'scale') {
      insights.push("You need systems that scale without proportional headcount growth.");
    } else if (answers.frustration === 'data') {
      insights.push("When data lives in 5+ places, nobody knows what's actually happening.");
    }
    
    return insights;
  };

  const insights = generateInsights();

  // Determine recommendation
  const getRecommendation = () => {
    if (score >= 80) {
      return {
        title: "High Automation Opportunity",
        description: "Your operations are prime for automation. We can likely save your team 15-20 hours per week within 30 days.",
        cta: "Book Your Strategy Call",
        urgency: "High"
      };
    } else if (score >= 50) {
      return {
        title: "Moderate Automation Opportunity",
        description: "There's significant room for improvement. We can identify 3-5 quick wins that save 5-10 hours weekly.",
        cta: "Book Your Workflow Audit",
        urgency: "Medium"
      };
    } else {
      return {
        title: "Foundation Building Opportunity",
        description: "You're in good shape, but there's room for optimization. Let's build systems that support your next growth phase.",
        cta: "Get Your Automation Roadmap",
        urgency: "Planning"
      };
    }
  };

  const recommendation = getRecommendation();

  // Calculate potential hours saved
  const hoursSaved = answers.hours === 4 ? '20-25' : answers.hours === 3 ? '15-20' : answers.hours === 2 ? '10-15' : '5-10';

  return (
    <div className="min-h-screen bg-[#F2F0E9] text-[#1A1A1A] font-['Plus_Jakarta_Sans']">
      {/* Header */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl">
        <div className="bg-white/60 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-full flex justify-between items-center shadow-xl">
          <div className="font-bold tracking-tighter text-[#2E4036] text-lg">GOLDSMITH</div>
          <button 
            onClick={() => navigate('/')}
            className="text-sm font-medium text-[#1A1A1A]/60 hover:text-[#CC5833] transition-colors"
          >
            Back to Site
          </button>
        </div>
      </nav>

      {/* Results Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Score Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="#2E4036"
                    strokeWidth="8"
                    opacity="0.1"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="#CC5833"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${score * 2.83} 283`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <span className="text-6xl md:text-7xl font-bold text-[#2E4036]">{score}</span>
                    <span className="text-2xl text-[#1A1A1A]/40">/100</span>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2E4036] mb-4">
              {recommendation.title}
            </h1>
            <p className="text-xl text-[#1A1A1A]/60 max-w-2xl mx-auto">
              {recommendation.description}
            </p>
          </div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#1A1A1A]/5">
                <div className="w-10 h-10 bg-[#CC5833]/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-[#CC5833] font-bold">{index + 1}</span>
                </div>
                <p className="text-[#1A1A1A]/80 leading-relaxed">{insight}</p>
              </div>
            ))}
            
            {/* Potential Savings Card */}
            <div className="bg-[#2E4036] p-6 md:p-8 rounded-2xl text-white">
              <div className="text-[#CC5833] font-mono text-sm uppercase tracking-widest mb-2">Potential Savings</div>
              <div className="text-5xl md:text-6xl font-bold mb-2">{hoursSaved}</div>
              <div className="text-white/70">hours per week</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 text-center shadow-xl border border-[#1A1A1A]/5">
            <div className="inline-block bg-[#CC5833]/10 text-[#CC5833] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
              Next Step
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#2E4036] mb-6">
              {recommendation.cta}
            </h2>
            <p className="text-lg text-[#1A1A1A]/60 mb-8 max-w-xl mx-auto">
              In 20 minutes, we'll map your workflows and identify the highest-impact automations for your business.
            </p>
            
            {/* Calendar Embed Placeholder */}
            <div className="bg-[#F2F0E9] rounded-2xl p-8 mb-8 border-2 border-dashed border-[#2E4036]/20">
              <p className="text-[#1A1A1A]/60 mb-4">Calendar integration goes here</p>
              <p className="text-sm text-[#1A1A1A]/40">(Connect your Calendly, SavvyCal, or Cal.com)</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:connor@goldsmithgrowth.com?subject=Automation Strategy Call Request"
                className="inline-flex items-center justify-center gap-2 bg-[#2E4036] text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform"
              >
                Book via Email
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button 
                onClick={() => navigate('/scan')}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#2E4036] px-8 py-4 rounded-full text-lg font-bold border-2 border-[#2E4036]/20 hover:border-[#2E4036] transition-colors"
              >
                Retake Assessment
              </button>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="mt-16 text-center">
            <p className="text-[#1A1A1A]/40 text-sm mb-4">Trusted by operations leaders at</p>
            <div className="flex justify-center gap-8 opacity-40">
              <span className="text-lg font-bold text-[#2E4036]">ACME Corp</span>
              <span className="text-lg font-bold text-[#2E4036]">Zenith Inc</span>
              <span className="text-lg font-bold text-[#2E4036]">Apex Co</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanResults;