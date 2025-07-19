'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'

const MenuPage = () => {
  const menuItems = [
    {
      id: 1,
      category: 'COOKIES',
      name: 'Double Chocolate Chip Cookies',
      description: 'Rich, fudgy cookies with premium chocolate chips',
      price: '$3.50',
      availability: 'Available daily',
      image: '/images/Cookies.jpg',
      alt: 'Rich double chocolate chip cookies with melted chocolate chips, freshly baked and golden brown',
      organic: true,
      slug: 'double-chocolate-chip-cookies'
    },
    {
      id: 2,
      category: 'COOKIES',
      name: "S'mores Cookies",
      description: 'Graham cracker cookies with marshmallow and chocolate',
      price: '$4.00',
      availability: 'Available daily',
      image: '/images/cookies-2.jpg',
      alt: 'Gooey s\'mores cookies with graham cracker base, marshmallow, and chocolate layers',
      local: true,
      slug: 'smores-cookies'
    },
    {
      id: 3,
      category: 'COOKIES',
      name: 'Honey Almond Cookies',
      description: 'Delicate cookies with toasted almonds and wildflower honey',
      price: '$3.75',
      availability: 'Made to order',
      image: '/images/cookies-category.jpg',
      alt: 'Golden honey almond cookies topped with sliced almonds and drizzled with honey',
      organic: true,
      slug: 'honey-almond-cookies'
    },
    {
      id: 4,
      category: 'BARS',
      name: 'Chewy Funfetti Blondies',
      description: 'Vanilla blondies loaded with colorful sprinkles',
      price: '$4.25',
      availability: 'Available daily',
      image: '/images/Bars.jpg',
      alt: 'Colorful funfetti blondies with rainbow sprinkles throughout, cut into perfect squares',
      local: true,
      slug: 'chewy-funfetti-blondies'
    },
    {
      id: 5,
      category: 'BROWNIES',
      name: 'Fudgy Oreo Brownies',
      description: 'Decadent brownies swirled with crushed Oreos',
      price: '$4.50',
      availability: 'Available daily',
      image: '/images/brownies.jpg',
      alt: 'Rich, fudgy brownies topped with crushed Oreo cookies and chocolate drizzle',
      organic: true,
      slug: 'fudgy-oreo-brownies'
    },
    {
      id: 6,
      category: 'BARS',
      name: 'Lemon Bars',
      description: 'Tangy lemon curd on buttery shortbread crust',
      price: '$3.95',
      availability: 'Available daily',
      image: '/images/bars-category.jpg',
      alt: 'Bright yellow lemon bars with powdered sugar dusting on buttery shortbread base',
      local: true
    },
    {
      id: 7,
      category: 'CAKES',
      name: 'Vanilla Bean Sponge Cake',
      description: 'Light, airy cake with Madagascar vanilla',
      price: '$5.50',
      availability: 'Made to order',
      image: '/images/Zucchini-Bread-Cake-3.jpg',
      alt: 'Elegant vanilla sponge cake with light cream frosting and vanilla bean specks',
      organic: true
    },
    {
      id: 8,
      category: 'BREADS',
      name: 'Zucchini Bread Cake',
      description: 'Moist spiced cake with fresh zucchini',
      price: '$4.75',
      availability: 'Available daily',
      image: '/images/Zucchini-Bread-Cake-3.jpg',
      alt: 'Moist zucchini bread cake with cream cheese frosting, showing tender green-flecked crumb',
      local: true,
      organic: true
    },
    {
      id: 9,
      category: 'BREADS',
      name: 'Artisan Sourdough',
      description: 'Traditional long-fermented bread with crispy crust',
      price: '$6.00',
      availability: 'Made to order',
      image: '/images/muffin-category.jpg',
      alt: 'Rustic artisan sourdough loaf with golden crust and perfect scoring patterns',
      local: true
    },
    {
      id: 10,
      category: 'BEVERAGES',
      name: 'House Blend Coffee',
      description: 'Smooth medium roast from local roasters',
      price: '$2.75',
      availability: 'Available daily',
      image: '/images/pies-category.jpg',
      alt: 'Steaming cup of house blend coffee with latte art, served in ceramic mug',
      local: true
    }
  ]

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Page Header */}
      <section className="py-20 lg:py-28 bg-primary-25">
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <nav className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-600">
                <Link href="/" className="hover:text-primary-700 transition-colors duration-300">
                  Home
                </Link>
                <span className="mx-3">&gt;</span>
                <span className="text-primary-700">Menu</span>
              </nav>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[0.9] text-neutral-900 mb-6">
                Our Daily Menu
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-neutral-700 font-light max-w-2xl mx-auto">
                Baked fresh every morning with wholesome ingredients and quiet love
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Menu Grid Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {menuItems.map((item, index) => (
              <Link
                key={item.id}
                href={item.slug ? `/products/${item.slug}` : '#'}
                className="block h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer h-full"
                >
                {/* Menu Item Card */}
                <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-neutral-100 h-full flex flex-col">
                  
                  {/* Item Image */}
                  <div className="aspect-[4/3] relative overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={85}
                    />
                    
                    {/* Availability Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] rounded-full ${
                        item.availability === 'Available daily' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {item.availability}
                      </span>
                    </div>

                    {/* Ingredient Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-1">
                      {item.organic && (
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                          Organic
                        </span>
                      )}
                      {item.local && (
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-neutral-100 text-neutral-800 rounded-full">
                          Local
                        </span>
                      )}
                    </div>

                    {/* Price Overlay */}
                    <div className="absolute bottom-4 right-4">
                      <span className="inline-block px-3 py-2 bg-white/90 backdrop-blur-sm text-neutral-900 font-semibold rounded-full shadow-sm">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Item Info */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col">
                    {/* Category Tag */}
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700">
                      {item.category}
                    </p>
                    
                    {/* Divider Line */}
                    <div className="w-full h-px bg-neutral-200"></div>
                    
                    {/* Item Name */}
                    <h3 className="font-nav font-semibold text-neutral-900 leading-tight group-hover:text-primary-700 transition-colors duration-300 text-lg">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-neutral-600 leading-relaxed font-light flex-grow">
                      {item.description}
                    </p>
                  </div>
                </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 lg:py-28 bg-primary-25">
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight text-neutral-900 mb-8">
              Visit us to try these fresh daily
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl leading-relaxed text-neutral-700 font-light max-w-3xl mx-auto">
              Each morning, our bakers arrive before dawn to craft every item with love and care. Using only the finest ingredients sourced locally when possible, we create treats that bring warmth to your day and comfort to your soul. Come experience the magic of fresh-baked goodness in our cozy Bali sanctuary.
            </p>
          </motion.div>

          {/* Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-16">
            
            {/* Left Column - Visit Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Location */}
              <div>
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-primary-700 mr-3" />
                  <h3 className="font-nav font-bold text-neutral-900 uppercase tracking-[0.1em] text-sm">
                    Visit Our Bakery
                  </h3>
                </div>
                <div className="ml-8 space-y-2">
                  <p className="text-neutral-900 font-medium">1604 Bali Indonesia</p>
                  <p className="text-neutral-600 font-light text-sm leading-relaxed">
                    Nestled in the heart of Bali's vibrant community, our bakery welcomes you with the aroma of fresh-baked bread and the warmth of genuine hospitality.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Hours */}
              <div>
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-primary-700 mr-3" />
                  <h3 className="font-nav font-bold text-neutral-900 uppercase tracking-[0.1em] text-sm">
                    Opening Hours
                  </h3>
                </div>
                <div className="ml-8 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-900 font-medium">Monday - Friday</span>
                    <span className="text-neutral-600">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-900 font-medium">Saturday - Sunday</span>
                    <span className="text-neutral-600">8:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/visit-us"
                className="inline-block bg-neutral-900 text-white px-10 py-4 text-sm font-medium uppercase tracking-[0.1em] hover:bg-neutral-800 transition-colors duration-300 rounded-full"
              >
                Visit Our Bakery
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent border-2 border-neutral-900 text-neutral-900 px-10 py-4 text-sm font-medium uppercase tracking-[0.1em] hover:bg-neutral-900 hover:text-white transition-colors duration-300 rounded-full"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default MenuPage