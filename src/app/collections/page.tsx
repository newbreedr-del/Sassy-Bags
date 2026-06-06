'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const collections = [
  {
    id: 1,
    name: 'Bags',
    description: 'Iconic totes, crossbodies and clutches that define the Sassy look',
    image: '/images/bags/pexels-kowalievska-1381562.jpg',
    href: '/shop?category=Bags',
    productCount: 8,
  },
  {
    id: 2,
    name: 'Belts',
    description: 'Finishing touches that elevate every outfit',
    image: '/images/belts/pexels-cottonbro-10406299.jpg',
    href: '/shop?category=Belts',
    productCount: 5,
  },
  {
    id: 3,
    name: 'Shoes',
    description: 'Heels and sandals crafted for the woman who commands attention',
    image: '/images/shoes/pexels-jose-martin-segura-benites-1422456152-26774382.jpg',
    href: '/shop?category=Shoes',
    productCount: 5,
  },
  {
    id: 4,
    name: 'Wallets',
    description: 'Slim, elegant wallets to carry your essentials in style',
    image: '/images/wallets/pexels-vlada-karpovich-4452509.jpg',
    href: '/shop?category=Wallets',
    productCount: 5,
  },
  {
    id: 5,
    name: 'Watches',
    description: 'Timepieces that speak before you do',
    image: '/images/watches/pexels-jonathanborba-14525785.jpg',
    href: '/shop?category=Watches',
    productCount: 5,
  },
  {
    id: 6,
    name: 'New Arrivals',
    description: 'The latest additions to our ever-growing luxury universe',
    image: '/images/bags/pexels-dhanno-23223836.jpg',
    href: '/shop',
    productCount: 6,
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Our Collections
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            Curated luxury for every occasion and every woman
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((col, index) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <Link href={col.href}>
                <div className="relative h-80 rounded-3xl overflow-hidden mb-5 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                  {/* Category label */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary font-semibold text-sm px-3 py-1 rounded-full">
                      {col.productCount} items
                    </span>
                  </div>
                </div>
                <div className="space-y-1 px-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-primary-dark transition-colors">
                      {col.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{col.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl overflow-hidden relative"
        >
          <div className="absolute inset-0">
            <img
              src="/images/bags/pexels-shvets-production-8410814.jpg"
              alt="Signature Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="relative z-10 p-12 md:p-20 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Sassy Signature
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Our most coveted pieces, handcrafted with premium materials and a touch of boldness.
            </p>
            <Link href="/shop">
              <button className="bg-accent-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 transition-colors">
                Shop All Collections
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
