'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data/projects';
import { FilterState } from '@/lib/types/project';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectFilters from '@/components/projects/ProjectFilters';
import { useHydrated } from '@/lib/hooks/useHydrated';

const ProjectsPage = () => {
  const hydrated = useHydrated();
  const [filters, setFilters] = useState<FilterState>({
    domain: [],
    tech: [],
    industry: [],
    search: '',
    sort: 'newest',
  });

  // Calculate unique domains count
  const uniqueDomains = useMemo(() => {
    return new Set(projects.map(p => p.domain)).size;
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Apply domain filter
    if (filters.domain.length > 0) {
      result = result.filter((project) =>
        filters.domain.includes(project.domain)
      );
    }

    // Apply tech filter
    if (filters.tech.length > 0) {
      result = result.filter((project) =>
        filters.tech.some((tech) =>
          project.techStack.some(
            (projectTech) =>
              projectTech.toLowerCase() === tech.toLowerCase()
          )
        )
      );
    }

    // Apply industry filter
    if (filters.industry.length > 0) {
      result = result.filter((project) =>
        filters.industry.some((industry) =>
          project.industry.includes(industry)
        )
      );
    }

    // Apply search filter (fuzzy search on title, tagline, and tech stack)
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(searchLower) ||
          project.tagline.toLowerCase().includes(searchLower) ||
          project.techStack.some((tech) =>
            tech.toLowerCase().includes(searchLower)
          ) ||
          project.domain.toLowerCase().includes(searchLower)
      );
    }

    // Apply sorting
    switch (filters.sort) {
      case 'newest':
        result.sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case 'impact':
        // Sort by featured first, then by order
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.order - b.order;
        });
        break;
      case 'accuracy':
        // Extract accuracy percentage from businessImpact
        result.sort((a, b) => {
          const getAccuracy = (acc?: string) => {
            if (!acc) return 0;
            const match = acc.match(/(\d+(\.\d+)?)/);
            return match ? parseFloat(match[1]) : 0;
          };
          return (
            getAccuracy(b.businessImpact.accuracy) -
            getAccuracy(a.businessImpact.accuracy)
          );
        });
        break;
    }

    return result;
  }, [filters]);

  const heroContent = (
    <div className="max-w-3xl">
      <span className="section-index block mb-6">Work</span>
      <h1
        className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-8"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        Data Science Portfolio
      </h1>
      <span className="rule-editorial block mb-8" />
      <p className="text-base text-muted-foreground mb-10 max-w-xl leading-relaxed">
        Production-grade machine learning projects with proven business impact — from fraud detection to medical imaging.
      </p>
      <div className="flex flex-wrap gap-8 text-sm">
        <div>
          <span className="text-2xl font-bold num-tabular text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>{projects.length}</span>
          <span className="block text-xs text-muted-foreground uppercase tracking-widest mt-1">Projects</span>
        </div>
        <div>
          <span className="text-2xl font-bold num-tabular text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>{uniqueDomains}+</span>
          <span className="block text-xs text-muted-foreground uppercase tracking-widest mt-1">Domains</span>
        </div>
        <div>
          <span className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>E2E</span>
          <span className="block text-xs text-muted-foreground uppercase tracking-widest mt-1">ML Pipelines</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-white/5 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {!hydrated ? (
            heroContent
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {heroContent}
            </motion.div>
          )}
        </div>
      </section>

      {/* Filters and Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <ProjectFilters
            filters={filters}
            onFilterChange={setFilters}
            projectCount={filteredProjects.length}
            totalCount={projects.length}
          />

          {/* Projects Grid */}
          <div className="mt-8">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  No projects found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      domain: [],
                      tech: [],
                      industry: [],
                      search: '',
                      sort: 'newest',
                    })
                  }
                  className="rounded-lg bg-primary px-6 py-2 text-primary-foreground font-semibold hover:bg-primary/80 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
