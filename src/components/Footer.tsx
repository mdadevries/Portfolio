import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  const { student } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Over mij', href: '#over-mij' },
    { label: 'Leeruitkomsten', href: '#leeruitkomsten' },
    { label: 'Onderzoek', href: '#onderzoek' },
    { label: 'Projecten', href: '#projecten' },
    { label: 'Sprint-tijdlijn', href: '#sprints' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="main-footer"
      className="border-t border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-sunken))] pt-16 pb-12 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[rgb(var(--border-subtle))]">
          {/* Logo & Student Info */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-[rgb(var(--surface-sunken))] rounded-[15px] flex items-center justify-center">
                <span className="font-bold text-sm bg-gradient-to-r from-cyan-600 to-indigo-700 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  {student.initials}
                </span>
              </div>
            </div>
            <div>
              <div className="font-bold text-base text-[rgb(var(--text-primary))]">
                {student.fullName}
              </div>
              <p className="text-xs text-[rgb(var(--text-tertiary))]">
                Portfolio Minor 'Futureproof met AI!' • {student.institution} ({student.year})
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Scroll To Top Button */}
          <div>
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold bg-[rgb(var(--surface))] border border-[rgb(var(--border))] text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--surface-hover))] transition-colors shadow-sm"
              aria-label="Naar boven scrollen"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
              <span>Naar boven</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[rgb(var(--text-tertiary))]">
          <div>
            © {student.year} {student.fullName} • {student.study}, {student.institution}
          </div>
          <div className="flex items-center gap-2">
            <span>Minor "Futureproof met AI!"</span>
            <span>•</span>
            <span>16 Weken / 8 Sprints / LU1 t/m LU5</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
