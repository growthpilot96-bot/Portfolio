import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Mail, Copy, Check, Sparkles, ArrowUpRight, Phone, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MagneticButton } from '../ui/MagneticButton';

interface ContactProps {
  initialScope?: {
    projectType: string;
    timeline: string;
    budget: string;
  } | null;
}

export const Contact: React.FC<ContactProps> = ({ initialScope }) => {
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'New Digital Flagship',
    budget: '₹40k - ₹80k',
    details: ''
  });

  useEffect(() => {
    if (initialScope) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialScope.projectType || prev.projectType,
        budget: initialScope.budget || prev.budget,
        details: prev.details || `Target Timeline: ${initialScope.timeline}. Looking forward to discussing project goals.`
      }));
    }
  }, [initialScope]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@adarshstudio.design');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Fire celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E5C378', '#FFFFFF', '#10B981']
    });
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#08090B] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="glow-spot-gold bottom-0 right-1/4 -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Outreach */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 tag-badge tag-badge-gold self-start">
              <Sparkles className="size-3 text-[#E5C378]" />
              <span>START A CONVERSATION</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Have a website in mind?{' '}
              <span className="font-serif-luxury italic font-normal text-[#E5C378]">
                Let's build it.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
              Whether you need a brand-new digital flagship, an aggressive UI/UX overhaul, or a high-converting landing page — I'm ready to turn your vision into an unforgettable digital reality.
            </p>

            {/* Quick Contact Buttons */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp One-Tap */}
              <a
                href="https://wa.me/919876543210?text=Hi%20Adarsh,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="action"
                data-cursor-text="CHAT"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#25D366]/50 hover:bg-white/[0.06] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white/50 font-mono block">INSTANT MESSAGING</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                      Chat on WhatsApp (Fastest)
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-white/40 group-hover:text-[#25D366] transition-colors" />
              </a>

              {/* Email Copy Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-[#E5C378]/10 flex items-center justify-center text-[#E5C378]">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white/50 font-mono block">DIRECT EMAIL</span>
                    <span className="text-sm font-bold text-white">hello@adarshstudio.design</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  data-cursor="hover"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-white/80 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-3 text-xs text-white/60 font-light">
              <span className="size-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span>Average response time: Under 4 hours on business days. Direct senior designer access.</span>
            </div>
          </div>

          {/* Right Column: High-Converting Project Form */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl card-luxury border-white/[0.1] relative">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center gap-4"
              >
                <div className="size-16 rounded-full bg-[#E5C378]/20 text-[#E5C378] flex items-center justify-center mb-2">
                  <Sparkles className="size-8" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                  Message Received with Thanks!
                </h3>
                <p className="text-sm text-white/70 max-w-md font-light leading-relaxed">
                  Thank you for reaching out, <strong className="text-white font-medium">{formData.name}</strong>. I will review your project requirements and reply to <strong className="text-[#E5C378] font-medium">{formData.email}</strong> within 4 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-white uppercase tracking-wider transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-white/60 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Rossi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-[#E5C378] focus:outline-none text-sm text-white placeholder-white/25 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-white/60 block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="elena@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-[#E5C378] focus:outline-none text-sm text-white placeholder-white/25 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-white/60 block">
                      Business / Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maison Atelier"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-[#E5C378] focus:outline-none text-sm text-white placeholder-white/25 transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-white/60 block">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1115] border border-white/[0.1] focus:border-[#E5C378] focus:outline-none text-sm text-white transition-colors"
                    >
                      <option value="New Digital Flagship">New Digital Flagship</option>
                      <option value="Complete UI/UX Redesign">Complete UI/UX Redesign</option>
                      <option value="High-Impact Landing Page">High-Impact Landing Page</option>
                      <option value="Motion & Framer Motion Sprint">Motion & Framer Motion Sprint</option>
                      <option value="Other Bespoke Work">Other Bespoke Work</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-white/60 block">
                    Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['₹25k - ₹45k', '₹45k - ₹75k', '₹75k - ₹120k+', 'To Discuss'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-semibold tracking-wider transition-colors ${
                          formData.budget === b
                            ? 'bg-[#E5C378]/15 border-[#E5C378] text-[#E5C378]'
                            : 'bg-white/[0.02] border-white/[0.08] text-white/60 hover:text-white'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-white/60 block">
                    Tell Me About Your Goals & Vision *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe what your business does and what you want this new website to achieve..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-[#E5C378] focus:outline-none text-sm text-white placeholder-white/25 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button with generous left/right padding and responsive width */}
                <div className="pt-2">
                  <button
                    type="submit"
                    data-cursor="action"
                    data-cursor-text="SUBMIT"
                    className="w-full px-8 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[#E5C378] to-[#D4AF37] text-[#08090B] font-bold text-xs sm:text-sm uppercase tracking-widest hover:brightness-105 transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#E5C378]/25 active:scale-[0.98]"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="size-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
