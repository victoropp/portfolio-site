'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useHydrated } from '@/lib/hooks/useHydrated';

interface TechStackBadgesProps {
  techStack: string[];
  title?: string;
}

const TechStackBadges: React.FC<TechStackBadgesProps> = ({
  techStack,
  title = 'Technology Stack',
}) => {
  const hydrated = useHydrated();
  // Color mapping for different tech categories
  const getTechColor = (tech: string): string => {
    const techLower = tech.toLowerCase();

    // ML Frameworks
    if (
      ['xgboost', 'catboost', 'lightgbm', 'scikit-learn', 'sklearn'].includes(
        techLower
      )
    ) {
      return 'border-orange-500/30 bg-orange-500/10 text-orange-300';
    }

    // Deep Learning
    if (
      ['pytorch', 'tensorflow', 'keras', 'lstm', 'resnet', 'efficientnet', 'densenet', 'cnn'].includes(
        techLower
      )
    ) {
      return 'border-red-500/30 bg-red-500/10 text-red-300';
    }

    // NLP
    if (
      ['bert', 'finbert', 'transformers', 'nltk', 'spacy', 'gpt'].includes(
        techLower
      )
    ) {
      return 'border-blue-500/30 bg-blue-500/10 text-blue-300';
    }

    // Computer Vision
    if (
      ['grad-cam', 'clahe', 'opencv', 'albumentations', 'fashion mnist', 'coco'].includes(
        techLower
      )
    ) {
      return 'border-pink-500/30 bg-pink-500/10 text-pink-300';
    }

    // Deployment/API
    if (
      ['fastapi', 'streamlit', 'docker', 'flask', 'kubernetes'].includes(
        techLower
      )
    ) {
      return 'border-green-500/30 bg-green-500/10 text-green-300';
    }

    // Explainability
    if (['shap', 'lime', 'eli5'].includes(techLower)) {
      return 'border-yellow-500/30 bg-yellow-500/10 text-yellow-300';
    }

    // Time Series / Forecasting
    if (
      ['prophet', 'temporal fusion transformer', 'arima', 'sarima'].includes(
        techLower
      )
    ) {
      return 'border-teal-500/30 bg-teal-500/10 text-teal-300';
    }

    // Data Processing
    if (['pandas', 'numpy', 'polars', 'dask'].includes(techLower)) {
      return 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300';
    }

    // Default
    return 'border-purple-500/30 bg-purple-500/10 text-purple-300';
  };

  return (
    <div className="rounded-xl border border-border bg-card/50 p-6">
      <h3 className="mb-4 text-lg font-semibold text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => {
          const motionProps = hydrated
            ? {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: index * 0.05 },
              }
            : { initial: false, animate: false };
          return (
            <motion.span
              key={index}
              {...motionProps}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${getTechColor(
                tech
              )}`}
            >
              {tech}
            </motion.span>
          );
        })}
      </div>

      {/* Category Legend */}
      <div className="mt-6 grid grid-cols-2 gap-2 text-xs md:grid-cols-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-orange-500/50"></div>
          <span className="text-muted-foreground">ML Frameworks</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
          <span className="text-muted-foreground">Deep Learning</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500/50"></div>
          <span className="text-muted-foreground">NLP</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
          <span className="text-muted-foreground">Deployment</span>
        </div>
      </div>
    </div>
  );
};

export default TechStackBadges;
