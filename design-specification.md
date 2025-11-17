# Andrić Law Website Redesign Specification

## Overview
This specification outlines a modern, professional redesign of the Andrić Law website, focusing on improved user experience, accessibility, mobile responsiveness, and visual appeal while maintaining the site's purpose as a law firm website with multilingual support.

## Current State Analysis
- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS
- **Languages**: Bosnian (bs) and English (en)
- **Pages**: Home, About, Law Viewer, News (Blog), Booking, Contact, Privacy
- **Current Colors**: Primary #0b3d60 (dark blue), Secondary #d4a017 (gold), Accent #1e8090 (teal)
- **Fonts**: Source Sans 3 (sans-serif), Merriweather (serif)

## Design Goals
1. **Improved Navigation & User Flow**: Focus on mobile menu usability and intuitive navigation
2. **Enhanced Mobile Experience**: Mobile-first responsive design
3. **Modern Professional Aesthetics**: Refined visual design while keeping blue/gold theme
4. **Accessibility Compliance**: WCAG 2.1 AA standards
5. **Performance Optimization**: Maintain fast loading times
6. **Multilingual Support**: Seamless experience across languages

## Color Palette & Design Tokens

### Refined Color Scheme
```css
/* Primary Colors */
--primary-50: #f0f4f8;
--primary-100: #d9e6f0;
--primary-200: #b3cde1;
--primary-300: #8db4d2;
--primary-400: #4a7ba7;
--primary-500: #0b3d60;  /* Current primary */
--primary-600: #0a3554;
--primary-700: #082c47;
--primary-800: #06233a;
--primary-900: #041a2d;

/* Secondary (Gold) Colors */
--secondary-50: #fefce8;
--secondary-100: #fef9c3;
--secondary-200: #fef08a;
--secondary-300: #fde047;
--secondary-400: #facc15;
--secondary-500: #d4a017;  /* Current secondary */
--secondary-600: #ca8f0b;
--secondary-700: #a16207;
--secondary-800: #854d0e;
--secondary-900: #713f12;

/* Neutral Colors */
--slate-50: #f8fafc;
--slate-100: #f1f5f9;
--slate-200: #e2e8f0;
--slate-300: #cbd5e1;
--slate-400: #94a3b8;
--slate-500: #64748b;
--slate-600: #475569;
--slate-700: #334155;
--slate-800: #1e293b;
--slate-900: #0f172a;

/* Semantic Colors */
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;
```

