"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CustomerReviews = () => {
  const [activeReview, setActiveReview] = useState(0);
  
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Owner, Bella Italia",
      content: "When our POS crashed during Saturday dinner rush, their support team had a technician at our door in 45 minutes. Saved our busiest night of the year!",
      avatar: "BG",
    },
    {
      name: "Michael Chen",
      role: "Manager, Dragon Wok",
      content: "Their support team walked me through a complex inventory issue at 2 AM when I was preparing for Chinese New Year. Couldn't have managed without them.",
      avatar: "MC",
    },
    {
      name: "Elena Rodriguez",
      role: "Owner, Café Buenos Aires",
      content: "After a flood damaged our equipment, their team was on-site the next morning with replacements. Their commitment is unmatched in the industry.",
      avatar: "ER",
    },
    {
      name: "David Thompson",
      role: "Operations Manager, Urban Grill",
      content: "The online ordering integration was seamless. Our sales increased by 30% in the first month after implementation. The support team was incredibly responsive.",
      avatar: "DT",
    },
    {
      name: "Priya Sharma",
      role: "CEO, Spice Route",
      content: "Their inventory management system saved us thousands in waste reduction. The support team trained our staff personally and is always available for questions.",
      avatar: "PS",
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Our <span className='text-red-600'>Customers</span> Say
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from restaurant owners who have transformed their operations with our solutions
          </motion.p>
        </div>

        {/* Desktop Reviews - Grid Layout */}
        <motion.div 
          className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-red-300 transition-colors"
              variants={item}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xl font-bold mr-4">
                  {review.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
                  <p className="text-gray-600">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">"{review.content}"</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Review Carousel */}
        <div className="md:hidden mb-12">
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            key={activeReview}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xl font-bold mr-4">
                {reviews[activeReview].avatar}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{reviews[activeReview].name}</h3>
                <p className="text-gray-600">{reviews[activeReview].role}</p>
              </div>
            </div>
            <div className="flex mb-4 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 italic">"{reviews[activeReview].content}"</p>
          </motion.div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReview(index)}
                className={`w-3 h-3 rounded-full ${activeReview === index ? 'bg-red-600' : 'bg-gray-300'}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

    

        
      </div>
    </section>
  );
};

export default CustomerReviews;