'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Search } from 'lucide-react';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

const categories = ['All', 'Bags', 'Belts', 'Shoes', 'Wallets', 'Watches'];

const products: Product[] = [
  // Bags
  { id: 1,  name: 'The Royal Tote',        price: 2499, category: 'Bags',    image: '/images/bags/pexels-denys-9267598.jpg' },
  { id: 2,  name: 'Sassy Crossbody',       price: 1899, category: 'Bags',    image: '/images/bags/pexels-dhanno-22432991.jpg' },
  { id: 3,  name: 'Elegant Clutch',        price: 1299, category: 'Bags',    image: '/images/bags/pexels-dhanno-23223836.jpg' },
  { id: 4,  name: 'Structured Handbag',    price: 2199, category: 'Bags',    image: '/images/bags/pexels-kowalievska-1381562.jpg' },
  { id: 5,  name: 'Luxury Tote',           price: 2799, category: 'Bags',    image: '/images/bags/pexels-jose-martin-segura-benites-1422456152-27204277.jpg' },
  { id: 6,  name: 'Mini Shopper',          price: 1799, category: 'Bags',    image: '/images/bags/pexels-mart-production-8801079.jpg' },
  { id: 7,  name: 'Chain Bag',             price: 1599, category: 'Bags',    image: '/images/bags/pexels-merve-cetin-612403813-20399715.jpg' },
  { id: 8,  name: 'Quilted Flap Bag',      price: 2999, category: 'Bags',    image: '/images/bags/pexels-shvets-production-8410814.jpg' },
  // Belts
  { id: 9,  name: 'Classic Leather Belt',  price:  599, category: 'Belts',   image: '/images/belts/pexels-wundef-3609781.jpg' },
  { id: 10, name: 'Statement Buckle Belt', price:  799, category: 'Belts',   image: '/images/belts/pexels-cottonbro-10406299.jpg' },
  { id: 11, name: 'Slim Designer Belt',    price:  699, category: 'Belts',   image: '/images/belts/pexels-shivam-31959214.jpg' },
  { id: 12, name: 'Chain Link Belt',       price:  899, category: 'Belts',   image: '/images/belts/pexels-pedrofurtadoo-32498751.jpg' },
  { id: 13, name: 'Braided Leather Belt',  price:  549, category: 'Belts',   image: '/images/belts/pexels-thato-moiketsi-909645793-20351987.jpg' },
  // Shoes
  { id: 14, name: 'Strappy Heels',         price: 1499, category: 'Shoes',   image: '/images/shoes/pexels-jose-martin-segura-benites-1422456152-26774382.jpg' },
  { id: 15, name: 'Block Heel Mules',      price: 1299, category: 'Shoes',   image: '/images/shoes/pexels-jose-martin-segura-benites-1422456152-26902738.jpg' },
  { id: 16, name: 'Pointed Toe Heels',     price: 1699, category: 'Shoes',   image: '/images/shoes/pexels-jose-martin-segura-benites-1422456152-27100517.jpg' },
  { id: 17, name: 'Slingback Pumps',       price: 1399, category: 'Shoes',   image: '/images/shoes/pexels-nudethephotographer-37190208.jpg' },
  { id: 18, name: 'Stiletto Sandals',      price: 1899, category: 'Shoes',   image: '/images/shoes/pexels-pedrofurtadoo-31450993.jpg' },
  // Wallets
  { id: 19, name: 'Card Holder',           price:  499, category: 'Wallets', image: '/images/wallets/pexels-axwell-wallets-301813443-14402034.jpg' },
  { id: 20, name: 'Zip-Around Wallet',     price:  899, category: 'Wallets', image: '/images/wallets/pexels-dhanno-21837407.jpg' },
  { id: 21, name: 'Bifold Wallet',         price:  699, category: 'Wallets', image: '/images/wallets/pexels-moojii-6444094.jpg' },
  { id: 22, name: 'Coin Purse',            price:  349, category: 'Wallets', image: '/images/wallets/pexels-vlada-karpovich-4452509.jpg' },
  { id: 23, name: 'Large Purse Wallet',    price:  799, category: 'Wallets', image: '/images/wallets/pexels-rohit-sharma-1230131-20015761.jpg' },
  // Watches
  { id: 24, name: 'Gold Timepiece',        price: 3499, category: 'Watches', image: '/images/watches/pexels-jonathanborba-14525785.jpg' },
  { id: 25, name: 'Rose Gold Watch',       price: 2999, category: 'Watches', image: '/images/watches/pexels-maxavans-5058216.jpg' },
  { id: 26, name: 'Classic Silver Watch',  price: 2499, category: 'Watches', image: '/images/watches/pexels-ylmzirem-8160609.jpg' },
  { id: 27, name: 'Luxury Dress Watch',    price: 4299, category: 'Watches', image: '/images/watches/pexels-prayatna-maharjan-688136866-30381731.jpg' },
  { id: 28, name: 'Minimalist Watch',      price: 1999, category: 'Watches', image: '/images/watches/pexels-maina-shot-2149534173-33128546.jpg' },
];

export default function ShopPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [addedId, setAddedId] = useState<number | null>(null);

  const filtered = products.filter((p) => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <main className="min-h-screen pb-12 md:pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 pt-6 md:pt-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
            Shop Our Collection
          </h1>
          <p className="text-gray-500 text-lg">
            Luxury accessories crafted for the modern woman
          </p>
        </motion.div>

        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row gap-3 mb-6 md:mb-8 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  selectedCategory === cat
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="pl-9 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm w-full md:w-56"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {filtered.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-44 sm:h-52 md:h-64 overflow-hidden bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 text-base leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-lg font-bold text-primary">
                      R{product.price.toLocaleString()}
                    </p>
                    <button
                      onClick={() => addToCart(product)}
                      className={`p-2 rounded-full transition-all duration-200 ${
                        addedId === product.id
                          ? 'bg-green-500 text-white scale-110'
                          : 'bg-primary text-white hover:bg-primary-dark'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg">No products found.</p>
          </div>
        )}

        {/* Cart count toast */}
        {cart.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium z-40">
            {cart.length} item{cart.length !== 1 ? 's' : ''} in cart
          </div>
        )}
      </div>
    </main>
  );
}
