"use client";
// import { motion } from "framer-motion";
// import { 
//   Utensils, 
//   CookingPot, 
//   Package, 
//   Smartphone, 
//   LineChart, 
//   Building,
//   CheckCircle2,
//   Clock,
//   Cloud,
//   LayoutDashboard,
//   Users,
//   Wallet,
//   BookUser,
//   Gift,
//   Box,
//   ShoppingCart,
//   Scale,
//   Truck,
//   Coffee,
//   MessageSquare,
//   Globe,
//   Rocket
// } from 'lucide-react';
// import React from "react";

// const FeaturesSection = () => {
//   const features = [
//     {
//       title: "Restaurant Management",
//       icon: <Utensils className="w-6 h-6 text-white" />,
//       items: [
//         { text: "Dine-in & Delivery", icon: <ShoppingCart className="w-4 h-4" /> },
//         { text: "Shift Management", icon: <Clock className="w-4 h-4" /> },
//         { text: "Table Reservations", icon: <BookUser className="w-4 h-4" /> },
//         { text: "Staff Management", icon: <Users className="w-4 h-4" /> }
//       ]
//     },
//     {
//       title: "Kitchen Display",
//       icon: <CookingPot className="w-6 h-6 text-white" />,
//       items: [
//         { text: "Order Tracking", icon: <Cloud className="w-4 h-4" /> },
//         { text: "Workflow Optimized", icon: <Rocket className="w-4 h-4" /> },
//         { text: "POS Sync", icon: <LayoutDashboard className="w-4 h-4" /> },
//         { text: "Upselling Prompts", icon: <LineChart className="w-4 h-4" /> }
//       ]
//     },
//     {
//       title: "Inventory Control",
//       icon: <Package className="w-6 h-6 text-white" />,
//       items: [
//         { text: "Waste Calculation", icon: <Scale className="w-4 h-4" /> },
//         { text: "Purchase Orders", icon: <Box className="w-4 h-4" /> },
//         { text: "Stock Tracking", icon: <ShoppingCart className="w-4 h-4" /> },
//         { text: "Supplier Mgmt", icon: <Truck className="w-4 h-4" /> }
//       ]
//     },
//     {
//       title: "Digital Ordering",
//       icon: <Smartphone className="w-6 h-6 text-white" />,
//       items: [
//         { text: "Mobile/Web Apps", icon: <Globe className="w-4 h-4" /> },
//         { text: "3rd Party Integration", icon: <MessageSquare className="w-4 h-4" /> },
//         { text: "Live Tracking", icon: <Clock className="w-4 h-4" /> },
//         { text: "Multi-payment", icon: <Wallet className="w-4 h-4" /> }
//       ]
//     },
//     {
//       title: "Business Insights",
//       icon: <LineChart className="w-6 h-6 text-white" />,
//       items: [
//         { text: "Sales Analytics", icon: <LayoutDashboard className="w-4 h-4" /> },
//         { text: "Shift Reports", icon: <Clock className="w-4 h-4" /> },
//         { text: "Customer Insights", icon: <BookUser className="w-4 h-4" /> },
//         { text: "AI Predictions", icon: <CheckCircle2 className="w-4 h-4" /> }
//       ]
//     },
//     {
//       title: "Enterprise Solutions",
//       icon: <Building className="w-6 h-6 text-white" />,
//       items: [
//         { text: "Multi-branch", icon: <Globe className="w-4 h-4" /> },
//         { text: "Central Accounting", icon: <Wallet className="w-4 h-4" /> },
//         { text: "Call Center", icon: <MessageSquare className="w-4 h-4" /> },
//         { text: "Custom Solutions", icon: <Rocket className="w-4 h-4" /> }
//       ]
//     }
//   ];

//   return (
//     <section className="relative py-20 overflow-hidden">
//           {/* Background Blurs */}

//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-16 max-w-2xl mx-auto"
//         >
//           <h2 className="text-4xl font-bold text-orange-600 mb-4">
//             Our Products
//           </h2>
//           <p className="text-lg text-gray-600">
//             Modern platform combining essential tools with intuitive design
//           </p>
//         </motion.div>

//         {/* Features Grid */}
//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative bg-white rounded-xl p-6 flex flex-col border justify-center "
//             >
//               {/* Orange Blur Effect */}
//               {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/30 rounded-xl" /> */}

//               {/* Icon Container */}
//               <div className="mb-4">
//                 <div className="p-3 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 inline-block">
//                   {React.cloneElement(feature.icon, { className: "w-6 h-6 text-white" })}
//                 </div>
//               </div>

//               <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                 {feature.title}
//               </h3>
//               <ul className="space-y-3">
//                 {feature.items.map((item, itemIndex) => (
//                   <li 
//                     key={itemIndex}
//                     className="flex items-center gap-3 text-gray-600"
//                   >
//                     {/* <span className="text-orange-500">
//                       {item.icon}
//                     </span> */}
//                     <span className="text-base">{item.text}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>


//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;



































import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Smartphone,
  ShoppingCart,
  Users,
  BarChart3,
  Truck,
  Clock,
  CreditCard,
  Package,
  Settings,
  CheckCircle,
  ChevronRight,
  Globe,
  Calendar,
  UserCheck,
  Receipt
} from 'lucide-react';

type FeatureKey = 'inventory' | 'management' | 'delivery' | 'reporting';

const OtherProducts = () => {
  const [activeTab, setActiveTab] = useState<FeatureKey>('inventory');

  const features: Record<FeatureKey, {
    title: string;
    subtitle: string;
    icon: React.ReactElement;
    gradient: string;
    bgGradient: string;
    items: { category: string; features: string[] }[];
  }> = {

    inventory: {
      title: "Inventory Management",
      subtitle: "Keep track of your stock with advanced inventory control and automated reporting",
      icon: <Package className="w-5 h-5" />,
      gradient: "from-red-400 to-red-500",
      bgGradient: "from-red-50 to-orange-50",
      items: [
        {
          category: "Stock Control",
          features: [
            "Demand Order",
            "Purchase Order",
            "Good Receiving Note",
            "Purchase Invoice",
            "Production",
            "Inventory Adjustment",
            "Recipe Calculation",
            "Item Wastage Calculation",
            "Physical Stock",
            "All Inventory, Order, Delivery, and Sales Report",
            "Supplier Ledger, Item Ledger and Item Stocking"
          ]
        }
      ]
    },

    management: {
      title: "Queue & Staff Management",
      subtitle: "Optimize customer flow and staff efficiency with smart management tools",
      icon: <Users className="w-5 h-5" />,
      gradient: "from-red-400 to-red-500",
      bgGradient: "from-pink-50 to-red-50",
      items: [
        {
          category: "Queue Management",
          features: [
            "Digital Waitlist",
            "Real-Time Wait Time Estimates",
            "SMS Notification",
            "Table Allocation Management",
            "Integrated with POS and Reservation Systems",
            "Analytics & Reporting",
            "Improved Customer Satisfaction"
          ]
        },
        {
          category: "Waiter Order Application",
          features: [
            "Order Through Android",
            "Direct Punching to KOT",
            "Waiter Wise Tracking",
            "A Digital Way To Design Order Placing"
          ]
        }
      ]
    },
    delivery: {
      title: "Rider Order & Tracking",
      subtitle: "Manage delivery operations with real-time tracking and rider management",
      icon: <Truck className="w-5 h-5" />,
      gradient: "from-red-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      items: [
        {
          category: "Delivery Management",
          features: [
            "Rider Login",
            "Order Assignment",
            "Real-Time Navigation",
            "Order Tracking and Updates",
            "Order History",
            "Earnings Dashboard"
          ]
        }
      ]
    },
    reporting: {
      title: "Analytics & Reporting",
      subtitle: "Make data-driven decisions with comprehensive reporting and analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      gradient: "from-red-400 to-red-500",
      bgGradient: "from-rose-50 to-pink-50",
      items: [
        {
          category: "Sales Reporting",
          features: [
            "The Online Facility of 24/7",
            "Cloud Data Storage",
            "A Completely Record of Reporting",
            "Including All Models",
            "Dashboard on Mobile/Web"
          ]
        },
        {
          category: "Accounting Module",
          features: [
            "Chart of Accounting",
            "Cash and Bank Payment Vouchers",
            "Cash and Bank Receipt Vouchers",
            "Journal Vouchers",
            "All Ledger Reporting"
          ]
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
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section className={`py-20 bg-gray-100 transition-all duration-1000 ease-in-out`}>
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
            <span className=" block">
              More Products
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Alongside food ordering, we offer a suite of powerful tools designed to streamline your restaurant operations.
          </motion.p>

        </motion.div>

        {/* Feature Tabs */}
        <div className="mb-12">
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {Object.entries(features).map(([key, feature], index) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key as FeatureKey)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-500 relative overflow-hidden ${activeTab === key
                    ? `bg-gradient-to-r ${feature.gradient} text-white shadow-2xl transform scale-105`
                    : 'bg-white text-gray-600 hover:bg-gray-50   hover:border-red-200 hover:shadow-lg'
                  }`}
                variants={itemVariants}
                whileHover={{
                  scale: activeTab === key ? 1.02 : 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === key && (
                  <motion.div
                    className=""
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  />
                )}
                <motion.div className="relative z-10 flex items-center gap-3">
                  <div
                  >
                    {feature.icon}
                  </div>
                  <span className="hidden sm:inline">{feature.title}</span>
                </motion.div>
              </motion.button>
            ))}
          </motion.div>

          {/* Active Feature Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="bg-white rounded-3xl  overflow-hidden"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
             

              <motion.div
                className="p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {features[activeTab].items.map((item, index) => (
                    <motion.div
                      key={index}
                      className="space-y-4"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.5 + (index * 0.1),
                        type: "spring",
                        stiffness: 100,
                        damping: 12
                      }}
                    >
                      <motion.h4
                        className="text-xl font-semibold text-gray-900 border-b-2 border-red-100 pb-3 mb-4"
                        whileHover={{ scale: 1.02 }}
                      >
                        {item.category}
                      </motion.h4>
                      <div className="space-y-3">
                        {item.features.map((feature, featureIndex) => (

                          <div className='flex gap-3'>
                            <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0 group-hover:text-red-600 transition-colors" />
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                          </div>

                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OtherProducts;