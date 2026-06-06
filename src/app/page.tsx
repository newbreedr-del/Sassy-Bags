'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featured = [
    { id: 1, name: 'The Royal Tote',    price: 2499, image: '/images/bags/pexels-denys-9267598.jpg',     cat: 'Bags' },
    { id: 2, name: 'Sassy Crossbody',  price: 1899, image: '/images/bags/pexels-dhanno-22432991.jpg',   cat: 'Bags' },
    { id: 3, name: 'Elegant Clutch',   price: 1299, image: '/images/bags/pexels-dhanno-23223836.jpg',   cat: 'Bags' },
    { id: 4, name: 'Gold Timepiece',   price: 3499, image: '/images/watches/pexels-jonathanborba-14525785.jpg', cat: 'Watches' },
    { id: 5, name: 'Strappy Heels',    price: 1499, image: '/images/shoes/pexels-jose-martin-segura-benites-1422456152-26774382.jpg', cat: 'Shoes' },
    { id: 6, name: 'Zip-Around Wallet',price:  899, image: '/images/wallets/pexels-dhanno-21837407.jpg', cat: 'Wallets' },
  ];

  return (
    <main className="min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#1C1A16]">
        {/* Background video — bumped up so it actually reads, overlay lightened to let it breathe */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
        >
          <source src="/videos/8798154-uhd_4096_2160_25fps.mp4" type="video/mp4" />
        </video>
        {/* Even, consistent dark veil so champagne text reads clearly no matter how bright the footage is */}
        <div className="absolute inset-0 bg-[#1C1A16]/55 z-0" />
        {/* Extra grounding gradient top & bottom for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1A16]/45 via-transparent to-[#1C1A16]/70 z-0" />
        {/* Dot grid + subtle circles */}
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-30" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute rounded-full border border-[#EDE0C8]/10" style={{ width: 340, height: 340, top: '-80px', left: '-60px' }} />
          <div className="absolute rounded-full border border-[#C9A87A]/15" style={{ width: 200, height: 200, bottom: '-40px', right: '10%' }} />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[#C9A87A]/60" style={{ top: '30%', right: '18%' }} />
          <div className="absolute w-1 h-1 rounded-full bg-[#EDE0C8]/40"    style={{ bottom: '35%', left: '25%' }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#C9A87A] tracking-[0.4em] uppercase text-xs sm:text-sm font-bold mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Luxury Hand Bags &amp; Accessories
            </p>
            <h1
              className="text-[64px] sm:text-[90px] md:text-[120px] lg:text-[150px] leading-[0.92] font-bold text-[#EDE0C8] mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-cormorant)', textShadow: '0 6px 40px rgba(0,0,0,0.55)' }}
            >
              Sassy
            </h1>
            <p className="text-white text-base sm:text-lg max-w-xl mx-auto mb-9 leading-relaxed font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              South African luxury, handcrafted for the woman who carries her story with pride —
              founded by Nonhlanhla Hlongwane.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/shop">
                <button className="bg-[#EDE0C8] text-[#1C1A16] px-10 py-4 rounded-full font-bold text-sm tracking-[0.08em] uppercase shadow-xl shadow-black/30 hover:bg-[#C9A87A] hover:scale-105 transition-all w-full sm:w-auto">
                  Shop Collection
                </button>
              </Link>
              <Link href="/about">
                <button className="border-2 border-[#EDE0C8] text-[#EDE0C8] px-10 py-4 rounded-full font-bold text-sm tracking-[0.08em] uppercase hover:bg-[#EDE0C8] hover:text-[#1C1A16] transition-all w-full sm:w-auto">
                  Our Story
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator — now actually scrolls to the next section on click */}
        <motion.button
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.86, behavior: 'smooth' })}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          aria-label="Scroll to explore"
        >
          <span className="text-[#EDE0C8]/60 group-hover:text-[#EDE0C8] text-[10px] tracking-[0.3em] uppercase transition-colors">Scroll</span>
          <div className="w-px h-8 bg-[#EDE0C8]/40 group-hover:bg-[#EDE0C8] transition-colors" />
        </motion.button>
      </section>

      {/* ── FEATURED COLLECTION ───────────────────────────────────── */}
      <section className="py-10 md:py-16 lg:py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-[#8A7A5A] tracking-[0.28em] uppercase text-[10px] font-semibold mb-3">Curated Luxury</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-primary"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Featured Pieces
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-xl overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={p.image} alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/12 transition-colors" />
                  <span className="absolute top-3 left-3 bg-[#1C1A16]/80 text-[#EDE0C8] text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full">
                    {p.cat}
                  </span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#1C1A16] text-sm">{p.name}</p>
                    <p className="text-[#8A7A5A] text-xs mt-0.5">R{p.price.toLocaleString('en-US')}</p>
                  </div>
                  <Link href="/shop">
                    <button className="w-9 h-9 rounded-full bg-[#1C1A16] text-white flex items-center justify-center hover:bg-[#C9A87A] transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/shop">
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary-dark transition-colors">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOUNDER QUOTE ──────────────────────────────────────────── */}
      <section className="py-10 md:py-16 bg-[#1C1A16] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        {/* Circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute rounded-full border border-[#EDE0C8]/8"  style={{ width: 340, height: 340, top: '-80px', left: '-60px' }} />
          <div className="absolute rounded-full border border-[#C9A87A]/10" style={{ width: 200, height: 200, bottom: '-40px', right: '10%' }} />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[#C9A87A]/50" style={{ top: '30%', right: '18%' }} />
          <div className="absolute w-1 h-1 rounded-full bg-[#EDE0C8]/30"    style={{ bottom: '35%', left: '25%' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p
              className="text-4xl text-[#C9A87A] mb-4 leading-none select-none"
              style={{ fontFamily: 'Georgia', fontSize: '56px' }}
            >&ldquo;</p>
            <p
              className="text-xl md:text-2xl font-light leading-relaxed mb-6 italic text-[#EDE0C8]/90"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Every Sassy piece tells a story of craftsmanship, passion, and the unshakeable belief that African luxury belongs on the world stage.
            </p>
            <p className="text-[#C9A87A] tracking-[0.25em] text-[11px] uppercase font-semibold">
              Nonhlanhla Hlongwane · Founder, Sassy Bags
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────────────── */}
      <section className="py-10 md:py-16 bg-[#F5F0E8]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#8A7A5A] tracking-[0.28em] uppercase text-[10px] font-semibold mb-3">Stay Connected</p>
            <h2
              className="text-3xl font-bold text-primary mb-3"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Join the Inner Circle
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Be the first to know about new drops, exclusive offers, and Sassy Brand Summit dates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary-dark transition-colors">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