### Typography Scale
```css
/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line Heights */
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Spacing Scale
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

## Navigation Improvements

### Mobile Menu Redesign
- **Slide-out Drawer**: Replace hamburger menu with a modern slide-out drawer from the right
- **Improved Touch Targets**: Minimum 44px touch targets for all interactive elements
- **Visual Hierarchy**: Clear section grouping with icons and better typography
- **Language Switcher**: Prominent placement within mobile menu
- **Contact CTA**: Sticky contact button at bottom of mobile menu

### Desktop Navigation
- **Sticky Header**: Header becomes sticky on scroll with subtle background blur
- **Dropdown Menus**: For services/practice areas with hover states
- **Active States**: Clear indication of current page
- **Call-to-Action**: Prominent "Book Consultation" button

### Breadcrumb Navigation
- Add breadcrumb navigation for deeper pages (blog posts, law viewer)
- Consistent placement below header
- Mobile-responsive design

## Page Wireframes & Layouts

### Home Page Layout
```
┌─────────────────────────────────────────────────┐
│ [Sticky Header with improved mobile menu]       │
├─────────────────────────────────────────────────┤
│ [Hero Section - Modern gradient background]     │
│ • Headline with refined typography              │
│ • Two CTAs: "Book Consultation" + "Learn More"  │
│ • Trust indicators (years of experience, etc.)  │
├─────────────────────────────────────────────────┤
│ [Services Overview - Card grid layout]          │
│ • 6 main practice areas in responsive grid      │
│ • Icons + brief descriptions                    │
├─────────────────────────────────────────────────┤
│ [About Section - Side-by-side layout]           │
│ • Mission statement                            │
│ • Process timeline (3 steps)                    │
├─────────────────────────────────────────────────┤
│ [Testimonials - Carousel/slider]                │
│ • Client testimonials with photos              │
│ • Star ratings and case outcomes               │
├─────────────────────────────────────────────────┤
│ [Latest News - Article preview cards]           │
│ • 3 latest blog posts                          │
│ • "View All" link to news page                 │
├─────────────────────────────────────────────────┤
│ [CTA Section - Full width background]           │
│ • "Ready to discuss your case?"                │
│ • Phone + Email contact options                │
├─────────────────────────────────────────────────┤
│ [Footer - Improved layout]                     │
└─────────────────────────────────────────────────┘
```

### Booking Page Layout
```
┌─────────────────────────────────────────────────┐
│ [Header + Breadcrumbs]                          │
├─────────────────┬───────────────────────────────┤
│ Contact Info    │ Booking Form                  │
│ • Address       │ • Name, Email, Phone fields   │
│ • Phone         │ • Service selection dropdown  │
│ • Email         │ • Date/time picker            │
│ • Hours         │ • Message textarea            │
│ • Map embed     │ • Privacy checkbox            │
│                 │ • Submit button               │
└─────────────────┴───────────────────────────────┘
```

### Contact Page Layout
```
┌─────────────────────────────────────────────────┐
│ [Header + Breadcrumbs]                          │
├─────────────────────────────────────────────────┤
│ [Contact Form - Centered card layout]           │
│ • Full-width form with improved validation     │
│ • Progress indicator for multi-step form       │
├─────────────────────────────────────────────────┤
│ [Contact Details - 3-column grid]               │
│ • Phone, Email, Address cards                 │
│ • Click-to-call/email functionality           │
├─────────────────────────────────────────────────┤
│ [Office Location - Map integration]             │
│ • Interactive map with directions             │
├─────────────────────────────────────────────────┤
│ [FAQ Section - Accordion]                       │
│ • Common questions about services             │
└─────────────────────────────────────────────────┘
```

## Component Library

### New Components to Create
1. **MobileMenu**: Slide-out drawer with improved UX
2. **ServiceCard**: Practice area cards with icons and hover effects
3. **TestimonialCard**: Client testimonial cards with ratings
4. **CTAButton**: Consistent button styles with loading states
5. **FormField**: Accessible form inputs with validation
6. **Breadcrumb**: Navigation breadcrumb component
7. **HeroSection**: Flexible hero component with background options
8. **FeatureGrid**: Responsive grid for services/features
9. **ContactCard**: Contact information display cards

### Enhanced Existing Components
- **Header**: Add sticky behavior and improved mobile menu
- **Footer**: Better organization and social media links
- **AppointmentForm**: Multi-step form with progress indicator
- **ArticlesPreview**: Improved card design and pagination

## Accessibility Enhancements

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 ratio for normal text, 3:1 for large text
- **Focus Indicators**: Visible focus outlines on all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Alt Text**: Descriptive alt text for all images
- **Form Labels**: Associated labels for all form inputs
- **Error Handling**: Clear error messages and validation feedback

### Implementation Details
- Use semantic HTML elements (`<main>`, `<nav>`, `<section>`, etc.)
- Implement skip links for keyboard users
- Ensure sufficient color contrast ratios
- Add ARIA attributes where needed
- Test with screen readers (NVDA, JAWS, VoiceOver)

## Mobile Responsiveness

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Mobile-First Approach
- Design for mobile first, then enhance for larger screens
- Touch-friendly interface (minimum 44px touch targets)
- Optimized typography scaling
- Efficient use of screen real estate
- Fast loading on mobile networks

### Performance Considerations
- Optimize images for different screen sizes
- Lazy loading for below-the-fold content
- Minimize CSS and JavaScript bundle sizes
- Use modern image formats (WebP with fallbacks)

## Implementation Plan

### Phase 1: Foundation
1. Update Tailwind configuration with new design tokens
2. Create new component library structure
3. Implement accessibility utilities
4. Set up responsive design system

### Phase 2: Core Components
1. Redesign Header with improved mobile menu
2. Update Footer layout
3. Create new ServiceCard and TestimonialCard components
4. Implement CTAButton and FormField components

### Phase 3: Page Updates
1. Redesign Home page with new layout
2. Update Booking page with improved form
3. Enhance Contact page with better UX
4. Update remaining pages (About, News, Law Viewer)

### Phase 4: Polish & Testing
1. Cross-browser testing
2. Accessibility audit
3. Performance optimization
4. User testing and feedback

## Success Metrics
- Improved mobile usability scores
- Better accessibility compliance
- Increased conversion rates on booking forms
- Positive user feedback on navigation
- Maintained or improved page load times

## Technical Considerations
- Maintain Next.js 13+ App Router structure
- Preserve i18n functionality
- Ensure SEO optimization
- Keep existing API integrations
- Maintain performance standards

This specification provides a comprehensive roadmap for modernizing the Andrić Law website while maintaining its professional credibility and legal service focus.