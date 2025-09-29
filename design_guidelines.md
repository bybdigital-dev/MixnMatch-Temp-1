# Design Guidelines: Textiles Business Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium home goods retailers like West Elm and Pottery Barn, focusing on warm, approachable aesthetics that showcase textile quality and craftsmanship while maintaining clear navigation and conversion paths.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Cream: 45 15% 95% (primary background, light sections)
- Charcoal: 210 8% 25% (primary text, headers)
- Soft Gold: 45 55% 75% (accent, CTA buttons, highlights)  
- Forest Green: 150 30% 35% (secondary accent, trust elements)

**Usage Strategy:**
- Cream dominates backgrounds for warmth and readability
- Charcoal for all primary text and navigation elements
- Soft Gold sparingly for primary CTAs and important highlights
- Forest Green for secondary actions and trust indicators

### B. Typography
**Headings:** Elegant serif font (Playfair Display or similar) for sophistication
**Body Text:** Clean sans-serif (Inter or Source Sans Pro) for readability
**Sizes:** Large hero headings (48px+), section headers (32px), body text (16px)
**Hierarchy:** Bold weight variations to create clear content structure

### C. Layout System
**Spacing Units:** Consistent use of Tailwind units 4, 8, 12, 16, and 24
- Small elements: p-4, m-4
- Section spacing: py-12, my-16  
- Large containers: p-8, py-24
- Grid gaps: gap-8, gap-12

### D. Component Library
**Navigation:** Sticky header with prominent "Book Free Quote" button in soft gold
**Cards:** Product/service cards with subtle shadows and hover elevation
**Forms:** Clean input styling with charcoal borders and cream backgrounds
**Buttons:** Primary (soft gold), Secondary (forest green outline), Text (charcoal)
**Gallery:** Grid-based with filtering capabilities and lightbox functionality

### E. Key Features
- Hero banner with large background image and overlay text
- Service showcase sections with before/after galleries
- Testimonial cards with customer photos and quotes
- Product galleries with hover details and zoom functionality
- Contact form with service selection dropdown
- FAQ accordion sections
- Filterable portfolio gallery

## Images
**Hero Image:** Large lifestyle shot of beautiful interior with curtains/blinds as focal point
**Service Pages:** Before/after transformation photos, detailed product shots
**Product Gallery:** High-quality fabric swatches, yarn color wheels, bedding arrangements
**About Page:** Team photos, workshop/showroom images
**Placement:** Hero backgrounds, service feature cards, testimonial sections, product showcases

**Button Treatment:** All outline buttons over images should have blurred backgrounds for readability without custom hover states.

## Content Strategy
- Front-load key services and "Book Free Quote" CTA
- Showcase quality through high-resolution product photography
- Include trust signals: testimonials, before/after galleries, team credentials
- Clear service descriptions with benefits-focused copy
- Easy navigation between related services (fabrics → curtains, etc.)