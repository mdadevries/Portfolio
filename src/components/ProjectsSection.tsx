import React from 'react';
import {
  Code2,
  Clock,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';
import { ProjectItem } from '../types.ts';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

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
            AI-Projecten & Prototypes
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Hier toont Max de gerealiseerde AI-oplossingen en prototypes die tijdens de sprints
            worden ontwikkeld en gevalideerd binnen het werkveld van Technische Bedrijfskunde.
          </p>
        </div>

        {/* 3 Honest, Clean Placeholder Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {projects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className={`rounded-3xl bg-[#0F2447]/70 border p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between transition-all duration-200 shadow-xl shadow-black/20 ${
                project.status === 'In ontwikkeling'
                  ? 'border-cyan-500/40 hover:border-cyan-500/60'
                  : 'border-[#1E3A68]/90 hover:border-[#2A4B82]'
              }`}
            >
              <div>
                {/* Header Row: Sprint & Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-[#0A1A33] px-3 py-1 rounded-xl border border-[#1E3A68]">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    {project.sprint}
                  </span>
                  {getStatusBadge(project.status)}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Clean Placeholder Note Box */}
              <div className="pt-4 border-t border-[#1E3A68]/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  {project.sprint}
                </span>
                <span className="italic text-[11px] text-slate-400">
                  Inhoud volgt bij realisatie
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Guidance Banner */}
        <div
          id="upcoming-pocs-banner"
          className="rounded-2xl bg-[#0F2447]/60 border border-[#1E3A68] p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-black/15"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center border border-cyan-500/30 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Oplevering & Technische Verantwoording
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zodra een prototype gereed is, worden de concrete procesarchitectuur, code en
                evaluatieresultaten hier direct gepubliceerd.
              </p>
            </div>
          </div>

          <a
            href="#sprints"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-[#0A1A33] border border-[#1E3A68] text-cyan-300 hover:bg-[#132A52] shrink-0 transition-colors"
          >
            <span>Bekijk Sprint Backlog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
