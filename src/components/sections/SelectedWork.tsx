import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles, Layers, Eye, BookOpen } from 'lucide-react';
import { Project, projectsData } from '../../data/projectsData';
import { MagneticButton } from '../ui/MagneticButton';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Healthcare',
    'Luxury & Hospitality',
    'E-Commerce',
    'Travel & Adventure',
    'Fitness & Wellness'
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-28 md:py-36 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 tag-badge tag-badge-gold mb-3">
              <Sparkles className="size-3 text-[#E5C378]" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/60 max-w-xl font-light">
              A curated collection of bespoke digital flagships designed for conversion, brand prestige, and seamless user experience.
            </p>
          </div>

          <div className="text-xs font-mono text-white/40 uppercase tracking-widest">
            <span>SHOWING {filteredProjects.length} OF {projectsData.length} FLAGSHIPS</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                data-cursor="hover"
                className={`relative px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${
                  isActive ? 'text-[#08090B] font-bold' : 'text-white/70 hover:text-white bg-white/[0.03] border border-white/[0.08]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-category-pill"
                    className="absolute inset-0 bg-[#E5C378] rounded-full shadow-lg shadow-[#E5C378]/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isWide = idx % 3 === 0;
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`group relative rounded-3xl card-luxury overflow-hidden flex flex-col justify-between ${
                    isWide ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  {/* Top Bar with Badges & Live Status */}
                  <div className="p-6 md:p-8 flex items-center justify-between border-b border-white/[0.06] bg-white/[0.01]">
                    <div className="flex items-center gap-2.5">
                      <span className="tag-badge text-[10px] text-[#E5C378] border-[#E5C378]/30 bg-[#E5C378]/10 font-mono">
                        {project.category}
                      </span>
                      <span className="text-xs text-white/50 font-mono hidden sm:inline">
                        {project.industry}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        LIVE PROJECT
                      </span>
                    </div>
                  </div>

                  {/* Visual Image Preview */}
                  <div
                    onClick={() => onSelectProject(project)}
                    data-cursor="project"
                    data-cursor-text="CASE STUDY"
                    className={`relative overflow-hidden bg-[#111317] cursor-pointer ${
                      isWide ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[16/10]'
                    }`}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/30 to-transparent" />

                    {/* Overlay Tagline & Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="tag-badge text-xs bg-black/60 backdrop-blur-md text-white border-white/20">
                        {project.badge}
                      </span>
                    </div>

                    {/* Action Overlay Trigger button */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5C378] text-[#08090B] font-bold text-xs uppercase tracking-wider shadow-xl">
                        <BookOpen className="size-3.5" />
                        <span>Case Study</span>
                      </span>
                    </div>
                  </div>

                  {/* Project Info & CTAs */}
                  <div className="p-6 md:p-8 flex flex-col gap-4">
                    <div>
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight hover:text-[#E5C378] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/70 font-light leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Design objective highlight */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-white/60 leading-relaxed font-light">
                      <strong className="text-white/90 font-medium">Design Focus: </strong>
                      {project.uxApproach}
                    </div>

                    {/* CTAs Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
                      <div className="flex items-center gap-2">
                        {project.palette.map((c, i) => (
                          <span
                            key={i}
                            title={`${c.name} (${c.hex})`}
                            className="size-4 rounded-full border border-white/20"
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 hover:text-[#E5C378] transition-colors"
                          data-cursor="hover"
                        >
                          <span>Deep Dive</span>
                          <ArrowUpRight className="size-3.5" />
                        </button>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="action"
                          data-cursor-text="VISIT"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-[#E5C378] hover:text-[#08090B] border border-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                        >
                          <span>Visit Live Website</span>
                          <ExternalLink className="size-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
