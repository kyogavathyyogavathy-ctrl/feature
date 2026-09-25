import React from 'react';
import { ArrowDown, Cpu, Wifi, Database, Layers, Radio, Globe, Terminal, Shield } from 'lucide-react';
import { RetroStar, PillBadge } from './Graphics';

export const ArchitectureDiagram: React.FC = () => {
  return (
    <section id="architecture" className="bg-[#E6E0FF] border-b-[3px] border-black p-6 sm:p-10 lg:p-14 relative overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs uppercase tracking-widest text-black/70 font-bold">
              SECTION // 09 · ENGINEERING BLUEPRINT
            </span>
            <RetroStar size={16} color="#FFE500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none">
            UNDER<br />
            <span className="text-[#45C5E2] retro-text-shadow">THE HOOD.</span>
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <PillBadge bgColor="#FFE500" textColor="#000000">
            JUDGES & TECHNICAL REVIEW SPEC
          </PillBadge>
        </div>
      </div>

      {/* 3-Tier Architecture Flow Presentation */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Tier 1: Perception */}
        <div className="bg-white border-[3px] border-black p-6 sm:p-7 retro-shadow">
          <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#FECCD3] border-2 border-black flex items-center justify-center font-display font-black text-sm">
                01
              </span>
              <h3 className="font-display text-2xl uppercase text-black font-black tracking-tight">
                TIER 1: PERCEPTION LAYER (PHYSICAL SENSORS & RELAYS)
              </h3>
            </div>
            <span className="bg-black text-[#FFE500] font-mono text-[10px] font-bold px-2.5 py-1">
              HARDWARE BUS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="bg-[#FECCD3] border-2 border-black p-3 text-center">
              <div className="font-display text-sm uppercase text-black font-extrabold">DHT11 / 22</div>
              <div className="text-[10px] font-mono text-black/80 font-bold">GPIO 4 · 1-WIRE</div>
            </div>
            <div className="bg-[#FFE500] border-2 border-black p-3 text-center">
              <div className="font-display text-sm uppercase text-black font-extrabold">PIR SENSOR</div>
              <div className="text-[10px] font-mono text-black/80 font-bold">GPIO 13 · DIGITAL</div>
            </div>
            <div className="bg-[#45C5E2] border-2 border-black p-3 text-center">
              <div className="font-display text-sm uppercase text-black font-extrabold">MQ-2 GAS</div>
              <div className="text-[10px] font-mono text-black/80 font-bold">GPIO 34 · ADC1</div>
            </div>
            <div className="bg-[#E6E0FF] border-2 border-black p-3 text-center">
              <div className="font-display text-sm uppercase text-black font-extrabold">LDR LUX</div>
              <div className="text-[10px] font-mono text-black/80 font-bold">GPIO 35 · ADC1</div>
            </div>
            <div className="bg-[#FECCD3] border-2 border-black p-3 text-center col-span-2 sm:col-span-1">
              <div className="font-display text-sm uppercase text-black font-extrabold">5V RELAYS</div>
              <div className="text-[10px] font-mono text-black/80 font-bold">GPIO 18,19,21,22</div>
            </div>
          </div>
        </div>

        {/* Downward Connector Arrow */}
        <div className="flex justify-center">
          <div className="w-10 h-10 bg-[#FFE500] border-2 border-black flex items-center justify-center retro-shadow-sm font-bold text-black animate-bounce">
            <ArrowDown size={22} strokeWidth={3} />
          </div>
        </div>

        {/* Tier 2: Network */}
        <div className="bg-white border-[3px] border-black p-6 sm:p-7 retro-shadow">
          <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#45C5E2] border-2 border-black flex items-center justify-center font-display font-black text-sm">
                02
              </span>
              <h3 className="font-display text-2xl uppercase text-black font-black tracking-tight">
                TIER 2: NETWORK & COMPUTATION LAYER (ESP32 · PROTOCOLS)
              </h3>
            </div>
            <span className="bg-black text-[#45C5E2] font-mono text-[10px] font-bold px-2.5 py-1">
              WIRELESS STACK
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#45C5E2]/30 border-2 border-black p-4">
              <div className="flex items-center gap-2 mb-1">
                <Cpu size={16} />
                <span className="font-display text-sm uppercase font-black text-black">ESP32 / NODEMCU</span>
              </div>
              <p className="text-xs font-mono text-black/80 font-semibold">
                Dual Xtensa LX6 @ 240MHz. FreeRTOS task scheduling for sensor polling and MQTT watchdog reconnect.
              </p>
            </div>

            <div className="bg-[#FFE500]/30 border-2 border-black p-4">
              <div className="flex items-center gap-2 mb-1">
                <Wifi size={16} />
                <span className="font-display text-sm uppercase font-black text-black">WI-FI (802.11 B/G/N)</span>
              </div>
              <p className="text-xs font-mono text-black/80 font-semibold">
                Station mode (STA) connecting to home router. Auto-reconnect fallback with exponential backoff.
              </p>
            </div>

            <div className="bg-[#FECCD3]/40 border-2 border-black p-4">
              <div className="flex items-center gap-2 mb-1">
                <Radio size={16} />
                <span className="font-display text-sm uppercase font-black text-black">MQTT v3.1.1</span>
              </div>
              <p className="text-xs font-mono text-black/80 font-semibold">
                QoS 1 telemetry packets published to topics: <code className="bg-white px-1">home/sensors/#</code> and subscribed to <code className="bg-white px-1">home/actuators/#</code>.
              </p>
            </div>
          </div>
        </div>

        {/* Downward Connector Arrow */}
        <div className="flex justify-center">
          <div className="w-10 h-10 bg-[#FFE500] border-2 border-black flex items-center justify-center retro-shadow-sm font-bold text-black animate-bounce">
            <ArrowDown size={22} strokeWidth={3} />
          </div>
        </div>

        {/* Tier 3: Application */}
        <div className="bg-white border-[3px] border-black p-6 sm:p-7 retro-shadow">
          <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#FFE500] border-2 border-black flex items-center justify-center font-display font-black text-sm">
                03
              </span>
              <h3 className="font-display text-2xl uppercase text-black font-black tracking-tight">
                TIER 3: APPLICATION & PERSISTENCE LAYER (CLOUD & CLIENTS)
              </h3>
            </div>
            <span className="bg-black text-white font-mono text-[10px] font-bold px-2.5 py-1">
              CLOUD REAL-TIME
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#FFE500] border-2 border-black p-4">
              <div className="flex items-center gap-2 mb-1">
                <Database size={16} />
                <span className="font-display text-sm uppercase font-black text-black">FIREBASE FIRESTORE</span>
              </div>
              <p className="text-xs font-mono text-black/90 font-semibold">
                Persistent NoSQL collections for sensor time-series, threshold triggers, and device state sync.
              </p>
            </div>

            <div className="bg-[#45C5E2] border-2 border-black p-4">
              <div className="flex items-center gap-2 mb-1">
                <Globe size={16} />
                <span className="font-display text-sm uppercase font-black text-black">WEB DASHBOARD</span>
              </div>
              <p className="text-xs font-mono text-black/90 font-semibold">
                React + TypeScript SPA running on Vite, responsive across desktop browsers and tablets.
              </p>
            </div>

            <div className="bg-[#FECCD3] border-2 border-black p-4">
              <div className="flex items-center gap-2 mb-1">
                <Terminal size={16} />
                <span className="font-display text-sm uppercase font-black text-black">MOBILE / PWA</span>
              </div>
              <p className="text-xs font-mono text-black/90 font-semibold">
                Lightweight Progressive Web App interface with immediate push alerts and tactile switch toggle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
