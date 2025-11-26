'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data/projects';
import { FilterState } from '@/lib/types/project';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectFilters from '@/components/projects/ProjectFilters';

const ProjectsPage = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card/30 to-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Data Science{' '}
              <span className="text-gradient">
                Portfolio
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              Explore production-grade machine learning projects with proven business
              impact. From fraud detection to medical imaging, each project demonstrates
              real-world value.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <div className="rounded-lg bg-card/50 px-4 py-2">
                <span className="text-primary font-semibold">{projects.length}</span>{' '}
                <span className="text-muted-foreground">Production Projects</span>
              </div>
              <div className="rounded-lg bg-card/50 px-4 py-2">
                <span className="text-accent font-semibold">{uniqueDomains}+</span>{' '}
                <span className="text-muted-foreground">Industry Domains</span>
              </div>
              <div className="rounded-lg bg-card/50 px-4 py-2">
                <span className="text-secondary font-semibold">End-to-End</span>{' '}
                <span className="text-muted-foreground">ML Pipelines</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Projects Grid */}
      <section className="py-12">
        <div className="container-custom">
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
              <motion.div
                layout
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20"
              >
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
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
