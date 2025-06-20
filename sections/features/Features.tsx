"use client";

import { motion } from "framer-motion";
import { Tablet, Package, Users, BarChart, ShoppingCart, Instagram, Map, Zap, ArrowUp } from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      damping: 12,
      stiffness: 100
    }
  }
};

const hoverVariants = {
  hover: { 
    y: -12,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: { 
      type: "spring",
      stiffness: 300
    } 
  }
};

const iconVariants = {
  rest: { 
    scale: 1,
    rotate: 0 
  },
  hover: {
    scale: 1.15,
    rotate: -5,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
};

export function KeyFeatures() {
  const [activeTab, setActiveTab] = useState("pos");
  
  const posFeatures = [
    { icon: <Tablet className="w-6 h-6" />, title: "Tableside Ordering", description: "Mobile POS for instant order processing", color: "from-red-300 to-red-600" },
    { icon: <Package className="w-6 h-6" />, title: "Inventory Management", description: "Automated stock tracking & alerts", color: "from-red-300 to-red-600" },
    { icon: <Users className="w-6 h-6" />, title: "Employee Scheduling", description: "Smart shift planning & analytics", color: "from-red-300 to-red-600" },
    { icon: <BarChart className="w-6 h-6" />, title: "Real-time Analytics", description: "Live business performance dashboards", color: "from-red-300 to-red-600" }
  ];

  const onlineFeatures = [
    { icon: <ShoppingCart className="w-6 h-6" />, title: "Customizable Menus", description: "Drag-and-drop menu builder", color: "from-red-300 to-red-600" },
    { icon: <Instagram className="w-6 h-6" />, title: "Social Integration", description: "Direct ordering from social platforms", color: "from-red-300 to-red-600" },
    { icon: <Map className="w-6 h-6" />, title: "Order Tracking", description: "Live customer order status updates", color: "from-red-300 to-red-600" },
    { icon: <ArrowUp className="w-6 h-6" />, title: "SEO", description: "Live customer order status updates", color: "from-red-300 to-red-600" }
  ];

  const allFeatures = [...posFeatures, ...onlineFeatures];
  
  return (
    <section className="py-24 px-2 sm:px-6 lg:px-8 relative overflow-hidden ">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-red-100 rounded-full"
          >
            <Zap className="w-5 h-5 text-red-600" />
            <span className="font-medium text-red-600 ">Streamline Your Operations</span>
          </div>
          
          <div
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Our <span className="text-red-600">Services</span> 
            {/* <span className="relative inline-block">Reimagined
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 300 20">
                <path 
                  d="M5,10 Q150,20 295,10" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>
            </span> */}
          </div>
          
          <p
            className="max-w-2xl mx-auto text-xl text-gray-600"
          >
            Everything you need to streamline operations, delight customers, and grow your restaurant business.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 rounded-full bg-slate-100 border">
            
            <button 
              onClick={() => setActiveTab("pos")}
              className={`px-6 py-3 hover:cursor-pointer rounded-full text-sm font-medium transition-all ${activeTab === "pos" ? "bg-gradient-to-r from-red-400 to-red-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"}`}
            >
              POS System
            </button>
            <button 
              onClick={() => setActiveTab("online")}
              className={`px-6 py-3 hover:cursor-pointer rounded-full text-sm font-medium transition-all ${activeTab === "online" ? "bg-gradient-to-r from-red-400 to-red-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"}`}
            >
              Online Ordering
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-6"
        >
          {(activeTab === "all" ? allFeatures : 
            activeTab === "pos" ? posFeatures : onlineFeatures).map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="cursor-default group relative"
            >
             
              <div className="relative rounded-2xl blur-md opacity-0"></div>
              {/* line for bottom right border for style only */}
<div className="hidden sm:block absolute w-2 h-10 rounded-l-full bg-gradient-to-br from-red-300 to-red-400 right-0 bottom-4"></div>

              <div className="relative p-6 rounded-2xl  h-full border border-gray-200">

                
                <div className="flex flex-col h-full">
                  <div className="mb-6 ">
                    <div
                      className={` inline-flex p-3 rounded-full bg-gradient-to-br ${feature.color} text-white mb-4`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mt-2 text-base">{feature.description}</p>
                  </div>
                  <div className="mt-auto">
                    <button className="flex items-center text-sm font-medium text-orange-600 group-hover:text-orange-700 transition-colors">
                      Learn more
                      <svg 
                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          fill="currentColor" 
                          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" 
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
      
     
    </section>
  );
}