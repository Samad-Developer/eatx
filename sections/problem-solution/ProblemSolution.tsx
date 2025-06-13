'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  Zap, CheckCircle, Cloud, Printer, ShoppingCart, 
  Clock, ClipboardCheck, BarChart, ArrowRight, Server
} from 'lucide-react';

const ProblemSolutionLanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('pos-solution');
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <section 
      id="pos-solution" 
      className="relative py-20 overflow-hidden "
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center text-sm font-medium bg-white text-red-600 px-4 py-1.5 rounded-full mb-6 shadow-sm border border-red-100"
          >
            <Zap className="mr-2 h-4 w-4" fill="#fecaca" />
            Restaurant Automation Revolution
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
              Eliminate Manual Order Entry
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Transform your restaurant with seamless POS integration that automates online orders, eliminates errors, and saves time.
          </motion.p>
        </motion.div>

        {/* Visual Problem/Solution Showcase */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          {/* Problem Visualization */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 h-full border border-red-100">
              <div className="flex items-center mb-8">
                <div className="bg-red-100 p-3 rounded-xl mr-4">
                  <Clock className="text-red-600 h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Painful Manual Process</h3>
              </div>
              
              <div className="relative h-64 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl mb-8 overflow-hidden">
                <div className="absolute top-6 left-6 w-32 h-32 bg-red-200 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-40 h-40 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <div className="text-red-600 text-center p-4">
                    <div className="text-sm mb-1">Manual Entry</div>
                    <div className="text-2xl font-bold">2-3 min</div>
                    <div className="text-xs mt-1">per order</div>
                  </div>
                </div>
                <div className="absolute top-10 right-10">
                  <div className="bg-white rounded-lg px-3 py-1 shadow-sm text-red-600 font-medium">
                    +15% errors
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {[
                  "Staff manually typing orders into POS",
                  "High risk of order errors and mistakes",
                  "Time wasted on data entry instead of service",
                  "Frustration during peak hours",
                  "Inconsistent order handling"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solution Visualization */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-3xl shadow-xl p-8 h-full text-white">
              <div className="flex items-center mb-8">
                <div className="bg-white bg-opacity-20 p-3 rounded-xl mr-4">
                  <Zap className="text-white h-8 w-8" fill="rgba(255,255,255,0.2)" />
                </div>
                <h3 className="text-2xl font-bold">The Effortless EatX Solution</h3>
              </div>
              
              <div className="relative h-64 bg-gradient-to-br from-red-700 to-red-600 rounded-2xl mb-8 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-grid-white/[0.05]"></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-20 bg-white bg-opacity-10 rounded-xl flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-lg font-bold">Automated Flow</div>
                    <div className="text-sm opacity-80">0 manual entry</div>
                  </div>
                </div>
                <div className="absolute top-10 left-10">
                  <div className="bg-white text-red-600 rounded-lg px-3 py-1 shadow-sm font-medium">
                    <span className="text-green-500">✓</span> 100% accuracy
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {[
                  "Online orders flow directly into POS",
                  "Zero manual data entry required",
                  "Orders print automatically in kitchen",
                  "Real-time synchronization",
                  "Consistent, error-free processing"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* How It Works - Visual Flow */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              How EatX Works
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Our seamless process transforms online orders into kitchen tickets instantly
            </motion.p>
          </div>

          <div className="relative">
            {/* Curved connector line */}
            <div className="absolute inset-x-0 top-24 h-64 flex justify-center overflow-hidden hidden lg:block">
              <svg width="100%" height="100%" viewBox="0 0 800 200" className="absolute top-0">
                <path 
                  d="M0,100 Q400,250 800,100" 
                  stroke="#fecaca" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="8,8"
                />
              </svg>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  icon: <ShoppingCart className="h-8 w-8 text-red-600" />,
                  title: "Customer Orders",
                  description: "Online order placed",
                  color: "bg-red-100"
                },
                {
                  icon: <Cloud className="h-8 w-8 text-red-600" />,
                  title: "Cloud Processing",
                  description: "Instant order verification",
                  color: "bg-red-100"
                },
                {
                  icon: <Server className="h-8 w-8 text-red-600" />,
                  title: "POS Integration",
                  description: "Auto-appears in your system",
                  color: "bg-red-100"
                },
                {
                  icon: <Printer className="h-8 w-8 text-red-600" />,
                  title: "Kitchen Print",
                  description: "Ticket prints automatically",
                  color: "bg-red-100"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                    {step.icon}
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-lg w-full">
                    <div className="text-lg font-bold text-gray-900 mb-2">{step.title}</div>
                    <p className="text-gray-600">{step.description}</p>
                    <div className="mt-4 text-red-600 font-bold text-xl">{index + 1}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits Showcase */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-br from-white to-[#fffafa] rounded-3xl shadow-lg p-8 border border-red-100 hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="text-red-600 h-8 w-8" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Save Time & Labor</h4>
            <p className="text-gray-600 mb-6">
              Eliminate manual data entry and free your staff to focus on customers and food quality.
            </p>
            <div className="bg-red-50 rounded-xl p-4">
              <div className="text-red-600 font-bold text-2xl">2-3 min/order saved</div>
              <div className="text-red-500 text-sm">Average time reduction</div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-white to-[#fffafa] rounded-3xl shadow-lg p-8 border border-red-100 hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <ClipboardCheck className="text-red-600 h-8 w-8" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Eliminate Errors</h4>
            <p className="text-gray-600 mb-6">
              Automated processing ensures 100% accuracy in order transcription to your POS system.
            </p>
            <div className="bg-red-50 rounded-xl p-4">
              <div className="text-red-600 font-bold text-2xl">100%</div>
              <div className="text-red-500 text-sm">Order accuracy</div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-white to-[#fffafa] rounded-3xl shadow-lg p-8 border border-red-100 hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <BarChart className="text-red-600 h-8 w-8" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Boost Efficiency</h4>
            <p className="text-gray-600 mb-6">
              Streamline operations to handle more orders with the same staff during peak hours.
            </p>
            <div className="bg-red-50 rounded-xl p-4">
              <div className="text-red-600 font-bold text-2xl">35%+</div>
              <div className="text-red-500 text-sm">Peak capacity increase</div>
            </div>
          </motion.div>
        </motion.div>

      
      </div>
    </section>
  );
};

export default ProblemSolutionLanding;