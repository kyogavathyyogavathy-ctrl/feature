import React from 'react';
import { Thermometer, Droplets, Activity, Flame, Sun, Zap, Info } from 'lucide-react';
import { PillBadge, CircularSticker } from './Graphics';
import { SensorReading } from '../types';

interface StatusOverviewProps {
  sensors: SensorReading[];
}

export const StatusOverview: React.FC<StatusOverviewProps> = ({ sensors }) => {
  // Pastel background cycle for the retro editorial look
  const bgColors = [
    '#FECCD3', // Pink
    '#45C5E2', // Cyan
    '#FFE500', // Yellow
    '#E6E0FF', // Light Lavender
    '#F7B9C5', // Light Pink
    '#D0C7FE', // Lavender
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'temperature':
        return <Thermometer size={18} className="text-black" />;
      case 'humidity':
        return <Droplets size={18} className="text-black" />;
      case 'motion':
        return <Activity size={18} className="text-black" />;
      case 'gas':
        return <Flame size={18} className="text-black" />;
      case 'light':
        return <Sun size={18} className="text-black" />;
      case 'energy':
        return <Zap size={18} className="text-black" />;
      default:
        return <Activity size={18} className="text-black" />;
    }
  };

  return (
    <section className="bg-white border-b-[3px] border-black p-6 sm:p-10 lg:p-12 relative">
      {/* Section Header with Simulation Mode Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs uppercase tracking-widest text-black/70 font-bold">
              SECTION // 02
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none">
            YOUR HOME<br />
            <span className="text-[#45C5E2] retro-text-shadow">AT A GLANCE.</span>
          </h2>
        </div>

        {/* Prominent Mandatory SIMULATION MODE Notice */}
        <div className="flex items-center gap-3">
          <div className="bg-[#FFE500] border-2 border-black retro-shadow-sm px-4 py-2 flex items-center gap-2">
            <Info size={16} strokeWidth={2.5} className="text-black" />
            <div className="flex flex-col">
              <span className="font-display text-xs tracking-wider uppercase text-black font-extrabold">
                SIMULATION MODE
              </span>
              <span className="text-[10px] font-sans font-bold text-black/80">
                Demo values · Connect ESP32 for live feed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of 6 Status Modules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sensors.map((sensor, idx) => {
          const bg = bgColors[idx % bgColors.length];
          return (
            <div
              key={sensor.id}
              className="border-[2.5px] border-black p-5 retro-shadow transition-all hover:-translate-y-1 hover:retro-shadow-lg flex flex-col justify-between"
              style={{ backgroundColor: bg }}
            >
              {/* Top row: Label & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-sm tracking-wider uppercase text-black font-bold">
                  {sensor.name}
                </span>
                <div className="w-8 h-8 rounded-none bg-white border-2 border-black flex items-center justify-center retro-shadow-sm">
                  {getIcon(sensor.sensorType)}
                </div>
              </div>

              {/* Middle row: Big Bold Value */}
              <div className="my-2">
                <div className="flex items-baseline gap-1 font-display text-4xl sm:text-5xl font-extrabold text-black tracking-tight">
                  <span className="tabular-nums">{sensor.value}</span>
                  {sensor.unit && (
                    <span className="text-xl sm:text-2xl font-bold uppercase text-black/80">
                      {sensor.unit}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom row: Status badge & pulse dot */}
              <div className="mt-4 pt-3 border-t-2 border-black/20 flex items-center justify-between text-xs font-mono font-bold">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                  <span className="uppercase text-black">{sensor.status}</span>
                </div>
                <span className="text-[10px] text-black/70 uppercase">
                  {sensor.timestamp}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
