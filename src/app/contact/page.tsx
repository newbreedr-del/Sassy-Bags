'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, Clock, Instagram, Facebook } from 'lucide-react';

type Tab = 'message' | 'booking';

export default function ContactPage() {
  const [tab, setTab] = useState<Tab>('message');
  const [msgSent, setMsgSent] = useState(false);
  const [bookSent, setBookSent] = useState(false);

  const handleMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setMsgSent(true);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookSent(true);
  };

  return (
    <main className="min-h-screen pb-12 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12 pt-6 md:pt-8"
        >
          <p className="text-accent-pink tracking-[0.3em] uppercase text-xs font-medium mb-3">We Would Love to Hear from You</p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-3"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Get in Touch
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Whether you want to ask about a product, book a styling session, or just say hello — we are always here.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-16">

          {/* LEFT — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Info cards */}
            {[
              { icon: Mail,  label: 'Email Us',     lines: ['Nonhlanhla@sassy.co.za', 'hello@sassybags.co.za'] },
              { icon: Phone, label: 'Call Us',       lines: ['+27 11 784 3200', 'Mon to Fri, 9am to 5pm'] },
              { icon: MapPin,label: 'Flagship Store',lines: ['Shop 45, Sandton City', 'Sandton, Johannesburg, 2196'] },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/8 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                  {item.lines.map((l, j) => (
                    <p key={j} className="text-gray-500 text-sm">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Hours */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <p className="font-semibold text-gray-900 text-sm">Store Hours</p>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { day: 'Monday to Friday', hours: '9:00 AM to 7:00 PM' },
                  { day: 'Saturday',          hours: '9:00 AM to 6:00 PM' },
                  { day: 'Sunday',            hours: '10:00 AM to 5:00 PM' },
                ].map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-gray-600">{h.day}</span>
                    <span className="text-gray-900 font-medium">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="font-semibold text-gray-900 mb-3 text-sm">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center hover:bg-accent-pink hover:text-white transition-colors text-primary"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Tabbed forms */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            {/* Tabs */}
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <button
                onClick={() => setTab('message')}
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all ${
                  tab === 'message' ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Send className="w-4 h-4" /> Send a Message
              </button>
              <button
                onClick={() => setTab('booking')}
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all ${
                  tab === 'booking' ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Calendar className="w-4 h-4" /> Book a Styling Session
              </button>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm">
              {/* MESSAGE TAB */}
              {tab === 'message' && (
                msgSent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Send className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      Message Sent!
                    </h3>
                    <p className="text-gray-500">We will get back to you within 24 hours.</p>
                    <button onClick={() => setMsgSent(false)} className="mt-6 text-primary text-sm underline">
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleMessage} className="space-y-5">
                    <h2 className="text-2xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      Send us a Message
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide">Name</label>
                        <input required type="text" placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide">Email</label>
                        <input required type="email" placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide">Subject</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-gray-700">
                        <option>General Inquiry</option>
                        <option>Order Support</option>
                        <option>Product Question</option>
                        <option>Brand Summit</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide">Message</label>
                      <textarea required rows={5} placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm resize-none" />
                    </div>
                    <button type="submit"
                      className="w-full bg-primary text-white py-4 rounded-xl font-semibold text-sm hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                )
              )}

              {/* BOOKING TAB */}
              {tab === 'booking' && (
                bookSent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-accent-pink/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Calendar className="w-7 h-7 text-accent-pink" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      Booking Request Received!
                    </h3>
                    <p className="text-gray-500 max-w-xs mx-auto">
                      Our team will confirm your styling session within one business day.
                    </p>
                    <button onClick={() => setBookSent(false)} className="mt-6 text-primary text-sm underline">
                      Book another session
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleBooking} className="space-y-5">
                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>
                        Book a Personal Styling Session
                      </h2>
                      <p className="text-gray-500 text-sm mb-6">
                        One-on-one with a Sassy stylist at any of our three locations. Complimentary for purchases over R2,000.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide">Full Name</label>
                        <input required type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide">Phone Number</label>
                        <input required type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide">Email</label>
                      <input required type="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide">Preferred Location</label>
                        <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-gray-700">
                          <option value="">Select a store</option>
                          <option>Sandton City, Johannesburg</option>
                          <option>V&A Waterfront, Cape Town</option>
                          <option>Gateway Theatre, Durban</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide">Preferred Date</label>
                        <input required type="date"
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide">What are you shopping for?</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-gray-700">
                        <option>Bags</option>
                        <option>Shoes</option>
                        <option>Full Accessories Outfit</option>
                        <option>Gift for Someone Special</option>
                        <option>Not Sure Yet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide">Any notes for your stylist?</label>
                      <textarea rows={3} placeholder="Style preferences, occasion, budget range..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm resize-none" />
                    </div>
                    <button type="submit"
                      className="w-full bg-accent-pink text-white py-4 rounded-xl font-semibold text-sm hover:bg-pink-600 transition-colors flex items-center justify-center gap-2">
                      Request Booking <Calendar className="w-4 h-4" />
                    </button>
                  </form>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-md border border-gray-100"
        >
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <p className="font-semibold text-gray-900 text-sm">Sassy Bags Flagship — Sandton City, Johannesburg</p>
          </div>
          <iframe
            title="Sassy Bags location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=28.0467%2C-26.1176%2C28.0667%2C-26.0976&amp;layer=mapnik&amp;marker=-26.1076%2C28.0567"
            className="w-full h-56 sm:h-64 md:h-80 border-0"
            loading="lazy"
          />
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
            <a
              href="https://www.openstreetmap.org/?mlat=-26.1076&mlon=28.0567#map=15/-26.1076/28.0567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm hover:underline"
            >
              Open in maps
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
