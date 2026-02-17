import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="relative py-40 bg-[#050505] overflow-hidden">
      {/* Background decorations - simple radial gradients to mimic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px]" />
      
      {/* Particles/Stars (Static CSS) */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() < 0.5 ? '2px' : '3px',
              height: Math.random() < 0.5 ? '2px' : '3px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-6">
          <span className="opacity-50">Deep Work,</span> <br />
          Uninterrupted
        </h2>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mt-12 font-light">
          We hack and optimize your focus loop—using real-time feedback 
          and targeted brain stimulation to cut mental noise and sustain deep work.
        </p>

        <div className="mt-16 inline-flex flex-col items-center gap-4">
           <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-neutral-500 to-transparent"></div>
           <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-500">Humanity Enhanced</span>
        </div>
      </div>
    </section>
  );
};

export default Vision;