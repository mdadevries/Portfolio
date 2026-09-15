import React from 'react';
import {
  User,
  Quote,
  Eye,
  Zap,
  Flame,
  Compass,
  CheckCircle2,
  Workflow,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData.ts';

export const AboutSection: React.FC = () => {
  const { about, student } = portfolioData;

  return (
    <section
      id="over-mij"
      className="py-20 md:py-28 relative border-t border-[#162D50] bg-[#08152B]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0F2447] border border-[#1E3A68] text-slate-200 mb-4 shadow-sm">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>Persoonlijk Profiel</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Over Max & Zijn Drijfveren
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Als student Technische Bedrijfskunde aan de Hogeschool Utrecht combineer ik procesmatige
            scherpte met praktische automatisering. Hieronder lees je meer over mijn achtergrond,
            filosofie en ambities.
          </p>
        </div>

        {/* Bio + Quote + AI Vision Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left 7 cols: Bio in cohesive paragraphs */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 bg-[#0F2447]/70 border border-[#1E3A68]/90 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl shadow-black/20">
            <div className="space-y-4 text-slate-200 leading-relaxed text-sm sm:text-base">
              {about.bioParagraphs.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Experience Pills */}
            <div className="pt-4 border-t border-[#1E3A68]/70 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#0A1A33]/90 text-cyan-300 border border-[#1E3A68]">
                <Workflow className="w-3 h-3 text-cyan-400" />
                Microsoft Power Automate
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#0A1A33]/90 text-indigo-300 border border-[#1E3A68]">
                <Zap className="w-3 h-3 text-indigo-400" />
                n8n Automation Workflows
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#0A1A33]/90 text-emerald-300 border border-[#1E3A68]">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Lean & BPMN Procesmodellering
              </span>
            </div>
          </div>

          {/* Right 5 cols: Quote + AI Vision Box */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quote Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#122549] via-[#0F2447] to-[#0A1A33] border border-indigo-500/25 p-6 sm:p-7 relative overflow-hidden backdrop-blur-md shadow-xl shadow-black/20">
              <Quote className="w-8 h-8 text-indigo-400/40 mb-3" />
              <blockquote className="text-base sm:text-lg font-medium text-white italic leading-snug mb-4">
                {about.quote}
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-500/25 text-indigo-300 flex items-center justify-center font-bold text-xs border border-indigo-500/40 shadow-sm">
                  {student.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{student.fullName}</div>
                  <div className="text-[11px] text-slate-300">
                    Persoonlijk motto • minor 2026
                  </div>
                </div>
              </div>
            </div>

            {/* AI Vision Card */}
            <div className="rounded-3xl bg-[#0F2447]/70 border border-cyan-500/25 p-6 sm:p-7 backdrop-blur-md shadow-xl shadow-black/20">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-500/30">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  Mijn Visie op AI
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {about.aiVision}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars: Talenten, Passies & Dromen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Talenten & Kwaliteiten */}
          <div className="rounded-3xl bg-[#0F2447]/60 border border-[#1E3A68]/80 p-6 sm:p-7 hover:border-indigo-500/40 transition-all shadow-lg shadow-black/15">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Talenten & Kwaliteiten
                </h3>
                <span className="text-xs text-slate-300">Sterktes in het werkveld</span>
              </div>
            </div>

            <div className="space-y-4">
              {about.talents.map((talent, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-100">
                      {talent.title}
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#0A1A33] text-indigo-300 border border-[#1E3A68]">
                      {talent.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {talent.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Passies & Energie */}
          <div className="rounded-3xl bg-[#0F2447]/60 border border-[#1E3A68]/80 p-6 sm:p-7 hover:border-cyan-500/40 transition-all shadow-lg shadow-black/15">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Passies & Energie
                </h3>
                <span className="text-xs text-slate-300">Wat mij motiveert</span>
              </div>
            </div>

            <div className="space-y-4">
              {about.passions.map((passion, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-100">
                      {passion.title}
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#0A1A33] text-cyan-300 border border-[#1E3A68]">
                      {passion.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {passion.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Dromen & Ambities */}
          <div className="rounded-3xl bg-[#0F2447]/60 border border-[#1E3A68]/80 p-6 sm:p-7 hover:border-emerald-500/40 transition-all flex flex-col justify-between shadow-lg shadow-black/15">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {about.ambitions.title}
                  </h3>
                  <span className="text-xs text-emerald-400 font-semibold">
                    Doelrol: {about.ambitions.targetRole}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                {about.ambitions.description}
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-[#0A1A33]/80 border border-[#1E3A68]/80 text-[11px] text-slate-300 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Gefocust op AI-augmented business operations na 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
