import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Home, Briefcase, User, Zap, Mail } from 'lucide-react';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
};

export interface PillNavProps {
  logo?: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
}

const Navigation: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items = [
    { href: '#home', label: 'Home' },
    { href: '#work', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ],
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#000000',
  pillColor = '#ffffff',
  hoveredPillTextColor = '#000000',
  pillTextColor = '#ffffff',
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoImgRef = useRef<HTMLDivElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | HTMLElement | null>(null);

  // Helper to get icon based on label
  const getIcon = (label: string) => {
    const size = 18;
    switch (label.toLowerCase()) {
      case 'home': return <Home size={size} />;
      case 'projects': return <Briefcase size={size} />;
      case 'about': return <User size={size} />;
      case 'skills': return <Zap size={size} />;
      case 'contact': return <Mail size={size} />;
      default: return null;
    }
  };

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;

        // Use desktop container for measurements if possible, or fallback
        // On mobile, these refs might render differently, so we check existence
        const wrapper = circle.closest('.desktop-pill-wrapper');
        if (!wrapper) return;

        const pill = wrapper as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const white = pill.querySelector<HTMLElement>('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => { });
    }

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navItems = navItemsRef.current;

      if (logoEl) {
        gsap.set(logoEl, { scale: 0 });
        gsap.to(logoEl, {
          scale: 1,
          duration: 0.6,
          ease
        });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: 'hidden' });
        gsap.to(navItems, {
          width: 'auto',
          duration: 0.6,
          ease
        });
      }
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const cssVars = {
    ['--base']: '#00F2FF', // neon-cyan equivalent
    ['--pill-bg']: '#ffffff10', // glass effect
    ['--hover-text']: '#000000',
    ['--pill-text']: '#ffffff',
    ['--nav-h']: '48px',
    ['--logo']: '40px',
    ['--pill-pad-x']: '20px',
    ['--pill-gap']: '6px',
    ['--mobile-pad-x']: '12px'
  } as React.CSSProperties;

  return (
    <div className="fixed top-6 z-[1000] w-full flex justify-center pointer-events-none">
      <nav
        className={`w-max flex items-center justify-center box-border px-4 md:px-0 pointer-events-auto ${className}`}
        aria-label="Primary"
        style={cssVars}
      >
        <a
          href="#home"
          aria-label="Home"
          onMouseEnter={handleLogoEnter}
          ref={el => {
            logoRef.current = el;
          }}
          className="rounded-full px-5 inline-flex items-center justify-center overflow-hidden glass border-none"
          style={{
            height: 'var(--nav-h)',
            background: 'var(--base)'
          }}
        >
          <div ref={logoImgRef} className="font-plus text-base font-extrabold text-black uppercase tracking-widest">
            Monk
          </div>
        </a>

        {/* Combined Nav Container */}
        <div
          ref={navItemsRef}
          className="relative flex items-center rounded-full ml-3 glass border-none px-1"
          style={{
            height: 'var(--nav-h)',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: 'var(--pill-gap)' }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              // Use active state for both mobile and desktop indicators
              // Mobile style (icon only)
              const mobileClasses = 'px-3 md:hidden flex items-center justify-center text-white hover:text-[#00F2FF] transition-colors';

              // Desktop style (text pill with hover effect)
              const desktopClasses = 'hidden md:inline-flex desktop-pill-wrapper px-0 h-full';

              const pillStyle: React.CSSProperties = {
                background: 'transparent',
                color: 'var(--pill-text)',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)'
              };

              // Desktop Content (Existing liquid hover)
              const DesktopContent = (
                <div className={desktopClasses} style={pillStyle}>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{
                      background: 'var(--base)',
                      willChange: 'transform'
                    }}
                    aria-hidden="true"
                    ref={el => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-[1] z-[2] self-center">
                    <span
                      className="pill-label relative z-[2] inline-block leading-[1]"
                      style={{ willChange: 'transform' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                      style={{
                        color: 'var(--hover-text)',
                        willChange: 'transform, opacity'
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[4px] -translate-x-1/2 w-1.5 h-1.5 rounded-full z-[4]"
                      style={{ background: 'var(--base)' }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              );

              // Mobile Content (Icon)
              const MobileContent = (
                <div className={mobileClasses}>
                  {getIcon(item.label) || <span>{item.label.substring(0, 2)}</span>}
                </div>
              );

              return (
                <li key={item.href} role="none" className="flex h-full items-center">
                  <a
                    role="menuitem"
                    href={item.href}
                    className="relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-bold text-[13px] uppercase tracking-wider whitespace-nowrap cursor-pointer px-0 transition-colors duration-300"
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    {DesktopContent}
                    {MobileContent}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;