---
name: telegrafen-design-components
description: Use when creating, prototyping, iterating, reviewing, repairing, or finalizing Telegrafen or Telenor components in Figma.
metadata:
  version: "1.4"
---

# Telegrafen component design v1.4

## Core principle

Build useful drafts quickly, but never invent unresolved component decisions. Inspect the design system first; interview the user whenever anything material remains unclear.

Keep all work in Figma. Do not create or modify Vue, Storybook, Code Connect, or other implementation code unless the user explicitly requests a separate implementation task.

## Source of truth

Use the live, published Telegrafen sources:

- [Components](https://www.figma.com/design/80yLUPif6wgDwXLu5MbMFj/)
- [Beta Components](https://www.figma.com/design/DxIUwsPdqIhyCMOTC3v2iW/)
- [Design Tokens](https://www.figma.com/design/aW7bFTLqx5L0XTWMskOHSR/)
- [UI Icons](https://www.figma.com/design/tgJeQElYu5kOzdP3VxVsky/)
- [Product Icons](https://www.figma.com/design/iWy3sNQXCzr2XIBZUGJnAp/)
- [Illustrative Icons](https://www.figma.com/design/8pTia61uly3XAkmZfOSUYt/)

Components and Beta Components are protected, read-only references. Require a user-supplied editable page or frame before writing.

Use published production components by default. Use a beta component only when no published equivalent meets the need, the user explicitly accepts its unstable status, and the dependency is recorded in the handoff.

Resolve decisions in this order:

1. User-approved brief or mockup defines the need
2. Existing live Telegrafen components and patterns determine reuse
3. Live Telegrafen variables, styles, and icon libraries
4. User interview for anything still unresolved

If an existing component serves the same task and interaction, use it through its supported API even when the approved mockup looks different. Never create a parallel component merely to match the mockup.

If sources conflict, explain the conflict and ask the user. Do not silently choose one.

## Choose a mode

| Mode | Use when | Depth |
|---|---|---|
| **Build & Iterate** | Build, create, prototype, try, adjust, or tweak | Fast draft loop with targeted questions and checks |
| **Review & QA** | Review, audit, validate, or QA | Read-only structural and visual assessment |
| **Repair & Finalize** | Fix, repair, update, or finalize and correct | Authorised edits followed by the complete finalisation audit |

Use Build & Iterate by default. Do not apply the release-level audit to an early draft.

Review and QA are read-only. Apply changes only when the user explicitly asks to fix, repair, update, or finalize and correct the component.

## Interview gate: no guesses

Anything that can change the component's purpose, anatomy, content, behavior, states, accessibility, consumer API, or deliverables is a product decision. Every unresolved product decision requires a user answer before the affected design is built.

Before the first affected write:

1. Inspect the editable target and the closest approved Telegrafen components.
2. Mark each relevant decision as resolved, unresolved, or not applicable.
3. Ask one focused question about the highest-impact unresolved decision.
4. Wait for the answer, update the contract, and ask the next question.
5. When all material decisions are resolved, summarize the agreed contract and ask the user to confirm the shared understanding. Continue the interview if anything remains unclear; proceed only after confirmation.

A decision is resolved only by:

- An explicit user answer
- An approved brief or mockup
- Clear evidence from an existing Telegrafen component or established pattern that directly applies

The following do **not** resolve a decision:

- A common industry pattern
- A pattern from another design system
- Visual intuition or a “reasonable default”
- Time pressure or an unavailable stakeholder
- A general request to “use your judgement”

When the user is unavailable, continue inspection and other non-committal work, but stop before designing anything affected by an unresolved decision. Never hide a guess by calling it a draft, assumption, recommendation, or best practice.

Interview only what is unclear. Do not repeat questions already resolved by the brief, inspection, or prior answers, and do not send a large questionnaire at once.

Check these topics when relevant:

- Purpose and usage
- Intended ownership: product component or Telegrafen component candidate
- Target platform, viewport context, and input methods
- Anatomy and content model
- Sizes and states
- Component properties and variant axes
- Selection or value model
- Icon behavior
- Resizing, wrapping, and count limits
- Text growth, wrapping, truncation, and clipping behaviour
- Interaction and keyboard behavior
- Intended accessible name, role, state or value, and announcement needs
- Motion and reduced-motion behaviour
- Editable destination
- Optional prototype wiring or new canvas examples
- Publication, compatibility, migration, or deprecation impact

Accessibility is mandatory, but component-specific accessibility behavior may still require an interview.

When the user asks for best practice, research current credible guidance and use it to support a recommendation. Research does not resolve a material product decision: translate the recommendation into Telegrafen and ask the user to confirm it.

## Build & Iterate

1. Confirm the editable destination and inspect the closest approved components, tokens, text styles, and icons.
2. Run the interview gate for every material ambiguity.
3. Build a coherent draft: foundation first, then meaningful variants and properties.
4. Add prototype wiring, documentation, or canvas examples only when requested.
5. Validate the changed structure and capture a fresh screenshot.
6. Return the draft link, confirmed contract, checks performed, and the next useful iteration question.

Call the result a **draft product component** or **Telegrafen component candidate**, according to its intended ownership, until it is approved for publication. Build mode does not require exhaustive variant combinations, every responsive example, or publication-style documentation. Report every contracted state or behaviour that remains missing.

## Review, repair, and finalize

1. Reinspect the destination and complete the interview contract. Every relevant topic must be resolved or marked not applicable. For review or QA, perform the remaining steps without editing.
2. Identify the directly affected component set, nested dependencies, variants, and existing examples. Keep unrelated library components out of scope.
3. Verify component and layer names, variants, properties, defaults, nested property exposure, and interaction invariants.
4. Verify token bindings, icon linkage, control sizes, Auto Layout, resizing, wrapping, focus treatment, and supported modes.
5. Verify every state declared in the contract; mark irrelevant states not applicable. Inspect fresh screenshots covering supported sizes, realistic short and long content, icon options, and light and dark contexts where applicable.
6. Before finalisation or publication, add a concise Figma description covering purpose, when to use or avoid the component, important properties, and accessibility or interaction expectations. New canvas examples remain optional.
7. Update and QA every existing example, specimen instance, and documentation frame directly affected by the component change.
8. Report `Complete` only when the resolved contract and all required checks pass. Otherwise report `Incomplete` and name what remains.

## Telegrafen construction rules

### Components and APIs

- Reuse live Telegrafen components when they satisfy the need. Do not detach, redraw, or recreate them.
- Create a component only when it represents a repeatable structure, behaviour, or design contract. Keep one-off composition as semantically named frames unless the user explicitly intends a reusable product component.
- Do not add or override strokes, borders, drop shadows, blurs, glows, or other effects on any Telegrafen library asset or instance unless the component exposes them through a supported property or they are bound to a verified, named, live Telegrafen token or published style. A renamed local value does not qualify. If Telegrafen does not define the treatment, leave it off.
- Use variants for meaningful structural, behavioural, size, or state differences. Use text, boolean, and instance-swap properties for content and optional elements; do not create variants merely for copy, icon choice, or visibility when a property can express the difference.
- Keep variant axes independent and avoid combinations that cannot occur. Make the default instance the safest, most common usable state with representative content; do not default to destructive, disabled, error, loading, or selected states unless that state defines the component.
- Name public properties from the designer's perspective using current Telegrafen vocabulary. Prefer positive booleans such as `Show icon`, keep equivalent properties named consistently, and never expose layer or implementation terminology.
- Expose an instance-swap property only for genuinely swappable content. Restrict preferred values to semantically compatible live Telegrafen assets and name the slot by its role.
- Expose a nested property at the parent only when consumers need it and it behaves consistently across relevant variants. Keep implementation choices internal and avoid duplicate parent and child controls for the same decision.
- Do not expose internal styling choices as public properties.
- Never create or preserve a default, variant, or public property that encodes preselected consent, hidden costs, obstructed exits, false urgency, visually unequal choices, or another dark pattern. Flag the risk and propose a neutral Telegrafen alternative.
- Preserve built-in interactions on nested library instances. Add parent-level prototype behaviour only when requested and only where it does not conflict with the nested component's contract.
- Do not enable the Button property `Neutral`. In every dark-background region, inspect every nested Button and verify `Neutral = Off`.
- Use clear, purpose-based names that match existing Telegrafen conventions.

### Naming and structure

- Inspect the closest current Telegrafen component before naming. Current live patterns override the historical “How to build components” guide.
- Name new components in singular, purpose-based form using the casing and syntax shown by the current library.
- Name every custom layer by its role. Frames are appropriate for Auto Layout and resizing, but `Frame`, `Group`, or `Rectangle` describes a node type, not its purpose; never leave names such as `Frame 12` or `Rectangle 3`.
- Use this vocabulary when it fits: `Container` for the outer structure; `Top`, `Content`, `Bottom`, or `Section` for major regions; `Wrapper` only for layout; `Slot` for swappable content; `Label`, `Title`, `Subtitle`, or `Text` for copy; and `Trigger`, `Input`, `Item`, or `Option` for interaction roles. Prefer a more specific name when it is clearer.
- Keep equivalent layers named consistently across variants so overrides survive. Do not rename internal layers of an untouched library instance.
- Match current live property names, order, and variant syntax; do not impose the older fixed `Size`, `Type`, `State` order.
- Treat published property names, variants, defaults, and stable override layers as compatibility contracts. Preserve them whenever possible. A breaking change requires an impact assessment, migration plan, and explicit approval before implementation.

### Tokens and typography

- Bind semantic Telegrafen variables and published styles wherever suitable tokens exist.
- Use published Telegrafen text styles; do not approximate them with local font settings.
- A reusable component must not hard-code a page-level H1. Define its title role and typography in the component contract, and let the containing page determine its semantic heading level. If consumers genuinely need different approved title treatments, expose only contractually meaningful options through the component API; never rely on detached or local text overrides.
- Reserve `Display` for a concise, expressive page-level H1 in a Hero, banner, or similarly spacious context. Use `Title` for functional headings and section titles. Never use `Display` for H2 through H5, USP blocks, forms, labels, or compact component content, and never select it merely to make text larger.
- Do not map H1 through H5 to universal font sizes. Use only the published `Display`, `Title`, `Text`, or `Content` style that fits the contracted role and context. Preserve natural wrapping and growth; never shrink, tighten, truncate, or change semantic level merely to make text fit.
- Use published `Text` and `Content` styles in `L`, `M`, or `S` for a component candidate's custom text by default. Use custom `Text/XS` or `Content/XS` only for short, clearly secondary, non-essential metadata such as a date, time, or supplementary caption. Never use `XS` for body copy, descriptions, instructions, buttons, prices, terms, consent, errors, status, legal information, or actions.
- Never use custom `Text/2xs`, `Text/3xs`, `Content/2xs`, or `Content/3xs`. Never reduce text to make a component fit; revise the contract, composition, spacing, or content instead. Text inside an untouched nested Telegrafen component retains that component's published typography.
- Use live control-size tokens for interactive heights.
- Do not use primitive colors, copied values, guessed token names, or arbitrary substitutes.
- If a required semantic colour, spacing, radius, elevation, motion, or control-size token does not exist, pause and propose the missing foundation as a separate design-system decision. Never create or rename a local value to simulate a Telegrafen token.

### Nested radius scan

When two visible rounded boundaries in a component or affected specimen are nested and intended to read as one coherent container, their corners SHOULD be concentric. With a uniform inset, verify:

`outer radius = inner radius + inset`

Treat this as a geometry and visual-quality check, not permission to create a raw radius. The pair MUST use supported properties from a current Telegrafen component or verified live radius tokens. If no approved pair preserves the relationship, use a verified nested-container pattern or simplify the contract to one visible rounded boundary; if neither preserves the agreed intent, report the missing foundation and pause. Never interpolate a token, choose a merely close value, or create the calculated result locally.

Apply this scan only to nested boundaries that are intended to share a corner system. Do not apply it to adjacent elements, pills or capsules, intentionally offset compositions, incompatible corner geometries, or imagery whose radius is not otherwise justified. For non-uniform inset, follow the applicable live pattern and inspect each corner optically; do not invent per-corner values from the formula.

### Icons

- Any brand-identity element must use the official Telenor logo or symbol instance from UI Icons. Use its official Telenor brand-blue asset, preserve its aspect ratio, and never recolour it.
- Never create, reconstruct, approximate, or simulate a Telenor logo or wordmark. In particular, never place typed `Telenor` beside the official symbol so they read as a logo lockup. Ordinary content may use the word Telenor only when it is clearly separate interface copy.
- The official Telenor logo or symbol is the only UI Icon allowed above 32 px. This exception applies only in a logo role; its maximum height is 64 px and width must scale proportionally. If it cannot be found or verified, omit it from a draft and report the logo as `BLOCKED`; never use text, `Fallback`, a random icon, or a generated mark.
- Reserve the main Telenor brand colour for the official logo or symbol. Do not use it on non-logo elements unless a current, explicit, approved Telegrafen or Telenor brand rule requires it for that exact element. Use the appropriate semantic Telegrafen colour token for every other role.
- Use live instances from the appropriate UI Icons, Product Icons, or Illustrative Icons library.

Before selecting individual icons, classify every role in the component, repeated set, and affected specimen as either standalone content artwork or a functional UI Icon inside a verified nested component. Choose exactly one family for all standalone content artwork across the complete visual section, including every card, row, subgroup, state, and example:

- Use UI Icons for a compact standalone role at 32 px or smaller.
- Use Product Icons for a product or service role above 32 px and below 120 px.
- Use Illustrative Icons at 120 px or larger only for promotion, page-Hero, or campaign-banner contracts. Never expose them as ordinary list, settings, account, dashboard, or product-card artwork.

Never mix standalone UI Icons, Product Icons, and Illustrative Icons within one visual section or repeated component contract. Semantic relevance, a reference, deadline pressure, or incomplete coverage is not an exception. Functional UI Icons may coexist only inside a clearly separate action, navigation, control, or status role supplied by a verified nested component; they never become peer artwork. The official Telenor logo or symbol follows the separate logo exception above.

A public instance-swap slot for standalone artwork must restrict preferred values to the one selected family and use a structure sized for that family. Do not normalize different families into an interchangeable slot. Use the same supported instance size, container footprint, alignment, and colour rule for equivalent roles. Never enlarge a UI Icon above 32 px, shrink a Product Icon to 32 px or smaller, display a Product Icon at 120 px or larger, or display an Illustrative Icon below 120 px.

Choose icons by semantic meaning and search the selected library with relevant synonyms. If no suitable icon exists, search for its official `Fallback`. If `Fallback` is unavailable, use an arbitrary existing icon from the same selected family as a temporary draft placeholder, name its wrapper `PLACEHOLDER — replace icon`, and record it in the handoff. Never use a placeholder from another family, and never publish or report `Complete` while a placeholder remains.

**Never change an icon's aspect ratio:** scale width and height together and use a shared wrapper or container when a different footprint is needed. Use a supported size and center the unchanged icon inside the shared container. If the result remains visually unbalanced, choose another icon from the same family or use the placeholder process; never modify the artwork.
- Keep every icon's `Default` library colour by default. A designer may explicitly define another colour for a complete section before application, but it must use a verified semantic Telegrafen token or supported component property, apply consistently to equivalent icons, pass contrast in its light or dark context, and never use the logo-reserved main brand colour. One-off recolouring remains prohibited unless a verified semantic state requires it.
- Never redraw, stretch, crop, generate, or substitute an icon.

#### Icon geometry gate — mandatory

Size, family, and aspect ratio are separate checks. Passing the family or maximum-size check never proves that an icon is proportional.

For every standalone icon and every icon layer, public slot, or instance swap changed, resized, or exposed by the component contract:

1. Inspect the original library component or selected source variant width and height.
2. Inspect the rendered icon instance width and height—not its wrapper.
3. Verify proportional scaling: `rendered width / source width = rendered height / source height`.
4. Any unequal horizontal and vertical scaling is `FAIL`. If source dimensions cannot be inspected and no visible distortion already proves failure, report `Icon geometry QA: BLOCKED`; never infer `PASS` from a screenshot, shared family, peer consistency, or maximum size.
5. Visible distortion is sufficient evidence for `FAIL`, even when source geometry is unavailable. A shared footprint applies to the wrapper; never force the icon instance to fill it.

An icon fully internal to an intact, verified Telegrafen component may rely on that component's published geometry only when neither the component nor the icon has been detached, overridden, or disproportionately resized. Visible distortion still fails.

- Source 32×32 → icon instance 20×32: `FAIL`.
- Source 32×32 → proportional supported icon instance centred inside a 20×32 wrapper: ratio may pass; family and supported size must still pass separately.
- Multiple peer icons with the same incorrect 20×32 dimensions: every affected icon is `FAIL`, not consistent.

Report `Icon geometry QA: PASS — N/N source ratios verified`, `Icon geometry QA: FAIL`, or `Icon geometry QA: BLOCKED`. Any `FAIL` or `BLOCKED` Icon geometry QA prevents `PASS`, publication, and `Complete`.

### Tags, badges, and dividers

- Use Tag with property `Status` when a nested label communicates a current or changing state, such as `Aktiv`, `Betalt`, `Venter`, `Feil`, or `Deaktivert`.
- Use Badge for a non-status highlight such as `Kampanje`, `Nyhet`, `Anbefalt`, or a product benefit.
- Choose Tag or Badge from meaning, never from visual preference. If the meaning is unclear, resolve it in the component contract before selecting the nested component.
- Set every nested horizontal Divider instance and every affected specimen instance to `Fill container`; never leave it at the component's fixed 240 px width.
- If `Fill container` cannot be applied automatically, keep the linked Divider instance, record the exact manual `Fill container` action in the handoff, and report `NEEDS CHANGES` until it is corrected. Never detach, redraw, stretch, or replace it with a local line.
- Use the Divider's built-in `Spacing` property with `XS`, `S`, `M`, `L`, `XL`, or `2XL`, selected from the closest verified Telegrafen pattern and content hierarchy. `Spacing = None`, raw pixel padding, external spacer layers, and surrounding Auto Layout gaps used to imitate Divider spacing are prohibited.
- Keep Divider `Show spacing = Off` in every component and specimen prepared for delivery. It is an internal measurement aid and must never be visible in a finished design.

### Content and media

- Use representative Norwegian Bokmål content and `/telegrafen-ux-writing` in a separate prompt when available. Do not use lorem ipsum or invent commercial facts. Test realistic short and long content while keeping copy secondary to the component contract.
- Keep editorial imagery swappable and outside the component's structural identity unless an approved asset is intrinsic to the component. Use only user-provided or approved Telenor imagery in examples; never package generated or third-party lookalikes as defaults.
- Keep every approved image source intact. Do not apply local strokes, borders, shadows, blurs, glows, recolouring, distortion, or other effects to the image itself. An approved presentation frame may crop the visible view without altering the source asset; any wrapper treatment must use a verified Telegrafen token, published style, or supported component property.

#### Visible copy scan

Inspect every visible customer-facing text layer in the component and affected specimens. `Button`, `Item`, `Heading`, lorem ipsum, duplicated filler, template defaults, nonsensical copy, and contextually wrong or accidental placeholder labels fail QA. Internal semantic layer names such as `Item` do not count when they are not customer-facing content.

Use approved realistic content or `/telegrafen-ux-writing`. If essential content is unknown, ask. A clearly labelled placeholder is allowed only in an agreed early draft and prevents `Complete` or `PASS`.

#### Image radius scan

Inspect every image and image wrapper in the component and affected specimens. Images default to their natural rectangular shape; never add radius automatically. Use radius only when the component contract, a verified Telegrafen component or pattern, or an agreed containment purpose requires it. “Friendlier,” “more premium,” or token availability is not justification. Never invent or enlarge radius beyond the applicable verified token or property; remove unintended, inconsistent, oversized, or unjustified radius.

### Lists, cards, and repeated content

- Every rendered list item must contain meaningful primary content. Never add blank, invisible, placeholder, or whitespace-only items to create spacing, fill a grid, balance columns, or equalize container heights.
- Omit unavailable items. Use the approved Telegrafen Skeleton pattern for loading and an appropriate empty state for a genuinely empty result; never represent either with an empty List instance.
- Optional fields inside a valid item may be absent only when the component supports that state.
- Default a repeated static icon–title–description benefit contract to an open item or list pattern, not a Card. Create or preserve a Card contract only when the boundary communicates independent content, interaction, selection, state, comparison, or another distinct containment purpose.
- Treat a containing section surface as existing group containment. Nested child cards require a second, distinct purpose. Before adding a second consecutive card-led specimen or example section, review the page for cardification and flatten at least one set unless the task genuinely requires repeated independent or comparable modules; do not impose a universal numeric cap.
- Cards with the same purpose must use the same verified Telegrafen component and variant. Use different variants only when function, hierarchy, interaction, or state differs, and use supported light- or dark-mode treatments rather than style overrides.
- An interactive Card contract must define the supported action and visible states. A static Card contract must not imitate interaction through unsupported hover treatments, action chevrons, cursor cues, or elevation. Do not expose nested competing actions unless the verified component contract supports them.
- Peer card instances in the same row, comparison set, or specimen should use consistent widths and visually aligned heights when they represent equivalent choices. Align equivalent internal regions when this improves scanning.
- Achieve alignment with Auto Layout, shared structure, consistent padding, and supported fill or hug behaviour. Never use empty items, invisible filler, fake copy, clipping, or truncation to equalize cards.
- Cards with different purposes or hierarchy do not need matching dimensions. When realistic content varies too much for sound equal-height treatment, revise the layout or allow natural height.

### Layout, modes, and accessibility

- Define fixed, hug, and fill behavior, wrapping, minimum sizes, and nested-instance sizing where supported.
- Define growth, wrapping, truncation, and clipping behaviour for every variable-content region. Prefer growth or wrapping. Use truncation only when an established Telegrafen pattern supports it and the full content remains available through an agreed accessible method. Never allow accidental clipping.
- Use semantic variables for light and dark modes rather than mode-specific visual overrides.
- Treat every dark-background region as a dark-mode context, even inside a light component or screen. Verify all nested surfaces, text, icons, the Telenor symbol, dividers, borders, focus indicators, overlays, and hover, active, selected, disabled, loading, and error states.
- Provide visible focus without layout movement, sufficient contrast and target size, semantic disabled behavior, and the agreed keyboard and selection behavior.
- For interactive components, record the intended accessible name, role, state or value, focus order, keyboard behaviour, and announcement needs in the contract and handoff. Treat these as implementation requirements; Figma cannot prove implementation semantics.
- Treat target platform, viewport context, and input methods as material decisions. Do not infer desktop, touch, mouse, or keyboard behaviour from appearance alone.
- Add motion only when requested or established by a live Telegrafen pattern. Use verified motion tokens, define the transition and interruption behaviour, and document a reduced-motion alternative when the motion is not essential.

## Editing and lifecycle safety

- Work only in the user-supplied branch, staging page, or explicitly designated editable area. Never modify a published master component in place unless the user identifies it as the target and confirms the change scope.
- Label new work as a draft product component or Telegrafen component candidate according to its intended ownership. Never present it as an official Telegrafen component until it has passed final review and been approved for publication.
- Deprecate rather than delete by default. Identify the replacement, preserve the old component during migration, and remove it only with explicit approval after usage and migration impact are understood.
- Never publish, replace, deprecate, delete, or perform another library-wide lifecycle action without explicit confirmation immediately before the action. First report the exact components, changed properties or variants, migration impact, and unresolved risks.

## WCAG delivery gate

Before every handoff, inspect fresh screenshots of every changed component, affected example, and visible state at the supported sizes in scope. Check clipping, overlap, gaps, off-canvas elements, the complete section icon-family contract and public icon slots, Icon geometry QA, placeholder icons, logo integrity, component and token provenance, Tag/Badge semantics, Divider width and properties, unapproved effects, empty list items, dark-mode treatment, card-contract purpose, redundant containment, consecutive cardification, static or interactive affordance, repeated-card alignment, custom Text and Content sizes, typography, contrast, Visible copy scan, Image radius scan, and Nested radius scan. Fix clear in-scope defects and reinspect; a checklist written before the final edit is not verification. A draft may report unfinished defects, but it must name them.

Before every delivery, run a [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Level AA design review on every visible mode and state in scope:

- Normal text has at least 4.5:1 contrast; WCAG large text has at least 3:1.
- UI components, meaningful graphics, and state indicators have at least 3:1 contrast against adjacent colors.
- Keyboard focus is visible and is not obscured.
- Pointer targets are at least 24 × 24 CSS px unless a documented WCAG exception applies.
- Labels, status, and meaning do not depend on color alone; the agreed keyboard and interaction behavior is represented where Figma can show it.

Run the review separately for every supported light and dark context. A Figma review validates design evidence only; it cannot prove implementation semantics or full product conformance.

Never omit the results from the handoff. State `Visual QA: PASS`, `NEEDS CHANGES`, or `BLOCKED`, followed by `WCAG 2.2 AA design review: PASS`, `NEEDS CHANGES`, or `BLOCKED`, the modes and states checked, failures or exceptions, and implementation-only items that could not be verified.

Never pass structural QA from screenshots alone. If component properties, variants, layer structure, metadata, or variable bindings cannot be inspected, report `Structure and API: BLOCKED` and state what access or evidence is missing.

Build & Iterate may hand over a transparent draft with `NEEDS CHANGES`, but never without the result. Repair & Finalize may report `Complete` only when the WCAG design review passes.

## Never re-skin another library

External references may clarify a user need, but do not copy the anatomy, styling, API, or interaction model of Material, MUI, Ant, Bootstrap, Radix, shadcn, Chakra, or another design system.

Research and external references may inform a recommendation, but they never override the live Telegrafen library or resolve a material component decision without user confirmation.

## Common mistakes

| Mistake | Required response |
|---|---|
| Behavior is unclear, so a sensible default is chosen | Stop and interview the user |
| A draft is used to justify assumptions | A draft may be incomplete, never invented |
| Review or QA is treated as permission to edit | Report findings only until fixes are explicitly requested |
| An available component or icon is recreated | Replace it with the live library instance |
| A beta component is used as a convenient shortcut | Return to production assets or obtain explicit beta approval |
| A library instance is made “better” with a local border or shadow | Remove it unless it is a supported property or named Telegrafen token/style |
| Standalone artwork mixes icon families within a section, repeated contract, or specimen | Commit the complete role to UI, Product, or Illustrative Icons according to its supported size and context |
| An icon is forced into the shared footprint by stretching, cropping, or unsupported sizing | Restore the linked instance and center its unchanged proportions at a supported size |
| Source 32×32 icons all use the same 20×32 instance size and are called consistent | Mark every instance `FAIL`; proportional source geometry is independent of peer consistency and size limits |
| A missing icon is filled from another family or presented as final | Use same-family `Fallback` or a clearly named same-family draft placeholder; prevent `Complete` until replaced |
| Typed `Telenor` is placed beside the official symbol to create a lockup | Remove the text construction and use only the verified official logo or symbol asset |
| A status uses Badge or a promotion uses Tag `Status` | Select Tag or Badge from the content's semantic role |
| Divider remains 240 px, uses `Spacing = None`, or exposes `Show spacing` | Set the linked instance to `Fill container`, choose its built-in spacing property, and keep `Show spacing = Off` |
| Custom Text or Content uses `2xs` or `3xs`, or uses `XS` for essential content | Restore `L`, `M`, or `S`; reserve `XS` for short non-essential metadata |
| A specimen ships with `Button`, `Item`, lorem ipsum, or other accidental visible defaults | Replace it with realistic approved content; otherwise block final QA |
| Image radius is added automatically or merely because a token exists | Remove it unless the component contract or verified pattern requires it |
| A radius equation produces a value that Telegrafen does not support | Use a verified pair or pattern, simplify to one visible boundary, or pause and report the missing foundation; never create the raw value |
| A dark-mode Button uses `Neutral` | Turn `Neutral` off and recheck the state |
| WCAG is assumed from token use | Test the rendered design and record the result in the handoff |
| Variants or properties mirror internal layers | Expose only meaningful consumer choices through the correct property type |
| A published API is renamed for neatness | Preserve it or obtain approval for a migration plan |
| A final component omits a contracted state | Mark it incomplete and name the missing state |
| Screenshots look correct but metadata cannot be inspected | Report `Structure and API: BLOCKED` |
| A component is published as the final workflow step | Stop and obtain explicit publication confirmation |
| Full finalization audit slows the first draft | Return to Build & Iterate checks |
| The component looks correct but metadata disagrees | Treat validation as failed and diagnose the mismatch |

## Handoff

For Build & Iterate, report:

- Draft node link
- Confirmed component contract
- Components, variants, and properties created or changed
- Telegrafen libraries and token families used
- Placeholder icons and required replacements, if any
- `Icon geometry QA: PASS — N/N source ratios verified`, `FAIL`, or `BLOCKED`, with every failed or blocked icon identified
- Any manual Divider `Fill container` action still required
- Targeted checks performed
- `Visual QA: PASS`, `NEEDS CHANGES`, or `BLOCKED`
- `WCAG 2.2 AA design review: PASS`, `NEEDS CHANGES`, or `BLOCKED`, including modes and states checked, exceptions or failures, and implementation-only items not verified
- Remaining questions, if any

For Review & QA or Repair & Finalize, report separately:

- `Structure and API: PASS`, `NEEDS CHANGES`, or `BLOCKED`
- `Visual QA: PASS`, `NEEDS CHANGES`, or `BLOCKED`
- `Icon geometry QA: PASS — N/N source ratios verified`, `FAIL`, or `BLOCKED`
- `WCAG 2.2 AA design review: PASS`, `NEEDS CHANGES`, or `BLOCKED`
- `Overall: Complete`, `Incomplete`, or `BLOCKED`

Overall is `Complete` only when all required reviews pass. Include the final node link, contract coverage, affected dependencies and examples, compatibility or migration impact, implementation-only accessibility requirements, and unresolved limitations.
