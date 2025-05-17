"use client";
import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "@/components/ui/OptimizedImage";

const MobileMockupShowcase = () => {
  const mockupImages = [
    "popular-items.png",
    "plain-items.png",
    "cart.png",
    // "place-order.png",
  ];

  // Configuration for each mockup: x, rotate, zIndex, yOffset
  const mockupConfig = [
    { x: -100, rotate: -15, zIndex: 1, yOffset: -80 },    // far left
    { x: 0, rotate: 0, zIndex: 3, yOffset: -110 },        // center front
    { x: 100, rotate: 15, zIndex: 2, yOffset: -80 },      // right
  ];

  return (
    <section className="bg-white overflow-hidden">
      <div className="relative h-[500px] w-full">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[160px]">
          {mockupImages.map((image, index) => {
            const { x, rotate, zIndex, yOffset } = mockupConfig[index];

            return (
              <motion.div
                key={index}
                className="absolute bottom-0"
                style={{
                  transformOrigin: "center bottom",
                  zIndex: zIndex,
                }}
                initial={{ 
                  opacity: 0,
                  x: 0,
                  y: 100,
                  rotate: 0
                }}
                whileInView={{ 
                  opacity: 1,
                  x: x,
                  y: yOffset,
                  rotate: rotate
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                <div className="w-[160px] h-[320px] bg-black rounded-[30px] border-[5px] border-black shadow-xl overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 h-3 bg-black rounded-b z-10" />
                  <OptimizedImage
                    folder="mockups"
                    src={image}
                    alt={`Mockup ${index + 1}`}
                    width={160}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobileMockupShowcase;
