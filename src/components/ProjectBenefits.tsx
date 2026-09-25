import React from 'react';
import { Smartphone, Zap, Shield, Flame, Blocks, Activity } from 'lucide-react';
import { RetroStar, PillBadge } from './Graphics';

export const ProjectBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'REMOTE CONTROL',
      desc: 'Toggle lights, fans, and wall sockets globally across desktop browser or mobile screen with instant feedback.',
      icon: <Smartphone size={24} />,
      bg: '#FECCD3',
    },
    {
      title: 'ENERGY MANAGEMENT',
      desc: 'Cut phantom electrical drain with intelligent threshold-based auto power cuts and load telemetry.',
      icon: <Zap size={24} />,
      bg: '#FFE500',
    },
    {
      title: 'HOME SECURITY',
      desc: 'Active PIR infrared motion detection guards perimeters and dispatches real-time incident warnings.',
      icon: <Shield size={24} />,
      bg: '#45C5E2',
    },
    {
      title: 'HAZARD DETECTION',
      desc: 'SnO2 gas sensing halts tragedy before escalation by automatically isolating relays and firing buzzer sirens.',
      icon: <Flame size={24} />,
      bg: '#E6E0FF',
    },
    {
      title: 'MODULAR DESIGN',
      desc: 'Standardized pinouts permit adding custom ultrasonic, sound, or pressure nodes without firmware rewrite.',
      icon: <Blocks size={24} />,
      bg: '#FECCD3',
    },
    {
      title: 'REAL-TIME MONITORING',
      desc: 'Continuous environmental climate telemetry updated every 2.5 seconds directly over MQTT socket channels.',
      icon: <Activity size={24} />,
      bg: '#FFE500',
    },
  ];

  return (
    <section className="bg-[#E6E0FF] border-b-[3px] border-black p-6 sm:p-10 lg:p-14 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs uppercase tracking-widest text-black/70 font-bold">
              SECTION // 13 · VALUE MATRIX
            </span>
            <RetroStar size={16} color="#FFE500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none">
            WHY SMART<br />
            <span className="text-[#45C5E2] retro-text-shadow">HOME?</span>
          </h2>
        </div>

        <p className="font-sans text-sm sm:text-base text-black font-semibold max-w-md">
          Six foundational engineering pillars designed to empower convenience, safeguard property, and optimize energy expenditure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, idx) => (
          <div
            key={b.title}
            className="border-[3px] border-black p-6 retro-shadow transition-transform hover:-translate-y-1 bg-white flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 border-2 border-black flex items-center justify-center retro-shadow-sm text-black"
                  style={{ backgroundColor: b.bg }}
                >
                  {b.icon}
                </div>
                <span className="font-display text-lg text-black/60 font-bold">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="font-display text-2xl uppercase text-black font-black tracking-tight mb-2">
                {b.title}
              </h3>

              <p className="text-sm font-sans text-black/80 font-medium leading-relaxed">
                {b.desc}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t-2 border-black/10 flex items-center gap-1.5 text-xs font-mono font-bold text-black/70">
              <span className="w-2 h-2 rounded-full bg-black inline-block" />
              <span>CORE ARCHITECTURE CAPABILITY</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
