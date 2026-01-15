import React, { useRef, useEffect } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-space.jpg';
import VariableProximity from '@/components/ui/VariableProximity';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 md:py-32 flex flex-col items-center justify-center"
      aria-labelledby="hero-heading"
    >
      {/* Immersive Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 scale-110"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="presentation"
        aria-hidden="true"
      />

      {/* Multi-layered Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--space-black))_100%)]" />
      <div className="absolute inset-0 bg-gradient-cosmic opacity-60" />

      {/* Bottom Section Blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(var(--space-black))] to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 md:px-6 w-full max-w-[90vw] 2xl:max-w-[80vw] mx-auto flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-neon-cyan/20 text-neon-cyan text-xs md:text-sm font-medium mb-8 md:mb-12 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
          </span>
          Available for Internship
        </div>

        <div className="relative group/title cursor-default" ref={containerRef}>
          <VariableProximity
            label="HARMAN"
            className="font-raleway text-[15vw] sm:text-[12vw] md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold text-white mb-6 md:mb-8 tracking-tighter leading-[0.9] transition-colors duration-300"
            fromFontVariationSettings="'wght' 800"
            toFontVariationSettings="'wght' 950"
            containerRef={containerRef}
            radius={200}
            falloff="gaussian"
          />
          {/* Mouse follow glow */}
          <div
            className="absolute -inset-10 bg-neon-cyan/20 blur-3xl rounded-full opacity-0 group-hover/title:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-screen"
            style={{
              left: 'var(--mouse-x, 50%)',
              top: 'var(--mouse-y, 50%)',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>

        <div className="flex flex-col items-center gap-6">
          <p className="font-raleway text-2xl md:text-4xl text-text-secondary font-light tracking-tight max-w-3xl">
            Building the next generation of <span className="text-white font-medium">real-world application systems.</span>
          </p>

          <p className="font-raleway text-lg text-text-muted max-w-xl leading-relaxed mb-8">
            2nd-year CSE student passionate about bridging the gap between <br className="hidden md:block" />
            complex logic and elegant user experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-4">
          <Button
            variant="default"
            size="lg"
            className="bg-neon-cyan hover:bg-neon-cyan/80 text-space-black font-bold h-12 md:h-14 px-6 md:px-10 rounded-2xl shadow-neon hover:scale-105 transition-all duration-300 group text-sm md:text-base"
            asChild
          >
            <a href="#work" className="flex items-center gap-3">
              View Flagship Project
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="h-12 md:h-14 px-6 md:px-10 rounded-2xl border border-white/10 hover:border-neon-purple hover:bg-neon-purple/5 text-white font-semibold transition-all duration-300 group text-sm md:text-base"
            asChild
          >
            <a href="/resume.pdf" download className="flex items-center gap-3">
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Fancy Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;