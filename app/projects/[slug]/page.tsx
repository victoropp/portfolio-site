'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getProjectBySlug, projects } from '@/lib/data/projects';
import MetricsDisplay from '@/components/projects/MetricsDisplay';
import TechStackBadges from '@/components/projects/TechStackBadges';
import DemoEmbed from '@/components/projects/DemoEmbed';
import ProjectCard from '@/components/projects/ProjectCard';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  RotateCw,
} from 'lucide-react';

const ProjectDetailPage = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const project = getProjectBySlug(slug);

  const [showApproach, setShowApproach] = React.useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-400 mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Get related projects (same domain, exclude current)
  const relatedProjects = projects
    .filter((p) => p.domain === project.domain && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative border-b border-gray-800 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-500/20 border border-cyan-500/30 px-3 py-1 text-xs font-semibold text-cyan-300 uppercase">
                {project.domain}
              </span>
              <span className="rounded-full bg-purple-500/20 border border-purple-500/30 px-3 py-1 text-xs font-semibold text-purple-300">
                {project.modelType}
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mb-6 max-w-4xl text-lg text-gray-300 md:text-xl">
              {project.tagline}
            </p>

            {/* Key Metrics Badges */}
            <div className="mb-6 flex flex-wrap gap-3">
              <div className="rounded-lg bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 px-4 py-2">
                <div className="text-xs text-gray-400">
                  {project.keyMetric.label}
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {project.keyMetric.value}
                </div>
              </div>
              {project.businessImpact.roi && (
                <div className="rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 px-4 py-2">
                  <div className="text-xs text-gray-400">ROI</div>
                  <div className="text-2xl font-bold text-cyan-400">
                    {project.businessImpact.roi}
                  </div>
                </div>
              )}
              {project.businessImpact.accuracy && (
                <div className="rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 px-4 py-2">
                  <div className="text-xs text-gray-400">Accuracy</div>
                  <div className="text-2xl font-bold text-purple-400">
                    {project.businessImpact.accuracy}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 px-6 py-3 font-semibold text-white hover:from-gray-600 hover:to-gray-700 transition-all"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white hover:from-cyan-600 hover:to-blue-600 transition-all hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Executive Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-xl border border-gray-700 bg-gray-900/50 p-6"
              >
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Executive Summary
                </h2>
                <p className="text-gray-300 leading-relaxed">{project.overview}</p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-xl border border-gray-700 bg-gray-900/50 p-6"
              >
                <h2 className="mb-4 text-2xl font-bold text-white">
                  The Challenge
                </h2>
                <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-xl border border-gray-700 bg-gray-900/50 p-6"
              >
                <h2 className="mb-4 text-2xl font-bold text-white">
                  The Solution
                </h2>
                <p className="text-gray-300 leading-relaxed">{project.solution}</p>
              </motion.div>

              {/* Technical Approach (Collapsible) */}
              {project.approach && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="rounded-xl border border-gray-700 bg-gray-900/50 overflow-hidden"
                >
                  <button
                    onClick={() => setShowApproach(!showApproach)}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-800/50 transition-colors"
                  >
                    <h2 className="text-2xl font-bold text-white">
                      Technical Approach
                    </h2>
                    {showApproach ? (
                      <ChevronUp className="h-6 w-6 text-cyan-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-cyan-400" />
                    )}
                  </button>

                  {showApproach && (
                    <div className="px-6 pb-6 space-y-4">
                      {project.approach.preprocessing && (
                        <div>
                          <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                            Data Preprocessing
                          </h3>
                          <ul className="space-y-1">
                            {project.approach.preprocessing.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-300"
                              >
                                <span className="text-cyan-400 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.approach.modeling && (
                        <div>
                          <h3 className="text-lg font-semibold text-purple-400 mb-2">
                            Model Development
                          </h3>
                          <ul className="space-y-1">
                            {project.approach.modeling.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-300"
                              >
                                <span className="text-purple-400 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.approach.evaluation && (
                        <div>
                          <h3 className="text-lg font-semibold text-green-400 mb-2">
                            Evaluation & Validation
                          </h3>
                          <ul className="space-y-1">
                            {project.approach.evaluation.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-300"
                              >
                                <span className="text-green-400 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.approach.deployment && (
                        <div>
                          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                            Deployment & Production
                          </h3>
                          <ul className="space-y-1">
                            {project.approach.deployment.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-300"
                              >
                                <span className="text-yellow-400 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="rounded-xl border border-gray-700 bg-gradient-to-br from-green-500/5 to-cyan-500/5 p-6"
              >
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Results & Impact
                </h2>
                <p className="text-gray-300 leading-relaxed">{project.results}</p>
              </motion.div>

              {/* Key Learnings */}
              {project.keyLearnings && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="rounded-xl border border-gray-700 bg-gray-900/50 p-6"
                >
                  <h2 className="mb-6 text-2xl font-bold text-white">
                    Key Learnings
                  </h2>

                  <div className="space-y-6">
                    {project.keyLearnings.whatWorked && (
                      <div>
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-green-400 mb-3">
                          <CheckCircle className="h-5 w-5" />
                          What Worked
                        </h3>
                        <ul className="space-y-2">
                          {project.keyLearnings.whatWorked.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <span className="text-green-400 mt-1">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.keyLearnings.whatDidnt && (
                      <div>
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-red-400 mb-3">
                          <XCircle className="h-5 w-5" />
                          What Didn't Work
                        </h3>
                        <ul className="space-y-2">
                          {project.keyLearnings.whatDidnt.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <span className="text-red-400 mt-1">✗</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.keyLearnings.improvements && (
                      <div>
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-cyan-400 mb-3">
                          <RotateCw className="h-5 w-5" />
                          Future Improvements
                        </h3>
                        <ul className="space-y-2">
                          {project.keyLearnings.improvements.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <span className="text-cyan-400 mt-1">⟳</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Live Demo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <DemoEmbed demoUrl={project.demoUrl} title={project.title} />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Business Impact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <MetricsDisplay businessImpact={project.businessImpact} />
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <TechStackBadges techStack={project.techStack} />
              </motion.div>

              {/* Industry Applications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="rounded-xl border border-gray-700 bg-gray-900/50 p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Industry Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.industry.map((ind, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-green-500/10 border border-green-500/30 px-3 py-1 text-xs font-medium text-green-300"
                    >
                      {ind.split('-').join(' ')}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-16"
            >
              <h2 className="mb-6 text-3xl font-bold text-white">
                Related Projects
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((relatedProject, index) => (
                  <ProjectCard
                    key={relatedProject.id}
                    project={relatedProject}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
