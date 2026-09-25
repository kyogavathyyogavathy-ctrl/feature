import React, { useState } from 'react';
import { AlertNotification } from '../types';
import { AlertTriangle, ShieldAlert, CheckCircle, Bell, Flame, Activity, Thermometer, ShieldCheck } from 'lucide-react';
import { RibbonBadge, StarburstBadge, RetroStar } from './Graphics';

interface AlertCenterProps {
  alerts: AlertNotification[];
  onResolveAlert: (alertId: string) => void;
  onTriggerTestAlert: () => void;
}

export const AlertCenter: React.FC<AlertCenterProps> = ({
  alerts,
  onResolveAlert,
  onTriggerTestAlert,
}) => {
  const [filterSeverity, setFilterSeverity] = useState<'ALL' | 'CRITICAL' | 'WARNING'>('ALL');

  const filteredAlerts = alerts.filter((a) => {
    if (filterSeverity === 'ALL') return true;
    return a.severity === filterSeverity;
  });

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'GAS':
        return <Flame size={20} className="text-[#FFE500]" />;
      case 'MOTION':
        return <Activity size={20} className="text-[#45C5E2]" />;
      case 'TEMPERATURE':
        return <Thermometer size={20} className="text-[#FECCD3]" />;
      default:
        return <AlertTriangle size={20} className="text-[#FFE500]" />;
    }
  };

  return (
    <section className="bg-black text-white border-b-[3px] border-black p-6 sm:p-10 lg:p-14 relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-8 right-12 opacity-15 pointer-events-none hidden md:block">
        <StarburstBadge size="lg" bgColor="#FFE500" textColor="#000000">
          <span>ALARM</span>
          <span>ARMED</span>
        </StarburstBadge>
      </div>

      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <RibbonBadge text="INCIDENT STREAM" bgColor="#FECCD3" textColor="#000000" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFE500] font-bold">
              SECURITY & HAZARD MATRIX
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-none">
            SAFETY<br />
            SHOULD NEVER<br />
            <span className="text-[#FFE500] retro-text-shadow">WAIT.</span>
          </h2>
        </div>

        {/* Action Controls: Trigger Test & Filter */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onTriggerTestAlert}
            className="px-4 py-2.5 bg-[#45C5E2] hover:bg-cyan-300 text-black border-2 border-white font-display text-xs tracking-wider uppercase retro-shadow-sm transition-transform active:translate-y-0.5"
          >
            + TRIGGER TEST ALERT
          </button>

          <div className="flex items-center border-2 border-white bg-black/60 p-1">
            <button
              onClick={() => setFilterSeverity('ALL')}
              className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
                filterSeverity === 'ALL'
                  ? 'bg-[#FFE500] text-black'
                  : 'text-white hover:text-[#FFE500]'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setFilterSeverity('CRITICAL')}
              className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
                filterSeverity === 'CRITICAL'
                  ? 'bg-red-500 text-white'
                  : 'text-white hover:text-red-400'
              }`}
            >
              CRITICAL
            </button>
            <button
              onClick={() => setFilterSeverity('WARNING')}
              className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
                filterSeverity === 'WARNING'
                  ? 'bg-[#FFE500] text-black'
                  : 'text-white hover:text-[#FFE500]'
              }`}
            >
              WARNING
            </button>
          </div>
        </div>
      </div>

      {/* Grid / List of Alerts */}
      <div className="space-y-4 relative z-10">
        {filteredAlerts.map((alert) => {
          const isCritical = alert.severity === 'CRITICAL';
          const isWarning = alert.severity === 'WARNING';
          const isResolved = alert.resolved;

          return (
            <div
              key={alert.id}
              className={`border-2 p-5 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                isResolved
                  ? 'bg-neutral-900 border-neutral-700 opacity-60'
                  : isCritical
                  ? 'bg-neutral-950 border-red-500 shadow-[4px_4px_0px_#ef4444]'
                  : 'bg-neutral-950 border-[#FFE500] shadow-[4px_4px_0px_#FFE500]'
              }`}
            >
              {/* Left Details */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 border-2 flex items-center justify-center shrink-0 ${
                    isCritical
                      ? 'bg-red-950 border-red-500'
                      : isWarning
                      ? 'bg-yellow-950 border-[#FFE500]'
                      : 'bg-neutral-800 border-white'
                  }`}
                >
                  {getAlertIcon(alert.type)}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`px-2 py-0.5 font-mono text-[10px] font-extrabold uppercase border ${
                        isCritical
                          ? 'bg-red-500 text-black border-red-400'
                          : 'bg-[#FFE500] text-black border-yellow-300'
                      }`}
                    >
                      {alert.severity}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">
                      {alert.timestamp}
                    </span>
                    {isResolved && (
                      <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 text-[10px] font-mono">
                        RESOLVED
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl uppercase tracking-tight text-white mb-1">
                    {alert.title}
                  </h3>
                  <p className="text-sm font-sans text-neutral-300 max-w-2xl font-medium">
                    {alert.message}
                  </p>
                </div>
              </div>

              {/* Right Action */}
              <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                {!isResolved ? (
                  <button
                    onClick={() => onResolveAlert(alert.id)}
                    className="px-4 py-2 bg-white hover:bg-neutral-200 text-black font-display text-xs tracking-wider uppercase border border-white retro-shadow-sm flex items-center gap-1.5"
                  >
                    <CheckCircle size={14} strokeWidth={2.5} />
                    <span>MARK RESOLVED</span>
                  </button>
                ) : (
                  <span className="text-xs font-mono text-neutral-400 uppercase">
                    Status: Acknowledged
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Banner */}
      <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <ShieldAlert size={14} className="text-[#FFE500]" />
          <span>LOCAL AUDIBLE BUZZER & FLAME INTERLOCK: ACTIVE</span>
        </div>
        <span className="text-neutral-500 mt-2 sm:mt-0">
          AUTO SMS / WEBHOOK GATEWAY READY
        </span>
      </div>
    </section>
  );
};
