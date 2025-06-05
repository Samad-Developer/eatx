'use client';
import { motion } from 'framer-motion';
import { 
  RefreshCw, Smartphone, BarChart3, Shield, Lightbulb, Rocket, 
  CreditCard, Package, Users, Cloud, Settings, ArrowRight, 
} from 'lucide-react';

export default function MarketingSection() {
  const features = [
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Real-time Sync",
      description: "Instant updates between POS and online orders. No more double bookings or inventory mismatches."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Optimized",
      description: "Customers can order from any device. Staff can manage orders from tablets or smartphones."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Sales Analytics",
      description: "Track performance, popular items, and customer trends with beautiful dashboards."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Payments",
      description: "PCI-compliant processing with end-to-end encryption for all transactions."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Smart Upselling",
      description: "Automated suggestions increase average order value by 23% on average."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Quick Setup",
      description: "Get up and running in 48 hours with our streamlined onboarding process."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-600/20 to-transparent"></div>
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-red-600/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-red-600/15 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 mb-4 bg-red-600/20 rounded-full"
          >
            <span className="text-red-400 font-medium">Why Choose Us</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Revolutionize Your <span className="text-red-500">Restaurant</span> Operations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            All-in-one solution that integrates POS, online ordering, and management tools to boost your efficiency and revenue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-600 rounded-full opacity-20 blur-xl"></div>
            <div className="relative bg-gray-800 rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-red-500 to-red-600">
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-gray-400">Dashboard</div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-800 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Today's Orders</div>
                        <div className="text-xl font-bold text-white">142</div>
                        <div className="text-xs text-green-500 mt-1">↑ 12%</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Revenue</div>
                        <div className="text-xl font-bold text-white">$3,842</div>
                        <div className="text-xs text-green-500 mt-1">↑ 8%</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Avg. Order</div>
                        <div className="text-xl font-bold text-white">$27.05</div>
                        <div className="text-xs text-green-500 mt-1">↑ 5%</div>
                      </div>
                    </div>
                    
                    {/* Chart placeholder */}
                    <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 flex items-center justify-center">
                      <div className="text-gray-600">Sales Performance Chart</div>
                    </div>
                    
                    {/* Recent orders */}
                    <div>
                      <div className="text-sm font-medium text-gray-300 mb-2">Recent Orders</div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex justify-between items-center py-2 border-b border-gray-800">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                <div className="text-red-400 text-sm">#{i}</div>
                              </div>
                              <div className="ml-3">
                                <div className="text-sm text-white">Order #100{i}</div>
                                <div className="text-xs text-gray-400">2 items • $2{i}.00</div>
                              </div>
                            </div>
                            <div className="text-xs px-2 py-1 bg-gray-800 rounded-full text-green-400">Completed</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700 p-5 w-64"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-red-400" />
                </div>
                <div className="ml-3">
                  <div className="font-medium text-white">New Order!</div>
                  <div className="text-xs text-gray-400">Online • Just now</div>
                </div>
              </div>
              <div className="text-sm text-gray-300">
                #1024: 2x Burger, Fries
              </div>
              <div className="mt-3 flex justify-between">
                <button className="text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition">
                  Accept
                </button>
                <button className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-lg transition">
                  View
                </button>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 p-6 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-red-600/10 group-hover:bg-red-600/20 flex items-center justify-center mb-4 transition-colors">
                  <div className="text-red-500 group-hover:text-red-400 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <button className="relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
            <span className="relative z-10">Start Your Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 group-hover:bg-white/0 transition-all duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          </button>
          <p className="mt-4 text-gray-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}