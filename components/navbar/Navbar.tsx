'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import OptimizedImage from '../ui/OptimizedImage'

const navigation = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
]

const menuVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 1024) setMobileMenuOpen(false)
    }

    // Set initial value
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="fixed inset-x-0  top-[-2rem] md:top-0 z-50 flex items-center justify-center py-1 px-3 sm:px-0">
      <motion.nav
        initial={false}
        animate={mobileMenuOpen ? 'open' : 'closed'}
        className="overflow-hidden w-full max-w-2xl border rounded-2xl lg:rounded-full backdrop-blur-md bg-white/30 flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 py-3 mt-10"
      >
        <div className="flex items-center justify-between w-full">
          <motion.div
            className="text-orange-500 font-bold text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <OptimizedImage
                folder="eatx"
                src='eatx.png'
                alt={`eatx logo`}
                width={70}
                height={30}
                // className="w-full h-full object-cover"
              />
          </motion.div>

          {/* Mobile menu toggle button - hidden on desktop */}
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-700 lg:hidden"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>

          {/* Desktop navigation - always visible on desktop */}
          <div className="hidden lg:flex items-center  lg:justify-between space-x-4">
            <div className='flex items-center space-x-4'>
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>


           <div className='hidden lg:flex '>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="bg-red-600 text-white px-5 py-2.5 rounded-full text-center"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
        </div>

        {/* Mobile navigation - animated with framer motion */}
        <AnimatePresence>
          {mobileMenuOpen && !isDesktop && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={navVariants}
              className="flex flex-col items-center space-y-4 mt-6 lg:hidden"
            >
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  variants={menuVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={menuVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='ml-2 w-full'
              >
                <Link
                  href="#contact"
                  className="bg-orange-600 text-white px-5 py-2.5 rounded-full text-center block w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}