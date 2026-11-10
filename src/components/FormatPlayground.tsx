import React, { useState } from 'react';
import { Smartphone, Square, Monitor, CheckCircle, Info } from 'lucide-react';
import { PortfolioImage } from './PortfolioImage';

export const FormatPlayground: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<'4:5' | '9:16' | '1:1'>('9:16');
  const [showSafeZones, setShowSafeZones] = useState(true);

  const formatSpecs = {
    '4:5': {
      title: '4:5 Feed Placement (1080 × 1350)',
      description: 'The definitive feed standard. Commands maximum vertical screen estate on mobile feeds without clipping, driving up to 35% longer dwell times than traditional square posts.',
      aspectClass: 'aspect-[4/5] max-w-[340px]',
      image: '/assets/aistudio/brew-theory-01_c4707cb3.png',
      client: 'Brew Theory',
      placement: 'Instagram & Facebook Primary Feed',
      keyRules: [
        'Safe zone: 100px vertical buffer from top and bottom',
        'Focal anchor positioned in upper two-thirds',
        'Headline legible at 20% scroll velocity'
      ]
    },
    '9:16': {
      title: '9:16 Full-Bleed Story / Reel (1080 × 1920)',
      description: 'Full-screen mobile immersion. Requires strict adherence to platform overlays (creator header, reply pill, sound badge, and action drawer) to preserve visual clarity.',
      aspectClass: 'aspect-[9/16] max-w-[280px]',
      image: '/assets/aistudio/brew-theory-03_e73d77ab.png',
      client: 'Brew Theory',
      placement: 'Instagram Stories, Reels & TikTok Ads',
      keyRules: [
        'Top 220px cleared for profile header and close button',
        'Bottom 340px cleared for reply pill and CTA swipe drawers',
        'Headline centered within the unobstructed optical window'
      ]
    },
    '1:1': {
      title: '1:1 Square Feed & Carousel (1080 × 1080)',
      description: 'The tactile detail anchor. Ideal for multi-slide carousel sequences where swipe pacing and micro-textures reward contemplative scrollers.',
      aspectClass: 'aspect-square max-w-[340px]',
      image: '/assets/aistudio/brew-theory-02_dac1ff80.png',
      client: 'Brew Theory',
      placement: 'Carousel Multi-Slides & Grid Archival',
      keyRules: [
        'Equalized 80px border margins on all four edges',
        'Geometric centering of core hero subject',
        'Direct synergy with companion carousel slides'
      ]
    }
  };

  const current = formatSpecs[selectedFormat];

  return (
    <section className="py-16 sm:py-24 bg-[#141414] border-b border-[#303030] overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
          {/* Left Text & Controls */}
          <div className="lg:col-span-6 w-full">
            <div className="text-xs uppercase tracking-widest text-[#C6A779] font-medium mb-3">
              Platform Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-[#F5F5F5] tracking-tight mb-4">
              Native Geometry for Every Screen.
            </h2>
            <p className="text-sm sm:text-base text-[#A5A5A5] leading-relaxed mb-8">
              We never apply lazy desktop resizing or generic crops. Every campaign asset is architected 
              to live inside the precise safe zones and user-interface constraints of modern social apps, 
              ensuring your brand typography and product heroes are never obscured by platform buttons.
            </p>

            {/* Format Selection Buttons */}
            <div className="space-y-3 mb-8 w-full">
              <div className="text-xs uppercase tracking-wider text-[#A5A5A5]">
                Select Format to Inspect:
              </div>
              <div className="grid grid-cols-3 gap-2 w-full">
                <button
                  onClick={() => setSelectedFormat('9:16')}
                  className={`p-2.5 sm:p-3 text-left rounded-sm border transition-all cursor-pointer ${
                    selectedFormat === '9:16'
                      ? 'bg-[#181818] border-[#C6A779] text-[#F5F5F5]'
                      : 'bg-[#101010] border-[#262626] text-[#A5A5A5] hover:border-[#303030]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <Smartphone className="w-3.5 h-3.5 text-[#C6A779] shrink-0" />
                    <span className="text-xs font-bold font-display">9:16 Story</span>
                  </div>
                  <div className="text-[10px] text-[#A5A5A5]">1080 × 1920</div>
                </button>

                <button
                  onClick={() => setSelectedFormat('4:5')}
                  className={`p-2.5 sm:p-3 text-left rounded-sm border transition-all cursor-pointer ${
                    selectedFormat === '4:5'
                      ? 'bg-[#181818] border-[#C6A779] text-[#F5F5F5]'
                      : 'bg-[#101010] border-[#262626] text-[#A5A5A5] hover:border-[#303030]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <Monitor className="w-3.5 h-3.5 text-[#C6A779] shrink-0" />
                    <span className="text-xs font-bold font-display">4:5 Feed</span>
                  </div>
                  <div className="text-[10px] text-[#A5A5A5]">1080 × 1350</div>
                </button>

                <button
                  onClick={() => setSelectedFormat('1:1')}
                  className={`p-2.5 sm:p-3 text-left rounded-sm border transition-all cursor-pointer ${
                    selectedFormat === '1:1'
                      ? 'bg-[#181818] border-[#C6A779] text-[#F5F5F5]'
                      : 'bg-[#101010] border-[#262626] text-[#A5A5A5] hover:border-[#303030]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <Square className="w-3.5 h-3.5 text-[#C6A779] shrink-0" />
                    <span className="text-xs font-bold font-display">1:1 Square</span>
                  </div>
                  <div className="text-[10px] text-[#A5A5A5]">1080 × 1080</div>
                </button>
              </div>
            </div>

            {/* Spec Details Card */}
            <div className="p-4 sm:p-5 bg-[#101010] border border-[#262626] rounded-sm mb-6 w-full">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-sm font-bold text-[#F5F5F5] font-display">
                  {current.title}
                </h3>
                <span className="text-[11px] text-[#C6A779] font-mono">
                  {current.placement}
                </span>
              </div>
              <p className="text-xs text-[#A5A5A5] leading-relaxed mb-4">
                {current.description}
              </p>

              <div className="space-y-1.5 border-t border-[#222222] pt-3">
                {current.keyRules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#F5F5F5]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C6A779] shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safe Zone Toggle */}
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-xs text-[#A5A5A5] cursor-pointer">
                <input
                  type="checkbox"
                  checked={showSafeZones}
                  onChange={(e) => setShowSafeZones(e.target.checked)}
                  className="rounded-xs border-[#303030] text-[#C6A779] focus:ring-0 bg-[#101010]"
                />
                <span>Highlight UI Safe-Zones & Platform Obstacles</span>
              </label>
            </div>
          </div>

          {/* Right Mobile / Screen Simulator */}
          <div className="lg:col-span-6 flex items-center justify-center w-full">
            <div className="p-4 sm:p-6 bg-[#101010] border border-[#303030] rounded-lg shadow-2xl flex flex-col items-center w-full max-w-sm">
              <div className="text-[11px] font-mono text-[#A5A5A5] mb-3 flex items-center gap-2">
                <span>SIMULATOR:</span>
                <span className="text-[#C6A779] font-semibold">{current.placement}</span>
              </div>

              {/* Simulated Device Frame with PortfolioImage */}
              <div className={`relative ${current.aspectClass} w-full max-w-full overflow-hidden rounded-md border-2 border-[#2c2c2c] bg-black shadow-inner`}>
                <PortfolioImage
                  src={current.image}
                  alt={current.title}
                  format={selectedFormat === '9:16' ? '9:16 Story' : selectedFormat === '1:1' ? '1:1 Square' : '4:5 Feed'}
                  aspectRatio={selectedFormat === '9:16' ? '9/16' : selectedFormat === '1:1' ? '1/1' : '4/5'}
                  priority={true}
                  className="w-full h-full object-cover block"
                />

                {/* Simulated Platform UI Overlays */}
                {showSafeZones && selectedFormat === '9:16' && (
                  <div className="absolute inset-0 pointer-events-none z-20">
                    {/* Top Status Bar & Profile Safe Zone */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#C6A779]/30 border border-[#C6A779]" />
                        <span className="text-[10px] font-semibold text-white">brewtheory</span>
                      </div>
                      <span className="text-[9px] font-mono text-white/70">SAFE ZONE</span>
                    </div>

                    {/* Bottom Action Drawer Safe Zone */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between px-4">
                      <div className="w-36 h-7 rounded-full border border-white/20 bg-white/10 px-3 flex items-center">
                        <span className="text-[9px] text-white/50">Send message...</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-5 h-5 rounded-full bg-white/20" />
                        <div className="w-5 h-5 rounded-full bg-white/20" />
                      </div>
                    </div>

                    {/* Safe Optical Center Guide */}
                    <div className="absolute inset-x-4 top-20 bottom-24 border border-dashed border-[#C6A779]/50 rounded-xs flex items-center justify-center">
                      <span className="text-[9px] font-mono tracking-widest text-[#C6A779] bg-black/70 px-2 py-0.5 rounded-xs">
                        OPTIMAL CONTENT FOCUS WINDOW
                      </span>
                    </div>
                  </div>
                )}

                {showSafeZones && selectedFormat === '4:5' && (
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="absolute inset-4 border border-dashed border-[#C6A779]/50 rounded-xs flex items-center justify-center">
                      <span className="text-[9px] font-mono tracking-widest text-[#C6A779] bg-black/70 px-2 py-0.5 rounded-xs">
                        1080 × 1350 FEED CANVASES
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-[#A5A5A5] mt-4 flex items-center gap-2 text-center">
                <Info className="w-3.5 h-3.5 text-[#C6A779] shrink-0" />
                <span>Concept Project: {current.client} · Designed for native 2026 platform specifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
