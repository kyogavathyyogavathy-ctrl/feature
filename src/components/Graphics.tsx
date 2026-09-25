import React from 'react';

/**
 * Retro 90s Graphic Starburst sticker
 */
export const StarburstBadge: React.FC<{
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  bgColor?: string;
  textColor?: string;
}> = ({
  children,
  className = '',
  size = 'md',
  bgColor = '#000000',
  textColor = '#FFFFFF',
}) => {
  const sizeClasses = {
    sm: 'w-20 h-20 text-[10px]',
    md: 'w-28 h-28 text-xs',
    lg: 'w-36 h-36 text-sm',
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center font-display uppercase tracking-wider text-center select-none ${sizeClasses} ${className}`}
      style={{ filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.9))' }}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        style={{ fill: bgColor }}
      >
        <path d="M50 0 L58 24 L84 15 L75 40 L98 50 L75 60 L84 85 L58 76 L50 100 L42 76 L16 85 L25 60 L2 50 L25 40 L16 15 L42 24 Z" />
      </svg>
      <div
        className="relative z-10 px-2 leading-tight font-extrabold flex flex-col items-center justify-center"
        style={{ color: textColor }}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * Retro Slanted Ribbon badge
 */
export const RibbonBadge: React.FC<{
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}> = ({
  text,
  bgColor = '#FECCD3',
  textColor = '#000000',
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center px-4 py-1.5 font-display text-sm tracking-wider uppercase border-2 border-black retro-shadow-sm select-none ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping mr-2" />
      {text}
    </div>
  );
};

/**
 * Circular Retro Sticker with black outline
 */
export const CircularSticker: React.FC<{
  text: string;
  subtext?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}> = ({
  text,
  subtext,
  bgColor = '#FFE500',
  textColor = '#000000',
  className = '',
}) => {
  return (
    <div
      className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-black retro-shadow flex flex-col items-center justify-center font-display text-center select-none uppercase tracking-wide transition-transform hover:scale-105 ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="text-sm md:text-base font-extrabold leading-tight">{text}</span>
      {subtext && <span className="text-[10px] tracking-normal opacity-85 font-sans font-bold">{subtext}</span>}
    </div>
  );
};

/**
 * Pill Sticker / Badge
 */
export const PillBadge: React.FC<{
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  className?: string;
}> = ({
  children,
  bgColor = '#FFFFFF',
  textColor = '#000000',
  className = '',
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-black retro-shadow-sm font-sans font-bold text-xs uppercase tracking-wider ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </span>
  );
};

/**
 * 4-Point Retro Star SVG
 */
export const RetroStar: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 28, color = '#FFE500', className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinejoin="round"
      className={`inline-block ${className}`}
    >
      <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" />
    </svg>
  );
};

/**
 * Retro Lightning Bolt SVG
 */
export const RetroLightning: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 32, color = '#FFE500', className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinejoin="round"
      className={`inline-block filter drop-shadow-[2px_2px_0px_#000] ${className}`}
    >
      <path d="M13 2 L3 14 H12 L11 22 L21 10 H12 Z" />
    </svg>
  );
};
