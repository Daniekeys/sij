```markdown
# Design System Document: The Sovereign Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Modern Statesman"**
This design system moves away from the "startup-chic" aesthetic toward a "High-End Editorial" experience. It is designed to feel like a premium digital monograph—combining the gravitas of a legacy political institution with the crisp transparency of modern governance. 

To break the "template" look, we employ **Intentional Asymmetry**. We favor large, breathing gutters and off-center typography that guides the eye through impact metrics. We do not "box" content; we curate it. The layout should feel like a series of layered, physical artifacts—heavy paper, frosted glass, and deep ink—stacked with purpose.

---

## 2. Colors & Surface Philosophy
The palette is rooted in 'Integrity Green'—a deep, authoritative anchor—balanced by 'Progress Gold' to highlight momentum.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off content. 
Boundaries must be defined through **Background Color Shifts** or **Tonal Transitions**. For example, a `surface-container-low` section should sit directly against a `background` section. This creates a sophisticated, seamless flow rather than a rigid, "gridded" web feel.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the Material tokens to create "nested" depth:
*   **Base Layer:** `surface` (#f9f9f8) for main backgrounds.
*   **The Inset:** Use `surface-container-low` (#f3f4f3) for secondary content wells.
*   **The Lift:** Place `surface-container-lowest` (#ffffff) cards on top of `surface-container` tiers to create a soft, natural lift.

### Signature Textures: Glass & Gradient
To provide "visual soul," use a subtle **linear gradient** for primary CTAs and Hero backgrounds, transitioning from `primary` (#001b0f) to `primary-container` (#013220).
*   **Glassmorphism:** For floating navigation or modal overlays, use semi-transparent `surface` colors with a `backdrop-filter: blur(20px)`. This integrates the UI into the photography, making the brand feel transparent and "open."

---

## 3. Typography
The typographic pairing is a dialogue between the past (Legacy) and the future (Efficiency).

*   **Display & Headlines (Instrument Serif):** This is our "Voice of Authority." Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for impact metrics. The serif conveys trust and historical weight.
*   **Body & Labels (Inter):** Our "Voice of Clarity." Use `body-lg` (1rem) for narrative text. Inter provides a high-functioning, modern contrast to the serif headings, ensuring that data and policy details are highly legible.

**Typographic Hierarchy:**
*   **Impact Metrics:** Large `display-md` serif numbers paired with `label-md` Inter descriptors in `secondary` (Gold).
*   **Editorial Narrative:** `headline-sm` serif titles followed by `body-lg` Inter paragraphs with generous line-height (1.6) for readability.

---

## 4. Elevation & Depth
We eschew traditional "drop shadows" in favor of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by stacking `surface-container` tiers. A `surface-container-highest` card on a `surface` background creates enough contrast to signal interactability without visual clutter.
*   **Ambient Shadows:** If a floating element (like a mobile nav) requires a shadow, it must be an "Ambient Glow": 
    *   *Blur:* 40px–60px.
    *   *Opacity:* 4%–8%.
    *   *Color:* Use a tinted version of `on-surface` (#191c1c), never pure black.
*   **The "Ghost Border" Fallback:** If a container sits on a background of the same color, use a "Ghost Border": `outline-variant` at 15% opacity. **Prohibit 100% opaque borders.**

---

## 5. Components

### Cards
*   **Radius:** Always `xl` (1.5rem / 24px) or `lg` (1rem / 16px) per the Roundedness Scale.
*   **Styling:** No borders. Use `surface-container-lowest` on a `surface` background.
*   **Layout:** Use asymmetrical padding—larger padding on the bottom (e.g., 40px) than the top (32px) to give a weighted, high-end editorial feel.

### Buttons
*   **Primary:** `primary` background with `on-primary` text. Use a subtle gradient. 16px corners.
*   **Secondary (Gold Accent):** `secondary-container` background with `on-secondary-container` text. Use for "Progress" actions or high-priority CTAs.
*   **Tertiary:** No background. `primary` text with an `underline-variant` that appears on hover.

### Impact Metric Chips
*   **Visuals:** Use `primary-fixed` backgrounds with `on-primary-fixed` text.
*   **Context:** Used to highlight specific community data points (e.g., "85% Transparency Score").

### Input Fields
*   **Style:** Minimalist. No bounding box. Only a `surface-variant` bottom-stroke (2px). On focus, the stroke transitions to `secondary` (Gold).

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Negative Space:** Allow headlines to "own" the screen. Don't crowd the serif typography.
*   **Use Documentary Imagery:** Use high-contrast, professional portraits. Apply a very subtle 5% `primary` color wash to imagery to harmonize it with the brand palette.
*   **Layer Surfaces:** Use `surface-container` levels to group related impact metrics.

### Don’t:
*   **Don't Use Dividers:** Never use a horizontal line to separate list items. Use 24px–32px of vertical whitespace or a 2% shift in background color.
*   **Don't Overuse Gold:** Progress Gold is a "surgical" accent. Use it for highlights, icons, or primary status indicators only. Overuse diminishes its premium feel.
*   **Don't Use Sharp Corners:** Every interactive element must respect the 16px (`lg`) or 24px (`xl`) corner radius to maintain the "Warm & Professional" mood.

---

## 7. Spacing & Rhythm
This design system uses a **12-column grid** but encourages **"Column Breaking."** 
Main narrative text should occupy columns 3 through 9, leaving wide margins for "floating" impact metrics or documentary captions in the gutters. This creates the "Signature Portfolio" look that separates this system from a standard corporate site.```