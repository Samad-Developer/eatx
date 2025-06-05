'use client';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string;
}

const team: TeamMember[] = [
  { id: 1, name: "Zia Uddin", role: "CEO & Co-Founder", photo: "/team/ali.jpg" },
  { id: 2, name: "Nasir Mehmood", role: "Sales & Marketing", photo: "/team/sana.jpg" },
  { id: 3, name: "Samad", role: "Frontend Developer", photo: "samad.png" },
  { id: 4, name: "Mohsin Zaidi", role: "Flutter Developer", photo: "/team/zoya.jpg" },
  { id: 5, name: "Ammar Khan", role: "Senior Backend-Developer", photo: "/team/zoya.jpg" },
  { id: 6, name: "Yousaf Kafeel", role: "Support Manager", photo: "/team/zoya.jpg" },
];

export const OurTeam = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <section className="relative py-20 px-6 sm:px-10  overflow-hidden">
      {/* Decorative SVG in bottom corner */}
      <svg
        className="absolute right-0 bottom-0 w-64 opacity-10 -z-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#DC2626" d="M41.3,-55.5C54.3,-46.1,65.3,-32.5,69.1,-17.7C72.9,-2.9,69.5,13.2,60.4,26.3C51.3,39.4,36.5,49.4,20.7,55.7C5,62,-11.7,64.7,-26.3,59.1C-40.9,53.4,-53.3,39.5,-59.6,23.9C-65.9,8.2,-66,-8.9,-58.7,-21.7C-51.5,-34.5,-36.9,-43.1,-22.1,-51C-7.3,-58.8,7.8,-65.9,22.8,-64.8C37.9,-63.7,52.8,-54.9,41.3,-55.5Z" transform="translate(100 100)" />
      </svg>

      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          className="text-center text-lg text-gray-600 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
        </motion.p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-red-200 border border-red-100 hover:border-red-500 p-6 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-red-100 group-hover:border-red-500 transition duration-300">
                <OptimizedImage
                  folder='team-members'
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
