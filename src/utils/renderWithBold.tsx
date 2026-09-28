import React from 'react';

/**
 * Rendert platte tekst met **vetgedrukte** stukken als React-elementen.
 * Gebruikt voor spaarzaam vetgedrukte kernwoorden in lopende tekst.
 */
export function renderWithBold(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}
