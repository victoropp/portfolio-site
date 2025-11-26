'use client';

import Link from 'next/link';
import { Project } from '@/lib/types';
import MetricsDisplay from './MetricsDisplay';
import TechStackBadges from './TechStackBadges';
import DemoEmbed from './DemoEmbed';
import ProjectCard from './ProjectCard';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

interface ProjectDetailClientProps {
  project: Project;
  relatedProjects: Project[];
}

export default function ProjectDetailClient({ project, relatedProjects }: ProjectDetailClientProps) {

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card/30 to-background">
      {/* Back Button */}
      <div className="container-custom pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Project Content - Simplified for Phase 1 */}
      <div className="container-custom py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {project.title}
        </h1>

        <p className="text-xl text-muted-foreground mb-8">{project.tagline}</p>

        <div className="mb-8">
          <TechStackBadges techStack={project.techStack} />
        </div>

        {project.businessImpact && (
          <div className="mb-12">
            <MetricsDisplay businessImpact={project.businessImpact} />
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
          <p className="text-muted-foreground">{project.overview}</p>
        </div>

        {project.demoUrl && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Live Demo</h2>
            <DemoEmbed demoUrl={project.demoUrl} title={project.title} />
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4 mt-12">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card hover:bg-card/80 text-foreground rounded-lg transition-colors"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              Open Demo
            </a>
          )}
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
