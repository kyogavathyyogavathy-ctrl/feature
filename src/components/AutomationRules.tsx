import React, { useState } from 'react';
import { AutomationRule } from '../types';
import { Plus, ArrowRight, CheckCircle2, Sliders, ToggleLeft, ToggleRight, Sparkles } from 'lucide-react';
import { PillBadge, RetroStar } from './Graphics';

interface AutomationRulesProps {
  rules: AutomationRule[];
  onToggleRule: (ruleId: string) => void;
  onOpenAddModal: () => void;
}

export const AutomationRules: React.FC<AutomationRulesProps> = ({
  rules,
  onToggleRule,
  onOpenAddModal,
}) => {
  return (
    <section id="automation" className="bg-[#FECCD3] border-b-[3px] border-black p-6 sm:p-10 lg:p-14 relative">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs uppercase tracking-widest text-black/70 font-bold">
              SECTION // 07
            </span>
            <RetroStar size={16} color="#FFE500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none">
            A SMART HOME<br />
            SHOULD THINK<br />
            <span className="text-white retro-text-shadow">FOR YOU.</span>
          </h2>
        </div>

        {/* Add Automation Action Button */}
        <div>
          <button
            onClick={onOpenAddModal}
            className="px-6 py-3 bg-[#FFE500] hover:bg-yellow-300 text-black border-[3px] border-black font-display text-base tracking-wider uppercase retro-shadow flex items-center gap-2 transition-all hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <Plus size={20} strokeWidth={3} />
            <span>+ ADD AUTOMATION</span>
          </button>
        </div>
      </div>

      {/* Grid of Interactive IF/THEN Rule Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rules.map((rule) => {
          const isActive = rule.enabled;
          return (
            <div
              key={rule.id}
              className={`border-[3px] border-black p-6 retro-shadow transition-all ${
                isActive ? 'bg-white' : 'bg-white/60 opacity-80'
              }`}
            >
              {/* Header: Rule Name & Toggle Switch */}
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full border border-black ${
                      isActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'
                    }`}
                  />
                  <h3 className="font-display text-lg uppercase text-black font-extrabold tracking-tight">
                    {rule.name}
                  </h3>
                </div>

                {/* Tactile Toggle Button */}
                <button
                  onClick={() => onToggleRule(rule.id)}
                  title={isActive ? 'Deactivate rule' : 'Activate rule'}
                  className={`px-3 py-1 border-2 border-black font-mono text-xs font-bold uppercase transition-all retro-shadow-sm ${
                    isActive
                      ? 'bg-black text-white hover:bg-black/80'
                      : 'bg-[#FFE500] text-black hover:bg-yellow-300'
                  }`}
                >
                  {isActive ? 'STATUS: ACTIVE' : 'STATUS: DISABLED'}
                </button>
              </div>

              {/* IF and THEN Block Layout */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 my-2">
                {/* IF Block */}
                <div className="flex-1 bg-[#E6E0FF] border-2 border-black p-3.5 flex flex-col justify-center">
                  <span className="text-[10px] font-mono font-extrabold uppercase text-black/70 mb-1">
                    CONDITION (TRIGGER)
                  </span>
                  <div className="font-display text-sm uppercase text-black font-black">
                    {rule.condition}
                  </div>
                </div>

                {/* Arrow Connector */}
                <div className="self-center w-8 h-8 rounded-full bg-[#FFE500] border-2 border-black flex items-center justify-center font-bold text-black retro-shadow-sm shrink-0">
                  <ArrowRight size={16} strokeWidth={3} />
                </div>

                {/* THEN Block */}
                <div className="flex-1 bg-[#45C5E2] border-2 border-black p-3.5 flex flex-col justify-center">
                  <span className="text-[10px] font-mono font-extrabold uppercase text-black/80 mb-1">
                    EXECUTION (ACTUATOR)
                  </span>
                  <div className="font-display text-sm uppercase text-black font-black">
                    {rule.action}
                  </div>
                </div>
              </div>

              {/* Target Device & Telemetry Note */}
              <div className="mt-4 pt-3 border-t border-black/20 flex items-center justify-between text-xs font-mono text-black/80">
                <span>TARGET: {rule.thenDevice}</span>
                <span className="font-semibold text-black">
                  ACTION: {rule.thenAction}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
