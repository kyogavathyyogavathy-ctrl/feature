import React, { useState } from 'react';
import { Menu, X, Wifi, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PillBadge } from './Graphics';

interface NavbarProps {
  onOpenSignIn: () => void;
  onOpenGetStarted: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSignIn,
  onOpenGetStarted,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'FEATURES', href: '#features' },
    { label: 'DASHBOARD', href: '#dashboard' },
    { label: 'AUTOMATION', href: '#automation' },
    { label: 'ARCHITECTURE', href: '#architecture' },
    { label: 'TECHNOLOGY', href: '#technology' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b-2 border-black px-4 sm:px-6 py-3 transition-all">
      <div className="flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <div className="w-8 h-8 rounded-none bg-[#FFE500] border-2 border-black retro-shadow-sm flex items-center justify-center font-display font-extrabold text-lg text-black transition-transform group-hover:-rotate-3">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-tight text-xl font-black leading-none text-black">
                AURA<span className="text-[#45C5E2]">.IoT</span>
              </span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-black/70">
                ESP32 AUTO SYS
              </span>
            </div>
          </a>

          {/* Micro status indicator */}
          <div className="hidden lg:flex items-center gap-1.5 ml-4 px-2 py-0.5 border border-black/30 rounded bg-[#E6E0FF] text-[10px] font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>NODE_01: ONLINE</span>
          </div>
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wider transition-colors border ${
                  isActive
                    ? 'border-black bg-[#FFE500] text-black retro-shadow-sm'
                    : 'border-transparent text-black hover:border-black/40 hover:bg-[#E6E0FF]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={onOpenSignIn}
            className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-slate-100 border-2 border-black retro-shadow-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            SIGN IN
          </button>
          <button
            onClick={onOpenGetStarted}
            className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-black bg-[#27C93F] hover:bg-[#22b837] border-2 border-black retro-shadow-sm flex items-center gap-1 transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <span>GET STARTED</span>
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 border-2 border-black bg-[#FFE500] retro-shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t-2 border-black flex flex-col gap-2 pb-2 bg-white animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 mb-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2 text-xs font-bold uppercase border-2 border-black bg-[#E6E0FF] hover:bg-[#FFE500] text-center retro-shadow-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-black/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignIn();
              }}
              className="flex-1 py-2 text-xs font-bold uppercase border-2 border-black bg-white text-center"
            >
              SIGN IN
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="flex-1 py-2 text-xs font-bold uppercase border-2 border-black bg-[#27C93F] hover:bg-[#22b837] text-black text-center"
            >
              GET STARTED
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
