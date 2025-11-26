'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/lib/types/project';
import { ExternalLink, Github } from 'lucide-react';
import { useHydrated } from '@/lib/hooks/useHydrated';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const displayedTechStack = project.techStack.slice(0, 4);
  const remainingCount = project.techStack.length - 4;
  const hydrated = useHydrated();

  // Before hydration: render without animation to ensure visibility
  const motionProps = hydrated
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: index * 0.1 },
        whileHover: { scale: 1.02, y: -8 },
      }
    : {
        initial: false,
        animate: false,
      };

  return (
    <motion.div
      {...motionProps}
      className="group relative h-full"
    >
      {/* Card container with glassmorphism */}
      <div className="relative h-full rounded-2xl border border-border bg-gradient-to-br from-card/90 to-card/80 backdrop-blur-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,217,255,0.3)]">

        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
          {/* Placeholder for thumbnail - will be replaced with actual images */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-cyan-500/20">
              {project.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
            </div>
          </div>

          {/* Key metric badge overlay */}
          <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 px-4 py-2 shadow-lg">
            <div className="text-xs font-semibold text-white">
              {project.keyMetric.label}
            </div>
            <div className="text-lg font-bold text-white">
              {project.keyMetric.value}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2">
            {displayedTechStack.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-full bg-purple-500/20 border border-purple-500/30 px-3 py-1 text-xs font-medium text-purple-300"
              >
                {tech}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="rounded-full bg-muted/20 border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                +{remainingCount} more
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Link
              href={`/projects/${project.slug}`}
              className="flex-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-center text-sm font-semibold text-white transition-all hover:from-cyan-600 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              View Details
            </Link>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg border border-border bg-card/50 px-4 py-2 text-sm font-semibold text-muted-foreground transition-all hover:border-border hover:bg-card/80"
            >
              <Github className="h-4 w-4" />
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg border border-border bg-card/50 px-4 py-2 text-sm font-semibold text-muted-foreground transition-all hover:border-border hover:bg-card/80"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
