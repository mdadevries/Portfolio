import React from 'react';
import {
  Mail,
  MapPin,
  GraduationCap,
  ExternalLink,
  Send,
  Linkedin,
  Github,
  MessageSquare,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';

export const ContactSection: React.FC = () => {
  const { contact } = portfolioData;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative border-t border-[#162D50] bg-[#0A1A33] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0F2447] border border-[#1E3A68] text-slate-200 mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>In Gesprek Komen</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Contact & Samenwerking
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Heb je vragen over een van de leeruitkomsten, interesse in de onderzoeksresultaten of
            wil je sparren over procesautomatisering met AI? Neem gerust contact op.
          </p>
        </div>

        {/* Large 2-Column Card */}
        <div
          id="contact-large-card"
          className="rounded-3xl bg-[#0F2447]/70 border border-[#1E3A68]/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl shadow-black/30 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Contact Cards (E-mail, Opleiding, Locatie, Socials) */}
            <div className="lg:col-span-6 space-y-4">
              {/* E-mail Card */}
              <div className="p-5 rounded-2xl bg-[#08152B]/85 border border-[#1E3A68] flex items-start gap-4 hover:border-cyan-500/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center border border-cyan-500/30 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-0.5">
                    E-mailadres
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Institution & Programme Card */}
              <div className="p-5 rounded-2xl bg-[#08152B]/85 border border-[#1E3A68] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center border border-indigo-500/30 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-0.5">
                    Instelling & Opleiding
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {contact.institution} • {contact.programme}
                  </div>
                  <div className="text-xs text-indigo-300 mt-0.5 font-medium">
                    {contact.minor}
                  </div>
                </div>
              </div>

              {/* Standplaats / Woonplaats Card */}
              <div className="p-5 rounded-2xl bg-[#08152B]/85 border border-[#1E3A68] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-0.5">
                    Standplaats / Locatie
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {contact.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Message & Action Buttons */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Stuur direct een bericht
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Momenteel direct bereikbaar via e-mail voor docenten, assessoren en
                  bedrijfspartners.
                </p>
              </div>

              {/* Action Buttons Container */}
              <div id="contact-action-buttons-group" className="space-y-3">
                {/* 1. Direct Mailen Button */}
                <a
                  id="contact-btn-email"
                  href={`mailto:${contact.email}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4 text-cyan-200" />
                  <span>Direct Mailen naar Max</span>
                </a>

                {/* Social links (LinkedIn & GitHub) if configured */}
                {contact.socialLinks.linkedinUrl && (
                  <a
                    id="contact-btn-linkedin"
                    href={contact.socialLinks.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-bold bg-[#0A1A33] border border-[#1E3A68] text-slate-200 hover:bg-[#152B52] hover:border-cyan-500/40 active:scale-[0.99] transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Profiel</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}

                {contact.socialLinks.githubUrl && (
                  <a
                    id="contact-btn-github"
                    href={contact.socialLinks.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-bold bg-[#0A1A33] border border-[#1E3A68] text-slate-200 hover:bg-[#152B52] hover:border-cyan-500/40 active:scale-[0.99] transition-all"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
