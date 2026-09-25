import React from 'react';
import { StarburstBadge, RetroStar, RetroLightning, PillBadge } from './Graphics';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onOpenDashboard: () => void;
  onExplore: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenDashboard,
  onExplore,
}) => {
  return (
    <section className="bg-[#FECCD3] border-b-[3px] border-black p-8 sm:p-12 lg:p-20 relative overflow-hidden text-center flex flex-col items-center justify-center">
      {/* Decorative Starburst Overlap */}
      <div className="absolute top-4 left-6 sm:left-12 transform -rotate-12 transition-transform hover:rotate-0 z-10">
        <StarburstBadge size="md" bgColor="#000000" textColor="#FFFFFF">
          <span>SMART</span>
          <span className="text-[#FFE500]">LIVING</span>
        </StarburstBadge>
      </div>

      {/* Decorative Yellow Stars and Lightning */}
      <div className="absolute top-8 right-10 sm:right-16 z-10 hidden sm:block">
        <RetroLightning size={44} color="#FFE500" className="rotate-12" />
      </div>

      <div className="absolute bottom-6 left-12 z-10 hidden md:block">
        <RetroStar size={36} color="#FFE500" />
      </div>

      <div className="absolute bottom-8 right-16 z-10 hidden sm:block">
        <RetroStar size={30} color="#45C5E2" />
      </div>

      {/* Center Content */}
      <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center">
        <div className="mb-3">
          <PillBadge bgColor="#FFFFFF" textColor="#000000">
            DEPLOYABLE PROTOTYPE · 2026 EDITION
          </PillBadge>
        </div>

        <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl text-black tracking-tight leading-[0.9] mb-4">
          READY TO MAKE<br />
          YOUR HOME<br />
          <span className="text-[#45C5E2] retro-text-shadow">SMART?</span>
        </h2>

        <div className="font-display text-lg sm:text-xl md:text-2xl text-black uppercase tracking-widest mb-8 flex flex-wrap justify-center gap-x-4 gap-y-1">
          <span>CONNECT.</span>
          <span>AUTOMATE.</span>
          <span>MONITOR.</span>
          <span>CONTROL.</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenDashboard}
            className="px-8 py-4 bg-black text-white hover:bg-black/90 font-display text-lg tracking-wider uppercase border-[3px] border-black retro-shadow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black flex items-center gap-2"
          >
            <span>OPEN DASHBOARD</span>
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
          <button
            onClick={onExplore}
            className="px-8 py-4 bg-white text-black hover:bg-[#FFE500] font-display text-lg tracking-wider uppercase border-[3px] border-black retro-shadow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            EXPLORE SYSTEM
          </button>
        </div>
      </div>
    </section>
  );
};
