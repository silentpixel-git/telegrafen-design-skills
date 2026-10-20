---
name: telegrafen-ux-writing
description: Use when creating, rewriting, directly updating, or QAing Norwegian Bokmål UX writing for Telenor private-customer designs and interfaces. Do not use for campaigns, articles, product pages, emails, push notifications, or other long-form copy.
metadata:
  version: "1.2"
---

# Telegrafen UX Writing v1.2

Use this guide when creating, rewriting, or reviewing Norwegian UX copy for Telenor private customers in a design or interface. Write in Norwegian Bokmål.

This guide covers in-product microcopy only: labels, buttons, helper text, validation and errors, confirmations, empty and loading states, dialogs, onboarding, payments, security, and service interruptions. Do not use it for campaigns, articles, product pages, emails, push notifications, or other long-form copy.

## The voice

Write as Telenor: clear, calm, helpful, and competent.

- Use `du` for the customer and `vi` for Telenor.
- Use `vi` only when Telenor is the confirmed actor. Name another provider when it performs the action, and do not imply that Telenor controls an external outcome.
- State what the customer can do or gets before explaining technical detail.
- Use short, natural sentences and familiar Norwegian words.
- Use sentence case. Preserve official product names, acronyms, and protected wording exactly.
- Use full stops for complete explanatory sentences. Do not add full stops to buttons, field labels, headings, short status labels, or short confirmations. Use a question mark only for a genuine question.
- Do not use em dashes or hyphens as pauses. Use full stops or rewrite the sentence instead.
- Be warm without becoming casual. Be confident without hype.
- Give a clear next step whenever one is useful.
- Use one exclamation mark at most; usually use none.
- Use an ellipsis only for an active, continuing system process, such as `Henter forbruket ditt …`. Never use it for hesitation, suspense, or a conversational pause.
- Do not add emoji or decorative text symbols. Let approved components and icons provide the visual signal.
- Write directly and neutrally. Do not assume gender, family relationships, disability, age, technical ability, or living situation. Never imply that difficulty is caused by the customer's competence.

Avoid jargon, English phrasing translated word-for-word, fear, blame, slang, empty superlatives, pressure, and vague CTAs such as `Klikk her`.

Good: `Vi kunne ikke lagre endringen. Prøv igjen.`

Avoid: `Oops! Noe gikk galt med systemet vårt.`

## Uppercase and sentence case

Norwegian interface copy uses sentence case. Start a sentence or heading with a capital letter, then use lowercase except where Norwegian spelling requires a capital letter.

- Do not write headings, buttons, links, labels, status messages, price qualifiers, or complete sentences in all caps.
- Do not use uppercase for emphasis, urgency, hierarchy, or visual impact. Use clear wording and the approved Telegrafen text style instead.
- Preserve official product names, acronyms, initialisms, codes, and protected wording exactly, such as `SIM`, `PIN` and `TV`.
- When rewriting uppercase source copy, convert it to natural sentence case unless it is a verified exception.
- If an approved component or visual treatment forces all caps, flag the conflict. Do not compensate by storing the source copy in uppercase.

Good: `Sjekk dekningen din`

Avoid: `SJEKK DEKNINGEN DIN`

## Required context

Before writing or changing copy, establish:

1. What the customer is trying to do.
2. Where the text appears: component or screen.
3. The current state: default, loading, selected, success, error, empty, disabled, or interrupted.
4. What happens after the customer acts.
5. The approved product facts, if the copy includes price, eligibility, timing, data allowance, coverage, policy, or a promise.
6. Who performs the action, when another provider or system may be responsible.

Ask for the missing context when it could change the meaning. Do not invent product facts. Use `[avklar med produktteamet]` for a missing fact if a draft must be shown.

## Create and rewrite copy

Return one recommended version by default. Provide alternatives only when asked.

Match the copy to its UI role:

| UI role | Write this |
|---|---|
| Button | A precise verb and outcome: `Lagre endringer`, `Se faktura`, `Prøv igjen` |
| Field label | What the customer must provide: `Mobilnummer` |
| Helper text | The minimum useful clarification: `Vi bruker nummeret for å sende deg en kode.` |
| Error | What happened, how to fix it, and the next step: `Skriv inn et gyldig mobilnummer.` |
| Confirmation | What is complete and what happens next: `Endringene er lagret` |
| Empty state | What is absent and the useful next action: `Du har ingen åpne fakturaer.` |
| Loading | What is happening: `Henter forbruket ditt …` |
| Security or payment | Be factual, calm, and specific. Explain the action without alarming the customer. |

Use one approved term for each object and action throughout a flow. Preserve official product names and established interface terminology; do not introduce synonyms merely for variation.

Link text must name its destination or action when read on its own, such as `Se vilkår for bredbånd`. Do not use `Klikk her`, or an unclear `Les mer` without sufficient context.

Use `OK` or `Lukk` only to acknowledge information with no consequence or further decision. Use `Fortsett` only when the next step is already clear and reversible. For purchases, consent, deletion, payment, or another consequential action, name the specific outcome.

Use the shortest clear version that preserves meaning. If accurate copy does not fit its component, flag the layout for adjustment instead of removing consequences, recovery steps, or required information.

Never expose internal system names, provisioning terms, or raw error codes unless the customer genuinely needs a code when contacting support. Explain an essential abbreviation or specialist term on first use.

### Price writing

Use the approved Norwegian price phrasing and grouping:

