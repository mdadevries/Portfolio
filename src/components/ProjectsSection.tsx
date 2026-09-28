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
import { SmartImage } from './SmartImage.tsx';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  const getStatusBadge = (status: ProjectItem['status']) => {
    switch (status) {
      case 'Afgerond':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
            Afgerond
          </span>
        );
      case 'In ontwikkeling':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            In ontwikkeling
          </span>
        );
      case 'Gepland':
      default:
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[rgb(var(--bg))] text-[rgb(var(--text-tertiary))] border border-[rgb(var(--border))]">
            Gepland
          </span>
        );
    }
  };

  return (
    <section
      id="projecten"
      className="py-20 md:py-28 relative border-t border-[rgb(var(--border-subtle))] bg-[rgb(var(--bg))]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[rgb(var(--surface))] border border-[rgb(var(--border))] text-[rgb(var(--text-secondary))] mb-4 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
            <span>Bouw- & Praktijkresultaten</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[rgb(var(--text-primary))] tracking-tight mb-4">
            AI-Projecten & Prototypes
          </h2>
          <p className="text-[rgb(var(--text-tertiary))] text-base sm:text-lg leading-relaxed">
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
              className={`rounded-3xl bg-[rgb(var(--surface))]/70 border overflow-hidden backdrop-blur-md flex flex-col justify-between transition-all duration-200 shadow-xl shadow-black/20 ${
                project.status === 'In ontwikkeling'
                  ? 'border-cyan-500/40 hover:border-cyan-500/60'
                  : 'border-[rgb(var(--border))]/90 hover:border-[rgb(var(--border-hover))]'
              }`}
            >
              <div>
                <SmartImage
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  aspect="aspect-video"
                  rounded="rounded-none"
                />
                <div className="p-6 sm:p-7 pb-0">
                {/* Header Row: Sprint & Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[rgb(var(--text-secondary))] bg-[rgb(var(--bg))] px-3 py-1 rounded-xl border border-[rgb(var(--border))]">
                    <Clock className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
                    {project.sprint}
                  </span>
                  {getStatusBadge(project.status)}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[rgb(var(--text-primary))] mb-3 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[rgb(var(--text-tertiary))] leading-relaxed mb-6">
                  {project.description}
                </p>
                </div>
              </div>

              {/* Sprint indicator */}
              <div className="px-6 sm:px-7 pt-4 pb-6 sm:pb-7 border-t border-[rgb(var(--border))]/80 flex items-center text-xs text-[rgb(var(--text-muted))]">
                <span className="flex items-center gap-1.5 font-medium text-[rgb(var(--text-tertiary))]">
                  <Layers className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
                  {project.sprint}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Guidance Banner */}
        <div
          id="upcoming-pocs-banner"
          className="rounded-2xl bg-[rgb(var(--surface))]/60 border border-[rgb(var(--border))] p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-black/15"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/30 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[rgb(var(--text-primary))]">
                Oplevering & Technische Verantwoording
              </h4>
              <p className="text-xs text-[rgb(var(--text-tertiary))] leading-relaxed">
                Zodra een prototype gereed is, worden de concrete procesarchitectuur, code en
                evaluatieresultaten hier direct gepubliceerd.
              </p>
            </div>
          </div>

          <a
            href="#sprints"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-[rgb(var(--bg))] border border-[rgb(var(--border))] text-cyan-700 dark:text-cyan-300 hover:bg-[rgb(var(--surface-hover))] shrink-0 transition-colors"
          >
            <span>Bekijk Sprint Backlog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
