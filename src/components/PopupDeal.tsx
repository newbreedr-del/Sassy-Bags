'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Tag } from 'lucide-react';

export default function PopupDeal() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('sassy-popup-dismissed');
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem('sassy-popup-dismissed', '1');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      dismiss();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
            className="fixed z-[101] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Top image strip */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src="/images/bags/pexels-kowalievska-1381562.jpg"
                  alt="Sassy Bags offer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/70" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-10 h-10 bg-accent-pink rounded-full flex items-center justify-center mb-2">
                    <Tag className="w-5 h-5" />
                  </div>
                  <p className="text-xs tracking-[0.3em] uppercase font-medium opacity-80">Exclusive Offer</p>
                  <p
                    className="text-5xl font-bold leading-none mt-1"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    10% Off
                  </p>
                  <p className="text-sm opacity-80 mt-1">Your first order</p>
                </div>
                <button
                  onClick={dismiss}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-7">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-4"
                  >
                    <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      You are in!
                    </p>
                    <p className="text-gray-500 text-sm mb-4">Use code at checkout:</p>
                    <div className="bg-gray-50 border-2 border-dashed border-accent-pink rounded-xl px-6 py-3 inline-block">
                      <p className="text-2xl font-bold text-accent-pink tracking-widest">SASSY10</p>
                    </div>
                    <p className="text-gray-400 text-xs mt-4">Closing in a moment...</p>
                  </motion.div>
                ) : (
                  <>
                    <h3
                      className="text-2xl font-bold text-primary mb-1"
                      style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                      Welcome to Sassy
                    </h3>
                    <p className="text-gray-500 text-sm mb-5">
                      Join our inner circle and get 10% off your first order, plus early access to new drops.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                      />
                      <button
                        type="submit"
                        className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-primary-dark transition-colors"
                      >
                        Claim My 10% Off
                      </button>
                    </form>
                    <button
                      onClick={dismiss}
                      className="w-full mt-3 text-gray-400 text-xs hover:text-gray-600 transition-colors"
                    >
                      No thanks, I prefer full price
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
