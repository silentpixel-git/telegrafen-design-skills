(function () {
  "use strict";

  /* ---------- Language (English in the HTML, Norwegian from js/i18n.js) ---------- */

  var I18N = window.GUIDE_I18N;
  var lang = "en";
  var rootEl = document.documentElement;
  var EN_TITLE = document.title;

  function t(key, vars) {
    var text = I18N.ui[lang][key] || I18N.ui.en[key];
    Object.keys(vars || {}).forEach(function (name) { text = text.replace("{" + name + "}", vars[name]); });
    return text;
  }
  function trHtml(html) {
    return lang === "no" && I18N.blocks[html] ? I18N.blocks[html] : html;
  }
  function normalize(html) { return html.replace(/\s+/g, " ").trim(); }

  // Text blocks: the outermost elements with their own text. Dynamic regions are handled below.
  var SKIP = "script, style, svg, noscript, .lang-switch, #picker-options, #picker-result, #stepper, #walkthrough-progress, #announcer";
  var textBlocks = [];
  (function collect(parent) {
    Array.prototype.forEach.call(parent.children, function (el) {
      if (el.matches(SKIP)) { return; }
      var ownText = Array.prototype.some.call(el.childNodes, function (n) {
        return n.nodeType === 3 && /[A-Za-z]/.test(n.textContent);
      });
      if (ownText) { textBlocks.push({ el: el, en: el.innerHTML, key: normalize(el.innerHTML) }); }
      else { collect(el); }
    });
  })(document.body);

  var languageListeners = [];
  function onLanguage(fn) { languageListeners.push(fn); }

  function setLanguage(next, persist) {
    lang = next === "no" ? "no" : "en";
    rootEl.setAttribute("lang", lang === "no" ? "nb" : "en");
    document.title = lang === "no" ? I18N.title : EN_TITLE;
    textBlocks.forEach(function (block) {
      block.el.innerHTML = lang === "no" && I18N.blocks[block.key] ? I18N.blocks[block.key] : block.en;
    });
    var toc = document.querySelector(".toc");
    if (toc) { toc.setAttribute("aria-label", t("tocLabel")); }
    if (persist) {
      try { localStorage.setItem("guide-lang", lang); } catch (e) { /* storage unavailable */ }
    }
    languageListeners.forEach(function (fn) { fn(); });
  }

  function initialLanguage() {
    try {
      var stored = localStorage.getItem("guide-lang");
      if (stored === "en" || stored === "no") { return stored; }
    } catch (e) { /* storage unavailable */ }
    var preferred = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    return /^(nb|nn|no)\b/i.test(preferred) ? "no" : "en";
  }

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

  /* ---------- Theme toggle (follows prefers-color-scheme until chosen) ---------- */

  var themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    var darkQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    var isDark = function () {
      var chosen = rootEl.getAttribute("data-theme");
      return chosen ? chosen === "dark" : !!(darkQuery && darkQuery.matches);
    };
    var syncToggle = function () {
      var dark = isDark();
      themeToggle.classList.toggle("is-dark", dark);
      themeToggle.setAttribute("aria-label", dark ? t("themeToLight") : t("themeToDark"));
    };
    themeToggle.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      rootEl.setAttribute("data-theme", next);
      try { localStorage.setItem("guide-theme", next); } catch (e) { /* storage unavailable */ }
      syncToggle();
    });
    if (darkQuery) {
      if (darkQuery.addEventListener) { darkQuery.addEventListener("change", syncToggle); }
      else if (darkQuery.addListener) { darkQuery.addListener(syncToggle); }
    }
    syncToggle();
    onLanguage(syncToggle);
    themeToggle.hidden = false;
  }

  /* ---------- Copy to clipboard ---------- */

  function setCopyButton(button, copied) {
    button.classList.toggle("is-copied", copied);
    button.innerHTML = icon(copied ? "i-success" : "i-copy") +
      '<span class="visually-hidden">' + (copied ? t("copied") : t("copy")) + "</span>";
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
    button.hidden = false;
    var timer;
    button.addEventListener("click", function () {
      var target = document.getElementById(button.getAttribute("data-copy-target"));
      if (!target) { return; }
      copyText(target.textContent.trim()).then(function () {
        setCopyButton(button, true);
        announce(t("copiedAnnounce"));
        window.clearTimeout(timer);
        timer = window.setTimeout(function () { setCopyButton(button, false); }, 2500);
      }, function () {
        selectText(target);
        announce(t("copyFailed"));
      });
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll(".copy-btn"), initCopyButton);
  onLanguage(function () {
    Array.prototype.forEach.call(document.querySelectorAll(".copy-btn"), function (button) {
      setCopyButton(button, button.classList.contains("is-copied"));
    });
  });

  /* ---------- Skill and mode picker (driven by the cheat sheet) ---------- */


  function promptFrom(id) {
    return function () { return document.getElementById(id).textContent.trim(); };
  }
  var PROMPT_A = promptFrom("prompt-a-text");
  var PROMPT_B = promptFrom("prompt-b-text");
  var PROMPT_C = promptFrom("prompt-c-text");
  var PROMPT_D = promptFrom("prompt-d-text");
  var PROMPT_F = promptFrom("prompt-f-text");
  var PROMPT_G = promptFrom("prompt-g-text");

  var TASKS = [
    {
      id: "new-screen",
      task: "New screen or flow",
      skill: "Mockups",
      command: "/telegrafen-design-mockups",
      mode: "Build & Iterate",
      why: "Mockups assembles screens from verified Telegrafen assets. Start with one small, scoped view. You get a Draft status, not a review verdict.",
      prompt: PROMPT_A,
      promptStep: 2
    },
    {
      id: "final-qa",
      task: "Final screen QA",
      skill: "Mockups",
      command: "/telegrafen-design-mockups",
      mode: "Review & Finalize",
      why: "Runs the complete production and WCAG 2.2 AA gates, corrects defects only in the requested area and connected states, and reports unrelated issues.",
      prompt: PROMPT_D,
      promptStep: 4
    },
    {
      id: "new-component",
      task: "New reusable component",
      skill: "Components",
      command: "/telegrafen-design-components",
      mode: "Build & Iterate",
      why: "Components owns anatomy, properties, variants and states. Expect an interview, one question at a time, and a contract to confirm before it builds.",
      prompt: PROMPT_G,
      promptStep: 7
    },
    {
      id: "component-audit",
      task: "Component audit only",
      skill: "Components",
      command: "/telegrafen-design-components",
      mode: "Review & QA",
      why: "Read-only structural and visual assessment. Nothing is changed.",
      starter: "/telegrafen-design-components. Review & QA the selected component, read-only. Assess structure, properties, variants, states, token and style bindings, light and dark contexts, and accessibility. Report findings with evidence and do not edit."
    },
    {
      id: "component-fix",
      task: "Component fixes and release QA",
      skill: "Components",
      command: "/telegrafen-design-components",
      mode: "Repair & Finalize",
      why: "Makes authorised edits, then runs the complete finalisation audit.",
      starter: "/telegrafen-design-components. Repair & Finalize the selected component. Fix only [listed defects] and preserve accepted decisions. Ask before changing the public API. Then run the complete finalisation audit and report the results with evidence."
    },
    {
      id: "visual-critique",
      task: "Visual critique only",
      skill: "Visual Design",
      command: "/telegrafen-visual-design",
      mode: "Review",
      why: "Read-only art-direction review. Findings are ranked Critical, Important or Polish, with Preserve decisions.",
      prompt: PROMPT_B,
      promptStep: 5
    },
    {
      id: "visual-apply",
      task: "Apply accepted visual changes",
      skill: "Visual Design",
      command: "/telegrafen-visual-design",
      mode: "Apply",
      why: "Implements only the accepted findings in a revision beside the original, then runs Mockup production QA and Visual acceptance QA.",
      prompt: PROMPT_C,
      promptStep: 6
    },
    {
      id: "ux-copy",
      task: "New or improved Norwegian in-product copy",
      skill: "UX Writing",
      command: "/telegrafen-ux-writing",
      mode: "Create or Rewrite",
      why: "Clear, calm Norwegian Bokmål microcopy. It does not invent product facts; a missing fact is marked for clarification.",
      prompt: PROMPT_F,
      promptStep: 3
    },
    {
      id: "ux-qa",
      task: "Copy assessment only",
      skill: "UX Writing",
      command: "/telegrafen-ux-writing",
      mode: "QA",
      why: "Read-only. You get findings and ready-to-paste replacements without changes to the design.",
      starter: "/telegrafen-ux-writing. QA the copy in the selected frame, read-only. Report findings and ready-to-paste replacements without changing the design."
    }
  ];

  var options = document.getElementById("picker-options");
  var result = document.getElementById("picker-result");

  var chosenTask = null;

  function renderOptions() {
    options.innerHTML = TASKS.map(function (task) {
      var checked = chosenTask && chosenTask.id === task.id ? " checked" : "";
      return '<label class="chip">' +
        '<input type="radio" name="task" value="' + task.id + '"' + checked + ">" +
        '<span class="chip__face"><span>' + trHtml(escapeHtml(task.task)) + "</span>" + icon("i-success") + "</span>" +
        "</label>";
    }).join("");
  }

  function localTask(task) {
    var no = lang === "no" ? (I18N.tasks[task.id] || {}) : {};
    var prompt = task.prompt ? task.prompt() : (no.prompt || task.starter);
    var source = task.promptStep ? t("exampleFromStep", { n: task.promptStep }) : t("starterPrompt");
    if (prompt.indexOf("[") !== -1) { source += t("adaptBrackets"); }
    return { why: no.why || task.why, prompt: prompt, source: source };
  }

  function renderResult(task) {
    var local = localTask(task);
    result.innerHTML =
      '<div class="picker-result__meta"><span class="badge">' + escapeHtml(t("fromCheatSheet")) + "</span></div>" +
      "<h3>" + escapeHtml(task.skill) + " · " + trHtml(escapeHtml(task.mode)) + "</h3>" +
      '<p class="skill__cmd">' + escapeHtml(task.command) + "</p>" +
      '<p class="picker-result__why">' + escapeHtml(local.why) + "</p>" +
      '<p class="label picker-result__prompt-label" id="picker-prompt-label">' + escapeHtml(local.source) + "</p>" +
      '<div class="prompt__well"><p class="prompt__text" id="picker-prompt-text">' + escapeHtml(local.prompt) + "</p>" +
      '<button type="button" class="btn btn--tertiary btn--icon btn--s copy-btn" data-copy-target="picker-prompt-text" aria-describedby="picker-prompt-label" hidden></button></div>';
    initCopyButton(result.querySelector(".copy-btn"));
  }

  function renderEmpty() {
    result.innerHTML = '<p class="picker-result__empty">' + escapeHtml(t("pickerEmpty")) + "</p>";
  }

  renderOptions();
  options.addEventListener("change", function (event) {
    var chosen = TASKS.filter(function (task) { return task.id === event.target.value; })[0];
    if (chosen) { chosenTask = chosen; renderResult(chosen); }
  });
  onLanguage(function () {
    var focusedValue = document.activeElement && options.contains(document.activeElement) ? document.activeElement.value : null;
    renderOptions();
    if (focusedValue) { options.querySelector('input[value="' + focusedValue + '"]').focus(); }
    if (chosenTask) { renderResult(chosenTask); } else { renderEmpty(); }
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

  var stepButtons = [];
  function renderStepper() {
    var focusedStep = document.activeElement && stepper.contains(document.activeElement)
      ? document.activeElement.getAttribute("data-step") : null;
    stepper.innerHTML = steps.map(function (step, i) {
      var title = step.querySelector(".step__title").textContent;
      var short = step.getAttribute("data-short") || "";
      if (lang === "no" && I18N.steps[short]) { short = I18N.steps[short]; }
      return '<li><button type="button" data-step="' + i + '" aria-controls="' + step.id + '">' +
        '<span class="visually-hidden">' + escapeHtml(t("step")) + "</span>" +
        '<span class="stepper__num">' + (i + 1) + "</span>" +
        ' <span class="stepper__label">' + escapeHtml(short) + "</span>" +
        '<span class="visually-hidden">: ' + escapeHtml(title) + "</span>" +
        "</button></li>";
    }).join("");
    stepButtons = Array.prototype.slice.call(stepper.querySelectorAll("button"));
    if (focusedStep !== null) { stepButtons[Number(focusedStep)].focus(); }
  }
  renderStepper();

  function show(index, focusPanel) {
    current = Math.max(0, Math.min(steps.length - 1, index));
    steps.forEach(function (step, i) { step.hidden = i !== current; });
    stepButtons.forEach(function (button, i) {
      if (i === current) { button.setAttribute("aria-current", "step"); }
      else { button.removeAttribute("aria-current"); }
      button.classList.toggle("is-done", i < current);
    });
    progress.textContent = t("progress", { n: current + 1, total: steps.length });

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
  onLanguage(function () { renderStepper(); show(current, false); });

  /* ---------- Language switch ---------- */

  var langSwitch = document.querySelector(".lang-switch");
  var langButtons = langSwitch ? Array.prototype.slice.call(langSwitch.querySelectorAll("button[data-lang]")) : [];
  function syncLangSwitch() {
    if (!langSwitch) { return; }
    langSwitch.setAttribute("aria-label", t("langGroup"));
    langButtons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang") === lang));
    });
  }
  onLanguage(syncLangSwitch);
  langButtons.forEach(function (button) {
    button.addEventListener("click", function () { setLanguage(button.getAttribute("data-lang"), true); });
  });
  if (langSwitch) { langSwitch.hidden = false; }
  setLanguage(initialLanguage(), false);

  /* ---------- Scroll reveals (transform and opacity only) ---------- */

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && "IntersectionObserver" in window) {
    // Reserved for two places: the hero's load-in and the skills list stagger.
    var revealTargets = document.querySelectorAll(".hero__main > *, .hero__aside, .skill");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    Array.prototype.forEach.call(revealTargets, function (el) {
      var siblings = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty("--i", Math.min(siblings, 4));
      el.classList.add("reveal");
      observer.observe(el);
    });
    document.documentElement.classList.add("reveal-on");
  }
})();
