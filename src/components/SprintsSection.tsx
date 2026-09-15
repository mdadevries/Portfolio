import React, { useState } from 'react';
import {
  Calendar,
  Search,
  Code2,
  GraduationCap,
  Clock,
  CheckCircle2,
  ChevronRight,
  ListChecks,
  Award,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData.ts';
import { SprintData } from '../types.ts';

export const SprintsSection: React.FC = () => {
  const { sprints } = portfolioData;
  const [selectedSprintIndex, setSelectedSprintIndex] = useState<number>(0);

  const currentSprint: SprintData = sprints[selectedSprintIndex];
  const activeSprintIndex = sprints.findIndex((s) => s.isCurrent);

  return (
    <section
      id="sprints"
      className="py-20 md:py-28 relative border-t border-[#162D50] bg-[#08152B]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0F2447] border border-[#1E3A68] text-slate-200 mb-4 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>Agile & Scrum Tijdlijn</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Sprint-overzicht (8 Sprints van 2 Weken)
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            De 20-weekse minor is opgedeeld in 8 iteratieve sprints volgens de Scrum/Agile-methode.
            Selecteer een sprint in de linker tijdlijn om de bijbehorende Research Stories, User
            Stories en Learning Stories te bekijken.
          </p>
        </div>

        {/* 2-Column Layout: Vertical Timeline on Left, Story Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical Timeline */}
          <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-24">
            <div className="rounded-3xl bg-[#0F2447]/70 border border-[#1E3A68]/90 p-5 sm:p-6 backdrop-blur-md shadow-xl shadow-black/20">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1E3A68]/80">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Sprint Tijdlijn
                </span>
                <span className="text-xs text-slate-400">8 sprints • 20 weken</span>
              </div>

              {/* Vertical Steps with Connecting Line */}
              <div className="relative pl-6 sm:pl-7 space-y-3.5 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#1E3A68]">
                {sprints.map((sprint, idx) => {
                  const isSelected = idx === selectedSprintIndex;
                  const isPast = activeSprintIndex !== -1 && idx < activeSprintIndex;
                  const isCurrent = sprint.isCurrent;
                  const isFuture = !isPast && !isCurrent;

                  return (
                    <div key={sprint.sprintNumber} className="relative">
                      {/* Timeline Dot Indicator */}
                      <div className="absolute -left-6 sm:-left-7 top-3.5 -translate-x-1/2 flex items-center justify-center">
                        {isCurrent ? (
                          <div className="relative flex items-center justify-center">
                            <span className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 ring-4 ring-cyan-400/30 animate-pulse" />
                          </div>
                        ) : isPast ? (
                          <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-[#0A1A33] flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <div
                            className={`w-2.5 h-2.5 rounded-full ring-2 ring-[#0A1A33] ${
                              isSelected ? 'bg-cyan-400' : 'bg-[#1E3A68]'
                            }`}
                          />
                        )}
                      </div>

                      {/* Sprint Timeline Card Button */}
                      <button
                        type="button"
                        id={`sprint-timeline-btn-${sprint.sprintNumber}`}
                        onClick={() => setSelectedSprintIndex(idx)}
                        className={`w-full text-left p-3.5 rounded-2xl transition-all border ${
                          isSelected
                            ? 'bg-[#0A1A33] border-cyan-400 shadow-md shadow-cyan-950/40 translate-x-1'
                            : isFuture
                            ? 'bg-[#0A1A33]/40 border-transparent hover:bg-[#0A1A33]/80 hover:border-[#1E3A68] opacity-80 hover:opacity-100'
                            : 'bg-[#0A1A33]/70 border-[#1E3A68]/60 hover:border-[#1E3A68]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                                isSelected
                                  ? 'bg-cyan-400 text-[#0A1A33]'
                                  : 'bg-[#0F2447] text-slate-200 border border-[#1E3A68]'
                              }`}
                            >
                              S{sprint.sprintNumber}
                            </span>
                            <span className="text-xs font-semibold text-white truncate max-w-[130px] sm:max-w-[170px]">
                              {sprint.title}
                            </span>
                          </div>

                          {/* Status Badge */}
                          {isCurrent ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shrink-0">
                              Actief
                            </span>
                          ) : isPast ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                              Afgerond
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400 shrink-0">Gepland</span>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-300 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {sprint.period}
                          </span>
                          <span className="text-slate-400 truncate max-w-[120px] text-right">
                            {sprint.theme}
                          </span>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Selected Sprint Details & 3 Story Cards */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-6">
            {/* Active Sprint Header Banner */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSprint.sprintNumber}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-5 sm:p-6 rounded-3xl bg-[#0F2447]/80 border border-[#1E3A68]/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl shadow-black/20"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-xl bg-cyan-400 text-[#0A1A33]">
                      Sprint {currentSprint.sprintNumber} van 8
                    </span>
                    <span className="text-xs font-medium text-slate-200 flex items-center gap-1 bg-[#0A1A33] px-2.5 py-1 rounded-xl border border-[#1E3A68]">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {currentSprint.period}
                    </span>
                    {currentSprint.isCurrent && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        Huidige Actieve Sprint
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {currentSprint.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1">
                    Thema: <span className="text-cyan-300 font-medium">{currentSprint.theme}</span>
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#1E3A68]">
                  <span className="text-xs text-slate-400 block">Sprintfocus</span>
                  <span className="text-xs font-bold text-slate-200">
                    {currentSprint.researchStories.stories.length +
                      currentSprint.userStories.stories.length +
                      currentSprint.learningStories.stories.length}{' '}
                    gedefinieerde stories
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 3 Story Cards: Research, User, Learning */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 1: Research Story */}
              <div
                id="sprint-card-research"
                className="rounded-3xl bg-[#0F2447]/70 border border-indigo-500/30 p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between hover:border-indigo-500/50 transition-all shadow-xl shadow-black/20"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#1E3A68]/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                        <Search className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Research Story</h4>
                        <span className="text-[11px] text-slate-300">
                          {currentSprint.researchStories.stories.length}{' '}
                          {currentSprint.researchStories.stories.length === 1
                            ? 'story'
                            : 'stories'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stories list */}
                  <div className="space-y-4 mb-6">
                    {currentSprint.researchStories.stories.map((story, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-[#08152B]/85 border border-[#1E3A68]">
                        <p className="text-xs text-slate-200 leading-relaxed font-mono">
                          <span className="text-indigo-400 font-bold">Als</span> {story.role},{' '}
                          <span className="text-indigo-400 font-bold">wil ik</span> {story.goal},{' '}
                          <span className="text-indigo-400 font-bold">zodat</span> {story.value}
                        </p>

                        {/* Acceptance Criteria */}
                        {story.acceptanceCriteria && story.acceptanceCriteria.length > 0 && (
                          <div className="mt-3 pt-2.5 border-t border-[#1E3A68]/70 text-[11px] text-slate-300">
                            <span className="font-semibold text-slate-200 flex items-center gap-1 mb-1">
                              <ListChecks className="w-3 h-3 text-indigo-400" />
                              Acceptatiecriteria:
                            </span>
                            <ul className="list-disc pl-4 space-y-0.5">
                              {story.acceptanceCriteria.map((ac, idx) => (
                                <li key={idx}>{ac}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Quality Criteria */}
                        {story.qualityCriteria && story.qualityCriteria.length > 0 && (
                          <div className="mt-3 pt-2.5 border-t border-[#1E3A68]/70 text-[11px] text-slate-300">
                            <span className="font-semibold text-slate-200 flex items-center gap-1 mb-1">
                              <Award className="w-3 h-3 text-indigo-400" />
                              Kwaliteitscriteria:
                            </span>
                            <ul className="list-disc pl-4 space-y-0.5">
                              {story.qualityCriteria.map((qc, idx) => (
                                <li key={idx}>{qc}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {story.notes && (
                          <div className="mt-2 text-[10px] text-amber-300/90 italic font-mono">
                            {story.notes}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Linked LUs Rule */}
                <div className="pt-3 border-t border-[#1E3A68]/80 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Gekoppeld:</span>
                  <div className="flex flex-wrap gap-1 font-bold">
                    {currentSprint.researchStories.linkedLUs.map((lu) => (
                      <span
                        key={lu}
                        className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[11px]"
                      >
                        {lu}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2: User Story */}
              <div
                id="sprint-card-user"
                className="rounded-3xl bg-[#0F2447]/70 border border-cyan-500/30 p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/50 transition-all shadow-xl shadow-black/20"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#1E3A68]/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">User Story</h4>
                        <span className="text-[11px] text-slate-300">
                          {currentSprint.userStories.stories.length}{' '}
                          {currentSprint.userStories.stories.length === 1
                            ? 'story'
                            : 'stories'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stories list */}
                  <div className="space-y-4 mb-6">
                    {currentSprint.userStories.stories.map((story, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-[#08152B]/85 border border-[#1E3A68]">
                        <p className="text-xs text-slate-200 leading-relaxed font-mono">
                          <span className="text-cyan-400 font-bold">Als</span> {story.role},{' '}
                          <span className="text-cyan-400 font-bold">wil ik</span> {story.goal},{' '}
                          <span className="text-cyan-400 font-bold">zodat</span> {story.value}
                        </p>

                        {/* Acceptance Criteria */}
                        {story.acceptanceCriteria && story.acceptanceCriteria.length > 0 && (
                          <div className="mt-3 pt-2.5 border-t border-[#1E3A68]/70 text-[11px] text-slate-300">
                            <span className="font-semibold text-slate-200 flex items-center gap-1 mb-1">
                              <ListChecks className="w-3 h-3 text-cyan-400" />
                              Acceptatiecriteria:
                            </span>
                            <ul className="list-disc pl-4 space-y-0.5">
                              {story.acceptanceCriteria.map((ac, idx) => (
                                <li key={idx}>{ac}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Quality Criteria */}
                        {story.qualityCriteria && story.qualityCriteria.length > 0 && (
                          <div className="mt-3 pt-2.5 border-t border-[#1E3A68]/70 text-[11px] text-slate-300">
                            <span className="font-semibold text-slate-200 flex items-center gap-1 mb-1">
                              <Award className="w-3 h-3 text-cyan-400" />
                              Kwaliteitscriteria:
                            </span>
                            <ul className="list-disc pl-4 space-y-0.5">
                              {story.qualityCriteria.map((qc, idx) => (
                                <li key={idx}>{qc}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {story.notes && (
                          <div className="mt-2 text-[10px] text-amber-300/90 italic font-mono">
                            {story.notes}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Linked LUs Rule */}
                <div className="pt-3 border-t border-[#1E3A68]/80 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Gekoppeld:</span>
                  <div className="flex flex-wrap gap-1 font-bold">
                    {currentSprint.userStories.linkedLUs.map((lu) => (
                      <span
                        key={lu}
                        className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[11px]"
                      >
                        {lu}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 3: Learning Story */}
              <div
                id="sprint-card-learning"
                className="rounded-3xl bg-[#0F2447]/70 border border-amber-500/30 p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between hover:border-amber-500/50 transition-all shadow-xl shadow-black/20"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#1E3A68]/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Learning Story</h4>
                        <span className="text-[11px] text-slate-300">
                          {currentSprint.learningStories.stories.length}{' '}
                          {currentSprint.learningStories.stories.length === 1
                            ? 'story'
                            : 'stories'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stories list */}
                  <div className="space-y-4 mb-6">
                    {currentSprint.learningStories.stories.length === 0 ? (
                      <div className="p-4 rounded-2xl bg-[#08152B]/60 border border-dashed border-[#1E3A68] text-center">
                        <p className="text-xs text-slate-400 italic">
                          Learning story volgt binnenkort voor deze sprint.
                        </p>
                      </div>
                    ) : (
                      currentSprint.learningStories.stories.map((story, i) => (
                        <div key={i} className="p-3.5 rounded-2xl bg-[#08152B]/85 border border-[#1E3A68]">
                          <p className="text-xs text-slate-200 leading-relaxed font-mono">
                            <span className="text-amber-400 font-bold">Als</span> {story.role},{' '}
                            <span className="text-amber-400 font-bold">wil ik</span> {story.goal},{' '}
                            <span className="text-amber-400 font-bold">zodat</span> {story.value}
                          </p>

                          {/* Acceptance Criteria */}
                          {story.acceptanceCriteria && story.acceptanceCriteria.length > 0 && (
                            <div className="mt-3 pt-2.5 border-t border-[#1E3A68]/70 text-[11px] text-slate-300">
                              <span className="font-semibold text-slate-200 flex items-center gap-1 mb-1">
                                <ListChecks className="w-3 h-3 text-amber-400" />
                                Acceptatiecriteria:
                              </span>
                              <ul className="list-disc pl-4 space-y-0.5">
                                {story.acceptanceCriteria.map((ac, idx) => (
                                  <li key={idx}>{ac}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Quality Criteria */}
                          {story.qualityCriteria && story.qualityCriteria.length > 0 && (
                            <div className="mt-3 pt-2.5 border-t border-[#1E3A68]/70 text-[11px] text-slate-300">
                              <span className="font-semibold text-slate-200 flex items-center gap-1 mb-1">
                                <Award className="w-3 h-3 text-amber-400" />
                                Kwaliteitscriteria:
                              </span>
                              <ul className="list-disc pl-4 space-y-0.5">
                                {story.qualityCriteria.map((qc, idx) => (
                                  <li key={idx}>{qc}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {story.notes && (
                            <div className="mt-2 text-[10px] text-amber-300/90 italic font-mono">
                              {story.notes}
                            </div>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Linked LUs Rule */}
                <div className="pt-3 border-t border-[#1E3A68]/80 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Gekoppeld:</span>
                  <div className="flex flex-wrap gap-1 font-bold">
                    {currentSprint.learningStories.linkedLUs.map((lu) => (
                      <span
                        key={lu}
                        className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px]"
                      >
                        {lu}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
