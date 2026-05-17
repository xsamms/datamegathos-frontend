---
name: Data Megathos
colors:
  surface: '#1e0f10'
  surface-dim: '#1e0f10'
  surface-bright: '#473535'
  surface-container-lowest: '#180a0b'
  surface-container-low: '#271718'
  surface-container: '#2b1b1c'
  surface-container-high: '#372626'
  surface-container-highest: '#423030'
  on-surface: '#f9dcdb'
  on-surface-variant: '#e3bebe'
  inverse-surface: '#f9dcdb'
  inverse-on-surface: '#3e2c2c'
  outline: '#aa8989'
  outline-variant: '#5b4040'
  surface-tint: '#ffb3b4'
  primary: '#ffb3b4'
  on-primary: '#680017'
  primary-container: '#dc314a'
  on-primary-container: '#fffeff'
  inverse-primary: '#bb1335'
  secondary: '#ffb2b9'
  on-secondary: '#561d26'
  secondary-container: '#74353d'
  on-secondary-container: '#f6a1a9'
  tertiary: '#73d8bf'
  on-tertiary: '#00382d'
  tertiary-container: '#00856f'
  on-tertiary-container: '#fcfffc'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b4'
  on-primary-fixed: '#40000b'
  on-primary-fixed-variant: '#920025'
  secondary-fixed: '#ffdadc'
  secondary-fixed-dim: '#ffb2b9'
  on-secondary-fixed: '#3a0812'
  on-secondary-fixed-variant: '#71333b'
  tertiary-fixed: '#8ff5da'
  tertiary-fixed-dim: '#73d8bf'
  on-tertiary-fixed: '#002019'
  on-tertiary-fixed-variant: '#005143'
  background: '#1e0f10'
  on-background: '#f9dcdb'
  surface-variant: '#423030'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 3.75rem
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.033em
  h1:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.015em
  h2:
    fontFamily: Space Grotesk
    fontSize: 1.875rem
    fontWeight: '700'
    lineHeight: '1.25'
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 0.875rem
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  section-gap: 4rem
  card-padding: 2rem
  gutter: 1.5rem
  header-height: 4.5rem
---

## Brand & Style
The brand identity for Data Megathos is "Futuristic Engineering." It combines the technical precision of a high-growth startup with the robust reliability of a strategic engineering partner. The visual style is a blend of **Modern-Corporate** and **Technical-Dark-Mode**, utilizing high-contrast accents against deep, sophisticated backgrounds.

The aesthetic prioritizes clarity and speed, using sharp geometric typography and subtle glassmorphic header treatments to evoke a sense of "cutting-edge" technology. It targets founders and SMEs who need a partner that is both innovative and operationally mature. The emotional response should be one of confidence, high-velocity performance, and technical superiority.

## Colors
The palette is built on a "Deep Crimson" foundation. The core of the experience is a dark-mode-first approach using `#26000a` as the primary background, creating a rich, premium atmosphere.

- **Primary:** A vibrant, high-energy red (`#dc314a`) used for calls to action and key brand iconography.
- **Surface Tiers:** Surfaces use progressive lightening of the red-tinted blacks (`#3d0a14` and `#541420`) to create logical grouping and depth without breaking the dark aesthetic.
- **Accents:** The use of `#25D366` is reserved exclusively for high-priority communication channels (WhatsApp), providing a stark, functional contrast.
- **Typography Colors:** Pure white is reserved for headlines, while `slate-300` and `slate-400` are used for body and secondary text to reduce eye strain in the dark environment.

## Typography
The system exclusively uses **Space Grotesk** to lean into its technical, geometric character. 

- **Headlines:** Use heavy weights (700-900) with tight letter spacing for a punchy, editorial feel. 
- **Body:** Maintains standard readability weights (400) but benefits from the font's wider apertures, which feel "open" and modern.
- **Contextual Labels:** Overline text or section headers use uppercase with increased tracking to denote categorization and hierarchy.

## Layout & Spacing
The layout follows a **Fixed-Width Grid** within a fluid container. Content is centered with a maximum width of 1200px. 

- **Rhythm:** A consistent 4-unit scale is used (4px, 8px, 16px, 24px, 32px, 64px). 
- **Verticality:** Large 64px (4rem) gaps between major sections ensure the technical content has room to breathe.
- **Padding:** Mobile views utilize 1rem side margins, scaling up to 5rem and 10rem on large desktops to maintain a focused central column.

## Elevation & Depth
Depth is established through **Tonal Stacking** and **High-Contrast Borders** rather than traditional shadows.

1.  **The Base:** The deepest layer is the `#26000a` background.
2.  **The Surface:** Cards and containers sit on top using `#3d0a14`.
3.  **The Stroke:** Every container is defined by a `1px` border (`#6b1a29`). This creates a structural, "blueprint" feel.
4.  **Glassmorphism:** The global header utilizes a `backdrop-blur-md` effect with a semi-transparent background to remain persistent without feeling heavy.
5.  **Shadows:** Shadows are used sparingly, specifically `shadow-lg` on hoverable cards to provide a subtle "lift" against the dark background.

## Shapes
The shape language is "Subtle Tech." It avoids the extreme roundness of consumer apps and the total sharpness of brutalism.

- **Standard Radius:** 0.5rem (8px) for primary containers and headers.
- **Large Radius:** 0.75rem (12px) for cards and hero sections to soften the large blocks of color.
- **Interactive Elements:** Buttons follow the standard 8px radius to maintain a consistent clickable footprint.
- **Icons:** Material Symbols are used with a thin to medium weight to match the stroke-based aesthetic of the UI.

## Components

### Buttons
- **Primary:** Solid `#dc314a` with white text. High-contrast, bold font weight, and horizontal tracking.
- **Secondary/Surface:** Background of `#3d0a14` with a `#6b1a29` border. Used for "Scale Your Team" type actions.
- **Hover States:** Buttons should brighten by 10% or increase border intensity on hover.

### Cards
- Service and Testimonial cards use the `#3d0a14` surface. 
- On hover, Service cards transition their border color to the primary red (`#dc314a`) and scale background decorative elements.
- Decorative "accent" circles in the corners of cards use a 5% opacity primary color.

### Navigation
- Sticky header with backdrop blur. Links use `text-sm` with a transition to the primary red on hover.

### Input Fields (Anticipated)
- Should follow the card style: `#3d0a14` background, `1px` border of `#6b1a29`, and a focused state that uses a primary red glow or stroke.
