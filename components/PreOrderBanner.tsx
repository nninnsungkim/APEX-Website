import React from 'react';
import { ArrowRight } from 'lucide-react';

const PreOrderBanner: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
           <span className="inline-block py-1 px-3 border border-white/20 rounded-full bg-white/5 text-[10px] font-mono tracking-widest text-neutral-300 mb-6">
             LIMITED EARLY ACCESS
           </span>
           <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
             Join the neuro-revolution.
           </h2>
           <p className="text-neutral-400">
             Reserve your APEX kit today and be among the first to unlock flow.
           </p>
        </div>

        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors rounded-sm placeholder:text-neutral-600 font-mono"
          />
          <button className="bg-white text-black px-8 py-3 text-xs font-mono tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 rounded-sm">
            RESERVE <ArrowRight size={14} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default PreOrderBanner;