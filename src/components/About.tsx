import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import about1 from '@/assets/about-me-1.png';
import about2 from '@/assets/about-me-2.png';
import { MagicCard, MagicContainer } from '@/components/ui/MagicCard';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.3
  });

  useEffect(() => {
    if (isInView) {
      setIsExpanded(true);
    }
  }, [isInView]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 px-6 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Clickable Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex flex-col items-center group transition-all duration-300"
          aria-expanded={isExpanded}
        >
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-neon-purple mb-4">Background</span>
          <div className="flex items-center gap-6">
            <h2
              id="about-heading"
              className="font-raleway text-4xl md:text-7xl font-extrabold text-white tracking-tighter transition-all duration-500 group-hover:text-neon-cyan"
            >
              About <span className="text-white">Me</span>
            </h2>
            <ChevronRight
              size={48}
              className={`text-neon-cyan transition-all duration-500 transform ${isExpanded ? 'rotate-90' : 'animate-bounce-x'}`}
            />
          </div>

          <div className={`flex flex-col items-center gap-2 mt-8 transition-all duration-700 ${isExpanded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            <span className="text-sm font-light text-text-muted italic tracking-widest uppercase">
              {isInView ? 'Click to hide' : 'Scroll to reveal story'}
            </span>
            <div className="flex gap-2">
              <span className="inline-block animate-bounce-arrow text-neon-cyan">↓</span>
              <span className="inline-block animate-bounce-arrow text-neon-cyan" style={{ animationDelay: '100ms' }}>↓</span>
              <span className="inline-block animate-bounce-arrow text-neon-cyan" style={{ animationDelay: '200ms' }}>↓</span>
            </div>
          </div>
        </button>

        {/* Content Panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 80 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <MagicContainer>
                <MagicCard
                  className="rounded-2xl p-6 md:p-12 border-white/5"
                  glowColor="132, 0, 255"
                  particleCount={10}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">
                    <div className="md:col-span-1 flex justify-center md:justify-start">
                      <div className="relative group/avatar">
                        <div className="w-56 h-56 rounded-3xl p-[2px] bg-white/10 group-hover/avatar:bg-gradient-neon transition-all duration-500 transform group-hover/avatar:rotate-2">
                          <div className="w-full h-full rounded-[22px] bg-space-black overflow-hidden relative">
                            <img
                              src={about2}
                              alt="Harman professional"
                              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover/avatar:opacity-0"
                            />
                            <img
                              src={about1}
                              alt="Harman alternate"
                              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover/avatar:opacity-100 scale-110 group-hover/avatar:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-space-black/60 to-transparent opacity-60" />
                          </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full glass border-neon-cyan/50 flex items-center justify-center text-neon-cyan font-plus text-xl font-black z-20 shadow-glow">
                          H
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-cyan rounded-full animate-pulse" />
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                        <div className="absolute top-1/2 -right-4 w-3 h-3 bg-neon-blue rounded-full animate-ping" />
                      </div>
                    </div>

                    <div className="md:col-span-2 text-left">
                      <div className="space-y-4 text-text-secondary leading-relaxed font-raleway">
                        <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                          Hello! I'm <span className="text-neon-cyan font-semibold">Harman</span>, a 2nd-year B.Tech Computer Science student from Punjab, India,
                          with an interest in building practical software systems and learning how real-world applications are designed and maintained.
                        </p>
                        <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                          I have a good working knowledge of <span className="text-neon-purple font-medium">HTML, CSS, and JavaScript</span>, and I'm comfortable
                          creating interactive web interfaces and handling basic frontend logic and responsiveness. I also have a foundation in
                          <span className="text-neon-blue font-medium"> C/C++ and Python</span>, and I'm currently improving my Data Structures and Algorithms
                          skills with a focus on strengthening problem-solving ability in JAVA.
                        </p>
                        <p className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                          I enjoy working on hands-on projects that help me understand how different parts of a system come together, from logic
                          and state handling to user experience. While I do not yet have formal industry experience, I bring a willingness to learn,
                          consistency, and a problem-solving mindset, and I'm eager to gain practical exposure through internship opportunities
                          in software development.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mt-8">
                        <div className="text-center glass p-4 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                          <div className="font-plus text-2xl font-bold text-neon-cyan">1+</div>
                          <div className="text-sm text-text-muted uppercase tracking-widest text-[10px] font-bold">Project</div>
                        </div>
                        <div className="text-center glass p-4 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                          <div className="font-plus text-2xl font-bold text-neon-purple">2nd</div>
                          <div className="text-sm text-text-muted uppercase tracking-widest text-[10px] font-bold">Year</div>
                        </div>
                        <div className="text-center glass p-4 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                          <div className="font-plus text-2xl font-bold text-neon-blue">∞</div>
                          <div className="text-sm text-text-muted uppercase tracking-widest text-[10px] font-bold">Passion</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </MagicCard>
              </MagicContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(8px); }
        }
        @keyframes bounce-arrow {
          0%, 100% { opacity: 0.3; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(4px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-x { animation: bounce-x 1s ease-in-out infinite; }
        .animate-bounce-arrow { animation: bounce-arrow 1.5s ease-in-out infinite; color: hsl(var(--neon-cyan)); }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; opacity: 0; }
      `}</style>
    </section>
  );
};

export default About;