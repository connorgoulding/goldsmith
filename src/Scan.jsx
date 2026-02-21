import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AutomationScan = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    hours: null,
    tools: null,
    frustration: null
  });

  const questions = [
    {
      id: 'hours',
      question: 'How many hours per week does your team spend on repetitive tasks?',
      subtitle: 'Data entry, reporting, status updates, manual follow-ups...',
      options: [
        { value: 1, label: 'Less than 5 hours', score: 25 },
        { value: 2, label: '5-15 hours', score: 50 },
        { value: 3, label: '15-25 hours', score: 75 },
        { value: 4, label: '25+ hours', score: 100 }
      ]
    },
    {
      id: 'tools',
      question: 'How many different software tools does your team use daily?',
      subtitle: 'CRM, project management, spreadsheets, email, chat...',
      options: [
        { value: 1, label: '1-3 tools', score: 25 },
        { value: 2, label: '4-6 tools', score: 50 },
        { value: 3, label: '7-10 tools', score: 75 },
        { value: 4, label: '10+ tools', score: 100 }
      ]
    },
    {
      id: 'frustration',
      question: 'What\'s your biggest operational pain point?',
      subtitle: 'Choose the one that keeps you up at night',
      options: [
        { value: 'data', label: 'Data lives in too many places', score: 80 },
        { value: 'manual', label: 'Too much manual work', score: 90 },
        { value: 'visibility', label: 'No visibility into what\'s happening', score: 70 },
        { value: 'scale', label: 'Can\'t scale without hiring more people', score: 100 }
      ]
    }
  ];

  const handleSelect = (value) => {
    const questionId = questions[currentStep].id;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    } else {
      setTimeout(() => navigate('/results', { state: { answers: { ...answers, [questionId]: value } } }), 300);
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-[#F2F0E9] text-[#1A1A1A] font-['Plus_Jakarta_Sans']">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#2E4036]/10 z-50">
        <div 
          className="h-full bg-[#CC5833] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl">
        <div className="bg-white/60 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-full flex justify-between items-center shadow-xl">
          <div className="font-bold tracking-tighter text-[#2E4036] text-lg">GOLDSMITH</div>
          <div className="text-sm font-medium text-[#1A1A1A]/60">
            Question {currentStep + 1} of {questions.length}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-6 pt-32 pb-20">
        <div className="max-w-2xl w-full">
          {/* Question */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2E4036] mb-4 leading-tight">
              {questions[currentStep].question}
            </h1>
            <p className="text-lg text-[#1A1A1A]/60">
              {questions[currentStep].subtitle}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {questions[currentStep].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option.value)}
                className="w-full text-left p-6 md:p-8 bg-white rounded-2xl border-2 border-transparent hover:border-[#CC5833] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl md:text-2xl font-medium text-[#1A1A1A] group-hover:text-[#CC5833] transition-colors">
                    {option.label}
                  </span>
                  <div className="w-8 h-8 rounded-full border-2 border-[#2E4036]/20 group-hover:border-[#CC5833] group-hover:bg-[#CC5833] flex items-center justify-center transition-all">
                    <svg className="w-4 h-4 text-transparent group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Back Button */}
          {currentStep > 0 && (
            <button
              onClick={() => {
                setCurrentStep(currentStep - 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-8 text-[#1A1A1A]/60 hover:text-[#CC5833] font-medium transition-colors"
            >
              ← Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AutomationScan;