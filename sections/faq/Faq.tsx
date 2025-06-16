"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function Faq() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How does your POS system integrate with online ordering?",
      answer: "Our POS system seamlessly syncs with our web ordering platform, automatically updating inventory, menu items, and orders in real-time across all channels."
    },
    {
      id: 2,
      question: "Can customers customize their orders through web ordering?",
      answer: "Yes, customers can fully customize meals with special instructions, ingredient substitutions, and dietary preferences just like they would in-store."
    },
    {
      id: 3,
      question: "What hardware do I need for your POS system?",
      answer: "Our system works with standard tablets, receipt printers, and cash drawers. We provide a full compatibility list and can recommend cost-effective setups."
    },
    {
      id: 4,
      question: "How secure is the payment processing?",
      answer: "All transactions are PCI-DSS compliant with end-to-end encryption. We support tokenization and never store sensitive payment data on your systems."
    },
    {
      id: 5,
      question: "Can I manage multiple locations from one dashboard?",
      answer: "Absolutely! Our centralized dashboard gives you real-time control over menus, pricing, staff permissions, and reporting across all locations."
    },
    {
      id: 6,
      question: "How quickly can I get set up?",
      answer: "Most restaurants are fully operational within 48 hours. We handle onboarding, menu migration, and staff training to ensure a smooth transition."
    }
  ];

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "30%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl border overflow-hidden  hover:shadow-xl transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <svg 
                    className={`w-6 h-6 ${activeId === faq.id ? 'text-red-600' : 'text-gray-400'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.2 },
                        opacity: { duration: 0.1 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}