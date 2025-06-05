'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Client {
  id: number;
  name: string;
  logo: string;
  width: number;
  height: number;
}

export const Clients = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const clients: Client[] = [
    { id: 1, name: "Restaurant Elite", logo: "/clients/elite.png", width: 120, height: 40 },
    { id: 2, name: "Bistro Modern", logo: "/clients/bistro.png", width: 130, height: 30 },
    { id: 3, name: "Cafe Harmony", logo: "/clients/harmony.png", width: 140, height: 35 },
    { id: 4, name: "Pizza Fusion", logo: "/clients/fusion.png", width: 110, height: 45 },
    { id: 5, name: "Burger Hub", logo: "/clients/burgerhub.png", width: 125, height: 38 },
    { id: 6, name: "Sushi Masters", logo: "/clients/sushi.png", width: 150, height: 32 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  if (!isMounted) return null;

  return (
    <section className="relative py-20 px-6 sm:px-8  overflow-hidden">
      {/* Decorative SVG */}
      {/* <svg
        className="absolute top-0 left-0 w-64 opacity-10 -z-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#EF4444" d="M41.3,-55.5C54.3,-46.1,65.3,-32.5,69.1,-17.7C72.9,-2.9,69.5,13.2,60.4,26.3C51.3,39.4,36.5,49.4,20.7,55.7C5,62,-11.7,64.7,-26.3,59.1C-40.9,53.4,-53.3,39.5,-59.6,23.9C-65.9,8.2,-66,-8.9,-58.7,-21.7C-51.5,-34.5,-36.9,-43.1,-22.1,-51C-7.3,-58.8,7.8,-65.9,22.8,-64.8C37.9,-63.7,52.8,-54.9,41.3,-55.5Z" transform="translate(100 100)" />
      </svg> */}

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Beloved Clients
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Trusted by top-tier restaurants to power their POS and online systems
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {clients.map((client) => (
            <div
              className="group bg-gray-100 hover:border-red-600 shadow-md hover:shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 transition-all duration-300"
            >
              <div className="bg-red-50 p-4 rounded-xl w-24 h-24 flex items-center justify-center shadow-inner">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition duration-200">
                {client.name}
              </h3>
            </div>
          ))}
        </motion.div>

      
      </div>
    </section>
  );
};
