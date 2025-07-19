'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '1604 Bali Indonesia',
      description: 'Nestled in the heart of Bali\'s community'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '(503) 482-1234',
      description: 'For orders and inquiries'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@aprilandbutter.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Monday - Friday: 7AM - 7PM',
      description: 'Saturday - Sunday: 8AM - 6PM'
    }
  ]

  return (
    <main className="min-h-screen bg-white pt-20">
      
      {/* Page Header */}
      <section className="py-16 lg:py-20 bg-primary-25">
        <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight text-neutral-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-700 font-light">
              We'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-lg">
                <h2 className="text-2xl md:text-3xl font-display text-neutral-900 mb-8">
                  Send us a message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-green-800 mb-2">Message sent!</h3>
                    <p className="text-green-700 text-sm">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-full focus:outline-none transition-colors duration-300 ${
                          errors.name 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-neutral-200 focus:border-primary-700'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-full focus:outline-none transition-colors duration-300 ${
                          errors.email 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-neutral-200 focus:border-primary-700'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-full focus:outline-none focus:border-primary-700 transition-colors duration-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-300 resize-none ${
                          errors.message 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-neutral-200 focus:border-primary-700'
                        }`}
                        placeholder="Tell us about your inquiry, special orders, or just say hello..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-neutral-900 text-white px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] hover:bg-neutral-800 disabled:bg-neutral-400 transition-colors duration-300 rounded-full"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-display text-neutral-900 mb-8">
                  Visit our bakery
                </h2>
                <p className="text-neutral-600 font-light leading-relaxed mb-8">
                  Come experience the warmth of April & Butter in person. Our doors are open, and fresh pastries are waiting.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-primary-100 rounded-full p-3 flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-neutral-900 font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-neutral-600 text-sm font-light">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Pre-order Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-primary-25 rounded-lg p-6"
              >
                <h3 className="font-semibold text-neutral-900 mb-3">
                  Planning something special?
                </h3>
                <p className="text-neutral-700 font-light leading-relaxed">
                  Call us 24 hours ahead to pre-order your favorites! We love creating custom treats for birthdays, celebrations, and special moments.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage