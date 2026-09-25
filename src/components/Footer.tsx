import React from 'react';
import { RetroStar, PillBadge } from './Graphics';
import { Wifi, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Automation', href: '#automation' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Technology', href: '#technology' },
  ];

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white p-6 sm:p-10 lg:p-12">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-8 border-b-2 border-black">
        {/* Brand & Project Summary */}
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 bg-[#FFE500] border-2 border-black flex items-center justify-center font-display font-black text-sm">
              A
            </div>
            <span className="font-display text-2xl font-black uppercase tracking-tight text-black">
              SMART HOME AUTOMATION
            </span>
          </div>

          <p className="text-sm font-sans font-medium text-black/80 leading-relaxed mt-2">
            IoT-based home automation using connected sensors, microcontrollers and cloud connectivity.
          </p>

          <div className="flex items-center gap-2 mt-4 text-xs font-mono font-bold text-black/70">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>NODE_GATEWAY: 192.168.1.104 · STA MODE</span>
          </div>
        </div>

        {/* Links Column */}
        <div className="flex flex-col">
          <span className="font-mono text-xs font-black uppercase text-black/60 tracking-widest mb-3">
            QUICK NAVIGATION
          </span>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-bold uppercase text-black hover:text-[#45C5E2] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Info Box */}
        <div className="bg-[#E6E0FF] border-2 border-black p-4 retro-shadow-sm flex flex-col justify-between max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <Cpu size={16} />
            <span className="font-mono text-xs font-bold uppercase text-black">
              FIRMWARE v1.9.96
            </span>
          </div>
          <p className="text-[11px] font-sans font-semibold text-black/80">
            Optimized for academic review, project defense & hackathon exhibition.
          </p>
        </div>
      </div>

      {/* Copyright row */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-black/70">
        <div>© 2026 Smart Home Automation. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <span>ESP32 FIRMWARE</span>
          <span>·</span>
          <span>MQTT BROKER</span>
          <span>·</span>
          <span>FIREBASE SYNC</span>
        </div>
      </div>
    </footer>
  );
};
