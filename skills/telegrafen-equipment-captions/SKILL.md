---
name: telegrafen-equipment-captions
description: Use when writing, rewriting, or QAing Norwegian Bokmål captions (bildetekst) and alternative text (alt-tekst) for Telenor equipment images in the Enhetsbibliotek (routers, ONT, forsterkere, modem, antenner, TV-bokser, fjernkontroller, kabler, veggkontakter), including the Equipment captions Figma document and the Image caption component.
metadata:
  version: "0.1 draft"
---

# Telegrafen equipment captions v0.1 (draft)

Writes captions and alt text for equipment images so they meet WCAG 2.2 AA and EN 301 549. Write the skill and its rules in English; only the produced captions, alt text and examples are Norwegian Bokmål. Use `telegrafen-ux-writing` for tone of voice. Output is a draft until the product team has fact-checked it.

## Requirements

- WCAG 1.1.1 Non-text Content is unchanged in WCAG 2.0, 2.1 and 2.2. Meaningful images need a text alternative; decorative images get an empty alt.
- EN 301 549 v3.2.1 (WCAG 2.1 AA) is the current EU requirement. Target WCAG 2.2 AA so the texts stay valid when a newer version applies.
- 1.4.1 Use of Color: never rely on colour alone. Every colour is paired with a cue that does not depend on colour (label, shape, position, order). This also covers colour blindness.

## Sources

- Library: Enhetsbibliotek (Figma `JmsgorAqvglqAzctc2uKVT`). Read-only; never modify.
- Output: Equipment captions (Figma `vOsrrAexH2tM2FYMI9X6jF`), component `Image caption`, one page per category.
- Facts come only from the image, Telenor.no help pages or the product team. Never invent facts. Models derived from set IDs are flagged for confirmation.

## Workflow

1. Look at the image first. Describe what is actually visible.
2. Write the caption (what it is and what it means), then the alt text.
3. Add open questions to the table, never to the caption.
4. Check against the QA list below.

## Caption and alt text rules

- Describe function and meaning. No instructions ("koble til", "trykk") in captions.
- Alt text is about 25–100 characters (a guideline, not a hard limit), one sentence, no "bilde av". Decorative images get an empty alt and are listed as such in the table.
- Caption is 1–2 sentences and adds meaning that alt text does not.
- Colours: always name the colour and a colour-independent cue, e.g. "Den nederste porten er blå og merket WAN."
- Text printed on ports, lamps and buttons is often small and hard to read. Explain it in the caption, e.g. "Porten merket PWR er strøminngangen." Mark the reading for fact-check in the Avklaring column.
- Router: LAN ports connect many kinds of equipment. The WAN port is the blue internet input.
- Cables: say what the cable connects, connector shape and colour with a cue, and no instructions.
- Wall sockets and adapters: name each port by its printed label.
- Off/on images that look identical get a neutral caption; the table notes it.
- Tone: du/vi, sentence case, no em dashes, no jargon without explanation.

## Button list pattern (Fjernkontrollknapper)

Applies to the category Fjernkontrollknapper only. Buttons are shown small in a list of `Funksjonskort` cards with image (96 px, no round background; the Infobox icon slot cannot be enlarged), button name as title, and one sentence explaining what the function does or means in use, not just its name (e.g. "Tar deg til startsiden, med anbefalinger, kanaler og appene dine."; lamps: what the colour means). End the sentence with a full stop, as for complete explanatory sentences in `telegrafen-ux-writing`. Styling: Color/Surface/Subtle, Color/Border/Default 1px, 20 padding, title 20 Medium, text 16 Light. List width 440 px as the Infobox standard; cards fill the container so they adapt to the screen. The text matches the overview page on Telenor.no, with new illustrations. Do not describe the image in the card text; the alt text in the table does that. The "see all functions" link is built in the implementation, not in Figma. Whether the images are decorative is unconfirmed; until confirmed, write alt text in the table and flag it in Avklaring.

## Data model

- Image ID = `<set>/<variant>`, for example `fjernkontroll-3/twe-home`. The ID links text to image; text is never stored in the image.
- Title pattern: `<Enhet>: <del>`.
- Table row: Bilde-ID, alt text, character count, status (`Utkast`), Avklaring (default "Faktasjekkes mot produktteam"). Keep these column names and values in Norwegian.
- Layout: one section per set, cells in a single horizontal row, no overlapping sections. One alt-text table per category page, outside the component.
- Intended implementation: a single source of truth in the asset bank / Gizmo with editing in one place only. Not yet decided.

## Example

Image: router seen from behind with a blue port labelled WAN.

- Good alt text: `Baksiden av en ruter med en blå WAN-port nederst.`
- Good caption: `Den nederste porten er blå og merket WAN. Det er her internett kommer inn.`
- Bad caption: `Koble kabelen til den blå porten.` (instruction, colour without a non-colour cue)

## QA checklist

- Caption matches the image.
- No instructions, no "må avklares" in caption text.
- Colour has a non-colour cue.
- Printed labels explained and flagged for fact-check.
- Alt text length reasonable (about 25–100 characters); no duplicate of caption.
- Open items are in Avklaring and status is `Utkast`.
- Sections do not overlap; nothing clipped (fresh screenshot).

## Handoff

State `Visual QA` and `WCAG 2.2 AA design review` results per `telegrafen-design-components`, list skipped or empty library sets, and name what needs fact-checking.
