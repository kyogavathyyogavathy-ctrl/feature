import React, { useState } from 'react';
import { X, Lock, Key, ArrowRight, ShieldCheck } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
  mode?: 'signin' | 'getstarted';
}

export const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  mode = 'signin',
}) => {
  const [email, setEmail] = useState('demo.operator@aura-iot.internal');
  const [password, setPassword] = useState('••••••••••••');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(email);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white border-[3px] border-black retro-shadow-xl overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#FECCD3] border-b-[3px] border-black px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock size={16} className="text-black" />
            <span className="font-display uppercase text-sm tracking-wider font-black text-black">
              {mode === 'signin' ? 'OPERATOR SIGN IN' : 'CONNECT TO AURA SYSTEM'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 bg-white border-2 border-black flex items-center justify-center retro-shadow-sm hover:bg-slate-100"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="bg-[#E6E0FF] border-2 border-black p-3 text-xs font-mono">
            <span className="font-bold text-black uppercase block mb-1">
              DEMO ACCESS GRANTED
            </span>
            <span className="text-black/80">
              Authentication simulated for project evaluation. Enter credentials or click Proceed.
            </span>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase text-black mb-1">
              OPERATOR ID / EMAIL
            </label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-black px-3 py-2 text-sm font-mono font-semibold focus:outline-none focus:ring-2 focus:ring-[#45C5E2]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase text-black mb-1">
              ACCESS TOKEN / PASSWORD
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-black px-3 py-2 text-sm font-mono font-semibold focus:outline-none focus:ring-2 focus:ring-[#45C5E2]"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono font-bold uppercase border-2 border-black bg-white hover:bg-slate-100"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-display tracking-wider uppercase border-2 border-black bg-black text-white hover:bg-black/90 retro-shadow-sm flex items-center gap-1.5"
            >
              <span>{mode === 'signin' ? 'ENTER DASHBOARD' : 'START MONITORING'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
