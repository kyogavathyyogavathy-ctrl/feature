import React from 'react';
import { Lightbulb, Fan, Power, Sparkles, Sliders, ToggleLeft, ToggleRight, Radio } from 'lucide-react';
import { Device } from '../types';
import { PillBadge } from './Graphics';

interface DeviceControlProps {
  devices: Device[];
  onToggleDevice: (device: Device) => void;
  onToggleMode: (device: Device) => void;
}

export const DeviceControl: React.FC<DeviceControlProps> = ({
  devices,
  onToggleDevice,
  onToggleMode,
}) => {
  const getDeviceIcon = (type: string, active: boolean) => {
    switch (type) {
      case 'light':
        return <Lightbulb size={24} className={active ? 'text-[#FFE500]' : 'text-black/50'} />;
      case 'fan':
        return (
          <Fan
            size={24}
            className={`${active ? 'text-[#45C5E2] animate-spin [animation-duration:2s]' : 'text-black/50'}`}
          />
        );
      case 'plug':
        return <Power size={24} className={active ? 'text-emerald-500' : 'text-black/50'} />;
      default:
        return <Power size={24} className="text-black" />;
    }
  };

  return (
    <section id="dashboard" className="bg-[#FECCD3] border-b-[3px] border-black p-6 sm:p-10 lg:p-12 relative">
      {/* Top Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs uppercase tracking-widest text-black/70 font-bold">
              SECTION // 03
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none">
            CONTROL<br />
            <span className="text-white retro-text-shadow">EVERYTHING.</span>
          </h2>
        </div>

        {/* Prominent Demo Control Notice */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <div className="bg-black text-[#FFE500] border-2 border-black retro-shadow-sm px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <Radio size={14} className="animate-pulse text-[#45C5E2]" />
            <span>DEMO CONTROL MODE</span>
          </div>
          <span className="text-xs font-sans font-bold text-black/80">
            Click switches to simulate relay actuators
          </span>
        </div>
      </div>

      {/* Grid of Tactile Device Switch Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {devices.map((device) => {
          const isOn = device.state;
          return (
            <div
              key={device.id}
              className={`border-[2.5px] border-black p-5 retro-shadow transition-all flex flex-col justify-between ${
                isOn ? 'bg-white' : 'bg-[#E6E0FF]/60'
              }`}
            >
              {/* Header: Icon, Room & Mode Toggle */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-[#FFE500] border-2 border-black retro-shadow-sm flex items-center justify-center">
                    {getDeviceIcon(device.type, isOn)}
                  </div>

                  {/* Auto/Manual Mode Button */}
                  <button
                    onClick={() => onToggleMode(device)}
                    title={`Click to switch mode (Current: ${device.mode})`}
                    className={`px-2 py-1 border-2 border-black text-[10px] font-mono font-extrabold uppercase tracking-wider retro-shadow-sm transition-transform hover:scale-105 ${
                      device.mode === 'AUTO'
                        ? 'bg-[#45C5E2] text-black'
                        : 'bg-white text-black'
                    }`}
                  >
                    MODE: {device.mode}
                  </button>
                </div>

                <span className="text-[11px] font-mono font-bold uppercase text-black/60 block">
                  {device.room}
                </span>
                <h3 className="font-display text-xl uppercase text-black font-black tracking-tight leading-tight mt-0.5">
                  {device.name}
                </h3>
              </div>

              {/* Middle: Power Consumption Telemetry */}
              <div className="my-5 py-2 px-3 border border-black/30 bg-black/5 flex items-center justify-between text-xs font-mono">
                <span className="text-black/70">POWER DRAW</span>
                <span className="font-bold text-black tabular-nums">
                  {isOn ? `${device.powerWatts} W` : '0 W (Standby)'}
                </span>
              </div>

              {/* Bottom: Big Tactile Push Toggle Button */}
              <div className="pt-2 border-t-2 border-black/20 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2.5 h-2.5 rounded-full border border-black ${
                      isOn ? 'bg-emerald-500 animate-pulse' : 'bg-red-400'
                    }`}
                  />
                  <span className="text-xs font-mono font-bold text-black">
                    {isOn ? 'STATE: ON' : 'STATE: OFF'}
                  </span>
                </div>

                {/* Tactile Rocker Switch Button */}
                <button
                  onClick={() => onToggleDevice(device)}
                  className={`px-4 py-2 border-2 border-black font-display text-sm tracking-wider uppercase transition-all retro-shadow-sm active:translate-x-0.5 active:translate-y-0.5 ${
                    isOn
                      ? 'bg-black text-white hover:bg-black/90'
                      : 'bg-[#FFE500] text-black hover:bg-[#FFE500]/90'
                  }`}
                >
                  {isOn ? 'TURN OFF' : 'TURN ON'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Sub-panel with Hardware Wiring Note */}
      <div className="mt-8 bg-white border-2 border-black p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#45C5E2] border border-black inline-block" />
          <span className="font-bold uppercase text-black">
            ACTUATOR INTERFACE: 4-CHANNEL 5V OPTO-ISOLATED RELAY BOARD (ACTIVE LOW)
          </span>
        </div>
        <span className="text-black/70 font-semibold">
          CONTROL BUS: GPIO 18, 19, 21, 22 · INTERLOCKS ARMED
        </span>
      </div>
    </section>
  );
};
