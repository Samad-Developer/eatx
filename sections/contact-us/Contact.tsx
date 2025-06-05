'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const ContactUs = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <section className="relative py-24 px-6 sm:px-10 bg-white overflow-hidden">
      {/* Decorative SVG */}
      <svg
        className="absolute top-0 left-0 w-80 -z-10 opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#DC2626" d="M45.4,-47.3C58.4,-35.4,67.8,-17.7,68.7,0.4C69.7,18.5,62.3,37,49.3,49.6C36.2,62.1,18.1,68.7,-0.5,69.2C-19.1,69.6,-38.2,64,-51.4,51.1C-64.6,38.1,-72,17.9,-70.1,-2.2C-68.3,-22.4,-57.2,-42.3,-41,-54.3C-24.9,-66.3,-12.4,-70.5,2.2,-73.1C16.9,-75.7,33.7,-76.8,45.4,-67.3Z" transform="translate(100 100)" />
      </svg>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have a question, partnership opportunity, or just want to say hello? Fill out the form and we’ll respond shortly.
        </motion.p>

         {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-0.5">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to transform your restaurant?</h3>
              <p className="text-gray-600 max-w-xl mx-auto mb-6">
                Join thousands of restaurants already streamlining operations with our platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg hover:shadow-xl">
                  Start Free Trial
                </button>
                <button className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-all">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      
    </section>
  );
};