- `Før 12 000,- Nå 11 000,-`
- `Spar 1000,-`
- `Fra 699,-/md.`

Use a space as the thousands separator, `,-` for kroner, and `/md.` for a monthly price. Keep the qualifier and its price together. Do not use `kr`, `kroner`, `/måneden`, uppercase `SPAR` or `FRA`, or strikethrough. Use `Før`, `Nå`, `Spar`, or `Fra` only when supported by verified product or campaign facts.

## Update selected content

When the active tool supports direct edits and a designer selects text, a component, or a frame and asks to update it with UX copy:

1. Inspect the selected scope and its surrounding UI context.
2. Apply the one recommended version directly when the context and facts are clear.
3. Preserve the selected component, layout, and visual design. Change copy only unless asked otherwise.
4. Update related text in the same local flow when it would otherwise become inconsistent, such as a dialog title, body, and CTA.
5. Report briefly what changed.

Ask before editing if the selection is unclear, the task outcome is unknown, the copy contains an unverified product fact, or changing it may alter legal meaning.

A request to `QA` or `review` is read-only. Report findings and ready-to-paste replacements without changing the design. Edit directly only when the user explicitly asks to `QA and fix`, `update`, or equivalent.

## Protected copy

Do not invent, remove, or change the meaning of legal, price, consent, policy, eligibility, or security commitments.

When approved wording is supplied, keep its meaning intact. You may add a clearer explanation around it, or flag it for product/legal review. Do not turn uncertainty into certainty.

For consent, marketing, privacy, payment, and cancellation, make acceptance and refusal or exit choices equally clear, specific, and understandable. Never use guilt, pressure, obscured consequences, or deliberately harder cancellation language.

## Critical states and actions

- **Destructive actions:** Name the affected object, state the immediate consequence, explain whether the action can be undone, and use a specific confirmation label. Avoid `Er du sikker?`, `Ja`, and `Fortsett` when they hide the action.
- **Errors:** State only the verified outcome and safe recovery step. Never speculate that the network, password, bank, system, or customer caused the problem. If no safe recovery is known, explain the next available step or update path.
- **Payments and orders:** Never state success or failure unless it is verified. For an uncertain outcome, explain that the status is being checked, say where it can be verified, and do not encourage an immediate repeat action.
- **Loading and progress:** Describe what is happening. Never invent a duration, completion percentage, or guaranteed outcome. Mention time only when it comes from a verified system state.
- **Empty states:** Use empty-state copy only for a verified absence of content. Distinguish first use, no search results, unavailable data, missing access, loading failure, and technical failure, with the relevant next step.
- **Timing and interruptions:** Use a date, time, delivery estimate, or restoration estimate only when verified. If timing is unknown, say so and explain how the customer will receive an update.
- **Stressful situations:** For fraud, a lost phone, debt, bereavement, account compromise, or service loss, acknowledge the situation without assuming how the customer feels. Lead with the safest useful action and avoid cheerful language, blame, or artificial urgency.
- **Support:** If a link opens a customer-service page, name the destination clearly, such as `Kontakt kundeservice` or `Se kontaktmuligheter`, without duplicating information available there. If the interface sends the customer directly to a channel, include only verified information needed to use it. Never invent routes, availability, wait times, or opening hours.
- **Accessible instructions:** Identify controls and content by their accessible label or purpose, not by colour, shape, icon, or position. The instruction must remain understandable if the layout changes or is read aloud.

## QA UX copy in a design

Review every visible text element in the supplied scope and every supplied connected state. State which screens and states were checked. Exclude hidden or unrelated branches unless the user includes them.

Review for:

- clarity on first reading;
- correct use of `du` and `vi`;
- sentence case, with uppercase limited to verified names, acronyms, initialisms, codes, and protected wording;
- a specific next step where needed;
- descriptive link text and specific labels for consequential actions;
- useful help text rather than repeated labels;
- errors that explain both problem and recovery;
- correct distinction between empty, loading, unavailable, permission, success, failure, and uncertain states;
- clear consequences for destructive, payment, security, and consent actions;
- equally clear consent, refusal, cancellation, and exit choices;
- consistent terminology across the local flow;
- verified product and price claims using the approved price notation;
- inclusive language and instructions that do not rely on visual position or appearance;
- natural Norwegian, without jargon, hype, fear, blame, or translated English idioms;
- text that still works with long names, amounts, dates, and real product data.

Order findings by severity:

- `Critical`: misleading, unsafe, legally sensitive, factually unsupported, or likely to cause the wrong action.
- `Important`: unclear outcome, consequence, recovery, or inconsistent terminology.
- `Minor`: readability or polish that does not change meaning.

For every issue, provide a ready-to-paste replacement when approved meaning can be preserved:

`[Severity] [Location] — [Issue] → [Recommended copy]`

For legal, consent, price, eligibility, policy, or security copy, provide a replacement only when the approved meaning can be preserved with confidence. Otherwise identify the problem, mark the item `BLOCKED`, and state which product, legal, or security clarification is required.

Finish with one result: `PASS`, `NEEDS CHANGES`, or `BLOCKED`.

- `PASS`: copy is clear, factual, and consistent with this guide.
- `NEEDS CHANGES`: copy can be improved without missing information.
- `BLOCKED`: a required fact, outcome, or approved wording is missing. Any blocked item makes the overall result `BLOCKED`.

## Final check

Before completing work, ask: does this help the customer understand what is happening and take the next step with confidence?
