'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import SearchOverlay from '@/components/search/SearchOverlay'

const BromaSearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const categories = [
    {
      id: 1,
      name: 'COOKIES',
      image: '/images/cookies-category.jpg',
      alt: 'Assorted freshly baked cookies including chocolate chip, oatmeal, and sugar cookies arranged on a rustic wooden board'
    },
    {
      id: 2,
      name: 'CAKES',
      image: '/images/Zucchini-Bread-Cake-3.jpg',
      alt: 'Moist zucchini bread cake with cream cheese frosting, sliced to show the tender crumb texture'
    },
    {
      id: 3,
      name: 'BARS',
      image: '/images/bars-category.jpg',
      alt: 'Variety of dessert bars including lemon bars, brownies, and blondies cut into perfect squares'
    },
    {
      id: 4,
      name: 'MUFFINS',
      image: '/images/muffin-category.jpg',
      alt: 'Fresh blueberry muffins with golden tops and visible berries, displayed in paper liners'
    },
    {
      id: 5,
      name: 'PIES & TARTS',
      image: '/images/pies-category.jpg',
      alt: 'Elegant fruit tarts and pies with flaky crusts, featuring seasonal berries and custard fillings'
    },
    {
      id: 6,
      name: 'BROWNIES',
      image: '/images/brownies-category.jpg',
      alt: 'Rich, fudgy chocolate brownies with a crackly top, cut into generous squares and dusted with powdered sugar'
    }
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log('Searching for:', searchQuery)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, categories.length - 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, categories.length - 3)) % Math.max(1, categories.length - 3))
  }

  return (
    <>
      {/* SEARCH SECTION - Gray Background */}
      <section className="py-16 lg:py-20 bg-primary-25">
        <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Main Heading */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-nav font-bold text-neutral-900 mb-6 leading-tight whitespace-nowrap">
              Wanna visit? Search for whatever your heart desires!
            </h2>

            {/* Subheading */}
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-600 mb-8">
              I'M IN THE MOOD FOR...
            </p>

            {/* Compact Search Bar */}
            <div className="max-w-lg mx-auto">
              <div className="flex gap-4 items-center">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onClick={() => setIsSearchOpen(true)}
                    placeholder="Search here"
                    className="w-full px-6 py-3 text-sm placeholder-neutral-500 focus:outline-none bg-white border border-neutral-200 rounded-full focus:border-neutral-400 transition-colors duration-300 shadow-sm cursor-pointer"
                    readOnly
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="px-8 py-3 text-xs font-medium uppercase tracking-[0.1em] text-white rounded-full transition-colors duration-300 flex items-center shadow-sm"
                  style={{ backgroundColor: '#1C1917' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F0F0F'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1C1917'}
                >
                  <Search className="w-3 h-3 mr-1.5" />
                  SEARCH
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES SECTION - White Background */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {/* Categories Heading */}
            <h3 className="font-nav font-bold text-neutral-900 text-center mb-12" style={{ fontSize: '28px' }}>
              Or browse categories
            </h3>

            {/* Categories Carousel */}
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
                aria-label="Previous categories"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-700" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
                aria-label="Next categories"
              >
                <ChevronRight className="w-5 h-5 text-neutral-700" />
              </button>

              {/* Categories Grid */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
                >
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="flex-none w-1/3 md:w-1/4 lg:w-1/6 px-3"
                    >
                      <div className="text-center group cursor-pointer">
                        {/* Circular Image */}
                        <div className="aspect-square rounded-full mb-4 overflow-hidden group-hover:shadow-lg transition-shadow duration-300 relative">
                          <Image
                            src={category.image}
                            alt={category.alt}
                            fill
                            className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                            quality={85}
                          />
                        </div>

                        {/* Category Label */}
                        <p className="text-xs font-medium uppercase tracking-[0.1em] text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">
                          {category.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/menu"
              className="inline-block bg-neutral-900 text-white px-12 py-4 text-sm font-medium uppercase tracking-[0.1em] hover:bg-neutral-800 transition-colors duration-300 rounded-full"
            >
              VIEW FULL MENU
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Search Overlay */}
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  )
}

export default BromaSearchSection