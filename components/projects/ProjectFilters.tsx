'use client';

import React, { useState } from 'react';
import { FilterState, SortOption } from '@/lib/types/project';
import { Search, X, Filter, ChevronDown } from 'lucide-react';

interface ProjectFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  projectCount: number;
  totalCount: number;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  filters,
  onFilterChange,
  projectCount,
  totalCount,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  // Available filter options
  const domainOptions = [
    { value: 'finance', label: 'Finance' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'retail', label: 'Retail' },
    { value: 'nlp', label: 'NLP' },
    { value: 'cv', label: 'Computer Vision' },
    { value: 'hr', label: 'HR Analytics' },
    { value: 'forecasting', label: 'Forecasting' },
    { value: 'analytics', label: 'Analytics' },
  ];

  const techOptions = [
    'XGBoost',
    'PyTorch',
    'BERT',
    'CatBoost',
    'LightGBM',
    'Streamlit',
    'FastAPI',
    'LSTM',
    'ResNet',
    'SHAP',
    'TensorFlow',
    'Prophet',
    'Docker',
  ];

  const industryOptions = [
    { value: 'financial-services', label: 'Financial Services' },
    { value: 'e-commerce', label: 'E-Commerce' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'retail', label: 'Retail' },
    { value: 'trading', label: 'Trading' },
    { value: 'fintech', label: 'Fintech' },
  ];

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'newest', label: 'Newest First' },
    { value: 'impact', label: 'Highest Impact' },
    { value: 'accuracy', label: 'Best Accuracy' },
  ];

  const handleDomainToggle = (domain: string) => {
    const newDomains = filters.domain.includes(domain)
      ? filters.domain.filter((d) => d !== domain)
      : [...filters.domain, domain];
    onFilterChange({ ...filters, domain: newDomains });
  };

  const handleTechToggle = (tech: string) => {
    const newTech = filters.tech.includes(tech)
      ? filters.tech.filter((t) => t !== tech)
      : [...filters.tech, tech];
    onFilterChange({ ...filters, tech: newTech });
  };

  const handleIndustryToggle = (industry: string) => {
    const newIndustries = filters.industry.includes(industry)
      ? filters.industry.filter((i) => i !== industry)
      : [...filters.industry, industry];
    onFilterChange({ ...filters, industry: newIndustries });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleSortChange = (sort: SortOption) => {
    onFilterChange({ ...filters, sort });
  };

  const clearAllFilters = () => {
    onFilterChange({
      domain: [],
      tech: [],
      industry: [],
      search: '',
      sort: 'newest',
    });
  };

  const activeFilterCount =
    filters.domain.length +
    filters.tech.length +
    filters.industry.length +
    (filters.search ? 1 : 0);

  return (
    <div className="space-y-4">
      {/* Search and Sort Bar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={filters.search}
            onChange={handleSearchChange}
            className="w-full rounded-lg border border-gray-700 bg-gray-900/50 py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          />
        </div>

        {/* Filter Toggle and Sort */}
        <div className="flex gap-3">
          {/* Filter Toggle Button (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-2 text-white hover:border-gray-600"
          >
            <Filter className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="rounded-full bg-cyan-500 px-2 py-0.5 text-xs font-semibold">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={filters.sort}
              onChange={(e) => handleSortChange(e.target.value as SortOption)}
              className="appearance-none rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-2 pr-10 text-white hover:border-gray-600 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Filter Panel (Collapsible on mobile) */}
      <div
        className={`${
          showFilters ? 'block' : 'hidden'
        } md:block space-y-4 rounded-lg border border-gray-700 bg-gray-900/30 p-4`}
      >
        {/* Results Count and Clear Button */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Showing <span className="font-semibold text-white">{projectCount}</span> of{' '}
            <span className="font-semibold text-white">{totalCount}</span> projects
          </p>
          {activeFilterCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
            >
              <X className="h-4 w-4" />
              Clear All
            </button>
          )}
        </div>

        {/* Domain Filters */}
        <div>
          <h3 className="mb-2 text-sm font-semibold text-white">Domain</h3>
          <div className="flex flex-wrap gap-2">
            {domainOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleDomainToggle(option.value)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                  filters.domain.includes(option.value)
                    ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300'
                    : 'border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Filters */}
        <div>
          <h3 className="mb-2 text-sm font-semibold text-white">Technology</h3>
          <div className="flex flex-wrap gap-2">
            {techOptions.map((tech) => (
              <button
                key={tech}
                onClick={() => handleTechToggle(tech)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                  filters.tech.includes(tech)
                    ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                    : 'border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Industry Filters */}
        <div>
          <h3 className="mb-2 text-sm font-semibold text-white">Industry</h3>
          <div className="flex flex-wrap gap-2">
            {industryOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleIndustryToggle(option.value)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                  filters.industry.includes(option.value)
                    ? 'border-green-500 bg-green-500/20 text-green-300'
                    : 'border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;
