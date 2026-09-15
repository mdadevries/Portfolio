import { PortfolioData } from '../types.ts';

export const portfolioData: PortfolioData = {
  student: {
    firstName: 'Max',
    lastNamePlaceholder: 'de Vries',
    fullName: 'Max de Vries',
    initials: 'MV',
    study: 'Technische Bedrijfskunde',
    institution: 'Hogeschool Utrecht',
    year: '2026',
  },

  hero: {
    eyebrow: 'Hogeschool Utrecht • Minor Future-proof met AI! (2026)',
    title: 'AI in Procesmanagement: Onderzoeken, Bouwen & Verantwoorden',
    subtitle:
      'Welkom op mijn centrale portfolio. Als vierdejaars student Technische Bedrijfskunde onderzoek en ontwikkel ik gedurende 20 intensieve weken hoe generatieve en agentische AI bedrijfsprocessen kan transformeren — getoetst aan de 5 officiële leeruitkomsten (LU1 t/m LU5).',
    tags: [
      'Technische Bedrijfskunde',
      '20 Weken',
      '8 Sprints',
      'Research, User & Learning Stories',
    ],
  },

  about: {
    bioParagraphs: [
      'Hoi! Ik ben Max de Vries, student Technische Bedrijfskunde aan de Hogeschool Utrecht. Vanuit mijn studie heb ik een sterke fascinatie voor procesoptimalisatie, ketensamenwerking en datagedreven besluitvorming. Eerder heb ik al praktische ervaring opgedaan met het automatiseren van repeterende workflows met tools zoals Microsoft Power Automate en n8n.',
      'Tijdens mijn stage heb ik waardevolle praktijkervaring opgedaan met procesoptimalisatie, ook specifiek met AI: ik heb gewerkt aan het bouwen én inzetten van AI-agents om processen te automatiseren.',
      'Die stage-ervaring met agents sluit direct aan op wat ik nu binnen de minor "Future-proof met AI!" verder onderzoek en bouw. Binnen het 20-weken durende traject richt ik me op het overbruggen van de kloof tussen theoretische AI-mogelijkheden en daadwerkelijke operationele proceswaarde — van methodische verantwoording en ethische randvoorwaarden tot robuuste, werkende proof-of-concepts.',
    ],
    quote:
      '“Echte procesinnovatie ontstaat niet door simpelweg AI aan te zetten, maar door de mens, data en besluitvorming doelgericht opnieuw met elkaar te verbinden.”',
    aiVision:
      'Mijn visie op AI binnen procesmanagement: AI fungeert als intelligente copilot voor de procesmanager en operationele teams. Door ongestructureerde datastromen direct om te zetten in bruikbare stuurinformatie en routinematige validaties over te nemen, kunnen bedrijfskundigen zich richten op strategische procesverbetering, uitzonderingsbehandeling en duurzame innovatie. Verantwoordelijkheid, transparantie en menselijke controle blijven hierbij altijd het vertrekpunt.',
    talents: [
      {
        title: 'Procesontleding & Modellering',
        description:
          'Het vermogen om complexe bedrijfsprocessen snel te doorgronden, knelpunten te identificeren en gestructureerd uit te tekenen in standaarden als BPMN.',
        tag: 'Bedrijfskunde',
      },
      {
        title: 'Workflow Automatisering',
        description:
          'Praktijkervaring met low-code orchestration (Power Automate, n8n) en het integreren van REST API-koppelingen tussen verschillende systemen.',
        tag: 'Technologie',
      },
      {
        title: 'Analytisch & Pragmatisch',
        description:
          'Snel schakelen tussen strategische doelen van de organisatie en praktische, haalbare oplossingen op de werkvloer.',
        tag: 'Executie',
      },
    ],
    passions: [
      {
        title: 'Technologische Innovaties',
        description:
          'Volgen van de allernieuwste AI-doorbraken, agent frameworks en hun praktische toepasbaarheid binnen het MKB en enterprise-omgevingen.',
        tag: 'AI Trends',
      },
      {
        title: 'Continu Verbeteren (Lean)',
        description:
          'Het elimineren van verspillingen, versnellen van doorlooptijden en meetbaar maken van operationele impact.',
        tag: 'Optimalisatie',
      },
      {
        title: 'Kennis Delen & Co-creatie',
        description:
          'Complexe technologische materie begrijpelijk uitleggen aan niet-technische stakeholders en samen tot gedragen oplossingen komen.',
        tag: 'Samenwerking',
      },
    ],
    ambitions: {
      title: 'Dromen & Toekomstambitie',
      targetRole: 'AI & Digital Process Manager',
      description:
        'Na mijn afstuderen wil ik aan de slag als procesmanager of business consultant op het snijvlak van Technische Bedrijfskunde en Kunstmatige Intelligentie. Mijn doel is om organisaties te begeleiden in de transitie naar "AI-augmented operations": het herontwerpen van kernprocessen met behulp van intelligente agents, waarbij efficiëntie hand in hand gaat met werkplezier en ethisch verantwoorde implementaties.',
    },
  },

  learningOutcomes: [
    {
      id: 'LU1',
      code: 'LU1',
      title:
        'AI-impact op de toekomstige beroepspraktijk analyseren en evalueren',
      shortDescription:
        'Onderzoeken hoe AI het domein van Technische Bedrijfskunde en procesmanagement transformeert, inclusief kansen, risico’s en veranderende rollen.',
      badgeColor: {
        bg: 'bg-indigo-500/10',
        text: 'text-indigo-400',
        border: 'border-indigo-500/30',
        glow: 'group-hover:shadow-indigo-500/10',
      },
      criteria: [
        'Grondige analyse van de huidige en toekomstige rol van AI binnen het specifieke beroepsdomein (procesbeheersing en bedrijfskunde).',
        'Onderbouwde evaluatie van strategische kansen, organisatorische belemmeringen en impact op medewerkers.',
        'Toepassing van relevante methodologische kaders en literatuuronderzoek (desk research & expert interviews).',
        'Kritische verantwoording van bevindingen in een professioneel onderzoeksverslag.',
      ],
      evidence: [
        {
          id: 'ev-lu1-1',
          title: 'Voorbeeld: Trendrapport AI binnen Supply Chain & Procesautomatisering',
          storyType: 'Research',
          format: 'PDF Rapport',
          status: 'In uitvoering',
          dateOrSprint: 'Sprint 2',
          summary:
            'Vergelijkende analyse van agentic workflows versus traditionele RPA binnen logistieke administratie.',
          tag: 'Literatuurstudie',
        },
        {
          id: 'ev-lu1-2',
          title: 'Voorbeeld: Expert-interview met Hoofd Bedrijfsvoering',
          storyType: 'Research',
          format: 'Document',
          status: 'Binnenkort',
          dateOrSprint: 'Sprint 3',
          summary:
            'Diepte-interview over adoptiebarrières en governance van generatieve AI-tools op de werkvloer.',
          tag: 'Veldonderzoek',
        },
      ],
    },
    {
      id: 'LU2',
      code: 'LU2',
      title:
        'Praktijkgerichte AI-oplossing ontwerpen, realiseren en presenteren',
      shortDescription:
        'Van probleemanalyse naar een werkend AI-gedreven prototype dat een concreet bedrijfskundig knelpunt oplost en aantoonbare waarde levert.',
      badgeColor: {
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
        border: 'border-cyan-500/30',
        glow: 'group-hover:shadow-cyan-500/10',
      },
      criteria: [
        'Iteratief ontwerpproces volgens Agile/Scrum met heldere probleemdefinitie en user stories.',
        'Werkend functioneel prototype (Proof of Concept) met integratie van moderne AI-componenten.',
        'Duidelijke validatie van de oplossing met gebruikers of belanghebbenden uit de praktijk.',
        'Overtuigende presentatie en demonstratie van de toegevoegde bedrijfswaarde.',
      ],
      evidence: [
        {
          id: 'ev-lu2-1',
          title: 'Voorbeeld: Intelligente Document Parser & Classificatie Tool',
          storyType: 'User',
          format: 'GitHub Repo',
          status: 'In uitvoering',
          dateOrSprint: 'Sprint 2-3',
          summary:
            'Prototype dat ongestructureerde inkooporders en facturen automatisch interpreteert en mapt naar ERP-structuren.',
          tag: 'Prototype',
        },
        {
          id: 'ev-lu2-2',
          title: 'Voorbeeld: Demo Video & Stakeholder Pitch',
          storyType: 'User',
          format: 'Video Demo',
          status: 'Binnenkort',
          dateOrSprint: 'Sprint 4',
          summary:
            'Videopresentatie waarin de doorlooptijdreductie van de procesflow live wordt gedemonstreerd.',
          tag: 'Screencast',
        },
      ],
    },
    {
      id: 'LU3',
      code: 'LU3',
      title: 'Ethiek en verantwoord AI-gebruik beoordelen',
      shortDescription:
        'Toetsen van AI-toepassingen aan wettelijke kaders (zoals de EU AI Act), privacy, dataveiligheid, bias en maatschappelijke verantwoordelijkheid.',
      badgeColor: {
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-400',
        border: 'border-emerald-500/30',
        glow: 'group-hover:shadow-emerald-500/10',
      },
      criteria: [
        'Toepassing van ethische toetsingskaders (bijv. EU AI Act risicocategorieën, AVG/GDPR, IEEE ethische richtlijnen).',
        'Analyseren van potentiële risico’s rondom hallucinatie, bias, datalekken en leveranciersafhankelijkheid.',
        'Formuleren van concrete mitigerende maatregelen en "human-in-the-loop" ontwerpprincipes.',
        'Reflectie op de morele verantwoordelijkheid van de technisch bedrijfskundige.',
      ],
      evidence: [
        {
          id: 'ev-lu3-1',
          title: 'Voorbeeld: Ethische Impact Assessment (EU AI Act & AVG)',
          storyType: 'Research',
          format: 'Onderzoeksverslag',
          status: 'In uitvoering',
          dateOrSprint: 'Sprint 3',
          summary:
            'Toetsingskader opgesteld voor geautomatiseerde besluitvorming in klantorders en facturatieprocessen.',
          tag: 'Compliance',
        },
      ],
    },
    {
      id: 'LU4',
      code: 'LU4',
      title: 'AI-tools en technieken gebruiken',
      shortDescription:
        'Doelgericht en vaardig inzetten van state-of-the-art AI-modellen, prompt engineering, APIs en low-code/code integratietechnieken.',
      badgeColor: {
        bg: 'bg-amber-500/10',
        text: 'text-amber-400',
        border: 'border-amber-500/30',
        glow: 'group-hover:shadow-amber-500/10',
      },
      criteria: [
        'Geavanceerd gebruik van LLMs, API-integraties, embeddings of model-fine-tuning.',
        'Kritisch vergelijken van verschillende tools op basis van performance, kosten, latency en geschiktheid.',
        'Effectieve toepassing van prompt engineering (system prompts, few-shot prompting, structured outputs).',
        'Documentatie van technische keuzes en architectuurontwerp.',
      ],
      evidence: [
        {
          id: 'ev-lu4-1',
          title: 'Voorbeeld: Benchmarkstudie: LLM APIs vs. Lokale Modellen voor Bedrijfsdata',
          storyType: 'Learning',
          format: 'PDF Rapport',
          status: 'In uitvoering',
          dateOrSprint: 'Sprint 2',
          summary:
            'Vergelijkend experiment tussen OpenAI gpt-4o, Claude 3.5 Sonnet en lokale Ollama/Mistral modellen qua precisie en privacy.',
          tag: 'Benchmarking',
        },
        {
          id: 'ev-lu4-2',
          title: 'Voorbeeld: Repository: n8n AI-Agent Workflow Configuraties',
          storyType: 'User',
          format: 'GitHub Repo',
          status: 'Binnenkort',
          dateOrSprint: 'Sprint 4',
          summary:
            'Gedocumenteerde n8n flows met custom tool calling en structured JSON schema output.',
          tag: 'Code',
        },
      ],
    },
    {
      id: 'LU5',
      code: 'LU5',
      title: 'Zelfstandig en zelfsturend werken',
      shortDescription:
        'Actief richting geven aan het eigen leerproces, effectief Scrum/Agile hanteren, feedback benutten en methodisch reflecteren.',
      badgeColor: {
        bg: 'bg-rose-500/10',
        text: 'text-rose-400',
        border: 'border-rose-500/30',
        glow: 'group-hover:shadow-rose-500/10',
      },
      criteria: [
        'Methodische planning en uitvoering van 8 tweewekelijkse sprints volgens Agile/Scrum principes.',
        'Formuleren van heldere doelen en stories per sprint (Research, User en Learning Stories).',
        'Actief ophalen, verwerken en documenteren van feedback van docenten, coaches en peers.',
        'Cyclische reflectie op eigen competentieontwikkeling en professionele groei.',
      ],
      evidence: [
        {
          id: 'ev-lu5-1',
          title: 'Voorbeeld: Sprint Retrospectives & Voortgangslogboek (Sprint 1 t/m 8)',
          storyType: 'Learning',
          format: 'Notion Document',
          status: 'In uitvoering',
          dateOrSprint: 'Wekelijks',
          summary:
            'Overzicht van burn-down, velocity, feedbacknotities en leermomenten per sprintcyclus.',
          tag: 'Zelfsturing',
        },
      ],
    },
  ],

  research: {
    title:
      '[MAX: Centrale onderzoeksvraag invullen — bv. Hoe kan de inzet van agentic AI-workflows de operationele doorlooptijd en foutmarge in order-to-cash processen reduceren?]',
    subtitle:
      'Praktijkgericht afstudeer- en minoronderzoek naar de symbiose van procesoptimalisatie en kunstmatige intelligentie.',
    field: 'Procesmanagement & Technische Bedrijfskunde',
    status: 'Onderzoek volgt binnenkort',
    summary:
      'Dit onderzoek richt zich op het inzichtelijk maken hoe generatieve en agentische AI-oplossingen op verantwoorde wijze kunnen worden geïmplementeerd binnen MKB-productie- en handelsbedrijven. Hierbij wordt onderzocht waar de omslag ligt tussen traditionele procesautomatisering (zoals RPA/Power Automate) en autonome cognitieve agents, met speciale aandacht voor traceerbaarheid, audit trails en menselijke tussenkomst.',
    subQuestions: [
      {
        number: 'Deelvraag 1',
        question:
          '[MAX: Deelvraag 1 — Welke knelpunten in administratieve procesketens lenen zich bij uitstek voor AI-interventies?]',
        purpose: 'Literatuur- en procesanalyse (LU1)',
      },
      {
        number: 'Deelvraag 2',
        question:
          '[MAX: Deelvraag 2 — Aan welke technische en ethische ontwerpeisen moet een agentic workflow voldoen om betrouwbare output te garanderen?]',
        purpose: 'Ethisch en technisch kader (LU3 & LU4)',
      },
      {
        number: 'Deelvraag 3',
        question:
          '[MAX: Deelvraag 3 — Wat is de meetbare kwantitatieve en kwalitatieve business impact na implementatie van een proof-of-concept?]',
        purpose: 'Praktijkvalidatie en ROI (LU2)',
      },
    ],
    expectedOutcome:
      'Een integraal onderzoeksrapport inclusief een direct toepasbaar beslismodel voor procesmanagers en een gevalideerd proof-of-concept prototype.',
    publicationDate: 'Verwachte oplevering: na Sprint 6 (Week 14, 2026)',
    reportUrl: undefined, // Wordt actief zodra rapport gepubliceerd is
  },

  projects: [
    {
      id: 'proj-1',
      title: 'Project 1 — in ontwikkeling',
      status: 'In ontwikkeling',
      sprint: 'Sprint 1 - 2',
      description:
        '[MAX: Korte toelichting op Project 1 — bv. Geautomatiseerde Factuur- en Pakbonanalyse met gestructureerde LLM-extractie gekoppeld aan ERP].',
      learningOutcomes: ['LU2', 'LU4'],
      techStack: ['Python', 'n8n', 'OpenAI API', 'JSON Schema'],
      demoUrl: undefined,
      githubUrl: undefined,
    },
    {
      id: 'proj-2',
      title: 'Project 2 — in ontwikkeling',
      status: 'In ontwikkeling',
      sprint: 'Sprint 3 - 4',
      description:
        '[MAX: Korte toelichting op Project 2 — bv. Interne Proceskennisbank & Copilot voor kwaliteitsmedewerkers op basis van RAG (Retrieval-Augmented Generation)].',
      learningOutcomes: ['LU2', 'LU3', 'LU4'],
      techStack: ['ChromaDB', 'FastAPI', 'LangChain', 'Tailwind CSS'],
      demoUrl: undefined,
      githubUrl: undefined,
    },
    {
      id: 'proj-3',
      title: 'Project 3 — in ontwikkeling',
      status: 'Gepland',
      sprint: 'Sprint 5 - 6',
      description:
        '[MAX: Korte toelichting op Project 3 — bv. Autonome Supply Chain Incident Agent die vertragingen signaleert en concept-oplossingen voorlegt aan de planner].',
      learningOutcomes: ['LU1', 'LU2', 'LU4'],
      techStack: ['Node.js', 'PostgreSQL', 'Multi-Agent Framework', 'Power Automate'],
      demoUrl: undefined,
      githubUrl: undefined,
    },
  ],

  sprints: [
    {
      sprintNumber: 1,
      title: 'Kick-off & Probleemverkenning',
      period: 'Week 1 - 2',
      theme: 'Oriëntatie op AI-mogelijkheden in procesautomatisering & tooling selectie',
      isCurrent: true,
      researchStories: {
        linkedLUs: ['LU1', 'LU3'],
        stories: [
          {
            role: 'student Technische Bedrijfskunde',
            goal: 'via deskresearch onderzoeken welke kerntaken van een procesmanager gaan veranderen door generatieve AI',
            value: 'ik onderbouwd kan bepalen welke kennis en vaardigheden ik verder moet ontwikkelen.',
            acceptanceCriteria: [
              'Minimaal 3 kerntaken van een procesmanager zijn geïdentificeerd en onderzocht',
              'Per kerntaak zijn de kansen én risico\'s van AI beschreven',
              'De resultaten zijn verwerkt in één overzichtelijk eindproduct (bv. een impactoverzicht)',
            ],
            qualityCriteria: [
              'Minimaal 5 betrouwbare, herleidbare bronnen gebruikt (APA 7)',
              'Gebruikte prompt/onderzoeksaanpak is kort beschreven',
              'Elke kerntaak is op dezelfde manier beoordeeld, zodat resultaten vergelijkbaar zijn',
            ],
          },
          {
            role: 'student Technische Bedrijfskunde',
            goal: 'via deskresearch onderzoeken welke AI-functionaliteiten beschikbaar zijn binnen n8n en Power Automate',
            value: 'ik onderbouwd kan bepalen hoe ik deze tools in de toekomst effectiever kan inzetten.',
            acceptanceCriteria: [
              'Voor beide tools is onderzocht welke AI-functionaliteiten beschikbaar zijn',
              'Per functionaliteit is beschreven welk type processtap hiermee geautomatiseerd of verbeterd kan worden',
              'Onderzoek eindigt met een vergelijking en een conclusie welke AI-mogelijkheid het meest waardevol is voor jou',
            ],
            qualityCriteria: [
              'Minimaal 5 betrouwbare bronnen gebruikt (bv. officiële documentatie), APA 7 verwijzingen',
              'Beide tools zijn op dezelfde criteria vergeleken',
              'Gebruikte prompt/onderzoeksaanpak is kort beschreven',
            ],
          },
        ],
      },
      userStories: {
        linkedLUs: ['LU2', 'LU4'],
        stories: [
          {
            role: 'student',
            goal: 'met AI Studio/Lovable een eigen portfoliowebsite bouwen',
            value: 'ik daar mijn bewijs per leeruitkomst op kan verzamelen.',
            acceptanceCriteria: [
              'De website is online en heeft per leeruitkomst een eigen, herkenbare sectie',
              'Bewijsstukken (documenten, links, screenshots) kunnen per leeruitkomst worden toegevoegd en bekeken',
              'Elk bewijsstuk is via een directe link te bereiken',
            ],
            qualityCriteria: [
              'Website functioneert zonder fouten, op laptop én mobiel',
              'Indeling is consistent en ook voor een buitenstaander te begrijpen',
              'Opbouw is via versiebeheer (Github/Vercel) navolgbaar',
            ],
          },
          {
            role: 'procesmanager',
            goal: 'een herbruikbaar promptsjabloon ontwikkelen waarmee ik AI kan inzetten om processen te analyseren',
            value: 'ik dit sjabloon in latere sprints steeds opnieuw kan gebruiken.',
            acceptanceCriteria: [
              'Er is een werkend promptsjabloon dat AI vraagt om een proces te analyseren (stappen, knelpunten, verbeterpunten)',
              'Het sjabloon is minimaal 1 keer getest op een voorbeeldproces',
              'Het resultaat van die test is bijgevoegd als bewijs',
            ],
            qualityCriteria: [
              'Het sjabloon is duidelijk opgebouwd (rol, context, vraag, gewenste output)',
              'Kort toegelicht waarom deze opbouw goed werkt (welke prompttechniek toegepast is)',
            ],
          },
        ],
      },
      learningStories: {
        linkedLUs: ['LU4', 'LU5'],
        stories: [
          {
            role: 'student',
            goal: 'eerste leerervaringen en methodische reflectie vormgeven',
            value: 'ik doelgericht kan bijsturen in de opvolgende sprints.',
            isPlaceholder: true,
            notes: 'Komt binnenkort — Deze Learning Story wordt spoedig geformuleerd tijdens de Sprint 1 retrospective.',
          },
        ],
      },
    },
    {
      sprintNumber: 2,
      title: 'Architectuur & Datakaders',
      period: 'Week 3 - 4',
      theme: 'Data-inname, API integratie en toetsing aan EU AI Act',
      isUpcoming: true,
      researchStories: {
        linkedLUs: ['LU1', 'LU3'],
        stories: [
          {
            role: 'Onderzoeker',
            goal: 'de ethische kaders en AVG-risico’s van externe cloud LLM APIs vergelijken met on-premise alternatieven',
            value: 'wij verantwoorde architectuurbesluiten kunnen nemen voor bedrijfsgevoelige data.',
          },
        ],
      },
      userStories: {
        linkedLUs: ['LU2', 'LU4'],
        stories: [
          {
            role: 'Eindgebruiker',
            goal: 'een drag-and-drop interface waarmee documenten kunnen worden geüpload en direct verwerkt',
            value: 'ik niet handmatig via de command line hoef te werken.',
          },
        ],
      },
      learningStories: {
        linkedLUs: ['LU4', 'LU5'],
        stories: [
          {
            role: 'Student',
            goal: 'mijn programmeervaardigheden in Python versterken rond vector databases',
            value: 'ik zelfstandig embeddings kan genereren voor procesdocumentatie.',
          },
        ],
      },
    },
    {
      sprintNumber: 3,
      title: 'Prototype Iteratie 1 (POC)',
      period: 'Week 5 - 6',
      theme: 'Eerste werkende Proof of Concept & initiële gebruikerstests',
      isUpcoming: true,
      researchStories: {
        linkedLUs: ['LU1', 'LU3'],
        stories: [
          {
            role: 'Onderzoeker',
            goal: 'de eerste deelvraag uitwerken met veldonderzoek en stakeholder-interviews',
            value: 'de context van het knelpunt scherp en gevalideerd is.',
          },
        ],
      },
      userStories: {
        linkedLUs: ['LU2', 'LU4'],
        stories: [
          {
            role: 'Kwaliteitsmedewerker',
            goal: 'direct inzicht krijgen in procesafwijkingen via geautomatiseerde samenvattingen',
            value: 'ik sneller corrigerende acties kan initiëren.',
          },
        ],
      },
      learningStories: {
        linkedLUs: ['LU4', 'LU5'],
        stories: [
          {
            role: 'Student',
            goal: 'leren hoe ik gestructureerde gebruikerstests opzet en kwalitatieve feedback verwerk',
            value: 'mijn productiteraties aantoonbaar evidence-based zijn.',
          },
        ],
      },
    },
    {
      sprintNumber: 4,
      title: 'Midterm Review & Verdieping',
      period: 'Week 7 - 8',
      theme: 'Evaluatie eerste project, midterm presentatie en verfijning backlog',
      isUpcoming: true,
      researchStories: {
        linkedLUs: ['LU1', 'LU3'],
        stories: [
          {
            role: 'Student',
            goal: 'de midterm bewijsstukken voor LU1 en LU3 bundelen en reviewen met de docent-coach',
            value: 'ik tijdig weet of ik op koers lig voor de eindbeoordeling.',
          },
        ],
      },
      userStories: {
        linkedLUs: ['LU2', 'LU4'],
        stories: [
          {
            role: 'Stakeholder',
            goal: 'een live demonstratie zien van het eerste prototype met meetbare KPI-verbetering',
            value: 'ik de meerwaarde van het project kan beoordelen.',
          },
        ],
      },
      learningStories: {
        linkedLUs: ['LU4', 'LU5'],
        stories: [
          {
            role: 'Student',
            goal: 'reflecteren op de samenwerking en mijn sprint-velocity van de afgelopen 4 sprints',
            value: 'ik mijn planning voor de tweede helft van de minor kan optimaliseren.',
          },
        ],
      },
    },
    {
      sprintNumber: 5,
      title: 'Start Tweede Oplossing & Opschaling',
      period: 'Week 9 - 10',
      theme: 'Ontwerp van AI-oplossing 2 & diepere integratie in informatiesystemen',
      isUpcoming: true,
      researchStories: {
        linkedLUs: ['LU1', 'LU3'],
        stories: [
          {
            role: 'Onderzoeker',
            goal: 'de tweede deelvraag onderzoeken m.b.t. betrouwbaarheid en fallback-scenario’s',
            value: 'het tweede prototype voldoet aan robuuste procesnormen.',
          },
        ],
      },
      userStories: {
        linkedLUs: ['LU2', 'LU4'],
        stories: [
          {
            role: 'Procesmanager',
            goal: 'een geautomatiseerde alert ontvangen bij anomalieën in orderverwerking',
            value: 'ik proactief kan bijsturen in plaats van achteraf brandjes blussen.',
          },
        ],
      },
      learningStories: {
        linkedLUs: ['LU4', 'LU5'],
        stories: [
          {
            role: 'Student',
            goal: 'mijzelf bekwamen in het testen en benchmarken van agentic reasoning loops',
            value: 'ik onvoorziene modelbeslissingen vroegtijdig kan traceren.',
          },
        ],
      },
    },
    {
      sprintNumber: 6,
      title: 'Validatie & Eindrapportage Onderzoek',
      period: 'Week 11 - 12',
      theme: 'Kwantitatieve dataverzameling, afronding onderzoeksverslag',
      isUpcoming: true,
      researchStories: {
        linkedLUs: ['LU1', 'LU3'],
        stories: [
          {
            role: 'Onderzoeker',
            goal: 'alle meetresultaten analyseren en het definitieve onderzoeksrapport schrijven',
            value: 'het centrale onderzoeksdoel volledig beantwoord en gepubliceerd kan worden.',
          },
        ],
      },
      userStories: {
        linkedLUs: ['LU2', 'LU4'],
        stories: [
          {
            role: 'Testgebruiker',
            goal: 'eenvoudig feedback kunnen geven binnen de interface van het prototype',
            value: 'mijn observaties direct meegenomen worden in de finale optimalisatieslag.',
          },
        ],
      },
      learningStories: {
        linkedLUs: ['LU4', 'LU5'],
        stories: [
          {
            role: 'Student',
            goal: 'feedback verwerken op conceptversies van het onderzoeksverslag van peer reviewers',
            value: 'de academische en praktische kwaliteit gewaarborgd is.',
          },
        ],
      },
    },
    {
      sprintNumber: 7,
      title: 'Eindproduct Polijsten & Portfolio Bouw',
      period: 'Week 13 - 14',
      theme: 'Definitieve bewijsstukken koppelen per LU en documentatie finaliseren',
      isUpcoming: true,
      researchStories: {
        linkedLUs: ['LU1', 'LU3'],
        stories: [
          {
            role: 'Student',
            goal: 'de koppeling tussen onderzoeksconclusies en praktijkontwerp aanscherpen',
            value: 'de rode draad in mijn minorportfolio onweerlegbaar helder is.',
          },
        ],
      },
      userStories: {
        linkedLUs: ['LU2', 'LU4'],
        stories: [
          {
            role: 'Beoordelaar / Assessor',
            goal: 'alle broncode, screencasts en rapporten intuïtief kunnen openen vanaf de website',
            value: 'de toetsing soepel en transparant verloopt.',
          },
        ],
      },
      learningStories: {
        linkedLUs: ['LU4', 'LU5'],
        stories: [
          {
            role: 'Student',
            goal: 'een integrale eindreflectie schrijven over mijn groei als AI-bewuste technisch bedrijfskundige',
            value: 'ik overtuigend kan aantonen aan LU5 voldaan te hebben.',
          },
        ],
      },
    },
    {
      sprintNumber: 8,
      title: 'Eindassessment & Exposities',
      period: 'Week 15 - 16',
      theme: 'Eindpresentatie minor, assessmentsessie en afronding portfolio',
      isUpcoming: true,
      researchStories: {
        linkedLUs: ['LU1', 'LU3'],
        stories: [
          {
            role: 'Afstuderende student',
            goal: 'mijn eindrapport en ethische toetsing verdedigen tijdens het criteriumgericht interview',
            value: 'ik mijn vakkennis met overtuiging demonstreer.',
          },
        ],
      },
      userStories: {
        linkedLUs: ['LU2', 'LU4'],
        stories: [
          {
            role: 'Bezoeker van de AI-expo',
            goal: 'een interactieve live demonstratie ervaren van de gerealiseerde AI-agent',
            value: 'ik de directe impact op procesdoorlooptijden kan ervaren.',
          },
        ],
      },
      learningStories: {
        linkedLUs: ['LU4', 'LU5'],
        stories: [
          {
            role: 'Student',
            goal: 'mijn leercurve over de 20 weken consolideren in een toekomstgericht ontwikkelplan',
            value: 'ik deze AI-vaardigheden direct kan verzilveren in mijn afstudeeropdracht.',
          },
        ],
      },
    },
  ],

  contact: {
    email: 'max.devries1@student.hu.nl',
    institution: 'Hogeschool Utrecht',
    programme: 'Technische Bedrijfskunde',
    minor: 'Minor Future-proof met AI! (2026)',
    location: 'Utrecht, Nederland',
    socialLinks: {
      // Structuur voorbereid voor latere activatie:
      linkedinUrl: undefined, // bv. 'https://linkedin.com/in/max-devries'
      githubUrl: undefined,   // bv. 'https://github.com/max-devries'
    },
  },
};
