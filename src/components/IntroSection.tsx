import React from 'react';
import { RetroStar, RetroLightning, PillBadge } from './Graphics';
import { Cpu, Wifi, Radio, ShieldCheck } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section id="features" className="bg-[#E6E0FF] border-b-[3px] border-black p-6 sm:p-10 lg:p-14 relative overflow-hidden">
      {/* Editorial Decorative Watermark/Graphic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Column: Asymmetrical Large Number & Label */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-display text-7xl sm:text-8xl md:text-9xl text-black leading-none select-none tracking-tighter">
              01
            </span>
            <div className="flex flex-col">
              <span className="bg-black text-[#FFE500] font-mono font-bold text-xs uppercase px-2 py-0.5 tracking-widest inline-block">
                CHAPTER
              </span>
              <span className="font-display text-lg uppercase text-black tracking-wider mt-1">
                CONNECTED LIVING
              </span>
            </div>
          </div>

          <div className="w-full h-1 bg-black mb-4" />

          <div className="flex items-center gap-2">
            <PillBadge bgColor="#FFE500" textColor="#000000">
              <Radio size={12} strokeWidth={2.5} />
              RESPONSIVE ECOSYSTEM
            </PillBadge>
          </div>
        </div>

        {/* Right Column: Editorial Headline & Copy */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-script text-2xl text-black font-bold">Autonomous Control</span>
            <RetroStar size={18} color="#FFE500" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-[0.95] mb-6">
            YOUR HOME.<br />
            <span className="text-[#45C5E2] retro-text-shadow">YOUR RULES.</span>
          </h2>

          <p className="font-sans text-lg sm:text-xl text-black font-semibold max-w-2xl leading-relaxed mb-6">
            Smart Home Automation combines connected sensors, microcontrollers, wireless communication and cloud connectivity to create a responsive living environment.
          </p>

          {/* 3 Quick Pillar Cards in Retro Graphic Style */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white border-2 border-black p-4 retro-shadow-sm transition-transform hover:-translate-y-1">
              <div className="w-8 h-8 bg-[#FECCD3] border-2 border-black flex items-center justify-center font-display font-black text-sm mb-2">
                <Cpu size={16} />
              </div>
              <h3 className="font-display text-sm uppercase text-black mb-1">LOCAL SENSING</h3>
              <p className="text-xs text-black/80 font-medium">
                Real-time edge computation on ESP32 & NodeMCU modules.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-4 retro-shadow-sm transition-transform hover:-translate-y-1">
              <div className="w-8 h-8 bg-[#45C5E2] border-2 border-black flex items-center justify-center font-display font-black text-sm mb-2">
                <Wifi size={16} />
              </div>
              <h3 className="font-display text-sm uppercase text-black mb-1">MQTT TELEMETRY</h3>
              <p className="text-xs text-black/80 font-medium">
                Ultralight publish/subscribe messaging over 2.4 GHz Wi-Fi.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-4 retro-shadow-sm transition-transform hover:-translate-y-1">
              <div className="w-8 h-8 bg-[#FFE500] border-2 border-black flex items-center justify-center font-display font-black text-sm mb-2">
                <ShieldCheck size={16} />
              </div>
              <h3 className="font-display text-sm uppercase text-black mb-1">AUTONOMOUS SAFETY</h3>
              <p className="text-xs text-black/80 font-medium">
                Hardware interlocks cut power instantly upon gas or fire detection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
