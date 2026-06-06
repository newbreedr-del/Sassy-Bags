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
    <main className="min-h-screen" style={{ paddingTop: '68px' }}>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#1C1A16]">
        {/* Video */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
          <source src="/videos/8798154-uhd_4096_2160_25fps.mp4" type="video/mp4" />
        </video>

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid" />

        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute rounded-full border border-[#EDE0C8]/10" style={{ width: 480, height: 480, top: '-80px', right: '-60px' }} />
          <div className="absolute rounded-full border border-[#EDE0C8]/7"  style={{ width: 300, height: 300, top: '60px',  right: '80px' }} />
          <div className="absolute rounded-full border border-[#EDE0C8]/8"  style={{ width: 200, height: 200, bottom: '40px', left: '-40px' }} />
          <div className="absolute rounded-full border border-[#C9A87A]/12" style={{ width: 120, height: 120, bottom: '120px', left: '80px' }} />
          {/* Dot accents */}
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[#C9A87A]/40" style={{ top: '28%', left: '15%' }} />
          <div className="absolute w-1 h-1 rounded-full bg-[#EDE0C8]/30"    style={{ top: '55%', right: '22%' }} />
          <div className="absolute w-2 h-2 rounded-full bg-[#C9A87A]/25"    style={{ top: '70%', left: '42%' }} />
          <div className="absolute w-1 h-1 rounded-full bg-[#EDE0C8]/20"    style={{ top: '20%', right: '38%' }} />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1C1A16]/50" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#C9A87A] tracking-[0.35em] uppercase text-[11px] font-medium mb-5">
              Luxury Accessories · South Africa
            </p>
            <h1
              className="text-[88px] md:text-[120px] font-bold text-[#EDE0C8] leading-none mb-4"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Sassy
            </h1>
            <p className="text-[#EDE0C8]/60 text-lg md:text-xl font-light tracking-[0.12em] mb-10">
              Luxury Hand Bags &amp; Accessories
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#EDE0C8] text-[#1C1A16] px-10 py-3.5 rounded-full font-bold text-sm tracking-[0.08em] uppercase flex items-center justify-center gap-2 hover:bg-[#C9A87A] transition-colors"
                >
                  Shop Collection <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-[#EDE0C8]/30 text-[#EDE0C8]/80 px-10 py-3.5 rounded-full font-medium text-sm tracking-[0.08em] uppercase hover:border-[#EDE0C8]/60 hover:text-[#EDE0C8] transition-all"
                >
                  Our Story
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 2.2 }}
        >
          <div className="w-px h-8 bg-[#EDE0C8]/20" />
        </motion.div>
      </section>

      {/* ── FEATURED COLLECTION ───────────────────────────────────── */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#8A7A5A] tracking-[0.28em] uppercase text-[10px] font-semibold mb-3">
              Curated for You
            </p>
            <h2
              className="text-5xl font-bold text-[#1C1A16] mb-3"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Featured Collection
            </h2>
            <p className="text-[#8A7A5A] text-sm max-w-md mx-auto">
              Handpicked pieces for the discerning woman.
            </p>
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
                    <p className="text-[#8A7A5A] text-xs mt-0.5">R{p.price.toLocaleString()}</p>
                  </div>
                  <Link href="/shop">
                    <button className="bg-[#1C1A16] text-[#EDE0C8] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.06em] uppercase hover:bg-[#33302A] transition-colors">
                      Shop
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="border border-[#1C1A16]/25 text-[#1C1A16] px-10 py-3 rounded-full text-sm font-semibold tracking-[0.06em] uppercase hover:bg-[#1C1A16] hover:text-[#EDE0C8] transition-all duration-200"
              >
                View All Products
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOUNDER QUOTE ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#1C1A16] relative overflow-hidden">
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
              I built Sassy Bags because I believed every South African woman deserved
              to carry luxury she could be proud of — made by one of her own.
            </p>
            <p className="text-[#C9A87A] tracking-[0.25em] text-[11px] uppercase font-semibold">
              Nonhlanhla Hlongwane · Founder, Sassy Bags
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#8A7A5A] tracking-[0.28em] uppercase text-[10px] font-semibold mb-3">
              Exclusive Access
            </p>
            <h2
              className="text-4xl font-bold text-[#1C1A16] mb-2"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Join the Inner Circle
            </h2>
            <p className="text-[#8A7A5A] text-sm mb-7">
              First access to new drops, private sales, and styling events. Get 10% off your first order.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-sm mx-auto">
              <input
                type="email" required placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-full border border-[#1C1A16]/15 focus:outline-none focus:ring-1 focus:ring-[#1C1A16]/30 text-sm bg-white text-[#1C1A16]"
              />
              <button
                type="submit"
                className="bg-[#1C1A16] text-[#EDE0C8] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#33302A] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[#8A7A5A]/60 text-[11px] mt-3">No spam. Unsubscribe any time.</p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
