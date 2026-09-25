import React from 'react';
import { RetroStar, RetroLightning, CircularSticker, StarburstBadge } from './Graphics';
import { Sparkles, BrainCircuit, Mic, ScanFace, SunMedium, Calendar, BarChart3, Radio } from 'lucide-react';

export const FutureScope: React.FC = () => {
  const stickers = [
    {
      title: 'AI ENERGY OPTIMIZATION',
      icon: <BrainCircuit size={18} />,
      bg: '#FFE500',
      rotation: '-rotate-3',
      shadow: 'retro-shadow',
      sub: 'Adaptive learning',
    },
    {
      title: 'USAGE PREDICTION',
      icon: <BarChart3 size={18} />,
      bg: '#FECCD3',
      rotation: 'rotate-2',
      shadow: 'retro-shadow-lg',
      sub: 'Time-series forecasting',
    },
    {
      title: 'VOICE CONTROL',
      icon: <Mic size={18} />,
      bg: '#45C5E2',
      rotation: '-rotate-1',
      shadow: 'retro-shadow',
      sub: 'Offline keyword spotting',
    },
    {
      title: 'FACIAL RECOGNITION',
      icon: <ScanFace size={18} />,
      bg: '#FFFFFF',
      rotation: 'rotate-3',
      shadow: 'retro-shadow-lg',
      sub: 'ESP32-CAM edge inferencing',
    },
    {
      title: 'ZIGBEE / Z-WAVE',
      icon: <Radio size={18} />,
      bg: '#E6E0FF',
      rotation: '-rotate-2',
      shadow: 'retro-shadow',
      sub: 'Mesh network expansion',
    },
    {
      title: 'SOLAR BACKUP',
      icon: <SunMedium size={18} />,
      bg: '#FFE500',
      rotation: 'rotate-1',
      shadow: 'retro-shadow-lg',
      sub: 'Battery charge balancing',
    },
    {
      title: 'SMART ANALYTICS',
      icon: <Sparkles size={18} />,
      bg: '#FECCD3',
      rotation: '-rotate-3',
      shadow: 'retro-shadow',
      sub: 'Deep lifestyle insights',
    },
    {
      title: 'SCHEDULING',
      icon: <Calendar size={18} />,
      bg: '#45C5E2',
      rotation: 'rotate-2',
      shadow: 'retro-shadow-lg',
      sub: 'Sunrise/Sunset offsets',
    },
  ];

  return (
    <section className="bg-white border-b-[3px] border-black p-6 sm:p-10 lg:p-14 relative overflow-hidden">
      {/* Visual Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs uppercase tracking-widest text-black/70 font-bold">
              SECTION // 12 · FUTURE HORIZONS
            </span>
            <RetroStar size={16} color="#FFE500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none">
            WHAT'S<br />
            <span className="text-[#45C5E2] retro-text-shadow">NEXT?</span>
          </h2>
        </div>

        <p className="font-sans text-sm sm:text-base text-black font-semibold max-w-md">
          Planned extensions for subsequent hardware revisions: edge machine learning, mesh networking, and renewable micro-inverters.
        </p>
      </div>

      {/* Floating Playful Stickers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center max-w-5xl mx-auto py-4">
        {stickers.map((item, idx) => (
          <div
            key={idx}
            className={`border-[2.5px] border-black p-5 transition-transform hover:scale-105 hover:rotate-0 cursor-default flex flex-col justify-between h-36 ${item.rotation} ${item.shadow}`}
            style={{ backgroundColor: item.bg }}
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-none bg-white border border-black flex items-center justify-center retro-shadow-sm">
                {item.icon}
              </div>
              <span className="text-[9px] font-mono font-bold uppercase text-black/70">
                REV 2.0
              </span>
            </div>

            <div>
              <h3 className="font-display text-lg uppercase text-black font-extrabold tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-[11px] font-sans font-bold text-black/80 mt-1">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
