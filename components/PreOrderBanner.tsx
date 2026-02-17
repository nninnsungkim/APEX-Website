import React, { useState } from 'react';
import { ArrowRight, X, Check } from 'lucide-react';

const PreOrderBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const url = 'https://script.google.com/macros/s/AKfycbwFDVOy4tEI-RvTywbxbumjvO-wwYfTEBWk3MhuwA--EJxNJ9gPypYMyKkETQlZZJsVcA/exec';

      const response = await fetch(url + '?email=' + encodeURIComponent(email), {
        method: 'GET',
        mode: 'no-cors',
      });

      // With no-cors, we can't read the response, so assume success
      setShowPopup(true);
      setEmail('');
      setTimeout(() => setShowPopup(false), 5000);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors rounded-sm placeholder:text-neutral-600 font-mono disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-black px-8 py-3 text-xs font-mono tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'SUBMITTING...' : 'RESERVE'} <ArrowRight size={14} />
          </button>
        </form>

        {error && (
          <p className="text-red-400 text-sm mt-4 font-mono">{error}</p>
        )}
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="glass-panel max-w-md w-full p-8 rounded-sm relative animate-fade-in">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-green-500" />
              </div>

              <h3 className="text-2xl font-medium text-white mb-3">
                You're on the list!
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed">
                Thank you for your interest in APEX. We'll be in touch soon with exclusive updates and early access details.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PreOrderBanner;