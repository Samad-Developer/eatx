'use client';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string;
  isLeadership?: boolean;
  expertise?: string;
}

const team: TeamMember[] = [
  { id: 1, name: "Zia Uddin", role: "CEO & Co-Founder", photo: "samad.png", isLeadership: true, expertise: "Strategy, Innovation, Leadership" },
  { id: 2, name: "Nasir Mehmood", role: "Sales & Marketing", photo: "nasirbhai.png", isLeadership: true, expertise: "Strategy, Innovation, Leadership"},
  { id: 3, name: "Samad", role: "Frontend Developer", photo: "samad.png" },
  { id: 4, name: "Mohsin Zaidi", role: "Flutter Developer", photo: "samad.png" },
  { id: 5, name: "Ammar Khan", role: "Senior Backend Developer", photo: "samad.png" },
  { id: 6, name: "Yousaf Kafeel", role: "Support Manager", photo: "yousafbhai.png" },
];

export const OurTeam = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  const leadership = team.filter(member => member.isLeadership);
  const teamMembers = team.filter(member => !member.isLeadership);

  console.log('Leadership Team:', leadership);

  return (
    <section className="relative py-16 px-4 sm:px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 right-0 h-56 bg-gradient-to-r from-red-500/10 to-red-600/10 transform -skew-y-3"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
     <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-full text-sm font-medium inline-flex items-center">
              <span className="h-2 w-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Meet Our Team
            </div>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Leadership</span> & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800"> Team</span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Passionate professionals dedicated to delivering exceptional results through innovation and collaboration.
          </motion.p>
        </motion.div>

        {/* Leadership Section */}
       <div className="flex flex-wrap justify-center gap-10 mb-20">
  {leadership.map((member, index) => (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className={`
        group relative w-full max-w-xs bg-white/80 backdrop-blur-sm rounded-3xl 
        border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ring-2 ring-red-500/40
       
      `}
    >
      {/* Leadership badge */}
      <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
        Leadership
      </div>

      {/* Crown icon */}
     
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10 bg-red-600 p-2 rounded-full shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.3l3.95.78a1 1 0 01.64 1.57l-2.49 3.15 1.1 4.29a1 1 0 01-1.53 1.06L10 13.38l-3.67 2.4a1 1 0 01-1.53-1.06l1.1-4.29-2.49-3.15a1 1 0 01.64-1.57L9 4.32V3a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
   

      {/* Profile Image */}
      <div className="flex justify-center pt-10">
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <OptimizedImage
            folder='team-members'
            src={member.photo}
            alt={member.name}
            width={112}
            height={112}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Name & Role */}
      <div className="text-center mt-6 px-6 pb-4">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
          {member.name}
        </h3>
        <p className="text-gray-600 text-sm mt-1 font-medium">{member.role}</p>
      </div>

      {/* Expertise (optional, fallback if undefined) */}
      <div className="text-center text-xs text-gray-500 px-6 pb-2 italic">
        {member.expertise || 'Visionary leader with a passion for innovation'}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-3 mb-6 mt-4">
        {[Linkedin, Twitter, Mail].map((Icon, idx) => (
          <motion.a
            key={idx}
            href="#"
            className="bg-white p-2 rounded-full shadow hover:shadow-md group transition"
            whileHover={{
              scale: 1.1,
              backgroundColor: member.id === 1 ? '#FBBF24' : '#E5E7EB'
            }}
          >
            <Icon className="w-4 h-4 text-gray-600  transition-colors" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  ))}
</div>


        {/* Team Grid - Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative">
                <div className="h-36">
                  <OptimizedImage
                    folder='team-members'
                    src={member.photo}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="w-full h-full rounded-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                
                <div className="mt-3 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href="#"
                    className="bg-gray-100 p-1.5 rounded-full hover:bg-red-100 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <Github className="w-4 h-4 text-gray-600 hover:text-red-600" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-gray-100 p-1.5 rounded-full hover:bg-red-100 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <Linkedin className="w-4 h-4 text-gray-600 hover:text-red-600" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-gray-100 p-1.5 rounded-full hover:bg-red-100 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <Twitter className="w-4 h-4 text-gray-600 hover:text-red-600" />
                  </motion.a>
                </div>
              </div>
              
              {(member.name === "Ammar Khan" || member.name === "Mohsin Zaidi") && (
  <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-100 to-red-200 shadow-md rounded-full px-3 py-1 text-[11px] font-semibold text-red-700 flex items-center gap-1 animate-pulse">
    <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full"></span>
    <span>Expert</span>
  </div>
)}

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};