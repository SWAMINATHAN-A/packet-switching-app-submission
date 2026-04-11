---
name: audit
description: Run structured frontend code audits across accessibility, performance, theming, responsive behavior, and visual anti-patterns. Use when the user asks for an accessibility check, performance audit, responsive review, theming review, or a scored technical quality report for a page, feature, or component.
---

# Audit

## Overview

Audit frontend implementation quality without making fixes unless the user explicitly asks for them. Inspect the relevant source files, verify claims against rendered behavior when possible, and produce a prioritized report focused on bugs, regressions, WCAG issues, and maintainability risks.

Treat this as a technical audit, not a taste-only design critique. Report only what you can verify in code, styles, markup, assets, or browser output.

## Gather Context

- Identify the audit scope from the user request. If the user names a page, feature, or component, start there and expand to shared files only when they materially affect behavior.
- Read the implementation files that drive structure, styling, state, interaction, and layout for the scoped surface.
- Inspect adjacent shared CSS, design tokens, layout wrappers, utilities, and assets when they influence accessibility, performance, theming, or responsiveness.
- Use browser verification when available and helpful. If a dedicated browser or frontend-design skill exists in the environment, use it. Otherwise, gather context directly from the codebase.
- Prefer evidence over assumptions. If you infer something rather than directly verify it, say so explicitly.

## Audit Dimensions

### 1. Accessibility

Check for:

- Insufficient contrast, including text that likely fails WCAG AA
- Missing labels, roles, names, or states on interactive elements
- Broken keyboard access, invisible focus states, or illogical tab order
- Weak semantics such as clickable `div` elements, missing landmarks, or bad heading hierarchy
- Missing or low-quality alt text for meaningful images
- Form controls without labels, instructions, validation feedback, or required-state cues

Score `0-4`:

- `0`: Inaccessible, fails basic WCAG A expectations
- `1`: Major gaps, many interactive or semantic failures
- `2`: Partial effort, but significant issues remain
- `3`: Good WCAG AA coverage with minor gaps
- `4`: Strong WCAG AA coverage and close attention to detail

### 2. Performance

Check for:

- Layout thrashing or repeated layout reads and writes in hot paths
- Expensive animations on layout-affecting properties instead of `transform` or `opacity`
- Missing image or asset optimization, unnecessary eager loading, or oversized imports
- Avoidable render churn, heavyweight dependencies, or wasteful re-computation
- CSS or JS patterns that are likely to hurt interactivity, scrolling, or paint cost

Score `0-4`:

- `0`: Severe issues that likely harm baseline usability
- `1`: Major performance problems with obvious expensive patterns
- `2`: Mixed quality with meaningful optimization gaps
- `3`: Mostly solid with a few targeted improvements available
- `4`: Lean, careful, and performant by default

### 3. Theming

Check for:

- Hard-coded colors where tokens or variables should exist
- Theme values that will not adapt across light and dark contexts
- Inconsistent token usage or one-off visual values that weaken the system
- Contrast regressions caused by theme switching or mismatched foreground/background pairs

Score `0-4`:

- `0`: No usable theming system
- `1`: Minimal theming with mostly hard-coded values
- `2`: Partial token usage with notable inconsistencies
- `3`: Good token coverage with minor exceptions
- `4`: Cohesive token-driven theming with reliable adaptation

### 4. Responsive Design

Check for:

- Fixed widths, rigid heights, or layouts that likely break on small screens
- Touch targets smaller than `44x44px`
- Horizontal overflow, clipped content, or viewport-dependent breakage
- Layouts that fail under zoom or larger text settings
- Missing breakpoint handling for important interface changes

Score `0-4`:

- `0`: Desktop-only or badly broken on mobile
- `1`: Major responsive failures across common devices
- `2`: Works in places, but rough edges are obvious
- `3`: Responsive overall with minor gaps
- `4`: Fluid, reliable, and touch-friendly across viewports

### 5. Anti-Patterns

Check for repeatable implementation patterns that make the UI feel generic, cluttered, or obviously AI-generated:

- Trend-chasing gradients, glass, or decoration without functional purpose
- Empty stat cards, repetitive card grids, or filler sections with low information density
- Generic typography choices that ignore the product's existing visual language
- Nested surfaces, redundant copy, low-contrast decorative text, or noisy motion
- Visual decisions that conflict with the established design system

Score `0-4`:

- `0`: Several strong AI-slop or anti-pattern signals
- `1`: Heavy reliance on generic or trend-driven patterns
- `2`: A few noticeable anti-patterns
- `3`: Mostly intentional with minor issues
- `4`: Clear, distinctive, and internally consistent

## Report Format

Present findings first, ordered by severity. Keep summaries brief and evidence-heavy.

### Audit Health Score

Use this table:

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | ? | [most important issue or `--`] |
| 2 | Performance | ? | [most important issue or `--`] |
| 3 | Responsive Design | ? | [most important issue or `--`] |
| 4 | Theming | ? | [most important issue or `--`] |
| 5 | Anti-Patterns | ? | [most important issue or `--`] |
| **Total** | | **??/20** | **[rating band]** |

Use these rating bands:

- `18-20`: Excellent
- `14-17`: Good
- `10-13`: Acceptable
- `6-9`: Poor
- `0-5`: Critical

### Findings

For every issue, include:

- `Severity`: `P0`, `P1`, `P2`, or `P3`
- `Title`: Short issue name
- `Location`: Specific file reference and line when possible
- `Category`: Accessibility, Performance, Theming, Responsive, or Anti-Pattern
- `Impact`: Explain why the issue matters for users or maintainers
- `Standard`: Cite WCAG or another concrete standard when relevant; otherwise state `n/a`
- `Recommendation`: Give a specific fix direction

Use this severity rubric:

- `P0`: Blocking defect or major breakage that prevents task completion
- `P1`: Significant user harm, WCAG AA violation, or high-risk regression
- `P2`: Noticeable issue with a workaround or limited blast radius
- `P3`: Polish or consistency improvement with low immediate impact

If no findings exist, say so explicitly and list any residual test gaps.

### Report Sections

Produce the report in this order:

1. `Anti-Patterns Verdict`: Start here. State pass or fail on whether the surface looks obviously AI-generated or pattern-driven, then name the concrete tells.
2. `Findings`: List issues from highest to lowest severity with file references.
3. `Audit Health Score`: Include the table and total score.
4. `Executive Summary`: Include total issue counts by severity, the top `3-5` issues, and the most important next steps.
5. `Patterns and Systemic Issues`: Call out recurring problems that suggest system-level cleanup.
6. `Positive Findings`: Preserve what is working well.
7. `Recommended Actions`: Suggest the highest-leverage next steps in priority order.

## Recommended Actions

- Prioritize `P0` and `P1` work before polish.
- Recommend concrete fixes, not generic advice.
- If the environment exposes follow-up slash commands or repair skills, map the findings to the closest valid next step. Otherwise, recommend plain-language implementation tasks.
- Suggest re-running the audit after fixes to confirm the score improves.

## Guardrails

- Do not fix issues unless the user explicitly asks for remediation.
- Do not report unverified claims as facts.
- Do not flood the report with low-value `P3` items.
- Do not skip positive findings when the implementation does something well.
- Do not hide important risks behind a high-level summary.
