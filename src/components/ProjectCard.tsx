import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MagicCard } from '@/components/ui/MagicCard';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  featured = false
}) => {
  return (
    <MagicCard
      className={`group h-full flex flex-col rounded-3xl ${featured ? 'border-neon-cyan/30' : 'border-white/10'}`}
      particleCount={10}
      glowColor={featured ? "0, 242, 255" : "132, 0, 255"}
    >
      {/* Background Glow Layer handled by MagicCard, adding custom subtle one */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Visual Header */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center gap-4">
          {liveUrl && (
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full glass border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black hover:scale-110 transition-all"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                <ExternalLink size={20} />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 p-8 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-plus text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors tracking-tight">
            {title}
          </h3>
          {featured && (
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-neon-cyan/50 text-neon-cyan">
              Featured
            </span>
          )}
        </div>

        <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        {/* Modern Tag System */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/5 text-white/60 border border-white/10 rounded-lg group-hover:border-neon-cyan/30 group-hover:text-neon-cyan transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </MagicCard>
  );
};

export default ProjectCard;