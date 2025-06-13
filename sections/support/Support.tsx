"use client";

import React from "react";
import { motion } from "framer-motion";

const supportItems = [
  {
    title: "Instant Help",
    description:
      "Our team is ready 24/7 via chat, call, or email to assist you in seconds.",
    icon: "📞",
  },
  {
    title: "Expert Problem Solvers",
    description:
      "Certified support specialists identify, analyze, and resolve issues fast.",
    icon: "🧠",
  },
  {
    title: "On-Site or Online",
    description:
      "Remote fixes or rapid on-site support — we’re where you need us to be.",
    icon: "🚗",
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "Before we close any ticket, we ensure everything is working perfectly.",
    icon: "✅",
  },
];

const timelineSteps = [
  {
    title: "Reach Out",
    description: "Contact us through chat, call, or email — anytime, anywhere.",
    icon: "📩",
  },
  {
    title: "Diagnosis",
    description: "We quickly assess and understand your issue for the fastest fix.",
    icon: "🔍",
  },
  {
    title: "Immediate Action",
    description: "Our team takes instant steps — remotely or by dispatching experts.",
    icon: "⚙️",
  },
  {
    title: "Final Resolution",
    description: "We confirm full resolution and your satisfaction before closing.",
    icon: "✅",
  },
];

const SupportSection = () => {
  return (
    <section className="relative bg-white py-28 overflow-hidden">
      <motion.div
        className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[140%] h-[140%] bg-red-100 opacity-30 rounded-full blur-3xl z-0"
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-red-500">
            Real Support, Real People
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            No bots. No wait. Just expert help when you need it most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-xl border border-gray-100 p-8 rounded-2xl relative overflow-hidden hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl bg-red-100 text-red-500 rounded-full w-12 h-12 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          className="mt-28 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl font-bold text-center text-red-500 mb-12">
            How It Works
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-red-200 z-0"></div>

            {timelineSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`relative mb-1 flex w-full items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="w-full md:w-1/2 px-2 z-10">
                    <div className="bg-white border border-gray-200 shadow-md rounded-xl p-5 relative">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-10 h-10 rounded-full bg-red-100 text-red-500 text-xl flex items-center justify-center">
                          {step.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>

                      <div
                        className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
                          isLeft ? "right-[-14px]" : "left-[-14px]"
                        }`}
                      >
                        <div className="w-5 h-5 rounded-full bg-red-500 border-[3px] border-white shadow-md"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="bg-red-50 mt-28 rounded-2xl p-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-3 text-gray-900">
            Need Help Right Now?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Don’t let tech trouble slow you down — let our team jump in and fix it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all">
              Talk to Support
            </button>
            <button className="border border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-6 py-3 rounded-xl font-semibold transition-all">
              Request On-site Visit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
