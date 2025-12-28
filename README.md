# Harman's Portfolio - Modern Web Developer

**Live Demo:** [harman-portfolio-monk.vercel.app](https://harman-portfolio-monk.vercel.app/)

A stunning, modern portfolio website featuring a cosmic space theme with glassmorphism effects, neon accents, WebGL particle animations, and smooth interactive experiences. Built with React, TypeScript, and Tailwind CSS to showcase professional web development skills.

## ✨ Key Features

### 🎨 Premium Design System
- **Cosmic Space Theme**: Deep navy/black backgrounds with animated galaxy particle system powered by OGL (WebGL)
- **Glassmorphism UI**: Translucent cards with backdrop blur effects and subtle borders
- **Neon Accents**: Cyan (#8AE6FF), Purple (#7C5CFF), and Blue color palette with glow effects
- **Responsive Design**: Fully responsive across all device sizes with mobile-first approach
- **Accessibility**: WCAG AA compliant with semantic HTML5, proper ARIA labels, and keyboard navigation

### 🚀 Interactive Components

#### Hero Section
- **Variable Proximity Effect**: Interactive "HARMAN" text with dynamic font weight changes based on mouse position
- **Animated Badge**: "Available for Internship" status with pulsing indicator
- **Mouse-Follow Glow**: Subtle glow effect that follows cursor movement
- **Smooth Scroll Indicator**: Animated gradient line guiding users to scroll

#### Featured Work Section
- **Scroll-Triggered Animation**: Projects spread from center with smooth spring physics
- **Magic Cards**: Interactive project cards with particle effects and tilt animations
- **ChessWithMonk Showcase**: Professional-grade chess suite featuring Stockfish 16 integration
- **Coming Soon Placeholders**: Elegant placeholder cards for upcoming projects

#### About Section
- **Expandable Panel**: Click-to-reveal design that opens on scroll
- **Hover-Blend Avatar**: Dual-image avatar that transitions on hover
- **Animated Stats**: Project count, year, and passion metrics with staggered fade-in
- **Professional Bio**: Comprehensive background highlighting skills and aspirations

#### Skills Section
- **Skill Matrix Grid**: Categorized skills with visual status indicators
  - Core Languages: Java (Primary), C/C++, Python
  - Frontend Stack: HTML, CSS/Sass, JavaScript, React
  - Dev Ecosystem: Git, Docker, Linux CLI
- **Learning Path**: "Currently Learning" section showcasing ongoing skill development
- **Status Badges**: Visual indicators for Primary, Comfortable, and Learning skills

#### Contact Section
- **Contact Information**: Email, phone, and location with interactive links
- **Social Links**: LinkedIn, Twitter, Instagram with hover effects
- **CTA Card**: "Start a Project" call-to-action with gradient icon
- **Magic Card Effects**: Particle animations and glow effects on hover

#### Navigation
- **Sticky Glass Header**: Floating glassmorphism navigation bar
- **Smooth Scroll**: Anchor links with smooth scrolling behavior
- **Profile Badge**: Compact profile display in header

### 🎭 Advanced Effects
- **WebGL Particles**: High-performance galaxy background using OGL library
- **Framer Motion**: Smooth animations with spring physics and scroll-triggered reveals
- **Magic Cards**: Custom component with particle effects, glow, and tilt interactions
- **Click Sparks**: Interactive click feedback effects
- **Blur Text**: Animated text reveal effects
- **Reduced Motion Support**: Respects `prefers-reduced-motion` media query

## 🛠 Technology Stack

### Core Framework
- **React 18** - Modern component-based UI framework
- **TypeScript** - Type-safe JavaScript for robust code
- **Vite** - Lightning-fast build tool and dev server

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS Variables** - Design system with HSL color tokens
- **Google Fonts** - Plus Jakarta Sans (headings) & Outfit (body)

### Animation & Effects
- **Framer Motion** - Premium animation library with spring physics
- **OGL** - High-performance WebGL library for particle system
- **GSAP** - Professional-grade animation toolkit

### UI Components
- **Radix UI** - Accessible component primitives (Slot, Toast, Tooltip)
- **Lucide React** - Beautiful, customizable icon library
- **Custom Components** - MagicCard, VariableProximity, BlurText, ClickSpark

### Development Tools
- **ESLint** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing with Autoprefixer
- **React Router DOM** - Client-side routing

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── ui/                 # Reusable UI components
│   │   ├── MagicCard.tsx   # Interactive card with particles & glow
│   │   ├── VariableProximity.tsx  # Mouse proximity text effect
│   │   ├── BlurText.tsx    # Animated text blur effect
│   │   ├── ClickSpark.tsx  # Click feedback animation
│   │   ├── button.tsx      # Custom button component
│   │   ├── toast.tsx       # Toast notification system
│   │   ├── toaster.tsx     # Toast container
│   │   ├── sonner.tsx      # Alternative toast system
│   │   └── tooltip.tsx     # Tooltip component
│   ├── Particles.tsx       # WebGL galaxy background
│   ├── Navigation.tsx      # Sticky header navigation
│   ├── Hero.tsx            # Hero section with variable proximity
│   ├── FeaturedWork.tsx    # Projects showcase section
│   ├── ProjectCard.tsx     # Individual project card
│   ├── About.tsx           # Expandable about section
│   ├── Skills.tsx          # Skills matrix section
│   └── Contact.tsx         # Contact/footer section
├── assets/                 # Images and static assets
│   ├── hero-space.jpg      # Hero background image
│   ├── about-me-1.png      # About avatar (hover state)
│   ├── about-me-2.png      # About avatar (default state)
│   └── chesswithmonk-preview.png  # Project preview
├── pages/                  # Page components
│   ├── Index.tsx           # Main landing page
│   └── NotFound.tsx        # 404 page
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
│   └── utils.ts            # Helper utilities
├── index.css              # Global styles & design system
├── App.tsx                # App root component
└── main.tsx               # App entry point
```

## 🎨 Design System

### Color Palette

```css
/* Primary Space Colors */
--space-black: 220 25% 5%      /* Deep space background */
--space-navy: 225 30% 8%       /* Secondary space background */
--space-deep: 228 35% 12%      /* Card backgrounds */

/* Neon Accent Colors */
--neon-cyan: 190 100% 76%      /* Primary accent (#8AE6FF) */
--neon-purple: 255 70% 65%     /* Secondary accent (#7C5CFF) */
--neon-blue: 210 100% 80%      /* Tertiary accent */

/* Text Colors */
--text-primary: 0 0% 98%       /* Primary text (white) */
--text-secondary: 210 15% 75%  /* Secondary text (light gray) */
--text-muted: 210 10% 60%      /* Muted text (darker gray) */
```

### Typography

- **Headings**: Plus Jakarta Sans - Modern, professional tech typeface
- **Body Text**: Outfit - Sleek, geometric sans-serif for readability
- **Font Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 900 (Black)

### Effects & Animations

- **Glassmorphism**: `backdrop-filter: blur(20px)` with `background: rgba(255, 255, 255, 0.05)`
- **Glow Effects**: Box shadows with neon colors at 0.5 opacity
- **Galaxy Particles**: WebGL-based dynamic background with 100+ particles
- **Hover Transitions**: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- **Spring Physics**: Framer Motion spring animations with stiffness: 100, damping: 30
- **Scroll Animations**: useScroll and useTransform for parallax effects
- **Reduced Motion**: Respects `prefers-reduced-motion` for accessibility

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/bun installed
- Modern web browser with WebGL support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/learnwithharman/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   # or
   bun run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   # or
   bun run preview
   ```

## 🎯 Key Design Decisions

### Performance Optimization
- **WebGL Background**: Optimized particle system with minimal CPU/GPU impact
- **Component Code Splitting**: Modular components for efficient bundle splitting
- **Lazy Loading**: Images and components loaded on demand
- **Efficient Animations**: Using GPU-accelerated transforms and opacity
- **Semantic HTML**: Proper heading hierarchy and ARIA labels for SEO

### Accessibility Features
- **Focus States**: High-contrast focus rings with neon accents
- **Alt Text**: Descriptive alt text for all images
- **ARIA Labels**: Proper labeling for interactive elements and sections
- **Color Contrast**: WCAG AA compliant contrast ratios (4.5:1 minimum)
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Reduced Motion**: Animations disabled when user prefers reduced motion

### Responsive Design Strategy
- **Mobile-First**: Tailwind's mobile-first breakpoint system
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive layouts
- **Responsive Typography**: Fluid font sizes using Tailwind's responsive classes
- **Touch-Friendly**: Adequate touch targets (minimum 44x44px) for mobile
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

## 🎨 Customization Guide

### Updating Colors

All colors are defined as CSS custom properties in `src/index.css`:

```css
:root {
  --neon-cyan: 190 100% 76%;     /* Change primary accent */
  --neon-purple: 255 70% 65%;    /* Change secondary accent */
  --neon-blue: 210 100% 80%;     /* Change tertiary accent */
  /* ... other colors */
}
```

### Changing Fonts

Fonts are imported in `src/index.css` from Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
```

Update the font families in the Tailwind config:

```typescript
// tailwind.config.ts
fontFamily: {
  raleway: ['Plus Jakarta Sans', 'sans-serif'],
  plus: ['Outfit', 'sans-serif'],
}
```

### Modifying Animations

Animation preferences are handled with `@media (prefers-reduced-motion: reduce)` for accessibility. Adjust animation durations and easing in component files or global CSS.

## 📦 Featured Project

### ChessWithMonk
A professional-grade chess suite featuring:
- **Stockfish 16 Integration**: Deep chess analysis with world-class engine
- **Custom Puzzle Engine**: Verified chess puzzles with solutions
- **Lightning-Fast UI**: Optimized for competitive study with zero lag
- **Web Workers**: Background processing for smooth performance
- **Live Demo**: [chesswithmonkk.vercel.app](https://chesswithmonkk.vercel.app/)

## 📞 Contact & Social

- **Email**: [officialharman69@gmail.com](mailto:officialharman69@gmail.com)
- **LinkedIn**: [Harman](https://www.linkedin.com/in/harman-068394327)
- **Twitter**: [@Harmxn_2005](https://x.com/Harmxn_2005)
- **Instagram**: [@cozy.monkk](https://www.instagram.com/cozy.monkk/)
- **Location**: Punjab, India

## 🎓 About the Developer

2nd-year B.Tech Computer Science student passionate about building practical software systems and learning how real-world applications are designed and maintained. Focused on bridging the gap between complex logic and elegant user experiences.

**Currently Learning:**
- Data Structures & Algorithms (Java)
- REST API Design
- Cloud Fundamentals

**Looking for:** Internship opportunities in software development to gain practical industry experience.

---

**Built with ❤️ and lots of ☕ in the cosmos** 🌌

*Design Inspiration:* Cosmic/space themes, cyberpunk aesthetics, modern web design trends