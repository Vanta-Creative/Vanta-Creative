import React, { useState } from 'react';
import { ArrowUpRight, Eye, Info } from 'lucide-react';
import { CAMPAIGNS, Campaign, CampaignAsset, CONCEPT_DISCLAIMER } from '../data/campaigns';
import { PortfolioImage } from './PortfolioImage';

interface CaseStudySectionProps {
  onSelectCampaign: (campaignId: string) => void;
  onSelectAsset: (asset: CampaignAsset) => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({
  onSelectCampaign,
  onSelectAsset
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'aurelle-skin' | 'brew-theory' | 'offgrid'>('all');
  const [formatFilter, setFormatFilter] = useState<'all' | '4:5 Feed' | '1:1 Square' | '9:16 Story'>('all');

  const filteredCampaigns = activeFilter === 'all'
    ? CAMPAIGNS
    : CAMPAIGNS.filter((c) => c.id === activeFilter);

  return (
    <section id="work" className="py-16 sm:py-24 bg-[#101010] border-b border-[#303030] overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C6A779] font-medium mb-3">
              Concept Projects · Creative Demonstrations
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display text-[#F5F5F5] tracking-tight">
              Demonstration Portfolio.
            </h2>
          </div>

          <div className="text-sm text-[#A5A5A5] max-w-md">
            Explore our independently developed creative concepts across beauty, coffee, and streetwear. 
            Each project demonstrates our art direction, typography, and format-native screen geometry.
          </div>
        </div>

        {/* Global Concept Disclaimer Banner */}
        <div className="p-4 sm:p-5 bg-[#161616] border border-[#2c2c2c] rounded-sm mb-12 flex items-start gap-3.5">
          <Info className="w-4 h-4 text-[#C6A779] shrink-0 mt-0.5" />
          <div className="text-xs text-[#A5A5A5] leading-relaxed">
            <strong className="text-[#F5F5F5] font-semibold block mb-0.5">Concept Project Notice:</strong>
            {CONCEPT_DISCLAIMER}
          </div>
        </div>

        {/* Interactive Filter Bars */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-2 bg-[#181818] border border-[#282828] rounded-sm mb-12 sm:mb-16 w-full">
          {/* Client Filter */}
          <div className="flex flex-wrap items-center gap-1 w-full sm:w-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#C6A779] text-[#101010]'
                  : 'text-[#A5A5A5] hover:text-[#F5F5F5] hover:bg-[#202020]'
              }`}
            >
              All Concepts (9)
            </button>
            <button
              onClick={() => setActiveFilter('aurelle-skin')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                activeFilter === 'aurelle-skin'
                  ? 'bg-[#C6A779] text-[#101010]'
                  : 'text-[#A5A5A5] hover:text-[#F5F5F5] hover:bg-[#202020]'
              }`}
            >
              Aurelle Skin
            </button>
            <button
              onClick={() => setActiveFilter('brew-theory')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                activeFilter === 'brew-theory'
                  ? 'bg-[#C6A779] text-[#101010]'
                  : 'text-[#A5A5A5] hover:text-[#F5F5F5] hover:bg-[#202020]'
              }`}
            >
              Brew Theory
            </button>
            <button
              onClick={() => setActiveFilter('offgrid')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                activeFilter === 'offgrid'
                  ? 'bg-[#C6A779] text-[#101010]'
                  : 'text-[#A5A5A5] hover:text-[#F5F5F5] hover:bg-[#202020]'
              }`}
            >
              OFFGRID
            </button>
          </div>

          {/* Format Filter */}
          <div className="flex items-center gap-2 text-xs text-[#A5A5A5]">
            <span>Format:</span>
            <select
              value={formatFilter}
              onChange={(e) => setFormatFilter(e.target.value as any)}
              className="bg-[#101010] border border-[#303030] text-[#F5F5F5] text-xs px-2.5 py-1 rounded-xs focus:outline-none focus:border-[#C6A779] cursor-pointer"
            >
              <option value="all">All Formats</option>
              <option value="4:5 Feed">4:5 Feed (Portrait)</option>
              <option value="1:1 Square">1:1 Square Feed</option>
              <option value="9:16 Story">9:16 Story (Vertical)</option>
            </select>
          </div>
        </div>

        {/* Campaign Iteration */}
        <div className="space-y-20 sm:space-y-28 w-full">
          {filteredCampaigns.map((camp, cIdx) => {
            const visibleAssets = formatFilter === 'all'
              ? camp.assets
              : camp.assets.filter((a) => a.format === formatFilter);

            if (visibleAssets.length === 0) return null;

            return (
              <div key={camp.id} id={`case-${camp.id}`} className="scroll-mt-32 w-full">
                {/* Campaign Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 mb-8 border-b border-[#262626]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 text-xs uppercase tracking-widest text-[#C6A779] font-medium mb-2">
                      <span className="bg-[#C6A779] text-[#101010] font-bold px-2 py-0.5 text-[10px] rounded-2xs">
                        CONCEPT PROJECT
                      </span>
                      <span aria-hidden="true" className="text-[#303030]">/</span>
                      <span>{camp.category}</span>
                      <span aria-hidden="true" className="text-[#303030]">·</span>
                      <span>0{cIdx + 1}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase font-display text-[#F5F5F5] tracking-tight">
                      {camp.client}
                    </h3>
                    <p className="text-sm sm:text-base text-[#A5A5A5] mt-1 max-w-2xl">
                      {camp.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => onSelectCampaign(camp.id)}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] bg-[#181818] hover:bg-[#202020] border border-[#303030] hover:border-[#C6A779] rounded-sm transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Explore Concept Brief</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A779]" />
                    </button>
                  </div>
                </div>

                {/* Concept Design Specifications Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#141414] border border-[#222222] rounded-sm mb-8 w-full">
                  {camp.conceptSpecs.map((spec, sIdx) => (
                    <div key={sIdx}>
                      <div className="text-[11px] font-medium text-[#C6A779] uppercase tracking-wider mb-0.5">
                        {spec.label}
                      </div>
                      <div className="text-sm sm:text-base font-bold font-display text-[#F5F5F5]">
                        {spec.value}
                      </div>
                      <div className="text-[10px] text-[#A5A5A5]">
                        {spec.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual Assets Grid - Stacks vertically on mobile (grid-cols-1) without horizontal scroll */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
                  {visibleAssets.map((asset) => {
                    return (
                      <div
                        key={asset.id}
                        className="group relative bg-[#181818] border border-[#262626] hover:border-[#C6A779] transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between w-full max-w-full"
                      >
                        {/* Clickable Image wrapper with guaranteed responsive height & fallback */}
                        <div
                          onClick={() => onSelectAsset(asset)}
                          className="relative w-full max-w-full overflow-hidden bg-[#101010] cursor-pointer block shrink-0"
                        >
                          <PortfolioImage
                            src={asset.src}
                            alt={asset.title}
                            format={asset.format}
                            className="transition-transform duration-700 ease-out group-hover:scale-105"
                          />

                          {/* Hover Overlay with Lightbox indicator */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
                            <span className="px-3 py-1.5 bg-[#101010]/90 text-[#F5F5F5] text-xs font-semibold rounded-xs border border-[#303030] flex items-center gap-1.5 shadow-lg">
                              <Eye className="w-3.5 h-3.5 text-[#C6A779]" />
                              Inspect Visual
                            </span>
                          </div>

                          {/* Top Format Badge */}
                          <div className="absolute top-3 right-3 bg-[#101010]/90 backdrop-blur-sm text-[10px] text-[#F5F5F5] px-2 py-0.5 font-mono border border-[#303030] z-10 pointer-events-none">
                            {asset.format}
                          </div>
                        </div>

                        {/* Caption & Metadata */}
                        <div className="p-5 flex-1 flex flex-col justify-between w-full">
                          <div>
                            <div className="text-[10px] uppercase tracking-wider text-[#C6A779] font-medium mb-1">
                              {asset.role}
                            </div>
                            <h4 className="text-base font-bold text-[#F5F5F5] font-display mb-1.5">
                              {asset.title}
                            </h4>
                            <p className="text-xs text-[#A5A5A5] leading-relaxed">
                              {asset.caption}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-[#222222] flex items-center justify-between text-[11px] text-[#A5A5A5]">
                            <span className="font-mono text-[10px] text-[#888888]">CONCEPT DESIGN</span>
                            <button
                              onClick={() => onSelectAsset(asset)}
                              className="text-[#C6A779] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                            >
                              <span>Art Direction Notes</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
