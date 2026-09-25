import React from 'react';
import { Check, Info, AlertTriangle, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  type: 'success' | 'info' | 'warning';
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
      {toasts.map((toast) => {
        let bg = 'bg-[#FFE500]';
        let icon = <Check size={18} className="text-black" strokeWidth={2.5} />;
        if (toast.type === 'warning') {
          bg = 'bg-[#FECCD3]';
          icon = <AlertTriangle size={18} className="text-black" strokeWidth={2.5} />;
        } else if (toast.type === 'info') {
          bg = 'bg-[#45C5E2]';
          icon = <Info size={18} className="text-black" strokeWidth={2.5} />;
        }

        return (
          <div
            key={toast.id}
            className={`${bg} border-[2.5px] border-black p-3.5 retro-shadow flex items-center justify-between gap-3 pointer-events-auto animate-in slide-in-from-bottom duration-200`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-white border border-black flex items-center justify-center shrink-0">
                {icon}
              </div>
              <span className="font-display text-sm uppercase tracking-wide text-black font-extrabold">
                {toast.title}
              </span>
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              className="p-1 hover:bg-black/10 transition-colors"
              aria-label="Dismiss toast"
            >
              <X size={16} className="text-black" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
