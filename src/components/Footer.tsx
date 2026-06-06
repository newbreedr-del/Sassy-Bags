import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const shop = [
  { label: 'All Products',   href: '/shop' },
  { label: 'Bags',           href: '/shop?category=Bags' },
  { label: 'Shoes',          href: '/shop?category=Shoes' },
  { label: 'Watches',        href: '/shop?category=Watches' },
  { label: 'Wallets',        href: '/shop?category=Wallets' },
  { label: 'Belts',          href: '/shop?category=Belts' },
];

const company = [
  { label: 'Our Story',      href: '/about' },
  { label: 'Collections',    href: '/collections' },
  { label: 'Brand Summit',   href: '/about#summit' },
  { label: 'Contact Us',     href: '/contact' },
  { label: 'Book a Styling', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1A16] text-white relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      {/* Subtle circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-[#EDE0C8]/5 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full border border-[#C9A87A]/8 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-6 md:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 pb-8 md:pb-10 border-b border-white/8">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Image src="/images/logo/sassy-logo-white.png" alt="Sassy" width={120} height={40} className="h-10 w-auto mb-5" />
            <p className="text-[#EDE0C8]/50 text-sm leading-relaxed mb-5">
              South African luxury accessories by Nonhlanhla Hlongwane — crafted for the modern woman who dares to stand out.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Facebook,  href: 'https://facebook.com',  label: 'Facebook' },
                { icon: Twitter,   href: 'https://twitter.com',   label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/8 hover:bg-[#EDE0C8]/15 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-[#EDE0C8]" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8A7A5A] mb-4">Shop</p>
            <ul className="space-y-2.5">
              {shop.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#EDE0C8]/55 text-sm hover:text-[#EDE0C8] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

      