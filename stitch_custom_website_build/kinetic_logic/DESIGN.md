---
name: Kinetic Logic
colors:
  surface: '#fcf8ff'
  surface-dim: '#dcd8e5'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#f0ecf9'
  surface-container-high: '#eae6f4'
  surface-container-highest: '#e4e1ee'
  on-surface: '#1b1b24'
  on-surface-variant: '#464555'
  inverse-surface: '#302f39'
  inverse-on-surface: '#f3effc'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#fcf8ff'
  on-background: '#1b1b24'
  surface-variant: '#e4e1ee'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system is engineered for high-velocity collaborative environments. The brand personality is professional, reliable, and unobtrusive, acting as a sophisticated vessel for complex project data. It targets mid-to-large scale teams who require a tool that balances deep functionality with cognitive ease.

The visual style is **Corporate / Modern** with a focus on functional clarity. It utilizes a refined systematic approach—relying on a strict grid, intentional whitespace, and a high-contrast typographic hierarchy to ensure that dense project information remains scannable and actionable. The aesthetic is "Work-First," removing unnecessary decorative elements to prioritize user tasks and data integrity.

## Colors

The palette is anchored by **Trustworthy Indigo**, used strategically for primary actions and active states to guide user focus. **Clean Slate** serves as the functional workhorse for secondary UI elements, borders, and body text, providing enough contrast for accessibility without the harshness of pure black.

Surfaces are strictly categorized: the global application background uses an off-white tint to reduce glare, while interactive modules and cards use pure white to "pop" from the canvas. Semantic accents (Green, Amber, Red) are reserved strictly for status-driven data—task completion, looming deadlines, and critical blockers—ensuring these signals are never lost in the interface.

## Typography

This design system utilizes **Inter** across all levels to leverage its exceptional legibility in digital interfaces. The hierarchy is "top-heavy," using bold weights and tight letter-spacing for headings to create clear section anchoring. 

Body text is optimized for long-form reading and data entry at 14px and 16px. We use a dedicated uppercase `label-sm` for metadata and table headers to distinguish structural labels from user-generated content. On mobile, headlines scale down aggressively to maintain layout integrity without excessive wrapping.

## Layout & Spacing

The layout follows a **Fluid Grid** logic with fixed side navigation. It utilizes a 4px baseline shift to ensure all elements—icons, text, and containers—align perfectly. 

- **Desktop:** 12-column grid with 20px gutters. Content is primarily housed in "Surfaces" (cards) that span flexible column widths.
- **Tablet:** 8-column grid. Sidebars collapse into icons or hide behind a hamburger menu.
- **Mobile:** 4-column grid. Horizontal padding is reduced to 16px to maximize screen real estate for task lists and chat threads.

Vertical rhythm is maintained through consistent use of the `md` (16px) and `lg` (24px) spacing tokens for component separation.

## Elevation & Depth

We use **Ambient Shadows** to define the z-axis. The depth model is shallow to maintain a "professional flat" feel while providing necessary tactile cues.

- **Level 0 (Flat):** Main background (#F8FAFC). No shadow.
- **Level 1 (Card):** Surface for content modules (#FFFFFF). 1px border (#E2E8F0) and a very soft 2px blur shadow at 5% opacity.
- **Level 2 (Navigation/Header):** Sticky elements. 4px blur, 8px Y-offset at 8% opacity.
- **Level 3 (Modals/Popovers):** Highest elevation. 12px blur, 16px Y-offset at 12% opacity with a semi-transparent backdrop blur (8px) on the content behind it.

## Shapes

The shape language is consistently **Rounded**, using an 8px (0.5rem) radius as the standard for all primary UI components like buttons and input fields. This softens the "industrial" feel of a project management tool, making the software feel more approachable and modern.

Large containers like boards, project cards, and modals use `rounded-lg` (16px) to clearly define their boundaries. Small utility elements like checkboxes or status tags use `rounded-sm` (4px) to remain crisp.

## Components

### Buttons
- **Primary:** Solid #4F46E5 background, white text. 8px radius. High-contrast, used for the single "main" action per view (e.g., "Create Project").
- **Secondary:** White background, 1px #E2E8F0 border, #64748B text. Used for supporting actions.
- **Ghost:** No background or border. Primary color text. Used for low-priority actions in dense lists.

### Input Fields
Inputs use a 1px border (#E2E8F0) and an 8px radius. On focus, the border changes to Indigo (#4F46E5) with a subtle 2px glow. Labels sit above the field in `label-md` weight.

### Chips & Tags
Used for status and categories. They utilize a low-saturation background of the semantic color (e.g., Success Green at 10% opacity) with high-saturation text of the same color for maximum legibility.

### Cards
Cards are the primary container. They feature a white surface, Level 1 elevation, and 16px internal padding. Card headers use a subtle bottom border to separate title from body content.

### Lists & Tables
To handle density, table rows use a 1px bottom border. Hover states on rows use a very light Indigo tint (#EEF2FF) to provide visual tracking across horizontal data points.