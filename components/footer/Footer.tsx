'use client';

import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Info */}
        <div>
          <h3 className="text-3xl font-extrabold text-red-500"> EatX</h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Revolutionizing food operations with <span className="text-red-400 font-semibold">tech-driven</span> precision — from <span className="text-red-400">kitchen to customer</span>.
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4"> Our Solutions</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-red-400 transition-all">🔥 POS System</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition-all">📲 Online Ordering</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition-all">🚗 Rider Tracking</a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4"> Stay Connected</h3>
          <div className="flex space-x-4">
            <a href="mailto:info@example.com" className="text-gray-400 hover:text-red-400 transition-all">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" className="text-gray-400 hover:text-red-400 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-red-400 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-red-400 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
         © {new Date().getFullYear()} <span className='text-red-500'>EatX</span>. Serving innovation on every plate.
      </div>
    </footer>
  );
}
