"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Zap,
  CheckCircle,
  Clock,
  X,
  ArrowRight,
  ChevronRight,
  Smartphone,
  Server,
  Printer,
  BarChart3,
  AlertTriangle,
  CheckCheck,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Custom Badge Component
type CustomBadgeProps = {
  children: React.ReactNode
  variant?: "default" | "outline"
  className?: string
}

const CustomBadge = ({ children, variant = "default", className = "" }: CustomBadgeProps) => {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
  const variantClasses = {
    default: "bg-gray-100 text-gray-800",
    outline: "border border-rose-200 bg-white text-rose-500",
  }

  return <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>{children}</span>
}

export default function RestaurantAutomation() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("problem")

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("restaurant-automation")
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.8) {
        setIsVisible(true)
      }
    }
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="restaurant-automation"
      className="relative py-20 overflow-hidden "
    >
      {/* Background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -right-[30%] w-[70%] h-[70%] rounded-full  blur-3xl opacity-30"></div>
        <div className="absolute -bottom-[40%] -left-[30%] w-[70%] h-[70%] rounded-full bg-rose-50 blur-3xl opacity-30"></div>
        <div className="absolute top-[20%] left-[10%] w-4 h-4 bg-rose-300 rounded-full"></div>
        <div className="absolute top-[60%] right-[15%] w-6 h-6 bg-rose-200 rounded-full"></div>
        <div className="absolute bottom-[15%] left-[20%] w-8 h-8 bg-rose-100 rounded-full"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Optional Tagline Badge */}
            
    <span className="inline-block mb-6 px-4 py-1.5 bg-rose-100 text-rose-600 text-sm font-medium rounded-full">
      Restaurant Automation
    </span>
   

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="inline-block">
                Eliminate{' '}
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-transparent bg-clip-text">
                  Manual Order
                </span>{' '}
                Entry
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600">
              Transform your restaurant operations with seamless automation that saves time, reduces human errors, and boosts customer satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Main content - Problem/Solution Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="w-full">
            {/* Custom Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 rounded-full border bg-slate-100">
                <button
                  onClick={() => setActiveTab("problem")}
                  className={`inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === "problem"
                    ? "bg-gradient-to-r from-red-400 to-red-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  <AlertTriangle className="h-4 w-4" />
                  The Problem
                </button>
                <button
                  onClick={() => setActiveTab("solution")}
                  className={`inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === "solution"
                    ? "bg-gradient-to-r from-red-400 to-red-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  <Sparkles className="h-4 w-4" />
                  Our Solution
                </button>
              </div>

            </div>

            {/* Problem Tab Content */}
            {activeTab === "problem" && (
              <div className="mt-2">
                <div className="bg-white border rounded-3xl overflow-hidden ">
                  <div className="p-8 md:p-12 ">
                    <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                      <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">The Manual Order Entry Problem</h3>
                        <p className="text-slate-600 mb-6">
                          Restaurant staff waste valuable time manually entering online orders into their POS system,
                          leading to errors, delays, and frustrated customers.
                        </p>
                        {/* <div className="flex items-center text-rose-600 font-medium mb-8">
                          <Clock className="h-5 w-5 mr-2" />
                          <span>Average 2-3 minutes wasted per order</span>
                        </div> */}
                        <ul className="space-y-4">
                          {[
                            "Staff manually typing orders into POS",
                            "High risk of order errors and mistakes",
                            "Time wasted on data entry instead of service",
                            "Frustration during peak hours",
                            "Inconsistent order handling",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center mr-3">
                                <X className="h-3 w-3 text-rose-600" />
                              </div>
                              <span className="text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:w-1/2">
                        <div className="relative">
                          {/* Illustration of the problem */}
                          <div className="bg-slate-50 rounded-xl p-6 relative">
                            <div className="absolute -top-3 -right-3 bg-rose-100 text-rose-600 text-xs px-2 py-1 rounded-full">
                              15% Error Rate
                            </div>

                            {/* Restaurant staff struggling with orders */}
                            <div className="flex gap-4 mb-6">
                              <div className="w-1/3 bg-white p-3 rounded-lg ">
                                <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                                <div className="h-3 w-2/3 bg-slate-200 rounded mb-2"></div>
                                <div className="h-10 w-full bg-slate-200 rounded"></div>
                              </div>
                              <div className="w-1/3 bg-white p-3 rounded-lg ">
                                <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                                <div className="h-3 w-2/3 bg-slate-200 rounded mb-2"></div>
                                <div className="h-10 w-full bg-slate-200 rounded"></div>
                              </div>
                              <div className="w-1/3 bg-white p-3 rounded-lg ">
                                <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                                <div className="h-3 w-2/3 bg-slate-200 rounded mb-2"></div>
                                <div className="h-10 w-full bg-slate-200 rounded"></div>
                              </div>
                            </div>

                            {/* Manual entry visualization */}
                            <div className="flex items-center justify-center mb-6">
                              <div className="w-12 h-12 rounded-full bg-rose-200 flex items-center justify-center">
                                <Clock className="h-6 w-6 text-rose-600" />
                              </div>
                              <div className="mx-4 flex-1 h-2 bg-rose-200 relative">
                                <div className="absolute inset-0 bg-rose-200 animate-pulse"></div>
                              </div>
                              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                                <Server className="h-6 w-6 text-slate-400" />
                              </div>
                            </div>

                            {/* POS system mockup */}
                            <div className="bg-white rounded-lg p-4  border border-slate-100">
                              <div className="flex justify-between items-center mb-3">
                                <div className="text-sm font-medium text-slate-900">POS System</div>
                                <div className="text-xs text-slate-500">Manual Entry Required</div>
                              </div>
                              <div className="space-y-2 mb-3">
                                <div className="h-4 w-full bg-slate-100 rounded"></div>
                                <div className="h-4 w-full bg-slate-100 rounded"></div>
                                <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                              </div>
                              <div className="grid grid-cols-4 gap-2">
                                {[1, 2, 3, 4].map((i) => (
                                  <div key={i} className="h-8 bg-slate-100 rounded"></div>
                                ))}
                              </div>
                            </div>

                            {/* Time indicator */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-rose-600 text-white text-sm px-3 py-1 rounded-full">
                              2-3 minutes per order
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pain points */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          icon: <Clock className="h-6 w-6 text-rose-600" />,
                          title: "Time Waste",
                          description: "Staff spend hours each day on manual data entry instead of serving customers",
                        },
                        {
                          icon: <AlertTriangle className="h-6 w-6 text-rose-600" />,
                          title: "Order Errors",
                          description: "Manual entry leads to mistakes in orders, causing customer complaints",
                        },
                        {
                          icon: <BarChart3 className="h-6 w-6 text-rose-600" />,
                          title: "Lost Revenue",
                          description: "Slower service and errors result in fewer orders processed during peak hours",
                        },
                      ].map((item, index) => (
                        <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                          <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                            {item.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h4>
                          <p className="text-slate-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Solution Tab Content */}
            {activeTab === "solution" && (
              <div className="mt-2">
                <div className="bg-white rounded-3xl  overflow-hidden border ">
                  <div className="p-8 md:p-12 ">
                    <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                      <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">
                          The<span className="text-red-600"> EatX</span> Automation Solution
                        </h3>
                        <p className="text-slate-600 mb-6">
                          Our seamless integration automatically sends online orders directly to your POS system and
                          kitchen printer, eliminating manual entry completely.
                        </p>
                        {/* <div className="flex items-center text-rose-600 font-medium mb-8">
                          <Zap className="h-5 w-5 mr-2" />
                          <span>Instant processing with zero manual entry</span>
                        </div> */}
                        <ul className="space-y-4">
                          {[
                            "Online orders flow directly into POS",
                            "Zero manual data entry required",
                            "Orders print automatically in kitchen",
                            "Real-time synchronization",
                            "Consistent, error-free processing",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center mr-3">
                                <CheckCheck className="h-3 w-3 text-rose-600" />
                              </div>
                              <span className="text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:w-1/2">
                        <div className="relative">
                          {/* Before/After comparison in solution */}
                          <div className="  p-6 relative bg-slate-50 rounded-lg">
                            <div className="absolute -top-3 -right-3 bg-rose-600 text-white text-xs px-2 py-1 rounded-full">
                              100% Accuracy
                            </div>

                            {/* Before section (problem) */}
                            <div className="mb-6 p-4 bg-white  rounded-lg ">
                              <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-medium text-slate-700">Before EatX</div>
                                <div className="text-xs bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full">
                                  Manual Process
                                </div>
                              </div>
                              <div className="flex items-center justify-center mb-3">
                                <div className="w-8 h-8 rounded-full bg-rose-200 flex items-center justify-center">
                                  <Clock className="h-4 w-4 text-rose-600" />
                                </div>
                                <div className="mx-3 flex-1 h-1 bg-rose-200 relative">
                                  <div className="absolute inset-0 bg-rose-300 animate-pulse"></div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                                  <X className="h-4 w-4 text-black" />
                                </div>
                              </div>
                              <div className="text-xs text-center text-slate-500">2-3 minutes + 15% errors</div>
                            </div>

                            {/* After section (solution) */}
                            <div className="p-4 bg-white  rounded-lg">
                              <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-medium text-slate-900">After EatX</div>
                                <div className="text-xs bg-rose-600 text-white px-2 py-0.5 rounded-full">Automated</div>
                              </div>

                              {/* Automated flow visualization */}
                              <div className="flex gap-3 mb-4 ">
                                <div className="w-1/3 bg-white p-2 rounded-lg  border border-rose-100">
                                  <div className="flex items-center justify-center mb-1">
                                    <Smartphone className="h-4 w-4 text-rose-600" />
                                  </div>
                                  <div className="text-xs text-center text-slate-700">Online Order</div>
                                </div>
                                <div className="w-1/3 bg-white p-2 rounded-lg  border border-rose-100">
                                  <div className="flex items-center justify-center mb-1">
                                    <Server className="h-4 w-4 text-rose-600" />
                                  </div>
                                  <div className="text-xs text-center text-slate-700">POS System</div>
                                </div>
                                <div className="w-1/3 bg-white p-2 rounded-lg  border border-rose-100">
                                  <div className="flex items-center justify-center mb-1">
                                    <Printer className="h-4 w-4 text-rose-600" />
                                  </div>
                                  <div className="text-xs text-center text-slate-700">Kitchen</div>
                                </div>
                              </div>

                              {/* Automated flow arrows */}
                              <div className="flex items-center justify-center mb-3">
                                <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center">
                                  <Zap className="h-4 w-4 text-white" />
                                </div>
                                <div className="mx-3 flex-1 h-1 bg-rose-600 relative">
                                  <div className="absolute inset-0 bg-rose-500 animate-pulse"></div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center">
                                  <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                              </div>

                              <div className="text-xs text-center text-slate-700">0 seconds + 100% accuracy</div>
                            </div>

                            {/* Time indicator */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-rose-600 text-white text-sm px-3 py-1 rounded-full">
                              Instant Processing
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          icon: <Clock className="h-6 w-6 text-rose-600" />,
                          title: "Save Time",
                          description: "Eliminate 2-3 minutes of manual entry per order",
                        },
                        {
                          icon: <CheckCircle className="h-6 w-6 text-rose-600" />,
                          title: "100% Accuracy",
                          description: "Eliminate human error from the order process",
                        },
                        {
                          icon: <BarChart3 className="h-6 w-6 text-rose-600" />,
                          title: "Boost Revenue",
                          description: "Process 35% more orders during peak hours",
                        },
                      ].map((item, index) => (
                        <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                          <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                            {item.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h4>
                          <p className="text-slate-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div initial="hidden" animate={isVisible ? "show" : "hidden"} variants={container} className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">How <span className="text-red-600 italic font-extrabold">EatX</span> Works</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our seamless integration connects your online ordering platforms directly to your existing systems
            </p>
          </div>

          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-rose-100 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 gap-x-6 relative">
              {[
                {
                  icon: <Smartphone className="h-8 w-8 text-rose-600" />,
                  title: "Customer Orders",
                  description: "Orders placed through your website or third-party platforms",
                },
                {
                  icon: <Server className="h-8 w-8 text-rose-600" />,
                  title: "EatX Processing",
                  description: "Our system receives and validates the order instantly",
                },
                {
                  icon: <Server className="h-8 w-8 text-rose-600" />,
                  title: "POS Integration",
                  description: "Order is automatically sent to your existing POS system",
                },
                {
                  icon: <Printer className="h-8 w-8 text-rose-600" />,
                  title: "Kitchen Ready",
                  description: "Order ticket prints automatically in your kitchen",
                },
              ].map((step, index) => (
                <motion.div key={index} variants={item} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg border border-rose-100 flex items-center justify-center z-10">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <div className="inline-block bg-rose-100 text-rose-600 text-xs font-medium px-2 py-1 rounded-full mb-2">
                        Step {index + 1}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Mobile connection line */}
                  {index < 3 && <div className="absolute left-1/2 top-16 h-12 w-0.5 bg-rose-100 md:hidden"></div>}

                  {/* Desktop arrow */}
                  {index < 3 && (
                    <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 hidden lg:block">
                      <ChevronRight className="h-6 w-6 text-rose-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>




      </div>
    </section>
  )
}
