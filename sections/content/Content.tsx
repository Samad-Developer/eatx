"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Content = () => {
  return (
    <section className="py-5">
      <div className="container mx-auto px-4 max-w-7xl">
        
        
        {/* Unified Benefits */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-gray-900 to-slate-800 rounded-3xl p-10 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">Unified Restaurant Management</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">Our integrated platform connects every aspect of your restaurant operations for seamless management</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Seamless Integration</h4>
              <p className="text-gray-300">POS and online orders sync instantly to your kitchen display system</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Real-time Analytics</h4>
              <p className="text-gray-300">Track sales, inventory, and customer data from a single dashboard</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Cost Savings</h4>
              <p className="text-gray-300">Reduce operational costs with integrated inventory and staff management</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Content;