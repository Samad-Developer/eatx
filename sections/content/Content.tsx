"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Content = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Complete Restaurant Solution
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Seamlessly manage your restaurant with our integrated POS and online ordering platform
          </motion.p>
        </div>

        {/* Dual System Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* POS System */}
          <motion.div 
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="h-64 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556911220-ef412aea183f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-overlay opacity-70"></div>
                <div className="relative z-10 text-center p-6">
                  <h3 className="text-3xl font-bold text-white mb-4">Restaurant POS System</h3>
                  <p className="text-blue-100 max-w-md mx-auto">Streamline operations with our intuitive point-of-sale solution</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="w-24 h-24 rounded-full bg-gray-100 border-8 border-blue-50 flex items-center justify-center mb-6 md:mb-0 md:mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">Table Management</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">Staff Management</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">Inventory Tracking</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">Real-time Reporting</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    Explore POS Features
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Online Ordering */}
          <motion.div 
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="h-64 bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-overlay opacity-70"></div>
                <div className="relative z-10 text-center p-6">
                  <h3 className="text-3xl font-bold text-white mb-4">Online Food Ordering</h3>
                  <p className="text-amber-100 max-w-md mx-auto">Grow your business with our branded ordering platform</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="w-24 h-24 rounded-full bg-gray-100 border-8 border-amber-50 flex items-center justify-center mb-6 md:mb-0 md:mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">Branded App</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">Delivery Tracking</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">Customer Loyalty</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">Marketing Tools</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    Explore Online Ordering
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
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