---
name: telegrafen-design-mockups
description: Use when creating or updating private-customer Figma Make mockups, screens, flows, or prototypes governed by Telegrafen.
metadata:
  version: "2.4"
---

# Telegrafen design mockups v2.4

## Purpose and modes

Create private-customer concepts from verified Telegrafen ingredients. Reuse the system where it exists; compose one-off product layouts where it does not.

Use **Clear. Premium. Distinctly Telenor.** as a construction lens, not an acceptance gate: clear purpose/action; precision over effects; task-specific composition.

Mockups own assembly; `/telegrafen-visual-design` owns art direction and formal visual acceptance. Hand off with intent, frames, constraints, and QA in a separate prompt.

**Build & Iterate** is the concept-work default. Build only requested views, outcomes, and responsiveness. Apply accessibility and provenance invariants. End with `Draft status: READY TO ITERATE`, `NEEDS CHANGES`, or `BLOCKED`; do not issue Review verdicts or formal visual acceptance.

**Review & Finalize** applies when the user asks to review, QA, validate, finalize, publish, or treats the design as ready. Inspect every visible section and state in the supplied scope, modify only the requested area and connected states, report unrelated defects, and run the complete production and WCAG gates.

Status meanings are global:

- `PASS`: every required check has inspectable evidence.
- `FAIL` or `NEEDS CHANGES`: an inspectable violation exists; fix it when authorised and rerun the check.
- `BLOCKED`: required provenance, access, binding evidence, or a material decision is unavailable. Never substitute visual resemblance.

## Sequence

1. **Scope** — infer the mode, requested view or flow, selected design, and target sizes.
2. **Resolve** — inspect the brief and closest live patterns. Ask one focused question at a time only while purpose, outcome, hierarchy, content, assets, selection model, defaults, or initial state remains materially unclear. A clear brief or narrow edit needs no confirmation ceremony.
3. **Place** — satisfy the Destination invariant before building.
4. **Source** — find required components, tokens, styles, icons, states, and assets by function and common synonyms. An essential unresolved source is `BLOCKED`.
5. **Build** — use supported instances and ordinary mockup layers. Preserve unaffected work.
6. **Verify and hand off** — run the active mode gate and report only applicable handoff fields, failures, blocks, placeholders, and manual actions.

If an example conflicts materially with Telegrafen, pause only the affected section and confirm the Telegrafen interpretation.

## Sources and provenance

Use the live sources available to the current Make kit:

