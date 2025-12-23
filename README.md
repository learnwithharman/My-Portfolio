# My-Portfolio - Tech Innovator

**Live Demo:** [harman-portfolio-monk.vercel.app](https://harman-portfolio-monk.vercel.app/)

A stunning, modern portfolio website featuring a cosmic space theme with glassmorphism effects, neon accents, and smooth animations. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Space Theme**: Deep navy/black backgrounds with animated galaxy particle system
- **Glassmorphism UI**: Translucent cards with backdrop blur effects
- **Neon Accents**: Cyan (#8AE6FF) and Purple (#7C5CFF) highlights
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: High-end particles, hover effects, and transitions
- **Accessibility**: WCAG AA compliant with semantic HTML5
- **Performance Optimized**: Efficient loading and rendering

## 🎨 Design System

### Color Palette

```css
/* Primary Space Colors */
--space-black: 220 25% 5%     /* Deep space background */
--space-navy: 225 30% 8%      /* Secondary space background */
--space-deep: 228 35% 12%     /* Card backgrounds */

/* Neon Accent Colors */
--neon-cyan: 190 100% 76%     /* Primary accent (#8AE6FF) */
--neon-purple: 255 70% 65%    /* Secondary accent (#7C5CFF) */
--neon-blue: 210 100% 80%     /* Tertiary accent */

/* Text Colors */
--text-primary: 0 0% 98%      /* Primary text (white) */
--text-secondary: 210 15% 75% /* Secondary text (light gray) */
--text-muted: 210 10% 60%     /* Muted text (darker gray) */
```

### Typography

- **Headings**: Plus Jakarta Sans - Modern, professional tech typeface
- **Body Text**: Outfit - Sleek, geometric sans-serif for readability
- **Font Weights**: 300, 400, 500, 600, 700, 900

### Effects & Animations

- **Glassmorphism**: `backdrop-filter: blur(20px)` with subtle borders
- **Glow Effects**: Box shadows with neon colors at 0.5 opacity
- **Galaxy Particles**: WebGL-based dynamic background system
- **Hover Transitions**: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- **Reduced Motion**: Respects `prefers-reduced-motion` media query

## 📱 Sections

1. **Sticky Navigation**: Floating glass-morphism header with sleek profile
2. **Hero Section**: Cinematic "HARMAN" intro with blurred pop-down animation
3. **Featured Work**: Project grid with high-end glass cards and glows
4. **About Section**: Professional bio with interactive hover-blend avatar
5. **Skills Section**: Modern matrix grid with status indicators and learning path
6. **Contact/Footer**: Contact info and social links with premium styling

## 🛠 Technologies Used

- **React 18** - Component-based UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Premium animation library
- **OGL** - High-performance WebGL library for particles
- **Lucide React** - Beautiful, customizable icons

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd harman-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── Particles.tsx    # WebGL background
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx         # Hero section
│   ├── ProjectCard.tsx  # Individual project cards
│   ├── FeaturedWork.tsx # Projects grid section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   └── Contact.tsx      # Contact/footer section
├── assets/              # Images and static assets
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── index.css           # Global styles & design system
└── main.tsx            # App entry point
```

## 🎯 Key Design Decisions

### Performance
- **WebGL Background**: Optimized particle system for zero impact on scroll
- **Component Splitting**: Modular components for better code splitting
- **Efficient Animations**: Using specialized motion libraries for fluidity
- **Semantic HTML**: Proper heading hierarchy and ARIA labels

### Accessibility
- **Focus States**: High-contrast rings with neon accents
- **Alt Text**: Descriptive alt text for all visual assets
- **ARIA Labels**: Proper labeling for interactive elements
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Keyboard Navigation**: Full keyboard accessibility

### Responsive Design
- **Mobile-First**: Tailwind's mobile-first breakpoint system
- **Flexible Grid**: CSS Grid and Flexbox for adaptive layouts
- **Scalable Typography**: Responsive font sizes using Tailwind classes
- **Touch-Friendly**: Adequate touch targets for mobile devices

## 🎨 Customization

### Colors
All colors are defined as CSS custom properties in `src/index.css`. Update the HSL values to customize the theme:

```css
:root {
  --neon-cyan: 190 100% 76%;    /* Change primary accent */
  --neon-purple: 255 70% 65%;   /* Change secondary accent */
  /* ... other colors */
}
```

### Fonts
Updated to high-end professional pairings in `src/index.css`.

### Animations
Animation preferences are handled in CSS with `@media (prefers-reduced-motion: reduce)` for accessibility.

## 📄 Font & Color Sources

- **Plus Jakarta Sans**: [Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- **Outfit Font**: [Google Fonts](https://fonts.google.com/specimen/Outfit)
- **Color Inspiration**: Cosmic/space themes, cyberpunk aesthetics
- **Neon Colors**: Hand-picked for optimal contrast and visual appeal

## 📞 Contact & Social

- **Email**: officialharman69@gmail.com
- **LinkedIn**: [Harman](https://www.linkedin.com/in/rohit-kumar-325a40204)
- **Twitter**: [@Harmxn_2005](https://x.com/Harmxn_2005)

---

**Built with ❤️ and lots of ☕ in the cosmos** 🌌