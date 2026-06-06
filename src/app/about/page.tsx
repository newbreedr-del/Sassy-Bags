'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Users, Target, MapPin } from 'lucide-react';
import Link from 'next/link';

const milestones = [
  { year: '2019', title: 'The Dream Begins',       desc: 'Nonhlanhla sketched her first bag design in a notebook while working a corporate job in Sandton. The idea of a proudly South African luxury brand was born.' },
  { year: '2020', title: 'First Collection',        desc: 'Hand-stitched and self-funded, the debut Sassy collection of 12 bags sold out in under a week via Instagram, with orders coming from across Johannesburg.' },
  { year: '2021', title: 'Pop-Up Success',          desc: 'A pop-up at Sandton City attracted queues stretching around the corner. Sassy Bags was featured in Destiny Magazine as a brand to watch.' },
  { year: '2022', title: 'National Expansion',      desc: 'Retail partnerships across Johannesburg, Cape Town, and Durban. A small team of five women joined Nonhlanhla to manage growing demand.' },
  { year: '2023', title: 'Brand Summit Launch',     desc: 'Nonhlanhla hosted the first-ever Sassy Brand Summit — a community event empowering women entrepreneurs across South Africa.' },
  { year: '2024', title: 'Digital Flagship Store',  desc: 'Launch of the full e-commerce platform bringing Sassy Bags to customers across South Africa and into neighbouring countries.' },
];

const values = [
  { icon: Heart,   title: 'Passion',       desc: 'Every piece carries the heart of a woman who refused to settle for less.' },
  { icon: Award,   title: 'Quality',       desc: 'Premium materials, precise craftsmanship, and uncompromising standards.' },
  { icon: Users,   title: 'Community',     desc: 'We lift as we climb. A portion of every sale supports women-led initiatives in SA.' },
  { icon: Target,  title: 'Authenticity',  desc: 'Sassy is rooted in African identity, designed for the global woman.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about/store-interior.png"
            alt="Sassy Bags flagship store"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-accent-pink tracking-[0.3em] uppercase text-xs font-medium mb-3">Our Story</p>
            <h1
              className="text-6xl md:text-8xl font-bold text-white leading-none mb-4"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Born Sassy.<br />Built to Last.
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              A South African woman with a dream, a notebook, and an unshakeable belief that luxury belongs to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER STORY ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-accent-pink tracking-[0.25em] uppercase text-xs font-medium mb-4">The Founder</p>
              <h2
                className="text-5xl font-bold text-primary mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Meet Nonhlanhla
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-base">
                <p>
                  Nonhlanhla grew up in KwaZulu-Natal, the eldest daughter of a seamstress mother who taught her that craftsmanship is a form of love. From an early age she was drawn to the elegance of leather goods — the way a well-made bag could transform an entire outfit and how it made a woman feel.
                </p>
                <p>
                  After completing a business degree and spending six years in corporate finance in Johannesburg, she left her career to build something of her own. With a modest starting budget and a clear vision, she launched Sassy Bags from a spare room in Soweto in 2019.
                </p>
                <p>
                  "I wanted to create a brand that looked like us — African women who are ambitious, stylish, and refuse to be invisible," she says. "Luxury should not have a gate. Every woman who works hard deserves to carry something beautiful."
                </p>
                <p>
                  Today Nonhlanhla leads a team of 14 women, runs the Sassy Brand Summit annually, and is working toward her first international stockist partnership in London.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-12 h-px bg-accent-pink" />
                <p className="text-accent-pink font-medium italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Nonhlanhla — Founder and Creative Director
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="/images/bags/pexels-shvets-production-8410814.jpg"
                  alt="Sassy Bags craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl w-44">
                <p className="text-4xl font-bold" style={{ fontFamily: 'var(--font-cormorant)' }}>5+</p>
                <p className="text-sm text-gray-300 mt-1">Years of luxury craftsmanship</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-accent-pink text-white p-6 rounded-2xl shadow-xl w-44">
                <p className="text-4xl font-bold" style={{ fontFamily: 'var(--font-cormorant)' }}>14</p>
                <p className="text-sm text-white/80 mt-1">Women on the Sassy team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-accent-pink tracking-[0.25em] uppercase text-xs font-medium mb-3">What We Stand For</p>
            <h2
              className="text-5xl font-bold text-primary"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Our Values
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND SUMMIT ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/about/brand-summit.png"
                alt="Sassy Brand Summit"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <p className="text-accent-pink tracking-[0.25em] uppercase text-xs font-medium mb-4">Community</p>
              <h2
                className="text-5xl font-bold text-primary mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                The Sassy Brand Summit
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Every year Nonhlanhla hosts the Sassy Brand Summit — a full-day event bringing together women entrepreneurs, fashion professionals, and brand builders from across South Africa.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                The summit covers personal branding, starting a fashion business, digital marketing, and building sustainable revenue. Attendance is free for first-time entrepreneurs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                "If I had someone show me the path when I was starting out, I would have gotten here twice as fast," says Nonhlanhla. "The Summit is that path for other women."
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <button className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-dark transition-colors">
                    Register for the Summit
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-accent-pink tracking-[0.25em] uppercase text-xs font-medium mb-3">Our Journey</p>
            <h2
              className="text-5xl font-bold text-primary"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              From One Notebook to a Nation
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-16 md:left-1/2 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative flex gap-6 md:gap-0 items-start"
                >
                  {/* Year bubble */}
                  <div className="flex-shrink-0 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {m.year.slice(2)}
                  </div>
                  {/* Content */}
                  <div className={`flex-1 bg-white rounded-2xl p-6 shadow-sm md:w-5/12 ${i % 2 === 0 ? 'md:ml-0 md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <p className="text-accent-pink text-xs font-semibold tracking-widest mb-1">{m.year}</p>
                    <h3 className="text-lg font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {m.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-accent-pink tracking-[0.25em] uppercase text-xs font-medium mb-3">Find Us</p>
            <h2
              className="text-5xl font-bold text-primary"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Our Locations
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: 'Johannesburg', address: 'Shop 45, Sandton City\nSandton, 2196', hours: 'Mon-Sat: 9am-7pm\nSun: 10am-5pm', flagship: true },
              { city: 'Cape Town',    address: 'Unit 12, V&A Waterfront\nCape Town, 8001',  hours: 'Mon-Sat: 9am-6pm\nSun: 10am-4pm', flagship: false },
              { city: 'Durban',       address: 'Shop 22, Gateway Theatre\nUmhlanga, 4320',  hours: 'Mon-Sat: 9am-6pm\nSun: 10am-4pm', flagship: false },
            ].map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-gray-100 rounded-2xl p-7 hover:shadow-md transition-shadow relative"
              >
                {loc.flagship && (
                  <span className="absolute top-4 right-4 bg-accent-pink text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Flagship
                  </span>
                )}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 bg-primary/8 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {loc.city}
                    </h3>
                    <p className="text-gray-500 text-sm whitespace-pre-line mt-1">{loc.address}</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Hours</p>
                  <p className="text-gray-500 text-sm whitespace-pre-line">{loc.hours}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Join Our Story
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Every bag you carry is a piece of this journey. Shop the collection or get in touch with us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <button className="bg-accent-pink text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-pink-600 transition-colors">
                  Shop Now
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-white/40 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/10 transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
