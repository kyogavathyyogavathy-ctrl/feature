import React from 'react';
import { RetroStar, PillBadge } from './Graphics';

interface TechItem {
  name: string;
  category: string;
  bgColor: string;
  textColor: string;
  rotation: string;
}

export const TechnologyStack: React.FC = () => {
  const techItems: TechItem[] = [
    { name: 'ESP32', category: 'SoC Controller', bgColor: '#45C5E2', textColor: '#000000', rotation: '-rotate-2' },
    { name: 'NodeMCU', category: 'ESP8266 Dev Board', bgColor: '#FFE500', textColor: '#000000', rotation: 'rotate-1' },
    { name: 'Arduino IDE', category: 'Development Toolchain', bgColor: '#FECCD3', textColor: '#000000', rotation: '-rotate-1' },
    { name: 'Embedded C/C++', category: 'Firmware Language', bgColor: '#FFFFFF', textColor: '#000000', rotation: 'rotate-2' },
    { name: 'MQTT Protocol', category: 'IoT Telemetry Bus', bgColor: '#FFE500', textColor: '#000000', rotation: '-rotate-3' },
    { name: 'Firebase', category: 'Cloud Database', bgColor: '#FECCD3', textColor: '#000000', rotation: 'rotate-1' },
    { name: 'Wi-Fi 2.4GHz', category: 'Wireless LAN (STA/AP)', bgColor: '#45C5E2', textColor: '#000000', rotation: '-rotate-1' },
    { name: 'Blynk / Custom App', category: 'Mobile Interface', bgColor: '#E6E0FF', textColor: '#000000', rotation: 'rotate-2' },
    { name: 'DHT11 / DHT22', category: 'Temp & Humidity', bgColor: '#FECCD3', textColor: '#000000', rotation: '-rotate-2' },
    { name: 'PIR Motion', category: 'Spatial Detection', bgColor: '#FFE500', textColor: '#000000', rotation: 'rotate-1' },
    { name: 'MQ-2 Gas / Smoke', category: 'Hazard Sensor', bgColor: '#45C5E2', textColor: '#000000', rotation: '-rotate-1' },
    { name: 'LDR Optical', category: 'Lux Photocell', bgColor: '#FFFFFF', textColor: '#000000', rotation: 'rotate-3' },
    { name: '5V Relay Module', category: 'Galvanic Switch', bgColor: '#FECCD3', textColor: '#000000', rotation: '-rotate-2' },
  ];

  return (
    <section id="technology" className="bg-white border-b-[3px] border-black p-6 sm:p-10 lg:p-14 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs uppercase tracking-widest text-black/70 font-bold">
              SECTION // 10
            </span>
            <RetroStar size={16} color="#FFE500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none">
            THE TECH<br />
            <span className="text-[#45C5E2] retro-text-shadow">BEHIND THE MAGIC.</span>
          </h2>
        </div>

        <p className="font-sans text-sm sm:text-base text-black font-semibold max-w-md">
          A blend of industrial micro-electronics, robust embedded C++ drivers, and real-time cloud sync protocols.
        </p>
      </div>

      {/* Tech Badges in a Dynamic Sticker Arrangement */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-6 max-w-5xl mx-auto">
        {techItems.map((tech, idx) => (
          <div
            key={idx}
            className={`border-[2.5px] border-black px-5 py-3.5 retro-shadow transition-all hover:scale-110 hover:z-20 cursor-default flex flex-col items-center justify-center text-center ${tech.rotation}`}
            style={{ backgroundColor: tech.bgColor, color: tech.textColor }}
          >
            <span className="text-[10px] font-mono font-black uppercase tracking-wider text-black/70 mb-0.5">
              {tech.category}
            </span>
            <span className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight leading-none">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
