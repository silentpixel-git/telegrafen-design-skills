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
    "Know the user task, the primary action and the target sizes. Look at how other products solve the same task, for example on <a href=\"https://mobbin.com\">Mobbin</a>, and borrow patterns, not visuals. Select the frame the new work should sit beside.": "Vit hvilken oppgave brukeren skal løse, hva hovedhandlingen er og hvilke skjermstørrelser du designer for. Se hvordan andre produkter løser den samme oppgaven, for eksempel på <a href=\"https://mobbin.com\">Mobbin</a>, og lån mønstre, ikke uttrykk. Velg framen det nye arbeidet skal ligge ved siden av.",
    "Help me sharpen the brief for a [screen or flow] that helps customers [user task] before we design anything. I’ve attached reference screens from Mobbin showing how other apps solve similar tasks. Summarise the patterns worth borrowing and the ones to avoid. Then list the user task, the primary action, the target sizes and any open questions. Use the references for patterns only, don’t copy their visuals, and don’t create anything in Figma yet.": "Hjelp meg å spisse briefen for [skjerm eller flyt] som hjelper kundene med å [brukeroppgave], før vi designer noe. Jeg har lagt ved referanseskjermer fra Mobbin som viser hvordan andre apper løser lignende oppgaver. Oppsummer hvilke mønstre som er verdt å låne, og hvilke vi bør unngå. List deretter opp brukeroppgaven, hovedhandlingen, skjermstørrelsene og eventuelle åpne spørsmål. Bruk referansene bare for mønstre, ikke kopier det visuelle uttrykket, og ikke lag noe i Figma ennå.",

    "Generate one small, scoped view": "Lag én liten, avgrenset visning",
    "Ask for one view, not a whole flow. Expect questions about material unknowns and a <em>Draft status</em> of READY TO ITERATE, NEEDS CHANGES or BLOCKED.": "Be om én visning, ikke en hel flyt. Du får spørsmål om viktige ukjente forhold og en <em>Draft status</em>: READY TO ITERATE, NEEDS CHANGES eller BLOCKED.",
    "/telegrafen-design-mockups. Use Build &amp; Iterate. Design one [desktop or mobile] view that helps customers [user task]. Explain the primary customer action, use verified Telegrafen assets, place the new frame beside the selected frame, and ask about material unknowns.": "/telegrafen-design-mockups. Bruk Build &amp; Iterate. Design én visning for [desktop eller mobil] som hjelper kundene med å [brukeroppgave]. Forklar kundens hovedhandling, bruk verifiserte Telegrafen-ressurser, plasser den nye framen ved siden av den valgte framen, og spør om viktige ukjente forhold.",

    "Rewrite or QA the customer-facing copy": "Skriv om eller kvalitetssikre teksten kunden ser",
    "UX Writing · Rewrite or QA": "UX Writing · Skriv om eller QA",
    "Use a separate prompt. QA is read-only unless you ask to “QA and fix” or “update”.": "Bruk en egen prompt. QA endrer ingenting med mindre du ber om «QA og rett opp» eller «oppdater».",
    "/telegrafen-ux-writing. Rewrite the copy in the selected frame for [user task]. Use du for the customer and vi for Telenor, sentence case and specific actions. Do not invent prices, eligibility or promises; mark missing facts for clarification.": "/telegrafen-ux-writing. Skriv om teksten i den valgte framen for [brukeroppgave]. Bruk du om kunden og vi om Telenor, stor forbokstav bare i første ord og konkrete handlinger. Ikke finn på priser, betingelser eller løfter. Marker manglende fakta for avklaring.",

    "Run production and WCAG checks": "Kjør produksjons- og WCAG-sjekker",
    "Runs the production and WCAG 2.2 AA design gates. Applies fixes only within the authorised scope and reports unrelated issues.": "Kjører kontrollpunktene for produksjon og WCAG 2.2 AA. Retter bare innenfor det godkjente omfanget og rapporterer andre funn.",
    "/telegrafen-design-mockups. Review &amp; Finalize the selected frame. Inspect actual provenance/bindings, responsive states, accessibility and visual polish. Correct only authorised defects and report production/WCAG gates.": "/telegrafen-design-mockups. Bruk Review &amp; Finalize på den valgte framen. Undersøk faktisk opprinnelse og koblinger, responsive tilstander, tilgjengelighet og visuell finish. Rett bare feil som er godkjent for retting, og rapporter kontrollpunktene for produksjon og WCAG.",

    "Critique hierarchy, quality and brand": "Vurder hierarki, kvalitet og merkevare",
    "Read-only. Findings are ranked Critical, Important or Polish, with Preserve decisions so good work survives rework.": "Endrer ingenting. Funnene rangeres som Critical, Important eller Polish, med Preserve-beslutninger slik at godt arbeid blir bevart.",
    "/telegrafen-visual-design. Review the selected screen, read-only. Identify the five highest-impact findings for hierarchy, spacing, typography, composition, and premium Telenor expression. State what to preserve.": "/telegrafen-visual-design. Bruk Review på den valgte skjermen, uten å endre noe. Finn de fem funnene med størst effekt for hierarki, luft, typografi, komposisjon og et premium Telenor-uttrykk. Si hva som bør bevares.",

    "Apply only the accepted recommendations": "Gjennomfør bare de godkjente anbefalingene",
    "Implements accepted findings in a revision beside the original, returns a ledger (Implemented, Preserved, Blocked, Dismissed by user), then runs Mockup production QA and Visual acceptance QA.": "Gjennomfører godkjente funn i en revisjon ved siden av originalen og gir deg en oversikt (Implemented, Preserved, Blocked, Dismissed by user). Deretter kjøres Mockup production QA og Visual acceptance QA.",
    "/telegrafen-visual-design. Apply only accepted findings 1, 2 and 4; preserve confirmed content and interactions. Provide an implementation ledger and validation.": "/telegrafen-visual-design. Bruk Apply bare på godkjente funn 1, 2 og 4. Bevar bekreftet innhold og interaksjoner. Lever en gjennomføringsoversikt og validering.",

    "Hand off new reusable components": "Overlever nye gjenbrukbare komponenter",
    "Components · separate handoff": "Components · egen overlevering",
    "If the design needs a new reusable component, send a separate Components prompt. Do not use Mockups to build component APIs.": "Hvis designet trenger en ny gjenbrukbar komponent, sender du en egen Components-prompt. Ikke bruk Mockups til å bygge API-er for komponenter.",
    "/telegrafen-design-components. Use Build &amp; Iterate. The design needs a reusable [component] for [user need]. Inspect the closest approved Telegrafen components first, then ask me one question at a time about purpose, anatomy, content, states and behaviour. Summarise the contract and wait for my confirmation before building.": "/telegrafen-design-components. Bruk Build &amp; Iterate. Designet trenger en gjenbrukbar [komponent] for [brukerbehov]. Undersøk først de nærmeste godkjente Telegrafen-komponentene, og still meg deretter ett spørsmål om gangen om formål, anatomi, innhold, tilstander og oppførsel. Oppsummer kontrakten og vent på bekreftelsen min før du bygger.",

    "Previous": "Forrige",
    "Next": "Neste",

    "Look up skills, modes and rules while you work.": "Slå opp skills, moduser og regler mens du jobber.",
    "What is Skills?": "Hva er skills?",
    "A skill is a set of instructions that an AI agent loads when you ask for it. Each Telegrafen skill is a single <code>SKILL.md</code> file that teaches the agent in Figma how to work with our design system: which libraries and tokens to use, which rules to follow, and which quality checks to run before it hands the work back.": "En skill er et sett med instruksjoner som en AI-agent henter når du ber om det. Hver Telegrafen-skill er én <code>SKILL.md</code>-fil som lærer agenten i Figma å jobbe med designsystemet vårt: hvilke biblioteker og tokens den skal bruke, hvilke regler den skal følge, og hvilke kvalitetssjekker den skal kjøre før den leverer arbeidet tilbake.",
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
    "Review modes are not interchangeable": "Gjennomgangsmodusene gjør ikke det samme",
    "Mockups <strong>Review &amp; Finalize</strong> inspects the full scope, corrects defects in the requested area and runs the production and WCAG 2.2 AA gates. Components <strong>Review &amp; QA</strong>, Visual Design <strong>Review</strong> and UX Writing <strong>QA</strong> are read-only: they report findings and change nothing unless you explicitly authorise edits.": "Mockups <strong>Review &amp; Finalize</strong> undersøker hele omfanget, retter feil i området du ber om, og kjører kontrollpunktene for produksjon og WCAG 2.2 AA. Components <strong>Review &amp; QA</strong>, Visual Design <strong>Review</strong> og UX Writing <strong>QA</strong> endrer ingenting. De rapporterer funn og gjør bare endringer hvis du uttrykkelig godkjenner det.",
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
    "<strong>One skill per prompt.</strong> Only the first Figma Resources skill mentioned in a prompt is reliably invoked. Use separate prompts and explicit handoffs.": "<strong>Én skill per prompt.</strong> Bare den første Figma Resources-skillen du nevner i en prompt, blir kjørt på en pålitelig måte. Bruk egne prompter og tydelige overleveringer.",
    "<strong>Live Telegrafen is the authority.</strong> Verify actual component instances, icon, style and variable bindings, and provenance. Visual resemblance does not prove compliance.": "<strong>Det publiserte Telegrafen er fasiten.</strong> Kontroller faktiske komponentinstanser, koblinger til ikoner, stiler og variabler, og opprinnelse. At noe ser likt ut, beviser ikke at det følger systemet.",
    "<strong>No guessing on material decisions.</strong> Inspect the system first, then ask about unresolved user needs, purpose, behaviour, content or constraints. Components has a stricter interview-and-confirmation gate.": "<strong>Ingen gjetting på viktige beslutninger.</strong> Undersøk systemet først, og spør deretter om uavklarte brukerbehov, formål, oppførsel, innhold eller begrensninger. Components har strengere krav til intervju og bekreftelse.",
    "<strong>Mockups assembles screens.</strong> It hands off reusable component anatomy, properties, variants, states or QA to Components.": "<strong>Mockups setter sammen skjermer.</strong> Gjenbrukbar komponentanatomi, egenskaper, varianter, tilstander og QA overleveres til Components.",
    "<strong>New frames are siblings, placed to the right.</strong> Mockups creates new independent design frames beside the anchor in the same Section (or Page), never inside the selected object.": "<strong>Nye frames plasseres ved siden av, til høyre.</strong> Mockups lager nye, selvstendige frames ved siden av ankeret i samme Section (eller Page), aldri inne i det valgte objektet.",
    "<strong>Production assets by default.</strong> Beta or experimental assets need your consent. Preserve existing work, content and accepted design decisions.": "<strong>Produksjonsressurser som standard.</strong> Beta- og eksperimentelle ressurser krever samtykke fra deg. Bevar eksisterende arbeid, innhold og godkjente designbeslutninger.",
    "<strong>Dark surfaces are local dark-mode contexts.</strong> Verify nested colours, states and controls. In dark contexts, Button <code>Neutral</code> is Off. Components goes further: never enable <code>Neutral</code> on a Button.": "<strong>Mørke flater er lokale kontekster for mørk modus.</strong> Kontroller farger, tilstander og kontroller som ligger inni. I mørke kontekster står Button <code>Neutral</code> på Off. Components går lenger: Slå aldri på <code>Neutral</code> på en Button.",
    "<strong>No invented facts or fake PASS.</strong> Do not invent commercial facts or claim a verified PASS without evidence. Missing necessary provenance or access is BLOCKED.": "<strong>Ingen oppdiktede fakta eller falsk PASS.</strong> Ikke finn på kommersielle fakta, og ikke påstå en verifisert PASS uten dokumentasjon. Mangler nødvendig opprinnelse eller tilgang, er resultatet BLOCKED.",

    "Practical design tips": "Praktiske designtips",
    "<strong>Task first.</strong> Prioritise the user task and one clear primary action over decorative effects. Avoid unnecessary cards and repeated containment; consider open lists and grids.": "<strong>Oppgaven først.</strong> Prioriter brukerens oppgave og én tydelig hovedhandling foran dekorative effekter. Unngå unødvendige kort og rammer inni rammer. Vurder åpne lister og rutenett.",
    "<strong>Real styles and tokens.</strong> Use published typography styles and semantic colour tokens, not visual copies or hard-coded approximations.": "<strong>Ekte stiler og tokens.</strong> Bruk publiserte typografistiler og semantiske fargetokens, ikke visuelle kopier eller hardkodede tilnærminger.",
    "<strong>Stress the design.</strong> Check component states and interactive affordances, light and dark contexts, resizing, long labels and wrapped text.": "<strong>Test designet grundig.</strong> Sjekk komponenttilstander og at interaktive elementer ser klikkbare ut, lys og mørk kontekst, endring av størrelse, lange etiketter og tekst som brytes.",
    "<strong>UX Writing.</strong> Clear, calm Norwegian Bokmål. <em>du</em> for the customer and <em>vi</em> for Telenor, sentence case, specific actions. Never invent prices, eligibility or promises.": "<strong>UX Writing.</strong> Tydelig og rolig norsk bokmål. <em>du</em> om kunden og <em>vi</em> om Telenor, stor forbokstav bare i første ord og konkrete handlinger. Finn aldri på priser, betingelser eller løfter.",
    "<strong>QA.</strong> Give evidence-backed status, scope and remaining blocks. An attractive output alone is not a PASS.": "<strong>QA.</strong> Oppgi status, omfang og det som fortsatt blokkerer, med dokumentasjon. Et pent resultat er ikke en PASS i seg selv.",

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
      prompt: "/telegrafen-design-components. Bruk Review & QA på den valgte komponenten, uten å endre noe. Vurder struktur, egenskaper, varianter, tilstander, koblinger til tokens og stiler, lys og mørk kontekst og tilgjengelighet. Rapporter funn med dokumentasjon, og ikke gjør endringer."
    },
    "component-fix": {
      why: "Gjør godkjente endringer og kjører deretter full sluttkontroll.",
      prompt: "/telegrafen-design-components. Bruk Repair & Finalize på den valgte komponenten. Rett bare [feilene du lister opp] og bevar godkjente beslutninger. Spør før du endrer det offentlige API-et. Kjør deretter full sluttkontroll og rapporter resultatene med dokumentasjon."
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
      prompt: "/telegrafen-ux-writing. Bruk QA på teksten i den valgte framen, uten å endre noe. Rapporter funn og ferdige erstatninger du kan lime inn, uten å endre designet."
    }
  }
};
