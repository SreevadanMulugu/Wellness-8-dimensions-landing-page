'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Mail, Phone, MapPin, Leaf, Flower2, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="about" className="relative bg-gradient-to-b from-[#fefbf5] via-[#f4fbf8] to-[#e6f6ff] text-wellness-canopy py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Doodles & Ambient Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 -translate-x-1/2 top-0 opacity-20"
        >
          <Image
            src="/doodles/swirl.svg"
            alt=""
            width={1000}
            height={400}
            className="opacity-20"
          />
        </motion.div>

        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.25, 0.1, 0.25],
              scale: [0, 1.1, 0.9, 1.1],
              y: [0, -20, -40, -20, 0],
              x: [0, Math.sin(i) * 15, Math.cos(i) * 15, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
            style={{
              top: `${10 + i * 8}%`,
              left: `${(i * 10) % 90 + 5}%`,
            }}
            className="absolute"
          >
            {i % 3 === 0 ? (
              <Leaf className="w-5 h-5 text-wellness-fern/20" />
            ) : i % 3 === 1 ? (
              <Flower2 className="w-4 h-4 text-wellness-sun/25" />
            ) : (
              <Sparkles className="w-5 h-5 text-wellness-dew/20" />
            )}
          </motion.div>
        ))}

        <motion.div
          className="absolute top-1/2 left-1/4 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-green-200/10 to-emerald-300/15 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-wellness-canopy">
              <Heart className="w-6 h-6 text-wellness-fern" />
              8 Dimensions of Wellness
            </h3>
            <p className="text-wellness-canopy/80 leading-relaxed">
              Empowering individuals to achieve holistic well-being through education, 
              awareness, and interactive experiences across all dimensions of wellness.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-wellness-canopy">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-wellness-canopy/70 hover:text-wellness-fern transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#compass" className="text-wellness-canopy/70 hover:text-wellness-fern transition-colors">
                  Compass
                </a>
              </li>
              <li>
                <a href="#journal" className="text-wellness-canopy/70 hover:text-wellness-fern transition-colors">
                  Journal
                </a>
              </li>
              <li>
                <a href="#resources" className="text-wellness-canopy/70 hover:text-wellness-fern transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-wellness-canopy">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-wellness-canopy/70">
                <Mail className="w-5 h-5 text-wellness-fern" />
                <span>info@8dimensionswellness.com</span>
              </li>
              <li className="flex items-center gap-3 text-wellness-canopy/70">
                <Phone className="w-5 h-5 text-wellness-fern" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-wellness-canopy/70">
                <MapPin className="w-5 h-5 text-wellness-fern" />
                <span>123 Wellness Street, Health City</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-wellness-canopy/20 pt-8 text-center text-wellness-canopy/70">
          <p>&copy; {new Date().getFullYear()} 8 Dimensions of Wellness. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with <Heart className="inline w-4 h-4 text-wellness-fern" /> for holistic well-being
          </p>
        </div>
      </div>
    </footer>
  )
}

