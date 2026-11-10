import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, ArrowUpRight } from 'lucide-react';
import { CampaignAsset, CAMPAIGNS } from '../data/campaigns';
import { PortfolioImage } from './PortfolioImage';

interface LightboxProps {
  asset: CampaignAsset | null;
  onClose: () => void;
  onSelectAsset: (asset: CampaignAsset) => void;
  onStartProject: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  asset,
  onClose,
  onSelectAsset,
  onStartProject
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Flatten all assets across all campaigns for next/prev navigation
  const allAssets = CAMPAIGNS.flatMap((c) =>
    c.assets.map((a) => ({ ...a, clientName: c.client, clientCategory: c.category }))
  );

  const currentIndex = asset ? allAssets.findIndex((a) => a.id === asset.id) : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < allAssets.length - 1) {
      onSelectAsset(allAssets[currentIndex + 1]);
    } else {
      onSelectAsset(allAssets[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectAsset(allAssets[currentIndex - 1]);
    } else {
      onSelectAsset(allAssets[allAssets.length - 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!asset) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [asset, currentIndex]);

  if (!asset) return null;

  const currentClient = allAssets[currentIndex]?.clientName || '';
  const currentCategory = allAssets[currentIndex]?.clientCategory || '';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Top Bar Navigation */}
      <div className="fixed top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-30 border-b border-[#222222]/80 bg-[#101010]/90 backdrop-blur-md">
        <div className="flex items-center gap-2 sm:gap-3 text-xs">
          <span className="font-extrabold font-display tracking-widest text-[#F5F5F5] uppercase">
            VANTA / INSPECT
          </span>
          <span className="text-[#303030]" aria-hidden="true">·</span>
          <span className="text-[#C6A779] font-medium">{currentClient}</span>
          <span className="text-[#303030] hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-[#A5A5A5] hidden sm:inline">{asset.aspectRatioLabel}</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 text-[#A5A5A5] hover:text-[#F5F5F5] rounded-sm bg-[#181818] border border-[#303030] transition-colors cursor-pointer hidden sm:block"
            title={isZoomed ? "Reset Zoom" : "Toggle Full View"}
          >
            {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 text-[#A5A5A5] hover:text-[#F5F5F5] rounded-sm bg-[#181818] border border-[#303030] transition-colors cursor-pointer"
            title="Close Lightbox (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area - Scrollable on mobile, flex on desktop */}
      <div className="w-full max-w-6xl min-h-screen lg:min-h-0 lg:h-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 pt-20 pb-10 mx-auto">
        {/* Visual Asset Container */}
        <div className="relative flex-1 flex items-center justify-center w-full min-h-[300px] sm:min-h-[420px] max-h-[65vh] lg:max-h-[82vh]">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-[#101010]/80 hover:bg-[#181818] text-[#F5F5F5] border border-[#303030] transition-all cursor-pointer shadow-lg active:scale-95"
            aria-label="Previous Asset"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-[#101010]/80 hover:bg-[#181818] text-[#F5F5F5] border border-[#303030] transition-all cursor-pointer shadow-lg active:scale-95"
            aria-label="Next Asset"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className={`relative w-full max-w-full flex items-center justify-center overflow-hidden transition-transform duration-300 ${
            isZoomed ? 'scale-110' : ''
          }`}>
            <PortfolioImage
              src={asset.src}
              alt={asset.title}
              format={asset.format}
              objectFit="contain"
              priority={true}
              containerClassName="max-h-[60vh] sm:max-h-[70vh] lg:max-h-[80vh] w-auto max-w-full rounded-sm shadow-2xl border border-[#262626] mx-auto bg-transparent"
              className="max-h-[60vh] sm:max-h-[70vh] lg:max-h-[80vh] w-auto max-w-full object-contain mx-auto"
            />
          </div>
        </div>

        {/* Sidebar Metadata & Creative Rationale */}
        <div className="w-full lg:w-96 bg-[#141414] border border-[#303030] rounded-sm p-5 sm:p-6 text-left flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center justify-between text-[11px] text-[#A5A5A5] mb-2 font-mono">
              <span>ASSET 0{currentIndex + 1} OF 0{allAssets.length}</span>
              <span className="text-[#C6A779]">{asset.format}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F5F5F5] mb-2">
              {asset.title}
            </h3>

            <div className="text-xs text-[#A5A5A5] mb-4">
              Concept Project: <span className="text-[#F5F5F5] font-semibold">{currentClient}</span> · {currentCategory}
            </div>

            <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed mb-6 pb-6 border-b border-[#242424]">
              {asset.caption}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#C6A779] font-medium mb-1">
                  Strategic Placement & Role
                </div>
                <div className="text-xs text-[#F5F5F5]">
                  {asset.role}
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#C6A779] font-medium mb-1">
                  Art Direction & Lighting
                </div>
                <div className="text-xs text-[#A5A5A5] leading-relaxed">
                  {asset.artDirectionNotes}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#242424]">
            <button
              onClick={() => {
                onClose();
                onStartProject();
              }}
              className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#101010] bg-[#C6A779] hover:bg-[#D7BC91] rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
