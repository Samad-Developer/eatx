"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import OptimizedImage from "@/components/ui/OptimizedImage";

const MobileMockupShowcase = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mockupImages = [
    "popular-items.png",
    "plain-items.png",
    "cart.png",
  ];

  // Responsive configuration using screen size breakpoints
  const getMockupConfig = (isMobile: boolean) => [
    {
      x: isMobile ? -60 : -90,
      rotate: isMobile ? -15 : -17,
      zIndex: 1,
      yOffset: isMobile ? -40 : -80,
      size:  120
    },
    {
      x: 0,
      rotate: 0,
      zIndex: 3,
      yOffset: isMobile ? -60 : -110,
      size: 140
    },
    {
      x: isMobile ? 60 : 90,
      rotate: isMobile ? 15 : 17,
      zIndex: 2,
      yOffset: isMobile ? -40 : -80,
      size: 120
    },
  ];

  return (
    <div className="relative flex items-center justify-center w-full min-h-[350px] md:min-h-[480px] overflow-hidden">
      {mockupImages.map((image, index) => {
        const config = getMockupConfig(isMobile)[index];

        return (
          <motion.div
            key={index}
            className="absolute bottom-0"
            style={{
              transformOrigin: "center bottom",
              zIndex: config.zIndex,
            }}
            initial={{
              opacity: 0,
              x: 0,
              y: 100,
              rotate: 0
            }}
            whileInView={{
              opacity: 1,
              x: config.x,
              y: config.yOffset,
              rotate: config.rotate
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <div className="w-[120px] h-[240px] bg-black rounded-[30px] border-[5px] border-black shadow-xl overflow-hidden sm:w-[140px] sm:h-[280px] md:w-[160px] md:h-[320px]">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 h-3 bg-black rounded-b z-10" />
              <OptimizedImage
                folder="mockups"
                src={image}
                alt={`Mockup ${index + 1}`}
                width={config.size}
                height={config.size * 2}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 140px, 160px"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MobileMockupShowcase;