import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-20">
        
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl font-bold tracking-widest text-white">APEX</span>
          </div>
          <p className="text-xs text-neutral-500 max-w-[200px] leading-relaxed">
            Pioneering the interface between mind and machine.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] font-mono text-neutral-500 tracking-widest mb-6 uppercase">Product</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Hardware</a></li>
            <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Software</a></li>
            <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Science</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-mono text-neutral-500 tracking-widest mb-6 uppercase">Company</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
           <h4 className="text-[10px] font-mono text-neutral-500 tracking-widest mb-6 uppercase">Legal</h4>
           <ul className="space-y-4">
            <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Terms of Service</a></li>
           </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
         <p className="text-[10px] text-neutral-600 font-mono">© 2024 APEX NEUROTECHNOLOGY INC.</p>
         <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse"></span>
            <span className="text-[10px] text-neutral-500 font-mono tracking-widest">SYSTEM ONLINE</span>
         </div>
      </div>
    </footer>
  );
};

export default Footer;