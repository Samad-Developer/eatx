"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, Users, Truck, BarChart3, CheckCircle,
  Percent, Activity, Clock, TrendingUp, ArrowRight
} from 'lucide-react';

type FeatureKey = 'inventory' | 'management' | 'delivery' | 'reporting';

const OtherProducts = () => {
  const [activeTab, setActiveTab] = useState<FeatureKey>('inventory');

  const features: Record<FeatureKey, {
    title: string;
    subtitle: string;
    icon: React.ReactElement;
    items: { category: string; features: string[] }[];
    benefits: {
      value: string;
      title: string;
      description: string;
      icon: React.ReactElement;
      color: string;
    }[];
  }> = {
    inventory: {
      title: "Inventory Management",
      subtitle: "Advanced stock control with automated reporting",
      icon: <Package className="w-5 h-5" />,
      items: [
        {
          category: "Stock Control",
          features: [
            "Demand Order Processing",
            "Purchase Order Automation",
            "Good Receiving Notes",
            "Inventory Adjustment Tools",
            "Recipe Cost Calculation",
            "Item Wastage Analysis"
          ]
        },
        {
          category: "Reporting",
          features: [
            "Inventory Level Reports",
            "Supplier Ledger Tracking",
            "Item Stocking Analytics",
            "Order & Delivery History"
          ]
        }
      ],
      benefits: [
  {
    value: "30%+",
    title: "Reduced Waste",
    description: "Precise inventory tracking minimizes food spoilage",
    icon: <Percent className="w-5 h-5" />,
    color: "from-red-100 to-red-50 border-red-200 text-red-700"
  },
  {
    value: "25%",
    title: "Cost Savings",
    description: "Optimize purchasing and reduce overstocking",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-red-100 to-red-50 border-red-200 text-red-700"
  },
  {
    value: "99%",
    title: "Accuracy",
    description: "Automated tracking eliminates manual errors",
    icon: <CheckCircle className="w-5 h-5" />,
    color: "from-red-100 to-red-50 border-red-200 text-red-700"
  }
]

    },
    management: {
      title: "Queue & Staff",
      subtitle: "Optimize customer flow and staff efficiency",
      icon: <Users className="w-5 h-5" />,
      items: [
        {
          category: "Queue Management",
          features: [
            "Digital Waitlist System",
            "Real-Time Wait Estimates",
            "SMS Notifications",
            "Table Allocation Manager",
            "POS Integration"
          ]
        },
        {
          category: "Waiter Ordering",
          features: [
            "Android Order Application",
            "Direct KOT Punching",
            "Waiter Performance Tracking",
            "Digital Order Placement"
          ]
        }
      ],
     benefits: [
  {
    value: "50%",
    title: "Faster Turnover",
    description: "Reduce table wait times and increase covers",
    icon: <Activity className="w-5 h-5" />,
    color: "from-red-100 to-red-50 border-red-200 text-red-700"
  },
  {
    value: "40%",
    title: "Staff Efficiency",
    description: "Optimize staff allocation during peak hours",
    icon: <Users className="w-5 h-5" />,
    color: "from-red-100 to-red-50 border-red-200 text-red-700"
  },
  {
    value: "4.8★",
    title: "Customer Rating",
    description: "Improved experience with wait time transparency",
    icon: <CheckCircle className="w-5 h-5" />,
    color: "from-red-100 to-red-50 border-red-200 text-red-700"
  }
]

    },
    delivery: {
      title: "Delivery System",
      subtitle: "Manage deliveries with real-time tracking",
      icon: <Truck className="w-5 h-5" />,
      items: [
        {
          category: "Rider Management",
          features: [
            "Rider Login Portal",
            "Smart Order Assignment",
            "Real-Time Navigation",
            "Order Tracking Updates",
            "Earnings Dashboard"
          ]
        },
        {
          category: "Customer Experience",
          features: [
            "Live Order Tracking",
            "Estimated Delivery Times",
            "Delivery History",
            "Customer Feedback"
          ]
        }
      ],
      benefits: [
  {
    value: "35%",
    title: "Faster Delivery",
    description: "Optimized routes reduce delivery times",
    icon: <Clock className="w-5 h-5" />,
    color: "from-red-100 to-red-50 border-red-200 text-red-700"
  },
  {
    value: "20%",
    title: "Cost Reduction",
    description: "Efficient routing lowers fuel costs",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-red-100 to-red-50 border-red-200 text-red-700"
  },
  {
    value: "95%",
    title: "On-Time Rate",
    description: "Accurate ETAs and real-time tracking",
    icon: <CheckCircle className="w-5 h-5" />,
    color: "from-red-100 to-red-50 border-red-200 text-red-700"
  }
]

    },
    reporting: {
      title: "Analytics Suite",
      subtitle: "Data-driven decisions with comprehensive reporting",
      icon: <BarChart3 className="w-5 h-5" />,
      items: [
        {
          category: "Sales Intelligence",
          features: [
            "24/7 Online Reporting",
            "Cloud Data Storage",
            "Comprehensive Sales Records",
            "Mobile/Web Dashboard"
          ]
        },
        {
          category: "Accounting Module",
          features: [
            "Chart of Accounts",
            "Payment Vouchers",
            "Receipt Management",
            "Journal Entries",
            "Ledger Reporting"
          ]
        }
      ],
    benefits: [
  {
    value: "27%",
    title: "Revenue Growth",
    description: "Data-driven menu and pricing optimization",
    icon: <BarChart3 className="w-5 h-5" />,
    color: "from-red-100 to-red-50 border-red-200 text-red-700"
  },
  {
    value: "60%",
    title: "Time Savings",
    description: "Automated reporting replaces manual processes",
    icon: <Clock className="w-5 h-5" />,
    color: "from-red-100 to-red-50 border-red-200 text-red-700"
  },
  {
    value: "360°",
    title: "Visibility",
    description: "Complete operational insights in one dashboard",
    icon: <Activity className="w-5 h-5" />,
    color: "from-red-100 to-red-50 border-red-200 text-red-700"
  }
]

    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20, duration: 0.6 }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const headerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 }
    }
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={headerVariants}
          >
            <span className="block">Complete <span className='text-red-600'>Restaurant </span>Management Suite</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Beyond food ordering, we provide a comprehensive set of tools to optimize every aspect of your restaurant operations.
          </motion.p>
        </motion.div>

        {/* Unified container for sidebar and content */}
        <div className="bg-white rounded-3xl border overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar Navigation */}
            <motion.div 
              className="w-full lg:w-1/4 bg-gradient-to-b from-red-50 to-red-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6 h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-red-100">Management Modules</h3>
                <div className="space-y-3">
                  {Object.entries(features).map(([key, feature], index) => (
                    <motion.button
                      key={key}
                      onClick={() => setActiveTab(key as FeatureKey)}
                      className={`flex items-center gap-4 w-full p-4 rounded-xl transition-all duration-300 ${
                        activeTab === key
                          ? 'bg-white shadow-md border border-red-200'
                          : 'hover:bg-white/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`p-3 rounded-lg ${activeTab === key ? 'bg-red-500 text-white' : 'bg-red-200 text-red-700'}`}>
                        {feature.icon}
                      </div>
                      <div className="text-left">
                        <h4 className={`font-medium ${activeTab === key ? 'text-red-600' : 'text-gray-700'}`}>
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-500">{feature.subtitle}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                {/* Call to action */}
                <div className="mt-8 p-5 bg-gradient-to-r from-red-600 to-red-500 rounded-xl text-white">
                  <h3 className="text-lg font-bold mb-2">Ready to transform your restaurant?</h3>
                  <p className="text-sm text-red-100 mb-3">Join thousands of successful restaurants using our platform</p>
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-white text-red-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                    <span>Request Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Active Feature Content */}
            <div className="w-full lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {features[activeTab].items.map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 p-6 shadow-sm"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-100">
                            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                              <div className="w-6 h-6 rounded-md bg-red-500 flex items-center justify-center">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">{item.category}</h4>
                          </div>
                          <div className="space-y-4 pl-2">
                            {item.features.map((feature, featureIndex) => (
                              <div 
                                key={featureIndex}
                                className="flex gap-3 group"
                              >
                                <div className="mt-1 flex-shrink-0">
                                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                                </div>
                                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Dynamic Key Benefits */}
                    <motion.div 
                      className="mt-12 pt-8 border-t border-gray-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Key Benefits</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features[activeTab].benefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            className={`p-5 rounded-xl border bg-gradient-to-br ${benefit.color} shadow-sm`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            <div className="flex items-start justify-between">
                              <div className="text-3xl font-bold mb-2">{benefit.value}</div>
                              <div className="p-2 bg-white rounded-lg shadow-sm">
                                {benefit.icon}
                              </div>
                            </div>
                            <div className="font-bold text-lg mb-1">{benefit.title}</div>
                            <p className="text-sm">{benefit.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProducts;