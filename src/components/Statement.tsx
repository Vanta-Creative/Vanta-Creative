import React from 'react';
import { Eye, Shield, Target, Sparkles } from 'lucide-react';

export const Statement: React.FC = () => {
  const pillars = [
    {
      number: "01",
      title: "High-Discipline Art Direction",
      desc: "We treat digital social units with the aesthetic rigor of high-fashion print monographs. Tactile lighting, authentic materiality, and deliberate negative space give your brand instant authority."
    },
    {
      number: "02",
      title: "Direct-Response Cognitive Clarity",
      desc: "Beauty without conversion is vanity. Every visual hierarchy is tuned to arrest high-velocity thumbs within 150 milliseconds, communicating product value before the scroll resumes."
    },
    {
      number: "03",
      title: "Format-Native Screen Geometry",
      desc: "We never stretch or crop assets lazily. We compose deliberately for 4:5 Feed real estate, full-bleed 9:16 Story immersion, and multi-slide carousel rhythm."
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-[#181818] border-b border-[#303030]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-widest text-[#C6A779] font-medium mb-3">
              The Studio Standard
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase font-display text-[#F5F5F5] tracking-tight leading-tight">
              Why most social creative fails:
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-lg sm:text-xl text-[#F5F5F5] leading-relaxed mb-6 font-light">
              Most brands treat social media design as a high-volume assembly line of generic templates, 
              loud color badges, and disposable banners. In an attention economy where consumers scroll 
              past hundreds of posts every minute, mediocre design isn't just ineffective—it actively erodes brand equity.
            </p>
            <p className="text-base text-[#A5A5A5] leading-relaxed">
              VANTA CREATIVE operates on a different frequency. We bridge the gap between uncompromising 
              creative art direction and commercial performance, engineering social graphics and ad creatives that 
              demand respect, elevate customer perception, and generate measurable commercial momentum.
            </p>
          </div>
        </div>

        {/* 3 Human Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#303030]">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="flex flex-col justify-between">
              <div>
                <div className="text-sm font-mono text-[#C6A779] mb-4">
                  [{pillar.number}]
                </div>
                <h3 className="text-xl font-bold font-display text-[#F5F5F5] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#A5A5A5] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
