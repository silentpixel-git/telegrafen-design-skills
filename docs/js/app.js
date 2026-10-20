(function () {
  "use strict";

  var announcer = document.getElementById("announcer");
  function announce(message) {
    announcer.textContent = "";
    window.setTimeout(function () { announcer.textContent = message; }, 50);
  }

  function icon(id) {
    return '<svg class="icon" aria-hidden="true" focusable="false"><use href="#' + id + '"></use></svg>';
  }

  function escapeHtml(text) {
    return text.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Copy to clipboard ---------- */

  var COPY_LABEL = "Copy prompt";
  var COPIED_LABEL = "Copied";

  function setCopyButton(button, copied) {
    button.innerHTML = icon(copied ? "i-success" : "i-copy") +
      "<span>" + (copied ? COPIED_LABEL : COPY_LABEL) + "</span>";
    button.classList.toggle("is-copied", copied);
  }

  function fallbackCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(area);
    return ok;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        if (!fallbackCopy(text)) { throw new Error("copy failed"); }
      });
    }
    return fallbackCopy(text) ? Promise.resolve() : Promise.reject(new Error("copy failed"));
  }

  function selectText(element) {
    var range = document.createRange();
    range.selectNodeContents(element);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function initCopyButton(button) {
    setCopyButton(button, false);
    var timer;
    button.addEventListener("click", function () {
      var target = document.getElementById(button.getAttribute("data-copy-target"));
      if (!target) { return; }
      copyText(target.textContent.trim()).then(function () {
        setCopyButton(button, true);
        announce("Prompt copied to clipboard");
        window.clearTimeout(timer);
        timer = window.setTimeout(function () { setCopyButton(button, false); }, 2500);
      }, function () {
        selectText(target);
        announce("Copy is not available. The prompt is selected; press Control or Command plus C to copy it.");
      });
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll(".copy-btn"), initCopyButton);

  /* ---------- Skill and mode picker (driven by the cheat sheet) ---------- */

  var PROMPT_A = document.getElementById("prompt-a-text").textContent.trim();
  var PROMPT_B = document.getElementById("prompt-b-text").textContent.trim();
  var PROMPT_C = document.getElementById("prompt-c-text").textContent.trim();
  var PROMPT_D = document.getElementById("prompt-d-text").textContent.trim();

  var TASKS = [
    {
      id: "new-screen",
      task: "New screen or flow",
      skill: "Mockups",
      command: "/telegrafen-design-mockups",
      mode: "Build & Iterate",
      why: "Mockups assembles screens from verified Telegrafen assets. Start with one small, scoped view. You get a Draft status, not a review verdict.",
      prompt: PROMPT_A,
      promptSource: "Demo prompt A"
    },
    {
      id: "final-qa",
      task: "Final screen QA",
      skill: "Mockups",
      command: "/telegrafen-design-mockups",
      mode: "Review & Finalize",
      why: "Runs the complete production and WCAG 2.2 AA gates, corrects defects only in the requested area and connected states, and reports unrelated issues.",
      prompt: PROMPT_D,
      promptSource: "Demo prompt D"
    },
    {
      id: "new-component",
      task: "New reusable component",
      skill: "Components",
      command: "/telegrafen-design-components",
      mode: "Build & Iterate",
      why: "Components owns anatomy, properties, variants and states. Expect an interview, one question at a time, and a contract to confirm before it builds.",
      prompt: "/telegrafen-design-components. Use Build & Iterate. I need a reusable [component] for [user need]. Inspect the closest approved Telegrafen components first, then ask me one question at a time about purpose, anatomy, content, states and behaviour. Summarise the contract and wait for my confirmation before building.",
      promptSource: "Starter prompt"
    },
    {
      id: "component-audit",
      task: "Component audit only",
      skill: "Components",
      command: "/telegrafen-design-components",
      mode: "Review & QA",
      why: "Read-only structural and visual assessment. Nothing is changed.",
      prompt: "/telegrafen-design-components. Review & QA the selected component, read-only. Assess structure, properties, variants, states, token and style bindings, light and dark contexts, and accessibility. Report findings with evidence and do not edit.",
      promptSource: "Starter prompt"
    },
    {
      id: "component-fix",
      task: "Component fixes and release QA",
      skill: "Components",
      command: "/telegrafen-design-components",
      mode: "Repair & Finalize",
      why: "Makes authorised edits, then runs the complete finalisation audit.",
      prompt: "/telegrafen-design-components. Repair & Finalize the selected component. Fix only [listed defects] and preserve accepted decisions. Ask before changing the public API. Then run the complete finalisation audit and report the results with evidence.",
      promptSource: "Starter prompt"
    },
    {
      id: "visual-critique",
      task: "Visual critique only",
      skill: "Visual Design",
      command: "/telegrafen-visual-design",
      mode: "Review",
      why: "Read-only art-direction review. Findings are ranked Critical, Important or Polish, with Preserve decisions.",
      prompt: PROMPT_B,
      promptSource: "Demo prompt B"
    },
    {
      id: "visual-apply",
      task: "Apply accepted visual changes",
      skill: "Visual Design",
      command: "/telegrafen-visual-design",
      mode: "Apply",
      why: "Implements only the accepted findings in a revision beside the original, then runs Mockup production QA and Visual acceptance QA.",
      prompt: PROMPT_C,
      promptSource: "Demo prompt C"
    },
    {
      id: "ux-copy",
      task: "New or improved Norwegian in-product copy",
      skill: "UX Writing",
      command: "/telegrafen-ux-writing",
      mode: "Create or Rewrite",
      why: "Clear, calm Norwegian Bokmål microcopy. It does not invent product facts; a missing fact is marked for clarification.",
      prompt: "/telegrafen-ux-writing. Rewrite the copy in the selected frame for [user task]. Use du for the customer and vi for Telenor, sentence case and specific actions. Do not invent prices, eligibility or promises.",
      promptSource: "Starter prompt"
    },
    {
      id: "ux-qa",
      task: "Copy assessment only",
      skill: "UX Writing",
      command: "/telegrafen-ux-writing",
      mode: "QA",
      why: "Read-only. You get findings and ready-to-paste replacements without changes to the design.",
      prompt: "/telegrafen-ux-writing. QA the copy in the selected frame, read-only. Report findings and ready-to-paste replacements without changing the design.",
      promptSource: "Starter prompt"
    }
  ];

  var options = document.getElementById("picker-options");
  var result = document.getElementById("picker-result");

  options.innerHTML = TASKS.map(function (t) {
    return '<label class="chip">' +
      '<input type="radio" name="task" value="' + t.id + '">' +
      '<span class="chip__face"><span>' + escapeHtml(t.task) + "</span>" + icon("i-success") + "</span>" +
      "</label>";
  }).join("");

  function renderResult(t) {
    var source = t.promptSource === "Starter prompt"
      ? "Starter prompt (workshop example, adapt the bracketed details)"
      : t.promptSource + " (workshop example)";
    result.innerHTML =
      '<div class="picker-result__meta"><span class="badge">From the cheat sheet</span></div>' +
      "<h3>" + escapeHtml(t.skill) + " · " + escapeHtml(t.mode) + "</h3>" +
      '<p class="skill__cmd">' + escapeHtml(t.command) + "</p>" +
      '<p class="picker-result__why">' + escapeHtml(t.why) + "</p>" +
      '<p class="label picker-result__prompt-label" id="picker-prompt-label">' + escapeHtml(source) + "</p>" +
      '<p class="prompt__text" id="picker-prompt-text">' + escapeHtml(t.prompt) + "</p>" +
      '<p class="picker-result__actions">' +
      '<button type="button" class="btn btn--secondary btn--s copy-btn" data-copy-target="picker-prompt-text" aria-describedby="picker-prompt-label"></button></p>';
    initCopyButton(result.querySelector(".copy-btn"));
  }

  options.addEventListener("change", function (event) {
    var chosen = TASKS.filter(function (t) { return t.id === event.target.value; })[0];
    if (chosen) { renderResult(chosen); }
  });

  /* ---------- Workflow walkthrough ---------- */

  var walkthrough = document.getElementById("walkthrough");
  var steps = Array.prototype.slice.call(document.querySelectorAll("#steps .step"));
  var stepper = document.getElementById("stepper");
  var progress = document.getElementById("walkthrough-progress");
  var nav = document.getElementById("walkthrough-nav");
  var prev = document.getElementById("step-prev");
  var next = document.getElementById("step-next");
  var current = 0;

  stepper.innerHTML = steps.map(function (step, i) {
    var title = step.querySelector(".step__title").textContent;
    return '<li><button type="button" data-step="' + i + '" aria-controls="' + step.id + '">' +
      '<span aria-hidden="true">' + (i + 1) + '</span>' +
      '<span class="visually-hidden">Step ' + (i + 1) + ": " + escapeHtml(title) + "</span>" +
      "</button></li>";
  }).join("");
  var stepButtons = Array.prototype.slice.call(stepper.querySelectorAll("button"));

  function show(index, focusPanel) {
    current = Math.max(0, Math.min(steps.length - 1, index));
    steps.forEach(function (step, i) { step.hidden = i !== current; });
    stepButtons.forEach(function (button, i) {
      if (i === current) { button.setAttribute("aria-current", "step"); }
      else { button.removeAttribute("aria-current"); }
      button.classList.toggle("is-done", i < current);
    });
    progress.textContent = "Step " + (current + 1) + " of " + steps.length;

    var focused = document.activeElement;
    prev.disabled = current === 0;
    next.disabled = current === steps.length - 1;
    if (focused === prev && prev.disabled) { next.focus(); }
    if (focused === next && next.disabled) { prev.focus(); }

    if (focusPanel) {
      steps[current].setAttribute("tabindex", "-1");
      steps[current].focus();
    }
  }

  stepper.addEventListener("click", function (event) {
    var button = event.target.closest("button[data-step]");
    if (button) { show(Number(button.getAttribute("data-step")), true); }
  });
  prev.addEventListener("click", function () { show(current - 1, false); });
  next.addEventListener("click", function () { show(current + 1, false); });

  walkthrough.classList.add("is-enhanced");
  stepper.hidden = false;
  progress.hidden = false;
  nav.hidden = false;
  show(0, false);
})();
