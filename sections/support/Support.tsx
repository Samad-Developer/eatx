"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import {
  PhoneCall,
  Brain,
  Car,
  CheckCircle,
  Mail,
  Search,
  Settings,
  ShieldCheck,
} from "lucide-react";

const supportItems = [
  {
    title: "Instant Help",
    description:
      "Our team is ready 24/7 via chat, call, or email to assist you in seconds.",
    icon: <PhoneCall className="w-6 h-6" />,
  },
  {
    title: "Expert Problem Solvers",
    description:
      "Certified support specialists identify, analyze, and resolve issues fast.",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "On-Site or Online",
    description:
      "Remote fixes or rapid on-site support — we’re where you need us to be.",
    icon: <Car className="w-6 h-6" />,
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "Before we close any ticket, we ensure everything is working perfectly.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

const timelineSteps = [
  {
    title: "Reach Out",
    description: "Contact us through chat, call, or email — anytime, anywhere.",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    title: "Diagnosis",
    description: "We quickly assess and understand your issue for the fastest fix.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: "Immediate Action",
    description: "Our team takes instant steps — remotely or by dispatching experts.",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    title: "Final Resolution",
    description: "We confirm full resolution and your satisfaction before closing.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];

type TimelineStepProps = {
  step: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  index: number;
  isLeft: boolean;
  scrollYProgress: MotionValue<number>;
};

const directions = [
  { x: -200, y: -100 }, // top-left
  { x: 200, y: -100 },  // top-right
  { x: -150, y: 150 },  // bottom-left
  { x: 150, y: 150 },   // bottom-right
];

const TimelineStep = ({
  step,
  index,
  isLeft,
  scrollYProgress,
}: TimelineStepProps) => {
  const from = directions[index % directions.length];

  // Come from random TO final place (0)
  const x = useTransform(scrollYProgress, [0.3, 0.7], [from.x, 0]);
  const y = useTransform(scrollYProgress, [0.3, 0.7], [from.y, 0]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <motion.div
      style={{ x, y, opacity }}
      className={`relative flex w-full items-center ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >
      <div className="w-full mb-2 md:w-1/2 sm:px-6 z-10">
        <div className="bg-white border border-gray-200 rounded-xl p-6 relative">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
              {step.icon}
            </div>
            <h4 className="text-lg font-semibold text-gray-800">{step.title}</h4>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {step.description}
          </p>
          <div
            className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
              isLeft ? "right-[-14px]" : "left-[-14px]"
            }`}
          >
            <div className="w-5 h-5 rounded-full bg-red-600 border-[2px] border-white shadow-md"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const SupportSection = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <motion.div
        className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[160%] h-[160%] opacity-10 rounded-full blur-3xl z-0"
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-center">
            Premium <span className="text-red-600">Support</span> For Your Business
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto text-center">
            We deliver real-time, human-powered help — from quick fixes to mission-critical support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border p-6 rounded-2xl hover:shadow-2xl transition-all text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mx-auto mb-4 text-red-600 bg-red-100 p-3 rounded-full w-fit">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 sm:mt-32 relative px-4 py-8 sm:p-10 rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl font-bold text-center text-black mb-5 sm:mb-16">
            Our Support <span className="italic text-red-600 font-extrabold">Process</span>
          </h3>

          <motion.div ref={timelineRef} className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-3 border-red-200 z-0"></div>

            {timelineSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <TimelineStep
                  key={index}
                  step={step}
                  index={index}
                  isLeft={isLeft}
                  scrollYProgress={scrollYProgress}
                />
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-red-50 mt-10 sm:mt-32 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Need Immediate Help?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Let our expert team take the pressure off — we’re just a click away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all">
              Talk to Support
            </button>
            <button className="border border-red-600 text-red-600 hover:cursor-pointer px-6 py-2.5 rounded-full font-semibold transition-all">
              Request On-site Visit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
