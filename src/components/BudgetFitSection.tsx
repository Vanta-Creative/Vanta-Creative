import React, { useState } from 'react';
import { ArrowDown, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

interface BudgetFitSectionProps {
  onSelectBudget: (budget: string) => void;
}

export const BudgetFitSection: React.FC<BudgetFitSectionProps> = ({ onSelectBudget }) => {
  const [selectedBudget, setSelectedBudget] = useState<string>('₹2,500–₹5,000');

  const budgetOptions = [
    {
      label: 'Under ₹1,000',
      description: 'Ideal for single asset explorations, quick hook tests, or initial visual concepts.'
    },
    {
      label: '₹1,000–₹2,500',
      description: 'Great for focused creative bundles, social ad static pairs, or basic feed layouts.'
    },
    {
      label: '₹2,500–₹5,000',
      description: 'Suited for multi-format campaign packs, curated carousels, and complete story suites.'
    },
    {
      label: '₹5,000+',
      description: 'Comprehensive visual directions, end-to-end launch asset suites, and recurring creative packages.'
    },
    {
      label: 'Not sure yet — let\'s discuss',
      description: 'Have a unique brief or exploring what is possible? Let\'s talk through options together.'
    }
  ];

  const handleSelectAndScroll = (budget: string) => {
    setSelectedBudget(budget);
    onSelectBudget(budget);
    const formElement = document.getElementById('enquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="budget" className="py-24 bg-[#101010] border-b border-[#303030]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-[#C6A779] font-medium mb-3">
            Collaboration & Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display text-[#F5F5F5] tracking-tight mb-4">
            LET'S FIND THE RIGHT FIT.
          </h2>
          <p className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed">
            Every project is different. Tell us what you need and what budget you're comfortable working with. 
            We'll discuss the scope, explore the possibilities and find an approach that works for both sides.
          </p>
        </div>

        {/* Budget Brackets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {budgetOptions.map((opt) => {
            const isSelected = selectedBudget === opt.label;
            return (
              <div
                key={opt.label}
                onClick={() => setSelectedBudget(opt.label)}
                className={`p-6 rounded-sm border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#181818] border-[#C6A779] shadow-lg shadow-[#C6A779]/5'
                    : 'bg-[#141414] border-[#262626] hover:border-[#383838]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold font-display text-[#F5F5F5]">
                      {opt.label}
                    </span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-[#C6A779] bg-[#C6A779]' : 'border-[#404040]'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#101010]" />}
                    </div>
                  </div>
                  <p className="text-xs text-[#A5A5A5] leading-relaxed">
                    {opt.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#222222]">
                  <span className="text-[11px] text-[#C6A779] font-medium">
                    {isSelected ? 'Selected preference' : 'Click to select'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Notice & Terms Disclaimer */}
        <div className="p-6 bg-[#161616] border border-[#262626] rounded-sm mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 text-xs text-[#A5A5A5] max-w-2xl">
            <div className="text-[#F5F5F5] font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C6A779] shrink-0" />
              <span>Client Budget Preferences — Not Fixed Prices</span>
            </div>
            <p className="leading-relaxed">
              These options represent client budget preferences, <strong>not fixed VANTA CREATIVE service prices</strong>. 
              Selecting a budget indicates what you are comfortable investing to help guide our discussion. 
              It does not automatically confirm a quotation or project agreement.
            </p>
          </div>

          <button
            onClick={() => handleSelectAndScroll(selectedBudget)}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#101010] bg-[#C6A779] hover:bg-[#D7BC91] rounded-sm transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-2 active:scale-95 shadow-sm shadow-[#C6A779]/20 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DISCUSS YOUR PROJECT</span>
          </button>
        </div>
      </div>
    </section>
  );
};
