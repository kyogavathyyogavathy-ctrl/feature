import React from 'react';
import { Wifi, Lock, RefreshCw, Cpu } from 'lucide-react';

interface BrowserFrameProps {
  children: React.ReactNode;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#D0C7FE] bg-retro-dots p-2 sm:p-4 md:p-8 flex flex-col items-center justify-start">
      {/* Outer Floating Tag */}
      <header className="w-full max-w-[1240px] mb-2 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-black">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-black inline-block" />
          <span>AURA HOME OS // 90s RETRO EDITION</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px]">
          <span>FREQ: 2.4 GHz</span>
          <span>PROTOCOL: MQTT v3.1.1</span>
          <span className="bg-[#FFE500] px-2 py-0.5 border border-black retro-shadow-sm font-sans font-extrabold text-[10px]">
            DEMO BUILD 2026
          </span>
        </div>
      </header>

      {/* Main Browser Window Frame */}
      <div className="w-full max-w-[1240px] bg-white border-[3px] border-black retro-shadow-xl overflow-hidden flex flex-col transition-all">
        {/* Top Browser Bar */}
        <div className="bg-[#E6E0FF] border-b-[3px] border-black px-4 py-2.5 flex items-center justify-between gap-3 select-none">
          {/* Left: 3 Classic Browser Dots */}
          <div className="flex items-center gap-2">
            <span
              className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border-[1.5px] border-black transition-transform hover:scale-110 cursor-pointer"
              title="Close window"
            />
            <span
              className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border-[1.5px] border-black transition-transform hover:scale-110 cursor-pointer"
              title="Minimize window"
            />
            <span
              className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border-[1.5px] border-black transition-transform hover:scale-110 cursor-pointer"
              title="Expand window"
            />
          </div>

          {/* Center: Address Bar */}
          <div className="flex-1 max-w-xl mx-2 bg-white border-2 border-black px-3 py-1 flex items-center justify-between text-xs font-mono retro-shadow-sm">
            <div className="flex items-center gap-2 truncate">
              <Lock size={12} className="text-black/70 shrink-0" />
              <span className="text-black font-semibold truncate">
                iot://aura-station.gateway:8080/esp32-living-node
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0 text-black/60 pl-2">
              <RefreshCw size={12} className="cursor-pointer hover:rotate-180 transition-transform duration-300" />
            </div>
          </div>

          {/* Right: Connectivity Status */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-bold">
            <span className="flex items-center gap-1 bg-[#45C5E2] px-2 py-0.5 border border-black text-[10px] retro-shadow-sm">
              <Wifi size={11} strokeWidth={2.5} />
              <span>CONNECTED</span>
            </span>
          </div>
        </div>

        {/* Content Area Inside Browser */}
        <div className="flex-1 flex flex-col bg-white">
          {children}
        </div>
      </div>

      {/* Frame Bottom Details */}
      <footer className="w-full max-w-[1240px] mt-4 flex items-center justify-between text-[11px] font-mono font-bold text-black/80 px-1">
        <span>FRAME RES: 1240 × VIEWPORT AUTO</span>
        <span>AURA EMBEDDED SYSTEM · ALL SENSORS NOMINAL</span>
      </footer>
    </div>
  );
};