- [Introduction to Telegrafen](https://www.figma.com/slides/liUMCNH7tsliKFKjvNbpc0/)
- [Components](https://www.figma.com/design/80yLUPif6wgDwXLu5MbMFj/)
- [Design Tokens](https://www.figma.com/design/aW7bFTLqx5L0XTWMskOHSR/)
- [Typography guidance](https://www.figma.com/design/Q9WEywDHM8JzcyfcclGuPD/testing-skills?node-id=1231-4612)
- [UI Icons](https://www.figma.com/design/tgJeQElYu5kOzdP3VxVsky/)
- [Product Icons](https://www.figma.com/design/iWy3sNQXCzr2XIBZUGJnAp/)
- [Illustrative Icons](https://www.figma.com/design/8pTia61uly3XAkmZfOSUYt/)
- [Approved brand images](https://www.figma.com/design/Q9WEywDHM8JzcyfcclGuPD/testing-skills?node-id=1231-5824)

Use production assets by default; ask before beta or experimental assets. The live library wins conflicts. Typography guidance explains roles but is not a token source.

Visual similarity is not provenance. Inspect actual component, style, icon, and variable bindings. A linked source does not prove availability in Make. Missing essential evidence is `BLOCKED`; never use an invented, generated, redrawn, stretched, or external substitute.

## Core invariants

### Destination

Resolve hierarchy before coordinates. Near, beside, right-aligned, and top-aligned describe position only; they never make the selected node or anchor a parent.

- If the selection is inside a Figma Section, ascend to the direct child of that Section that contains the selection. Use it as the anchor and create each new top-level design frame as a direct child of the same Section, making it a sibling of the anchor.
- Without an enclosing Section, ascend to the direct child of the Page that contains the selection. Use it as the anchor and create each new top-level design frame as a direct child of the Page, making it a sibling of the anchor.

Place the design to the right of the anchor, top-aligned, with a consistent gap and no overlap. Never create an independent design as a child or descendant of the selection, anchor, regular Frame, Group, component, component set, instance, or Auto Layout frame. The only exception is an explicitly requested internal edit: then add only the requested content inside the stated target instead of creating an independent design.

Do not create an extra wrapper, board, frame, group, annotated container, or background solely to hold, label, explain, or position new mockup frames. Put explanations in the handoff; add canvas annotations only when the user explicitly requests them.

Before building, verify the destination parent type and identity. After building, verify that every new top-level design frame has that exact direct parent and has no ancestor relationship with the selection or anchor. If there is no selection, multiple selections make the anchor ambiguous, the parent cannot be inspected, or placement requires moving unrelated work, ask where to create the design before building.

### Mockup-only boundary

This skill never creates Figma components, component sets, variants, or properties. Concepts use ordinary frames, groups, Auto Layout, and existing Telegrafen component instances. Repeated structures remain ordinary mockup layers.

When the concept needs a reusable API, variants, properties, component-level states, repair, or component QA, stop before construction and prepare a `/telegrafen-design-components` handoff containing the user need, anatomy, visible states, sources, target location, and unresolved decisions. Route directly; do not ask whether this skill should build the component.

### Published typography binding

Inventory visible text after the final text edit: created or changed nodes in Build & Iterate; every visible node in Review & Finalize. Separate intact component-internal text from custom text. Overridden or detached component text counts as custom.

Every custom text node must satisfy all four checks:

1. `textStyleId` is non-empty and not mixed.
2. The resolved style is remote, published, and Telegrafen-owned.
3. No manual font-family, weight, size, line-height, or letter-spacing override remains.
4. Its role and exact published style name are recorded.

Binding individual typography variables alone does not satisfy the gate. Never leave Inter or another default font on custom text. Visual fidelity never overrides style provenance: use the closest published style and report any difference from the reference.

Report `Typography QA: PASS — N/N custom text nodes verified`, `FAIL`, or `BLOCKED`. An empty or mixed ID, non-Telegrafen style, or manual override is `FAIL`; uninspectable bindings or an unresolved appropriate style are `BLOCKED`. Non-pass prevents draft readiness, production QA, and final QA from passing.

### Radius by role

Preserve the radius of verified Telegrafen components. For custom surfaces, decide whether a boundary is needed. A missing component does not require `0`.

Radius may support containment, interaction, selection, floating layers, media masks, or continuity with an approved pattern. Tokens alone are insufficient. Use it; otherwise choose the smallest verified Radius token:

- `none`: page regions, full-bleed or edge-attached surfaces, list rows, tables, joined elements, or parent-contained groups.
- `2xs` or `xs`: compact details, inline containers, or media masks.
- `s`: independent cards, tiles, panels, or interactive surfaces.
- `m`: detached overlays, modal-like surfaces, or prominent containers.
- `l`: exceptional surfaces with Telegrafen precedent.
- `max`: circular or pill roles only.

Visual polish may choose between adjacent appropriate tokens; never invent a value or boundary. Keep peers consistent. Round parent and children only for distinct layers.

Build & Iterate inventories each changed visible custom boundary; Review & Finalize inspects every visible custom boundary. Record role and token, including `none`. Unjustified, inconsistent, oversized, or unresolved radius is `NEEDS CHANGES`. Use `BLOCKED` only when the token cannot be verified or the role needs a material decision, not merely because no component analogue exists. Non-pass prevents readiness and final QA.

Coherent nested boundaries use concentric corners; with uniform inset, `outer radius = inner radius + inset`. Use verified tokens or properties. Otherwise use one boundary or a live pattern; inspect non-uniform inset optically.

### Section icon-family and geometry

Choose exactly one standalone artwork family per visual section:

- UI Icons: compact roles at 32 px or smaller.
- Product Icons: product or service roles above 32 px and below 120 px.
- Illustrative Icons: 120 px or larger, only promotions, page heroes, and campaign banners.

Functional UI Icons may coexist inside verified actions, navigation, controls, or status. Equivalent roles share supported size, footprint, alignment, and colour treatment. Keep `Default` colour unless a complete section uses a verified semantic token consistently and passes contrast.

Search by meaning, then official `Fallback`. If neither exists, a draft may use an arbitrary icon from the selected family inside `PLACEHOLDER — replace icon`; report it. Placeholders prevent final `PASS`. Never substitute emoji, generated icons, glyphs, inline SVG, another library, or another family.

For every standalone, changed, resized, or swapped icon:

1. Inspect source width and height.
2. Inspect the rendered icon, not its wrapper.
3. Verify `rendered width / source width = rendered height / source height`.

Unequal scaling or visible distortion is `FAIL`. Unavailable source dimensions are `BLOCKED` unless visible distortion already proves failure. Intact verified component internals may rely on published geometry. Report `Icon geometry QA: PASS — N/N source ratios verified`, `FAIL`, or `BLOCKED`; non-pass prevents production QA.

## Visual contract

### Components, layout, and revisions

- Use the closest component serving the same task and interaction; shape differences do not justify reconstruction. Keep instances intact and use supported variants, properties, tokens, and styles.
- Familiar controls stay familiar. Task-specific content, hierarchy, grouping, states, imagery, and patterns serve the actual Telenor task; never force novelty to look branded.
- Each context has one dominant task, status, action, or relationship; subordinate the rest. Repeat visual grammar only for genuinely equivalent content or tasks.
- Use proximity, alignment, and verified spacing before containment; related elements sit closer than separate topics, levels, or tasks.
- Controls come from existing Telegrafen instances. One-off charts, timelines, or progress visuals require supplied data and intended meaning and use verified ingredients without imitating another library.
- Auto Layout governs changing or repeated content. Manual positioning is limited to fixed decoration without controls or changing text.
- Every list item has meaningful primary content. Use Skeleton for loading and an appropriate empty state; empty or invisible filler never creates spacing or alignment.
- Static icon-title-description benefits default to an open grid or list. Cards require independent content, interaction, selection, state, comparison, or another distinct containment purpose. A section surface already supplies group containment.
- Before a second consecutive card-led section, inspect for cardification and flatten a set unless independent repeated modules are necessary. Peer cards share structure and align equivalent regions without fake copy, clipping, or truncation.
- Interactive cards use a verified interactive pattern and expose its required states. Static cards keep a static affordance; unsupported hover, action chevrons, cursor cues, elevation, and competing nested actions never simulate interactivity.
- Use shared structure, padding, and supported fill or hug behaviour for alignment. When realistic content makes equal height unsound, revise the layout or allow natural height rather than hiding content.
- A decision context normally has one primary-styled action. A long page may repeat the same action after substantial content when instances do not compete. Other actions use verified secondary, neutral, or link treatments.
- Custom layers use semantic purpose names; equivalent structures stay consistent. Preserve names inside untouched instances.

Create a comparison revision only when requested or handed off from `/telegrafen-visual-design`. Preserve the original; place `[Original frame name] — Visual rework` immediately right of it, top-aligned, in the same Section. Ask before moving unrelated work. A visual-design handoff is an execution ledger: return each accepted item as `Implemented`, `Preserved`, `Blocked`, or `Dismissed by user`.

### Brand, imagery, tags, and dividers

- Brand identity uses the official Telenor logo or symbol from UI Icons in official blue and original proportions. It is the only UI Icon allowed above 32 px in a logo role; maximum height is 64 px. Never reconstruct a logo, create a typed lockup, recolour it, or use a substitute. If unavailable, omit and report `BLOCKED`.
- Reserve main brand colour for approved brand roles; other roles use semantic tokens.
- Imagery is user-approved or from Approved brand images. Preserve the source without local strokes, shadows, blur, recolouring, distortion, or other effects; wrappers use verified treatments. Missing imagery uses a labelled placeholder or suitable verified Product or Illustrative Icon.
- Run the Image radius scan after Radius by role. Images remain rectangular unless an approved pattern, purposeful mask, or justified containing surface calls for rounding; remove inconsistent, oversized, or purposeless radius.
- Tag with property `Status` communicates changing state such as `Aktiv`, `Betalt`, `Venter`, `Feil`, or `Deaktivert`. Badge communicates non-status emphasis such as `Kampanje`, `Nyhet`, or `Anbefalt`. Select by meaning, never visual preference; ask when meaning is unresolved.
- Horizontal Divider is a linked instance set to `Fill container`, built-in `Spacing` from `XS` through `2XL`, and `Show spacing = Off`. A required manual Fill action remains `NEEDS CHANGES` and is reported.

### Typography, tokens, and modes

- H1–H5 are semantic levels: normally one H1 per distinct view, genuine nesting, no skipped levels, and no child visually stronger than its parent. Review the complete visible hierarchy and report its intended outline during final QA.
- `Display` is only a concise expressive page-level H1 in a Hero, banner, or similarly spacious context. Functional H1 and H2–H5 use `Title`.
- `Title` serves headings, `Text` short UI copy, and `Content` paragraphs. Prominent labels and component titles become headings only when they introduce page hierarchy. Existing component text follows its contract.
- Let published styles control responsive type. Headings wrap naturally. Adjust copy or layout instead of shrinking, tightening, truncating, or changing semantic level. A Display H1 may use correct Norwegian word division only at a necessary break.
- Custom `Text` and `Content` use `L`, `M`, or `S`; `XS` is limited to short non-essential metadata. Custom `Text/2xs`, `Text/3xs`, `Content/2xs`, and `Content/3xs` are excluded. `Title/2xs` and `Title/3xs` require a supporting live compact-component pattern.
- Custom text containers wrap and grow vertically when text is enlarged, without overlap, clipping, or hidden controls. Use published spacing around type; a heading stays closer to the content it introduces than to the preceding section.
- Bind custom colours to semantic Telegrafen tokens; correct semantic colour binding supplies light and dark modes without parallel manual treatments. In dark regions, set Button `Neutral = Off` and inspect nested surfaces, text, icons, logo, dividers, borders, focus, overlays, and states.
- Colour needs a verified semantic action, selection, status, focus, wayfinding, or brand role; never decoration alone.
- Use verified spacing, radius, border, surface, elevation, control-size, and motion tokens only when the applicable purpose rule supports them.

### Content, prototypes, and ethical conversion

- Preserve supplied language; otherwise use Norwegian Bokmål. Use `/telegrafen-ux-writing` in a separate prompt for new or changed customer copy when available.
- Commercial names, prices, offers, speeds, availability, commitments, and legal claims come from user-approved or freshly verified official content with source and date. Verify TV and broadband against Telenor's [official price list](https://www.telenor.no/vilkar/prisliste-tv-og-bredband/).
- Use fictional, non-identifying customer data. Never reproduce personal data without explicit approval. Forms use visible labels or approved accessible labels.
- Final visible copy contains no accidental `Button`, `Item`, `Heading`, lorem ipsum, filler, or nonsense. An agreed labelled draft placeholder prevents final `PASS`.
- Approved price forms are `Før 12 000,- Nå 11 000,-`, `Spar 1000,-`, and `Fra 699,-/md.` Keep qualifier and price together; use spaces for thousands, `,-`, and `/md.` only when verified terms support them.
- Preserve these price forms instead of using `kr`, `kroner`, `/måneden`, uppercase qualifiers, strikethrough, split qualifier-price layouts, reversed text, or highlighted price text.
- Add prototype links, animation, or interactions only when requested. Preserve built-in instance interactions and show the essential outcome. Check every supplied target frame for usable content; do not invent additional breakpoints unless requested.
- For a conversion concept, define the event and user benefit. Evidence-backed claims require current credible sources; otherwise state hypotheses. Keep value, consequences, consent, prices, commitments, cancellation, and opt-out clear. Never introduce dark patterns such as false urgency, hidden terms, preselected consent, confirmshaming, forced continuity, or cancellation obstruction.

## Visual polish QA

After the final change, inspect fresh screenshots of each changed frame in every relevant supplied state and size; Review & Finalize inspects the entire visible in-scope design. Correct tokens and components do not prove visual quality.

Compare with the closest approved pattern visually and structurally. Check hierarchy; spacing rhythm; alignment; typography; component meaning; containment; semantic colour and contrast; imagery; content fit; interaction cues; and balance. Apply a mandatory squint test: when visually reduced, primary, secondary, and major groups remain apparent. Use a skeleton test only as a diagnostic where composition or visual storytelling should work without copy; forms, tables, and settings may depend on labels.

Run one bounded cycle: inspect fresh screenshots, make one batched correction, then inspect fresh post-correction screenshots in one confirmation pass. Build covers changed frames, states, and sizes; Review covers full visible scope. Ask only when correction needs an out-of-scope decision or changes confirmed intent, hierarchy, or interaction.

Report `Visual polish QA: PASS`, `NEEDS CHANGES`, or `BLOCKED`, with corrections, deviations, and unresolved decisions. A remaining correctable defect is `NEEDS CHANGES`; `BLOCKED` requires unavailable evidence or a material decision. Non-pass prevents draft readiness and all QA.

## Never re-skin another library

Build an original Telegrafen design. External references may communicate need or hierarchy, but Material, MUI, Ant, Bootstrap, Radix, shadcn, Chakra, copied web UI, and Figma defaults never become the design foundation. Recolouring or respacing another library is not Telegrafen.

When a solution is unclear: use a verified ingredient; compose an original one-off layout; or omit non-essential decoration and note it. Return to Resolve when intent is unclear. Essential unverified needs are `BLOCKED`.

## Build & Iterate gate

Inspect each changed frame at every supplied target size:

- Provenance, Destination, Mockup-only, Published typography binding, and Radius by role invariants pass.
- Visual polish QA passes after the bounded audit, batched correction, and confirmation cycle.
- Every new top-level design frame has the resolved Section or Page as its direct parent; no synthetic destination wrapper or unintended selection-anchor ancestry exists.
- The concept and essential outcome are visible; existing instances remain intact.
- No obvious clipping, overlap, unusable text, hidden control, accidental placeholder, or distorted asset remains.
- Labels are visible; meaning is colour-independent; text and targets are usable; represented focus is visible.
- Placeholders, manual actions, missing assets, deferred states, and gaps are named.

Report `Draft status: READY TO ITERATE` only when the gate passes. After the bounded cycle, report `Draft status: NEEDS CHANGES` for a remaining inspectable, correctable defect and `Draft status: BLOCKED` only for unavailable evidence or an unresolved material decision.

## Review & Finalize gate

Use fresh screenshots for every supplied target size and inspect bindings, not resemblance. Verify every applicable rule above plus:

- component integrity; semantic names; destination and revision placement;
- list/card purpose and alignment; action hierarchy; Radius by role, nested, image, and visible-copy scans;
- icon family, logo, placeholders, and Icon geometry QA;
- Tag/Badge meaning; Divider properties; Typography QA and H1–H5 outline;
- Visual polish QA across every relevant supplied state and size;
- semantic token bindings, dark contexts, layout integrity, prototype scope, and absence of external re-skinning.

Report `Mockup production QA: PASS` only when all applicable checks pass. Use `NEEDS CHANGES` for correctable violations and `BLOCKED` for unavailable evidence.

Run a WCAG 2.2 AA design review on every visible in-scope section and state:

- normal text contrast ≥ 4.5:1; large text ≥ 3:1;
- meaningful graphics, UI, and states ≥ 3:1 against adjacent colours;
- visible unobscured focus where represented;
- pointer targets ≥ 24 × 24 CSS px unless an exception applies;
- labels and meaning independent of colour; agreed keyboard behaviour represented where Figma can show it.

Semantic colour bindings are primary light/dark evidence. Inspect an alternate mode only when supplied, requested, or suspicious; treat dark regions as dark contexts. Report implementation semantics, browser zoom, operating-system scaling, and full conformance as implementation-only checks.

Report `WCAG 2.2 AA design review: PASS`, `NEEDS CHANGES`, or `BLOCKED`, with modes, states, failures, exceptions, and implementation-only items. Apply clear corrections inside authorised scope and rerun affected checks; ask before changing confirmed hierarchy or interaction.

For scoped work, report `Requested change QA` separately. `QA result: PASS` requires production QA, WCAG, and every required sub-gate to pass; otherwise use `NEEDS CHANGES` or `BLOCKED` according to the global meanings.

## Handoff

Always report only applicable fields:

- mode, scope, chosen design destination, and verified direct parent type and name;
- main Telegrafen instances, assets, tokens, styles, and any component-skill handoff;
- `Typography QA` with exact styles by custom role;
- `Radius QA` with failed or blocked boundaries;
- `Visual polish QA` with corrections made, remaining deviations, and decisions requiring clarification;
- decisions, placeholders, manual actions, missing assets, and known gaps.

Build adds `Draft status`.

Review adds `Icon geometry QA`, intended H1–H5 outline, `Mockup production QA`, `WCAG 2.2 AA design review`, optional `Requested change QA`, and final `QA result`. When conversion guardrails applied, add the event, user benefit, evidence or hypothesis, and any dark-pattern correction.
