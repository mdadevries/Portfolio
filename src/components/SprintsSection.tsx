import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Search,
  Code2,
  GraduationCap,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ListChecks,
  Award,
  ExternalLink,
  CircleDashed,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData.ts';
import { SprintData, SprintStory, StoryStatus } from '../types.ts';

interface StoryCardItemProps {
  story: SprintStory;
  accent: 'indigo' | 'cyan' | 'amber';
  /** Unieke sleutel (sprint + type + index) om de handmatige status per story te onthouden */
  storyKey: string;
  /** Status zoals bekend bij de server (voor alle bezoekers gelijk), zodra opgehaald */
  overrideStatus?: StoryStatus;
  /** Meldt een statuswijziging terug aan de sectie, die 'm naar de server stuurt */
  onStatusChange: (key: string, status: StoryStatus) => void;
}

const STORY_STATUS_OPTIONS: StoryStatus[] = ['Nog te doen', 'In uitvoering', 'Afgerond'];

const STORY_STATUS_STYLES: Record<StoryStatus, string> = {
  Afgerond: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
  'In uitvoering': 'bg-cyan-500/15 border-cyan-500/30 text-cyan-700 dark:text-cyan-300',
  'Nog te doen': 'bg-[rgb(var(--bg))] border-[rgb(var(--border))] text-[rgb(var(--text-tertiary))]',
};

const STORY_STATUS_OVERRIDES_KEY = 'storyStatusOverrides';

const LU_BADGE_STYLES: Record<'indigo' | 'cyan' | 'amber', string> = {
  indigo: 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
  cyan: 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
  amber: 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30',
};

/**
 * Gekoppelde LU's voor een storygroep (Research/User/Learning): als de
 * afzonderlijke stories hun eigen linkedLUs hebben, wordt dat de (unieke)
 * bron van waarheid. Zonder per-story koppeling valt het terug op de
 * koppeling van de hele storygroep (gebruikt door sprints zonder stories).
 */
const getGroupLinkedLUs = (group: { stories: SprintStory[]; linkedLUs: string[] }): string[] => {
  const fromStories = Array.from(new Set(group.stories.flatMap((s) => s.linkedLUs || [])));
  return fromStories.length > 0 ? fromStories : group.linkedLUs;
};

const readStatusOverride = (key: string): StoryStatus | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORY_STATUS_OVERRIDES_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Record<string, StoryStatus>;
    return parsed[key] ?? null;
  } catch {
    return null;
  }
};

const writeStatusOverride = (key: string, status: StoryStatus) => {
  try {
    const raw = localStorage.getItem(STORY_STATUS_OVERRIDES_KEY);
    const parsed = raw ? (JSON.parse(raw) as Record<string, StoryStatus>) : {};
    parsed[key] = status;
    localStorage.setItem(STORY_STATUS_OVERRIDES_KEY, JSON.stringify(parsed));
  } catch {
    // localStorage niet beschikbaar — status blijft wel gelden voor deze sessie
  }
};

