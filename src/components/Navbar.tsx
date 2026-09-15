import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  User,
  Target,
  BookOpen,
  Code2,
  Calendar,
  MessageSquare,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = [
        'contact',
        'sprints',
        'projecten',
        'onderzoek',
        'leeruitkomsten',
        'over-mij',
      ];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          return;
        }
      }
      if (window.scrollY < 250) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Over mij', href: '#over-mij', id: 'over-mij', icon: User },
    { label: 'Leeruitkomsten', href: '#leeruitkomsten', id: 'leeruitkomsten', icon: Target },
    { label: 'Onderzoek', href: '#onderzoek', id: 'onderzoek', icon: BookOpen },
    { label: 'Projecten', href: '#projecten', id: 'projecten', icon: Code2 },
    { label: 'Sprint-tijdlijn', href: '#sprints', id: 'sprints', icon: Calendar },
    { label: 'Contact', href: '#contact', id: 'contact', icon: MessageSquare },
  ];

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1A33]/92 backdrop-blur-xl border-b border-[#1E3A68]/85 shadow-lg shadow-black/25 py-2.5'
          : 'bg-[#0A1A33]/70 backdrop-blur-md border-b border-white/5 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Badge & Name */}
        <a
          id="nav-logo-link"
          href="#"
          className="flex items-center gap-3 group transition-transform hover:scale-[1.02]"
        >
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-[#0A1A33] rounded-[15px] flex items-center justify-center">
              <span className="font-bold text-xs bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {portfolioData.student.initials}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
              {portfolioData.student.fullName}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            </span>
            <span className="text-[11px] text-slate-300">Minor Future-proof met AI!</span>
          </div>
        </a>

        {/* Desktop Nav Links - Compact with icons and filled active pill */}
        <nav
          id="desktop-nav-links"
          className="hidden lg:flex items-center gap-1 bg-[#0F2447]/80 p-1 rounded-2xl border border-[#1E3A68]/90 backdrop-blur-md shadow-inner"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 relative ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/15'
                    : 'text-slate-300 hover:text-white hover:bg-[#1A365D]/60 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-cyan-400 ml-0.5 animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-cta-bewijsstukken"
            href="#leeruitkomsten"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/35 hover:brightness-110 active:scale-95 transition-all duration-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
            <span>Bewijsstukken</span>
            <ArrowUpRight className="w-3 h-3 opacity-80" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            id="nav-cta-mobile-mini"
            href="#leeruitkomsten"
            className="sm:hidden px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
          >
            Bewijzen
          </a>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#0F2447] border border-[#1E3A68] text-slate-200 hover:text-white hover:bg-[#1A365D] transition-colors"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-dropdown"
          className="lg:hidden border-b border-[#1E3A68] bg-[#07152B]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'text-slate-200 hover:text-cyan-300 hover:bg-[#0F2447]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
          <div className="pt-3">
            <a
              id="mobile-cta-bewijsstukken"
              href="#leeruitkomsten"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Bekijk Bewijsstukken</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
