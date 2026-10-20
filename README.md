# Telegrafen design skills

Portable Agent Skills for creating and reviewing private-customer Telenor designs with the Telegrafen Design System. Each skill has a self-contained `SKILL.md` entry point for use in Figma Resources, Figma Make, and other systems that support the Agent Skills format.

## Structure

```text
skills/
├── telegrafen-visual-design/SKILL.md
├── telegrafen-design-mockups/SKILL.md
├── telegrafen-design-components/SKILL.md
└── telegrafen-ux-writing/SKILL.md
```

## Skills

- [Telegrafen visual design](skills/telegrafen-visual-design/SKILL.md) — Art-direct Telegrafen-governed designs so their hierarchy, composition, visual weight, typography, colour, imagery, motion, accessibility, and brand expression feel clear, premium, and distinctly Telenor.
- [Telegrafen design mockups](skills/telegrafen-design-mockups/SKILL.md) — Create, update, and QA Telegrafen-native mockups and prototypes. Covers tokens, components, responsive typography and heading hierarchy, approved imagery, accessibility, conversion and ethical-UX review, and a dated TV and broadband product reference.
- [Telegrafen component design](skills/telegrafen-design-components/SKILL.md) — Create, iterate, review, and finalize individual Telegrafen or Telenor components in Figma, including reusable typography contracts that respect their page context.
- [Telegrafen UX Writing](skills/telegrafen-ux-writing/SKILL.md) — Create, update, and QA Norwegian Bokmål UX microcopy for Telenor private-customer designs and interfaces.

## Use

Use the relevant skill’s `SKILL.md` file as the installable entry point:

- **Figma Resources:** upload the selected `SKILL.md` and use the stable slash-command name in the table below.
- **Figma Make:** select or invoke the installed Figma Resources skill.
- **Other Agent Skills-compatible systems:** install or copy the complete skill folder, keeping the file name `SKILL.md` and its frontmatter intact.

The skills use the published Telegrafen Figma libraries as their source of truth. They are intended for design work only and do not replace product, legal, accessibility, or implementation review.

Figma Resources skills are standalone. Figma currently invokes only the first skill mentioned in a single prompt, so do not rely on automatic nested invocation. Use separate prompts when work crosses skill responsibilities.

| Figma Resources name | Current source version |
|---|---:|
| `/telegrafen-visual-design` | 1.1 |
| `/telegrafen-design-mockups` | 2.4 |
| `/telegrafen-design-components` | 1.4 |
| `/telegrafen-ux-writing` | 1.2 |

## Which skill should I use?

Choose the primary skill according to the artifact or responsibility at the centre of the task:

| Need | Primary skill |
|---|---|
| Art-direct or review visual hierarchy, composition, visual weight, premium quality, or Telenor brand expression | [Telegrafen visual design](skills/telegrafen-visual-design/SKILL.md) |
| Create or update a screen, page, flow, product layout, mockup, or prototype | [Telegrafen design mockups](skills/telegrafen-design-mockups/SKILL.md) |
| Create, iterate, repair, or finalize a reusable component and its properties, variants, states, and behavior | [Telegrafen component design](skills/telegrafen-design-components/SKILL.md) |
| Create, rewrite, directly update, or QA Norwegian Bokmål interface copy | [Telegrafen UX Writing](skills/telegrafen-ux-writing/SKILL.md) |

When a task crosses responsibilities, use one skill per prompt and pass a clear handoff into the next step:

- **Focused visual improvement:** use `/telegrafen-visual-design` in Apply mode; it can perform a bounded rework and both QA gates.
- **Complex visual rework — Visual → Mockup → Visual:** use `/telegrafen-visual-design` to produce the accepted finding ledger and Preserve decisions, `/telegrafen-design-mockups` in the next prompt to execute the handoff and run Mockup production QA, then `/telegrafen-visual-design` again for Visual acceptance QA.
- **New page or flow:** use `/telegrafen-design-mockups` to construct it. Use `/telegrafen-visual-design` afterward when art-direction review is needed.
- **Reusable component in context:** use component design for the component contract and visual design for hierarchy and expression in its surrounding composition.
- **Screen with new or revised interface copy:** use design mockups for the screen and UX Writing for the customer-facing language.
- **Full design review:** use visual design for the art-direction review, then add component design, mockups, or UX Writing when their specialist QA is in scope.

Visual design does not replace component construction, mockup assembly, or UX writing. The construction and writing skills do not replace visual art direction.

## Commercial content

The mockup skill includes a dated TV and broadband product snapshot for realistic concept content. Refresh or provide verified material before presenting prices, offers, or other commercial facts as current or launch-ready.

## Versioning

Changes are tracked in Git. Keep each frontmatter `name` stable and identical to its Figma Resources slash command. Update `metadata.version` and the heading version when making a material change, then commit the change with a clear summary. Cross-skill workflow instructions must reference callable names rather than source-version identities. Use Git tags for released versions.
