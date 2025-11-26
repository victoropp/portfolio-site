'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Maximize2 } from 'lucide-react';
import { useHydrated } from '@/lib/hooks/useHydrated';

interface DemoEmbedProps {
  demoUrl?: string;
  title: string;
}

const DemoEmbed: React.FC<DemoEmbedProps> = ({ demoUrl, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const hydrated = useHydrated();

  if (!demoUrl) {
    return (
      <div className="rounded-xl border border-border bg-card/50 p-8">
        <div className="text-center">
          <div className="mb-4 text-5xl">🚧</div>
          <h3 className="mb-2 text-xl font-semibold text-foreground">
            Demo Coming Soon
          </h3>
          <p className="text-muted-foreground">
            Interactive demo is currently being deployed. Check back soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Demo Header */}
      <div className="flex items-center justify-between rounded-xl border border-border bg-gradient-to-r from-primary/10 to-secondary/10 p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/20 p-2">
            <Play className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Live Demo</h3>
            <p className="text-sm text-muted-foreground">
              Interactive Streamlit application
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary/20"
          >
            <ExternalLink className="h-4 w-4" />
            Open in New Tab
          </a>
        </div>
      </div>

      {/* Demo Embed */}
      {!showDemo ? (
        <motion.div
          initial={hydrated ? { opacity: 0 } : false}
          animate={hydrated ? { opacity: 1 } : false}
          className="relative aspect-video overflow-hidden rounded-xl border border-border bg-gradient-to-br from-background to-card"
        >
          {/* Preview/Placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="mb-4 text-6xl">📊</div>
            <h4 className="mb-2 text-xl font-semibold text-foreground">
              {title} Demo
            </h4>
            <p className="mb-6 text-sm text-muted-foreground">
              Click below to load the interactive demo
            </p>
            <button
              onClick={() => setShowDemo(true)}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white transition-all hover:from-cyan-600 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <Play className="h-5 w-5" />
              Load Demo
            </button>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"></div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={hydrated ? { opacity: 0, scale: 0.95 } : false}
          animate={hydrated ? { opacity: 1, scale: 1 } : false}
          transition={{ duration: 0.3 }}
          className="relative aspect-video overflow-hidden rounded-xl border border-border bg-background"
        >
          {/* Loading State */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-background">
              <div className="text-center">
                <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-border border-t-primary"></div>
                <p className="text-sm text-muted-foreground">Loading demo...</p>
              </div>
            </div>
          )}

          {/* Streamlit Iframe */}
          <iframe
            src={demoUrl}
            title={`${title} Demo`}
            className="h-full w-full"
            onLoad={() => setIsLoaded(true)}
            style={{ border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Fullscreen Button Overlay */}
          {isLoaded && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-4 top-4 flex items-center gap-2 rounded-lg border border-white/20 bg-black/50 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-black/70"
            >
              <Maximize2 className="h-4 w-4" />
              Fullscreen
            </a>
          )}
        </motion.div>
      )}

      {/* Demo Info */}
      <div className="rounded-lg border border-border bg-card/30 p-4">
        <p className="text-sm text-muted-foreground">
          This is a live, interactive demo deployed on Streamlit Cloud. You can:
        </p>
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span>
            Upload your own data for predictions
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span>
            Explore model performance metrics
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span>
            View interactive visualizations
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span>
            Understand model predictions with explainability
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DemoEmbed;
