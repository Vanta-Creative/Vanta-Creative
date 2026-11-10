import React, { useState } from 'react';
import { Image as ImageIcon, AlertCircle } from 'lucide-react';

interface PortfolioImageProps {
  src: string;
  alt: string;
  format?: '4:5 Feed' | '1:1 Square' | '9:16 Story' | string;
  aspectRatio?: '4/5' | '1/1' | '9/16' | string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain';
}

export const PortfolioImage: React.FC<PortfolioImageProps> = ({
  src,
  alt,
  format,
  aspectRatio,
  className = '',
  containerClassName = '',
  priority = false,
  objectFit = 'cover'
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [triedFallbackPath, setTriedFallbackPath] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Determine computed aspect ratio string
  const getAspect = (): string => {
    if (aspectRatio) return aspectRatio;
    if (format === '9:16 Story') return '9/16';
    if (format === '1:1 Square') return '1/1';
    return '4/5';
  };

  const aspect = getAspect();

  const handleImageError = () => {
    // If loading absolute path failed, attempt relative path or vice versa
    if (!triedFallbackPath) {
      setTriedFallbackPath(true);
      if (src.startsWith('/')) {
        // Try relative path
        setCurrentSrc('.' + src);
        return;
      } else {
        // Try absolute root path
        setCurrentSrc('/' + src.replace(/^\.\//, ''));
        return;
      }
    }
    // If alternative also fails, show fallback container
    setHasError(true);
  };

  return (
    <div
      className={`relative w-full max-w-full overflow-hidden bg-[#101010] flex items-center justify-center ${containerClassName}`}
      style={{
        width: '100%',
        maxWidth: '100%',
        aspectRatio: aspect,
        minHeight: '220px' // Guarantees container never collapses to 0 height on mobile flex contexts
      }}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#161616] animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border border-[#303030] border-t-[#C6A779] animate-spin" />
        </div>
      )}

      {/* Fallback Display if asset fails to load */}
      {hasError ? (
        <div className="absolute inset-0 bg-[#141414] border border-[#2a2a2a] p-6 flex flex-col items-center justify-center text-center">
          <div className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-[#303030] flex items-center justify-center mb-3 text-[#C6A779]">
            <ImageIcon className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold text-[#F5F5F5] font-display mb-1">
            {alt || 'Portfolio Visual'}
          </span>
          <span className="text-[10px] text-[#A5A5A5] uppercase tracking-wider font-mono">
            {format || 'Visual Asset'}
          </span>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={handleImageError}
          className={`w-full max-w-full h-full block transition-all duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          style={{
            width: '100%',
            maxWidth: '100%',
            height: '100%',
            aspectRatio: aspect,
            objectFit
          }}
        />
      )}
    </div>
  );
};
