import React from 'react';
import { Compass, Palette, Sparkles, RefreshCw } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Visual Diagnosis & Opportunity Audit",
      timeline: "Days 1–2",
      description: "We audit your current ad accounts, organic profiles, and closest competitors. We identify where current creatives are blending in, dropping thumb attention, or fatiguing your audience.",
      outputs: ["Creative audit report", "Competitor visual teardown", "Core hook hypotheses"]
    },
    {
      num: "02",
      title: "Art Direction & Strategic Framework",
      timeline: "Days 3–4",
      description: "Before rendering final pixels, we establish the tactile lighting moodboards, bespoke typography pairings, and layout safe zones that will govern your visual narrative.",
      outputs: ["Moodboards & color scripts", "Typography system lockup", "Format composition grids"]
    },
    {
      num: "03",
      title: "High-Craft Production Sprint",
      timeline: "Days 5–8",
      description: "Our senior design team executes pixel-perfect static and motion assets. Every product shadow, headline kerning, and micro-texture is refined with uncompromising precision.",
      outputs: ["Full asset package (4:5, 9:16, 1:1)", "Native editable Figma/production files", "Export-optimized formats"]
    },
    {
      num: "04",
      title: "Performance Review & Iteration",
      timeline: "Ongoing",
      description: "For retainer and sprint partners, we review creative metrics (CTR, thumb-stop rate, ROAS) to iterate on winning concepts and rapidly produce variant testing angles.",
      outputs: ["Bi-weekly performance review", "Winning hook variations", "Next sprint roadmap"]
    }
  ];

  return (
    <section className="py-24 bg-[#141414] border-b border-[#303030]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C6A779] font-medium mb-3">
              Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display text-[#F5F5F5] tracking-tight">
              The Creative Sprint.
            </h2>
          </div>

          <p className="text-sm text-[#A5A5A5] max-w-md">
            A disciplined, four-phase creative engine designed for high velocity without sacrificing a 
            single millimeter of visual craft.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#181818] border border-[#262626] rounded-sm p-6 flex flex-col justify-between hover:border-[#3a3a3a] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-6">
                  <span className="text-lg font-bold text-[#C6A779] font-display">
                    {step.num}
                  </span>
                  <span className="text-[11px] text-[#A5A5A5] border border-[#262626] px-2 py-0.5 rounded-xs">
                    {step.timeline}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-[#F5F5F5] mb-3">
                  {step.title}
                </h3>

                <p className="text-xs text-[#A5A5A5] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#222222]">
                <div className="text-[10px] uppercase tracking-wider text-[#C6A779] font-semibold mb-2">
                  Key Outputs
                </div>
                <div className="space-y-1">
                  {step.outputs.map((out, oIdx) => (
                    <div key={oIdx} className="text-[11px] text-[#A5A5A5] flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#C6A779]" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
