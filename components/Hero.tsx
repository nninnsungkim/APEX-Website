import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#050505]">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/star-FQYU04P32s9GF5NujZistQSL/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full opacity-80"
          title="APEX Immersive Space"
        ></iframe>
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-2 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-white glow-text mix-blend-screen">
              Your Peak, <br />
              <span className="text-neutral-500">Unlocked.</span>
            </h1>
          </div>
          
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-md border-l border-white/20 pl-6 animate-fade-in-up delay-100">
            Regain control of your focus.APEX combines clinical-grade sensing with real-time behavioral feedback on your device—translating your focus into actionable insight and helping you unlock your full potential.
          </p>

          <div className="flex items-center gap-4 animate-fade-in-up delay-200">
            <button className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md rounded-sm transition-all group">
              <span className="text-xs font-mono tracking-widest text-white">DISCOVER APEX</span>
              <ArrowRight size={14} className="text-white group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#vision" className="text-xs font-mono text-neutral-500 hover:text-white transition-colors tracking-widest px-4">
              [ LEARN MORE ]
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;