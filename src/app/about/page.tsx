'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Heart, Leaf, Coffee } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Made every morning with care and attention to detail'
    },
    {
      icon: Leaf,
      title: 'Wholesome Ingredients',
      description: 'Organic and local ingredients whenever possible'
    },
    {
      icon: Coffee,
      title: 'Cozy Atmosphere',
      description: 'A peaceful space for calm and connection'
    },
    {
      icon: Heart,
      title: 'Handcrafted Love',
      description: 'Every item made with thoughtful attention and care'
    }
  ]

  return (
    <main className="min-h-screen bg-white pt-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-img.jpg"
            alt="April & Butter bakery interior showcasing our cozy, earth-toned atmosphere"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-8 tracking-wide text-white">
              APRIL & BUTTER
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-4xl mx-auto">
              Where earth-toned elegance meets handcrafted tradition — a sanctuary of soft textures, warm aromas, and timeless recipes that transform simple moments into cherished memories, one delicate pastry at a time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight text-neutral-900 mb-8">
              Our Story
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-neutral-700 leading-relaxed">
              <p className="text-lg md:text-xl font-light">
                Welcome to April & Butter, a cozy, earth-toned bakery where every detail is crafted with warmth, elegance, and a gentle touch of nostalgia. Nestled in a softly lit space adorned with natural textures, muted neutrals, and dried florals, our bakery blends timeless charm with a modern, minimalist spirit.
              </p>
              
              <p className="text-lg md:text-xl font-light">
                Here, buttery croissants, soft sponge cakes, and delicate pastries are made fresh daily — each one thoughtfully baked with wholesome ingredients and quiet love. The gentle aroma of vanilla, browned butter, and warm bread fills the air, inviting you to slow down and savor the moment.
              </p>
              
              <p className="text-lg md:text-xl font-light">
                Whether you're here for a morning latte and a honey scone or a box of pastel-iced cookies to gift someone dear, April & Butter is a space for softness, calm, and everyday beauty — a sweet escape from the noise, inspired by nature's subtle palette and the comfort of home.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-primary-25">
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight text-neutral-900 mb-8">
              Our Values
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-700 font-light max-w-2xl mx-auto">
              Every decision we make is guided by our commitment to quality, community, and creating moments of joy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <IconComponent className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="font-nav font-bold text-neutral-900 mb-3 text-lg">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 font-light leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight text-neutral-900 mb-8">
              Visit Us
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-700 font-light max-w-2xl mx-auto">
              Come experience the warmth yourself. We're here to welcome you with fresh pastries and genuine hospitality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Location & Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Location */}
              <div>
                <h3 className="font-nav font-bold text-neutral-900 mb-4 text-lg uppercase tracking-[0.1em]">
                  Find Us
                </h3>
                <div className="space-y-2">
                  <p className="text-neutral-900 font-medium">1604 Bali Indonesia</p>
                  <p className="text-neutral-600 font-light leading-relaxed">
                    Located in the heart of Bali's charming community, surrounded by natural beauty and tranquil vibes.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h3 className="font-nav font-bold text-neutral-900 mb-4 text-lg uppercase tracking-[0.1em]">
                  Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-900 font-medium">Monday - Friday</span>
                    <span className="text-neutral-600">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-900 font-medium">Saturday - Sunday</span>
                    <span className="text-neutral-600">8:00 AM - 6:00 PM</span>
                  </div>
                  <p className="text-neutral-600 font-light text-sm mt-4 leading-relaxed">
                    We recommend morning visits when our selection is at its freshest and fullest.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div>
                <h3 className="font-nav font-bold text-neutral-900 mb-4 text-lg uppercase tracking-[0.1em]">
                  Connect
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-neutral-900 font-medium">(503) 482-1234</p>
                    <p className="text-neutral-600 text-sm">Call for special orders or questions</p>
                  </div>
                  <div>
                    <p className="text-neutral-900 font-medium">hello@aprilandbutter.com</p>
                    <p className="text-neutral-600 text-sm">Email us your sweet requests</p>
                  </div>
                  <div>
                    <p className="text-neutral-900 font-medium">@aprilnbutter</p>
                    <p className="text-neutral-600 text-sm">Follow our daily bakery stories</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div>
                <h3 className="font-nav font-bold text-neutral-900 mb-4 text-lg uppercase tracking-[0.1em]">
                  Special Orders
                </h3>
                <p className="text-neutral-600 font-light leading-relaxed mb-6">
                  Planning something special? We love creating custom cakes and treats for your celebrations. Give us 48 hours notice and we'll craft something beautiful just for you.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/visit-us"
                className="inline-block bg-neutral-900 text-white px-10 py-4 text-sm font-medium uppercase tracking-[0.1em] hover:bg-neutral-800 transition-colors duration-300 rounded-full"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/menu"
                className="inline-block bg-transparent border-2 border-neutral-900 text-neutral-900 px-10 py-4 text-sm font-medium uppercase tracking-[0.1em] hover:bg-neutral-900 hover:text-white transition-colors duration-300 rounded-full"
              >
                View Our Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage