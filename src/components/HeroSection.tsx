import React from 'react';
import { Sparkles, ArrowRight, Workflow } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData.ts';
import { SmartImage } from './SmartImage.tsx';

export const HeroSection: React.FC = () => {
  const { hero, student } = portfolioData;

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
    >
      {/* Ambient background glow orb */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[700px] h-[400px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-8 flex flex-col items-start order-2 lg:order-1"
          >
            {/* Eyebrow badge */}
            <div
              id="hero-eyebrow-badge"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[rgb(var(--surface))] border border-cyan-500/40 text-cyan-700 dark:text-cyan-300 shadow-sm shadow-cyan-500/10 mb-5 backdrop-blur-md"
            >
              <Workflow className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
              <span>{hero.eyebrow}</span>
            </div>

            {/* Main Headline — enige H1 van de pagina */}
            <h1
              id="hero-main-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] font-bold text-[rgb(var(--text-primary))] tracking-tight leading-[1.18] mb-5"
            >
              {hero.title.split(':')[0]}:{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-indigo-700 dark:from-cyan-400 dark:via-indigo-300 dark:to-indigo-400 bg-clip-text text-transparent">
                {hero.title.split(':')[1] || 'Onderzoeken, Bouwen & Verantwoorden'}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-lg text-[rgb(var(--text-secondary))] leading-relaxed max-w-2xl mb-6 font-normal"
            >
              {hero.subtitle}
            </p>

            {/* Max 2 tags */}
            <div id="hero-tags-container" className="flex flex-wrap gap-2.5 mb-7">
              {hero.tags.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-[rgb(var(--surface))]/80 border border-[rgb(var(--border))] text-[rgb(var(--text-secondary))] backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Eén primaire actie + één secundaire tekstlink */}
            <div id="hero-cta-buttons" className="flex flex-wrap items-center gap-5 w-full sm:w-auto">
              <a
                id="hero-cta-primary-bewijsstukken"
                href="#leeruitkomsten"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Bekijk Bewijsstukken per LU</span>
              </a>

              <a
                id="hero-cta-secondary-onderzoek"
                href="#onderzoek"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-700 dark:text-cyan-300 group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
              >
                <span>Lees het onderzoeksplan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-500/30 to-indigo-600/30 blur-2xl" />
              <SmartImage
                src={hero.profileImage}
                alt={hero.profileImageAlt || `Portretfoto van ${student.fullName}`}
                aspect="aspect-square"
                rounded="rounded-full"
                fallbackLabel={student.initials}
                labelSize="text-3xl sm:text-4xl"
                priority
                className="relative w-full h-full border-2 border-[rgb(var(--border))] shadow-2xl shadow-black/40"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
