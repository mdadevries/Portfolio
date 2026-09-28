import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface SmartImageProps {
  src?: string;
  alt: string;
  className?: string;
  /** aspect-ratio Tailwind class, bv. "aspect-video" of "aspect-square" */
  aspect?: string;
  /** Tekst die in de fallback-vlak getoond wordt (bv. initialen) */
  fallbackLabel?: string;
  priority?: boolean;
  rounded?: string;
  /** Tailwind text-size klasse voor de fallbackLabel, bv. "text-xs" voor kleine avatars */
  labelSize?: string;
  /** Toon de "Afbeelding volgt"-tekst onder de fallback (uit voor kleine avatars) */
  showCaption?: boolean;
}

/**
 * Toont een afbeelding met vaste verhouding (voorkomt layout shift) en een
 * nette fallback (initialen/icoon) zolang het bestand nog niet is aangeleverd.
 * Er wordt nooit een kapot plaatje getoond.
 */
export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  aspect = 'aspect-video',
  fallbackLabel,
  priority = false,
  rounded = 'rounded-2xl',
  labelSize = 'text-lg sm:text-xl',
  showCaption = true,
}) => {
  const [failed, setFailed] = useState(false);
  const showFallback = !src || failed;

  if (showFallback) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${aspect} ${rounded} bg-[rgb(var(--bg))] border border-[rgb(var(--border))] flex flex-col items-center justify-center gap-1.5 text-[rgb(var(--text-faint))] overflow-hidden ${className}`}
      >
        {fallbackLabel ? (
          <span className={`font-display ${labelSize} font-bold text-[rgb(var(--text-muted))] leading-none`}>
            {fallbackLabel}
          </span>
        ) : (
          <ImageOff className="w-6 h-6" />
        )}
        {showCaption && (
          <span className="text-[10px] text-[rgb(var(--text-faint))] px-3 text-center leading-tight">
            Afbeelding volgt
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${aspect} ${rounded} object-cover ${className}`}
      loading={priority ? undefined : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
};
