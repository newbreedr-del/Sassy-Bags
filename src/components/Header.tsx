'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ShoppingCart from './ShoppingCart';

const navItems = [
  { name: 'Home',        href: '/' },
  { name: 'Shop',        href: '/shop' },
  { name: 'Collections', href: '/collections' },
  { name: 'About',       href: '/about' },
  { name: 'Contact',     href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen]         = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount]                 = useState(2);
  const [scrolled, setScrolled]     = useState(false);
  const pathname                    = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#1C1A16]/98 shadow-lg' : 'bg-[#1C1A16]'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo/sassy-logo-white.png"
                alt="Sassy Luxury Hand Bags"
                width={120}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-1.5 text-xs font-medium tracking-[0.1em] uppercase transition-all duration-200 rounded-full ${
                      active
                        ? 'text-[#EDE0C8] bg-white/10'
                        : 'text-white/55 hover:text-[#EDE0C8] hover:bg-white/8'
                    }`}
                  >
                    {item.name}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C9A87A] rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full hover:bg-white/8 transition-colors"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-4.5 h-4.5 text-[#EDE0C8]" style={{ width: '18px', height: '18px' }} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#C9A87A] text-[#1C1A16] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <Link href="/shop" className="hidden md:block">
                <button className="bg-[#EDE0C8] text-[#1C1A16] px-5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase hover:bg-[#C9A87A] transition-colors ml-1">
                  Shop Now
                </button>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full hover:bg-white/8 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen
                  ? <X className="text-[#EDE0C8]" style={{ width: '18px', height: '18px' }} />
                  : <Menu className="text-[#EDE0C8]" style={{ width: '18px', height: '18px' }} />
                }
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden border-t border-white/8"
              >
                <div className="py-3 space-y-0.5">
                  {navItems.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-3 py-2.5 rounded-xl text-xs font-medium tracking-[0.1em] uppercase transition-colors ${
                          active
                            ? 'bg-white/10 text-[#EDE0C8]'
                            : 'text-white/55 hover:bg-white/8 hover:text-[#EDE0C8]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  <div className="pt-2 px-3">
                    <Link href="/shop" onClick={() => setIsOpen(false)}>
                      <button className="w-full bg-[#EDE0C8] text-[#1C1A16] py-2.5 rounded-xl text-xs font-bold tracking-[0.08em] uppercase hover:bg-[#C9A87A] transition-colors">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
