import React from 'react';
import { Search, Code2, GraduationCap, Layers } from 'lucide-react';
import { motion } from 'motion/react';

const storyTypes = [
  {
    icon: Search,
    title: 'Research Stories',
    color: 'text-indigo-700 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    description:
      'Fundamenteel onderzoek naar AI-impact, ethiek, wetgeving (EU AI Act) en procesarchitectuur.',
    lu: 'Gekoppeld aan LU1 & LU3',
  },
  {
    icon: Code2,
    title: 'User Stories',
    color: 'text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    description:
      'Praktijkgerichte prototypes en AI-tools (n8n, APIs, LLMs) die direct operationele knelpunten oplossen.',
    lu: 'Gekoppeld aan LU2 & LU4',
  },
  {
    icon: GraduationCap,
    title: 'Learning Stories',
    color: 'text-amber-700 dark:text-amber-400 bg-amber-500/10 border-amber-500/20',
    description:
      'Persoonlijke leercurve, tool-experimenten, Scrum-retrospectives en methodische zelfreflectie.',
    lu: 'Gekoppeld aan LU4 & LU5',
  },
];

/**
 * Compacte, losstaande sectie direct onder de hero. Was voorheen een kaart
 * bínnen de hero; nu verplaatst zodat het eerste scherm rustig blijft.
 */
export const MethodologySection: React.FC = () => {
  return (
    <section
      id="methodiek"
      className="relative py-14 md:py-16 border-t border-[rgb(var(--border-subtle))]"
      aria-labelledby="methodiek-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/30 shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 id="methodiek-heading" className="text-sm sm:text-base font-bold text-[rgb(var(--text-primary))] font-display">
                Scrum Sprint Methodiek
              </h2>
              <p className="text-xs text-[rgb(var(--text-tertiary))]">3 Story-types als bouwstenen van het portfolio</p>
            </div>
          </div>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[rgb(var(--surface))] text-cyan-700 dark:text-cyan-300 border border-[rgb(var(--border))] shrink-0">
            Agile Minor
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {storyTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4 rounded-2xl bg-[rgb(var(--surface))]/70 border border-[rgb(var(--border))]/90 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`p-1.5 rounded-lg border ${item.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-[rgb(var(--text-primary))]">{item.title}</h3>
                </div>
                <p className="text-xs text-[rgb(var(--text-tertiary))] leading-relaxed mb-2">{item.description}</p>
                <span className="text-[11px] font-medium text-[rgb(var(--text-muted))]">{item.lu}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-3 max-w-md">
          <div className="p-3 rounded-xl bg-[rgb(var(--surface-sunken))]/80 border border-[rgb(var(--border-muted))]/80 text-center">
            <div className="text-lg font-bold font-display text-[rgb(var(--text-primary))]">16</div>
            <div className="text-[10px] font-medium text-[rgb(var(--text-tertiary))]">Weken</div>
          </div>
          <div className="p-3 rounded-xl bg-[rgb(var(--surface-sunken))]/80 border border-[rgb(var(--border-muted))]/80 text-center">
            <div className="text-lg font-bold font-display text-cyan-700 dark:text-cyan-400">8</div>
            <div className="text-[10px] font-medium text-[rgb(var(--text-tertiary))]">Sprints</div>
          </div>
          <div className="p-3 rounded-xl bg-[rgb(var(--surface-sunken))]/80 border border-[rgb(var(--border-muted))]/80 text-center">
            <div className="text-lg font-bold font-display text-indigo-700 dark:text-indigo-400">5</div>
            <div className="text-[10px] font-medium text-[rgb(var(--text-tertiary))]">Leeruitkomsten</div>
          </div>
        </div>
      </div>
    </section>
  );
};
