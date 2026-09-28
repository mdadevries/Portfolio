import React from 'react';
import {
  BookOpen,
  HelpCircle,
  Clock,
  FileCheck2,
  Lock,
  ArrowRight,
  Sparkles,
  Layers,
  GraduationCap,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';
import { SmartImage } from './SmartImage.tsx';

export const ResearchSection: React.FC = () => {
  const { research } = portfolioData;

  return (
    <section
      id="onderzoek"
      className="py-20 md:py-28 relative border-t border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-sunken))]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[rgb(var(--surface))] border border-[rgb(var(--border))] text-[rgb(var(--text-secondary))] mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400" />
            <span>Praktijkgericht Onderzoek</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[rgb(var(--text-primary))] tracking-tight mb-4">
            Centraal Onderzoeksplan
          </h2>
          <p className="text-[rgb(var(--text-tertiary))] text-base sm:text-lg leading-relaxed">
            Tijdens de minor voert Max een diepgaand bedrijfskundig onderzoek uit naar de haalbaarheid,
            impact en verantwoorde toepassing van AI binnen procesmanagement.
          </p>
        </div>

        {/* Featured Research Card */}
        <div
          id="featured-research-card"
          className="rounded-3xl bg-[rgb(var(--surface))]/70 border border-[rgb(var(--border))]/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl shadow-black/30 relative overflow-hidden"
        >
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[rgb(var(--border))]/80">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                {research.field}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                <Clock className="w-3 h-3" />
                {research.status}
              </span>
            </div>

            <div className="text-xs font-medium text-[rgb(var(--text-tertiary))]">
              {research.publicationDate}
            </div>
          </div>

          {/* Central Research Question */}
          <div className="mb-8">
            <div className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Centrale Onderzoeksvraag (Hoofdvraag)</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[rgb(var(--text-primary))] leading-snug">
              {research.title}
            </h3>
            <p className="text-sm text-[rgb(var(--text-tertiary))] mt-2 font-medium">
              {research.subtitle}
            </p>
          </div>

          {/* Research Summary */}
          <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-[rgb(var(--surface-sunken))]/85 border border-[rgb(var(--border))]">
            <h4 className="text-xs font-bold text-[rgb(var(--text-secondary))] uppercase tracking-wider mb-2">
              Korte Samenvatting & Context
            </h4>
            <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed">
              {research.summary}
            </p>
          </div>

          {/* 3 Concrete Sub-Questions */}
          <div className="mb-10">
            <h4 className="text-xs font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400" />
              <span>Deelonderzoeksvragen (3 Luiken)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {research.subQuestions.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[rgb(var(--surface-sunken))]/85 border border-[rgb(var(--border-muted))]/85 hover:border-indigo-500/40 transition-colors flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400">
                        {sub.number}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[rgb(var(--bg))] text-[rgb(var(--text-secondary))] border border-[rgb(var(--border))]">
                        {sub.purpose}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] leading-relaxed">
                      {sub.question}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optioneel: schema van het onderzoeksmodel */}
          {research.diagramImage && (
            <div className="mb-10">
              <SmartImage
                src={research.diagramImage}
                alt={research.diagramImageAlt || 'Schema van het onderzoeksmodel'}
                aspect="aspect-video"
                className="w-full"
              />
            </div>
          )}

          {/* Expected Final Deliverable & Report Button */}
          <div className="pt-6 border-t border-[rgb(var(--border))]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                <span>Verwachte Eindrapportage</span>
              </div>
              <p className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] max-w-xl">
                {research.expectedOutcome}
              </p>
            </div>

            {/* Action Button: Disabled until publication */}
            <div className="flex flex-col items-start sm:items-end">
              {research.reportUrl ? (
                <a
                  href={research.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold bg-cyan-500 text-[rgb(var(--bg))] hover:bg-cyan-400 shadow-md transition-all font-bold"
                >
                  <span>Download Onderzoeksrapport</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <button
                  disabled
                  id="research-report-btn-disabled"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold bg-[rgb(var(--bg))] text-[rgb(var(--text-tertiary))] border border-[rgb(var(--border))] cursor-not-allowed shadow-sm"
                >
                  <Lock className="w-4 h-4 text-[rgb(var(--text-muted))]" />
                  <span>Rapport downloaden (beschikbaar na publicatie)</span>
                </button>
              )}
              <span className="text-[11px] text-[rgb(var(--text-muted))] mt-2">
                * Wordt geactiveerd na afronding en beoordeling in Sprint 6
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
