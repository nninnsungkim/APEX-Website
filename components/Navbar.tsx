import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 border-b border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Logo */}
        <div className="flex items-center justify-start">
          <a href="https://www.apex-focus.com/" className="text-xl font-bold tracking-widest text-white hover:opacity-80 transition-opacity">
            APEX
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-8">
          <a href="#vision" className="text-xs font-mono text-neutral-400 hover:text-white transition-colors tracking-widest whitespace-nowrap">[ VISION ]</a>
          <a href="#technology" className="text-xs font-mono text-neutral-400 hover:text-white transition-colors tracking-widest whitespace-nowrap">[ PRODUCT ]</a>
          <a href="#join" className="text-xs font-mono text-neutral-400 hover:text-white transition-colors tracking-widest whitespace-nowrap">[ JOIN ]</a>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-end gap-4">
          <a href="#join" className="hidden md:block group relative px-6 py-2 text-xs font-mono tracking-widest overflow-hidden border border-white/20 rounded-full hover:border-white/60 transition-colors">
            <span className="relative z-10 group-hover:text-black transition-colors">JOIN WAITLIST</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>

           {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#050505] border-b border-white/10 z-40 p-6 flex flex-col gap-6 md:hidden">
          <a href="#vision" className="text-lg font-mono text-neutral-300" onClick={() => setIsOpen(false)}>[ VISION ]</a>
          <a href="#technology" className="text-lg font-mono text-neutral-300" onClick={() => setIsOpen(false)}>[ PRODUCT ]</a>
          <a href="#join" className="text-lg font-mono text-neutral-300" onClick={() => setIsOpen(false)}>[ JOIN ]</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;