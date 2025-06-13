'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const ContactUs = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <section className="relative py-28 px-6 sm:px-10 bg-white overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-red-100 opacity-20 blur-3xl rounded-full -z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ duration: 1.8 }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-red-500 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Our Team
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Whether you need technical help, sales advice, or want to partner with us — we're always ready to talk.
        </motion.p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: '📧',
              title: 'Email Us',
              desc: 'Reach us anytime at support@example.com',
            },
            {
              icon: '📞',
              title: 'Call Us',
              desc: 'Talk directly to our team at (123) 456-7890',
            },
            {
              icon: '📍',
              title: 'Visit Us',
              desc: '123 Main St, Suite 100, Tech City, PK',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="text-4xl bg-red-100 text-red-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-red-500 to-red-400 rounded-xl p-0.5">
            <div className="bg-white rounded-xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let’s Get Started</h3>
              <p className="text-gray-600 max-w-xl mx-auto mb-6">
                Discover how we can help elevate your restaurant. Get in touch today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-all shadow-lg">
                  Send Message
                </button>
                <button className="px-6 py-3 border border-red-500 text-red-500 font-medium rounded-lg hover:bg-red-50 transition-all">
                  Schedule a Meeting
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
