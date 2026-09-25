import React from 'react';
import { RetroStar, PillBadge } from './Graphics';

export const MetricsSection: React.FC = () => {
  const metrics = [
    {
      value: '~1.2–1.6s',
      label: 'Average command latency',
      description: 'Roundtrip broker transit time from client touch event to relay coil closure.',
      bgColor: '#FECCD3',
    },
    {
      value: '48 HOURS',
      label: 'Continuous sensor test',
      description: 'Zero memory leaks, stack overflows or unhandled watchdog resets under sustained polling.',
      bgColor: '#FFE500',
    },
    {
      value: '<2 SEC',
      label: 'Mobile actuation',
      description: 'Typical mobile command to physical mechanical switch actuation via MQTT QoS 1.',
      bgColor: '#45C5E2',
    },
    {
      value: 'AUTO RECONNECT',
      label: 'Wi-Fi Interruption Recovery',
      description: 'Instant state restoration upon router reconnection with exponential backoff algorithm.',
      bgColor: '#E6E0FF',
    },
  ];

  return (
    <section className="bg-[#FECCD3] border-b-[3px] border-black p-6 sm:p-10 lg:p-14 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs uppercase tracking-widest text-black/70 font-bold">
              SECTION // 11 · EMPIRICAL VERIFICATION
            </span>
            <RetroStar size={16} color="#FFE500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none">
            TESTED.<br />
            CONNECTED.<br />
            <span className="text-white retro-text-shadow">RESPONSIVE.</span>
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <PillBadge bgColor="#FFFFFF" textColor="#000000">
            BENCHMARKED HARDWARE RIG
          </PillBadge>
        </div>
      </div>

      {/* Grid of Huge Editorial Poster Numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="border-[3px] border-black p-6 retro-shadow flex flex-col justify-between transition-transform hover:-translate-y-1"
            style={{ backgroundColor: item.bgColor }}
          >
            <div>
              <span className="text-xs font-mono font-black uppercase text-black/70 block mb-2">
                METRIC #{idx + 1}
              </span>
              <div className="font-display text-4xl sm:text-5xl font-black text-black tracking-tight leading-none mb-3">
                {item.value}
              </div>
              <h3 className="font-sans text-sm font-bold uppercase text-black mb-2">
                {item.label}
              </h3>
            </div>

            <p className="text-xs text-black/80 font-medium leading-relaxed pt-3 border-t-2 border-black/20">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
