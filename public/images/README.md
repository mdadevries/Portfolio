# Afbeeldingen aanleveren

Zet elk bestand precies op het pad en met de naam hieronder. De site toont
automatisch een nette fallback (initialen/icoon) zolang een bestand nog
ontbreekt — er verschijnt dus nooit een kapot plaatje.

| Bestand | Waar het verschijnt | Verhouding | Aanbevolen afmeting | Wat erop moet staan |
|---|---|---|---|---|
| `public/images/max.jpg` | Hero (grote foto) + "Over mij" (kleine avatar) | vierkant (1:1) | ±800×800 px | Portretfoto van jezelf, rustige achtergrond, goed belicht |
| `public/images/bewijs/lu1-kerntaken-procesmanager.webp` | LU1, bewijskaart "Kerntaken procesmanager" | 16:9 | ±1280×720 px | Screenshot van de eerste slide van die presentatie |
| `public/images/bewijs/lu1-ai-n8n-power-automate.webp` | LU1, bewijskaart "AI in n8n & Power Automate" | 16:9 | ±1280×720 px | Screenshot van de eerste slide van die presentatie |
| `public/images/projecten/project-1.webp` | Projectkaart 1 | 16:9 | ±1280×720 px | Screenshot van het prototype/de workflow, zodra beschikbaar |
| `public/images/projecten/project-2.webp` | Projectkaart 2 | 16:9 | ±1280×720 px | Screenshot van het prototype/de workflow, zodra beschikbaar |
| `public/images/projecten/project-3.webp` | Projectkaart 3 | 16:9 | ±1280×720 px | Screenshot van het prototype/de workflow, zodra beschikbaar |
| `public/images/onderzoek/onderzoeksmodel.webp` (optioneel) | Onderzoeksplan | 16:9 | ±1280×720 px | Schema van je onderzoeksmodel (hoofdvraag + 3 deelvragen) |

## Tips

- Zet foto's om naar `.webp` via [squoosh.app](https://squoosh.app) (gratis, in de browser). Dat houdt de site snel.
- Precies dezelfde bestandsnaam gebruiken is belangrijk — de site verwijst er letterlijk naar in `src/data/portfolioData.ts`.
- Wil je een extra bewijsstuk of project een eigen afbeelding geven die hier niet in de tabel staat? Zet het bestand in de juiste map en voeg in `portfolioData.ts` bij dat item het veld `image: "/images/..."` en `imageAlt: "..."` toe.

## Al aangemaakt (hoef je niets voor te doen)

- `public/favicon.svg` — MV-monogram als favicon
- `public/og-image.png` — social-preview afbeelding (1200×630) voor als de link gedeeld wordt
