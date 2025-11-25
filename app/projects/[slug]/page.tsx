import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/lib/data/projects';
import ProjectDetailClient from '@/components/projects/ProjectDetailClient';

// Required for static export with dynamic routes
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Get related projects (same domain, exclude current)
  const relatedProjects = projects
    .filter((p) => p.domain === project.domain && p.id !== project.id)
    .slice(0, 3);

  return <ProjectDetailClient project={project} relatedProjects={relatedProjects} />;
}
