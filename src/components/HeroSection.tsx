import React from 'react';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Calendar,
  Layers,
  Search,
  Code2,
  GraduationCap,
  ChevronRight,
  Workflow,
} from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData.ts';

export const HeroSection: React.FC = () => {
  const { hero, student } = portfolioData;

  const storyTypes = [
    {
      icon: Search,
      title: 'Research Stories',
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      description:
        'Fundamenteel onderzoek naar AI-impact, ethiek, wetgeving (EU AI Act) en procesarchitectuur.',
      lu: 'Gekoppeld aan LU1 & LU3',
    },
    {
      icon: Code2,
      title: 'User Stories',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      description:
        'Praktijkgerichte prototypes en AI-tools (n8n, APIs, LLMs) die direct operationele knelpunten oplossen.',
      lu: 'Gekoppeld aan LU2 & LU4',
    },
    {
      icon: GraduationCap,
      title: 'Learning Stories',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      description:
        'Persoonlijke leercurve, tool-experimenten, Scrum-retrospectives en methodische zelfreflectie.',
      lu: 'Gekoppeld aan LU4 & LU5',
    },
  ];

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle luminous vertical divider accent for desktop */}
        <div className="hidden lg:block absolute left-[42%] top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent pointer-events-none -z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Interactive Story Explainer Card + Stats (compact) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div
              id="hero-story-explainer-card"
              className="relative rounded-3xl bg-[#0F2447]/85 border border-[#1E3A68]/95 p-5 sm:p-6 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden group"
            >
              {/* Subtle card glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1E3A68]/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs border border-cyan-500/30">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      Scrum Sprint Methodiek
                    </h3>
                    <p className="text-[11px] text-slate-300">
                      3 Story-types als bouwstenen van het portfolio
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#0A1A33] text-cyan-300 border border-[#1E3A68]">
                  Agile Minor
                </span>
              </div>

              {/* 3 Story Types */}
              <div className="space-y-2.5 mb-5">
                {storyTypes.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-3 rounded-2xl bg-[#08152B]/85 border border-[#1B365F]/80 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`p-1 rounded-lg border ${item.color}`}>
                          <Icon className="w-3 h-3" />
                        </span>
                        <h4 className="text-xs font-bold text-slate-100">
                          {item.title}
                        </h4>
                        <span className="ml-auto text-[10px] font-medium text-slate-300">
                          {item.lu}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-300 pl-6 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* 3 Core Stats */}
              <div className="pt-3.5 border-t border-[#1E3A68]/80 grid grid-cols-3 gap-2.5 text-center">
                <div className="p-2 rounded-xl bg-[#08152B]/80 border border-[#1B365F]/80">
                  <div className="text-lg font-bold font-display text-white">20</div>
                  <div className="text-[10px] font-medium text-slate-300">Weken</div>
                </div>
                <div className="p-2 rounded-xl bg-[#08152B]/80 border border-[#1B365F]/80">
                  <div className="text-lg font-bold font-display text-cyan-400">8</div>
                  <div className="text-[10px] font-medium text-slate-300">Sprints</div>
                </div>
                <div className="p-2 rounded-xl bg-[#08152B]/80 border border-[#1B365F]/80">
                  <div className="text-lg font-bold font-display text-indigo-400">5</div>
                  <div className="text-[10px] font-medium text-slate-300">Leeruitkomsten</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start lg:pl-4 order-1 lg:order-2"
          >
            {/* Eyebrow badge */}
            <div
              id="hero-eyebrow-badge"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#0F2447] border border-cyan-500/40 text-cyan-300 shadow-sm shadow-cyan-500/10 mb-5 backdrop-blur-md"
            >
              <Workflow className="w-4 h-4 text-cyan-400" />
              <span>{hero.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] font-bold text-white tracking-tight leading-[1.18] mb-5"
            >
              {hero.title.split(':')[0]}:{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-indigo-400 bg-clip-text text-transparent">
                {hero.title.split(':')[1] || 'Onderzoeken, Bouwen & Verantwoorden'}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-6 font-normal"
            >
              {hero.subtitle}
            </p>

            {/* Tags */}
            <div id="hero-tags-container" className="flex flex-wrap gap-2.5 mb-7">
              {hero.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-[#0F2447]/80 border border-[#1E3A68] text-slate-200 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              id="hero-cta-buttons"
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-4"
            >
              <a
                id="hero-cta-primary-bewijsstukken"
                href="#leeruitkomsten"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Bekijk Bewijsstukken per LU</span>
              </a>

              <a
                id="hero-cta-secondary-onderzoek"
                href="#onderzoek"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-bold bg-[#0F2447] border border-[#1E3A68] text-white hover:bg-[#153466] hover:border-blue-500/50 active:scale-[0.98] transition-all"
              >
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Onderzoeksplan</span>
              </a>
            </div>

            {/* Textlink */}
            <a
              id="hero-textlink-wie-is-max"
              href="#over-mij"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group pt-2 transition-colors"
            >
              <span>Wie is Max?</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