const StoryCardItem: React.FC<StoryCardItemProps> = ({
  story,
  accent,
  storyKey,
  overrideStatus,
  onStatusChange,
}) => {
  const [isCriteriaOpen, setIsCriteriaOpen] = useState(false);
  const [status, setStatus] = useState<StoryStatus>(
    () => readStatusOverride(storyKey) || story.status || 'Nog te doen'
  );

  // Zodra de status van de server binnenkomt, is die leidend (geldt voor alle bezoekers)
  useEffect(() => {
    if (overrideStatus) {
      setStatus(overrideStatus);
      writeStatusOverride(storyKey, overrideStatus);
    }
  }, [overrideStatus, storyKey]);

  const handleStatusChange = (newStatus: StoryStatus) => {
    setStatus(newStatus);
    writeStatusOverride(storyKey, newStatus);
    onStatusChange(storyKey, newStatus);
  };

  const roleColorClass =
    accent === 'indigo'
      ? 'text-indigo-700 dark:text-indigo-400'
      : accent === 'cyan'
      ? 'text-cyan-700 dark:text-cyan-400'
      : 'text-amber-700 dark:text-amber-400';

  const hasCriteria = Boolean(
    (story.acceptanceCriteria && story.acceptanceCriteria.length > 0) ||
      (story.qualityCriteria && story.qualityCriteria.length > 0)
  );

  const statusIcon = {
    Afgerond: <CheckCircle2 className="w-3 h-3 shrink-0" />,
    'In uitvoering': <Clock className="w-3 h-3 shrink-0" />,
    'Nog te doen': <CircleDashed className="w-3 h-3 shrink-0" />,
  }[status];

  return (
    <div className="p-3.5 rounded-2xl bg-[rgb(var(--surface-sunken))]/85 border border-[rgb(var(--border))]">
      {/* Story narrative */}
      <p className="text-xs text-[rgb(var(--text-secondary))] leading-relaxed font-mono">
        <span className={`${roleColorClass} font-bold`}>Als</span> {story.role},{' '}
        <span className={`${roleColorClass} font-bold`}>wil ik</span> {story.goal},{' '}
        <span className={`${roleColorClass} font-bold`}>zodat</span> {story.value}
      </p>

      {/* Gekoppelde leeruitkomst(en) van déze specifieke story */}
      {story.linkedLUs && story.linkedLUs.length > 0 && (
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wider">
            LU:
          </span>
          {story.linkedLUs.map((lu, idx) => (
            <span
              key={lu}
              className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${LU_BADGE_STYLES[accent]} ${
                idx > 0 ? 'opacity-70' : ''
              }`}
              title={idx === 0 ? 'Primaire leeruitkomst' : 'Secundaire leeruitkomst'}
            >
              {lu}
            </span>
          ))}
        </div>
      )}

      {/* Collapsible Criteria (Accordion, default collapsed) */}
      {hasCriteria && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setIsCriteriaOpen((prev) => !prev)}
            className="w-full flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-xl bg-[rgb(var(--bg))] hover:bg-[rgb(var(--surface-hover))] border border-[rgb(var(--border))] text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))] transition-colors text-left group"
          >
            <span className="flex items-center gap-1.5 text-[11px] font-semibold">
              <ListChecks className={`w-3.5 h-3.5 ${roleColorClass}`} />
              <span>Bekijk Acceptatie- & Kwaliteitscriteria</span>
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-[rgb(var(--text-muted))] group-hover:text-[rgb(var(--text-secondary))] transition-transform duration-200 ${
                isCriteriaOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isCriteriaOpen && (
            <div className="mt-2.5 pt-2 border-t border-[rgb(var(--border))]/60 space-y-2.5">
              {story.acceptanceCriteria && story.acceptanceCriteria.length > 0 && (
                <div className="text-[11px] text-[rgb(var(--text-tertiary))]">
                  <span className="font-semibold text-[rgb(var(--text-secondary))] flex items-center gap-1 mb-1">
                    <ListChecks className={`w-3 h-3 ${roleColorClass}`} />
                    Acceptatiecriteria:
                  </span>
                  <ul className="list-disc pl-4 space-y-0.5">
                    {story.acceptanceCriteria.map((ac, idx) => (
                      <li key={idx}>{ac}</li>
                    ))}
                  </ul>
                </div>
              )}

              {story.qualityCriteria && story.qualityCriteria.length > 0 && (
                <div className="text-[11px] text-[rgb(var(--text-tertiary))]">
                  <span className="font-semibold text-[rgb(var(--text-secondary))] flex items-center gap-1 mb-1">
                    <Award className={`w-3 h-3 ${roleColorClass}`} />
                    Kwaliteitscriteria:
                  </span>
                  <ul className="list-disc pl-4 space-y-0.5">
                    {story.qualityCriteria.map((qc, idx) => (
                      <li key={idx}>{qc}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Story Status & Bewijsmateriaal Block (Always visible) */}
      <div className="mt-3.5 pt-3 border-t border-[rgb(var(--border))]/70 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-semibold text-[rgb(var(--text-tertiary))]">Status:</span>
          <div
            className={`inline-flex items-center gap-1 pl-2 pr-1.5 py-0.5 rounded-full text-[11px] font-semibold border ${STORY_STATUS_STYLES[status]}`}
          >
            {statusIcon}
            <select
              value={status}
              onChange={(e) => handleStatusChange(e.target.value as StoryStatus)}
              aria-label="Status van deze story aanpassen"
              className="bg-transparent border-none outline-none text-[11px] font-semibold cursor-pointer appearance-none pr-1"
            >
              {STORY_STATUS_OPTIONS.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-[rgb(var(--surface))] text-[rgb(var(--text-primary))]"
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-1 flex flex-col gap-1.5">
          <span className="text-[11px] font-semibold text-[rgb(var(--text-tertiary))]">Bewijsmateriaal:</span>
          {story.evidenceLinks && story.evidenceLinks.length > 0 ? (
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              {story.evidenceLinks.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/25 border border-cyan-500/40 transition-colors shadow-sm"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-3 h-3 text-cyan-700 dark:text-cyan-400" />
                </a>
              ))}
            </div>
          ) : (
            <p className="text-[11px] text-[rgb(var(--text-muted))] italic">
              {story.evidenceNote || 'Bewijs volgt zodra deze story is afgerond.'}
            </p>
          )}
        </div>
      </div>

      {story.notes && (
        <div className="mt-2 text-[10px] text-amber-700 dark:text-amber-300/90 italic font-mono">
          {story.notes}
        </div>
      )}
    </div>
  );
};

export const SprintsSection: React.FC = () => {
  const { sprints } = portfolioData;
  const [selectedSprintIndex, setSelectedSprintIndex] = useState<number>(0);
  const [statusOverrides, setStatusOverrides] = useState<Record<string, StoryStatus>>({});

  // Haal de voor iedereen geldende statussen op bij het laden van de sectie
  useEffect(() => {
    fetch('/api/story-status')
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, StoryStatus>) => {
        setStatusOverrides((prev) => ({ ...prev, ...data }));
      })
      .catch(() => {
        // API niet bereikbaar — de site blijft werken met lokale/standaardstatussen
      });
  }, []);

  const handleStatusChange = (key: string, status: StoryStatus) => {
    setStatusOverrides((prev) => ({ ...prev, [key]: status }));
    fetch('/api/story-status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, status }),
    }).catch(() => {
      // Opslaan op de server mislukt — wijziging blijft wel gelden in deze browser
    });
  };

  const currentSprint: SprintData = sprints[selectedSprintIndex];
  const activeSprintIndex = sprints.findIndex((s) => s.isCurrent);

  return (
    <section
      id="sprints"
      className="py-20 md:py-28 relative border-t border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-sunken))]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[rgb(var(--surface))] border border-[rgb(var(--border))] text-[rgb(var(--text-secondary))] mb-4 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
            <span>Agile & Scrum Tijdlijn</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[rgb(var(--text-primary))] tracking-tight mb-4">
            Sprint-overzicht (8 Sprints van 2 Weken)
          </h2>
          <p className="text-[rgb(var(--text-tertiary))] text-base sm:text-lg leading-relaxed">
            De 16-weekse minor is opgedeeld in 8 iteratieve sprints volgens de Scrum/Agile-methode.
            Selecteer een sprint in de linker tijdlijn om de bijbehorende Research Stories, User
            Stories en Learning Stories te bekijken.
          </p>
        </div>

        {/* 2-Column Layout: Vertical Timeline on Left, Story Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical Timeline */}
          <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-24">
            <div className="rounded-3xl bg-[rgb(var(--surface))]/70 border border-[rgb(var(--border))]/90 p-5 sm:p-6 backdrop-blur-md shadow-xl shadow-black/20">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgb(var(--border))]/80">
                <span className="text-xs font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-wider">
                  Sprint Tijdlijn
                </span>
                <span className="text-xs text-[rgb(var(--text-muted))]">8 sprints • 16 weken</span>
              </div>

              {/* Vertical Steps with Connecting Line */}
              <div className="relative pl-6 sm:pl-7 space-y-3.5 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[rgb(var(--border))]">
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
                          <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-[rgb(var(--bg))] flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <div
                            className={`w-2.5 h-2.5 rounded-full ring-2 ring-[rgb(var(--bg))] ${
                              isSelected ? 'bg-cyan-400' : 'bg-[rgb(var(--border))]'
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
                            ? 'bg-[rgb(var(--bg))] border-cyan-400 shadow-md shadow-cyan-950/40 translate-x-1'
                            : isFuture
                            ? 'bg-[rgb(var(--bg))]/40 border-transparent hover:bg-[rgb(var(--bg))]/80 hover:border-[rgb(var(--border))] opacity-80 hover:opacity-100'
                            : 'bg-[rgb(var(--bg))]/70 border-[rgb(var(--border))]/60 hover:border-[rgb(var(--border))]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                                isSelected
                                  ? 'bg-cyan-400 text-[rgb(var(--bg))]'
                                  : 'bg-[rgb(var(--surface))] text-[rgb(var(--text-secondary))] border border-[rgb(var(--border))]'
                              }`}
                            >
                              S{sprint.sprintNumber}
                            </span>
                            <span className="text-xs font-semibold text-[rgb(var(--text-primary))] truncate max-w-[130px] sm:max-w-[170px]">
                              {sprint.title}
                            </span>
                          </div>

                          {/* Status Badge */}
                          {isCurrent ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 shrink-0">
                              Actief
                            </span>
                          ) : isPast ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 shrink-0">
                              Afgerond
                            </span>
                          ) : (
                            <span className="text-[10px] text-[rgb(var(--text-muted))] shrink-0">Gepland</span>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-[rgb(var(--text-tertiary))] mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[rgb(var(--text-muted))]" />
                            {sprint.period}
                          </span>
                          <span className="text-[rgb(var(--text-muted))] truncate max-w-[120px] text-right">
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
                className="p-5 sm:p-6 rounded-3xl bg-[rgb(var(--surface))]/80 border border-[rgb(var(--border))]/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl shadow-black/20"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-xl bg-cyan-400 text-[rgb(var(--bg))]">
                      Sprint {currentSprint.sprintNumber} van 8
                    </span>
                    <span className="text-xs font-medium text-[rgb(var(--text-secondary))] flex items-center gap-1 bg-[rgb(var(--bg))] px-2.5 py-1 rounded-xl border border-[rgb(var(--border))]">
                      <Clock className="w-3 h-3 text-cyan-700 dark:text-cyan-400" />
                      {currentSprint.period}
                    </span>
                    {currentSprint.isCurrent && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        Huidige Actieve Sprint
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[rgb(var(--text-primary))]">
                    {currentSprint.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] mt-1">
                    Thema: <span className="text-cyan-700 dark:text-cyan-300 font-medium">{currentSprint.theme}</span>
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-[rgb(var(--border))]">
                  <span className="text-xs text-[rgb(var(--text-muted))] block">Sprintfocus</span>
                  <span className="text-xs font-bold text-[rgb(var(--text-secondary))]">
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
                className="rounded-3xl bg-[rgb(var(--surface))]/70 border border-indigo-500/30 p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between hover:border-indigo-500/50 transition-all shadow-xl shadow-black/20"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[rgb(var(--border))]/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                        <Search className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[rgb(var(--text-primary))]">Research Story</h4>
                        <span className="text-[11px] text-[rgb(var(--text-tertiary))]">
                          {currentSprint.researchStories.stories.length === 0
                            ? 'Komt binnenkort'
                            : `${currentSprint.researchStories.stories.length} ${
                                currentSprint.researchStories.stories.length === 1
                                  ? 'story'
                                  : 'stories'
                              }`}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stories list */}
                  <div className="space-y-4 mb-6">
                    {currentSprint.researchStories.stories.length === 0 ? (
                      <div className="p-4 rounded-2xl bg-[rgb(var(--surface-sunken))]/60 border border-dashed border-[rgb(var(--border))] text-center">
                        <p className="text-xs text-[rgb(var(--text-muted))] italic">
                          Komt binnenkort — Research stories voor Sprint {currentSprint.sprintNumber} worden geformuleerd bij de start van deze sprint.
                        </p>
                      </div>
                    ) : (
                      currentSprint.researchStories.stories.map((story, i) => (
                        <StoryCardItem
                          key={i}
                          story={story}
                          accent="indigo"
                          storyKey={`sprint-${currentSprint.sprintNumber}-research-${i}`}
                          overrideStatus={statusOverrides[`sprint-${currentSprint.sprintNumber}-research-${i}`]}
                          onStatusChange={handleStatusChange}
                        />
                      ))
                    )}
                  </div>
                </div>

                {/* Linked LUs Rule */}
                <div className="pt-3 border-t border-[rgb(var(--border))]/80 flex items-center justify-between text-xs">
                  <span className="text-[rgb(var(--text-tertiary))]">Gekoppeld:</span>
                  <div className="flex flex-wrap gap-1 font-bold">
                    {getGroupLinkedLUs(currentSprint.researchStories).map((lu) => (
                      <span
                        key={lu}
                        className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 text-[11px]"
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
                className="rounded-3xl bg-[rgb(var(--surface))]/70 border border-cyan-500/30 p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/50 transition-all shadow-xl shadow-black/20"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[rgb(var(--border))]/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[rgb(var(--text-primary))]">User Story</h4>
                        <span className="text-[11px] text-[rgb(var(--text-tertiary))]">
                          {currentSprint.userStories.stories.length === 0
                            ? 'Komt binnenkort'
                            : `${currentSprint.userStories.stories.length} ${
                                currentSprint.userStories.stories.length === 1
                                  ? 'story'
                                  : 'stories'
                              }`}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stories list */}
                  <div className="space-y-4 mb-6">
                    {currentSprint.userStories.stories.length === 0 ? (
                      <div className="p-4 rounded-2xl bg-[rgb(var(--surface-sunken))]/60 border border-dashed border-[rgb(var(--border))] text-center">
                        <p className="text-xs text-[rgb(var(--text-muted))] italic">
                          Komt binnenkort — User stories voor Sprint {currentSprint.sprintNumber} worden geformuleerd bij de start van deze sprint.
                        </p>
                      </div>
                    ) : (
                      currentSprint.userStories.stories.map((story, i) => (
                        <StoryCardItem
                          key={i}
                          story={story}
                          accent="cyan"
                          storyKey={`sprint-${currentSprint.sprintNumber}-user-${i}`}
                          overrideStatus={statusOverrides[`sprint-${currentSprint.sprintNumber}-user-${i}`]}
                          onStatusChange={handleStatusChange}
                        />
                      ))
                    )}
                  </div>
                </div>

                {/* Linked LUs Rule */}
                <div className="pt-3 border-t border-[rgb(var(--border))]/80 flex items-center justify-between text-xs">
                  <span className="text-[rgb(var(--text-tertiary))]">Gekoppeld:</span>
                  <div className="flex flex-wrap gap-1 font-bold">
                    {getGroupLinkedLUs(currentSprint.userStories).map((lu) => (
                      <span
                        key={lu}
                        className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 text-[11px]"
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
                className="rounded-3xl bg-[rgb(var(--surface))]/70 border border-amber-500/30 p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between hover:border-amber-500/50 transition-all shadow-xl shadow-black/20"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[rgb(var(--border))]/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center border border-amber-500/30">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[rgb(var(--text-primary))]">Learning Story</h4>
                        <span className="text-[11px] text-[rgb(var(--text-tertiary))]">
                          {currentSprint.learningStories.stories.length === 0
                            ? 'Komt binnenkort'
                            : `${currentSprint.learningStories.stories.length} ${
                                currentSprint.learningStories.stories.length === 1
                                  ? 'story'
                                  : 'stories'
                              }`}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stories list */}
                  <div className="space-y-4 mb-6">
                    {currentSprint.learningStories.stories.length === 0 ? (
                      <div className="p-4 rounded-2xl bg-[rgb(var(--surface-sunken))]/60 border border-dashed border-[rgb(var(--border))] text-center">
                        <p className="text-xs text-[rgb(var(--text-muted))] italic">
                          Komt binnenkort — Learning story voor Sprint {currentSprint.sprintNumber} wordt geformuleerd bij de start van deze sprint.
                        </p>
                      </div>
                    ) : (
                      currentSprint.learningStories.stories.map((story, i) => (
                        <StoryCardItem
                          key={i}
                          story={story}
                          accent="amber"
                          storyKey={`sprint-${currentSprint.sprintNumber}-learning-${i}`}
                          overrideStatus={statusOverrides[`sprint-${currentSprint.sprintNumber}-learning-${i}`]}
                          onStatusChange={handleStatusChange}
                        />
                      ))
                    )}
                  </div>
                </div>

                {/* Linked LUs Rule */}
                <div className="pt-3 border-t border-[rgb(var(--border))]/80 flex items-center justify-between text-xs">
                  <span className="text-[rgb(var(--text-tertiary))]">Gekoppeld:</span>
                  <div className="flex flex-wrap gap-1 font-bold">
                    {getGroupLinkedLUs(currentSprint.learningStories).map((lu) => (
                      <span
                        key={lu}
                        className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-[11px]"
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
