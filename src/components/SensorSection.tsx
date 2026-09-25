import React from 'react';
import { HARDWARE_MODULES } from '../services/mockIotService';
import { Thermometer, Eye, Flame, Sun, Zap, Cpu } from 'lucide-react';
import { RetroStar, CircularSticker, PillBadge } from './Graphics';

export const SensorSection: React.FC = () => {
  const getHardwareIcon = (id: string) => {
    switch (id) {
      case 'hw_dht':
        return <Thermometer size={26} className="text-black" />;
      case 'hw_pir':
        return <Eye size={26} className="text-black" />;
      case 'hw_mq2':
        return <Flame size={26} className="text-black" />;
      case 'hw_ldr':
        return <Sun size={26} className="text-black" />;
      case 'hw_relay':
        return <Zap size={26} className="text-black" />;
      default:
        return <Cpu size={26} className="text-black" />;
    }
  };

  return (
    <section className="bg-white border-b-[3px] border-black p-6 sm:p-10 lg:p-14 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs uppercase tracking-widest text-black/70 font-bold">
              SECTION // 06
            </span>
            <RetroStar size={16} color="#FFE500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none">
            THE<br />
            <span className="text-[#45C5E2] retro-text-shadow">SENSORS.</span>
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <PillBadge bgColor="#FFE500" textColor="#000000">
            COLLECTIBLE HARDWARE SPECS
          </PillBadge>
        </div>
      </div>

      {/* Grid of Collectible Sensor Cards with Editorial Illustration Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: 5 Collectible Hardware Cards in a 2-col or responsive layout */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {HARDWARE_MODULES.map((item) => {
            return (
              <div
                key={item.id}
                className="border-[2.5px] border-black p-5 retro-shadow transition-transform hover:-translate-y-1 relative flex flex-col justify-between"
                style={{ backgroundColor: item.accentColor }}
              >
                {/* Header Sticker Badge */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-black text-[#FFE500] font-mono text-[10px] font-bold uppercase px-2 py-0.5 border border-black">
                      {item.category}
                    </span>
                    <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center retro-shadow-sm">
                      {getHardwareIcon(item.id)}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl uppercase text-black font-black leading-tight tracking-tight">
                    {item.code}
                  </h3>
                  <h4 className="font-sans font-bold text-xs uppercase text-black/80 tracking-wider mb-2">
                    {item.name}
                  </h4>

                  <p className="text-xs text-black font-medium leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="pt-2 border-t-2 border-black/20 flex items-center justify-between text-[11px] font-mono font-bold text-black">
                  <span>PIN: {item.pin}</span>
                  <span className="text-black/70">{item.interfaceType}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Spotlight Microcontroller Hardware Image */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="border-[3px] border-black bg-[#E6E0FF] retro-shadow-lg p-4 flex flex-col h-full justify-between">
            <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3">
              <span className="font-display text-sm uppercase text-black font-bold">
                ESP32 SYSTEM CORE
              </span>
              <span className="bg-black text-white px-2 py-0.5 font-mono text-[10px] font-bold">
                32-BIT DUAL CORE
              </span>
            </div>

            {/* Microcontroller Graphic Asset */}
            <div className="relative border-2 border-black overflow-hidden bg-white mb-3 aspect-square">
              <img
                src="/src/assets/images/iot_microcontroller_1790330859558.jpg"
                alt="ESP32 IoT Prototyping Board and Sensors"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 bg-[#FFE500] text-black border border-black px-2 py-0.5 font-mono text-[10px] font-extrabold uppercase">
                HARDWARE RIG
              </div>
            </div>

            {/* Spec details */}
            <div className="bg-white border-2 border-black p-3 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-black/10">
                <span className="text-black/60">CHIPSET:</span>
                <span className="font-bold text-black">ESP-WROOM-32</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/10">
                <span className="text-black/60">CLOCK:</span>
                <span className="font-bold text-black">240 MHz Tensilica</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-black/60">PERIPHERALS:</span>
                <span className="font-bold text-black">18x ADC, 2x DAC, SPI, I2C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
