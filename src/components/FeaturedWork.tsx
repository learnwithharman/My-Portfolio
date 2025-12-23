import React from 'react';
import ProjectCard from './ProjectCard';
import chessImage from '@/assets/chesswithmonk-preview.png';

const FeaturedWork = () => {
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
    <section id="work" className="py-32 px-6 relative overflow-hidden" aria-labelledby="work-heading">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neon-purple mb-4">Portfolio</span>
          <h2
            id="work-heading"
            className="font-plus text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            My <span className="text-neon-cyan">Projects</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl font-light leading-relaxed">
            A selection of my recent technical projects and ongoing industrial research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          ))}

          {/* Coming Soon Placeholders */}
          {[1, 2].map((i) => (
            <article key={i} className="group relative rounded-3xl overflow-hidden glass-card h-full flex flex-col border-dashed border-white/10 border-2 min-h-[400px]">
              <div className="relative z-10 p-8 flex flex-col items-center justify-center flex-grow text-center">
                <div className="w-16 h-16 rounded-full glass border-white/10 flex items-center justify-center mb-6 text-white/20 group-hover:text-neon-purple transition-colors duration-500">
                  <span className="text-2xl font-bold italic">?</span>
                </div>
                <h3 className="font-plus text-xl font-bold text-white/40 mb-3 uppercase tracking-wider group-hover:text-white transition-colors">
                  Coming Soon
                </h3>
                <p className="text-sm text-text-muted max-w-[200px]">
                  Innovating the next digital experience. Stay tuned.
                </p>
              </div>

              {/* Decorative Subtle ping */}
              <div className="absolute bottom-4 right-4 h-1 w-1 bg-white/20 rounded-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;