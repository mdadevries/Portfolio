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

export const ResearchSection: React.FC = () => {
  const { research } = portfolioData;

  return (
    <section
      id="onderzoek"
      className="py-20 md:py-28 relative border-t border-[#162D50] bg-[#08152B]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0F2447] border border-[#1E3A68] text-slate-200 mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Praktijkgericht Onderzoek</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Centraal Onderzoeksplan
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Tijdens de minor voert Max een diepgaand bedrijfskundig onderzoek uit naar de haalbaarheid,
            impact en verantwoorde toepassing van AI binnen procesmanagement.
          </p>
        </div>

        {/* Featured Research Card */}
        <div
          id="featured-research-card"
          className="rounded-3xl bg-[#0F2447]/70 border border-[#1E3A68]/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl shadow-black/30 relative overflow-hidden"
        >
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1E3A68]/80">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                {research.field}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <Clock className="w-3 h-3" />
                {research.status}
              </span>
            </div>

            <div className="text-xs font-medium text-slate-300">
              {research.publicationDate}
            </div>
          </div>

          {/* Central Research Question */}
          <div className="mb-8">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Centrale Onderzoeksvraag (Hoofdvraag)</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
              {research.title}
            </h3>
            <p className="text-sm text-slate-300 mt-2 font-medium">
              {research.subtitle}
            </p>
          </div>

          {/* Research Summary */}
          <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-[#08152B]/85 border border-[#1E3A68]">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
              Korte Samenvatting & Context
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {research.summary}
            </p>
          </div>

          {/* 3 Concrete Sub-Questions */}
          <div className="mb-10">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>Deelonderzoeksvragen (3 Luiken)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {research.subQuestions.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#08152B]/85 border border-[#1B365F]/85 hover:border-indigo-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-indigo-400">
                        {sub.number}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#0A1A33] text-slate-200 border border-[#1E3A68]">
                        {sub.purpose}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {sub.question}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Final Deliverable & Report Button */}
          <div className="pt-6 border-t border-[#1E3A68]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verwachte Eindrapportage</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold bg-cyan-500 text-[#0A1A33] hover:bg-cyan-400 shadow-md transition-all font-bold"
                >
                  <span>Download Onderzoeksrapport</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <button
                  disabled
                  id="research-report-btn-disabled"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold bg-[#0A1A33] text-slate-300 border border-[#1E3A68] cursor-not-allowed shadow-sm"
                >
                  <Lock className="w-4 h-4 text-slate-400" />
                  <span>Rapport downloaden (beschikbaar na publicatie)</span>
                </button>
              )}
              <span className="text-[11px] text-slate-400 mt-2">
                * Wordt geactiveerd na afronding en beoordeling in Sprint 6
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
