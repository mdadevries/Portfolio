import React from 'react';
import {
  Code2,
  ExternalLink,
  Github,
  Clock,
  Layers,
  Sparkles,
  Cpu,
  ArrowRight,
  Terminal,
  CheckCircle2,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';
import { ProjectItem } from '../types.ts';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  const activeProject = projects.find((p) => p.status === 'In ontwikkeling') || projects[0];
  const upcomingProjects = projects.filter((p) => p.id !== activeProject.id);

  const getStatusBadge = (status: ProjectItem['status']) => {
    switch (status) {
      case 'Afgerond':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Afgerond
          </span>
        );
      case 'In ontwikkeling':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            In ontwikkeling
          </span>
        );
      case 'Gepland':
      default:
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0A1A33] text-slate-300 border border-[#1E3A68]">
            Gepland
          </span>
        );
    }
  };

  return (
    <section
      id="projecten"
      className="py-20 md:py-28 relative border-t border-[#162D50] bg-[#0A1A33]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0F2447] border border-[#1E3A68] text-slate-200 mb-4 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Bouw- & Praktijkresultaten</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            AI-Projecten & Proof-of-Concepts
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Hier toont Max de gerealiseerde AI-oplossingen, werkende prototypes en technische
            implementaties die tijdens de 8 tweewekelijkse sprints worden gebouwd en gevalideerd.
          </p>
        </div>

        {/* Asymmetrical Bento-Grid: 2 Columns for active POC, 1 Column for planned POCs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Bento Featured Card (2 Columns Wide on Desktop): Project 1 in ontwikkeling */}
          {activeProject && (
            <div
              id={`project-card-${activeProject.id}`}
              className="lg:col-span-2 rounded-3xl bg-[#0F2447]/80 border border-cyan-500/40 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between shadow-2xl shadow-cyan-950/30 relative overflow-hidden group"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Header Row: Sprint & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0A1A33] px-3 py-1 rounded-xl border border-[#1E3A68]">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {activeProject.sprint}
                    </span>
                    <span className="text-xs text-slate-300 font-medium hidden sm:inline">
                      Hoofd-POC Minor
                    </span>
                  </div>
                  {getStatusBadge(activeProject.status)}
                </div>

                {/* Main Title & Description */}
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {activeProject.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-2xl">
                  {activeProject.description}
                </p>

                {/* Simulated Agent Terminal / Architecture Flow Box */}
                <div className="mb-6 rounded-2xl bg-[#07152B]/95 border border-[#1E3A68] p-4 font-mono text-xs shadow-inner">
                  <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A68]/80 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-[11px] font-semibold text-slate-300">
                        agent_workflow_runtime.log
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                  </div>
                  <div className="space-y-1.5 text-[11px] leading-relaxed">
                    <div className="text-cyan-400 flex items-center gap-2">
                      <span className="text-slate-500">01</span>
                      <span>[INCOMING_EVENT]</span>
                      <span className="text-slate-200">Incident ticket #SC-1048 ontvangen uit ERP</span>
                    </div>
                    <div className="text-indigo-300 flex items-center gap-2">
                      <span className="text-slate-500">02</span>
                      <span>[AGENT_ROUTING]</span>
                      <span className="text-slate-200">LangGraph agent analyseert root-cause & urgentie</span>
                    </div>
                    <div className="text-emerald-400 flex items-center gap-2">
                      <span className="text-slate-500">03</span>
                      <span>[DECISION_OUTPUT]</span>
                      <span className="text-slate-200">Herallocatie voorgesteld + audittrail vastgelegd</span>
                    </div>
                  </div>
                </div>

                {/* Two-column features & metadata inside bento card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {/* Tech Stack */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                      Gebruikte Stack & Tools:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-[#08152B] border border-[#1E3A68] text-slate-200"
                        >
                          <Cpu className="w-3 h-3 text-cyan-400" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Linked Learning Outcomes */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                      Gekoppelde Leeruitkomsten:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.learningOutcomes.map((luCode) => (
                        <a
                          key={luCode}
                          href="#leeruitkomsten"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-[#0A1A33] text-cyan-300 border border-[#1E3A68] hover:border-cyan-400 transition-colors"
                        >
                          <Layers className="w-3 h-3 text-cyan-400" />
                          {luCode}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-[#1E3A68]/80 flex flex-wrap items-center gap-3">
                {activeProject.demoUrl ? (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-400 text-[#0A1A33] hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-400/20"
                  >
                    <span>Live Demo Bekijken</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0A1A33] text-slate-400 border border-[#1E3A68] cursor-not-allowed"
                    title="Demo komt beschikbaar zodra prototype gebouwd is"
                  >
                    <span>Prototype In Aanbouw</span>
                  </button>
                )}

                {activeProject.githubUrl ? (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#0A1A33] text-slate-200 hover:bg-[#152B52] border border-[#1E3A68] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Broncode Repository</span>
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0A1A33] text-slate-400 border border-[#1E3A68] cursor-not-allowed"
                    title="Code repository nog niet openbaar"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repo volgt in Sprint 2</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Bento Right Column: Compact Cards for Upcoming Projects */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {upcomingProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="rounded-3xl bg-[#0F2447]/70 border border-[#1E3A68]/90 p-5 sm:p-6 backdrop-blur-md hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-xl shadow-black/20 flex-1"
              >
                <div>
                  {/* Sprint & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-[#0A1A33] px-2.5 py-1 rounded-xl border border-[#1E3A68]">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {project.sprint}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack compact pills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#08152B] border border-[#1E3A68] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Linked LU & status note */}
                <div className="pt-3 border-t border-[#1E3A68]/70 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] text-slate-400">LU:</span>
                    {project.learningOutcomes.map((luCode) => (
                      <span
                        key={luCode}
                        className="text-[11px] font-bold text-cyan-400 bg-[#0A1A33] px-1.5 py-0.5 rounded border border-[#1E3A68]"
                      >
                        {luCode}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-medium italic text-slate-400">
                    Gepland in minor
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner: Volgende POC's gepland */}
        <div
          id="upcoming-pocs-banner"
          className="rounded-2xl bg-gradient-to-r from-[#0F2447] via-[#0D1F3D] to-[#122549] border border-[#1E3A68] p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-black/15"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Volgende POC's & Uitbreidingen Gepland
              </h4>
              <p className="text-xs text-slate-300">
                In sprints 5 t/m 8 ligt de nadruk op integratie met enterprise ERP-systemen en
                multi-agent orchestratie.
              </p>
            </div>
          </div>

          <a
            href="#sprints"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-200 shrink-0 transition-colors"
          >
            <span>Bekijk Sprint Backlog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
