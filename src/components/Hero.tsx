import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { CAMPAIGNS } from '../data/campaigns';
import { PortfolioImage } from './PortfolioImage';

interface HeroProps {
  onSelectCampaign: (campaignId: string) => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectCampaign, onStartProject }) => {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const activeCampaign = CAMPAIGNS[activePreviewIndex];

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden border-b border-[#303030] w-full">
      {/* Subtle architectural grid pattern in background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Editorial Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 mb-8 border-b border-[#222222]">
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-[#A5A5A5]">
            <span className="text-[#C6A779] font-semibold">VANTA CREATIVE</span>
            <span aria-hidden="true" className="text-[#303030]">/</span>
            <span>New Creative Design Studio</span>
          </div>

          <div className="text-xs text-[#A5A5A5] flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C6A779]" />
            <span>Open for new client briefs & collaborative projects</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start w-full">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-between w-full">
            <div>
              {/* Primary Tagline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black uppercase tracking-tight text-[#F5F5F5] font-display leading-[1.08] text-balance mb-6">
                WE MAKE BRANDS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-[#E8E8E8] to-[#C6A779]">
                  IMPOSSIBLE TO IGNORE.
                </span>
              </h1>

              {/* Supporting Statement */}
              <p className="text-base sm:text-xl font-normal text-[#C6A779] tracking-wide mb-5">
                Strategic creativity. Powerful visuals. Social media that makes an impression.
              </p>

              {/* Editorial Description */}
              <p className="text-sm sm:text-base text-[#A5A5A5] leading-relaxed max-w-xl mb-10">
                VANTA CREATIVE is a new contemporary creative studio specializing in Social Media Creatives, 
                Advertising Design, Brand Visuals and Campaign Design. We craft arresting visual assets 
                engineered to capture attention and elevate your brand on digital feeds.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <a
                  href="#work"
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#101010] bg-[#C6A779] hover:bg-[#D7BC91] rounded-sm transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-2 shadow-lg shadow-[#C6A779]/10 active:scale-95 cursor-pointer"
                >
                  <span>Explore Concept Work</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#budget"
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] bg-[#181818] hover:bg-[#202020] border border-[#303030] hover:border-[#C6A779] rounded-sm transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
                >
                  <span>Let's Find The Right Fit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A779]" />
                </a>
              </div>
            </div>

            {/* Campaign Switcher Navigation */}
            <div className="pt-8 border-t border-[#222222] w-full">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#A5A5A5] mb-3">
                <span>Demonstration Concept Projects</span>
                <span className="text-[10px] text-[#C6A779] font-mono">INDEPENDENT EXPLORATIONS</span>
              </div>
              <div className="grid grid-cols-3 gap-2 w-full">
                {CAMPAIGNS.map((camp, idx) => {
                  const isActive = idx === activePreviewIndex;
                  return (
                    <button
                      key={camp.id}
                      onClick={() => setActivePreviewIndex(idx)}
                      className={`text-left p-2.5 sm:p-3 rounded-sm border transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#181818] border-[#C6A779] text-[#F5F5F5]'
                          : 'bg-[#101010] border-[#222222] text-[#A5A5A5] hover:border-[#303030] hover:text-[#F5F5F5]'
                      }`}
                    >
                      <div className="text-[10px] tracking-widest uppercase text-[#C6A779] mb-1">
                        0{idx + 1} · CONCEPT
                      </div>
                      <div className="text-xs font-bold truncate font-display">
                        {camp.client}
                      </div>
                      <div className="text-[11px] text-[#A5A5A5] truncate hidden sm:block">
                        {camp.category}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Concept Showcase Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-[#181818] border border-[#303030] rounded-sm overflow-hidden p-2.5 sm:p-3 shadow-2xl group w-full">
              {/* Asset Container with guaranteed mobile responsiveness */}
              <div className="relative w-full max-w-full overflow-hidden bg-[#101010] rounded-sm">
                <PortfolioImage
                  src={activeCampaign.assets[0].src}
                  alt={activeCampaign.assets[0].title}
                  format={activeCampaign.assets[0].format}
                  priority={true}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Gradient Scrim for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/20 to-transparent pointer-events-none z-10" />

                {/* Placement badge on top right */}
                <div className="absolute top-4 right-4 bg-[#101010]/90 backdrop-blur-md border border-[#303030] text-[#F5F5F5] text-[10px] px-2.5 py-1 font-mono uppercase tracking-wider z-20">
                  {activeCampaign.assets[0].format}
                </div>

                {/* Concept project banner on top left */}
                <div className="absolute top-4 left-4 bg-[#C6A779] text-[#101010] text-[10px] px-2.5 py-1 font-bold uppercase tracking-wider z-20">
                  CONCEPT PROJECT
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-left z-20">
                  <div className="text-xs uppercase tracking-widest text-[#C6A779] font-medium mb-1.5">
                    {activeCampaign.client} · Design Exploration
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-[#F5F5F5] font-display leading-tight mb-2">
                    {activeCampaign.assets[0].title}
                  </h3>
                  <p className="text-xs text-[#A5A5A5] line-clamp-2 mb-4 leading-relaxed">
                    {activeCampaign.assets[0].caption}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#303030]/80">
                    <span className="text-xs text-[#A5A5A5]">
                      Focus: <strong className="text-[#F5F5F5] font-medium">{activeCampaign.conceptSpecs[1].value}</strong>
                    </span>
                    <button
                      onClick={() => onSelectCampaign(activeCampaign.id)}
                      className="text-xs text-[#F5F5F5] hover:text-[#C6A779] transition-colors flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <span>Explore Concept</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Thumbnails of companion assets below preview */}
              <div className="grid grid-cols-3 gap-2 mt-2 w-full">
                {activeCampaign.assets.map((asset, aIdx) => (
                  <div 
                    key={asset.id} 
                    className="relative w-full overflow-hidden bg-[#101010] border border-[#262626] rounded-xs cursor-pointer group/thumb"
                    onClick={() => onSelectCampaign(activeCampaign.id)}
                  >
                    <PortfolioImage
                      src={asset.src}
                      alt={asset.title}
                      aspectRatio="1/1"
                      className="opacity-80 group-hover/thumb:opacity-100 transition-opacity"
                    />
                    <div className="absolute bottom-1 left-1 text-[9px] text-[#A5A5A5] bg-black/80 px-1 py-0.5 z-10 font-mono">
                      0{aIdx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Specializations Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#303030] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          <div>
            <div className="text-xs font-mono text-[#C6A779] mb-1.5">[01] SPECIALIZATION</div>
            <div className="text-base sm:text-lg font-bold text-[#F5F5F5] font-display tracking-tight mb-1">
              Social Media Creatives
            </div>
            <div className="text-xs text-[#A5A5A5] leading-relaxed">
              Arresting feed posts, carousels and story layouts designed natively for mobile screen attention.
            </div>
          </div>

          <div>
            <div className="text-xs font-mono text-[#C6A779] mb-1.5">[02] SPECIALIZATION</div>
            <div className="text-base sm:text-lg font-bold text-[#F5F5F5] font-display tracking-tight mb-1">
              Advertising Design
            </div>
            <div className="text-xs text-[#A5A5A5] leading-relaxed">
              Conversion-focused static ad creatives, hook variations and visual hierarchy built for digital campaigns.
            </div>
          </div>

          <div>
            <div className="text-xs font-mono text-[#C6A779] mb-1.5">[03] SPECIALIZATION</div>
            <div className="text-base sm:text-lg font-bold text-[#F5F5F5] font-display tracking-tight mb-1">
              Brand Visuals
            </div>
            <div className="text-xs text-[#A5A5A5] leading-relaxed">
              Digital color treatments, typography lockups and screen-first graphic identities for modern businesses.
            </div>
          </div>

          <div>
            <div className="text-xs font-mono text-[#C6A779] mb-1.5">[04] SPECIALIZATION</div>
            <div className="text-base sm:text-lg font-bold text-[#F5F5F5] font-display tracking-tight mb-1">
              Campaign Design
            </div>
            <div className="text-xs text-[#A5A5A5] leading-relaxed">
              End-to-end visual suites for product releases, seasonal moments, drops and announcements.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
