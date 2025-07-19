'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [savedItems, setSavedItems] = useState<{ [key: string]: number }>({
    'double-chocolate-chip-cookies': 24,
    'chewy-funfetti-blondies': 18,
    'smores-cookies': 31,
    'fudgy-oreo-brownies': 29
  })

  // Recently viewed products
  const recentlyViewed = [
    {
      id: 1,
      name: 'Double Chocolate Chip Cookies',
      image: '/images/Cookies.jpg',
      slug: 'double-chocolate-chip-cookies',
      saves: savedItems['double-chocolate-chip-cookies'] || 0
    },
    {
      id: 2,
      name: 'Chewy Funfetti Blondies',
      image: '/images/Bars.jpg',
      slug: 'chewy-funfetti-blondies',
      saves: savedItems['chewy-funfetti-blondies'] || 0
    },
    {
      id: 3,
      name: 'S\'mores Cookies',
      image: '/images/cookies-2.jpg',
      slug: 'smores-cookies',
      saves: savedItems['smores-cookies'] || 0
    }
  ]

  // Related products
  const relatedProducts = [
    {
      id: 4,
      name: 'Fudgy Oreo Brownies',
      image: '/images/brownies.jpg',
      slug: 'fudgy-oreo-brownies',
      saves: savedItems['fudgy-oreo-brownies'] || 0
    },
    {
      id: 5,
      name: 'Vanilla Bean Sponge Cake',
      image: '/images/Zucchini-Bread-Cake-3.jpg',
      slug: 'vanilla-bean-sponge-cake',
      saves: 15
    },
    {
      id: 6,
      name: 'Lemon Bars',
      image: '/images/bars-category.jpg',
      slug: 'lemon-bars',
      saves: 22
    },
    {
      id: 7,
      name: 'Honey Almond Cookies',
      image: '/images/cookies-category.jpg',
      slug: 'honey-almond-cookies',
      saves: 19
    },
    {
      id: 8,
      name: 'Fresh Blueberry Muffins',
      image: '/images/muffin-category.jpg',
      slug: 'blueberry-muffins',
      saves: 12
    },
    {
      id: 9,
      name: 'Apple Cinnamon Pie',
      image: '/images/pies-category.jpg',
      slug: 'apple-cinnamon-pie',
      saves: 27
    }
  ]

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleSave = (slug: string) => {
    setSavedItems(prev => ({
      ...prev,
      [slug]: (prev[slug] || 0) + 1
    }))
  }

  const ProductCard = ({ product, delay = 0, size = 'large' }: { 
    product: any, 
    delay?: number,
    size?: 'small' | 'large'
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <Link href={`/products/${product.slug}`} onClick={onClose}>
        <div className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-neutral-100 ${
          size === 'small' ? 'p-3' : 'p-4'
        }`}>
          {/* Square Image */}
          <div className={`relative overflow-hidden rounded-md mb-3 ${
            size === 'small' ? 'aspect-square' : 'aspect-square'
          }`}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 25vw, 20vw"
              quality={85}
            />
          </div>
          
          {/* Product Info */}
          <div className="space-y-2">
            <h3 className={`font-medium text-neutral-900 leading-tight group-hover:text-primary-700 transition-colors duration-300 ${
              size === 'small' ? 'text-sm' : 'text-sm'
            }`}>
              {product.name}
            </h3>
            
            {/* Heart Icon with Save Count */}
            <div className="flex items-center justify-between">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleSave(product.slug)
                }}
                className="flex items-center space-x-1 text-neutral-500 hover:text-red-500 transition-colors duration-300"
              >
                <Heart className="w-4 h-4" />
                <span className="text-xs font-medium">{product.saves}</span>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Search Overlay */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ 
              type: 'spring',
              damping: 25,
              stiffness: 200,
              duration: 0.5
            }}
            className="fixed inset-x-0 bottom-0 top-20 bg-white z-50 overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-8"
              >
                <div className="relative max-w-2xl">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search our bakery..."
                    className="w-full pl-12 pr-4 py-4 text-lg border border-neutral-200 rounded-full focus:outline-none focus:border-primary-700 transition-colors duration-300"
                    autoFocus
                  />
                </div>
              </motion.div>

              {/* Recently Viewed Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-sm font-medium uppercase tracking-[0.1em] text-neutral-700 mb-6">
                  Recently Viewed
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recentlyViewed.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      delay={0.3 + index * 0.1}
                      size="large"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Related Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h2 className="text-sm font-medium uppercase tracking-[0.1em] text-neutral-700 mb-6">
                  Related
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {relatedProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      delay={0.5 + index * 0.05}
                      size="small"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Bottom Spacing */}
              <div className="h-8"></div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default SearchOverlay