import React from 'react';
import { Code, Server, Wrench, BookOpen, Rocket } from 'lucide-react';
import { MagicCard, MagicContainer } from '@/components/ui/MagicCard';

const Skills = () => {
  const skillCategories = [
    {
      icon: Server,
      title: "Core Languages",
      color: "neon-cyan",
      skills: [
        { name: "Java", status: "primary" },
        { name: "C/C++", status: "comfortable" },
        { name: "Python", status: "comfortable" }
      ]
    },
    {
      icon: Code,
      title: "Frontend Stack",
      color: "neon-purple",
      skills: [
        { name: "HTML", status: "comfortable" },
        { name: "CSS/Sass", status: "comfortable" },
        { name: "JavaScript", status: "comfortable" },
        { name: "React", status: "learning" }
      ]
    },
    {
      icon: Wrench,
      title: "Dev Ecosystem",
      color: "neon-blue",
      skills: [
        { name: "Git", status: "comfortable" },
        { name: "Docker", status: "learning" },
        { name: "Linux CLI", status: "learning" }
      ]
    }
  ];

  const learningNow = [
    { name: "Data Structures & Algorithms", icon: BookOpen, desc: "Mastering complex problem solving" },
    { name: "REST API Design", icon: Rocket, desc: "Building scalable interfaces" },
    { name: "Cloud Fundamentals", icon: Rocket, desc: "Modern infrastructure" }
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'primary':
        return 'bg-neon-cyan text-black shadow-glow';
      case 'comfortable':
        return 'glass border-white/10 text-white hover:border-white/30';
      case 'learning':
        return 'glass border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10';
      default:
        return 'glass border-white/10 text-white';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'primary':
        return 'Primary';
      case 'learning':
        return 'Learning';
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden" aria-labelledby="skills-heading">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center mb-20 px-6">
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-neon-cyan mb-4">Expertise</span>
          <h2
            id="skills-heading"
            className="font-raleway text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter"
          >
            Technical <span className="text-neon-purple">Arsenal</span>
          </h2>
          <p className="font-raleway text-xl text-text-secondary max-w-3xl font-light leading-relaxed">
            A curated list of technologies I use to build robust software systems,
            focused on performance and long-term maintainability.
          </p>
        </div>

        {/* Skill Matrix Grid */}
        <MagicContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((category, index) => (
            <MagicCard
              key={index}
              className="rounded-[32px] p-8 flex flex-col group border-white/5"
              glowColor={index === 0 ? "0, 242, 255" : index === 1 ? "132, 0, 255" : "0, 100, 255"}
              particleCount={8}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-2xl glass border-${category.color}/30 shadow-lg group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="font-raleway text-xl font-bold text-white uppercase tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 ${getStatusStyle(skill.status)}`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </MagicCard>
          ))}
        </MagicContainer>

        {/* Horizon Section - Learning Path */}
        <MagicContainer>
          <MagicCard
            className="rounded-[40px] p-10 md:p-16 border-white/5 relative overflow-hidden"
            glowColor="0, 242, 255"
            enableTilt={false}
            particleCount={15}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-20" />

            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-4 text-center lg:text-left">
                <h3 className="font-raleway text-3xl font-black text-white mb-4 tracking-tight uppercase">
                  Currently <br /> <span className="text-neon-cyan">Learning</span>
                </h3>
                <p className="font-raleway text-text-muted text-lg font-light">
                  Expanding my horizons to bridge the gap between design and engineering.
                </p>
              </div>

              <div className="lg:col-span-8 grid md:grid-cols-3 gap-6">
                {learningNow.map((item, index) => (
                  <div
                    key={index}
                    className="glass p-6 rounded-2xl border-white/5 hover:border-neon-purple/30 transition-all group flex flex-col gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white uppercase tracking-wider mb-1 mt-2">{item.name}</div>
                      <div className="text-[10px] text-text-muted font-medium italic">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MagicCard>
        </MagicContainer>
      </div>
    </section>
  );
};

export default Skills;