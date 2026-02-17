import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <section id="technology" className="bg-[#050505] py-20 border-t border-white/5">
      {/* SECTION 1: HARDWARE */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
            <div>
              <span className="block text-xs font-mono text-neutral-500 mb-2 tracking-widest">[ WEARABLE ]</span>
              <h2 className="text-3xl md:text-5xl font-medium text-white">Lightweight and Precise</h2>
            </div>
            <p className="text-neutral-400 max-w-xs mt-4 md:mt-0 text-sm">
              Textiles and sensors merged into a form factor so comfortable you'll forget you're wearing it.
            </p>
         </div>
         
         {/* Hardware Image Showcase */}
         <div className="relative w-full bg-[#080808] border border-white/5 overflow-hidden">
            <div className="flex flex-col items-center p-8 md:p-20">
               
               {/* Images Row */}
               <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 w-full max-w-6xl mb-16">
                  
                  {/* Left Image */}
                  <div className="w-full md:w-1/3 flex items-center justify-center">
                     <img 
                       src="/images/Inner.jpeg" 
                       alt="APEX Device Angled View" 
                       className="w-full h-auto object-contain max-h-[250px] hover:scale-105 transition-transform duration-500"
                     />
                  </div>

                  {/* Center Image */}
                  <div className="w-full md:w-1/3 flex items-center justify-center relative">
                     <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full -z-10 opacity-30"></div>
                     <img 
                       src="/images/Headband.png" 
                       alt="APEX Device Front View" 
                       className="w-full h-auto object-contain max-h-[250px] hover:scale-105 transition-transform duration-500"
                     />
                  </div>

                  {/* Right Image */}
                  <div className="w-full md:w-1/3 flex items-center justify-center">
                     <img 
                       src="/images/Fabric.jpeg" 
                       alt="APEX Device Side View" 
                       className="w-full h-auto object-contain max-h-[250px] hover:scale-105 transition-transform duration-500"
                     />
                  </div>

               </div>
               
               {/* Description Text */}
               <div className="max-w-2xl text-center border-t border-white/10 pt-8">
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                     APEX tracks brain signals and blood flow together (EEG / fNIRS) for more precise focus sensing.
Lightweight and breathable, it’s made to disappear when you’re wearing it.
                  </p>
               </div>

            </div>
         </div>
      </div>

      {/* SECTION 2: SOFTWARE */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
            <div className="order-2 md:order-1">
               <p className="text-neutral-400 max-w-xs mt-4 md:mt-0 text-sm">
                 Connect APEX, and it quietly tracks your focus signals and on-device behavior. Your desktop app turns that into real-time feedback.
               </p>
            </div>
            <div className="order-1 md:order-2 text-right">
              <span className="block text-xs font-mono text-neutral-500 mb-2 tracking-widest">[ INTERFACE ]</span>
              <h2 className="text-3xl md:text-5xl font-medium text-white">How It Works</h2>
            </div>
         </div>
         
         {/* Software Content - 2 Column Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Column 1: User Context */}
            <div className="group relative bg-[#080808] border border-white/5 p-6 md:p-8 hover:border-white/10 transition-colors">
               <div className="aspect-[16/10] w-full overflow-hidden mb-8 relative bg-neutral-900/50 rounded-sm">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-10 opacity-40"></div>
                  <img 
                    src="/images/Closedshot.jpeg" 
                    alt="User using APEX" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                     <div className="flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-mono text-white tracking-widest uppercase">Signal Active</span>
                     </div>
                  </div>
               </div>
               <h3 className="text-xl font-medium text-white mb-3">Connect & Monitor</h3>
               <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                  Pair APEX and keep working. It tracks your focus signals (EEG / fNIRS) plus on-device behavior to detect attention drift in real time.
               </p>
            </div>

            {/* Column 2: SW Demo */}
            <div className="group relative bg-[#080808] border border-white/5 p-6 md:p-8 hover:border-white/10 transition-colors">
               <div className="aspect-[16/10] w-full overflow-hidden mb-8 relative bg-neutral-900/50 rounded-sm">
                   <div className="absolute inset-0 bg-blue-500/5 z-10 mix-blend-overlay"></div>
                   <img 
                    src="/images/SW-mainpage.gif" 
                    alt="Software Interface Demo" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Play button hint for 'GIF' feel */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                     <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                     </div>
                  </div>
               </div>
               <h3 className="text-xl font-medium text-white mb-3">Live Feedback Loop</h3>
               <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                  See your focus level at a glance and get real-time nudges that pull you back into deep work. Track patterns, identify distractions, and tighten your focus over time.
               </p>
            </div>

         </div>
      </div>
    </section>
  );
};

export default ProductShowcase;