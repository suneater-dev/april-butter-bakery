'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const BromaStyleHero = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            {/* LEFT SIDE - Text Content */}
            <div className="flex items-center justify-center px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-lg space-y-8"
              >
                {/* Small Category Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 mb-8">
                    Fresh Daily
                  </p>
                </motion.div>

                {/* Large Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-[0.9] text-neutral-900 mb-8">
                    Artisan Bakery & Cozy Café
                  </h1>
                </motion.div>

                {/* Descriptive Paragraph */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <p className="text-lg md:text-xl leading-relaxed text-neutral-700 font-light mb-8">
                    Welcome to April & Butter — a warm embrace in bakery form, where every pastry tells a story of comfort and care. We're the peaceful pause in your busy day, the gentle sweetness you never knew you needed. Here, even simple moments feel special. We're not just in your neighborhood — we are your neighborhood's heart. And every day we get to serve you is our favorite part of what we do.
                  </p>
                </motion.div>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <Link
                    href="/visit-us"
                    className="inline-block bg-neutral-900 text-white px-12 py-4 text-sm font-medium uppercase tracking-[0.1em] hover:bg-neutral-800 transition-colors duration-300 rounded-full"
                  >
                    Visit Us Today
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT SIDE - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative min-h-[60vh] lg:min-h-screen overflow-hidden"
            >
              {/* Hero Image */}
              <Image
                src="/images/hero-bakery.jpg"
                alt="Cozy April & Butter bakery interior with warm lighting, natural textures, and freshly baked pastries"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />

              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>

              {/* Optional: Fallback placeholder (shows if image fails to load) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 -z-10">
                <div className="flex items-center justify-center h-full p-8">
                  <div className="text-center max-w-md">
                    <div className="w-32 h-32 bg-primary-400/50 rounded-full mx-auto mb-8 flex items-center justify-center">
                      <span className="text-6xl opacity-70">🏪</span>
                    </div>
                    <p className="text-primary-700 font-medium">
                      Place hero-bakery.jpg in public/images/
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BromaStyleHero