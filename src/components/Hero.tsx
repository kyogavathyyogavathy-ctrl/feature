import React from 'react';
import { ArrowRight, Sparkles, Wifi, Zap } from 'lucide-react';
import { StarburstBadge, RibbonBadge, CircularSticker, PillBadge, RetroStar, RetroLightning } from './Graphics';

interface HeroProps {
  onExplore: () => void;
  onOpenDashboard: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onOpenDashboard }) => {
  return (
    <section id="home" className="relative bg-[#FECCD3] border-b-[3px] border-black overflow-hidden px-4 sm:px-8 lg:px-12 pt-10 pb-16 md:pt-14 md:pb-20">
      {/* Background Graphic Accents */}
      <div className="absolute top-4 right-10 opacity-30 select-none pointer-events-none hidden md:block">
        <div className="w-32 h-32 border-4 border-dashed border-black/40 rounded-full animate-spin [animation-duration:30s]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* Left Side: Typography & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start text-left relative">
          {/* Small Script Heading */}
          <div className="flex items-center gap-2 mb-2">
            <span className="font-script text-2xl sm:text-3xl text-black font-bold -rotate-2 inline-block">
              Smart Living, Reimagined
            </span>
            <RetroStar size={20} color="#FFE500" className="animate-pulse" />
          </div>

          {/* Main Huge Headline */}
          <h1 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.88] text-[#45C5E2] retro-display-stroke mb-4 select-none">
            MAKE YOUR<br />
            HOME<br />
            SMARTER.
          </h1>

          {/* Pill Badge */}
          <div className="mb-4">
            <PillBadge bgColor="#FFFFFF" textColor="#000000" className="text-xs sm:text-sm py-1.5 px-4">
              <span className="w-2 h-2 rounded-full bg-[#45C5E2] mr-1 inline-block" />
              SMART HOME AUTOMATION
            </PillBadge>
          </div>

          {/* Supporting Copy */}
          <p className="font-sans text-base sm:text-lg text-black font-semibold max-w-lg mb-8 leading-relaxed">
            Connect your home. Monitor your environment. Automate everyday actions. Stay informed wherever you are.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onExplore}
              className="w-full sm:w-auto px-7 py-3.5 bg-black text-white hover:bg-black/90 font-display text-lg tracking-wider uppercase border-[3px] border-black retro-shadow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black flex items-center justify-center gap-2"
            >
              <span>EXPLORE SYSTEM</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
            <button
              onClick={onOpenDashboard}
              className="w-full sm:w-auto px-7 py-3.5 bg-white text-black hover:bg-[#FFE500] font-display text-lg tracking-wider uppercase border-[3px] border-black retro-shadow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              OPEN DASHBOARD
            </button>
          </div>

          {/* Decorative floating mini elements on left */}
          <div className="hidden sm:block absolute -bottom-10 right-4 pointer-events-none">
            <RetroLightning size={36} color="#FFE500" className="rotate-12" />
          </div>
        </div>

        {/* Right Side: Large Framed Smart Home Visual with Overlapping Stickers */}
        <div className="lg:col-span-6 relative mt-4 lg:mt-0 flex justify-center">
          <div className="relative w-full max-w-[500px]">
            {/* Framed Smart Home Visual */}
            <div className="relative border-[3px] border-black bg-white retro-shadow-xl overflow-hidden group">
              {/* Header Tab of the Image Frame */}
              <div className="bg-[#E6E0FF] border-b-2 border-black px-3 py-1.5 flex items-center justify-between text-xs font-mono font-bold">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-black" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-black" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 border border-black" />
                  <span className="ml-2 uppercase tracking-wider text-[11px]">FIG_01 // IOT_INTERIOR_NODE</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] bg-white px-2 py-0.5 border border-black">
                  <span>WIFI 2.4GHz</span>
                </div>
              </div>

              {/* Main Image Asset */}
              <div className="relative overflow-hidden aspect-[4/3] bg-[#E6E0FF]">
                <img
                  src="/src/assets/images/hero_smart_home_1790330840625.jpg"
                  alt="Retro 90s Smart Home Interior IoT Concept"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                {/* Subtle graphic overlay grid pattern */}
                <div className="absolute inset-0 bg-retro-grid opacity-20 pointer-events-none" />
              </div>

              {/* Image Frame Caption Bar */}
              <div className="bg-black text-white px-3 py-1 text-[11px] font-mono flex items-center justify-between">
                <span>ESP32 RELAY CONTROLLER</span>
                <span className="text-[#FFE500] font-bold">NODE STATUS: ACTIVE</span>
              </div>
            </div>

            {/* Overlapping Hero Stickers */}

            {/* 1. Yellow Circular Sticker "SMART" - Top Left Overlap */}
            <div className="absolute -top-6 -left-6 z-20 transform -rotate-12 transition-transform hover:rotate-0">
              <CircularSticker
                text="SMART"
                subtext="NODE 01"
                bgColor="#FFE500"
                textColor="#000000"
              />
            </div>

            {/* 2. Pink Ribbon "LIVE" - Top Right Overlap */}
            <div className="absolute -top-4 right-4 z-20 transform rotate-6 transition-transform hover:rotate-0">
              <RibbonBadge text="LIVE" bgColor="#F7B9C5" textColor="#000000" />
            </div>

            {/* 3. Black Starburst "24/7 MONITORING" - Bottom Left Overlap */}
            <div className="absolute -bottom-8 -left-6 z-20 transform rotate-6 transition-transform hover:rotate-0">
              <StarburstBadge size="md" bgColor="#000000" textColor="#FFFFFF">
                <span>24/7</span>
                <span className="text-[10px] text-[#FFE500] tracking-normal">MONITORING</span>
              </StarburstBadge>
            </div>

            {/* 4. Cyan Sticker "IOT POWERED" - Bottom Right Overlap */}
            <div className="absolute -bottom-6 -right-4 z-20 transform -rotate-6 transition-transform hover:rotate-0">
              <div className="bg-[#45C5E2] text-black border-2 border-black retro-shadow px-4 py-2 font-display uppercase tracking-wider text-sm font-extrabold flex flex-col items-center">
                <span>IOT</span>
                <span className="text-[10px] font-sans font-black tracking-widest text-black/80">POWERED</span>
              </div>
            </div>

            {/* 5. Wi-Fi Badge Indicator */}
            <div className="absolute top-1/2 -right-5 z-20 transform -translate-y-1/2 rotate-12 hidden sm:block">
              <div className="w-12 h-12 bg-white border-2 border-black retro-shadow-sm rounded-full flex items-center justify-center">
                <Wifi size={22} className="text-black" />
              </div>
            </div>

            {/* 6. Decorative Star */}
            <div className="absolute -top-3 left-1/3 z-20">
              <RetroStar size={24} color="#FFE500" />
            </div>

            {/* 7. Decorative Circle */}
            <div className="absolute bottom-12 -right-8 w-6 h-6 rounded-full bg-[#FFE500] border-2 border-black retro-shadow-sm hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
