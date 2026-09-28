import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

// Compacte, actuele beschrijving van de site zodat de chatbot bezoekers
// echt kan doorverwijzen naar de juiste sectie en vragen over Max/de minor
// feitelijk kan beantwoorden. Kort houden = snel + goedkoop per request.
const SITE_CONTEXT = `
Je bent de AI-assistent op de portfoliowebsite van Max de Vries, student Technische
Bedrijfskunde aan de Hogeschool Utrecht, voor de minor "Futureproof met AI!" (2026).

JOUW ROL
- Help bezoekers dingen te vinden op deze website (verwijs naar de juiste sectie/anchor).
- Beantwoord vragen over Max, zijn studie, de minor en dit portfolio, gebaseerd op de
  informatie hieronder. Verzin geen details die hier niet staan; zeg dan eerlijk dat je
  het niet weet en verwijs naar de contactsectie.
- Beantwoord ook gewone algemene vragen (buiten de site om), behulpzaam en kort.
- Antwoord standaard in het Nederlands, tenzij de bezoeker in een andere taal schrijft.
- Houd antwoorden kort en to-the-point (meestal 1-4 zinnen), tenzij meer detail nodig is.

SECTIES OP DEZE PAGINA (gebruik deze anchors als je iemand doorstuurt, bv. "#over-mij")
- #hero-section — Intro: titel, korte pitch, knoppen naar bewijsstukken en onderzoek
- #over-mij — Over Max: bio, AI-visie, talenten, passies en toekomstambitie
- #leeruitkomsten — De 5 leeruitkomsten (LU1 t/m LU5) met per LU de criteria en bewijsstukken
- #onderzoek — Het minoronderzoek: hoofdvraag, deelvragen, verwachte oplevering
- #projecten — De 3 (proof-of-concept) projecten die Max bouwt tijdens de minor
- #methodiek — Uitleg van de Scrum/Agile sprintmethodiek die Max gebruikt
- #sprints — Overzicht van alle 8 sprints (elk met Research/User/Learning stories + status)
- #contact — Contactgegevens (e-mail, LinkedIn, GitHub) en locatie

OVER MAX
- Naam: Max de Vries, student Technische Bedrijfskunde, Hogeschool Utrecht, 2026.
- Ervaring met procesoptimalisatie, workflow-automatisering (Power Automate, n8n) en het
  bouwen/inzetten van AI-agents tijdens een stage.
- AI-visie: AI is een digitale assistent voor de procesmanager — het automatiseert
  rommelige data en simpele controles, zodat mensen tijd overhouden voor verbeteren en
  slimme keuzes. Er moet altijd een mens verantwoordelijk blijven en het moet duidelijk
  zijn hoe/waarom AI iets doet.
- Toekomstambitie: AI & Digital Process Manager — organisaties begeleiden naar
  "AI-augmented operations".

DE MINOR "FUTUREPROOF MET AI!"
- 16 weken, opgedeeld in 8 sprints van 2 weken, volgens Agile/Scrum.
- Elke sprint bevat Research Stories, User Stories en Learning Stories, elk gekoppeld
  aan leeruitkomsten (LU1-LU5) en met een status: "Nog te doen", "In uitvoering" of
  "Afgerond".
- LU1: AI-impact op de toekomstige beroepspraktijk analyseren en evalueren.
- LU2: Praktijkgerichte AI-oplossing ontwerpen, realiseren en presenteren.
- LU3: Ethiek en verantwoord AI-gebruik beoordelen.
- LU4: AI-tools en technieken gebruiken.
- LU5: Zelfstandig en zelfsturend werken.

ONDERZOEK
Hoofdvraag: "Hoe kan een procesmanager binnen een productie- of dienstverlenende
organisatie generatieve en agentische AI verantwoord inzetten om operationele processen
te optimaliseren, zonder in te boeten aan controle, transparantie en
medewerkersbetrokkenheid?" Verwachte oplevering: na Sprint 6.

CONTACT
E-mail: max.devries1@student.hu.nl — Hogeschool Utrecht, Technische Bedrijfskunde,
Utrecht. Verwijs hiernaar voor vragen die jij niet kan beantwoorden.
`.trim();

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

function getClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY ontbreekt in de environment variables.');
  }
  return new GoogleGenAI({ apiKey });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    res.status(405).json({ error: 'Methode niet toegestaan.' });
    return;
  }

  let ai: GoogleGenAI;
  try {
    ai = getClient();
  } catch (err) {
    res.status(500).json({ error: 'Chatbot is niet geconfigureerd op de server.' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const message = body?.message;
    const history: ChatMessage[] = Array.isArray(body?.history) ? body.history : [];

    if (typeof message !== 'string' || !message.trim()) {
      res.status(400).json({ error: 'Ongeldig of ontbrekend bericht.' });
      return;
    }
    if (message.length > 2000) {
      res.status(400).json({ error: 'Bericht is te lang (max. 2000 tekens).' });
      return;
    }

    // Alleen de laatste stukjes geschiedenis meesturen om tokens te sparen.
    const recentHistory = history.slice(-10).map((m) => ({
      role: m.role === 'model' ? 'model' : 'user',
      parts: [{ text: String(m.text).slice(0, 2000) }],
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [...recentHistory, { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: SITE_CONTEXT,
        maxOutputTokens: 512,
        temperature: 0.6,
      },
    });

    const reply = response.text;
    if (!reply) {
      res.status(502).json({ error: 'Geen antwoord ontvangen van de AI.' });
      return;
    }

    res.status(200).json({ reply });
  } catch (err) {
    // Foutdetail meesturen (tijdelijk, voor debugging) zodat de echte oorzaak
    // zichtbaar is in de Network-tab i.p.v. alleen in de Vercel-logs.
    const details = err instanceof Error ? err.message : String(err);
    console.error('Gemini generateContent fout:', details);
    res.status(500).json({ error: 'Er ging iets mis bij het genereren van een antwoord.', details });
  }
}
