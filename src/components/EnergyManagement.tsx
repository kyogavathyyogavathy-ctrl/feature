import React from 'react';
import { ENERGY_BREAKDOWN } from '../services/mockIotService';
import { Zap, TrendingDown, Leaf, Info } from 'lucide-react';
import { CircularSticker, StarburstBadge, RetroStar } from './Graphics';

export const EnergyManagement: React.FC = () => {
  return (
    <section className="bg-white border-b-[3px] border-black p-6 sm:p-10 lg:p-14 relative overflow-hidden">
      {/* Background Graphic Accent */}
      <div className="absolute top-6 right-6 z-10 hidden sm:block">
        <div className="bg-[#FFE500] text-black border-2 border-black retro-shadow px-3.5 py-1.5 font-display text-xs uppercase tracking-wider font-extrabold rotate-3">
          SMART ENERGY OPTIMIZATION
        </div>
      </div>

      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs uppercase tracking-widest text-black/70 font-bold">
              SECTION // 08
            </span>
            <RetroStar size={16} color="#FFE500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none">
            USE LESS.<br />
            <span className="text-[#45C5E2] retro-text-shadow">LIVE SMARTER.</span>
          </h2>
        </div>

        {/* Demo Analytics Label */}
        <div className="flex items-center gap-2 bg-[#FFE500] border-2 border-black px-3 py-1.5 font-mono text-xs font-bold uppercase retro-shadow-sm">
          <Info size={14} />
          <span>DEMO ANALYTICS · ESTIMATED POWER LOAD</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Graphic Energy Donut Gauge (Editorial SVG) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-[#E6E0FF] border-[3px] border-black retro-shadow">
          <div className="relative w-56 h-56 flex items-center justify-center">
            {/* SVG Donut Chart with bold black outlines */}
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              {/* Arc 1: Lighting 42% (circumference ~ 251.2; stroke-dasharray) */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#45C5E2"
                strokeWidth="16"
                strokeDasharray="105.5 251.2"
                strokeDashoffset="0"
                className="transition-all duration-1000"
              />
              {/* Arc 2: Fan 31% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#FFE500"
                strokeWidth="16"
                strokeDasharray="77.8 251.2"
                strokeDashoffset="-105.5"
                className="transition-all duration-1000"
              />
              {/* Arc 3: Appliances 27% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#FECCD3"
                strokeWidth="16"
                strokeDasharray="67.8 251.2"
                strokeDashoffset="-183.3"
                className="transition-all duration-1000"
              />
              {/* Center separator ring */}
              <circle
                cx="50"
                cy="50"
                r="32"
                fill="#FFFFFF"
                stroke="#000000"
                strokeWidth="2"
              />
            </svg>

            {/* Inner Center Display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-mono text-[10px] uppercase font-bold text-black/60">
                TODAY'S USAGE
              </span>
              <span className="font-display text-4xl font-black text-black leading-none my-0.5">
                1.8
              </span>
              <span className="font-display text-xs uppercase tracking-widest text-black/80 font-bold">
                KWH
              </span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-xs font-mono font-bold text-black/80">
              CURRENT ESTIMATED DRAW: 1.8 kW PEAK
            </span>
          </div>
        </div>

        {/* Right: Breakdown bars & Metrics */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-5">
          <div className="space-y-4">
            {ENERGY_BREAKDOWN.map((item) => (
              <div
                key={item.category}
                className="bg-white border-2 border-black p-4 retro-shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display text-base uppercase text-black font-extrabold tracking-wide">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-black/70">
                      {item.kwh} kWh
                    </span>
                    <span className="font-display text-lg text-black font-black">
                      {item.percentage}%
                    </span>
                  </div>
                </div>

                {/* Chunky Retro Progress Bar */}
                <div className="w-full h-4 bg-slate-100 border-2 border-black overflow-hidden flex">
                  <div
                    className="h-full border-r-2 border-black transition-all duration-700"
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Box */}
          <div className="bg-[#FECCD3] border-2 border-black p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-[#FFE500] border border-black flex items-center justify-center shrink-0">
              <TrendingDown size={22} strokeWidth={2.5} />
            </div>
            <p className="text-xs font-sans font-bold text-black leading-relaxed">
              Automated rules automatically disengage passive standby loads when PIR occupancy is null for 45 minutes, conserving baseline grid draw.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
