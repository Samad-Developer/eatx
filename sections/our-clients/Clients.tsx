'use client';

import OptimizedImage from '@/components/ui/OptimizedImage';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Client {
  id: number;
  name: string;
  logo: string;
  width: number;
  height: number;
  tagline?: string;
}

export const Clients = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const clients: Client[] = [
    { id: 1, name: 'Melbrew', logo: 'melbrew.webp', width: 150, height: 90, tagline: 'Premium Coffee & Brunch' },
    { id: 8, name: 'Darbar Restaurant', logo: 'darbar.webp', width: 150, height: 90, tagline: 'Traditional Pakistani Cuisine' },
    { id: 3, name: 'Daily Dubai', logo: 'daily-dubai.webp', width: 150, height: 90, tagline: 'Arabic Grill & More' },
    { id: 4, name: 'Tooso', logo: 'tooso.webp', width: 150, height: 90, tagline: 'Modern Desi Dining' },
    { id: 5, name: 'Red Apple', logo: 'red-apple.png', width: 150, height: 90, tagline: 'Burgers, Rolls & Fries' },
    { id: 6, name: 'Ghaffar Kabab', logo: 'ghaffar-kabab.webp', width: 150, height: 90, tagline: 'Authentic BBQ' },
    { id: 7, name: 'Hot N Spicy', logo: 'hot-n-spicy.png', width: 150, height: 90, tagline: 'Spicy Fast Food' },
    { id: 2, name: 'Arabic Shwarma', logo: 'arabic-shwarma.webp', width: 150, height: 90, tagline: 'Shawarma & Grills' },
    { id: 9, name: 'Karachi Haleem', logo: 'karachi-haleem.webp', width: 150, height: 90, tagline: 'The Haleem Experts' },
    { id: 10, name: 'Eaton', logo: 'eaton.webp', width: 150, height: 90, tagline: 'Bakers & Snacks' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  if (!isMounted) return null;

  return (
    <section className="relative py-24 px-2 sm:px-10 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Trusted by <span className="text-red-600">Top Restaurants</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            We empower food businesses with <span className="text-red-500 font-semibold">lightning-fast POS</span>, seamless <span className="text-red-500 font-semibold">online ordering</span>, and a dashboard designed for <span className="font-semibold">data-driven success</span>.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6 "
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={item}
              className="relative group rounded-4xl border p-2 flex flex-col items-center justify-center h-48"
              whileHover={{ scale: 1.04 }}
            >
              <div className="w-full h-36 flex items-center justify-center">
                <OptimizedImage
                  folder="clients"
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={client.width}
                  height={client.height}
                  className="object-contain max-h-[144px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-black mt-2 text-center">{client.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
