'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, Zap, CheckCircle } from 'lucide-react';
import { BusinessImpact } from '@/lib/types/project';

interface MetricsDisplayProps {
  businessImpact: BusinessImpact;
}

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ businessImpact }) => {
  const metrics = [
    {
      icon: DollarSign,
      label: 'ROI',
      value: businessImpact.roi,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
    },
    ...(businessImpact.savings
      ? [
          {
            icon: TrendingUp,
            label: 'Savings',
            value: businessImpact.savings,
            color: 'text-cyan-400',
            bgColor: 'bg-cyan-500/10',
            borderColor: 'border-cyan-500/30',
          },
        ]
      : []),
    ...(businessImpact.accuracy
      ? [
          {
            icon: Target,
            label: 'Accuracy',
            value: businessImpact.accuracy,
            color: 'text-purple-400',
            bgColor: 'bg-purple-500/10',
            borderColor: 'border-purple-500/30',
          },
        ]
      : []),
  ];

  return (
    <div className="space-y-6">
      {/* Main Metrics Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-xl border ${metric.borderColor} ${metric.bgColor} p-6 backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-lg ${metric.bgColor} p-3`}>
                  <Icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className={`text-2xl font-bold ${metric.color}`}>
                    {metric.value}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Metrics */}
      {businessImpact.other && businessImpact.other.length > 0 && (
        <div className="rounded-xl border border-border bg-card/50 p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <Zap className="h-5 w-5 text-yellow-400" />
            Key Performance Indicators
          </h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {businessImpact.other.map((metric, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-card/50 p-4"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                </div>
                <span className="text-sm font-semibold text-primary">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Business Impact Table */}
      <div className="rounded-xl border border-border bg-card/50 overflow-hidden">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-4">
          <h3 className="text-lg font-semibold text-foreground">
            Business Impact Summary
          </h3>
        </div>
        <div className="p-6">
          <table className="w-full">
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 text-muted-foreground">Return on Investment</td>
                <td className="py-3 text-right font-semibold text-accent">
                  {businessImpact.roi}
                </td>
              </tr>
              {businessImpact.savings && (
                <tr>
                  <td className="py-3 text-muted-foreground">Cost Savings</td>
                  <td className="py-3 text-right font-semibold text-primary">
                    {businessImpact.savings}
                  </td>
                </tr>
              )}
              {businessImpact.accuracy && (
                <tr>
                  <td className="py-3 text-muted-foreground">Model Accuracy</td>
                  <td className="py-3 text-right font-semibold text-secondary">
                    {businessImpact.accuracy}
                  </td>
                </tr>
              )}
              {businessImpact.other?.map((metric, index) => (
                <tr key={index}>
                  <td className="py-3 text-muted-foreground">{metric.label}</td>
                  <td className="py-3 text-right font-semibold text-muted-foreground">
                    {metric.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MetricsDisplay;
