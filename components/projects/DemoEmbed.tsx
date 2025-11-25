'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Maximize2 } from 'lucide-react';

interface DemoEmbedProps {
  demoUrl?: string;
  title: string;
}

const DemoEmbed: React.FC<DemoEmbedProps> = ({ demoUrl, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  if (!demoUrl) {
    return (
      <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-8">
        <div className="text-center">
          <div className="mb-4 text-5xl">🚧</div>
          <h3 className="mb-2 text-xl font-semibold text-white">
            Demo Coming Soon
          </h3>
          <p className="text-gray-400">
            Interactive demo is currently being deployed. Check back soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Demo Header */}
      <div className="flex items-center justify-between rounded-xl border border-gray-700 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-cyan-500/20 p-2">
            <Play className="h-5 w-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Live Demo</h3>
            <p className="text-sm text-gray-400">
              Interactive Streamlit application
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400 transition-all hover:bg-cyan-500/20"
          >
            <ExternalLink className="h-4 w-4" />
            Open in New Tab
          </a>
        </div>
      </div>

      {/* Demo Embed */}
      {!showDemo ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative aspect-video overflow-hidden rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800"
        >
          {/* Preview/Placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="mb-4 text-6xl">📊</div>
            <h4 className="mb-2 text-xl font-semibold text-white">
              {title} Demo
            </h4>
            <p className="mb-6 text-sm text-gray-400">
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
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500"></div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-video overflow-hidden rounded-xl border border-gray-700 bg-gray-900"
        >
          {/* Loading State */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="text-center">
                <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-cyan-500"></div>
                <p className="text-sm text-gray-400">Loading demo...</p>
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
      <div className="rounded-lg border border-gray-700 bg-gray-900/30 p-4">
        <p className="text-sm text-gray-400">
          This is a live, interactive demo deployed on Streamlit Cloud. You can:
        </p>
        <ul className="mt-2 space-y-1 text-sm text-gray-300">
          <li className="flex items-center gap-2">
            <span className="text-cyan-400">•</span>
            Upload your own data for predictions
          </li>
          <li className="flex items-center gap-2">
            <span className="text-cyan-400">•</span>
            Explore model performance metrics
          </li>
          <li className="flex items-center gap-2">
            <span className="text-cyan-400">•</span>
            View interactive visualizations
          </li>
          <li className="flex items-center gap-2">
            <span className="text-cyan-400">•</span>
            Understand model predictions with explainability
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DemoEmbed;
