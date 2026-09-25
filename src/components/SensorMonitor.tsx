import React from 'react';
import { SensorReading } from '../types';
import { Activity, Thermometer, Droplets, Flame, Sun } from 'lucide-react';
import { RetroStar } from './Graphics';

interface SensorMonitorProps {
  sensors: SensorReading[];
}

export const SensorMonitor: React.FC<SensorMonitorProps> = ({ sensors }) => {
  // Filter for the 5 requested environmental sensors
  const monitoredSensors = sensors.filter((s) => s.sensorType !== 'energy');

  // Simple clean SVG line chart generator
  const renderChart = (history: number[], min: number, max: number) => {
    const width = 240;
    const height = 65;
    const padding = 10;
    const range = max - min || 1;

    const points = history.map((val, idx) => {
      const x = padding + (idx / (history.length - 1)) * (width - 2 * padding);
      const normalizedY = (val - min) / range;
      const y = height - padding - normalizedY * (height - 2 * padding);
      return `${x},${y}`;
    });

    const pathD = `M ${points.join(' L ')}`;

    return (
      <div className="w-full bg-[#E6E0FF] border-2 border-black p-2 mt-3 relative overflow-hidden">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-retro-grid opacity-15 pointer-events-none" />

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-16 overflow-visible">
          {/* Black axes */}
          <line x1="8" y1={height - 8} x2={width - 8} y2={height - 8} stroke="#000000" strokeWidth="2" />
          <line x1="8" y1="8" x2="8" y2={height - 8} stroke="#000000" strokeWidth="2" />

          {/* Cyan data line */}
          <path
            d={pathD}
            fill="none"
            stroke="#45C5E2"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Yellow highlight points on vertices */}
          {history.map((val, idx) => {
            const x = padding + (idx / (history.length - 1)) * (width - 2 * padding);
            const normalizedY = (val - min) / range;
            const y = height - padding - normalizedY * (height - 2 * padding);
            return (
              <circle
                key={idx}
                cx={x}
                cy={y}
                r="3.5"
                fill="#FFE500"
                stroke="#000000"
                strokeWidth="1.5"
              />
            );
          })}
        </svg>

        <div className="flex items-center justify-between text-[9px] font-mono text-black/70 mt-1 uppercase">
          <span>T-60m</span>
          <span className="font-bold text-black">PAST HOUR TREND</span>
          <span>LIVE</span>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white border-b-[3px] border-black p-6 sm:p-10 lg:p-12 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs uppercase tracking-widest text-black/70 font-bold">
              SECTION // 04
            </span>
            <RetroStar size={16} color="#FFE500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none">
            THE DATA<br />
            <span className="text-[#45C5E2] retro-text-shadow">BEHIND THE COMFORT.</span>
          </h2>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs font-bold bg-[#FECCD3] border-2 border-black px-3 py-1.5 retro-shadow-sm">
          <span className="w-2.5 h-2.5 bg-black inline-block animate-ping mr-1" />
          <span>SAMPLING INTERVAL: 2500ms · ADC 12-BIT</span>
        </div>
      </div>

      {/* Grid of 5 Sensor Telemetry Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {monitoredSensors.map((sensor) => {
          let min = 0;
          let max = 100;
          if (sensor.sensorType === 'temperature') {
            min = 20;
            max = 28;
          } else if (sensor.sensorType === 'humidity') {
            min = 50;
            max = 70;
          } else if (sensor.sensorType === 'gas') {
            min = 140;
            max = 200;
          }

          return (
            <div
              key={sensor.id}
              className="bg-[#FECCD3]/30 border-[2.5px] border-black p-5 retro-shadow flex flex-col justify-between"
            >
              {/* Top metadata */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] font-bold uppercase text-black/70 tracking-wider">
                    MODULE // {sensor.id.toUpperCase()}
                  </span>
                  <span className="bg-[#FFE500] text-black border border-black px-2 py-0.5 text-[10px] font-mono font-extrabold uppercase">
                    {sensor.status}
                  </span>
                </div>

                <h3 className="font-display text-2xl uppercase text-black tracking-tight font-extrabold">
                  {sensor.name}
                </h3>

                {/* Big Value Display */}
                <div className="flex items-baseline gap-1 my-3">
                  <span className="font-display text-5xl font-black text-black tabular-nums tracking-tight">
                    {sensor.value}
                  </span>
                  {sensor.unit && (
                    <span className="font-display text-2xl text-black/80 font-bold uppercase">
                      {sensor.unit}
                    </span>
                  )}
                </div>
              </div>

              {/* Graphic Chart */}
              <div>
                {renderChart(sensor.history, min, max)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
