import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-space.jpg';
import BlurText from './BlurText';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-32"
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
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[hsl(var(--space-black))] to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-cyan/20 text-neon-cyan text-sm font-medium mb-12 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
          </span>
          Available for Internship
        </div>

        <BlurText
          text="HARMAN"
          animateBy="letters"
          direction="top"
          delay={50}
          className="font-plus text-5xl md:text-8xl lg:text-9xl font-extrabold text-white glow-text mb-8 tracking-tighter leading-[0.9]"
        />

        <div className="flex flex-col items-center gap-6">
          <p className="text-2xl md:text-4xl text-text-secondary font-light tracking-tight max-w-3xl">
            Building the next generation of <span className="text-white font-medium">real-world application systems.</span>
          </p>

          <p className="text-lg text-text-muted max-w-xl leading-relaxed mb-8">
            2nd-year CSE student passionate about bridging the gap between <br className="hidden md:block" />
            complex logic and elegant user experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-4">
          <Button
            variant="default"
            size="lg"
            className="bg-neon-cyan hover:bg-neon-cyan/80 text-space-black font-bold h-14 px-10 rounded-2xl shadow-neon hover:scale-105 transition-all duration-300 group"
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
            className="h-14 px-10 rounded-2xl border border-white/10 hover:border-neon-purple hover:bg-neon-purple/5 text-white font-semibold transition-all duration-300 group"
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