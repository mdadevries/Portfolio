import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const WELCOME_MESSAGE: ChatMessage = {
  role: 'model',
  text:
    'Hoi! 👋 Ik ben de AI-assistent van deze portfoliowebsite. Vraag me gerust iets over ' +
    'Max, de minor Futureproof met AI, of waar je iets op deze site kunt vinden.',
};

/**
 * Zwevende chatbot-widget (rechtsonder) die vragen van bezoekers beantwoordt
 * via de /api/chat serverless functie (Gemini). Helpt bezoekers de site te
 * navigeren en beantwoordt algemene vragen.
 */
export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', text: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          // Geschiedenis excl. de welkomsttekst, die hoort niet in de modelconversatie.
          history: nextMessages.slice(1, -1),
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.reply) {
        throw new Error(data?.error || 'Er ging iets mis.');
      }

      setMessages((prev) => [...prev, { role: 'model', text: data.reply }]);
    } catch (err) {
      setError(
        'Sorry, de chatbot reageert nu niet. Probeer het zo nog eens, of ga naar de contactsectie.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div id="chat-widget" className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div
          role="dialog"
          aria-label="Chat met de AI-assistent"
          className="w-[min(92vw,380px)] h-[min(70vh,520px)] flex flex-col rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] shadow-2xl shadow-black/20 overflow-hidden"
          style={{ animation: 'chat-widget-in 180ms ease-out' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--surface-sunken))]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
              <p className="text-sm font-semibold text-[rgb(var(--text-primary))]">
                AI-assistent
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Sluit chat"
              className="p-1.5 rounded-lg text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--surface-hover))] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-cyan-600 text-white rounded-br-sm'
                      : 'bg-[rgb(var(--surface-sunken))] text-[rgb(var(--text-primary))] border border-[rgb(var(--border))] rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm px-3.5 py-2 bg-[rgb(var(--surface-sunken))] border border-[rgb(var(--border))] text-[rgb(var(--text-secondary))]">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span className="text-xs">Typt...</span>
                </div>
              </div>
            )}
            {error && (
              <p className="text-xs text-rose-600 dark:text-rose-400 px-1">{error}</p>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-[rgb(var(--border))] p-3 bg-[rgb(var(--surface))]">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Stel een vraag..."
                aria-label="Typ je vraag"
                className="flex-1 resize-none max-h-24 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface-sunken))] px-3 py-2 text-sm text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-faint))] focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                aria-label="Verstuur bericht"
                className="p-2.5 rounded-xl bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-40 disabled:hover:bg-cyan-600 transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        id="chat-widget-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Sluit chat' : 'Open chat met de AI-assistent'}
        aria-expanded={isOpen}
        className="p-4 rounded-full bg-cyan-600 text-white shadow-lg shadow-cyan-900/20 hover:bg-cyan-500 hover:scale-105 active:scale-95 transition-all"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </div>
  );
};
