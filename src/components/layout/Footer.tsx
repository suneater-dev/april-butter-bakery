'use client'

import Link from 'next/link'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-800 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-accent text-primary-100 mb-3">
                  April & Butter
                </h3>
                <p className="text-primary-200 leading-relaxed max-w-md">
                  A cozy earth-toned bakery in the heart of Bali, where every detail is crafted with warmth and quiet love. Fresh pastries, wholesome ingredients, and peaceful moments await you daily.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="space-y-3">
                <p className="text-primary-300 font-medium">Follow our journey</p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/aprilnbutter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-200 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <span className="text-sm">@aprilnbutter</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-primary-100">Quick Links</h4>
              <nav className="space-y-3">
                <Link
                  href="/"
                  className="block text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/menu"
                  className="block text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Menu
                </Link>
                <Link
                  href="/visit-us"
                  className="block text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Visit Us
                </Link>
                <Link
                  href="/contact"
                  className="block text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Contact & Pre-Order
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-primary-100">Visit Us</h4>
              <div className="space-y-4 text-primary-200">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="leading-relaxed">
                      1604 Bali Indonesia<br />
                      Heart of Bali Community<br />
                      Tropical Paradise District
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-300 flex-shrink-0" />
                  <a 
                    href="tel:+15034821234"
                    className="hover:text-white transition-colors duration-300"
                  >
                    (503) 482-1234
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-300 flex-shrink-0" />
                  <a 
                    href="mailto:hello@aprilandbutter.com"
                    className="hover:text-white transition-colors duration-300"
                  >
                    hello@aprilandbutter.com
                  </a>
                </div>
              </div>

              {/* Hours Summary */}
              <div className="bg-primary-700/50 rounded-lg p-4">
                <p className="text-primary-100 font-medium mb-2">Hours Today</p>
                <p className="text-primary-200 text-sm">
                  Mon-Fri: 7AM-6PM<br />
                  Sat: 8AM-7PM • Sun: 8AM-5PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-primary-300">
              <p>© {currentYear} April & Butter Bakery. All rights reserved.</p>
              <div className="flex space-x-4">
                <span>Bali, Indonesia</span>
                <span>•</span>
                <span>Tropical Paradise District</span>
              </div>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-primary-300 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-300 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer