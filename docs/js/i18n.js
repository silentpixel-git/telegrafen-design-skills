/*
 * Norwegian Bokmål translations for the skills guide.
 * English is the source in index.html. Each key is the English inner HTML of a
 * text block (whitespace collapsed); app.js swaps it for the Norwegian value.
 * Skill names, slash commands, mode names and status values are official names
 * and stay in English. Written with /telegrafen-ux-writing.
 */
window.GUIDE_I18N = {
  title: "Telegrafen-skills: veiledning",
  blocks: {
    "Skip to content": "Hopp til innholdet",
    "Skills guide": "Veiledning for skills",
    "Design with the Telegrafen skills in Figma": "Design med Telegrafen-skillene i Figma",
    "Pick the right skill and mode, copy a starter prompt, and follow the recommended workflow from first draft to final QA.": "Velg riktig skill og modus, kopier en startprompt og følg den anbefalte arbeidsflyten fra første utkast til endelig QA.",
    "Find the right skill": "Finn riktig skill",
    "Follow the workflow": "Følg arbeidsflyten",
    "Four skills, one per prompt": "Fire skills, én per prompt",

    "Use it": "Kom i gang",
    "Skill picker": "Velg skill",
    "Workflow": "Arbeidsflyt",
    "Reference": "Oppslag",
    "Modes": "Moduser",
    "Source rules": "Kilderegler",
    "Design tips": "Designtips",
    "Cheat sheet": "Hurtigoversikt",
    "Sources": "Kilder",

    "What do you want to do?": "Hva vil du gjøre?",
    "Choose a task. You get the skill, the mode and a starter prompt to adapt. The mapping follows the cheat sheet.": "Velg en oppgave. Du får riktig skill, modus og en startprompt du kan tilpasse. Valgene følger hurtigoversikten.",
    "Your task": "Oppgaven din",

    "Suggested end-to-end workflow": "Foreslått arbeidsflyt fra start til slutt",
    "Recommendation": "Anbefaling",
    "Seven steps from brief to final QA, each with an example prompt to copy and adapt. Replace the bracketed details with your own. Use one skill per prompt.": "Sju steg fra brief til endelig QA, med en eksempelprompt du kan kopiere og tilpasse i hvert steg. Bytt ut detaljene i klammer med dine egne. Bruk én skill per prompt.",
    "Example prompt": "Eksempelprompt",

    "Select a Figma frame and confirm the brief": "Velg en frame i Figma og bekreft briefen",
    "Before you design · No skill needed": "Før du designer · Ingen skill trengs",
    "Before your first prompt, be clear on:": "Før den første prompten bør du vite:",
    "The user task and the primary action": "Hvilken oppgave brukeren skal løse, og hva hovedhandlingen er",
    "The target sizes": "Hvilke skjermstørrelser du designer for",
    "How other products solve the same task, for example on <a href=\"https://mobbin.com\">Mobbin</a>. Borrow patterns, not visuals.": "Hvordan andre produkter løser den samme oppgaven, for eksempel på <a href=\"https://mobbin.com\">Mobbin</a>. Lån mønstre, ikke uttrykk.",
    "Then select the frame the new work should sit beside.": "Velg deretter framen det nye arbeidet skal ligge ved siden av.",
    "Help me sharpen the brief for [screen or flow] where customers [user task]. Use the attached Mobbin screens to list patterns to borrow and to avoid. Then list the primary action, target sizes and open questions. Don’t create anything in Figma yet.": "Hjelp meg å spisse briefen for [skjerm eller flyt] der kundene skal [brukeroppgave]. Bruk de vedlagte skjermene fra Mobbin og list opp mønstre vi bør låne og unngå. List deretter hovedhandlingen, skjermstørrelsene og åpne spørsmål. Ikke lag noe i Figma ennå.",

    "Generate one small, scoped view": "Lag én liten, avgrenset visning",
    "Ask for one view, not a whole flow. Expect questions about material unknowns and a <em>Draft status</em> of READY TO ITERATE, NEEDS CHANGES or BLOCKED.": "Be om én visning, ikke en hel flyt. Du får spørsmål om viktige ukjente forhold og en <em>Draft status</em>: READY TO ITERATE, NEEDS CHANGES eller BLOCKED.",
    "/telegrafen-design-mockups. Build &amp; Iterate. Design one [desktop or mobile] view where customers [user task]. Place it beside the selected frame and ask about anything unclear.": "/telegrafen-design-mockups. Build &amp; Iterate. Design én visning for [desktop eller mobil] der kundene skal [brukeroppgave]. Plasser den ved siden av den valgte framen, og spør om det som er uklart.",

    "Rewrite or QA the customer-facing copy": "Skriv om eller kvalitetssikre teksten kunden ser",
    "UX Writing · Rewrite or QA": "UX Writing · Skriv om eller QA",
    "Use a separate prompt. QA is read-only unless you ask to “QA and fix” or “update”.": "Bruk en egen prompt. QA endrer ingenting med mindre du ber om «QA og rett opp» eller «oppdater».",
    "/telegrafen-ux-writing. Rewrite the copy in the selected frame. Mark missing facts instead of inventing them.": "/telegrafen-ux-writing. Skriv om teksten i den valgte framen. Marker manglende fakta i stedet for å finne på noe.",

    "Run production and WCAG checks": "Kjør produksjons- og WCAG-sjekker",
    "Runs the production and WCAG 2.2 AA design gates. Applies fixes only within the authorised scope and reports unrelated issues.": "Kjører kontrollpunktene for produksjon og WCAG 2.2 AA. Retter bare innenfor det godkjente omfanget og rapporterer andre funn.",
    "/telegrafen-design-mockups. Review &amp; Finalize the selected frame. Fix only authorised defects and report the production and WCAG gates.": "/telegrafen-design-mockups. Review &amp; Finalize på den valgte framen. Rett bare godkjente feil, og rapporter kontrollpunktene for produksjon og WCAG.",

    "Critique hierarchy, quality and brand": "Vurder hierarki, kvalitet og merkevare",
    "Read-only. Findings are ranked Critical, Important or Polish, with Preserve decisions so good work survives rework.": "Endrer ingenting. Funnene rangeres som Critical, Important eller Polish, med Preserve-beslutninger slik at godt arbeid blir bevart.",
    "/telegrafen-visual-design. Review the selected screen, read-only. Give me the five highest-impact findings and what to preserve.": "/telegrafen-visual-design. Review på den valgte skjermen, uten å endre noe. Gi meg de fem viktigste funnene og hva som bør bevares.",

    "Apply only the accepted recommendations": "Gjennomfør bare de godkjente anbefalingene",
    "Implements accepted findings in a revision beside the original, returns a ledger (Implemented, Preserved, Blocked, Dismissed by user), then runs Mockup production QA and Visual acceptance QA.": "Gjennomfører godkjente funn i en revisjon ved siden av originalen og gir deg en oversikt (Implemented, Preserved, Blocked, Dismissed by user). Deretter kjøres Mockup production QA og Visual acceptance QA.",
    "/telegrafen-visual-design. Apply accepted findings 1, 2 and 4 only. Preserve content and interactions.": "/telegrafen-visual-design. Apply bare på godkjente funn 1, 2 og 4. Bevar innhold og interaksjoner.",

    "Hand off new reusable components": "Overlever nye gjenbrukbare komponenter",
    "Components · separate handoff": "Components · egen overlevering",
    "If the design needs a new reusable component, send a separate Components prompt. Do not use Mockups to build component APIs.": "Hvis designet trenger en ny gjenbrukbar komponent, sender du en egen Components-prompt. Ikke bruk Mockups til å bygge API-er for komponenter.",
    "/telegrafen-design-components. Build &amp; Iterate. I need a reusable [component] for [user need]. Check existing Telegrafen components first, then ask me one question at a time. Wait for my confirmation before building.": "/telegrafen-design-components. Build &amp; Iterate. Jeg trenger en gjenbrukbar [komponent] for [brukerbehov]. Sjekk eksisterende Telegrafen-komponenter først, og still meg ett spørsmål om gangen. Vent på bekreftelsen min før du bygger.",

    "Look up skills, modes and rules while you work.": "Slå opp skills, moduser og regler mens du jobber.",
    "What is Skills?": "Hva er skills?",
    "A skill is a set of instructions that an AI agent loads when you ask for it. Each Telegrafen skill is a single <code>SKILL.md</code> file that teaches the agent in Figma to work with our design system. It tells the agent:": "En skill er et sett med instruksjoner som en AI-agent henter når du ber om det. Hver Telegrafen-skill er én <code>SKILL.md</code>-fil som lærer agenten i Figma å jobbe med designsystemet vårt. Den forteller agenten:",
    "Which libraries and tokens to use": "Hvilke biblioteker og tokens den skal bruke",
    "Which rules to follow": "Hvilke regler den skal følge",
    "Which quality checks to run before it hands the work back": "Hvilke kvalitetssjekker den skal kjøre før den leverer arbeidet tilbake",
    "You start a skill by typing its slash command, such as <code>/telegrafen-design-mockups</code>, at the beginning of your prompt. Use one skill per prompt, because Figma only runs the first skill it finds.": "Du starter en skill ved å skrive kommandoen dens, for eksempel <code>/telegrafen-design-mockups</code>, først i prompten. Bruk én skill per prompt, fordi Figma bare kjører den første skillen den finner.",
    "The four skills at a glance": "De fire skillene i korte trekk",
    "Versions come from each <code>SKILL.md</code> frontmatter in this repository.": "Versjonene er hentet fra frontmatter i hver <code>SKILL.md</code> i dette repositoriet.",
    "Build screens, flows and prototypes from verified Telegrafen assets.": "Bygg skjermer, flyter og prototyper med verifiserte Telegrafen-ressurser.",
    "Build &amp; Iterate (default)": "Build &amp; Iterate (standard)",
    "Design, review, repair and finalise reusable components.": "Design, gå gjennom, reparer og ferdigstill gjenbrukbare komponenter.",
    "Review &amp; QA (read-only)": "Review &amp; QA (endrer ingenting)",
    "Repair &amp; Finalize (edits authorised)": "Repair &amp; Finalize (godkjente endringer)",
    "Senior art-direction review and focused visual refinement of existing designs.": "Kunstnerisk vurdering på seniornivå og målrettet visuell forbedring av eksisterende design.",
    "Review (read-only)": "Review (endrer ingenting)",
    "Apply (authorised changes)": "Apply (godkjente endringer)",
    "<em>Deep</em> is a verification-depth modifier for either mode, not a mode. It does not expand editing authority.": "<em>Deep</em> gir grundigere verifisering i begge modusene, men er ikke en egen modus. Den gir ikke lov til flere endringer.",
    "Norwegian Bokmål interface microcopy only. Campaigns, articles, product pages, emails, push notifications and other long-form copy are out of scope.": "Bare mikrotekst på norsk bokmål i grensesnitt. Kampanjer, artikler, produktsider, e-post, pushvarsler og andre lange tekster er ikke med.",
    "Operations": "Oppgaver",
    "Create": "Lag ny tekst",
    "Rewrite": "Skriv om",
    "Update selected content": "Oppdater valgt innhold",
    "QA (read-only)": "QA (endrer ingenting)",

    "Choosing the right mode": "Velg riktig modus",
    "Modes by skill": "Moduser per skill",
    "Mode": "Modus",
    "Edits": "Endringer",
    "What it does": "Hva den gjør",
    "Build &amp; Iterate <span class=\"muted\">(default)</span>": "Build &amp; Iterate <span class=\"muted\">(standard)</span>",
    "Yes, requested views only": "Ja, bare visningene du ber om",
    "Rapid draft with targeted checks. Ends with <em>Draft status</em>: READY TO ITERATE, NEEDS CHANGES or BLOCKED, rather than a review verdict.": "Raskt utkast med målrettede sjekker. Avsluttes med <em>Draft status</em>: READY TO ITERATE, NEEDS CHANGES eller BLOCKED, ikke med en endelig vurdering.",
    "Requested area and connected states": "Området du ber om og tilknyttede tilstander",
    "Inspects every visible section and state in scope, reports unrelated defects, and runs the complete production and WCAG 2.2 AA gates.": "Undersøker alle synlige seksjoner og tilstander i omfanget, rapporterer andre feil og kjører alle kontrollpunktene for produksjon og WCAG 2.2 AA.",
    "Yes, after the interview gate": "Ja, etter intervjuet",
    "Fast draft loop. Every unresolved product decision needs your answer, and you confirm the contract before it builds.": "Rask utkastrunde. Alle uavklarte produktbeslutninger trenger svar fra deg, og du bekrefter kontrakten før den bygger.",
    "No, read-only": "Nei, endrer ingenting",
    "Structural and visual assessment.": "Vurdering av struktur og visuelt uttrykk.",
    "Yes, authorised fixes": "Ja, godkjente rettinger",
    "Authorised edits, then the complete finalisation audit.": "Godkjente endringer, deretter full sluttkontroll.",
    "Findings ranked Critical, Important or Polish, plus Preserve decisions.": "Funn rangert som Critical, Important eller Polish, pluss Preserve-beslutninger.",
    "Agreed scope only": "Bare avtalt omfang",
    "Revision placed beside the original. Execution ledger, then Mockup production QA and Visual acceptance QA.": "Revisjonen plasseres ved siden av originalen. Du får en gjennomføringsoversikt, deretter Mockup production QA og Visual acceptance QA.",
    "Create, rewrite, update selected content": "Lag ny tekst, skriv om, oppdater valgt innhold",
    "Yes, when context and facts are clear": "Ja, når kontekst og fakta er klare",
    "One recommended version in Norwegian Bokmål.": "Én anbefalt versjon på norsk bokmål.",
    "No, unless you ask to “QA and fix” or “update”": "Nei, med mindre du ber om «QA og rett opp» eller «oppdater»",
    "Findings and ready-to-paste replacements.": "Funn og ferdige erstatninger du kan lime inn.",

    "Source rules everyone should know": "Kilderegler alle bør kjenne",
    "These come from the <code>SKILL.md</code> files. Every prompt should follow them.": "Reglene kommer fra <code>SKILL.md</code>-filene. Alle prompter bør følge dem.",
    "One skill per prompt": "Én skill per prompt",
    "Only the first Figma Resources skill mentioned in a prompt is reliably invoked. Use separate prompts and explicit handoffs.": "Bare den første Figma Resources-skillen du nevner i en prompt, blir kjørt på en pålitelig måte. Bruk egne prompter og tydelige overleveringer.",
    "Live Telegrafen is the authority": "Det publiserte Telegrafen er fasiten",
    "Check what is actually used, not what it looks like:": "Sjekk hva som faktisk er brukt, ikke hvordan det ser ut:",
    "Component instances": "Komponentinstanser",
    "Icon, style and variable bindings": "Koblinger til ikoner, stiler og variabler",
    "Provenance": "Opprinnelse",
    "No guessing on material decisions": "Ingen gjetting på viktige beslutninger",
    "Inspect the system first, then ask about unresolved user needs, purpose, behaviour, content or constraints. Components has a stricter interview-and-confirmation gate.": "Undersøk systemet først, og spør deretter om uavklarte brukerbehov, formål, oppførsel, innhold eller begrensninger. Components har strengere krav til intervju og bekreftelse.",
    "Mockups assembles screens": "Mockups setter sammen skjermer",
    "It hands off reusable component anatomy, properties, variants, states or QA to Components.": "Gjenbrukbar komponentanatomi, egenskaper, varianter, tilstander og QA overleveres til Components.",
    "New frames are siblings, placed to the right": "Nye frames plasseres ved siden av, til høyre",
    "Mockups creates new independent design frames beside the anchor in the same Section (or Page), never inside the selected object.": "Mockups lager nye, selvstendige frames ved siden av ankeret i samme Section (eller Page), aldri inne i det valgte objektet.",
    "Production assets by default": "Produksjonsressurser som standard",
    "Beta or experimental assets need your consent. Preserve existing work, content and accepted design decisions.": "Beta- og eksperimentelle ressurser krever samtykke fra deg. Bevar eksisterende arbeid, innhold og godkjente designbeslutninger.",
    "Dark surfaces are local dark-mode contexts": "Mørke flater er lokale kontekster for mørk modus",
    "Verify nested colours, states and controls. In dark contexts, Button <code>Neutral</code> is Off. Components goes further: never enable <code>Neutral</code> on a Button.": "Kontroller farger, tilstander og kontroller som ligger inni. I mørke kontekster står Button <code>Neutral</code> på Off. Components går lenger: Slå aldri på <code>Neutral</code> på en Button.",
    "No invented facts or fake PASS": "Ingen oppdiktede fakta eller falsk PASS",
    "Do not invent commercial facts or claim a verified PASS without evidence. Missing necessary provenance or access is BLOCKED.": "Ikke finn på kommersielle fakta, og ikke påstå en verifisert PASS uten dokumentasjon. Mangler nødvendig opprinnelse eller tilgang, er resultatet BLOCKED.",

    "Practical design tips": "Praktiske designtips",
    "Task first": "Oppgaven først",
    "Prioritise the user task and one clear primary action over decorative effects. Avoid unnecessary cards and repeated containment; consider open lists and grids.": "Prioriter brukerens oppgave og én tydelig hovedhandling foran dekorative effekter. Unngå unødvendige kort og rammer inni rammer. Vurder åpne lister og rutenett.",
    "Real styles and tokens": "Ekte stiler og tokens",
    "Use published typography styles and semantic colour tokens, not visual copies or hard-coded approximations.": "Bruk publiserte typografistiler og semantiske fargetokens, ikke visuelle kopier eller hardkodede tilnærminger.",
    "Stress the design": "Test designet grundig",
    "Check the design with:": "Sjekk designet med:",
    "Component states and interactive affordances": "Komponenttilstander og at interaktive elementer ser klikkbare ut",
    "Light and dark contexts": "Lys og mørk kontekst",
    "Resizing": "Endring av størrelse",
    "Long labels and wrapped text": "Lange etiketter og tekst som brytes",
    "UX Writing": "UX Writing",
    "Clear, calm Norwegian Bokmål.": "Tydelig og rolig norsk bokmål.",
    "<em>du</em> for the customer and <em>vi</em> for Telenor": "<em>du</em> om kunden og <em>vi</em> om Telenor",
    "Sentence case and specific actions": "Stor forbokstav bare i første ord og konkrete handlinger",
    "Never invent prices, eligibility or promises": "Finn aldri på priser, betingelser eller løfter",
    "QA": "QA",
    "Give evidence-backed status, scope and remaining blocks. An attractive output alone is not a PASS.": "Oppgi status, omfang og det som fortsatt blokkerer, med dokumentasjon. Et pent resultat er ikke en PASS i seg selv.",

    "Quick cheat sheet": "Hurtigoversikt",
    "Need, skill and mode": "Behov, skill og modus",
    "I need": "Jeg trenger",
    "New screen or flow": "Ny skjerm eller flyt",
    "Final screen QA": "Endelig QA av skjerm",
    "New reusable component": "Ny gjenbrukbar komponent",
    "Component audit only": "Bare gjennomgang av komponent",
    "Component fixes and release QA": "Rettinger og QA før lansering av komponent",
    "Visual critique only": "Bare visuell vurdering",
    "Apply accepted visual changes": "Gjennomfør godkjente visuelle endringer",
    "New or improved Norwegian in-product copy": "Ny eller bedre norsk tekst i produktet",
    "Create or Rewrite": "Lag ny tekst eller skriv om",
    "Copy assessment only": "Bare vurdering av tekst",

    "Sources and scope": "Kilder og omfang",
    "The workflow, example prompts and starter prompts are recommendations, not source rules. Where this guide and a <code>SKILL.md</code> differ, follow <code>SKILL.md</code>. The current published Figma libraries remain the runtime source of truth.": "Arbeidsflyten, eksempelpromptene og startpromptene er anbefalinger, ikke kilderegler. Hvis denne veiledningen og en <code>SKILL.md</code> sier noe ulikt, følger du <code>SKILL.md</code>. De publiserte Figma-bibliotekene er alltid fasiten når du jobber.",
    "Telegrafen design skills guide. Styled with tokens from the Telegrafen Design Tokens and Components libraries.": "Veiledning for Telegrafen-skills. Stylet med tokens fra Telegrafen-bibliotekene Design Tokens og Components."
  },
  ui: {
    en: {
      langGroup: "Language",
      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme",
      tocLabel: "On this page",
      copy: "Copy prompt",
      copied: "Copied",
      copiedAnnounce: "Prompt copied to clipboard",
      copyFailed: "Copy is not available. The prompt is selected; press Control or Command plus C to copy it.",
      pickerEmpty: "Select a task to see a recommendation.",
      fromCheatSheet: "From the cheat sheet",
      adaptBrackets: " (adapt the bracketed details)",
      exampleFromStep: "Example prompt from workflow step {n}",
      starterPrompt: "Starter prompt",
      step: "Step ",
      progress: "Step {n} of {total}"
    },
    no: {
      langGroup: "Språk",
      themeToLight: "Bytt til lyst tema",
      themeToDark: "Bytt til mørkt tema",
      tocLabel: "På denne siden",
      copy: "Kopier prompt",
      copied: "Kopiert",
      copiedAnnounce: "Prompten er kopiert",
      copyFailed: "Du kan ikke kopiere automatisk her. Prompten er markert. Trykk Ctrl eller Cmd og C for å kopiere den.",
      pickerEmpty: "Velg en oppgave for å se en anbefaling.",
      fromCheatSheet: "Fra hurtigoversikten",
      adaptBrackets: " (tilpass detaljene i klammer)",
      exampleFromStep: "Eksempelprompt fra steg {n} i arbeidsflyten",
      starterPrompt: "Startprompt",
      step: "Steg ",
      progress: "Steg {n} av {total}"
    }
  },
  steps: {
    Brief: "Brief",
    Explore: "Utforsk",
    Copy: "Tekst",
    Finalize: "Ferdigstill",
    Critique: "Vurder",
    Refine: "Forbedre",
    Handoff: "Overlever"
  },
  tasks: {
    "new-screen": {
      why: "Mockups setter sammen skjermer av verifiserte Telegrafen-ressurser. Start med én liten, avgrenset visning. Du får en Draft status, ikke en endelig vurdering."
    },
    "final-qa": {
      why: "Kjører alle kontrollpunktene for produksjon og WCAG 2.2 AA, retter bare feil i området du ber om og tilknyttede tilstander, og rapporterer andre funn."
    },
    "new-component": {
      why: "Components eier anatomi, egenskaper, varianter og tilstander. Du får et intervju med ett spørsmål om gangen, og en kontrakt du bekrefter før den bygger."
    },
    "component-audit": {
      why: "Vurdering av struktur og visuelt uttrykk. Ingenting blir endret.",
      prompt: "/telegrafen-design-components. Review & QA på den valgte komponenten, uten å endre noe. Rapporter funn med dokumentasjon."
    },
    "component-fix": {
      why: "Gjør godkjente endringer og kjører deretter full sluttkontroll.",
      prompt: "/telegrafen-design-components. Repair & Finalize på den valgte komponenten. Rett bare [feilene du lister opp], og kjør deretter sluttkontrollen."
    },
    "visual-critique": {
      why: "Kunstnerisk gjennomgang som ikke endrer noe. Funnene rangeres som Critical, Important eller Polish, med Preserve-beslutninger."
    },
    "visual-apply": {
      why: "Gjennomfører bare godkjente funn i en revisjon ved siden av originalen, og kjører deretter Mockup production QA og Visual acceptance QA."
    },
    "ux-copy": {
      why: "Tydelig og rolig mikrotekst på norsk bokmål. Skillen finner ikke på produktfakta, og manglende fakta blir markert for avklaring."
    },
    "ux-qa": {
      why: "Endrer ingenting. Du får funn og ferdige erstatninger uten at designet blir endret.",
      prompt: "/telegrafen-ux-writing. QA av teksten i den valgte framen, uten å endre noe. Gi meg ferdige erstatninger du kan lime inn."
    }
  }
};
