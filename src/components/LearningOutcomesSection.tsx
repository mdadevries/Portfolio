import React, { useState } from 'react';
import {
  GraduationCap,
  ChevronDown,
  ChevronUp,
  FileText,
  Code,
  Video,
  Presentation,
  Layout,
  ExternalLink,
  CheckCircle2,
  Clock,
  Calendar,
  Sparkles,
  Info,
  Layers,
  Search,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData.ts';
import { LearningOutcome, EvidenceItem, EvidenceFormat } from '../types.ts';

export const LearningOutcomesSection: React.FC = () => {
  const { learningOutcomes } = portfolioData;
  const [selectedLUId, setSelectedLUId] = useState<string>('LU1');
  const [expandedCriteria, setExpandedCriteria] = useState<Record<string, boolean>>({
    LU1: true,
    LU2: true,
    LU3: true,
    LU4: true,
    LU5: true,
  });

  const currentLU =
    learningOutcomes.find((lu) => lu.id === selectedLUId) || learningOutcomes[0];

  const toggleCriteria = (id: string) => {
    setExpandedCriteria((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getFormatIcon = (format: EvidenceFormat) => {
    switch (format) {
      case 'GitHub Repo':
        return <Code className="w-3.5 h-3.5" />;
      case 'Video Demo':
        return <Video className="w-3.5 h-3.5" />;
      case 'Presentatie':
        return <Presentation className="w-3.5 h-3.5" />;
      case 'Miro Board':
        return <Layout className="w-3.5 h-3.5" />;
      default:
        return <FileText className="w-3.5 h-3.5" />;
    }
  };

  const getStatusBadge = (status: EvidenceItem['status']) => {
    switch (status) {
      case 'Afgerond':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Afgerond
          </span>
        );
      case 'In uitvoering':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
            <Clock className="w-3 h-3 text-cyan-400" />
            In uitvoering
          </span>
        );
      case 'Binnenkort':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#0A1A33] text-slate-300 border border-[#1E3A68]">
            <Calendar className="w-3 h-3 text-slate-400" />
            Binnenkort
          </span>
        );
    }
  };

  const getStoryTypeBadge = (storyType: EvidenceItem['storyType']) => {
    switch (storyType) {
      case 'Research':
        return (
          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
            Research Story
          </span>
        );
      case 'User':
        return (
          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            User Story
          </span>
        );
      case 'Learning':
        return (
          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
            Learning Story
          </span>
        );
    }
  };

  const isCriteriaOpen = !!expandedCriteria[currentLU.id];

  return (
    <section
      id="leeruitkomsten"
      className="py-20 md:py-28 relative border-t border-[#162D50] bg-[#0A1A33]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0F2447] border border-[#1E3A68] text-slate-200 mb-4 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Toetsing & Bewijsvoering</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Leeruitkomsten (LU1 t/m LU5)
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Per officiële minor-leeruitkomst vind je hier de doelstelling, beoordelingscriteria en
            de gekoppelde bewijsstukken. Selecteer links (of hierboven op mobiel) een leeruitkomst
            om de details en voortgang te bekijken.
          </p>
        </div>

        {/* Mobile Filter Bar (Visible on mobile/tablet screens below lg) */}
        <div className="lg:hidden mb-8">
          <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-2">
            Selecteer leeruitkomst:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {learningOutcomes.map((lu) => {
              const isSelected = selectedLUId === lu.id;
              return (
                <button
                  key={lu.id}
                  id={`mobile-filter-lu-${lu.id.toLowerCase()}`}
                  onClick={() => setSelectedLUId(lu.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 font-bold'
                      : 'bg-[#0F2447] text-slate-300 border border-[#1E3A68]'
                  }`}
                >
                  <span>{lu.code}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#0A1A33]/70 font-normal">
                    {lu.evidence.length} {lu.evidence.length === 1 ? 'item' : 'items'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Sticky Sidebar + Right Detail Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sticky Sidebar (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-3">
            <div className="p-3.5 rounded-2xl bg-[#08152B]/85 border border-[#1E3A68]/80 text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
              <span>Leeruitkomsten (5)</span>
              <span className="text-cyan-400 font-mono text-[11px]">Minor AI</span>
            </div>

            <div className="space-y-2.5">
              {learningOutcomes.map((lu) => {
                const isSelected = selectedLUId === lu.id;
                return (
                  <button
                    key={lu.id}
                    id={`sidebar-lu-btn-${lu.id.toLowerCase()}`}
                    onClick={() => setSelectedLUId(lu.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border flex items-start gap-3.5 group relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#0F2447] border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                        : 'bg-[#0F2447]/50 border-[#1E3A68]/70 hover:bg-[#0F2447]/80 hover:border-cyan-500/30'
                    }`}
                  >
                    {/* Active vertical cyan indicator bar */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-indigo-500" />
                    )}

                    {/* Badge */}
                    <div
                      className={`w-10 h-10 rounded-xl ${lu.badgeColor.bg} border ${lu.badgeColor.border} flex items-center justify-center shrink-0 font-bold text-sm ${lu.badgeColor.text}`}
                    >
                      {lu.code}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-xs font-bold truncate ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                          {lu.code}: {lu.title.split(' ')[0]} {lu.title.split(' ')[1] || ''}
                        </h3>
                        <span className="text-[10px] font-semibold text-slate-400 px-1.5 py-0.5 rounded bg-[#0A1A33] border border-[#1E3A68]/80 shrink-0 ml-1">
                          {lu.evidence.length} bewijs
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                        {lu.shortDescription}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Assessment Meta Note */}
            <div className="p-4 rounded-2xl bg-[#08152B]/60 border border-[#1E3A68]/60 text-xs text-slate-300">
              <span className="text-white font-semibold block mb-1">Beoordelingsstructuur:</span>
              <span>
                Elke leeruitkomst wordt cyclisch getoetst via opgebouwde bewijslast uit de 8 sprints.
              </span>
            </div>
          </div>

          {/* Right Detail Column: Selected Learning Outcome Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLU.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                id={`lu-card-${currentLU.id.toLowerCase()}`}
                className="rounded-3xl bg-[#0F2447]/75 border border-[#1E3A68]/90 p-6 sm:p-8 backdrop-blur-md shadow-xl shadow-black/25"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#1E3A68]/70">
                  <div className="flex items-start gap-4">
                    {/* Badge */}
                    <div
                      className={`w-12 h-12 rounded-2xl ${currentLU.badgeColor.bg} border ${currentLU.badgeColor.border} flex items-center justify-center shrink-0 shadow-sm`}
                    >
                      <span className={`font-display font-bold text-lg ${currentLU.badgeColor.text}`}>
                        {currentLU.code}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                          Officiële Leeruitkomst
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                        {currentLU.title}
                      </h3>
                      <p className="text-sm text-slate-200 mt-2 leading-relaxed">
                        {currentLU.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Expand Criteria Button */}
                  <button
                    id={`toggle-criteria-btn-${currentLU.id.toLowerCase()}`}
                    onClick={() => toggleCriteria(currentLU.id)}
                    className="self-start md:self-center inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0A1A33] text-slate-200 border border-[#1E3A68] hover:bg-[#152B52] transition-colors shadow-sm shrink-0"
                    aria-expanded={isCriteriaOpen}
                  >
                    <span>{isCriteriaOpen ? 'Verberg Criteria' : 'Bekijk Criteria'}</span>
                    {isCriteriaOpen ? (
                      <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </button>
                </div>

                {/* Collapsible Criteria Box */}
                <AnimatePresence>
                  {isCriteriaOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="py-5 px-5 my-5 rounded-2xl bg-[#08152B]/95 border border-[#1E3A68]">
                        <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Info className="w-3.5 h-3.5" />
                          <span>Officiële Beoordelingscriteria voor {currentLU.code}</span>
                        </h4>
                        <ul className="space-y-2.5">
                          {currentLU.criteria.map((crit, idx) => (
                            <li
                              key={idx}
                              className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                              <span>{crit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Evidence items section */}
                <div className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Gekoppelde Bewijsstukken voor {currentLU.code}</span>
                    </h4>
                    <span className="text-xs text-slate-300">
                      {currentLU.evidence.length} {currentLU.evidence.length === 1 ? 'item' : 'items'} gekoppeld
                    </span>
                  </div>

                  {/* Grid of Evidence Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentLU.evidence.map((item) => (
                      <div
                        key={item.id}
                        id={`evidence-card-${item.id}`}
                        className="rounded-2xl bg-[#08152B]/90 border border-[#1B365F]/85 p-4 sm:p-5 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-md"
                      >
                        <div>
                          {/* Badges row */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              {getStoryTypeBadge(item.storyType)}
                              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 bg-[#0A1A33] px-2 py-0.5 rounded-md border border-[#1E3A68]">
                                {getFormatIcon(item.format)}
                                {item.format}
                              </span>
                            </div>
                            <div>{getStatusBadge(item.status)}</div>
                          </div>

                          {/* Evidence Title */}
                          <h5 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {item.title}
                          </h5>

                          {/* Summary */}
                          <p className="text-xs text-slate-300 leading-relaxed mb-4">
                            {item.summary}
                          </p>
                        </div>

                        {/* Bottom Meta & Link Button */}
                        <div className="pt-3 border-t border-[#1E3A68]/70 flex items-center justify-between">
                          <span className="text-[11px] font-medium text-slate-300 flex items-center gap-1.5">
                            <Calendar className="w-3 h-3 text-cyan-400" />
                            {item.dateOrSprint}
                          </span>

                          {item.linkUrl ? (
                            <a
                              href={item.linkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40 transition-colors"
                            >
                              <span>Open Bewijsstuk</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-[11px] font-medium text-slate-400 italic">
                              Link volgt na publicatie
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Informational Hint for Max */}
                  <div className="mt-5 p-3 rounded-2xl bg-[#08152B]/60 border border-dashed border-[#1E3A68]/90 flex items-center justify-between text-[11px] text-slate-300">
                    <span>
                      💡 <strong>Tip voor Max:</strong> Je kunt nieuwe bewijsstukken rechtstreeks
                      toevoegen in <code className="text-cyan-300 font-mono">src/data/portfolioData.ts</code> onder{' '}
                      <code className="text-cyan-300 font-mono">{currentLU.id}.evidence</code>.
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
