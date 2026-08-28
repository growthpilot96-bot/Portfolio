import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Sparkles, Check } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

interface ScopeEstimatorProps {
  onApplyScope: (scopeDetails: { projectType: string; timeline: string; budget: string }) => void;
}

export const ScopeEstimator: React.FC<ScopeEstimatorProps> = ({ onApplyScope }) => {
  const [projectType, setProjectType] = useState('New Digital Flagship');
  const [motionLevel, setMotionLevel] = useState('Kinetic Framer Motion');
  const [timeline, setTimeline] = useState('Standard (2-3 Weeks)');

  const projectTypes = [
    { name: 'New Digital Flagship', desc: 'Custom website from scratch with custom design & code', base: '₹45k - ₹90k+' },
    { name: 'Complete UI/UX Redesign', desc: 'Transforming an outdated site into a modern experience', base: '₹35k - ₹75k' },
    { name: 'High-Impact Landing Page', desc: 'Laser-focused single page for product launch or campaign', base: '₹20k - ₹40k' },
    { name: 'Bespoke Motion Package', desc: 'Adding fluid micro-interactions and scroll animations', base: '₹15k - ₹30k' }
  ];

  const motionOptions = [
    { name: 'Clean & Minimal', desc: 'Subtle fades and smooth viewport transitions' },
    { name: 'Kinetic Framer Motion', desc: 'Scroll physics, magnetic cursor & micro-interactions' },
    { name: 'Full Interactive Experience', desc: '3D perspective, interactive custom states & deep gestures' }
  ];

  const timelineOptions = [
    { name: 'Expedited (1-2 Weeks)', desc: 'Priority dedicated sprint delivery' },
    { name: 'Standard (2-3 Weeks)', desc: 'Full discovery, design & engineering passes' },
    { name: 'Flexible (4+ Weeks)', desc: 'Staggered milestones & phased rollouts' }
  ];

  const handleApply = () => {
    const budgetEstimate = projectType.includes('Flagship')
      ? 'Custom Flagship (₹45k - ₹90k+)'
      : projectType.includes('Redesign')
      ? 'Redesign (₹35k - ₹75k)'
      : 'Targeted Build (₹20k - ₹40k)';

    onApplyScope({
      projectType: `${projectType} with ${motionLevel}`,
      timeline,
      budget: budgetEstimate
    });

    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#0C0E12] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 tag-badge tag-badge-gold mb-3">
              <Calculator className="size-3 text-[#E5C378]" />
              <span>INTERACTIVE SCOPE PLANNER</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Estimate Your Project Scope
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/60 max-w-xl font-light">
              Select your ideal requirements to configure an instant scope blueprint and pre-fill your project inquiry.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Options Configuration */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1: Project Type */}
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#E5C378] font-semibold block mb-3">
                01 · Select Project Focus
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {projectTypes.map((t) => {
                  const isSelected = projectType === t.name;
                  return (
                    <button
                      key={t.name}
                      type="button"
                      onClick={() => setProjectType(t.name)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#E5C378]/10 border-[#E5C378] shadow-lg shadow-[#E5C378]/10'
                          : 'bg-white/[0.02] border-white/[0.07] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-bold text-white">{t.name}</span>
                        {isSelected && <Check className="size-4 text-[#E5C378]" />}
                      </div>
                      <p className="text-xs text-white/60 font-light leading-relaxed mb-2">{t.desc}</p>
                      <span className="text-[10px] font-mono text-[#E5C378] bg-white/[0.04] px-2 py-0.5 rounded-full">
                        Typical range: {t.base}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Motion Level */}
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#E5C378] font-semibold block mb-3">
                02 · Motion & Animation Density
              </span>
              <div className="grid sm:grid-cols-3 gap-3">
                {motionOptions.map((m) => {
                  const isSelected = motionLevel === m.name;
                  return (
                    <button
                      key={m.name}
                      type="button"
                      onClick={() => setMotionLevel(m.name)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#E5C378]/10 border-[#E5C378]'
                          : 'bg-white/[0.02] border-white/[0.07] hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-bold text-white block mb-1">{m.name}</span>
                      <p className="text-[11px] text-white/50 font-light leading-relaxed">{m.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#E5C378] font-semibold block mb-3">
                03 · Target Timeline
              </span>
              <div className="grid sm:grid-cols-3 gap-3">
                {timelineOptions.map((tl) => {
                  const isSelected = timeline === tl.name;
                  return (
                    <button
                      key={tl.name}
                      type="button"
                      onClick={() => setTimeline(tl.name)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#E5C378]/10 border-[#E5C378]'
                          : 'bg-white/[0.02] border-white/[0.07] hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-bold text-white block mb-1">{tl.name}</span>
                      <p className="text-[11px] text-white/50 font-light leading-relaxed">{tl.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Blueprint Summary Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl card-luxury border-[#E5C378]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <span className="text-xs uppercase font-mono text-white/50 tracking-wider">Estimated Blueprint</span>
                <Sparkles className="size-4 text-[#E5C378]" />
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-mono text-white/40 block">Project Focus</span>
                  <span className="text-sm font-bold text-white">{projectType}</span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono text-white/40 block">Interaction Layer</span>
                  <span className="text-sm font-semibold text-[#E5C378]">{motionLevel}</span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono text-white/40 block">Target Timeline</span>
                  <span className="text-sm font-semibold text-white">{timeline}</span>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <span className="text-[10px] uppercase font-mono text-white/40 block">Typical Investment</span>
                  <span className="text-xl font-display font-bold text-white">
                    {projectTypes.find((p) => p.name === projectType)?.base || 'Custom Quote'}
                  </span>
                  <p className="text-[10px] text-white/40 mt-1 font-light">
                    Final proposal confirmed after initial discovery alignment.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <button
                type="button"
                onClick={handleApply}
                data-cursor="action"
                data-cursor-text="APPLY"
                className="w-full py-4 rounded-full bg-[#E5C378] text-[#08090B] font-bold text-xs uppercase tracking-widest hover:bg-[#F3D58C] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#E5C378]/20"
              >
                <span>Apply to Inquiry Form</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
