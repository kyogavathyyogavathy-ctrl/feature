import React from 'react';
import { ArrowDown, ArrowRight, Eye, Radio, Smartphone, Cpu, ShieldAlert, Wifi, Database } from 'lucide-react';
import { StarburstBadge, RetroStar, PillBadge } from './Graphics';

export const HowSystemWorks: React.FC = () => {
  return (
    <section className="bg-[#E6E0FF] border-b-[3px] border-black p-6 sm:p-10 lg:p-14 relative overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs uppercase tracking-widest text-black/70 font-bold">
              SECTION // 05
            </span>
            <RetroStar size={16} color="#FFE500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none">
            HOW THE SYSTEM<br />
            <span className="text-[#45C5E2] retro-text-shadow">THINKS.</span>
          </h2>
        </div>

        <p className="font-sans text-sm sm:text-base text-black font-semibold max-w-md">
          A continuous loop of perception, wireless protocol relaying, cloud computation, and instant galvanic relay actuation.
        </p>
      </div>

      {/* 3 Prominent Architectural Layers (Editorial Infographic Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Layer 1: Perception */}
        <div className="bg-white border-[3px] border-black p-6 retro-shadow relative">
          <div className="absolute -top-3.5 left-4 bg-[#FECCD3] border-2 border-black px-3 py-0.5 font-display text-xs uppercase tracking-wider font-black">
            LAYER 01
          </div>
          <div className="w-12 h-12 bg-[#FFE500] border-2 border-black flex items-center justify-center mb-4 mt-2">
            <Eye size={24} className="text-black" />
          </div>
          <h3 className="font-display text-2xl uppercase text-black font-black mb-2">
            PERCEPTION LAYER
          </h3>
          <p className="text-xs text-black/80 font-medium leading-relaxed mb-4">
            Environmental sensors continuously capture physical phenomena: temperature, humidity, human movement, and hazardous combustible gases.
          </p>
          <div className="bg-[#E6E0FF] border border-black p-2 font-mono text-[11px] font-bold">
            COMPONENTS: DHT22 · PIR HC-SR501 · MQ-2 · LDR · 5V RELAYS
          </div>
        </div>

        {/* Layer 2: Network */}
        <div className="bg-white border-[3px] border-black p-6 retro-shadow relative">
          <div className="absolute -top-3.5 left-4 bg-[#45C5E2] border-2 border-black px-3 py-0.5 font-display text-xs uppercase tracking-wider font-black">
            LAYER 02
          </div>
          <div className="w-12 h-12 bg-[#FECCD3] border-2 border-black flex items-center justify-center mb-4 mt-2">
            <Radio size={24} className="text-black" />
          </div>
          <h3 className="font-display text-2xl uppercase text-black font-black mb-2">
            NETWORK LAYER
          </h3>
          <p className="text-xs text-black/80 font-medium leading-relaxed mb-4">
            ESP32 / NodeMCU microcontrollers process raw analog and digital buses, then transmit telemetry using lightweight MQTT & Wi-Fi sockets.
          </p>
          <div className="bg-[#FFE500]/50 border border-black p-2 font-mono text-[11px] font-bold">
            PROTOCOLS: IEEE 802.11 b/g/n · MQTT v3.1.1 · TCP/IP · TLS 1.3
          </div>
        </div>

        {/* Layer 3: Application */}
        <div className="bg-white border-[3px] border-black p-6 retro-shadow relative">
          <div className="absolute -top-3.5 left-4 bg-[#FFE500] border-2 border-black px-3 py-0.5 font-display text-xs uppercase tracking-wider font-black">
            LAYER 03
          </div>
          <div className="w-12 h-12 bg-[#45C5E2] border-2 border-black flex items-center justify-center mb-4 mt-2">
            <Smartphone size={24} className="text-black" />
          </div>
          <h3 className="font-display text-2xl uppercase text-black font-black mb-2">
            APPLICATION LAYER
          </h3>
          <p className="text-xs text-black/80 font-medium leading-relaxed mb-4">
            Cloud database triggers threshold automations and delivers interactive dashboards to users on desktop web and mobile handheld devices.
          </p>
          <div className="bg-[#FECCD3]/50 border border-black p-2 font-mono text-[11px] font-bold">
            SERVICES: FIREBASE FIRESTORE · WEB APPLET · MOBILE PWA
          </div>
        </div>
      </div>

      {/* Large Visual Flowchart Pipeline (Magazine Infographic Style) */}
      <div className="bg-white border-[3px] border-black p-6 sm:p-8 retro-shadow-lg">
        <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-6">
          <span className="font-display text-lg uppercase tracking-wider text-black font-bold">
            DATA PIPELINE FLOW
          </span>
          <span className="font-mono text-xs text-black/70 font-bold uppercase">
            END-TO-END COMMAND CYCLE: ~1.2s
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-center">
          {/* Node 1: SENSORS */}
          <div className="bg-[#FECCD3] border-2 border-black p-3.5 text-center retro-shadow-sm flex flex-col items-center">
            <span className="text-[10px] font-mono font-bold uppercase text-black/60">01. CAPTURE</span>
            <span className="font-display text-base font-black uppercase text-black mt-1">SENSORS</span>
            <span className="text-[9px] font-mono text-black/80 mt-1">DHT22 · PIR · MQ2</span>
          </div>

          {/* Node 2: ESP32 */}
          <div className="bg-[#45C5E2] border-2 border-black p-3.5 text-center retro-shadow-sm flex flex-col items-center">
            <span className="text-[10px] font-mono font-bold uppercase text-black/60">02. COMPUTE</span>
            <span className="font-display text-base font-black uppercase text-black mt-1">ESP32 / MCU</span>
            <span className="text-[9px] font-mono text-black/80 mt-1">FreeRTOS · ADC</span>
          </div>

          {/* Node 3: WI-FI / MQTT */}
          <div className="bg-[#FFE500] border-2 border-black p-3.5 text-center retro-shadow-sm flex flex-col items-center">
            <span className="text-[10px] font-mono font-bold uppercase text-black/60">03. TRANSMIT</span>
            <span className="font-display text-base font-black uppercase text-black mt-1">WI-FI / MQTT</span>
            <span className="text-[9px] font-mono text-black/80 mt-1">Pub/Sub Broker</span>
          </div>

          {/* Node 4: CLOUD */}
          <div className="bg-[#E6E0FF] border-2 border-black p-3.5 text-center retro-shadow-sm flex flex-col items-center">
            <span className="text-[10px] font-mono font-bold uppercase text-black/60">04. STORE & LOGIC</span>
            <span className="font-display text-base font-black uppercase text-black mt-1">CLOUD DB</span>
            <span className="text-[9px] font-mono text-black/80 mt-1">Firebase Sync</span>
          </div>

          {/* Node 5: WEB / APP */}
          <div className="bg-[#FECCD3] border-2 border-black p-3.5 text-center retro-shadow-sm flex flex-col items-center">
            <span className="text-[10px] font-mono font-bold uppercase text-black/60">05. DISPATCH</span>
            <span className="font-display text-base font-black uppercase text-black mt-1">WEB / APP</span>
            <span className="text-[9px] font-mono text-black/80 mt-1">AURA Interface</span>
          </div>

          {/* Node 6: APPLIANCES */}
          <div className="bg-black text-[#FFE500] border-2 border-black p-3.5 text-center retro-shadow-sm flex flex-col items-center">
            <span className="text-[10px] font-mono font-bold uppercase text-white/60">06. ACTUATE</span>
            <span className="font-display text-base font-black uppercase text-white mt-1">APPLIANCES</span>
            <span className="text-[9px] font-mono text-[#45C5E2] mt-1">Relays · Loads</span>
          </div>
        </div>
      </div>
    </section>
  );
};
