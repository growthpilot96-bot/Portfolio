import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight, ArrowLeft, CheckCircle2, Palette, Type, Compass, Sparkles } from 'lucide-react';
import { Project, projectsData } from '../../data/projectsData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08090B]/90 backdrop-blur-xl -z-10"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#0F1115] border border-white/[0.12] rounded-none md:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[100vh] md:max-h-[92vh] flex flex-col text-white"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 border-b border-white/[0.08] bg-[#0F1115]/95 backdrop-blur-md">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="tag-badge tag-badge-gold text-[10px]">
                {project.category}
              </span>
              <span className="text-xs text-white/50 font-mono hidden sm:inline">
                {project.industry}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="action"
                data-cursor-text="VISIT"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#E5C378] text-[#08090B] text-xs font-bold uppercase tracking-wider hover:bg-[#F3D58C] transition-all shadow-lg"
              >
                <span className="hidden sm:inline">Visit Live Website</span>
                <span className="sm:hidden">Live Site</span>
                <ExternalLink className="size-3.5" />
              </a>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close Case Study"
                className="size-8 sm:size-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/[0.12] transition-colors"
              >
                <X className="size-4 sm:size-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-5 sm:p-8 md:p-10 overflow-y-auto space-y-10 sm:space-y-12">
            {/* Project Hero Header */}
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#E5C378] font-mono font-semibold">
                CASE STUDY & ARCHITECTURE
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
                {project.title}
              </h2>
              <p className="mt-3 text-base sm:text-lg text-white/70 max-w-3xl font-light leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/9] bg-[#16181F]">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Objectives & UX Strategy Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#E5C378] font-mono font-semibold mb-3">
                  <Compass className="size-4 text-[#E5C378]" />
                  <span>Design Objective</span>
                </div>
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  {project.designObjective}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#E5C378] font-mono font-semibold mb-3">
                  <Sparkles className="size-4 text-[#E5C378]" />
                  <span>Conversion & UX Strategy</span>
                </div>
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  {project.conversionStrategy}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div>
              <h3 className="font-display text-xl font-bold text-white tracking-tight mb-4">
                Key Architectural Highlights
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                  >
                    <CheckCircle2 className="size-4 text-[#E5C378] shrink-0 mt-0.5" />
                    <span className="text-xs text-white/80 leading-relaxed font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Direction & Design Tokens */}
            <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-white/[0.08]">
              {/* Color System */}
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/50 font-mono mb-4">
                  <Palette className="size-4 text-[#E5C378]" />
                  <span>Color Palette</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.palette.map((color, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="h-8 rounded-lg border border-white/20" style={{ backgroundColor: color.hex }} />
                      <span className="text-xs font-semibold text-white truncate">{color.name}</span>
                      <span className="text-[10px] font-mono text-white/50">{color.hex}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/50 font-mono mb-4">
                  <Type className="size-4 text-[#E5C378]" />
                  <span>Typography Hierarchy</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.typography.map((font, idx) => (
                    <span key={idx} className="tag-badge text-xs py-2 px-4 border-white/15 bg-white/[0.03] text-white">
                      {font}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Screen Gallery Breakdown */}
            {project.screens.length > 0 && (
              <div className="space-y-6 pt-4 border-t border-white/[0.08]">
                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  Selected Screen Architecture
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {project.screens.map((sc, idx) => (
                    <div key={idx} className="flex flex-col rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
                      <div className="aspect-[16/10] bg-[#111317] overflow-hidden">
                        <img
                          src={sc.image}
                          alt={sc.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-display font-bold text-sm text-white">{sc.title}</h4>
                        <p className="text-xs text-white/60 font-light mt-1">{sc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next / Previous Project Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.08]">
              <button
                type="button"
                onClick={() => onSelectProject(prevProject)}
                className="w-full sm:w-auto flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#E5C378]/40 transition-colors text-left"
              >
                <ArrowLeft className="size-4 text-[#E5C378]" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-white/40 block">Previous Project</span>
                  <span className="text-xs font-bold text-white">{prevProject.brandName}</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onSelectProject(nextProject)}
                className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#E5C378]/40 transition-colors text-right"
              >
                <div>
                  <span className="text-[10px] uppercase font-mono text-white/40 block">Next Project</span>
                  <span className="text-xs font-bold text-white">{nextProject.brandName}</span>
                </div>
                <ArrowRight className="size-4 text-[#E5C378]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
