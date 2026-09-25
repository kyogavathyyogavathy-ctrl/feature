import React, { useState } from 'react';
import { X, Plus, Sparkles, ArrowRight } from 'lucide-react';
import { AutomationRule } from '../types';

interface AddAutomationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddRule: (rule: Omit<AutomationRule, 'id'>) => void;
}

export const AddAutomationModal: React.FC<AddAutomationModalProps> = ({
  isOpen,
  onClose,
  onAddRule,
}) => {
  const [name, setName] = useState('');
  const [sensor, setSensor] = useState('temperature');
  const [operator, setOperator] = useState<'>' | '<' | '==' | '!=' | 'DETECTS'>('>');
  const [threshold, setThreshold] = useState('28°C');
  const [device, setDevice] = useState('Ceiling Fan');
  const [action, setAction] = useState<'ON' | 'OFF' | 'TRIGGER ALERT'>('ON');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const conditionText = `IF ${sensor.toUpperCase()} ${operator} ${threshold}`;
    const actionText = action === 'TRIGGER ALERT' ? 'TRIGGER SAFETY ALERT' : `TURN ${device.toUpperCase()} ${action}`;

    onAddRule({
      name,
      condition: conditionText,
      action: actionText,
      ifField: sensor,
      ifOperator: operator,
      ifValue: threshold,
      thenDevice: device,
      thenAction: action,
      enabled: true,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-lg bg-white border-[3px] border-black retro-shadow-xl overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Modal Window Header */}
        <div className="bg-[#FFE500] border-b-[3px] border-black px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-400 border border-black inline-block" />
            <span className="font-display uppercase text-sm tracking-wider font-black text-black">
              + CREATE AUTOMATION TRIGGER
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 bg-white border-2 border-black flex items-center justify-center retro-shadow-sm hover:bg-slate-100"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-black mb-1">
              RULE TITLE / LABEL
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Eco Night Fan Activation"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-2 border-black px-3 py-2 text-sm font-sans font-semibold focus:outline-none focus:ring-2 focus:ring-[#45C5E2]"
            />
          </div>

          {/* IF Condition Builder */}
          <div className="bg-[#E6E0FF] border-2 border-black p-3.5 space-y-2">
            <span className="text-[10px] font-mono font-black uppercase text-black/70 block">
              1. WHEN SENSOR MEETS CONDITION (IF)
            </span>
            <div className="grid grid-cols-3 gap-2">
              <select
                value={sensor}
                onChange={(e) => setSensor(e.target.value)}
                className="border-2 border-black bg-white px-2 py-1.5 text-xs font-mono font-bold"
              >
                <option value="temperature">TEMPERATURE</option>
                <option value="humidity">HUMIDITY</option>
                <option value="motion">MOTION (PIR)</option>
                <option value="gas">GAS LEVEL (MQ2)</option>
                <option value="light">LIGHT (LDR)</option>
              </select>

              <select
                value={operator}
                onChange={(e) => setOperator(e.target.value as any)}
                className="border-2 border-black bg-white px-2 py-1.5 text-xs font-mono font-bold"
              >
                <option value=">">&gt; (GREATER)</option>
                <option value="<">&lt; (LESS THAN)</option>
                <option value="==">== (EQUALS)</option>
                <option value="DETECTS">DETECTS</option>
              </select>

              <input
                type="text"
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                placeholder="Value"
                className="border-2 border-black bg-white px-2 py-1.5 text-xs font-mono font-bold"
              />
            </div>
          </div>

          {/* THEN Action Builder */}
          <div className="bg-[#45C5E2]/40 border-2 border-black p-3.5 space-y-2">
            <span className="text-[10px] font-mono font-black uppercase text-black/80 block">
              2. EXECUTE ACTUATION (THEN)
            </span>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={device}
                onChange={(e) => setDevice(e.target.value)}
                className="border-2 border-black bg-white px-2 py-1.5 text-xs font-mono font-bold"
              >
                <option value="Living Room Light">Living Room Light</option>
                <option value="Bedroom Light">Bedroom Light</option>
                <option value="Ceiling Fan">Ceiling Fan</option>
                <option value="Smart Plug">Smart Plug</option>
                <option value="Safety Buzzer">Safety Buzzer</option>
              </select>

              <select
                value={action}
                onChange={(e) => setAction(e.target.value as any)}
                className="border-2 border-black bg-white px-2 py-1.5 text-xs font-mono font-bold"
              >
                <option value="ON">TURN ON</option>
                <option value="OFF">TURN OFF</option>
                <option value="TRIGGER ALERT">TRIGGER ALERT</option>
              </select>
            </div>
          </div>

          {/* Submit & Cancel Buttons */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold font-mono uppercase border-2 border-black bg-white hover:bg-slate-100"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-display tracking-wider uppercase border-2 border-black bg-black text-white hover:bg-black/90 retro-shadow-sm flex items-center gap-1.5"
            >
              <Plus size={16} strokeWidth={3} />
              <span>SAVE AUTOMATION</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
