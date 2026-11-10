import React, { useState } from 'react';
import { ArrowUpRight, Check, Layers, Sparkles } from 'lucide-react';
import { CAPABILITIES, Capability } from '../data/capabilities';

interface CapabilitiesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  onSelectServiceForEnquiry
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="capabilities" className="py-24 bg-[#101010] border-b border-[#303030]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C6A779] font-medium mb-3">
              Design Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display text-[#F5F5F5] tracking-tight">
              Specialized Design Practice.
            </h2>
          </div>

          <p className="text-sm text-[#A5A5A5] max-w-md">
            We focus on four core creative disciplines: Social Media Creatives, Advertising Design, 
            Brand Visuals, and Campaign Design, alongside flexible ongoing collaboration.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const isFeatured = idx === 0 || idx === 4;
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={cap.number}
                className={`relative bg-[#181818] border rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                } ${
                  isExpanded ? 'border-[#C6A779]' : 'border-[#262626] hover:border-[#3a3a3a]'
                }`}
              >
                <div>
                  {/* Top Editorial Number & Formats */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#A5A5A5] mb-4">
                    <span className="text-[#C6A779] font-bold">[{cap.number}]</span>
                    <span className="text-[11px] text-[#888888]">SPECIALIZATION</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F5F5F5] mb-3">
                    {cap.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed mb-6">
                    {cap.shortDesc}
                  </p>

                  {/* Formats Supported */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cap.formats.map((fmt, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[10px] font-mono text-[#E0E0E0] bg-[#101010] border border-[#2b2b2b] px-2 py-0.5"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Deliverables */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-[#262626] space-y-4 mb-6 animate-in fade-in duration-200">
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-[#C6A779] font-semibold mb-2">
                          Deliverables & Scope:
                        </div>
                        <ul className="space-y-1.5">
                          {cap.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs text-[#F5F5F5]">
                              <Check className="w-3.5 h-3.5 text-[#C6A779] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-[#222222]">
                        <span className="text-xs text-[#A5A5A5]">
                          <strong className="text-[#F5F5F5]">Suited for:</strong> {cap.bestFor}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-[#242424] flex items-center justify-between gap-4">
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="text-xs text-[#A5A5A5] hover:text-[#F5F5F5] transition-colors cursor-pointer"
                  >
                    {isExpanded ? 'Hide Deliverables' : 'Inspect Deliverables'}
                  </button>

                  <button
                    onClick={() => onSelectServiceForEnquiry(cap.title)}
                    className="text-xs text-[#C6A779] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                  >
                    <span>Discuss This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
