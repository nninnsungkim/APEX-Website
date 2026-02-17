import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FeatureCard: React.FC<{
  category: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}> = ({ category, title, description, children }) => (
  <div className="group relative border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-8 h-full flex flex-col justify-between overflow-hidden">
    <div className="relative z-10">
      <div className="mb-4 text-xs font-mono text-neutral-500 tracking-widest uppercase">{category}</div>
      <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
    
    <div className="mt-12 relative z-10">
      {children}
    </div>

    <div className="absolute bottom-8 right-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
       <div className="flex items-center gap-2 text-xs font-mono border border-white/20 px-3 py-1 rounded-full bg-black">
         EXPLORE <ArrowUpRight size={12} />
       </div>
    </div>
    
    {/* Subtle gradient hover effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </div>
);

const FeatureGrid: React.FC = () => {
  return (
    <section id="technology" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono text-neutral-500 tracking-[0.2em]">[ SYSTEM ]</span>
          <h2 className="text-4xl md:text-5xl font-medium text-white mt-4">
            A complete loop for <br />
            <span className="text-neutral-500">cognitive expansion.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Hardware */}
          <FeatureCard 
            category="Hardware"
            title="Hack"
            description="Using 8-channel brain sensing (EEG + fNIRS), APEX reads your focus and stress signals in real time—cutting through noise to understand your true cognitive state."
          >
             {/* Abstract visual representation of waves */}
            <div className="h-32 w-full border border-white/5 rounded-sm flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-30">
                 {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 bg-white h-full transform scale-y-50 animate-pulse" style={{ animationDelay: `${i * 0.1}s`, height: `${Math.random() * 100}%`}}></div>
                 ))}
              </div>
            </div>
          </FeatureCard>

          {/* Card 2: Software */}
          <FeatureCard 
            category="Software"
            title="Nudge"
            description="When focus drifts, APEX steps in. Real-time feedback tied to your behavior and brain state delivers timely nudges that keep you honest and bring you back."
          >
            {/* Minimal UI Wireframe */}
            <div className="h-32 w-full border border-white/5 bg-[#0A0A0A] p-4 relative">
               <div className="flex gap-2 mb-2">
                 <div className="w-2 h-2 rounded-full bg-neutral-800"></div>
                 <div className="w-2 h-2 rounded-full bg-neutral-800"></div>
               </div>
               <div className="w-full h-16 border border-white/10 flex items-center justify-center">
                  <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-white/60"></div>
                  </div>
               </div>
            </div>
          </FeatureCard>

          {/* Card 3: Feedback */}
          <FeatureCard 
            category="Feedback Loop"
            title="Optimize"
            description="Over time, adaptive neurofeedback and targeted stimulation close the loop—helping you refine how you work, sustain deep focus, and raise your baseline productivity."
          >
            {/* Visual representation of lines connecting */}
            <div className="h-32 w-full border border-white/5 relative overflow-hidden">
               <svg className="absolute inset-0 w-full h-full opacity-30" stroke="white">
                 <line x1="10%" y1="90%" x2="50%" y2="20%" strokeWidth="0.5" />
                 <line x1="50%" y1="20%" x2="90%" y2="70%" strokeWidth="0.5" />
                 <line x1="10%" y1="50%" x2="90%" y2="50%" strokeWidth="0.5" strokeDasharray="4 4" />
                 <circle cx="50%" cy="20%" r="3" fill="white" />
               </svg>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;