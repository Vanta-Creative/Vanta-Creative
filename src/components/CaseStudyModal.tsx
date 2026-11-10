import React from 'react';
import { X, ArrowUpRight, Check, Info } from 'lucide-react';
import { Campaign, CampaignAsset, CONCEPT_DISCLAIMER } from '../data/campaigns';
import { PortfolioImage } from './PortfolioImage';

interface CaseStudyModalProps {
  campaign: Campaign | null;
  onClose: () => void;
  onSelectAsset: (asset: CampaignAsset) => void;
  onStartProject: (initialService?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  campaign,
  onClose,
  onSelectAsset,
  onStartProject
}) => {
  if (!campaign) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#141414] border border-[#303030] rounded-sm p-5 sm:p-10 my-6 sm:my-8 shadow-2xl text-left max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#A5A5A5] hover:text-[#F5F5F5] rounded-sm bg-[#1a1a1a] border border-[#303030] transition-colors cursor-pointer z-30"
          aria-label="Close Concept Overview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Case Study Header */}
        <div className="mb-6 sm:mb-8 pb-6 border-b border-[#262626] pr-10">
          <div className="flex flex-wrap items-center gap-2.5 text-xs uppercase tracking-widest text-[#A5A5A5] mb-3">
            <span className="bg-[#C6A779] text-[#101010] font-bold px-2 py-0.5 text-[10px] rounded-2xs">
              CONCEPT PROJECT
            </span>
            <span aria-hidden="true" className="text-[#303030]">/</span>
            <span>{campaign.category}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase font-display text-[#F5F5F5] tracking-tight mb-3">
            {campaign.client}
          </h2>

          <p className="text-base sm:text-xl text-[#C6A779] font-normal leading-relaxed max-w-3xl">
            {campaign.tagline}
          </p>
        </div>

        {/* Concept Project Disclaimer */}
        <div className="p-4 bg-[#181818] border border-[#303030] rounded-sm mb-8 sm:mb-10 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#C6A779] shrink-0 mt-0.5" />
          <p className="text-xs text-[#A5A5A5] leading-relaxed">
            <strong className="text-[#F5F5F5]">Demonstration Disclaimer: </strong>
            {CONCEPT_DISCLAIMER}
          </p>
        </div>

        {/* Concept Design Specifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 bg-[#181818] border border-[#2a2a2a] rounded-sm mb-10 sm:mb-12">
          {campaign.conceptSpecs.map((spec, idx) => (
            <div key={idx}>
              <div className="text-[10px] sm:text-[11px] font-semibold text-[#C6A779] uppercase tracking-wider mb-1">
                {spec.label}
              </div>
              <div className="text-sm sm:text-lg font-bold text-[#F5F5F5] font-display mb-0.5">
                {spec.value}
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#A5A5A5]">
                {spec.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Campaign Assets Showcase */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs uppercase tracking-widest text-[#A5A5A5] font-semibold">
              Demonstration Deliverables & Visual Assets
            </h3>
            <span className="text-xs text-[#C6A779] font-mono">
              3 High-Resolution Pieces
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campaign.assets.map((asset) => (
              <div
                key={asset.id}
                onClick={() => onSelectAsset(asset)}
                className="group relative bg-[#181818] border border-[#2a2a2a] hover:border-[#C6A779] transition-all duration-300 rounded-sm overflow-hidden cursor-pointer flex flex-col w-full"
              >
                <div className="relative w-full max-w-full overflow-hidden bg-[#101010] block shrink-0">
                  <PortfolioImage
                    src={asset.src}
                    alt={asset.title}
                    format={asset.format}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-[#101010]/80 backdrop-blur-sm text-[10px] text-[#F5F5F5] px-2 py-0.5 font-mono z-10 pointer-events-none">
                    {asset.format}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between w-full">
                  <div>
                    <h4 className="text-sm font-bold text-[#F5F5F5] font-display mb-1 group-hover:text-[#C6A779] transition-colors">
                      {asset.title}
                    </h4>
                    <p className="text-xs text-[#A5A5A5] line-clamp-2 leading-relaxed">
                      {asset.caption}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#222222] text-[11px] text-[#C6A779] flex items-center justify-between">
                    <span>{asset.role}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Narrative: Challenge & Creative Strategy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 sm:mb-12">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#C6A779] font-semibold mb-2">
                Concept Background & Intent
              </h4>
              <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed">
                {campaign.overview}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#C6A779] font-semibold mb-2">
                Creative Direction & Strategy
              </h4>
              <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed">
                {campaign.creativeSolution}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            {/* Color Palette */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#C6A779] font-semibold mb-3">
                Concept Color Palette
              </h4>
              <div className="grid grid-cols-4 gap-2">
                {campaign.palette.map((hex, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div
                      className="h-10 sm:h-12 w-full rounded-xs border border-[#303030]"
                      style={{ backgroundColor: hex }}
                    />
                    <span className="text-[10px] font-mono text-[#A5A5A5] uppercase">
                      {hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#C6A779] font-semibold mb-3">
                Creative Deliverables Designed
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A5A5A5]">
                {campaign.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C6A779] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-[#F5F5F5]">
              Interested in a creative direction like this for your brand?
            </div>
            <div className="text-xs text-[#A5A5A5]">
              We work collaboratively with businesses of all sizes to find an approach that fits your budget.
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onStartProject(`Concept Style: ${campaign.client}`);
            }}
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#101010] bg-[#C6A779] hover:bg-[#D7BC91] rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span>Discuss This Style For Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
