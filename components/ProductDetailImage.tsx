import React from 'react';

const ProductDetailImage: React.FC = () => {
  return (
    <section className="bg-[#050505] w-full px-6 md:px-12 pt-16 md:pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full aspect-[29/16] bg-[#0A0A0A] border border-white/10 overflow-hidden group rounded-sm">
          <img 
            src="/images/Main_picture.jpeg" 
            alt="APEX Product Detail" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Inner border/overlay for polish */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"></div>
          
           {/* Technical Markers for aesthetic */}
           <div className="absolute top-6 right-6 flex gap-1">
              <div className="w-1 h-1 bg-white/60"></div>
              <div className="w-1 h-1 bg-white/60"></div>
              <div className="w-1 h-1 bg-white/60"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailImage;