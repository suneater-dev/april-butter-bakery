'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Clock, Users } from 'lucide-react'

// Product data
const products = {
  'double-chocolate-chip-cookies': {
    category: 'COOKIES',
    title: 'Double Chocolate Chip Cookies',
    rating: 4.8,
    reviews: 24,
    image: '/images/Cookies.jpg',
    alt: 'Rich double chocolate chip cookies with premium Belgian chocolate and chocolate chips, freshly baked and golden brown',
    description: 'Double the chocolate means double the joy! These rich, fudgy cookies are made with premium Belgian chocolate and loaded with chocolate chips. Every bite delivers the perfect balance of chewy texture and intense chocolate flavor that will transport you to pure bliss.',
    nutrition: {
      calories: 280,
      protein: '4g',
      fat: '14g',
      carbs: '36g',
      sugar: '22g',
      fiber: '3g'
    },
    price: '$3.50'
  },
  'chewy-funfetti-blondies': {
    category: 'BARS',
    title: 'Chewy Funfetti Blondies',
    rating: 4.7,
    reviews: 18,
    image: '/images/Bars.jpg',
    alt: 'Colorful funfetti blondies with rainbow sprinkles, brown butter and vanilla bean, cut into perfect squares',
    description: 'Celebrate every day with these delightfully chewy vanilla blondies bursting with colorful sprinkles! Made with brown butter and vanilla bean, these bars bring childhood joy to every bite. Perfect for sharing (but you might not want to!).',
    nutrition: {
      calories: 245,
      protein: '3g',
      fat: '11g',
      carbs: '34g',
      sugar: '24g',
      fiber: '1g'
    },
    price: '$4.25'
  },
  'smores-cookies': {
    category: 'COOKIES',
    title: 'S\'mores Cookies',
    rating: 4.9,
    reviews: 31,
    image: '/images/cookies-2.jpg',
    alt: 'Gooey s\'mores cookies with graham cracker base, marshmallows and chocolate chunks, capturing campfire magic',
    description: 'All the magic of campfire s\'mores in a perfectly baked cookie! Our graham cracker cookie base is topped with gooey marshmallows and rich chocolate chunks. No campfire required – just pure nostalgic deliciousness in every bite.',
    nutrition: {
      calories: 290,
      protein: '4g',
      fat: '12g',
      carbs: '42g',
      sugar: '26g',
      fiber: '2g'
    },
    price: '$4.00'
  },
  'fudgy-oreo-brownies': {
    category: 'BROWNIES',
    title: 'Fudgy Oreo Brownies',
    rating: 4.8,
    reviews: 29,
    image: '/images/brownies.jpg',
    alt: 'Ultra-fudgy brownies swirled with crushed Oreo cookies and topped with extra cookie pieces, rich and decadent',
    description: 'The ultimate indulgence! These ultra-fudgy brownies are swirled with crushed Oreo cookies and topped with extra cookie pieces. Rich, decadent, and impossibly moist – they\'re the perfect treat for serious chocolate lovers.',
    nutrition: {
      calories: 320,
      protein: '5g',
      fat: '16g',
      carbs: '40g',
      sugar: '28g',
      fiber: '3g'
    },
    price: '$4.50'
  }
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

const ProductPage = ({ params }: ProductPageProps) => {
  const product = products[params.slug as keyof typeof products]
  
  if (!product) {
    notFound()
  }

  // Generate star rating display
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      )
    }
    
    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50" />
      )
    }
    
    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-neutral-300" />
      )
    }
    
    return stars
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Add top padding to account for fixed header */}
      <div className="pt-20">
        
        {/* Breadcrumb Navigation */}
        <section className="py-6 bg-white border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <nav className="text-sm font-medium text-neutral-600">
              <Link href="/" className="hover:text-primary-700 transition-colors duration-300">
                Home
              </Link>
              <span className="mx-3">&gt;</span>
              <Link href="/menu" className="hover:text-primary-700 transition-colors duration-300">
                Menu
              </Link>
              <span className="mx-3">&gt;</span>
              <span className="text-primary-700">{product.title}</span>
            </nav>
          </div>
        </section>

        {/* Main Product Section - Broma Split Layout */}
        <section className="py-8 lg:py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* LEFT SIDE - Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-lg"
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
              </motion.div>

              {/* RIGHT SIDE - Product Details */}
              <div className="flex items-start justify-start py-4 lg:py-8">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full space-y-6"
                >
                  
                  {/* Category Tag */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-1">
                      {product.category}
                    </p>
                    <p className="text-xs text-neutral-500">
                      Available daily
                    </p>
                  </motion.div>

                  {/* Star Rating */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-neutral-600 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </motion.div>

                  {/* Product Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-display leading-tight text-neutral-900 mb-3">
                      {product.title}
                    </h1>
                    <p className="text-xl font-semibold text-primary-700">
                      {product.price}
                    </p>
                  </motion.div>

                  {/* Time Indicators */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex items-center space-x-4 text-sm text-neutral-600"
                  >
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Fresh daily</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>Serves 1-2</span>
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <p className="text-base leading-relaxed text-neutral-700 font-light">
                      {product.description}
                    </p>
                  </motion.div>

                  {/* Nutrition Information */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="bg-primary-25 rounded-lg p-4"
                  >
                    <h3 className="font-semibold text-neutral-900 mb-3 text-xs uppercase tracking-[0.1em]">
                      Nutrition Facts
                    </h3>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div className="text-center">
                        <p className="font-semibold text-neutral-900 text-sm">{product.nutrition.calories}</p>
                        <p className="text-neutral-600 text-xs">Calories</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-neutral-900 text-sm">{product.nutrition.protein}</p>
                        <p className="text-neutral-600 text-xs">Protein</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-neutral-900 text-sm">{product.nutrition.fat}</p>
                        <p className="text-neutral-600 text-xs">Fat</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-neutral-900 text-sm">{product.nutrition.carbs}</p>
                        <p className="text-neutral-600 text-xs">Carbs</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-neutral-900 text-sm">{product.nutrition.sugar}</p>
                        <p className="text-neutral-600 text-xs">Sugar</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-neutral-900 text-sm">{product.nutrition.fiber}</p>
                        <p className="text-neutral-600 text-xs">Fiber</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Order Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <Link
                      href="/visit-us"
                      className="inline-block bg-neutral-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-[0.1em] hover:bg-neutral-800 transition-colors duration-300 rounded-full w-full text-center"
                    >
                      Order Now
                    </Link>
                    <p className="text-center text-xs text-neutral-500 mt-2">
                      Available for pickup at our Bali location
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProductPage