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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/8">

          {/* Brand */}
          <div>
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

          {/* Company */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8A7A5A] mb-4">Company</p>
            <ul className="space-y-2.5">
              {company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#EDE0C8]/55 text-sm hover:text-[#EDE0C8] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8A7A5A] mb-4">Contact</p>
            <ul className="space-y-3.5">
              {[
                { icon: Mail,   lines: ['Nonhlanhla@sassy.co.za', 'hello@sassybags.co.za'] },
                { icon: Phone,  lines: ['+27 11 784 3200', 'Mon – Fri, 9am – 5pm'] },
                { icon: MapPin, lines: ['Shop 45, Sandton City', 'Johannesburg  ·  Cape Town  ·  Durban'] },
              ].map(({ icon: Icon, lines }, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Icon className="w-3.5 h-3.5 text-[#C9A87A] mt-0.5 flex-shrink-0" />
                  <div>
                    {lines.map((l, j) => (
                      <p key={j} className="text-[#EDE0C8]/55 text-xs leading-5">{l}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-7">
          <p className="text-[#EDE0C8]/25 text-[11px]">
            &copy; {new Date().getFullYear()} Sassy Luxury Hand Bags. All rights reserved.
          </p>
          <p className="text-[11px]">
            <span className="text-[#EDE0C8]/25">Founded by</span>
            <span className="text-[#C9A87A] mx-1.5" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '14px' }}>
              Nonhlanhla Hlongwane
            </span>
            <span className="text-[#EDE0C8]/25">· South Africa</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
