import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ProjectCard from './ProjectCard';
import chessImage from '@/assets/chesswithmonk-preview.png';
import { MagicContainer, MagicCard } from '@/components/ui/MagicCard';

const FeaturedWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate spread offsets - only animate X on desktop
  const leftX = useTransform(smoothProgress, [0, 1], [window.innerWidth > 768 ? "100%" : "0%", "0%"]);
  const rightX = useTransform(smoothProgress, [0, 1], [window.innerWidth > 768 ? "-100%" : "0%", "0%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(smoothProgress, [0, 1], [0.8, 1]);

  const projects = [
    {
      title: "ChessWithMonk",
      description: "A professional-grade chess suite featuring Stockfish 16 integration for deep analysis, a custom puzzle engine with verified solutions, and a lightning-fast UI optimized for competitive study. Experience chess with zero lag and premium analytics.",
      image: chessImage,
      technologies: ["React", "TypeScript", "Stockfish", "Web Workers", "Tailwind"],
      liveUrl: "https://chesswithmonkk.vercel.app/",
      featured: true
    }
  ];

  return (
    <section id="work" ref={containerRef} className="py-32 px-6 relative overflow-hidden" aria-labelledby="work-heading">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neon-purple mb-4">Portfolio</span>
          <h2
            id="work-heading"
            className="font-raleway text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            My <span className="text-neon-cyan">Projects</span>
          </h2>
          <p className="font-raleway text-lg text-text-secondary max-w-2xl font-light leading-relaxed">
            A selection of my recent technical projects and ongoing industrial research.
          </p>
        </div>

        <MagicContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* First Project (Left) */}
          <motion.div style={{ x: leftX, opacity, scale }} className="h-full">
            <ProjectCard {...projects[0]} />
          </motion.div>

          {/* Second Project (Center/Coming Soon) */}
          <motion.div style={{ opacity, scale }} className="h-full">
            <MagicCard
              className="group h-full flex flex-col border-dashed border-white/10 border-2 min-h-[400px] rounded-3xl"
              glowColor="132, 0, 255"
              enableTilt={true}
              particleCount={6}
            >
              <div className="relative z-10 p-8 flex flex-col items-center justify-center flex-grow text-center">
                <div className="w-16 h-16 rounded-full glass border-white/10 flex items-center justify-center mb-6 text-white/20 group-hover:text-neon-purple transition-colors duration-500">
                  <span className="text-2xl font-bold italic">?</span>
                </div>
                <h3 className="font-raleway text-xl font-bold text-white/40 mb-3 uppercase tracking-wider group-hover:text-white transition-colors">
                  Coming Soon
                </h3>
                <p className="text-sm text-text-muted max-w-[200px]">
                  Innovating the next digital experience. Stay tuned.
                </p>
              </div>
            </MagicCard>
          </motion.div>

          {/* Third Project (Right/Coming Soon) */}
          <motion.div style={{ x: rightX, opacity, scale }} className="h-full">
            <MagicCard
              className="group h-full flex flex-col border-dashed border-white/10 border-2 min-h-[400px] rounded-3xl"
              glowColor="132, 0, 255"
              enableTilt={true}
              particleCount={6}
            >
              <div className="relative z-10 p-8 flex flex-col items-center justify-center flex-grow text-center">
                <div className="w-16 h-16 rounded-full glass border-white/10 flex items-center justify-center mb-6 text-white/20 group-hover:text-neon-purple transition-colors duration-500">
                  <span className="text-2xl font-bold italic">?</span>
                </div>
                <h3 className="font-raleway text-xl font-bold text-white/40 mb-3 uppercase tracking-wider group-hover:text-white transition-colors">
                  Coming Soon
                </h3>
                <p className="text-sm text-text-muted max-w-[200px]">
                  Innovating the next digital experience. Stay tuned.
                </p>
              </div>
            </MagicCard>
          </motion.div>
        </MagicContainer>
      </div>
    </section>
  );
};

export default FeaturedWork;