import React, { useState } from 'react';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preloader } from './components/ui/Preloader';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustStrip } from './components/sections/TrustStrip';
import { SelectedWork } from './components/sections/SelectedWork';
import { CaseStudyModal } from './components/sections/CaseStudyModal';
import { Services } from './components/sections/Services';
import { Philosophy } from './components/sections/Philosophy';
import { DesignProcess } from './components/sections/DesignProcess';
import { About } from './components/sections/About';
import { ScopeEstimator } from './components/sections/ScopeEstimator';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Project, projectsData } from './data/projectsData';

export function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scopeDetails, setScopeDetails] = useState<{
    projectType: string;
    timeline: string;
    budget: string;
  } | null>(null);

  const handleOpenProjectById = (projectId: string) => {
    const p = projectsData.find((proj) => proj.id === projectId);
    if (p) setSelectedProject(p);
  };

  const handleExploreWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E5C378]/25 selection:text-[#E5C378]">
      {/* Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Main Layout */}
      <Navbar onOpenContact={handleOpenContact} />

      <main>
        {/* 01. Hero with 3D Layered Perspective Composition */}
        <Hero
          onExploreWork={handleExploreWork}
          onOpenProject={handleOpenProjectById}
        />

        {/* 02. Trust & Capability Strip */}
        <TrustStrip />

        {/* 03. Selected Work (10 Real Live Projects Showcase) */}
        <SelectedWork
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 04. Services & Deliverables */}
        <Services onOpenContact={handleOpenContact} />

        {/* 05. Core Design Philosophy */}
        <Philosophy />

        {/* 06. 6-Stage Design & Build Methodology */}
        <DesignProcess />

        {/* 07. About Designer & Technical Arsenal */}
        <About />

        {/* 08. Interactive Scope & Budget Estimator */}
        <ScopeEstimator onApplyScope={(scope) => setScopeDetails(scope)} />

        {/* 09. High-Converting Contact & Instant Messaging */}
        <Contact initialScope={scopeDetails} />
      </main>

      {/* 10. Minimal Studio Footer */}
      <Footer />

      {/* Interactive In-Depth Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />
    </div>
  );
}

export default App;
